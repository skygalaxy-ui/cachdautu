import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Find ALL posts without category_id
const { data: posts } = await s.from('posts').select('id, slug, title, category_id').is('category_id', null);

console.log(`\n📊 Bài chưa có category: ${(posts || []).length}\n`);
for (const p of posts || []) {
    console.log(`  ${p.slug} | ${p.title}`);
}

// Also list all categories
const { data: cats } = await s.from('categories').select('id, name, slug');
console.log(`\n📁 Categories:\n`);
for (const c of cats || []) {
    console.log(`  ${c.slug} → ${c.id}`);
}
