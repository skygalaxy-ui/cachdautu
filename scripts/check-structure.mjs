import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Check 3 sample posts to see the HTML structure
const slugs = ['xu-huong-gia-vang-chien-luoc-dau-tu', 'tam-ly-giao-dich-sai-lam-cam-xuc', 'chien-luoc-dca-binh-quan-gia'];
for (const slug of slugs) {
    const { data } = await s.from('posts').select('content').eq('slug', slug).single();
    console.log(`\n=== ${slug} ===`);
    // Show first 1500 chars to see the pattern
    console.log(data.content.substring(0, 1500));
    console.log('...\n');
}
