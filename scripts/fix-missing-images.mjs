import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// 7 bài thiếu ảnh + ảnh Unsplash phù hợp (verified working URLs)
const updates = [
    {
        id: 'abf9bc08-e42d-46ca-9261-b6b3c71f339e',
        slug: 'trai-phieu-la-gi-huong-dan',
        // Trái phiếu - Business/financial document theme
        featured_image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop'
    },
    {
        id: '2c33faa3-7404-4cb4-9062-796189d5e895',
        slug: 'thoi-quen-tai-chinh',
        // Thói quen tài chính - Saving/piggy bank/money management theme
        featured_image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=630&fit=crop'
    },
    {
        id: '40056e16-110a-4e8c-8b6b-2bea7865d438',
        slug: 'rui-ro-dau-tu-startup',
        // Rủi ro startup - Risk/danger/chess theme
        featured_image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&h=630&fit=crop'
    },
    {
        id: '74624155-6854-443d-82d2-ee4609a48f5f',
        slug: 'danh-gia-startup-truoc-dau-tu',
        // Đánh giá startup - Analysis/evaluation/meeting theme
        featured_image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=630&fit=crop'
    },
    {
        id: 'c6d6ac38-166c-41fc-93dd-c7118d9e526f',
        slug: 'angel-investing-la-gi',
        // Angel investing - Startup/handshake/investment theme
        featured_image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop'
    },
    {
        id: '4e1c2530-491a-4474-b2bf-661a81717cb4',
        slug: 'crowdfunding-goi-von-cong-dong',
        // Crowdfunding - Community/teamwork/hands together theme
        featured_image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop'
    },
    {
        id: '96767a6f-316a-4c13-9e0b-dd0d9ceaae1f',
        slug: 'esop-co-phieu-nhan-vien',
        // ESOP - Office/team/employees theme
        featured_image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop'
    }
];

let success = 0;
for (const u of updates) {
    const { error } = await s.from('posts').update({
        featured_image: u.featured_image,
        updated_at: new Date().toISOString()
    }).eq('id', u.id);

    if (error) {
        console.log(`❌ ${u.slug}: ${error.message}`);
    } else {
        success++;
        console.log(`✅ ${u.slug}`);
        console.log(`   📸 ${u.featured_image.substring(0, 70)}...`);
    }
}

console.log(`\n🎉 Đã thêm featured image cho ${success}/7 bài!`);
