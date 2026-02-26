import { supabase } from './scripts/utils/db.mjs';

async function reschedule() {
    const today = '2026-02-26';

    // 1. Get today's posts
    const { data: todayPosts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, created_at, scheduled_at, is_published')
        .gte('created_at', `${today}T00:00:00Z`)
        .lte('created_at', `${today}T23:59:59Z`)
        .order('created_at', { ascending: true });

    if (fetchError) {
        console.error('Error:', fetchError);
        return;
    }

    if (todayPosts.length === 0) {
        console.log('No posts found for today.');
        return;
    }

    console.log(`Rescheduling ${todayPosts.length} posts...`);

    // 2. Find the last scheduled date
    const { data: lastPost } = await supabase
        .from('posts')
        .select('scheduled_at')
        .order('scheduled_at', { ascending: false, nullsFirst: false })
        .limit(1);

    let startDate = new Date('2026-02-27');
    if (lastPost && lastPost[0] && lastPost[0].scheduled_at) {
        const lastDate = new Date(lastPost[0].scheduled_at);
        if (lastDate > startDate) {
            startDate = new Date(lastDate);
            startDate.setDate(startDate.getDate() + 1);
        }
    }

    console.log(`Starting rescheduled dates from: ${startDate.toISOString().split('T')[0]}`);

    // 3. Update posts
    for (let i = 0; i < todayPosts.length; i++) {
        const post = todayPosts[i];
        const newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() + i);
        newDate.setHours(7, 0, 0, 0); // Set to 7:00 AM

        const isoDate = newDate.toISOString();

        console.log(`- Moving "${post.title}" to ${isoDate.split('T')[0]}`);

        const { error: updateError } = await supabase
            .from('posts')
            .update({
                scheduled_at: isoDate,
                created_at: isoDate, // Also update created_at so it shows up in order
                is_published: true // Keeping it true as per current pattern, or false if user wants "real" scheduling
            })
            .eq('id', post.id);

        if (updateError) {
            console.error(`  ❌ Failed: ${updateError.message}`);
        }
    }

    console.log('\n✅ Rescheduling complete!');
}

reschedule();
