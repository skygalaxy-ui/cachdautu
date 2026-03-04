import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slugs = [
    'dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong',
    'quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua',
    'mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet',
    'huong-dan-dau-tu-etf-cho-nguoi-moi-2026',
    'dong-hanh-cung-khoan-dau-tu-cua-ban-trong-mot-thi-truong-day-bien-dong'
];

async function check() {
    for (const slug of slugs) {
        const { data, error } = await s.from('posts').select('slug, is_published, scheduled_at').eq('slug', slug).maybeSingle();
        console.log(`[CHECK] ${slug} -> ${data ? 'EXISTS' : 'NOT_FOUND'}`);
    }
}
check();
