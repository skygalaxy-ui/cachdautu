import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const categoryImages = {
    '31d10229-9735-4f69-a368-08ea7f0550a1': 'photo-1460925895917-afdab827c52f', // Kiến thức
    '96d5c106-653b-470e-90a7-6875e9a490fd': 'photo-1611974714656-718fb361668f', // Chứng khoán
    '439e89a0-04db-4c18-a91b-92682428e111': 'photo-1560518883-ce09059eeffa', // Bất động sản
    '0a381b9b-e2af-4762-85d9-b8ff8c231b31': 'photo-1579621970795-87f967b1658c', // Tài chính cá nhân
    'ac86a067-5518-42d7-8045-a92a75f4a15f': 'photo-1552664730-d307ca884978', // Kinh nghiệm
    '49a89c1c-90dc-4d14-9f06-6efc97aec499': 'photo-1581091226825-a6a2a5aee158', // Vàng
    'c4270425-5c6e-43af-aa92-aff4caa6d082': 'photo-1559136555-9303baea8ebd', // Khởi nghiệp
    '67a36bba-0fa3-491d-96c0-a69b7efb5845': 'photo-1450101496173-eb4151c864ce', // Trái phiếu
    '8cf5a4ca-c2cb-4e27-9bcf-9df51e5041dc': 'photo-1551288049-bbbda536339a', // Quỹ đầu tư
    '8971edd8-a375-460a-beea-441c65acfa1a': 'photo-1512132411229-c30391241dd8', // Đầu tư thay thế
    '7c27ed54-bf17-4892-8c39-4402d607d149': 'photo-1557597774-9d2739f85a7c'  // Cảnh báo
};

async function updateImages() {
    const { data: posts, error } = await s.from('posts')
        .select('id, title, category_id')
        .is('featured_image', null);

    if (error) {
        console.error("error:", error.message);
        return;
    }

    console.log(`Bắt đầu gán ảnh cao cấp cho ${posts.length} bài viết...`);

    for (const post of posts) {
        const photoId = categoryImages[post.category_id] || 'photo-1590283603385-17ffb3a7f29f';
        const imageUrl = `https://images.unsplash.com/${photoId}?w=1200&h=630&fit=crop&q=80`;

        const { error: updateError } = await s.from('posts')
            .update({ featured_image: imageUrl })
            .eq('id', post.id);

        if (updateError) {
            console.error(`❌ Lỗi ${post.id}:`, updateError.message);
        } else {
            console.log(`✅ ${post.title}`);
        }
    }

    console.log("--- HOÀN TẤT ---");
}

updateImages();
