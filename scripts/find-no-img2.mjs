import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: noImg } = await s.from('posts')
    .select('id, title, slug')
    .is('featured_image', null);

noImg.forEach((p, i) => {
    console.log(`${i + 1}. ${p.slug} | ${p.id}`);
});

const { data: withImg } = await s.from('posts')
    .select('featured_image')
    .not('featured_image', 'is', null)
    .limit(3);

console.log('\nFormat mẫu:');
withImg.forEach(p => console.log(p.featured_image));
