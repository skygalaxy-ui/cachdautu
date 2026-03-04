/**
 * Audit content quality — tìm bài viết ngắn, thiếu links, thiếu ảnh
 * Chạy: export $(grep -v '^#' .env.local | xargs) && node scripts/audit-content-quality.mjs
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Thiếu biến môi trường');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function stripHtml(html) {
    return (html || '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, ' ')
        .trim();
}

function countWords(text) {
    const clean = stripHtml(text);
    if (!clean) return 0;
    // Đếm cả tiếng Việt (tách bằng space)
    return clean.split(/\s+/).filter(w => w.length > 0).length;
}

function countImages(html) {
    const matches = (html || '').match(/<img[^>]+>/gi);
    return matches ? matches.length : 0;
}

function countInternalLinks(html) {
    const matches = (html || '').match(/href=["'][^"']*cachdautu\.com[^"']*["']/gi)
        || (html || '').match(/href=["']\/[^"']*["']/gi);
    return matches ? matches.length : 0;
}

function countExternalLinks(html) {
    const allLinks = (html || '').match(/href=["'](https?:\/\/[^"']+)["']/gi) || [];
    return allLinks.filter(l => !l.includes('cachdautu.com')).length;
}

function countHeadings(html) {
    const h2 = ((html || '').match(/<h2[^>]*>/gi) || []).length;
    const h3 = ((html || '').match(/<h3[^>]*>/gi) || []).length;
    return { h2, h3, total: h2 + h3 };
}

async function main() {
    console.log('🔍 Đang quét chất lượng nội dung...\n');

    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, content, excerpt, is_published, scheduled_at, categories(name, slug)')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('❌ Lỗi:', error.message);
        return;
    }

    console.log(`📊 Tổng: ${posts.length} bài đã published\n`);

    const results = [];

    for (const post of posts) {
        const words = countWords(post.content);
        const images = countImages(post.content);
        const internalLinks = countInternalLinks(post.content);
        const externalLinks = countExternalLinks(post.content);
        const headings = countHeadings(post.content);
        const hasExcerpt = !!post.excerpt && post.excerpt.length > 50;

        let score = 0;
        const issues = [];

        // Word count scoring
        if (words >= 2000) score += 3;
        else if (words >= 1500) score += 2;
        else if (words >= 1000) score += 1;
        else { score += 0; issues.push(`⚠️ Quá ngắn (${words} từ)`); }

        // Images
        if (images >= 3) score += 2;
        else if (images >= 1) score += 1;
        else { score += 0; issues.push('❌ Không có ảnh'); }

        // Internal links
        if (internalLinks >= 3) score += 2;
        else if (internalLinks >= 1) score += 1;
        else { score += 0; issues.push('❌ Không có internal link'); }

        // External links
        if (externalLinks >= 2) score += 1;
        else if (externalLinks >= 1) score += 0.5;
        else { score += 0; issues.push('⚠️ Không có external link'); }

        // Headings
        if (headings.total >= 5) score += 1;
        else if (headings.total >= 3) score += 0.5;
        else { score += 0; issues.push('⚠️ Ít heading'); }

        // Excerpt/meta
        if (hasExcerpt) score += 1;
        else issues.push('⚠️ Thiếu excerpt');

        results.push({
            id: post.id,
            title: post.title,
            slug: post.slug,
            category: post.categories?.name || 'N/A',
            catSlug: post.categories?.slug || '',
            words,
            images,
            internalLinks,
            externalLinks,
            headings: headings.total,
            score: Math.round(score * 10) / 10,
            maxScore: 10,
            issues,
        });
    }

    // Sắp xếp by score (thấp nhất trước)
    results.sort((a, b) => a.score - b.score);

    // Summary
    const shortPosts = results.filter(r => r.words < 1000);
    const noInternalLinks = results.filter(r => r.internalLinks === 0);
    const noExternalLinks = results.filter(r => r.externalLinks === 0);
    const noImages = results.filter(r => r.images === 0);

    console.log('═'.repeat(70));
    console.log('📊 TỔNG KẾT');
    console.log('═'.repeat(70));
    console.log(`  📝 Bài ngắn (< 1,000 từ): ${shortPosts.length}/${posts.length}`);
    console.log(`  🔗 Thiếu internal links:   ${noInternalLinks.length}/${posts.length}`);
    console.log(`  🌐 Thiếu external links:   ${noExternalLinks.length}/${posts.length}`);
    console.log(`  🖼️  Không có ảnh:           ${noImages.length}/${posts.length}`);
    console.log();

    // Show worst posts
    console.log('═'.repeat(70));
    console.log('🔴 BÀI VIẾT CẦN CẢI THIỆN GẤP (điểm thấp nhất)');
    console.log('═'.repeat(70));

    const worstPosts = results.slice(0, 15);
    for (const r of worstPosts) {
        console.log(`\n  📝 "${r.title}"`);
        console.log(`     Chuyên mục: ${r.category} | Điểm: ${r.score}/10`);
        console.log(`     Từ: ${r.words} | Ảnh: ${r.images} | Internal: ${r.internalLinks} | External: ${r.externalLinks} | Headings: ${r.headings}`);
        console.log(`     URL: /blog/${r.catSlug}/${r.slug}`);
        if (r.issues.length > 0) {
            console.log(`     Vấn đề: ${r.issues.join(' | ')}`);
        }
    }

    // Show all short posts
    if (shortPosts.length > 0) {
        console.log('\n' + '═'.repeat(70));
        console.log(`📏 TẤT CẢ BÀI NGẮN (< 1,000 từ): ${shortPosts.length} bài`);
        console.log('═'.repeat(70));
        for (const r of shortPosts.sort((a, b) => a.words - b.words)) {
            console.log(`  [${r.words} từ] "${r.title}" → /blog/${r.catSlug}/${r.slug}`);
        }
    }

    // JSON output for next step
    const reportData = {
        total: posts.length,
        shortPosts: shortPosts.length,
        noInternalLinks: noInternalLinks.length,
        noExternalLinks: noExternalLinks.length,
        avgScore: Math.round((results.reduce((sum, r) => sum + r.score, 0) / results.length) * 10) / 10,
        worstPosts: worstPosts.map(r => ({ id: r.id, title: r.title, slug: r.slug, catSlug: r.catSlug, words: r.words, score: r.score, issues: r.issues })),
        shortPostsList: shortPosts.map(r => ({ id: r.id, title: r.title, slug: r.slug, catSlug: r.catSlug, words: r.words })),
    };

    // Save report to file for next script
    const fs = await import('fs');
    fs.writeFileSync('scripts/audit-report.json', JSON.stringify(reportData, null, 2));
    console.log('\n✅ Đã lưu report vào scripts/audit-report.json');
}

main().catch(console.error);
