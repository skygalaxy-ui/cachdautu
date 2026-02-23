import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxOTA0MTksImV4cCI6MjA1NDc2NjQxOX0.se1C3sFPybZ_wbMDiDBCLu2TaeGSJcP9dG-v7s6VKBE'
);

// No auth - anon like the website
const { data: posts, count, error } = await s
    .from('posts')
    .select('id, slug', { count: 'exact' })
    .eq('is_published', true)
    .order('created_at', { ascending: false });

console.log('Error:', error?.message || 'none');
console.log('Count:', count);
console.log('Posts returned:', posts?.length);

if (posts) {
    for (const p of posts) {
        console.log(`  ${p.slug}`);
    }
}
