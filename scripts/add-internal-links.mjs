import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Get all posts with categories
const { data: posts } = await s.from('posts').select('id, slug, title, content, category_id, categories(slug, name)');

// Build category → posts map for finding related posts
const catPosts = {};
for (const p of posts || []) {
    const catSlug = p.categories?.slug || 'uncategorized';
    if (!catPosts[catSlug]) catPosts[catSlug] = [];
    catPosts[catSlug].push(p);
}

// Related post mapping (manually curated for best relevance)
const relatedMap = {
    'dau-tu-la-gi-huong-dan-toan-dien': ['nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh', 'top-10-kenh-dau-tu-pho-bien-viet-nam-2026'],
    'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh': ['dau-tu-la-gi-huong-dan-toan-dien', 'top-10-kenh-dau-tu-pho-bien-viet-nam-2026'],
    'top-10-kenh-dau-tu-pho-bien-viet-nam-2026': ['nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh', 'dau-tu-la-gi-huong-dan-toan-dien'],
    'cach-dau-tu-chung-khoan-nguoi-moi-2026': ['cach-doc-bang-gia-chung-khoan-nguoi-moi', 'phan-tich-ky-thuat-chung-khoan'],
    'phan-tich-ky-thuat-chung-khoan': ['cach-dau-tu-chung-khoan-nguoi-moi-2026', 'co-phieu-tang-truong-vs-gia-tri'],
    'chien-luoc-dca-binh-quan-gia': ['lai-kep-la-gi-suc-manh-lai-kep-dau-tu', 'dau-tu-quy-mo-tai-viet-nam-2026'],
    'lai-kep-la-gi-suc-manh-lai-kep-dau-tu': ['chien-luoc-dca-binh-quan-gia', 'cach-tiet-kiem-tien-hieu-qua-nguoi-tre'],
    'so-sanh-gui-tiet-kiem-vs-dau-tu-2026': ['lai-suat-ngan-hang-2026-so-sanh', 'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan'],
    'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan': ['cach-tiet-kiem-tien-hieu-qua-nguoi-tre', 'fire-movement-nghi-huu-som-tuoi-40'],
    'top-5-sai-lam-dau-tu-chung-khoan': ['tam-ly-giao-dich-sai-lam-cam-xuc', 'cach-dau-tu-chung-khoan-nguoi-moi-2026'],
    'dau-tu-bat-dong-san-2026-uu-nhuoc-diem': ['reits-la-gi-dau-tu-bat-dong-san-von-nho', 'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh'],
    'bitcoin-la-gi-huong-dan-dau-tu-btc': ['bitcoin-halving-la-gi-tac-dong-gia-btc', 'stablecoin-la-gi-usdt-usdc-vai-tro'],
    'stablecoin-la-gi-usdt-usdc-vai-tro': ['bitcoin-la-gi-huong-dan-dau-tu-btc', 'forex-vs-crypto-so-sanh-chi-tiet'],
    'etf-la-gi-huong-dan-dau-tu-quy-etf': ['dau-tu-quy-mo-tai-viet-nam-2026', 'chien-luoc-dca-binh-quan-gia'],
    'cach-doc-bang-gia-chung-khoan-nguoi-moi': ['cach-dau-tu-chung-khoan-nguoi-moi-2026', 'cac-loai-lenh-chung-khoan-ato-atc-lo-mp'],
    'thue-dau-tu-viet-nam-2026-huong-dan': ['chi-phi-an-khi-dau-tu-khoan-phi-mat', 'cach-doc-bao-cao-tai-chinh-doanh-nghiep'],
    'cach-doc-bao-cao-tai-chinh-doanh-nghiep': ['phan-tich-ky-thuat-chung-khoan', 'co-phieu-tang-truong-vs-gia-tri'],
    'dau-tu-quy-mo-tai-viet-nam-2026': ['etf-la-gi-huong-dan-dau-tu-quy-etf', 'chien-luoc-dca-binh-quan-gia'],
    'tam-ly-giao-dich-sai-lam-cam-xuc': ['top-5-sai-lam-dau-tu-chung-khoan', 'tai-khoan-demo-luyen-tap-giao-dich'],
    'reits-la-gi-dau-tu-bat-dong-san-von-nho': ['dau-tu-bat-dong-san-2026-uu-nhuoc-diem', 'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh'],
    'lam-phat-la-gi-tac-dong-bao-ve-tai-san': ['vang-vs-usd-kenh-phong-ho-rui-ro', 'so-sanh-gui-tiet-kiem-vs-dau-tu-2026'],
    'bitcoin-halving-la-gi-tac-dong-gia-btc': ['bitcoin-la-gi-huong-dan-dau-tu-btc', 'stablecoin-la-gi-usdt-usdc-vai-tro'],
    'cach-tiet-kiem-tien-hieu-qua-nguoi-tre': ['quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan', 'quy-khan-cap-tai-sao-can-xay-dung'],
    'dau-tu-esg-xu-huong-ben-vung-2026': ['nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh', 'dau-tu-quy-mo-tai-viet-nam-2026'],
    'dau-tu-vao-ban-than-kenh-loi-nhuan-cao': ['fire-movement-nghi-huu-som-tuoi-40', 'cach-tiet-kiem-tien-hieu-qua-nguoi-tre'],
    'fire-movement-nghi-huu-som-tuoi-40': ['quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan', 'lai-kep-la-gi-suc-manh-lai-kep-dau-tu'],
    'giao-duc-tai-chinh-cho-con-day-tu-nho': ['quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan', 'cach-tiet-kiem-tien-hieu-qua-nguoi-tre'],
    'cach-doc-tin-tuc-tai-chinh-phan-biet': ['cach-doc-bao-cao-tai-chinh-doanh-nghiep', 'tam-ly-giao-dich-sai-lam-cam-xuc'],
    'dau-tu-trai-phieu-doanh-nghiep-2026': ['so-sanh-gui-tiet-kiem-vs-dau-tu-2026', 'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh'],
    'cach-chon-cong-ty-chung-khoan-phu-hop': ['cach-dau-tu-chung-khoan-nguoi-moi-2026', 'tai-khoan-demo-luyen-tap-giao-dich'],
    'tong-ket-chien-luoc-dau-tu-thang-3-2026': ['nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh', 'kinh-te-vi-mo-anh-huong-dau-tu'],
    'dau-tu-theo-mua-hieu-ung-january-sell-may': ['phan-tich-ky-thuat-chung-khoan', 'tong-ket-chien-luoc-dau-tu-thang-3-2026'],
    'p2p-lending-la-gi-co-hoi-rui-ro': ['nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh', 'dau-tu-trai-phieu-doanh-nghiep-2026'],
    'lai-suat-ngan-hang-2026-so-sanh': ['so-sanh-gui-tiet-kiem-vs-dau-tu-2026', 'lam-phat-la-gi-tac-dong-bao-ve-tai-san'],
    'co-phieu-tang-truong-vs-gia-tri': ['phan-tich-ky-thuat-chung-khoan', 'cach-doc-bao-cao-tai-chinh-doanh-nghiep'],
    'cac-loai-lenh-chung-khoan-ato-atc-lo-mp': ['cach-doc-bang-gia-chung-khoan-nguoi-moi', 'cach-dau-tu-chung-khoan-nguoi-moi-2026'],
    'chi-phi-an-khi-dau-tu-khoan-phi-mat': ['thue-dau-tu-viet-nam-2026-huong-dan', 'cach-chon-cong-ty-chung-khoan-phu-hop'],
    'tai-khoan-demo-luyen-tap-giao-dich': ['cach-dau-tu-chung-khoan-nguoi-moi-2026', 'tam-ly-giao-dich-sai-lam-cam-xuc'],
    'forex-vs-crypto-so-sanh-chi-tiet': ['bitcoin-la-gi-huong-dan-dau-tu-btc', 'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh'],
    'kinh-te-vi-mo-anh-huong-dau-tu': ['lam-phat-la-gi-tac-dong-bao-ve-tai-san', 'tong-ket-chien-luoc-dau-tu-thang-3-2026'],
    'vang-vs-usd-kenh-phong-ho-rui-ro': ['lam-phat-la-gi-tac-dong-bao-ve-tai-san', 'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh'],
    'quy-khan-cap-tai-sao-can-xay-dung': ['cach-tiet-kiem-tien-hieu-qua-nguoi-tre', 'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan'],
    'bao-hiem-nhan-tho-co-phai-kenh-dau-tu': ['quy-khan-cap-tai-sao-can-xay-dung', 'so-sanh-gui-tiet-kiem-vs-dau-tu-2026'],
};

