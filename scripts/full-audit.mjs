/**
 * Full Audit - Kiểm tra toàn diện 105 bài viết đã đăng
 * Chạy: node scripts/full-audit.mjs
 */
import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// ═══════ HELPERS ═══════
function stripHtml(html) {
    return (html || '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ').trim();
}
function countWords(text) {
    const c = stripHtml(text);
    return c ? c.split(/\s+/).filter(w => w.length > 0).length : 0;
}
function countImages(html) {
    const h = html || '';
    return ((h.match(/<img[^>]+>/gi) || []).length) + ((h.match(/!\[[^\]]*\]\([^)]+\)/g) || []).length);
}
function countInternalLinks(html) {
    const h = html || '';
    return ((h.match(/href=["']\/blog\/[^"']+["']/gi) || []).length) + ((h.match(/\[[^\]]+\]\(\/blog\/[^)]+\)/g) || []).length);
}
function countExternalLinks(html) {
    const h = html || '';
    const htmlL = (h.match(/href=["'](https?:\/\/[^"']+)["']/gi) || []).filter(l => !l.includes('cachdautu.com')).length;
    const mdL = (h.match(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g) || []).filter(l => !l.includes('cachdautu.com')).length;
    return htmlL + mdL;
}
function countHeadings(html) {
    const h = html || '';
    const h2 = ((h.match(/<h2[^>]*>/gi) || []).length) + ((h.match(/^## /gm) || []).length);
    const h3 = ((h.match(/<h3[^>]*>/gi) || []).length) + ((h.match(/^### /gm) || []).length);
    return { h2, h3, total: h2 + h3 };
}
function hasFAQSchema(html) {
    const h = html || '';
    return h.includes('FAQPage') || h.includes('faq-schema') || (h.match(/(\*\*Hỏi|Câu hỏi|Q:).*\n.*(\*\*Trả lời|Đáp|A:)/gi) || []).length >= 2;
}
function hasTable(html) {
    const h = html || '';
    return h.includes('<table') || (h.match(/\|.*\|.*\|/g) || []).length >= 3;
}
function titleLength(title) {
    return (title || '').length;
}
function slugQuality(slug) {
    if (!slug) return 'missing';
    if (slug.length > 75) return 'too_long';
    if (slug.match(/[A-Z]/)) return 'has_uppercase';
    if (slug.includes('--')) return 'double_dash';
    return 'ok';
}
function checkDuplicateContent(posts) {
    // Detect near-duplicate titles
    const titleMap = {};
    posts.forEach(p => {
        const norm = (p.title || '').toLowerCase().replace(/[^a-zàáạảãăắằặẳẵâấầậẩẫđéèẹẻẽêếềệểễóòọỏõôốồộổỗơớờợởỡúùụủũưứừựửữíìịỉĩýỳỵỷỹ\s]/g, '').trim();
        if (!titleMap[norm]) titleMap[norm] = [];
        titleMap[norm].push(p.title);
    });
    return Object.entries(titleMap).filter(([_, v]) => v.length > 1).map(([k, v]) => v);
}

// ═══════ MAIN ═══════
console.log('\n🔍 FULL AUDIT - Đang quét toàn bộ bài viết...\n');

const { data: posts, error } = await s.from('posts')
    .select('id, title, slug, content, excerpt, meta_description, featured_image, is_published, scheduled_at, created_at, updated_at, focus_keyword, category_id, categories(name, slug)')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

if (error) { console.error('❌ Lỗi:', error.message); process.exit(1); }

console.log(`📊 Tổng: ${posts.length} bài đã published\n`);

const results = [];

for (const post of posts) {
    const words = countWords(post.content);
    const images = countImages(post.content);
    const internalLinks = countInternalLinks(post.content);
    const externalLinks = countExternalLinks(post.content);
    const headings = countHeadings(post.content);
    const hasExcerpt = !!post.excerpt && post.excerpt.length > 50;
    const hasMeta = !!post.meta_description && post.meta_description.length > 50;
    const hasFeaturedImg = !!post.featured_image && post.featured_image.length > 5;
    const hasFocus = !!post.focus_keyword && post.focus_keyword.length > 2;
    const hasFaq = hasFAQSchema(post.content);
    const hasTableContent = hasTable(post.content);
    const tLen = titleLength(post.title);
    const sQuality = slugQuality(post.slug);

    // Scoring (0-10)
    let score = 0;
    const issues = [];

    // Word count (max 3)
    if (words >= 2000) score += 3;
    else if (words >= 1500) score += 2;
    else if (words >= 1000) score += 1.5;
    else if (words >= 800) { score += 1; issues.push(`⚠️ Hơi ngắn (${words} từ)`); }
    else { score += 0; issues.push(`🔴 Quá ngắn (${words} từ, cần ≥1000)`); }

    // Images (max 1.5)
    if (images >= 3) score += 1.5;
    else if (images >= 1) { score += 1; issues.push(`⚠️ Ít ảnh (${images})`); }
    else { score += 0; issues.push('🔴 Không có ảnh trong bài'); }

    // Featured image (max 0.5)
    if (hasFeaturedImg) score += 0.5;
    else issues.push('🔴 Thiếu featured image');

    // Internal links (max 1.5)
    if (internalLinks >= 4) score += 1.5;
    else if (internalLinks >= 2) { score += 1; issues.push(`⚠️ Ít internal link (${internalLinks})`); }
    else if (internalLinks >= 1) { score += 0.5; issues.push(`⚠️ Chỉ ${internalLinks} internal link`); }
    else { score += 0; issues.push('🔴 Không có internal link'); }

    // External links (max 0.5)
    if (externalLinks >= 1) score += 0.5;
    else issues.push('⚠️ Không có external link');

    // Headings structure (max 1)
    if (headings.h2 >= 3 && headings.h3 >= 2) score += 1;
    else if (headings.total >= 4) score += 0.75;
    else if (headings.total >= 2) { score += 0.5; issues.push('⚠️ Ít heading'); }
    else { score += 0; issues.push('🔴 Thiếu heading structure'); }

    // Meta/SEO (max 1.5)
    if (hasExcerpt) score += 0.5;
    else issues.push('⚠️ Thiếu excerpt');
    if (hasMeta) score += 0.5;
    else issues.push('⚠️ Thiếu meta description');
    if (hasFocus) score += 0.5;
    else issues.push('⚠️ Thiếu focus keyword');

    // Title SEO (max 0.5)
    if (tLen >= 30 && tLen <= 65) score += 0.5;
    else if (tLen > 65) issues.push(`⚠️ Title quá dài (${tLen} ký tự, nên ≤65)`);
    else if (tLen < 30) issues.push(`⚠️ Title quá ngắn (${tLen} ký tự)`);

    // Grade
    let grade;
    if (score >= 8) grade = 'A';
    else if (score >= 6) grade = 'B';
    else if (score >= 4) grade = 'C';
    else if (score >= 2) grade = 'D';
    else grade = 'F';

    results.push({
        id: post.id,
        title: post.title,
        slug: post.slug,
        category: post.categories?.name || 'N/A',
        catSlug: post.categories?.slug || '',
        words, images, internalLinks, externalLinks,
        headings: headings.total, h2: headings.h2, h3: headings.h3,
        hasExcerpt, hasMeta, hasFeaturedImg, hasFocus,
        hasFaq, hasTable: hasTableContent,
        titleLen: tLen, slugOk: sQuality,
        score: Math.round(score * 10) / 10,
        grade, issues,
    });
}

// ═══════ ANALYSIS ═══════
results.sort((a, b) => a.score - b.score);

const gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };
results.forEach(r => gradeCount[r.grade]++);

const shortPosts = results.filter(r => r.words < 1000);
const noImages = results.filter(r => r.images === 0);
const noFeatured = results.filter(r => !r.hasFeaturedImg);
const noInternal = results.filter(r => r.internalLinks === 0);
const noExternal = results.filter(r => r.externalLinks === 0);
const noMeta = results.filter(r => !r.hasMeta);
const noExcerpt = results.filter(r => !r.hasExcerpt);
const noFocus = results.filter(r => !r.hasFocus);
const longTitles = results.filter(r => r.titleLen > 65);
const avgWords = Math.round(results.reduce((s, r) => s + r.words, 0) / results.length);
const avgScore = Math.round((results.reduce((s, r) => s + r.score, 0) / results.length) * 10) / 10;
const duplicates = checkDuplicateContent(posts);

// Category distribution
const catDist = {};
results.forEach(r => {
    const cat = r.category || 'Không danh mục';
    if (!catDist[cat]) catDist[cat] = { count: 0, avgWords: 0, totalWords: 0, avgScore: 0, totalScore: 0 };
    catDist[cat].count++;
    catDist[cat].totalWords += r.words;
    catDist[cat].totalScore += r.score;
});
Object.values(catDist).forEach(c => {
    c.avgWords = Math.round(c.totalWords / c.count);
    c.avgScore = Math.round((c.totalScore / c.count) * 10) / 10;
});

// ═══════ OUTPUT ═══════
const sep = '═'.repeat(80);

console.log(sep);
console.log('📊 BẢNG TỔNG KẾT AUDIT');
console.log(sep);
console.log(`  Tổng bài đã publish: ${posts.length}`);
console.log(`  Số từ trung bình:    ${avgWords}`);
console.log(`  Điểm trung bình:     ${avgScore}/10`);
console.log();
console.log(`  PHÂN BỔ ĐIỂM:`);
console.log(`    🟢 Grade A (≥8):  ${gradeCount.A} bài (${Math.round(gradeCount.A/posts.length*100)}%)`);
console.log(`    🔵 Grade B (6-8): ${gradeCount.B} bài (${Math.round(gradeCount.B/posts.length*100)}%)`);
console.log(`    🟡 Grade C (4-6): ${gradeCount.C} bài (${Math.round(gradeCount.C/posts.length*100)}%)`);
console.log(`    🟠 Grade D (2-4): ${gradeCount.D} bài (${Math.round(gradeCount.D/posts.length*100)}%)`);
console.log(`    🔴 Grade F (<2):  ${gradeCount.F} bài (${Math.round(gradeCount.F/posts.length*100)}%)`);

console.log();
console.log(`  VẤN ĐỀ CHÍNH:`);
console.log(`    📝 Bài ngắn (<1000 từ):     ${shortPosts.length}/${posts.length}`);
console.log(`    🖼️  Không có ảnh inline:      ${noImages.length}/${posts.length}`);
console.log(`    🖼️  Thiếu featured image:     ${noFeatured.length}/${posts.length}`);
console.log(`    🔗 Không internal link:       ${noInternal.length}/${posts.length}`);
console.log(`    🌐 Không external link:       ${noExternal.length}/${posts.length}`);
console.log(`    📋 Thiếu meta description:    ${noMeta.length}/${posts.length}`);
console.log(`    📋 Thiếu excerpt:             ${noExcerpt.length}/${posts.length}`);
console.log(`    🎯 Thiếu focus keyword:       ${noFocus.length}/${posts.length}`);
console.log(`    📏 Title quá dài (>65 ký tự): ${longTitles.length}/${posts.length}`);

if (duplicates.length > 0) {
    console.log(`\n  ⚠️ PHÁT HIỆN ${duplicates.length} NHÓM TRÙNG TITLE:`);
    duplicates.forEach((group, i) => {
        console.log(`    ${i + 1}. ${group.join(' / ')}`);
    });
}

// Category distribution
console.log('\n' + sep);
console.log('📂 PHÂN BỔ THEO DANH MỤC');
console.log(sep);
Object.entries(catDist)
    .sort((a, b) => b[1].count - a[1].count)
    .forEach(([cat, data]) => {
        console.log(`  ${cat}: ${data.count} bài | TB ${data.avgWords} từ | Điểm TB: ${data.avgScore}/10`);
    });

// Top 20 worst posts
console.log('\n' + sep);
console.log('🔴 TOP 20 BÀI CẦN CẢI THIỆN GẤP (điểm thấp nhất)');
console.log(sep);
results.slice(0, 20).forEach((r, i) => {
    console.log(`\n  ${i + 1}. [${r.grade}] "${r.title}"`);
    console.log(`     Danh mục: ${r.category} | Điểm: ${r.score}/10`);
    console.log(`     Từ: ${r.words} | Ảnh: ${r.images} | Internal: ${r.internalLinks} | External: ${r.externalLinks} | H2: ${r.h2} | H3: ${r.h3}`);
    console.log(`     Meta: ${r.hasMeta ? '✅' : '❌'} | Excerpt: ${r.hasExcerpt ? '✅' : '❌'} | FeatImg: ${r.hasFeaturedImg ? '✅' : '❌'} | Focus: ${r.hasFocus ? '✅' : '❌'}`);
    console.log(`     URL: /blog/${r.catSlug}/${r.slug}`);
    if (r.issues.length > 0) console.log(`     Vấn đề: ${r.issues.join(' | ')}`);
});

// All short posts
if (shortPosts.length > 0) {
    console.log('\n' + sep);
    console.log(`📏 TẤT CẢ BÀI NGẮN (<1000 từ): ${shortPosts.length} bài`);
    console.log(sep);
    shortPosts.sort((a, b) => a.words - b.words).forEach(r => {
        console.log(`  [${r.words} từ] "${r.title}" → /blog/${r.catSlug}/${r.slug}`);
    });
}

// All posts without internal links
if (noInternal.length > 0) {
    console.log('\n' + sep);
    console.log(`🔗 BÀI KHÔNG CÓ INTERNAL LINK: ${noInternal.length} bài`);
    console.log(sep);
    noInternal.forEach(r => {
        console.log(`  [${r.words} từ] "${r.title}" → /blog/${r.catSlug}/${r.slug}`);
    });
}

// Save JSON report
const reportData = {
    auditDate: new Date().toISOString(),
    summary: {
        total: posts.length, avgWords, avgScore,
        grades: gradeCount,
        shortPosts: shortPosts.length,
        noImages: noImages.length,
        noFeaturedImage: noFeatured.length,
        noInternalLinks: noInternal.length,
        noExternalLinks: noExternal.length,
        noMeta: noMeta.length,
        noExcerpt: noExcerpt.length,
        noFocusKeyword: noFocus.length,
        longTitles: longTitles.length,
        duplicateTitles: duplicates.length,
    },
    categories: catDist,
    allPosts: results.map(r => ({
        id: r.id, title: r.title, slug: r.slug, category: r.category, catSlug: r.catSlug,
        words: r.words, images: r.images, internalLinks: r.internalLinks, externalLinks: r.externalLinks,
        headings: r.headings, hasMeta: r.hasMeta, hasExcerpt: r.hasExcerpt,
        hasFeaturedImg: r.hasFeaturedImg, hasFocus: r.hasFocus,
        score: r.score, grade: r.grade, issues: r.issues,
    })),
};

writeFileSync('scripts/full-audit-report.json', JSON.stringify(reportData, null, 2));
console.log('\n✅ Đã lưu chi tiết vào scripts/full-audit-report.json');
console.log(sep + '\n');
