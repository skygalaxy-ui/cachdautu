import { createClient } from '@supabase/supabase-js';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data, error } = await s.from('posts').select('slug, created_at, is_published').eq('is_published', true).order('created_at', { ascending: false });
if (error) { console.log('Error:', error.message); process.exit(1); }
console.log(`Total published: ${data.length}\n`);
for (const p of data) {
    console.log(`${p.created_at?.substring(0, 16)} | ${p.slug}`);
}

// Check RLS - query without auth
const anon = createClient('https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxOTA0MTksImV4cCI6MjA1NDc2NjQxOX0.se1C3sFPybZ_wbMDiDBCLu2TaeGSJcP9dG-v7s6VKBE');

const { data: anonData, error: anonErr, count: anonCount } = await anon
    .from('posts')
    .select('slug', { count: 'exact' })
    .eq('is_published', true);

console.log(`\n--- ANON query ---`);
console.log('Error:', anonErr?.message || 'none');
console.log('Count:', anonCount);
console.log('Posts:', anonData?.length);
