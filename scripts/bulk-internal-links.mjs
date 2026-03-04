import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Get all posts with categories
const { data: cats } = await s.from('categories').select('id, name, slug');
const catMap = {};
cats.forEach(c => { catMap[c.id] = c; });

const { data: allPosts } = await s.from('posts')
    .select('id, title, slug, content, category_id')
    .order('created_at');

// Build link map: keyword phrases → link destinations
// Each entry: { keywords: [...phrases to match], url, title }
const linkTargets = allPosts.map(p => {
    const cat = catMap[p.category_id];
    const url = `/blog/${cat?.slug || 'unknown'}/${p.slug}`;
    return { id: p.id, slug: p.slug, title: p.title, url, content: p.content };
});

// Define keyword → slug mappings for internal linking
const linkRules = [
    { patterns: ['đầu tư là gì', 'bắt đầu đầu tư', 'người mới bắt đầu đầu tư'], slug: 'dau-tu-la-gi-huong-dan-toan-dien' },
    { patterns: ['lãi kép', 'lãi suất kép', 'sức mạnh lãi kép'], slug: 'lai-kep-la-gi-suc-manh-lai-kep-dau-tu' },
    { patterns: ['DCA', 'bình quân giá', 'dollar cost averaging'], slug: 'chien-luoc-dca-binh-quan-gia' },
    { patterns: ['đa dạng hóa danh mục', 'danh mục đầu tư đa dạng'], slug: 'xay-dung-danh-muc-dau-tu-da-dang-hoa' },
    { patterns: ['quỹ khẩn cấp', 'quỹ dự phòng'], slug: 'quy-khan-cap-tai-sao-can-xay-dung' },
    { patterns: ['chứng khoán cho người mới', 'bắt đầu chứng khoán'], slug: 'dau-tu-chung-khoan-cho-nguoi-moi' },
    { patterns: ['ETF là gì', 'quỹ ETF'], slug: 'etf-la-gi-huong-dan-dau-tu-quy-etf' },
    { patterns: ['phân tích kỹ thuật', 'chỉ báo kỹ thuật'], slug: 'phan-tich-ky-thuat-chung-khoan' },
    { patterns: ['đầu tư vàng', 'mua vàng'], slug: 'dau-tu-vang-kenh-tru-an-an-toan' },
    { patterns: ['crypto cho người mới', 'đầu tư bitcoin'], slug: 'dau-tu-bitcoin-crypto-cho-nguoi-moi' },
    { patterns: ['forex là gì', 'giao dịch ngoại hối'], slug: 'forex-la-gi-huong-dan-giao-dich-ngoai-hoi-cho-nguoi-moi' },
    { patterns: ['quy tắc 50/30/20', '50-30-20'], slug: 'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan' },
    { patterns: ['lạm phát'], slug: 'lam-phat-la-gi-tac-dong-bao-ve-tai-san' },
    { patterns: ['so sánh kênh đầu tư', 'các kênh đầu tư'], slug: 'so-sanh-kenh-dau-tu-pho-bien' },
    { patterns: ['tiết kiệm tiền', 'cách tiết kiệm'], slug: 'cach-tiet-kiem-tien-hieu-qua-nguoi-tre' },
    { patterns: ['bất động sản'], slug: 'dau-tu-bat-dong-san-2026-uu-nhuoc-diem' },
    { patterns: ['báo cáo tài chính', 'đọc báo cáo'], slug: 'cach-doc-bao-cao-tai-chinh-doanh-nghiep' },
    { patterns: ['mở tài khoản chứng khoán'], slug: 'huong-dan-mo-tai-khoan-chung-khoan-online-2026' },
    { patterns: ['thuế đầu tư', 'thuế tncn'], slug: 'thue-dau-tu-viet-nam-2026-huong-dan' },
    { patterns: ['Warren Buffett'], slug: 'kinh-nghiem-dau-tu-warren-buffett-10-nguyen-tac' },
    { patterns: ['tâm lý giao dịch', 'sai lầm cảm xúc'], slug: 'tam-ly-giao-dich-sai-lam-cam-xuc' },
    { patterns: ['REITs'], slug: 'reits-la-gi-dau-tu-bat-dong-san-von-nho' },
    { patterns: ['P2P', 'cho vay ngang hàng'], slug: 'p2p-lending-la-gi-co-hoi-rui-ro' },
    { patterns: ['FIRE', 'nghỉ hưu sớm'], slug: 'fire-movement-nghi-huu-som-tuoi-40' },
    { patterns: ['phân bổ tài sản theo độ tuổi', 'phân bổ theo tuổi'], slug: 'phan-bo-tai-san-theo-do-tuoi-quy-tac' },
    { patterns: ['rủi ro danh mục', 'quản lý rủi ro'], slug: 'quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua' },
    { patterns: ['10 sai lầm', 'sai lầm phổ biến khi đầu tư'], slug: '10-sai-lam-pho-bien-khi-dau-tu-cach-tranh' },
];

