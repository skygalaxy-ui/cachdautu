import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const cryptoCatId = 'b7ced1f1-2dc7-47c7-a3bb-36d66c24cae5';
const forexCatId = 'd0457801-0e3c-402b-9846-2a5926fb64c6';

async function listItemsToDelete() {
    // 1. Posts by category
    const { data: postsByCat } = await s.from('posts').select('id, title, slug, category_id').or(`category_id.eq.${cryptoCatId},category_id.eq.${forexCatId}`);

    // 2. Posts by keywords (in case they are miscategorized)
    const keywords = ['crypto', 'forex', 'bitcoin', 'blockchain', 'ngoai hoi', 'ngoai-hoi', 'tien ao', 'tien-ao', 'altcoin', 'defi', 'binance', 'metatrader'];
    const { data: allPosts } = await s.from('posts').select('id, title, slug');
    const postsByKeywords = allPosts.filter(p =>
        keywords.some(k => p.title.toLowerCase().includes(k) || p.slug.toLowerCase().includes(k))
    );

    // Merge unique
    const postsToDelete = [...new Map([...postsByCat, ...postsByKeywords].map(item => [item.id, item])).values()];

    console.log(`--- POSTS TO DELETE (${postsToDelete.length}) ---`);
    postsToDelete.forEach(p => console.log(`- ${p.title} (${p.slug})`));

    // Categories
    console.log(`\n--- CATEGORIES TO DELETE ---`);
    console.log(`- Crypto (${cryptoCatId})`);
    console.log(`- Forex (${forexCatId})`);
}

listItemsToDelete();
