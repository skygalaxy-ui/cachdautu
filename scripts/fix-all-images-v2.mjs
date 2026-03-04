// scripts/fix-all-images-v2.mjs
// Sửa ảnh cho TẤT CẢ bài viết - dùng publishedFilter() giống blog page
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://njchsjhdkcfaouqwyutc.supabase.co',
    'sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF'
);

// Same filter as blog page uses
function publishedFilter() {
    const now = new Date().toISOString();
    return `is_published.eq.true,and(scheduled_at.not.is.null,scheduled_at.lte.${now})`;
}

const VERIFIED_IMAGES = {
    'stock-market': ['photo-1611974789855-9c2a0a7236a3', 'photo-1535320903710-d993d3d77d29', 'photo-1642790106117-e829e14a795f', 'photo-1468254095679-bbcba94a7066', 'photo-1569025690938-a00729c9e1f3'],
    'crypto': ['photo-1621761191319-c6fb62004040', 'photo-1622630998477-20aa696ecb05', 'photo-1518546305927-5a555bb7020d', 'photo-1639762681485-074b7f938ba0', 'photo-1516245834210-c4c142787335'],
    'real-estate': ['photo-1560518883-ce09059eeffa', 'photo-1582407947304-fd86f028f716', 'photo-1570129477492-45c003edd2be', 'photo-1512917774080-9991f1c4c750', 'photo-1560185127-6ed189bf02f4'],
    'savings': ['photo-1579621970563-ebec7560ff3e', 'photo-1554224155-6726b3ff858f', 'photo-1604594849809-dfedbc827105', 'photo-1526304640581-d334cdbbf45e', 'photo-1450101499163-c8848c66ca85'],
    'bonds': ['photo-1454165804606-c3d57bc86b40', 'photo-1551288049-bebda4e38f71', 'photo-1460925895917-afdab827c52f', 'photo-1486406146926-c627a92ad1ab', 'photo-1444653614773-995cb1ef9efa'],
    'business': ['photo-1556761175-5973dc0f32e7', 'photo-1542744173-8e7e53415bb0', 'photo-1560472355-536de3962603', 'photo-1557804506-669a67965ba0', 'photo-1497366216548-37526070297c'],
    'investment': ['photo-1590283603385-17ffb3a7f29f', 'photo-1434626881859-194d67b2b86f', 'photo-1565373677928-90e963765bdc', 'photo-1559526324-593bc073d938', 'photo-1633158829585-23ba8f7c8caf'],
    'technology': ['photo-1518770660439-4636190af475', 'photo-1677442136019-21780ecad995', 'photo-1504868584819-f8e8b4b6d7e3', 'photo-1519389950473-47ba0277781c', 'photo-1485827404703-89b55fcc595e'],
    'personal-finance': ['photo-1554224155-6726b3ff858f', 'photo-1563013544-824ae1b704d3', 'photo-1450101499163-c8848c66ca85', 'photo-1521791136064-7986c2920216', 'photo-1579621970563-ebec7560ff3e'],
    'education': ['photo-1434030216411-0b793f4b4173', 'photo-1456513080510-7bf3a84b82f8', 'photo-1503676260728-1c00da094a0b', 'photo-1513475382585-d06e58bcb0e0', 'photo-1427504494785-3a9ca7044f45'],
    'gold': ['photo-1610375461246-83df859d849d', 'photo-1624365168968-f283d506c6b6', 'photo-1589656966895-2f33e7653819', 'photo-1573408301185-9146fe634ad0', 'photo-1559526324-593bc073d938'],
    'forex': ['photo-1611974789855-9c2a0a7236a3', 'photo-1642790106117-e829e14a795f', 'photo-1535320903710-d993d3d77d29', 'photo-1569025690938-a00729c9e1f3', 'photo-1468254095679-bbcba94a7066'],
};

function detectTopic(title, categorySlug) {
    const t = title.toLowerCase();
    if (categorySlug) {
        const catMap = {
            'chung-khoan': 'stock-market', 'crypto': 'crypto', 'bat-dong-san': 'real-estate',
            'tai-chinh-ca-nhan': 'personal-finance', 'trai-phieu': 'bonds', 'khoi-nghiep': 'business',
            'quy-dau-tu': 'investment', 'vang': 'gold', 'forex': 'forex',
            'dau-tu-thay-the': 'investment', 'kien-thuc-dau-tu': 'education', 'kinh-nghiem': 'education',
        };
        if (catMap[categorySlug]) return catMap[categorySlug];
    }
    const rules = [
        { keywords: ['etf', 'vn30', 'vnfin', 'quỹ chỉ số'], topic: 'stock-market' },
        { keywords: ['crypto', 'bitcoin', 'btc', 'altcoin', 'defi', 'blockchain', 'token', 'nft', 'staking'], topic: 'crypto' },
        { keywords: ['bất động sản', 'nhà đất', 'mua nhà', 'thuê nhà'], topic: 'real-estate' },
        { keywords: ['cổ phiếu', 'chứng khoán', 'vn-index', 'mở tài khoản', 'phân tích kỹ thuật'], topic: 'stock-market' },
        { keywords: ['trái phiếu', 'ytm', 'coupon', 'bond'], topic: 'bonds' },
        { keywords: ['startup', 'crowdfunding', 'gọi vốn', 'esop', 'khởi nghiệp'], topic: 'business' },
        { keywords: ['tiết kiệm', 'quỹ dự phòng', 'lãi suất', 'lãi kép'], topic: 'savings' },
        { keywords: ['thói quen', 'quản lý tài chính', 'chi tiêu', 'ngân sách', 'nợ', 'quy tắc', '50/30/20'], topic: 'personal-finance' },
        { keywords: ['ai ', 'công nghệ', 'fintech', 'robo'], topic: 'technology' },
        { keywords: ['buffett', 'kinh nghiệm', 'bài học', 'nguyên tắc', 'tâm lý', 'sai lầm'], topic: 'education' },
        { keywords: ['vàng', 'gold', 'kim loại quý'], topic: 'gold' },
        { keywords: ['forex', 'ngoại hối', 'tỷ giá'], topic: 'forex' },
        { keywords: ['đầu tư', 'rủi ro', 'danh mục', 'phân bổ', 'lợi nhuận', 'chiến lược', 'so sánh', 'kênh'], topic: 'investment' },
    ];
    for (const rule of rules) {
        if (rule.keywords.some(kw => t.includes(kw))) return rule.topic;
    }
    return 'investment';
}

