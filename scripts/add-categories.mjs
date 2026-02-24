import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
const { error: authError } = await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
if (authError) { console.log('❌', authError.message); process.exit(1); }

const cats = [
    { name: 'Vàng', slug: 'vang', description: 'Đầu tư vàng, giá vàng, vàng SJC, vàng nhẫn, phân tích thị trường vàng Việt Nam và thế giới.' },
    { name: 'Forex', slug: 'forex', description: 'Kiến thức giao dịch Forex, phân tích tỷ giá, chiến lược đầu tư ngoại hối cho người Việt.' },
];

for (const cat of cats) {
    const { data, error } = await supabase.from('categories').insert(cat).select('id, name, slug');
    if (error) console.log(`❌ ${cat.name}:`, error.message);
    else console.log(`✅ Category "${data[0].name}" → /blog/${data[0].slug} (ID: ${data[0].id})`);
}
