import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

// Load .env.local
try {
    const envContent = readFileSync('.env.local', 'utf-8');
    envContent.split('\n').forEach(line => {
        const [key, ...vals] = line.split('=');
        if (key && vals.length) process.env[key.trim()] = vals.join('=').trim();
    });
} catch (e) {
    console.error('Cannot read .env.local');
    process.exit(1);
}

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Keywords mapping - analyze post titles to determine best category
// These are Vietnamese keywords related to each category
const CATEGORY_KEYWORDS = {
    'tin-tuc': [
        'tin tức', 'tin', 'thị trường', 'biến động', 'tăng', 'giảm', 'sụt',
        'kỷ lục', 'cập nhật', 'diễn biến', 'tuần', 'ngày', 'tháng', 'năm',
        'fed', 'lãi suất', 'gdp', 'lạm phát', 'kinh tế', 'vĩ mô',
        'sự kiện', 'khủng hoảng', 'triển vọng', 'dự báo', 'xu hướng',
        'trend', 'following', 'trendline', 'đường', 'rsi', 'macd',
        'fibonacci', 'bollinger', 'indicator', 'chỉ báo'
    ],
    'phan-tich': [
        'phân tích', 'so sánh', 'đánh giá', 'chiến lược', 'kỹ thuật',
        'cơ bản', 'mô hình', 'biểu đồ', 'chart', 'pattern', 'nến',
        'candlestick', 'support', 'resistance', 'hỗ trợ', 'kháng cự',
        'breakout', 'breakdown', 'reversal', 'đảo chiều', 'momentum',
        'volume', 'khối lượng', 'divergence', 'phân kỳ', 'hội tụ',
        'scalping', 'swing', 'position', 'day trading', 'giao dịch trong ngày',
        'quản lý vốn', 'risk', 'rủi ro', 'lệnh', 'stop loss',
        'take profit', 'trailing', 'margin', 'đòn bẩy', 'leverage'
    ],
    'review-san': [
        'review', 'đánh giá sàn', 'sàn giao dịch', 'broker', 'nền tảng',
        'exness', 'xm', 'ic markets', 'pepperstone', 'fxpro', 'oanda',
        'avatrade', 'fbs', 'octafx', 'tickmill', 'roboforex', 'etoro',
        'binance', 'bybit', 'okx', 'coinbase', 'kraken', 'mexc',
        'sàn forex', 'sàn crypto', 'sàn uy tín', 'spread', 'nạp rút',
        'phí giao dịch', 'commission', 'deposit', 'withdrawal', 'mt4', 'mt5',
        'ctrader', 'tradingview', 'ứng dụng', 'app', 'tài khoản demo',
        'khuyến mãi', 'bonus', 'chương trình'
    ],
    'kien-thuc': [
        'kiến thức', 'cơ bản', 'cho người mới', 'bắt đầu', 'là gì',
        'khái niệm', 'thuật ngữ', 'giải thích', 'hướng dẫn cơ bản',
        'tổng quan', 'giới thiệu', 'abc', 'a-z', 'từ a đến z',
        'nguyên lý', 'hoạt động', 'cách thức', 'bản chất'
    ],
    'huong-dan': [
        'hướng dẫn', 'cách', 'bước', 'thủ thuật', 'mẹo', 'tip',
        'tutorial', 'đăng ký', 'mở tài khoản', 'cài đặt', 'setup',
        'thiết lập', 'sử dụng', 'thao tác'
    ]
};

