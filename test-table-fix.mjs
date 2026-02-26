import { supabase } from './scripts/utils/db.mjs';

async function findAndFixOne() {
    const { data, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .ilike('title', '%Mở tài khoản chứng khoán online 2026%')
        .limit(1);

    if (error || !data || data.length === 0) {
        console.error('❌ Không tìm thấy bài viết.');
        return;
    }

    const post = data[0];
    console.log(`🔍 Đã chọn bài: "${post.title}" (ID: ${post.id})`);

    // Kiểm tra xem có table không
    if (!post.content.includes('<table')) {
        console.log('ℹ️ Bài viết này không có thẻ <table>. Hãy thử tìm bài khác có bảng.');
        // Thử tìm bài bất kỳ có bảng
        const { data: tablePosts } = await supabase
            .from('posts')
            .select('id, title, content')
            .like('content', '%<table%')
            .limit(1);

        if (tablePosts && tablePosts.length > 0) {
            const tp = tablePosts[0];
            console.log(`➡️ Chuyển sang thử nghiệm trên bài có bảng: "${tp.title}"`);
            applyFix(tp);
        } else {
            console.log('❌ Không tìm thấy bài nào có bảng.');
        }
    } else {
        applyFix(post);
    }
}

async function applyFix(post) {
    // Regex để bọc table nếu chưa được bọc
    // Tránh bọc lặp lại nếu đã có div wrapper
    const tableRegex = /<table([\s\S]*?)<\/table>/g;

    let newContent = post.content;
    let count = 0;

    // logic đơn giản: bọc tất cả <table> bằng div.table-responsive
    newContent = post.content.replace(tableRegex, (match) => {
        if (match.includes('table-responsive')) return match; // Đã bọc rồi
        count++;
        return `<div class="table-responsive" style="overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 1.5rem 0; width: 100%; border: 1px solid #e5e7eb; border-radius: 0.75rem;">${match}</div>`;
    });

    if (count > 0) {
        const { error } = await supabase
            .from('posts')
            .update({ content: newContent })
            .eq('id', post.id);

        if (!error) {
            console.log(`✅ Đã bọc thành công ${count} bảng trong bài viết.`);
        } else {
            console.error('❌ Lỗi cập nhật:', error.message);
        }
    } else {
        console.log('ℹ️ Các bảng đã được bọc hoặc bài viết không có bảng hợp lệ.');
    }
}

findAndFixOne();
