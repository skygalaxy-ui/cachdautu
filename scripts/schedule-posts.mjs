import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Lịch xuất bản dàn trải từ 11/02 chiều → 12/02 tối (giờ Việt Nam UTC+7)
// Sắp xếp logic: bài tổng quan trước, chi tiết sau
const schedule = [
    { slug: 'dau-tu-la-gi-huong-dan-toan-dien', time: '2026-02-11T16:00:00+07:00' },
    { slug: 'so-sanh-kenh-dau-tu-pho-bien', time: '2026-02-11T19:00:00+07:00' },
    { slug: 'chien-luoc-dca-binh-quan-gia', time: '2026-02-11T22:00:00+07:00' },
    { slug: 'dau-tu-chung-khoan-cho-nguoi-moi', time: '2026-02-12T07:00:00+07:00' },
    { slug: 'phan-tich-ky-thuat-chung-khoan', time: '2026-02-12T09:30:00+07:00' },
    { slug: 'dau-tu-bitcoin-crypto-cho-nguoi-moi', time: '2026-02-12T12:00:00+07:00' },
    { slug: 'rui-ro-dau-tu-crypto-cach-phong-tranh', time: '2026-02-12T14:30:00+07:00' },
    { slug: 'dau-tu-vang-kenh-tru-an-an-toan', time: '2026-02-12T17:00:00+07:00' },
    { slug: 'xu-huong-gia-vang-chien-luoc-dau-tu', time: '2026-02-12T19:30:00+07:00' },
    { slug: 'xay-dung-danh-muc-dau-tu-da-dang-hoa', time: '2026-02-12T22:00:00+07:00' },
];

async function scheduleAll() {
    console.log('📅 Lên lịch xuất bản 10 bài viết...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('Login failed:', authError.message); return; }

    for (const item of schedule) {
        const vnTime = new Date(item.time);
        const label = vnTime.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' });

        const { error } = await supabase.from('posts')
            .update({ scheduled_at: item.time })
            .eq('slug', item.slug);

        if (error) {
            console.log('  X ' + item.slug + ': ' + error.message);
        } else {
            console.log('  ' + label + ' - ' + item.slug);
        }
    }

    console.log('\nDone!');
}

scheduleAll();
