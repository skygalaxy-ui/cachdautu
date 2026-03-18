import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Get the latest published post
const { data: post } = await s.from('posts')
    .select('*, categories(name, slug)')
    .eq('is_published', true)
    .order('scheduled_at', { ascending: false, nullsFirst: false })
    .limit(1)
    .single();

if (!post) {
    console.log('No posts found!');
    process.exit(1);
}

console.log('=== BÀI VIẾT MỚI NHẤT ===\n');
console.log(`Tiêu đề: ${post.title}`);
console.log(`Slug: ${post.slug}`);
console.log(`Category: ${post.categories?.name} (${post.categories?.slug})`);
console.log(`Ngày đăng: ${post.scheduled_at}`);
console.log(`Ngày tạo: ${post.created_at}`);
console.log(`Published: ${post.is_published}`);
console.log(`Featured Image: ${post.featured_image}`);
console.log(`Excerpt: ${post.excerpt?.substring(0, 150)}...`);
console.log(`Meta Title: ${post.meta_title || 'KHÔNG CÓ'}`);
console.log(`Meta Description: ${post.meta_description?.substring(0, 150) || 'KHÔNG CÓ'}`);
console.log(`Tags: ${JSON.stringify(post.tags)}`);
console.log(`Reading Time: ${post.reading_time || 'KHÔNG CÓ'}`);

// Content analysis
const content = post.content || '';
const wordCount = content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
const h2Count = (content.match(/<h2/gi) || content.match(/^## /gm) || []).length;
const h3Count = (content.match(/<h3/gi) || content.match(/^### /gm) || []).length;
const imgCount = (content.match(/<img/gi) || []).length + (content.match(/!\[/g) || []).length;
const linkCount = (content.match(/<a /gi) || []).length;
const tableCount = (content.match(/<table/gi) || []).length;
const listCount = (content.match(/<li/gi) || []).length;

console.log('\n=== PHÂN TÍCH NỘI DUNG ===');
console.log(`Số từ: ${wordCount}`);
console.log(`Số ký tự: ${content.length}`);
console.log(`H2 headings: ${h2Count}`);
console.log(`H3 headings: ${h3Count}`);
console.log(`Inline images: ${imgCount}`);
console.log(`Links: ${linkCount}`);
console.log(`Tables: ${tableCount}`);
console.log(`List items: ${listCount}`);

// Quality scoring
let score = 0;
const issues = [];
const goods = [];

if (wordCount >= 1500) { score += 20; goods.push(`✅ Độ dài tốt: ${wordCount} từ`); }
else if (wordCount >= 800) { score += 10; issues.push(`⚠️ Nên dài hơn: ${wordCount}/1500 từ`); }
else { issues.push(`❌ Quá ngắn: ${wordCount}/800 từ tối thiểu`); }

if (h2Count >= 3) { score += 15; goods.push(`✅ H2 headings đủ: ${h2Count}`); }
else { issues.push(`⚠️ Cần thêm H2: ${h2Count}/3`); }

if (imgCount >= 2) { score += 15; goods.push(`✅ Đủ hình ảnh: ${imgCount}`); }
else if (imgCount >= 1) { score += 5; issues.push(`⚠️ Nên thêm hình: ${imgCount}/2`); }
else { issues.push(`❌ Không có hình ảnh inline`); }

if (post.meta_title) { score += 10; goods.push(`✅ Có meta title`); }
else { issues.push(`❌ Thiếu meta title`); }

if (post.meta_description && post.meta_description.length >= 100) { score += 10; goods.push(`✅ Meta description tốt: ${post.meta_description.length} ký tự`); }
else if (post.meta_description) { issues.push(`⚠️ Meta description ngắn: ${post.meta_description.length}/100`); }
else { issues.push(`❌ Thiếu meta description`); }

if (post.excerpt && post.excerpt.length >= 50) { score += 5; goods.push('✅ Có excerpt'); }
else { issues.push('⚠️ Thiếu/ngắn excerpt'); }

if (post.tags && post.tags.length >= 3) { score += 5; goods.push(`✅ Tags đầy đủ: ${post.tags.length}`); }
else { issues.push(`⚠️ Ít tags: ${post.tags?.length || 0}/3`); }

if (post.reading_time) { score += 5; goods.push('✅ Có reading time'); }
else { issues.push('⚠️ Thiếu reading time'); }

if (post.featured_image) { score += 10; goods.push('✅ Có featured image'); }
else { issues.push('❌ Thiếu featured image'); }

if (listCount >= 3) { score += 5; goods.push(`✅ Có list items: ${listCount}`); }

console.log(`\n=== ĐIỂM CHẤT LƯỢNG: ${score}/100 ===\n`);
goods.forEach(g => console.log(g));
console.log('');
issues.forEach(i => console.log(i));

// Save first 2000 chars of content to review
writeFileSync('/tmp/latest-post-preview.txt', content.substring(0, 3000));
console.log('\nContent preview saved to /tmp/latest-post-preview.txt');
