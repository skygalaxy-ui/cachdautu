import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function update() {
    console.log('🔄 Cập nhật bài viết...\n');

    // Sign in as admin
    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Đăng nhập thất bại:', authError.message); return; }
    console.log('✅ Đăng nhập admin thành công\n');

    // Get categories
    const { data: cats } = await supabase.from('categories').select('*');
    console.log(`📂 Tìm thấy ${cats?.length || 0} chuyên mục:`);
    if (cats) cats.forEach(c => console.log(`   - ${c.name} (${c.slug}) → ID: ${c.id}`));
    console.log('');

    // Map category slugs to IDs
    const catMap = {};
    if (cats) cats.forEach(c => { catMap[c.slug] = c.id; catMap[c.name] = c.id; });

    // Get all published posts
    const { data: posts } = await supabase.from('posts').select('*').order('created_at', { ascending: true });
    console.log(`📝 Tìm thấy ${posts?.length || 0} bài viết\n`);

    if (!posts) return;

    // Category mapping for each post slug
    const slugToCategory = {
        'dau-tu-la-gi-huong-dan-toan-dien': 'tai-chinh-ca-nhan',
        'dau-tu-chung-khoan-cho-nguoi-moi': 'chung-khoan',
        'dau-tu-bitcoin-crypto-cho-nguoi-moi': 'crypto',
        'dau-tu-vang-kenh-tru-an-an-toan': 'vang',
        'so-sanh-kenh-dau-tu-pho-bien': 'tai-chinh-ca-nhan',
        'phan-tich-ky-thuat-chung-khoan': 'chung-khoan',
        'chien-luoc-dca-binh-quan-gia': 'tai-chinh-ca-nhan',
        'rui-ro-dau-tu-crypto-cach-phong-tranh': 'crypto',
        'xu-huong-gia-vang-chien-luoc-dau-tu': 'vang',
        'xay-dung-danh-muc-dau-tu-da-dang-hoa': 'tai-chinh-ca-nhan',
    };

    // Author info to add
    const author = 'Đội ngũ CachDauTu';

    for (const post of posts) {
        const categorySlug = slugToCategory[post.slug];
        const categoryId = categorySlug ? catMap[categorySlug] : null;

        if (!categoryId && categorySlug) {
            console.log(`⚠️  Không tìm thấy category "${categorySlug}" cho bài: ${post.title.substring(0, 40)}...`);
            continue;
        }

        const updateData = {};

        // Assign category if not set
        if (!post.category_id && categoryId) {
            updateData.category_id = categoryId;
        }

        // Add author if not set
        if (!post.author) {
            updateData.author = author;
        }

        // Add meta info if missing
        if (!post.meta_title) {
            updateData.meta_title = `${post.title} | CachDauTu.com`;
        }
        if (!post.meta_description) {
            updateData.meta_description = post.excerpt;
        }

        if (Object.keys(updateData).length > 0) {
            const { error } = await supabase
                .from('posts')
                .update(updateData)
                .eq('id', post.id);

            if (error) {
                console.log(`❌ Lỗi cập nhật "${post.title.substring(0, 40)}...": ${error.message}`);
            } else {
                const changes = Object.keys(updateData).join(', ');
                console.log(`✅ ${post.title.substring(0, 45)}... → ${changes}`);
            }
        } else {
            console.log(`⏩ ${post.title.substring(0, 45)}... (đã OK)`);
        }
    }

    console.log('\n🎉 Cập nhật hoàn tất!');
}

update();
