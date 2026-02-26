import { supabase } from './scripts/utils/db.mjs';

async function checkSchedule() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error fetching post:', error);
        return;
    }

    console.log('Post columns:', Object.keys(posts[0]));

    // Check posts scheduled for today (Feb 26, 2026)
    // Assuming created_at or is_published logic is used for scheduling
    const today = new Date('2026-02-26').toISOString().split('T')[0];

    const { data: todayPosts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, created_at, is_published')
        .gte('created_at', `${today}T00:00:00Z`)
        .lte('created_at', `${today}T23:59:59Z`);

    if (fetchError) {
        console.error('Error fetching today\'s posts:', fetchError);
        return;
    }

    console.log(`Found ${todayPosts.length} posts for today.`);
    todayPosts.forEach(p => console.log(`- ${p.title} (${p.created_at}) [Published: ${p.is_published}]`));
}

checkSchedule();
