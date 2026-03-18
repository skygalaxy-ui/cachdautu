/**
 * Đọc nội dung hiện tại của bài để so sánh trước khi expand
 */
import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slug = process.argv[2];
if (!slug) { console.error('Usage: node read-current-post.mjs <slug>'); process.exit(1); }

const { data: post, error } = await s.from('posts')
    .select('id, title, slug, content, excerpt, meta_description, focus_keyword, categories(name, slug), is_published, created_at, updated_at')
    .eq('slug', slug)
    .single();

if (error || !post) { console.error('Khong tim thay:', slug); process.exit(1); }

function strip(html) {
    return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

const words = strip(post.content).split(/\s+/).filter(w => w.length > 0).length;
const h2s = (post.content.match(/<h2[^>]*>(.*?)<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, ''));
const h3s = (post.content.match(/<h3[^>]*>(.*?)<\/h3>/gi) || []).map(h => h.replace(/<[^>]+>/g, ''));

const report = `
=== BAI VIET HIEN TAI ===
Title: ${post.title}
Slug: ${post.slug}
Category: ${post.categories?.name || 'N/A'}
Published: ${post.is_published}
Focus Keyword: ${post.focus_keyword || 'N/A'}
Word Count: ${words}
Content Length: ${post.content.length} chars
Meta Description: ${post.meta_description || 'KHONG CO'}
Excerpt: ${post.excerpt || 'KHONG CO'}

=== CAU TRUC BAI ===
H2 (${h2s.length}):
${h2s.map((h, i) => `  ${i + 1}. ${h}`).join('\n')}

H3 (${h3s.length}):
${h3s.map((h, i) => `  ${i + 1}. ${h}`).join('\n')}

=== NOI DUNG (plain text) ===
${strip(post.content)}
`;

writeFileSync(`scripts/current-${slug}.txt`, report, 'utf8');
console.log(report);
