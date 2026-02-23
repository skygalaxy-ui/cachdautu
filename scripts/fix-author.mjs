import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Get columns of posts table
const { data: row } = await s.from('posts').select('*').limit(1).single();
console.log('Posts columns:', Object.keys(row));
console.log('\nSample post:', JSON.stringify(row, null, 2).substring(0, 500));

// Check: total with service role
const { count: totalCount } = await s.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', true);
console.log('\nTotal published (authenticated):', totalCount);

// Check if there's something weird with the blog page query specifically
const { data: blogQuery, count: blogCount } = await s
    .from('posts')
    .select('*, categories(name, slug)', { count: 'exact' })
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .range(0, 11);

console.log('Blog query result count:', blogCount);
console.log('Blog query rows:', blogQuery?.length);
