import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const targetPosts = [
    { text: 'Top 10 kênh đầu tư tốt nhất 2026', url: '/blog/kien-thuc-dau-tu/top-10-cac-kenh-dau-tu-tot-nhat-viet-nam-2026' },
    { text: 'Hướng dẫn đầu tư chứng khoán cho người mới', url: '/blog/chung-khoan/huong-dan-dau-tu-chung-khoan-cho-nguoi-moi-bat-dau-2026' },
    { text: 'Cách đầu tư vàng an toàn', url: '/blog/vang/cach-dau-tu-vang-sinh-loi-an-toan-tai-viet-nam-2026' }
];

async function boostNewPosts() {
    // Slugs confirmed from database
    const slugs = [
        'dau-tu-la-gi-huong-dan-toan-dien',
        'nen-dau-tu-gi-nam-2026-so-sanh-5-kenh-dau-tu',
        'chua-co-so-tiet-kiem-hay-dau-tu-ngay'
    ];

    const { data: pillars } = await s.from('posts')
        .select('id, title, content')
        .in('slug', slugs);

    if (!pillars || pillars.length === 0) return console.log("Không tìm thấy bài Pillar cụ thể. Sẽ thử tìm bài có tiêu đề phổ biến.");

    for (const post of pillars) {
        if (post.content.includes('/top-10-cac-kenh-dau-tu-tot-nhat-viet-nam-2026')) {
            console.log(`⏩ Đã có link trong bài: ${post.title}`);
            continue;
        }

        let expandedContent = post.content + "\n\n---\n**Xem thêm các bài viết mới nhất từ chuyên gia:**\n";
        targetPosts.forEach(t => {
            expandedContent += `- [${t.text}](${t.url})\n`;
        });

        const { error } = await s.from('posts').update({ content: expandedContent }).eq('id', post.id);
        if (!error) console.log(`🚀 Boosted: ${post.title}`);
    }
}

boostNewPosts();