// Build URL lookup
const urlLookup = {};
linkTargets.forEach(p => { urlLookup[p.slug] = p.url; });

let totalUpdated = 0;
let totalLinksAdded = 0;

for (const post of allPosts) {
    let content = post.content || '';
    if (!content || content.length < 100) continue; // skip truly empty posts

    // Check if already has internal links
    const existingLinks = (content.match(/\[([^\]]+)\]\(\/blog\/[^)]+\)/g) || []).length;
    if (existingLinks >= 3) continue; // already has enough links

    let linksAdded = 0;
    const addedSlugs = new Set();

    for (const rule of linkRules) {
        if (linksAdded >= 4) break; // max 4 links to add per post
        if (rule.slug === post.slug) continue; // don't link to self
        if (addedSlugs.has(rule.slug)) continue;

        const url = urlLookup[rule.slug];
        if (!url) continue;

        for (const pattern of rule.patterns) {
            if (linksAdded >= 4) break;

            // Check if pattern exists in content AND is not already a link
            const patternLower = pattern.toLowerCase();
            const contentLower = content.toLowerCase();

            if (!contentLower.includes(patternLower)) continue;

            // Check if already linked
            const linkPattern = `[${pattern}](${url})`;
            if (content.includes(url)) continue;

            // Find the FIRST occurrence that is NOT inside an existing markdown link
            const idx = contentLower.indexOf(patternLower);
            if (idx === -1) continue;

            // Check: is this inside an existing []() link?
            const before = content.substring(Math.max(0, idx - 100), idx);
            if (before.includes('[') && !before.includes(']')) continue; // inside a link text

            // Simple replacement: only first occurrence
            const original = content.substring(idx, idx + pattern.length);
            content = content.substring(0, idx) + `[${original}](${url})` + content.substring(idx + pattern.length);

            linksAdded++;
            addedSlugs.add(rule.slug);
            break; // move to next rule
        }
    }

    if (linksAdded > 0) {
        // Add a "Bài viết liên quan" section if not present
        if (!content.includes('Bài viết liên quan') && !content.includes('Đọc thêm')) {
            // Find related posts in same category
            const relatedPosts = linkTargets
                .filter(p => p.category_id === post.category_id && p.id !== post.id && p.content && p.content.length > 200)
                .slice(0, 3);

            if (relatedPosts.length > 0) {
                const relatedSection = '\n\n## Bài viết liên quan\n\n' +
                    relatedPosts.map(p => `- [${p.title}](${p.url})`).join('\n');

                // Insert before the disclaimer if exists
                if (content.includes('---\n\n*Bài viết chỉ mang tính')) {
                    content = content.replace('---\n\n*Bài viết chỉ mang tính', relatedSection + '\n\n---\n\n*Bài viết chỉ mang tính');
                } else {
                    content += relatedSection;
                }
                linksAdded += relatedPosts.length;
            }
        }

        const { error } = await s.from('posts').update({
            content,
            updated_at: new Date().toISOString()
        }).eq('id', post.id);

        if (error) {
            console.log(`❌ ${post.slug}: ${error.message}`);
        } else {
            totalUpdated++;
            totalLinksAdded += linksAdded;
        }
    }
}

console.log(`\n✅ Updated ${totalUpdated} bài với internal links`);
console.log(`🔗 Tổng links đã thêm: ${totalLinksAdded}`);
