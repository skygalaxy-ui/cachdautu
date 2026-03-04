import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slugs = [
    'chon-san-forex-uy-tin-2026-5-tieu-chi-bat-buoc',
    'mua-vang-o-dau-re-nhat-so-sanh-gia-2026',
    'quan-ly-von-forex-quy-tac-2-phan-tram'
];

const { data: posts } = await s.from('posts').select('title, slug, content, id').in('slug', slugs);

writeFileSync('f:/antigravity-projects/cachdautu/scripts/posts-to-expand.json', JSON.stringify(posts, null, 2));
console.log(`Đã đọc ${posts.length} bài viết.`);
