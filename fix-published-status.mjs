import { supabase } from './scripts/utils/db.mjs';

async function fixPublishedStatus() {
    const today = '2026-02-26';
    const now = new Date().toISOString();

    // 1. Get posts that were supposed to be scheduled for the future but have is_published = true
    const { data: posts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, scheduled_at, is_published')
        .gt('scheduled_at', now)
        .eq('is_published', true);

    if (fetchError) {
        console.error('Error:', fetchError);
        return;
    }

    if (posts.length === 0) {
        console.log('No misconfigured scheduled posts found.');
        return;
    }

    console.log(`Fixing ${posts.length} posts to show as "Lên lịch"...`);

    for (const post of posts) {
        console.log(`- Updating "${post.title}" (Scheduled for: ${post.scheduled_at})`);

        const { error: updateError } = await supabase
            .from('posts')
            .update({
                is_published: false
            })
            .eq('id', post.id);

        if (updateError) {
            console.error(`  ❌ Failed: ${updateError.message}`);
        }
    }

    console.log('\n✅ Fix complete! Bây giờ admin sẽ hiện "Lên lịch".');
}

fixPublishedStatus();
