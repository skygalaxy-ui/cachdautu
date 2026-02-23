import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Verified working image URLs
const img = (id) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`;
const imgContent = (id) => `https://images.unsplash.com/photo-${id}?w=800&h=450&fit=crop&q=80`;

const fixes = [
    {
        slug: 'dau-tu-la-gi-huong-dan-toan-dien',
        featured_image: img('1611974789855-9c2a0a7236a3'), // ✅ works
        old_content_img: '1579621970563-9ae2e01248e6',     // ❌ 404
        new_content_img: '1590283603385-17ffb3a7f29f',     // ✅ finance chart
    },
    {
        slug: 'dau-tu-chung-khoan-cho-nguoi-moi',
        featured_image: img('1611974789855-9c2a0a7236a3'), // ✅ works
        old_content_img: '1535320903710-d946a44dc2d0',     // ❌ 404
        new_content_img: '1560221328-12fe60f83ab8',        // ✅ trading desk
    },
    {
        slug: 'dau-tu-bitcoin-crypto-cho-nguoi-moi',
        featured_image: img('1518546305927-5a555bb7020d'), // ✅ works
        old_content_img: '1622630998477-0d96834cf5db',     // ❌ 404
        new_content_img: '1605792657660-596af9009e82',     // ✅ btc phone
    },
    {
        slug: 'dau-tu-vang-kenh-tru-an-an-toan',
        featured_image: img('1543699565-003b8adda5fc'),    // ✅ gold_a (replace broken)
        old_content_img: '1624365168968-f283d506c6b0',     // ❌ 404
        new_content_img: '1618044733300-9472054094ee',     // ✅ gold_d
    },
    {
        slug: 'chien-luoc-dca-binh-quan-gia',
        featured_image: img('1554224155-6726b3ff858f'),    // ✅ money growth (replace broken)
        old_content_img: '1579621970563-9ae2e01248e6',     // ❌ 404
        new_content_img: '1579621970795-87facc2f976d',     // ✅ savings
    },
    {
        slug: 'rui-ro-dau-tu-crypto-cach-phong-tranh',
        featured_image: img('1621761191319-c6fb62004040'), // ✅ crypto coins (replace broken)
        old_content_img: '1518546305927-5a555bb7020d',     // ✅ this one works, keep
        new_content_img: null,                              // no change needed
    },
    {
        slug: 'xu-huong-gia-vang-chien-luoc-dau-tu',
        featured_image: img('1526304640581-d334cdbbf45e'), // ✅ gold_c (replace broken)
        old_content_img: '1610375461246-83df859df2d4',     // ❌ 404
        new_content_img: '1593672715438-d88a70629abe',     // ✅ gold_e
    },
    {
        slug: 'xay-dung-danh-muc-dau-tu-da-dang-hoa',
        featured_image: img('1460925895917-afdab827c52f'), // ✅ works
        old_content_img: '1633158829585-23ba8f7c8451',     // ❌ 404
        new_content_img: '1454165804606-c3d57bc86b40',     // ✅ invest plan
    },
];

async function fixImages() {
    console.log('🔧 Bắt đầu sửa ảnh bị lỗi...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Đăng nhập thất bại:', authError.message); return; }
    console.log('✅ Đăng nhập admin thành công\n');

    for (const fix of fixes) {
        // Get post
        const { data: post } = await supabase.from('posts')
            .select('id, content, featured_image')
            .eq('slug', fix.slug)
            .single();

        if (!post) { console.log(`⚠️ Không tìm thấy: ${fix.slug}`); continue; }

        let newContent = post.content;
        // Replace content image if needed
        if (fix.new_content_img && fix.old_content_img) {
            newContent = newContent.replaceAll(fix.old_content_img, fix.new_content_img);
        }

        const { error } = await supabase.from('posts')
            .update({
                featured_image: fix.featured_image,
                content: newContent
            })
            .eq('id', post.id);

        if (error) {
            console.log(`❌ ${fix.slug}: ${error.message}`);
        } else {
            console.log(`✅ ${fix.slug} — ảnh đã sửa`);
        }
    }

    console.log('\n🎉 Hoàn tất sửa ảnh!');
}

fixImages();
