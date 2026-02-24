import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,title').order('created_at', { ascending: true });

console.log(`Tổng: ${data.length} bài\n`);
data.forEach((p, i) => {
    console.log(`${i + 1}. ${p.title}`);
});
