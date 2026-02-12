const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');

async function fix() {
    await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
    const { data: posts } = await s.from('posts').select('id,slug,excerpt').eq('is_published', true);

    const fixes = {
        'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh': 'Nên đầu tư gì năm 2026? So sánh chứng khoán, vàng, crypto, BĐS. Danh mục gợi ý theo mức vốn cho nhà đầu tư Việt.',
        'cach-dau-tu-chung-khoan-nguoi-moi-2026': 'Cách đầu tư chứng khoán cho người mới 2026: mở tài khoản, chọn cổ phiếu, phân tích cơ bản và chiến lược DCA.',
        'lai-kep-la-gi-suc-manh-lai-kep-dau-tu': 'Lãi kép là gì? Sức mạnh lãi kép trong đầu tư: ví dụ thực tế, bảng tính, quy tắc 72 và cách tận dụng lãi kép tối đa.',
        'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan': 'Quy tắc 50/30/20 quản lý tài chính cá nhân: chia thu nhập hợp lý để tiết kiệm, đầu tư và tận hưởng cuộc sống.'
    };

    for (const [slug, excerpt] of Object.entries(fixes)) {
        const p = posts.find(x => x.slug === slug);
        if (!p) { console.log('Not found: ' + slug); continue; }
        const { error } = await s.from('posts').update({ excerpt }).eq('id', p.id);
        console.log(`${error ? 'ERR' : 'OK'} ${slug}: ${excerpt.length}ch`);
    }
    console.log('\nDone!');
}
fix();