async function main() {
    console.log('🔄 Fetching categories...');
    const { data: categories, error: catErr } = await supabase
        .from('categories')
        .select('*')
        .order('name');

    if (catErr || !categories) {
        console.error('❌ Error fetching categories:', catErr?.message);
        return;
    }

    console.log('\n📂 Available categories:');
    categories.forEach(c => console.log(`  - ${c.name} (${c.slug}) [ID: ${c.id}]`));

    // Create slug-to-id map
    const slugToId = {};
    categories.forEach(c => { slugToId[c.slug] = c.id; });

    console.log('\n🔄 Fetching all posts...');
    const { data: posts, error: postErr } = await supabase
        .from('posts')
        .select('id, title, slug, category_id, excerpt')
        .order('created_at', { ascending: true });

    if (postErr || !posts) {
        console.error('❌ Error fetching posts:', postErr?.message);
        return;
    }

    console.log(`📝 Found ${posts.length} posts total\n`);

    // Count current distribution
    const currentDist = {};
    categories.forEach(c => { currentDist[c.name] = 0; });
    posts.forEach(p => {
        const cat = categories.find(c => c.id === p.category_id);
        if (cat) currentDist[cat.name]++;
        else currentDist['[No Category]'] = (currentDist['[No Category]'] || 0) + 1;
    });

    console.log('📊 CURRENT distribution:');
    Object.entries(currentDist).forEach(([name, count]) => {
        console.log(`  ${name}: ${count}`);
    });

    // Determine best category for each post based on title + excerpt
    function scoreCategoryForPost(post, catSlug) {
        const keywords = CATEGORY_KEYWORDS[catSlug];
        if (!keywords) return 0;

        const text = `${post.title} ${post.excerpt || ''}`.toLowerCase();
        let score = 0;
        for (const kw of keywords) {
            if (text.includes(kw.toLowerCase())) {
                score += kw.length; // Longer keyword matches = higher score
            }
        }
        return score;
    }

    // Assign posts to categories
    const assignments = [];
    const targetCats = ['tin-tuc', 'phan-tich', 'review-san', 'kien-thuc', 'huong-dan'];
    const catCounts = {};
    targetCats.forEach(s => { catCounts[s] = 0; });

    // First pass: score each post for each category
    const scoredPosts = posts.map(post => {
        const scores = {};
        targetCats.forEach(catSlug => {
            scores[catSlug] = scoreCategoryForPost(post, catSlug);
        });
        return { post, scores };
    });

    // Sort by max score descending (most confident assignments first)
    scoredPosts.sort((a, b) => {
        const maxA = Math.max(...Object.values(a.scores));
        const maxB = Math.max(...Object.values(b.scores));
        return maxB - maxA;
    });

    // Target: even distribution
    const targetPerCat = Math.ceil(posts.length / targetCats.length);
    const maxPerCat = targetPerCat + 2; // Allow slight overflow

    for (const { post, scores } of scoredPosts) {
        // Get categories sorted by score (best match first)
        const ranked = targetCats
            .map(slug => ({ slug, score: scores[slug] }))
            .sort((a, b) => b.score - a.score);

        let assigned = false;
        for (const { slug } of ranked) {
            if (catCounts[slug] < maxPerCat) {
                const catId = slugToId[slug];
                if (catId && catId !== post.category_id) {
                    assignments.push({
                        postId: post.id,
                        postTitle: post.title,
                        oldCatId: post.category_id,
                        newCatSlug: slug,
                        newCatId: catId
                    });
                } else if (catId) {
                    // Already in correct category
                }
                catCounts[slug]++;
                assigned = true;
                break;
            }
        }

        // If all top categories full, assign to least populated
        if (!assigned) {
            const leastPopulated = targetCats.reduce((min, slug) =>
                catCounts[slug] < catCounts[min] ? slug : min
            );
            const catId = slugToId[leastPopulated];
            if (catId && catId !== post.category_id) {
                assignments.push({
                    postId: post.id,
                    postTitle: post.title,
                    oldCatId: post.category_id,
                    newCatSlug: leastPopulated,
                    newCatId: catId
                });
            }
            catCounts[leastPopulated]++;
        }
    }

    console.log(`\n🔀 Will reassign ${assignments.length} posts:`);
    assignments.forEach(a => {
        const oldCat = categories.find(c => c.id === a.oldCatId);
        const newCat = categories.find(c => c.id === a.newCatId);
        console.log(`  "${a.postTitle.substring(0, 50)}..."`);
        console.log(`    ${oldCat?.name || '?'} → ${newCat?.name || a.newCatSlug}`);
    });

    console.log('\n📊 NEW distribution (target):');
    Object.entries(catCounts).forEach(([slug, count]) => {
        const cat = categories.find(c => c.slug === slug);
        console.log(`  ${cat?.name || slug}: ${count}`);
    });

    // Execute updates
    console.log('\n⏳ Executing updates...');
    let success = 0;
    let failed = 0;

    for (const a of assignments) {
        const { error } = await supabase
            .from('posts')
            .update({ category_id: a.newCatId })
            .eq('id', a.postId);

        if (error) {
            console.error(`  ❌ Failed: "${a.postTitle.substring(0, 40)}": ${error.message}`);
            failed++;
        } else {
            success++;
        }
    }

    console.log(`\n✅ Done! ${success} updated, ${failed} failed`);

    // Verify final distribution
    console.log('\n🔍 Verifying final distribution...');
    const { data: verifyPosts } = await supabase
        .from('posts')
        .select('category_id, categories(name, slug)')
        .or('is_published.eq.true,and(scheduled_at.not.is.null,scheduled_at.lte.' + new Date().toISOString() + ')');

    const finalDist = {};
    (verifyPosts || []).forEach(p => {
        const name = p.categories?.name || '[No Category]';
        finalDist[name] = (finalDist[name] || 0) + 1;
    });

    console.log('\n📊 FINAL verified distribution:');
    Object.entries(finalDist).sort((a, b) => b[1] - a[1]).forEach(([name, count]) => {
        const bar = '█'.repeat(count);
        console.log(`  ${name.padEnd(15)} ${String(count).padStart(3)} ${bar}`);
    });
}

main().catch(console.error);
