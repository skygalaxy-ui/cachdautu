import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Category IDs from database
const CATS = {
    'kien-thuc-dau-tu': '31d10229-9735-4f69-a368-08ea7f0550a1',
    'chung-khoan': '96d5c106-653b-470e-90a7-6875e9a490fd',
    'bat-dong-san': '439e89a0-04db-4c18-a91b-92682428e111',
    'crypto': 'b7ced1f1-2dc7-47c7-a3bb-36d66c24cae5',
    'tai-chinh-ca-nhan': '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
    'kinh-nghiem': 'ac86a067-5518-42d7-8045-a92a75f4a15f',
};

// Map each post slug to appropriate category
const slugToCategory = {
    'stablecoin-la-gi-usdt-usdc-vai-tro': 'crypto',
    'etf-la-gi-huong-dan-dau-tu-quy-etf': 'kien-thuc-dau-tu',
    'cach-doc-bang-gia-chung-khoan-nguoi-moi': 'chung-khoan',
    'thue-dau-tu-viet-nam-2026-huong-dan': 'kien-thuc-dau-tu',
    'cach-doc-bao-cao-tai-chinh-doanh-nghiep': 'chung-khoan',
    'dau-tu-quy-mo-tai-viet-nam-2026': 'kien-thuc-dau-tu',
    'tam-ly-giao-dich-sai-lam-cam-xuc': 'kinh-nghiem',
    'reits-la-gi-dau-tu-bat-dong-san-von-nho': 'bat-dong-san',
    'lam-phat-la-gi-tac-dong-bao-ve-tai-san': 'kien-thuc-dau-tu',
    'bitcoin-halving-la-gi-tac-dong-gia-btc': 'crypto',
    'cach-tiet-kiem-tien-hieu-qua-nguoi-tre': 'tai-chinh-ca-nhan',
    'dau-tu-esg-xu-huong-ben-vung-2026': 'kien-thuc-dau-tu',
    'dau-tu-vao-ban-than-kenh-loi-nhuan-cao': 'tai-chinh-ca-nhan',
    'fire-movement-nghi-huu-som-tuoi-40': 'tai-chinh-ca-nhan',
    'giao-duc-tai-chinh-cho-con-day-tu-nho': 'tai-chinh-ca-nhan',
    'cach-doc-tin-tuc-tai-chinh-phan-biet': 'kinh-nghiem',
    'dau-tu-trai-phieu-doanh-nghiep-2026': 'kien-thuc-dau-tu',
    'cach-chon-cong-ty-chung-khoan-phu-hop': 'chung-khoan',
    'tong-ket-chien-luoc-dau-tu-thang-3-2026': 'kien-thuc-dau-tu',
    'dau-tu-theo-mua-hieu-ung-january-sell-may': 'chung-khoan',
    'p2p-lending-la-gi-co-hoi-rui-ro': 'kien-thuc-dau-tu',
    'lai-suat-ngan-hang-2026-so-sanh': 'tai-chinh-ca-nhan',
    'co-phieu-tang-truong-vs-gia-tri': 'chung-khoan',
    'cac-loai-lenh-chung-khoan-ato-atc-lo-mp': 'chung-khoan',
    'chi-phi-an-khi-dau-tu-khoan-phi-mat': 'kinh-nghiem',
    'tai-khoan-demo-luyen-tap-giao-dich': 'chung-khoan',
    'forex-vs-crypto-so-sanh-chi-tiet': 'kien-thuc-dau-tu',
    'kinh-te-vi-mo-anh-huong-dau-tu': 'kien-thuc-dau-tu',
    'vang-vs-usd-kenh-phong-ho-rui-ro': 'kien-thuc-dau-tu',
    'quy-khan-cap-tai-sao-can-xay-dung': 'tai-chinh-ca-nhan',
    'bao-hiem-nhan-tho-co-phai-kenh-dau-tu': 'tai-chinh-ca-nhan',
};

console.log('🔧 Assigning categories to posts...\n');
let fixed = 0;
for (const [slug, catSlug] of Object.entries(slugToCategory)) {
    const catId = CATS[catSlug];
    if (!catId) { console.log(`❌ Unknown category: ${catSlug}`); continue; }

    const { error } = await s.from('posts').update({ category_id: catId }).eq('slug', slug);
    if (error) {
        console.log(`❌ ${slug}: ${error.message}`);
    } else {
        console.log(`✅ ${slug} → ${catSlug}`);
        fixed++;
    }
}
console.log(`\n🎉 Assigned categories to ${fixed} posts`);
