import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Get all posts for internal linking reference
const { data: allPosts } = await s.from('posts')
    .select('id, title, slug, category_id, is_published')
    .order('title');

// Get categories
const { data: cats } = await s.from('categories').select('id, name, slug');

// Get the 7 placeholder posts with full content
const placeholderSlugs = [
    'crowdfunding-goi-von-cong-dong',
    'trai-phieu-la-gi-huong-dan',
    'esop-co-phieu-nhan-vien',
    'rui-ro-dau-tu-startup',
    'danh-gia-startup-truoc-dau-tu',
    'angel-investing-la-gi',
    'thoi-quen-tai-chinh'
];

const { data: placeholders } = await s.from('posts')
    .select('*')
    .in('slug', placeholderSlugs);

const result = {
    categories: cats,
    all_posts_for_linking: allPosts.map(p => ({
        title: p.title,
        slug: p.slug,
        category_id: p.category_id,
        url: `/blog/${cats.find(c => c.id === p.category_id)?.slug || 'unknown'}/${p.slug}`
    })),
    placeholder_posts: placeholders.map(p => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        category_id: p.category_id,
        category: cats.find(c => c.id === p.category_id)?.name,
        content: p.content,
        excerpt: p.excerpt,
        featured_image: p.featured_image,
        focus_keyword: p.focus_keyword
    }))
};

writeFileSync('f:/antigravity-projects/cachdautu/scripts/linking-data.json', JSON.stringify(result, null, 2));
console.log(`Categories: ${cats.length}`);
console.log(`Total posts for linking: ${allPosts.length}`);
console.log(`Placeholder posts: ${placeholders.length}`);
cats.forEach(c => console.log(`  ${c.name}: ${c.slug} (${c.id})`));
