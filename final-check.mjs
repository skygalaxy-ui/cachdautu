import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts')
    .select('id, title, content, categories(slug)')
    .eq('is_published', true);

let count = 0;
const remaining = [];

for (const p of posts) {
    const c = p.content || '';
    // Check ALL image types
    const hasImg = c.includes('<img') || c.includes('![') || c.includes('<figure');
    if (!hasImg) {
        count++;
        remaining.push(`[${p.categories?.slug}] ${p.title.substring(0, 55)}`);
    }
}

console.log(`Posts with ZERO images (any format): ${count}`);
remaining.forEach((r, i) => console.log(`${i+1}. ${r}`));

// Also count total images per post
let postsWithLessThan2 = 0;
for (const p of posts) {
    const c = p.content || '';
    const imgs = (c.match(/<img/g) || []).length + (c.match(/!\[/g) || []).length;
    if (imgs < 2 && imgs > 0) postsWithLessThan2++;
}
console.log(`\nPosts with only 1 image: ${postsWithLessThan2}`);
console.log(`Posts with 2+ images: ${posts.length - count - postsWithLessThan2}`);
