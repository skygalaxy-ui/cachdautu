import { supabase } from './scripts/utils/db.mjs';

async function fixAllTables() {
    console.log('🚀 Bắt đầu tối ưu hiển thị bảng (Table Responsive) cho toàn bộ bài viết...');

    // 1. Lấy tất cả bài viết có chứa thẻ <table>
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .like('content', '%<table%');

    if (error) {
        console.error('❌ Lỗi khi tải dữ liệu:', error.message);
        return;
    }

    if (!posts || posts.length === 0) {
        console.log('✅ Không tìm thấy bài viết nào có bảng cần xử lý.');
        return;
    }

    console.log(`📊 Tìm thấy ${posts.length} bài viết có chứa bảng. Đang xử lý...`);

    const tableRegex = /<table([\s\S]*?)<\/table>/g;
    let totalFixedPosts = 0;
    let totalFixedTables = 0;

    for (const post of posts) {
        let tableCountInPost = 0;

        // Kiểm tra xem bảng đã được bọc chưa (tránh bọc lặp)
        const newContent = post.content.replace(tableRegex, (match) => {
            // Nếu đã có class table-responsive thì bỏ qua
            if (match.includes('table-responsive')) return match;

            tableCountInPost++;
            return `<div class="table-responsive" style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 1.5rem 0; width: 100%; border: 1px solid #e5e7eb; border-radius: 0.75rem;">${match}</div>`;
        });

        if (tableCountInPost > 0) {
            const { error: updateError } = await supabase
                .from('posts')
                .update({ content: newContent })
                .eq('id', post.id);

            if (!updateError) {
                totalFixedPosts++;
                totalFixedTables += tableCountInPost;
                console.log(`  ✅ [${totalFixedPosts}] Fixed: "${post.title}" (${tableCountInPost} bảng)`);
            } else {
                console.error(`  ❌ Lỗi tại bài "${post.title}":`, updateError.message);
            }
        }
    }

    console.log(`\n✨ HOÀN THÀNH TỐI ƯU BẢNG:`);
    console.log(`- Tổng số bài viết đã cập nhật: ${totalFixedPosts}`);
    console.log(`- Tổng số bảng đã được bọc responsive: ${totalFixedTables}`);
}

fixAllTables();
