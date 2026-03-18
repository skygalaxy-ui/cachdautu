import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts')
    .select('id, title, slug, featured_image, category_id, categories(name, slug), content')
    .eq('is_published', true)
    .order('scheduled_at', { ascending: false, nullsFirst: false });

// Build report
const report = [];
const imageMap = {};

for (const post of posts) {
    const img = post.featured_image || 'NONE';
    if (!imageMap[img]) imageMap[img] = [];
    imageMap[img].push({ id: post.id, title: post.title, cat: post.categories?.slug });
    
    const inlineImgs = (post.content || '').match(/<img[^>]+/g) || [];
    const mdImgs = (post.content || '').match(/!\[.*?\]\(.*?\)/g) || [];
    
    report.push({
        id: post.id,
        title: post.title,
        cat: post.categories?.slug || 'none',
        featured_image: img,
        inlineImageCount: inlineImgs.length + mdImgs.length
    });
}

// Count duplicates
let dupGroups = 0;
const dupDetails = [];
for (const [img, items] of Object.entries(imageMap)) {
    if (items.length > 1) {
        dupGroups++;
        dupDetails.push({ image: img.substring(0, 100), count: items.length, posts: items.map(i => i.title.substring(0, 50)) });
    }
}

const output = {
    totalPosts: posts.length,
    uniqueImages: Object.keys(imageMap).length,
    duplicateGroups: dupGroups,
    postsWithNoInlineImages: report.filter(p => p.inlineImageCount === 0).length,
    duplicates: dupDetails,
    posts: report.map(p => ({ id: p.id, title: p.title, cat: p.cat, inlineImgs: p.inlineImageCount }))
};

writeFileSync('/tmp/image-audit.json', JSON.stringify(output, null, 2));
console.log('Written to /tmp/image-audit.json');
console.log(`Total: ${output.totalPosts}, Unique imgs: ${output.uniqueImages}, Dup groups: ${output.duplicateGroups}`);
console.log(`Posts with 0 inline images: ${output.postsWithNoInlineImages}`);
