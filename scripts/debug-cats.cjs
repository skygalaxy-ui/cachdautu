const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Load .env.local
const env = fs.readFileSync('.env.local', 'utf-8');
env.split('\n').forEach(l => {
    const [k, ...v] = l.split('=');
    if (k && v.length) process.env[k.trim()] = v.join('=').trim();
});

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

(async () => {
    // Get all posts with raw category_id
    const { data: posts } = await s.from('posts').select('id, title, category_id').order('created_at', { ascending: false });

    // Get all categories
    const { data: cats } = await s.from('categories').select('id, name, slug');

    const catMap = {};
    cats.forEach(c => { catMap[c.id] = c.name; });

    console.log('=== POSTS WITH CATEGORY IDS ===');
    posts.forEach(p => {
        const catName = catMap[p.category_id] || 'UNKNOWN/MISSING';
        console.log(catName + ' | ' + p.title + ' | cat_id: ' + p.category_id);
    });

    console.log('\n=== CATEGORY IDS IN DB ===');
    cats.forEach(c => console.log(c.id + ' = ' + c.name));

    // Check unique category_ids used in posts
    const usedIds = [...new Set(posts.map(p => p.category_id).filter(Boolean))];
    console.log('\n=== UNIQUE CATEGORY IDS USED IN POSTS ===');
    usedIds.forEach(id => {
        const match = cats.find(c => c.id === id);
        console.log(id + ' => ' + (match ? match.name : 'NOT FOUND IN CATEGORIES TABLE'));
    });
})();
