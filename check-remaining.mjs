import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts')
    .select('id, title, content, categories(slug)')
    .eq('is_published', true);

let noImgCount = 0;
const noImgPosts = [];

for (const p of posts) {
    const c = p.content || '';
    const htmlImgs = c.match(/<img[^>]+/g) || [];
    const mdImgs = c.match(/!\[.*?\]\(.*?\)/g) || [];
    const figImgs = c.match(/<figure/g) || [];
    const total = htmlImgs.length + mdImgs.length + figImgs.length;
    
    if (total === 0) {
        noImgCount++;
        const h2Count = (c.match(/<h2/g) || c.match(/^## /gm) || []).length;
        noImgPosts.push({ title: p.title.substring(0, 60), cat: p.categories?.slug, h2s: h2Count, contentLen: c.length });
    }
}

console.log(`Posts still without inline images: ${noImgCount}`);
noImgPosts.forEach((p, i) => {
    console.log(`${i+1}. [${p.cat}] ${p.title} (H2s: ${p.h2s}, chars: ${p.contentLen})`);
});
