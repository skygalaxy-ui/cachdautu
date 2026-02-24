import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,title,content').eq('slug', 'kinh-nghiem-dau-tu-warren-buffett-10-nguyen-tac').single();

console.log('ID:', data.id);
console.log('Title:', data.title);
console.log('Length:', data.content.length, 'chars');
console.log('\n--- CONTENT ---\n');
console.log(data.content);
