#!/usr/bin/env node
// Auto-publish: Đồng bộ is_published cho bài viết đã đến giờ scheduled_at
// Chạy thủ công: node scripts/auto-publish.mjs
// Hoặc tự động qua GitHub Actions mỗi 6h

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function autoPublish() {
    console.log('🔄 Auto-publish: Kiểm tra bài viết đã đến giờ...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Login failed:', authError.message); return; }

    const now = new Date().toISOString();

    // Tìm bài chưa published nhưng đã qua giờ scheduled
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, scheduled_at')
        .eq('is_published', false)
        .not('scheduled_at', 'is', null)
        .lte('scheduled_at', now);

    if (error) { console.log('❌ Fetch error:', error.message); return; }

    if (!posts || posts.length === 0) {
        console.log('✅ Không có bài nào cần publish. Tất cả đã cập nhật.');
        return;
    }

    console.log(`📝 Tìm thấy ${posts.length} bài cần publish:\n`);

    let success = 0;
    for (const post of posts) {
        const { error: updateError } = await supabase
            .from('posts')
            .update({ is_published: true })
            .eq('id', post.id);

        if (!updateError) {
            console.log(`  ✅ ${post.title}`);
            console.log(`     scheduled: ${post.scheduled_at}`);
            success++;
        } else {
            console.log(`  ❌ ${post.title}: ${updateError.message}`);
        }
    }

    console.log(`\n🎉 Done! Published ${success}/${posts.length} bài.`);
}

autoPublish();
