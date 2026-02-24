import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data, error } = await supabase.from('posts').select('title, slug, category_id, is_published, scheduled_at, categories(name, slug)').order('title');
if (error) { console.log('❌', error.message); process.exit(1); }

console.log(`\n📊 TỔNG: ${data.length} bài viết\n`);
console.log('='.repeat(120));

// Group by category
const grouped = {};
data.forEach(p => {
    const cat = p.categories?.name || 'Không phân loại';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
});

for (const [cat, posts] of Object.entries(grouped).sort()) {
    console.log(`\n📁 ${cat} (${posts.length} bài)`);
    console.log('-'.repeat(80));
    posts.forEach(p => {
        const status = p.is_published ? '✅' : (p.scheduled_at ? `⏰ ${new Date(p.scheduled_at).toLocaleDateString('vi-VN')}` : '📝');
        console.log(`  ${status} ${p.title}`);
        console.log(`     → /blog/${p.categories?.slug || '?'}/${p.slug}`);
    });
}

// Check specific keywords
console.log('\n\n' + '='.repeat(120));
console.log('🔍 KIỂM TRA TỪ KHÓA ĐỀ XUẤT:');
console.log('='.repeat(120));

const keywords = [
    { kw: 'lãi suất ngân hàng tháng 3', search: ['lai-suat', 'thang-3'] },
    { kw: 'cách mua vàng online', search: ['mua-vang'] },
    { kw: 'mở tài khoản chứng khoán', search: ['mo-tai-khoan', 'tai-khoan-chung-khoan'] },
    { kw: 'gửi tiết kiệm ngân hàng nào lời nhất', search: ['tiet-kiem', 'gui-tiet-kiem'] },
    { kw: 'bao nhiêu tiền thì nên đầu tư', search: ['bao-nhieu-tien'] },
    { kw: 'cách tính lãi kép / công thức lãi kép', search: ['cach-tinh-lai-kep', 'cong-thuc-lai-kep'] },
    { kw: 'VN30 gồm những mã nào', search: ['vn30-gom'] },
    { kw: 'nên mua vàng SJC hay nhẫn trơn', search: ['sjc-hay-nhan', 'sjc-nhan-tron'] },
    { kw: 'top app đầu tư chứng khoán', search: ['top-app', 'app-dau-tu'] },
    { kw: 'đầu tư 10 triệu nên mua gì', search: ['10-trieu'] },
    { kw: 'đầu tư 50 triệu nên mua gì', search: ['50-trieu'] },
    { kw: 'đầu tư 100 triệu nên mua gì', search: ['100-trieu'] },
    { kw: 'cổ phiếu nào nên mua 2026', search: ['co-phieu-nao-nen-mua'] },
    { kw: 'chứng khoán phái sinh là gì', search: ['phai-sinh'] },
    { kw: 'margin là gì', search: ['margin-la-gi'] },
    { kw: '20 tuổi nên đầu tư gì', search: ['20-tuoi'] },
    { kw: '30 tuổi nên đầu tư gì', search: ['30-tuoi'] },
    { kw: 'lương 10 triệu tiết kiệm bao nhiêu', search: ['luong-10-trieu'] },
    { kw: 'FIRE nghỉ hưu sớm', search: ['fire'] },
    { kw: 'chứng chỉ quỹ là gì', search: ['chung-chi-quy'] },
    { kw: 'sàn chứng khoán mở cửa mấy giờ', search: ['mo-cua-may-gio'] },
    { kw: 'thuế đầu tư chứng khoán', search: ['thue-dau-tu', 'thue'] },
    { kw: 'P/E là gì / EPS là gì', search: ['p-e-la-gi', 'eps-la-gi', 'thuat-ngu'] },
    { kw: 'rủi ro đầu tư chứng khoán', search: ['rui-ro-dau-tu', 'sai-lam'] },
    { kw: 'tài khoản demo chứng khoán', search: ['tai-khoan-demo', 'demo'] },
];

keywords.forEach(({ kw, search }) => {
    const matches = data.filter(p => search.some(s => p.slug.includes(s) || p.title.toLowerCase().includes(s.replace(/-/g, ' '))));
    if (matches.length > 0) {
        console.log(`\n✅ "${kw}" → ĐÃ CÓ:`);
        matches.forEach(m => console.log(`   → ${m.title} (/blog/${m.categories?.slug}/${m.slug})`));
    } else {
        console.log(`\n❌ "${kw}" → CHƯA CÓ BÀI`);
    }
});
