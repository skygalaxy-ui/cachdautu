/**
 * Kiểm tra trạng thái 4 bài Grade D (ngắn nhất)
 */
import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slugs = [
    'quy-dau-tu-tot-nhat-viet-nam-2026',
    'vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh',
    'cac-buoc-mo-tai-khoan-chung-khoan-viet-nam-2026',
    'co-phieu-nao-nen-mua-2026-phan-tich-nganh'
];

function strip(html) {
    return (html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function countExtLinks(html) {
    const h = html || '';
    const htmlL = (h.match(/href=["'](https?:\/\/[^"']+)["']/gi) || []).filter(l => !l.includes('cachdautu.com')).length;
    const mdL = (h.match(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g) || []).filter(l => !l.includes('cachdautu.com')).length;
    return htmlL + mdL;
}

function countIntLinks(html) {
    const h = html || '';
    const htmlL = (h.match(/href=["']\/blog\/[^"']+["']/gi) || []).length;
    const mdL = (h.match(/\[[^\]]+\]\(\/blog\/[^)]+\)/g) || []).length;
    return htmlL + mdL;
}

console.log('📊 TRẠNG THÁI 4 BÀI GRADE D\n');
console.log('─'.repeat(80));

for (const slug of slugs) {
    const { data: post } = await s.from('posts')
        .select('title, slug, content, meta_description, excerpt, focus_keyword, categories(name)')
        .eq('slug', slug)
        .single();
    
    if (!post) { console.log(`❌ Không tìm thấy: ${slug}`); continue; }
    
    const words = strip(post.content).split(/\s+/).filter(w => w.length > 0).length;
    const h2 = (post.content.match(/<h2>/gi) || []).length + (post.content.match(/^## /gm) || []).length;
    const h3 = (post.content.match(/<h3>/gi) || []).length + (post.content.match(/^### /gm) || []).length;
    const images = (post.content.match(/<img /gi) || []).length + (post.content.match(/!\[/g) || []).length;
    const tables = (post.content.match(/<table/gi) || []).length;
    const extLinks = countExtLinks(post.content);
    const intLinks = countIntLinks(post.content);
    
    console.log(`\n📝 "${post.title}"`);
    console.log(`   Slug: ${post.slug}`);
    console.log(`   Danh mục: ${post.categories?.name || 'N/A'}`);
    console.log(`   📏 Số từ: ${words}`);
    console.log(`   📋 Meta description: ${post.meta_description ? '✅ Có (' + post.meta_description.length + ' chars)' : '❌ Thiếu'}`);
    console.log(`   🎯 Focus keyword: ${post.focus_keyword || '❌ Thiếu'}`);
    console.log(`   📄 H2: ${h2} | H3: ${h3}`);
    console.log(`   🖼️ Ảnh inline: ${images}`);
    console.log(`   📊 Bảng: ${tables}`);
    console.log(`   🔗 Internal links: ${intLinks}`);
    console.log(`   🌐 External links: ${extLinks}`);
    
    // Đánh giá
    const issues = [];
    if (words < 1000) issues.push(`⚠️ Ngắn (${words} từ, cần ≥1000)`);
    if (images === 0) issues.push('⚠️ Không ảnh inline');
    if (h2 < 3) issues.push(`⚠️ Ít H2 (${h2}, cần ≥3)`);
    
    if (issues.length > 0) {
        console.log(`   🔴 Vấn đề: ${issues.join(' | ')}`);
    } else {
        console.log(`   🟢 Trạng thái: OK`);
    }
    console.log('─'.repeat(80));
}
