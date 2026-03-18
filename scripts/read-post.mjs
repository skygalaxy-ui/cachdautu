import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: post, error } = await s.from('posts')
    .select('*')
    .eq('slug', 'quy-dau-tu-tot-nhat-viet-nam-2026')
    .single();

if (error) { console.error('❌', error.message); process.exit(1); }

console.log('📝 THÔNG TIN BÀI VIẾT:');
console.log(`  Title: ${post.title}`);
console.log(`  Slug: ${post.slug}`);
console.log(`  Category ID: ${post.category_id}`);
console.log(`  Focus Keyword: ${post.focus_keyword}`);
console.log(`  Excerpt: ${post.excerpt}`);
console.log(`  Published: ${post.is_published}`);
console.log(`  Word count: ${post.content.split(/\s+/).length}`);
console.log(`  Content length: ${post.content.length} chars`);

// Save content to file for review
writeFileSync('scripts/post-content-quy-dau-tu.md', post.content, 'utf8');
console.log('\n✅ Nội dung đã lưu vào scripts/post-content-quy-dau-tu.md');
