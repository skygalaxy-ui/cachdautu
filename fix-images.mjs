import { supabase } from './scripts/utils/db.mjs';

const BROKEN_IMAGE_URL = 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&auto=format';
// Thay thế bằng một ảnh chứng khoán/tài chính chất lượng từ Unsplash
const NEW_IMAGE_URL = 'https://images.unsplash.com/photo-1611974714023-1ee271ec025f?w=1200&auto=format&q=80';

async function fixBrokenImages() {
    console.log('🔍 Đang quét các bài viết sử dụng link ảnh lỗi...');

    // 1. Tìm các bài viết có link ảnh bị 404 đã xác định
    const { data: postsToFix, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, featured_image')
        .eq('featured_image', BROKEN_IMAGE_URL);

    if (fetchError) {
        console.error('❌ Lỗi khi tìm bài viết:', fetchError.message);
        return;
    }

    if (!postsToFix || postsToFix.length === 0) {
        console.log('✅ Không tìm thấy bài viết nào sử dụng link ảnh lỗi cụ thể này.');
        return;
    }

    console.log(`🛠️ Phát hiện ${postsToFix.length} bài viết cần sửa ảnh.`);

    // 2. Cập nhật từng bài một (hoặc dùng update filter nếu muốn nhanh)
    for (const post of postsToFix) {
        console.log(`Updating: "${post.title}"`);
        const { error: updateError } = await supabase
            .from('posts')
            .update({ featured_image: NEW_IMAGE_URL })
            .eq('id', post.id);

        if (updateError) {
            console.error(`  ❌ Lỗi khi cập nhật bài ${post.id}:`, updateError.message);
        } else {
            console.log(`  ✅ Thành công.`);
        }
    }

    console.log('\n✨ Đã hoàn thành việc fix ảnh 404 cho các bài viết được chọn.');
}

async function fixNoImagePosts() {
    console.log('\n🔍 Đang gán ảnh mặc định cho các bài thiếu ảnh (NO IMAGE)...');

    // Tìm các bài thiếu featured_image HOẶC featured_image để trống
    const { data: noImagePosts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title')
        .or('featured_image.is.null,featured_image.eq.""');

    if (fetchError) {
        console.error('❌ Lỗi:', fetchError.message);
        return;
    }

    if (!noImagePosts || noImagePosts.length === 0) {
        console.log('✅ Không có bài nào thiếu ảnh.');
        return;
    }

    console.log(`🛠️ Phát hiện ${noImagePosts.length} bài thiếu ảnh. Đang gán ảnh Startup/Investment mặc định...`);

    const DEFAULT_STARTUP_IMAGE = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&auto=format&q=80';

    for (const post of noImagePosts) {
        const { error: updateError } = await supabase
            .from('posts')
            .update({ featured_image: DEFAULT_STARTUP_IMAGE })
            .eq('id', post.id);

        if (!updateError) console.log(`  ✅ Set ảnh cho: ${post.title}`);
    }
}

// Chạy cả hai
async function run() {
    await fixBrokenImages();
    await fixNoImagePosts();
    process.exit(0);
}

run();
