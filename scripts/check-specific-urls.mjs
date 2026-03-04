import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const verifyUrl = async (url) => {
    // Extract slug from URL
    // Pattern 1: /blog/[category]/[slug]
    // Pattern 2: /[slug]
    const parts = url.split('/');
    const slug = parts[parts.length - 1];

    const { data, error } = await s.from('posts').select('id, title, is_published, scheduled_at').eq('slug', slug).single();

    if (error) {
        return { url, status: 'NOT_FOUND_IN_DB', error: error.message };
    }

    const now = new Date();
    const scheduledAt = data.scheduled_at ? new Date(data.scheduled_at) : null;
    const isLive = data.is_published && (!scheduledAt || scheduledAt <= now);

    return {
        url,
        title: data.title,
        is_published: data.is_published,
        scheduled_at: data.scheduled_at,
        is_live: isLive,
        status: isLive ? 'LIVE' : (data.is_published ? 'PUBLISHED_BUT_FUTURE' : 'DRAFT')
    };
};

const urls = [
    'https://cachdautu.com/blog/chung-khoan/dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong',
    'https://cachdautu.com/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua',
    'https://cachdautu.com/dong-hanh-cung-khoan-dau-tu-cua-ban-trong-mot-thi-truong-day-bien-dong',
    'https://cachdautu.com/blog/bat-dong-san/mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet',
    'https://cachdautu.com/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026'
];

const results = [];
for (const url of urls) {
    results.push(await verifyUrl(url));
}

console.log(JSON.stringify(results, null, 2));
