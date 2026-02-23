import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Get all columns for the dau-tu-theo-mua post
const { data } = await s.from('posts').select('*').ilike('slug', '%theo-mua%').single();
if (data) {
    // Show all keys and values   
    for (const [k, v] of Object.entries(data)) {
        if (k === 'content') continue; // skip long content
        console.log(`  ${k}: ${JSON.stringify(v)}`);
    }
}

// Also get 3 random posts to see ALL columns
console.log('\n=== Random post columns ===');
const { data: posts } = await s.from('posts').select('slug, category, category_id, tags').limit(5);
for (const p of posts || []) {
    console.log(`  ${p.slug} | category="${p.category}" | category_id=${p.category_id} | tags=${JSON.stringify(p.tags)}`);
}
