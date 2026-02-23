import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Find the post from screenshot with "dau-tu-theo-mua" 
const { data: posts } = await s.from('posts').select('id, slug, title, category_id').eq('is_published', true);
for (const p of posts || []) {
    if (p.slug.includes('theo-mua') || p.slug.includes('hieu-ung')) {
        console.log(`Found: slug="${p.slug}" title="${p.title}" category_id=${p.category_id}`);
    }
}

// Also check all unique category_ids used by posts
const catIds = [...new Set((posts || []).map(p => p.category_id).filter(Boolean))];
console.log('\nUnique category_ids used:', catIds);

// Fetch those categories
const { data: cats } = await s.from('categories').select('id, slug, name').in('id', catIds);
console.log('\nCategories in use:');
for (const c of cats || []) {
    console.log(`  ${c.id} → slug="${c.slug}" name="${c.name}"`);
}

// Now check: does the URL generation use category name instead of slug?
// Look for all posts and their mapped categories
console.log('\n=== ALL POSTS with category info ===');
for (const p of posts || []) {
    const cat = cats?.find(c => c.id === p.category_id);
    const catDisplay = cat ? `${cat.slug} (${cat.name})` : `NO CATEGORY (id: ${p.category_id})`;
    console.log(`  /${catDisplay}/${p.slug}`);
}