// Build slug → title+category map
const slugMap = {};
for (const p of posts || []) {
    slugMap[p.slug] = { title: p.title, catSlug: p.categories?.slug || 'kien-thuc-dau-tu' };
}

console.log('🔧 Adding internal links to posts...\n');
let updated = 0;

for (const p of posts || []) {
    if (!p.content) continue;

    // Skip if already has "Đọc thêm" or "Xem thêm" section at the end
    if (p.content.includes('Đọc thêm tại') || p.content.includes('Xem thêm:') || p.content.includes('class="internal-links"')) continue;

    // Get related slugs
    let relatedSlugs = relatedMap[p.slug];

    // If no manual mapping, pick 1-2 from same category
    if (!relatedSlugs) {
        const catSlug = p.categories?.slug || 'uncategorized';
        const sameCat = (catPosts[catSlug] || []).filter(x => x.slug !== p.slug);
        relatedSlugs = sameCat.slice(0, 2).map(x => x.slug);
    }

    // Build links HTML
    const links = [];
    for (const rSlug of relatedSlugs) {
        const info = slugMap[rSlug];
        if (info) {
            links.push(`<a href="/blog/${info.catSlug}/${rSlug}">${info.title}</a>`);
        }
    }

    if (links.length === 0) continue;

    const linksHtml = `
<h2>Đọc thêm</h2>
<p>${links.join(' · ')}</p>
<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`;

    const newContent = p.content.trim() + '\n' + linksHtml.trim();

    const { error } = await s.from('posts').update({ content: newContent }).eq('id', p.id);
    if (error) {
        console.log(`❌ ${p.slug}: ${error.message}`);
    } else {
        console.log(`✅ ${p.slug} → ${links.length} link(s)`);
        updated++;
    }
}

console.log(`\n🎉 Added internal links to ${updated} posts`);
