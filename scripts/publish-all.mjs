import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function publishAll() {
    console.log('📢 Xuất bản tất cả bài viết...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Login failed:', authError.message); return; }

    // Get all unpublished posts
    const { data: posts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, slug, is_published')
        .eq('is_published', false);

    if (fetchError) { console.log('❌ Fetch error:', fetchError.message); return; }

    if (!posts || posts.length === 0) {
        console.log('✅ Tất cả bài viết đã được xuất bản rồi!');
        return;
    }

    console.log(`📝 Tìm thấy ${posts.length} bài chưa xuất bản:\n`);

    for (const post of posts) {
        const { error } = await supabase
            .from('posts')
            .update({ is_published: true })
            .eq('id', post.id);

        if (error) {
            console.log(`  ❌ ${post.title}: ${error.message}`);
        } else {
            console.log(`  ✅ ${post.title}`);
        }
    }

    console.log('\n🎉 Done!');
}

publishAll();
