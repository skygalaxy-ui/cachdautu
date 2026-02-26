import { supabase } from './utils/db.mjs';

async function listPosts() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select(`
            title, 
            slug, 
            is_published, 
            categories (slug)
        `)
        .limit(20);

    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    console.log('Posts in DB:');
    posts.forEach(p => {
        console.log(`- Title: ${p.title}`);
        console.log(`  Path: /blog/${p.categories?.slug || 'uncategorized'}/${p.slug}`);
    });
}

listPosts();
