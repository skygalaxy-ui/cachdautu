const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function fixLinks() {
    console.log('🔧 Sửa internal links trong bài viết...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth failed:', authError.message); return; }

    // Get all published posts with categories
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, content, categories(slug)');

    if (!posts) { console.log('❌ No posts found'); return; }

    // Build slug -> category URL map
    const slugToUrl = {};
    posts.forEach(p => {
        const catSlug = p.categories?.slug;
        if (catSlug) {
            slugToUrl[p.slug] = `/blog/${catSlug}/${p.slug}`;
        }
    });

    console.log('📌 Slug -> URL map:');
    Object.entries(slugToUrl).forEach(([slug, url]) => console.log(`   ${slug} => ${url}`));
    console.log('');

    let totalFixed = 0;

    for (const post of posts) {
        if (!post.content) continue;

        let content = post.content;
        let fixCount = 0;

        // Fix pattern: href="${SITE}/bai-viet/{slug}" or href="https://cachdautu.com/bai-viet/{slug}"
        // Also fix markdown links: [text](/bai-viet/{slug})
        const patterns = [
            /href="https?:\/\/cachdautu\.com\/bai-viet\/([^"]+)"/g,
            /href="\/bai-viet\/([^"]+)"/g,
            /\]\(https?:\/\/cachdautu\.com\/bai-viet\/([^)]+)\)/g,
            /\]\(\/bai-viet\/([^)]+)\)/g,
        ];

        for (const pattern of patterns) {
            content = content.replace(pattern, (match, slug) => {
                const newUrl = slugToUrl[slug];
                if (newUrl) {
                    fixCount++;
                    // Determine replacement format
                    if (match.startsWith('href="')) {
                        return `href="${newUrl}"`;
                    } else {
                        return `](${newUrl})`;
                    }
                } else {
                    // Slug doesn't exist - remove the link but keep text
                    console.log(`   ⚠️  No post found for slug: ${slug} - will remove link`);
                    fixCount++;
                    if (match.startsWith('href="')) {
                        return `href="#"`;  // Replace with # for now
                    } else {
                        return `](#)`;
                    }
                }
            });
        }

        // Also remove <a> tags with href="#" (broken links) - keep just the text
        content = content.replace(/<a href="#">([^<]*)<\/a>/g, '$1');

        if (fixCount > 0) {
            const { error } = await supabase
                .from('posts')
                .update({ content })
                .eq('id', post.id);

            if (error) {
                console.log(`❌ Error updating "${post.title.substring(0, 40)}": ${error.message}`);
            } else {
                console.log(`✅ Fixed ${fixCount} links in: ${post.title.substring(0, 50)}`);
                totalFixed += fixCount;
            }
        }
    }

    console.log(`\n🎉 Tổng cộng sửa ${totalFixed} links!`);
}

fixLinks();
