import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts').select('id, title, slug, content, scheduled_at, is_published');

const shortPosts = posts.filter(p => {
    const wordCount = (p.content || '').split(/\s+/).filter(w => w.length > 0).length;
    return wordCount < 1000 && wordCount > 0;
});

// Sort by scheduled_at to prioritize upcoming or published ones
shortPosts.sort((a, b) => {
    if (!a.scheduled_at) return 1;
    if (!b.scheduled_at) return -1;
    return new Date(a.scheduled_at) - new Date(b.scheduled_at);
});

console.log(`Tìm thấy ${shortPosts.length} bài viết dưới 1000 từ.`);

const result = shortPosts.map(p => {
    const wordCount = (p.content || '').split(/\s+/).filter(w => w.length > 0).length;
    return {
        id: p.id,
        title: p.title,
        slug: p.slug,
        wordCount,
        scheduled_at: p.scheduled_at,
        is_published: p.is_published
    };
});

writeFileSync('f:/antigravity-projects/cachdautu/scripts/short-posts-list.json', JSON.stringify(result, null, 2));
result.slice(0, 10).forEach((p, i) => {
    console.log(`${i + 1}. [${p.wordCount} từ] ${p.title} (${p.slug})`);
});
