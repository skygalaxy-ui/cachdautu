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
    'huong-dan-dau-tu-etf-cho-nguoi-moi-2026'
];

async function updateLive() {
    const now = new Date().toISOString();
    for (const slug of slugs) {
        const { error } = await s.from('posts').update({
            is_published: true,
            scheduled_at: now,
            updated_at: now
        }).eq('slug', slug);

        if (error) console.log(`❌ Lỗi cập nhật ${slug}:`, error.message);
        else console.log(`✅ Đã đẩy LIVE: ${slug}`);
    }
}

updateLive();
