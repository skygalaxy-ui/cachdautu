import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Find posts without featured images
const { data: noImage } = await s.from('posts')
    .select('id, title, slug, featured_image, category_id')
    .is('featured_image', null);

console.log(`\n📸 ${noImage.length} bài thiếu featured image:\n`);
noImage.forEach((p, i) => {
    console.log(`${i + 1}. [${p.id}] ${p.title}`);
    console.log(`   slug: ${p.slug}`);
});

// Also check posts with featured images - what format are they using?
const { data: withImage } = await s.from('posts')
    .select('featured_image')
    .not('featured_image', 'is', null)
    .limit(5);

console.log('\n📷 Ví dụ featured_image hiện tại:');
withImage.forEach(p => console.log(`   ${p.featured_image}`));
