import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slugs = [
    'dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong',
    'quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua',
    'dong-hanh-cung-khoan-dau-tu-cua-ban-trong-mot-thi-truong-day-bien-dong',
    'mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet',
    'huong-dan-dau-tu-etf-cho-nguoi-moi-2026'
];

for (const slug of slugs) {
    const { data, error } = await s.from('posts').select('slug, title, is_published, scheduled_at').eq('slug', slug).maybeSingle();
    if (data) {
        console.log(`[FOUND] ${slug} -> ${data.title} (Published: ${data.is_published}, Scheduled: ${data.scheduled_at})`);
    } else {
        console.log(`[MISSING] ${slug}`);
    }
}
