import { supabase } from './scripts/utils/db.mjs';

async function performCleanAndFix() {
    console.log('🚀 Bắt đầu quá trình dọn dẹp và tối ưu SEO...');

    // --- 1. XOÁ BÀI VIẾT RÁC & TRÙNG LẶP ---
    const junkTitles = ['Blog post mẫu', 'Test bài viết 123'];
    console.log(`\n🧹 Đang kiểm tra bài viết rác: ${junkTitles.join(', ')}`);

    const { data: junkPosts } = await supabase
        .from('posts')
        .delete()
        .in('title', junkTitles)
        .select();

    if (junkPosts?.length) {
        junkPosts.forEach(p => console.log(`  ✅ Đã xoá bài rác: ${p.title}`));
    } else {
        console.log('  ℹ️ Không tìm thấy bài rác theo tiêu chuẩn.');
    }

    // Xử lý trùng lặp bài "Thói quen tài chính tốt"
    const { data: dupes } = await supabase
        .from('posts')
        .select('id, title, created_at')
        .eq('title', 'Thói quen tài chính tốt')
        .order('created_at', { ascending: false });

    if (dupes && dupes.length > 1) {
        const [keep, ...remove] = dupes;
        console.log(`\n👯 Phát hiện trùng lặp tiêu đề: "${keep.title}"`);
        for (const item of remove) {
            await supabase.from('posts').delete().eq('id', item.id);
            console.log(`  ✅ Đã xoá bản trùng (cũ hơn): ID ${item.id}`);
        }
    }

    // --- 2. FIX META DESCRIPTION & THIN CONTENT ---
    console.log('\n📝 Đang tối ưu Meta Description cho các bài đang thiếu...');
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, content, meta_description');

    let fixedMetaCount = 0;
    for (const post of posts) {
        // Nếu thiếu meta_description, tạo tự động từ nội dung
        if (!post.meta_description || post.meta_description.trim() === '') {
            // Lấy khoảng 150 ký tự đầu từ content, bỏ tag html nếu có
            const plainText = post.content?.replace(/<[^>]*>/g, '').substring(0, 160).trim();
            const newMeta = `${plainText}... Tìm hiểu thêm về ${post.title} tại Cách Đầu Tư.`;

            await supabase
                .from('posts')
                .update({ meta_description: newMeta })
                .eq('id', post.id);
            fixedMetaCount++;
        }
    }
    console.log(`  ✅ Đã cập nhật Meta Description cho ${fixedMetaCount} bài viết.`);

    console.log('\n✨ Hoàn thành Bước 1 & 2. Đang chuẩn bị cập nhật giao diện Admin...');
    process.exit(0);
}

performCleanAndFix();
