import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Test the exact query the landing page uses
const { data, error } = await s.from('posts')
    .select('id, title')
    .or('is_published.eq.true,scheduled_at.lte.' + new Date().toISOString())
    .order('views', { ascending: false })
    .limit(6);

console.log('Error:', error?.message || 'none');
console.log('Data:', data?.length || 0);

// Check if views column exists
const { data: d2, error: e2 } = await s.from('posts').select('views').limit(1);
console.log('Views column test:', e2?.message || 'exists', d2);
