import { supabase } from './utils/db.mjs';

async function checkPost() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select(`
            id, 
            slug, 
            is_published, 
            scheduled_at,
            categories (slug)
        `)
        .eq('slug', 'thoi-quen-tai-chinh');

    if (error) {
        console.error('Error fetching post:', error);
        return;
    }

    if (posts && posts.length > 0) {
        console.log('Post found:', JSON.stringify(posts, null, 2));
        posts.forEach(post => {
            const path = `/blog/${post.categories?.slug || 'uncategorized'}/${post.slug}`;
            console.log(`Computed Path: ${path}`);
        });
    } else {
        console.log('Post NOT found in database with slug: thoi-quen-tai-chinh');

        // Let's search by part of the slug just in case
        const { data: similar } = await supabase
            .from('posts')
            .select('slug, title')
            .ilike('slug', '%thoi-quen%');
        console.log('Similar posts:', similar);
    }
}

checkPost();
