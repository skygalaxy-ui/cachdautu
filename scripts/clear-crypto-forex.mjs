import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const cryptoCatId = 'b7ced1f1-2dc7-47c7-a3bb-36d66c24cae5';
const forexCatId = 'd0457801-0e3c-402b-9846-2a5926fb64c6';

async function deleteAll() {
    console.log("--- BẮT ĐẦU XÓA SẠCH DỮ LIỆU CRYPTO VÀ FOREX ---");

    // 1. Tìm IDs bài viết
    const { data: posts1 } = await s.from('posts').select('id, title, slug').or(`category_id.eq.${cryptoCatId},category_id.eq.${forexCatId}`);
    const keywords = ['crypto', 'forex', 'bitcoin', 'blockchain', 'ngoai hoi', 'ngoai-hoi', 'tien ao', 'tien-ao', 'altcoin', 'defi', 'binance', 'metatrader'];
    const { data: allPosts } = await s.from('posts').select('id, title, slug');
    const postsByKeywords = allPosts?.filter(p =>
        keywords.some(k => (p.title || "").toLowerCase().includes(k) || (p.slug || "").toLowerCase().includes(k))
    ) || [];

    const postsToDelete = Array.from(new Map([...(posts1 || []), ...postsByKeywords].map(item => [item.id, item])).values());
    const postIds = postsToDelete.map(p => p.id);

    // 2. Xóa bài viết (Và tags nếu tag là một field trong post?)
    if (postIds.length > 0) {
        console.log(`Đang xóa ${postIds.length} bài viết...`);
        const { error } = await s.from('posts').delete().in('id', postIds);
        if (error) console.log("Lỗi xóa bài viết:", error.message);
        else console.log("OK: Đã xóa toàn bộ bài viết liên quan.");
    } else {
        console.log("Không tìm thấy bài viết nào để xóa.");
    }

    // 3. Xóa chuyên mục (Categories)
    console.log("Đang xóa 2 chuyên mục: Crypto và Forex...");
    const { error: catError } = await s.from('categories').delete().in('id', [cryptoCatId, forexCatId]);
    if (catError) console.log("Lỗi xóa chuyên mục (Có thể do còn bài viết tham chiếu?):", catError.message);
    else console.log("OK: Đã xóa 2 chuyên mục: Crypto và Forex.");

    // 4. Kiểm tra tags (Nếu website có bảng tags riêng)
    // Tôi sẽ quét bảng tags nếu có và xóa những tag có keyword 'crypto', 'forex', etc.
    const { data: allTags, error: tagGetError } = await s.from('tags').select('id, name');
    if (!tagGetError && allTags) {
        const tagsToDelete = allTags.filter(t =>
            keywords.some(k => t.name.toLowerCase().includes(k))
        );
        const tagIds = tagsToDelete.map(t => t.id);
        if (tagIds.length > 0) {
            console.log(`Đang xóa ${tagIds.length} tags liên quan...`);
            await s.from('tags').delete().in('id', tagIds);
            console.log("OK: Đã xóa tags.");
        }
    }

    console.log("--- HOÀN TẤT: Đã dọn dẹp sạch sẽ tài liệu Crypto & Forex ---");
}

deleteAll();
