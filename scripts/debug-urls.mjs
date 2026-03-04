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
    const { data, error } = await s.from('posts').select('id, title, slug, is_published, scheduled_at').eq('slug', slug).maybeSingle();
    if (error) {
        console.log(`Error checking ${slug}:`, error.message);
    } else if (data) {
        console.log(`FOUND: ${slug} | Title: ${data.title} | Published: ${data.is_published} | Scheduled: ${data.scheduled_at}`);
    } else {
        console.log(`MISSED: ${slug} NOT FOUND IN DB`);
    }
}
