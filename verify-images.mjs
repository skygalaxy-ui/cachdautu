import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts')
    .select('id, title, featured_image')
    .eq('is_published', true)
    .order('scheduled_at', { ascending: false, nullsFirst: false })
    .limit(10);

console.log('Testing top 10 images...\n');

for (const post of posts) {
    try {
        const res = await fetch(post.featured_image, { method: 'HEAD' });
        const status = res.ok ? '✅' : `❌ ${res.status}`;
        console.log(`${status} ${post.title.substring(0, 55)}`);
    } catch (e) {
        console.log(`❌ FAIL ${post.title.substring(0, 55)} - ${e.message}`);
    }
}
