const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function checkLinks() {
    console.log('🔍 Kiểm tra internal links...\n');

    // Get all published posts with their URLs
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, content, categories(slug)')
        .eq('is_published', true);

    if (!posts) { console.log('❌ Không lấy được bài viết'); return; }

    // Build valid URL set
    const validSlugs = new Set();
    const validUrls = new Set();
    posts.forEach(p => {
        const catSlug = p.categories?.slug || 'uncategorized';
        validSlugs.add(p.slug);
        validUrls.add(`/blog/${catSlug}/${p.slug}`);
    });

    console.log(`📝 ${posts.length} bài viết đã publish`);
    console.log(`✅ ${validUrls.size} URLs hợp lệ:\n`);
    validUrls.forEach(u => console.log(`   ${u}`));
    console.log('');

    // Check each post for internal links
    const brokenLinks = [];
    const linkRegex = /href="([^"]*?)"/g;
    const linkRegex2 = /\[([^\]]*?)\]\(([^)]*?)\)/g; // Markdown links

    for (const post of posts) {
        if (!post.content) continue;
        const catSlug = post.categories?.slug || 'uncategorized';
        const postLabel = post.title.substring(0, 50);

        // Check HTML links
        let match;
        const content = post.content;

        // HTML href links
        const hrefRegex = /href="([^"]*?)"/g;
        while ((match = hrefRegex.exec(content)) !== null) {
            const url = match[1];
            if (isInternalLink(url)) {
                const normalizedUrl = normalizeUrl(url);
                if (!isValidUrl(normalizedUrl, validUrls, validSlugs)) {
                    brokenLinks.push({ postId: post.id, postTitle: postLabel, postSlug: post.slug, postCat: catSlug, link: url, normalized: normalizedUrl });
                }
            }
        }

        // Markdown [text](url) links
        const mdRegex = /\[([^\]]*?)\]\(([^)]*?)\)/g;
        while ((match = mdRegex.exec(content)) !== null) {
            const url = match[2];
            if (isInternalLink(url)) {
                const normalizedUrl = normalizeUrl(url);
                if (!isValidUrl(normalizedUrl, validUrls, validSlugs)) {
                    brokenLinks.push({ postId: post.id, postTitle: postLabel, postSlug: post.slug, postCat: catSlug, link: url, normalized: normalizedUrl });
                }
            }
        }
    }

    console.log(`\n🔗 Tìm thấy ${brokenLinks.length} broken links:\n`);
    brokenLinks.forEach(b => {
        console.log(`❌ "${b.postTitle}..."`);
        console.log(`   Link: ${b.link}`);
        console.log(`   Normalized: ${b.normalized}`);
        console.log('');
    });

    // Save to file for processing
    fs.writeFileSync('broken-links.json', JSON.stringify(brokenLinks, null, 2));
    console.log('💾 Saved to broken-links.json');
}

function isInternalLink(url) {
    if (!url) return false;
    if (url.startsWith('#')) return false;
    if (url.startsWith('mailto:')) return false;
    if (url.startsWith('http') && !url.includes('cachdautu.com')) return false;
    if (url.startsWith('/blog/') || url.startsWith('/bai-viet/') || url.includes('cachdautu.com')) return true;
    return false;
}

function normalizeUrl(url) {
    // Remove domain
    let normalized = url.replace('https://cachdautu.com', '').replace('http://cachdautu.com', '');
    // Remove trailing slash
    normalized = normalized.replace(/\/$/, '');
    // Convert old /bai-viet/ to new format
    if (normalized.startsWith('/bai-viet/')) {
        normalized = normalized.replace('/bai-viet/', '/blog/uncategorized/');
    }
    return normalized;
}

function isValidUrl(url, validUrls, validSlugs) {
    if (validUrls.has(url)) return true;
    // Check if slug exists in any category
    const parts = url.split('/');
    const slug = parts[parts.length - 1];
    if (validSlugs.has(slug)) return true;
    // Check static pages
    const staticPages = ['/', '/blog', '/about', '/contact'];
    if (staticPages.includes(url)) return true;
    // Check category pages
    if (url.match(/^\/blog\/[^/]+$/) && !url.includes('.')) return true;
    return false;
}

checkLinks();
