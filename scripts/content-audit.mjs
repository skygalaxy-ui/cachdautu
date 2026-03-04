import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: categories } = await s.from('categories').select('id, name, slug');
const catMap = {};
categories.forEach(c => catMap[c.id] = c.name);

const { data: posts } = await s.from('posts')
    .select('id, title, slug, content, excerpt, category_id, is_published, scheduled_at, featured_image, focus_keyword, created_at')
    .order('scheduled_at', { ascending: true, nullsFirst: false });

const analysis = posts.map(p => {
    const content = p.content || '';
    const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;

    // Check headings
    const h2Count = (content.match(/^## /gm) || []).length;
    const h3Count = (content.match(/^### /gm) || []).length;

    // Check links
    const internalLinks = (content.match(/\[([^\]]+)\]\(\/[^)]+\)/g) || []).length;
    const externalLinks = (content.match(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g) || []).length;

    // Check images
    const images = (content.match(/!\[([^\]]*)\]\([^)]+\)/g) || []).length;

    // Check tables
    const tables = (content.match(/\|.*\|.*\|/g) || []).length > 2 ? 1 : 0;

    // Check lists
    const listItems = (content.match(/^[-*] /gm) || []).length;
    const numberedItems = (content.match(/^\d+\. /gm) || []).length;

    // Check bold/italic
    const boldCount = (content.match(/\*\*[^*]+\*\*/g) || []).length;

    // Issues
    const issues = [];
    if (wordCount < 1000) issues.push(`Quá ngắn (${wordCount} từ, cần ≥1500)`);
    else if (wordCount < 1500) issues.push(`Hơi ngắn (${wordCount} từ, nên ≥1500)`);
    if (h2Count < 3) issues.push(`Ít heading H2 (${h2Count}, nên ≥4)`);
    if (internalLinks < 2) issues.push(`Thiếu internal links (${internalLinks}, nên ≥3)`);
    if (externalLinks < 1) issues.push(`Không có external links`);
    if (images < 1) issues.push(`Không có ảnh trong bài`);
    if (!tables) issues.push(`Không có bảng so sánh`);
    if (!p.excerpt || p.excerpt.length < 50) issues.push(`Excerpt quá ngắn hoặc thiếu`);
    if (!p.featured_image) issues.push(`Thiếu featured image`);
    if (!p.focus_keyword) issues.push(`Thiếu focus keyword`);
    if (boldCount < 3) issues.push(`Ít bold text (${boldCount}), nên highlight keywords`);
    if (listItems + numberedItems < 3) issues.push(`Ít danh sách (lists)`);

    return {
        title: p.title,
        slug: p.slug,
        category: catMap[p.category_id] || 'N/A',
        is_published: p.is_published,
        scheduled_at: p.scheduled_at,
        wordCount,
        h2Count,
        h3Count,
        internalLinks,
        externalLinks,
        images,
        tables,
        listItems: listItems + numberedItems,
        boldCount,
        hasExcerpt: !!p.excerpt && p.excerpt.length >= 50,
        hasFeaturedImage: !!p.featured_image,
        hasFocusKeyword: !!p.focus_keyword,
        issueCount: issues.length,
        issues
    };
});

// Sort by issue count (most issues first)
analysis.sort((a, b) => b.issueCount - a.issueCount);

// Summary stats
const totalPosts = analysis.length;
const avgWords = Math.round(analysis.reduce((sum, a) => sum + a.wordCount, 0) / totalPosts);
const under1000 = analysis.filter(a => a.wordCount < 1000).length;
const under1500 = analysis.filter(a => a.wordCount >= 1000 && a.wordCount < 1500).length;
const noImages = analysis.filter(a => a.images === 0).length;
const noTables = analysis.filter(a => a.tables === 0).length;
const noIntLinks = analysis.filter(a => a.internalLinks < 2).length;
const noExtLinks = analysis.filter(a => a.externalLinks < 1).length;
const noExcerpt = analysis.filter(a => !a.hasExcerpt).length;
const noFeatImg = analysis.filter(a => !a.hasFeaturedImage).length;
const noKeyword = analysis.filter(a => !a.hasFocusKeyword).length;

const report = {
    summary: {
        totalPosts,
        avgWords,
        under1000,
        under1500,
        over1500: totalPosts - under1000 - under1500,
        noImages,
        noTables,
        noInternalLinks: noIntLinks,
        noExternalLinks: noExtLinks,
        noExcerpt,
        noFeaturedImage: noFeatImg,
        noFocusKeyword: noKeyword
    },
    categories: catMap,
    posts: analysis
};

writeFileSync('f:/antigravity-projects/cachdautu/scripts/content-audit.json', JSON.stringify(report, null, 2));
console.log('=== CONTENT AUDIT SUMMARY ===');
console.log(`Total posts: ${totalPosts}`);
console.log(`Avg word count: ${avgWords}`);
console.log(`Under 1000 words: ${under1000}`);
console.log(`1000-1500 words: ${under1500}`);
console.log(`Over 1500 words: ${totalPosts - under1000 - under1500}`);
console.log(`No images: ${noImages}`);
console.log(`No tables: ${noTables}`);
console.log(`No internal links: ${noIntLinks}`);
console.log(`No external links: ${noExtLinks}`);
console.log(`No excerpt: ${noExcerpt}`);
console.log(`No featured image: ${noFeatImg}`);
console.log(`No focus keyword: ${noKeyword}`);
console.log('\nReport saved to content-audit.json');
