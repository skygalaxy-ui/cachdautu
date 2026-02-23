import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const img = (id) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`;

// All verified working replacement IDs (confirmed 200 OK)
const REPLACEMENTS = {
    // BROKEN → REPLACEMENT (all verified working)
    '1535320903710-d946a44dc2d0': '1611974789855-9c2a0a7236a3',  // stock/trading → business analytics
    '1610375461246-83b8e4e5d4b0': '1593672715438-d88a70629abe',  // gold/usd → gold
    '1610375461246-83df859df2d4': '1593672715438-d88a70629abe',  // gold trend → gold
    '1504711434969-e33886168d8c': '1495020689067-958852a7765e',  // finance news → newspaper
    '1579621970563-9d57d11b0b13': '1579621970795-87facc2f976d',  // saving → piggy bank
    '1450101499163-c8848e968838': '1554224155-6726b3ff858f',     // mistakes → caution
    '1633158829585-5f1cb0cce274': '1460925895917-afdab827c52f',  // channels → planning
    '1624365168968-f283d506c6b0': '1618044733300-9472054094ee',  // gold invest → gold coins
    '1579621970563-9ae2e01248e6': '1590283603385-17ffb3a7f29f',  // general invest → chart
    '1579621970563-9ae2e20e0d85': '1554224155-6726b3ff858f',    // savings vs invest → growth
    '1611974789855-1c84a266b492': '1611974789855-9c2a0a7236a3',  // compound → analytics
    '1560518883-ce09cec164a6': '1560184897-ae75f418493e',      // real estate → house
    '1622630998477-0d96834cf5db': '1605792657660-596af9009e82',   // crypto risk → crypto
    '1633158829585-23ba8f7c8451': '1454165804606-c3d57bc86b40',   // DCA → invest plan
};

async function fixBrokenImages() {
    console.log('🔧 SỬA ẢNH BỊ LỖI 404 TRÊN CÁC BÀI VIẾT ĐÃ ĐĂNG\n');

    // Verify all replacement images
    console.log('📋 Xác minh ảnh thay thế...');
    const uniqueNewIds = [...new Set(Object.values(REPLACEMENTS))];
    let allOk = true;
    for (const id of uniqueNewIds) {
        const r = await fetch(img(id), { method: 'HEAD', redirect: 'follow' });
        if (r.status !== 200) { console.log(`  ❌ ${id} → ${r.status}`); allOk = false; }
        else { console.log(`  ✅ ${id}`); }
    }
    if (!allOk) { console.log('\n❌ Có ảnh thay thế bị lỗi, dừng lại.'); return; }
    console.log('✅ Tất cả ảnh thay thế OK!\n');

    // Auth
    const { error: authErr } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com', password: 'CachDauTu@2026!'
    });
    if (authErr) { console.error('❌ Auth:', authErr.message); return; }

    // Get posts
    const { data: posts, error } = await supabase
        .from('posts').select('id, slug, title, featured_image, content')
        .eq('is_published', true);
    if (error) { console.error('❌ Query:', error.message); return; }

    console.log(`📝 Tổng: ${posts.length} bài viết đã đăng\n`);

    let fixed = 0;
    for (const post of posts) {
        let needUpdate = false;
        let newFeatured = post.featured_image;
        let newContent = post.content || '';

        for (const [oldId, newId] of Object.entries(REPLACEMENTS)) {
            if (newFeatured && newFeatured.includes(oldId)) {
                newFeatured = newFeatured.replaceAll(oldId, newId);
                needUpdate = true;
            }
            if (newContent.includes(oldId)) {
                newContent = newContent.replaceAll(oldId, newId);
                needUpdate = true;
            }
        }

        if (needUpdate) {
            const { error: upErr } = await supabase.from('posts')
                .update({ featured_image: newFeatured, content: newContent })
                .eq('id', post.id);
            if (upErr) { console.log(`❌ ${post.slug}: ${upErr.message}`); }
            else { console.log(`✅ Đã sửa: ${post.slug}`); fixed++; }
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`🎉 Hoàn tất! Đã sửa ${fixed} bài viết`);
    console.log(`${'='.repeat(50)}`);
}

fixBrokenImages();
