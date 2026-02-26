import { supabase } from './scripts/utils/db.mjs';

async function checkMore() {
    // Check for posts with scheduled_at in the future or is_published = false
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, created_at, scheduled_at, is_published')
        .or('is_published.eq.false,scheduled_at.gt.now()')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    console.log(`Found ${posts.length} unpublished or future-scheduled posts.`);
    posts.forEach(p => console.log(`- ${p.title} | Created: ${p.created_at} | Scheduled: ${p.scheduled_at} | Published: ${p.is_published}`));
}

checkMore();
