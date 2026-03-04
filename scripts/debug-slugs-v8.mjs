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

async function check() {
    const { data: posts } = await s.from('posts').select('slug, title, is_published, scheduled_at');

    slugs.forEach(slug => {
        const match = posts.find(p => p.slug === slug);
        if (match) {
            process.stdout.write(`RESULT: ${slug} | ${match.title} | ${match.is_published} | ${match.scheduled_at}\n`);
        } else {
            process.stdout.write(`RESULT: ${slug} | NOT_FOUND\n`);
        }
    });
}

check();
