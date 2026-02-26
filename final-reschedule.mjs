import { supabase } from './scripts/utils/db.mjs';

const postsToFix = [
    { id: '74624155-6854-443d-82d2-ee4609a48f5f', title: 'Cách đánh giá startup trước khi đầu tư', date: '2026-03-13' },
    { id: 'c6d6ac38-166c-41fc-93dd-c7118d9e526f', title: 'Angel Investing: Đầu tư vào startup giai đoạn sớm', date: '2026-03-14' },
    { id: '4e1c2530-491a-4474-b2bf-661a81717cb4', title: 'Crowdfunding: Gọi vốn cộng đồng', date: '2026-03-15' },
    { id: '96767a6f-316a-4c13-9e0b-dd0d9ceaae1f', title: 'ESOP: Cổ phiếu ưu đãi cho nhân viên', date: '2026-03-16' },
    { id: '52c420ea-d8a1-4207-8898-751bd13054f3', title: 'Rủi ro khi đầu tư vào startup', date: '2026-03-17' },
    { id: '65f1e18d-69bb-41a4-9419-f02781ade365', title: 'Trái phiếu là gì? Hướng dẫn cho người mới', date: '2026-03-18' },
    { id: '2c33faa3-7404-4cb4-9062-796189d5e895', title: 'Thói quen tài chính tốt cần rèn luyện', date: '2026-03-19' }
];

async function finalReschedule() {
    console.log('🚀 Đang bắt đầu dời lịch bài viết chính xác...');

    for (const post of postsToFix) {
        const scheduledDate = `${post.date}T00:00:00Z`;

        console.log(`- Đang xử lý: "${post.title}" -> ${post.date}`);

        const { error } = await supabase
            .from('posts')
            .update({
                is_published: false, // Quan trọng: Phải là false để hiện "Lên lịch"
                scheduled_at: scheduledDate,
                created_at: scheduledDate, // Đồng bộ ngày tạo để Admin hiển thị đúng
                updated_at: new Date().toISOString()
            })
            .eq('id', post.id);

        if (error) {
            console.error(`  ❌ Lỗi khi cập nhật bài "${post.title}":`, error.message);
        } else {
            console.log(`  ✅ Thành công.`);
        }
    }

    console.log('\n🎉 Hoàn tất! Vui lòng F5 trang Admin.');
}

finalReschedule();