function buildUrl(photoId) {
    return `https://images.unsplash.com/${photoId}?w=1200&h=630&fit=crop&q=80`;
}

async function main() {
    console.log('🔍 Quét TẤT CẢ bài viết đã xuất bản (dùng publishedFilter)...\n');

    // Use the SAME filter as the blog page to get all visible posts
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, featured_image, category_id, categories(slug)')
        .or(publishedFilter())
        .order('created_at', { ascending: false })
        .limit(500);

    if (error) { console.error('❌', error.message); return; }
    console.log(`📋 Tổng: ${posts.length} bài viết (đã xuất bản)\n`);

    // Check each image
    const needsFix = [];
    let okCount = 0;

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        process.stdout.write(`\r🔎 Kiểm tra ${i + 1}/${posts.length}...`);

        if (!post.featured_image || post.featured_image.trim() === '') {
            needsFix.push({ ...post, reason: 'missing' });
            continue;
        }
        try {
            const res = await fetch(post.featured_image, { method: 'HEAD' });
            if (!res.ok) {
                needsFix.push({ ...post, reason: `HTTP ${res.status}` });
            } else {
                okCount++;
            }
        } catch {
            needsFix.push({ ...post, reason: 'unreachable' });
        }
    }

    console.log(`\n\n✅ ${okCount} bài OK`);
    console.log(`⚠️ ${needsFix.length} bài cần sửa\n`);

    if (needsFix.length === 0) {
        console.log('🎉 Tất cả bài viết đều có ảnh hợp lệ!');
        return;
    }

    needsFix.slice(0, 10).forEach((p, i) => console.log(`  ${i + 1}. [${p.reason}] ${p.title.substring(0, 60)}`));
    if (needsFix.length > 10) console.log(`  ... và ${needsFix.length - 10} bài nữa`);
    console.log('');

    let success = 0, fail = 0;
    const topicCounters = {};

    for (let i = 0; i < needsFix.length; i++) {
        const post = needsFix[i];
        try {
            const catSlug = post.categories?.slug || '';
            const topic = detectTopic(post.title, catSlug);
            topicCounters[topic] = (topicCounters[topic] || 0);

            const images = VERIFIED_IMAGES[topic] || VERIFIED_IMAGES['investment'];
            const photoId = images[topicCounters[topic] % images.length];
            topicCounters[topic]++;

            console.log(`[${i + 1}/${needsFix.length}] ⬇️ [${topic}] ${post.title.substring(0, 45)}...`);

            const response = await fetch(buildUrl(photoId));
            if (!response.ok) throw new Error(`Download: ${response.status}`);

            const buffer = new Uint8Array(await response.arrayBuffer());
            const fileName = `posts/featured-${post.slug}.jpg`;

            const { error: uploadErr } = await supabase.storage
                .from('images')
                .upload(fileName, buffer, { contentType: 'image/jpeg', upsert: true });
            if (uploadErr) throw new Error(`Upload: ${uploadErr.message}`);

            const { data: { publicUrl } } = supabase.storage
                .from('images')
                .getPublicUrl(fileName);

            const { error: updateErr } = await supabase
                .from('posts')
                .update({ featured_image: publicUrl })
                .eq('id', post.id);
            if (updateErr) throw new Error(`DB: ${updateErr.message}`);

            success++;
            console.log(`  ✅ Done`);
            await new Promise(r => setTimeout(r, 300));
        } catch (err) {
            fail++;
            console.error(`  ❌ ${err.message}`);
        }
    }

    console.log('\n═══════════════════════════════════════');
    console.log(`📊 Kết quả: ✅ ${success} thành công | ❌ ${fail} thất bại`);
    console.log(`📊 Tổng có ảnh: ${okCount + success}/${posts.length}`);
    console.log('═══════════════════════════════════════');
}

main().catch(console.error);
