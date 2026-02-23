import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await supabase.auth.signInWithPassword({
    email: 'admin@cachdautu.com',
    password: 'CachDauTu@2026!'
});

console.log('🔍 Kiểm tra ảnh của các bài viết ĐÃ ĐĂNG...\n');

const { data: posts, error } = await supabase
    .from('posts')
    .select('id, slug, title, featured_image, content')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

if (error) { console.error('❌ Lỗi:', error.message); process.exit(1); }

console.log(`📝 Tổng bài viết đã đăng: ${posts.length}\n`);

let totalOk = 0, totalFail = 0;
const failedPosts = [];

for (const post of posts) {
    let postOk = 0, postFail = 0;
    const issues = [];

    // 1. Check featured image
    if (!post.featured_image) {
        issues.push('⚠️ Không có featured_image');
        postFail++;
    } else {
        try {
            const r = await fetch(post.featured_image, { method: 'HEAD', redirect: 'follow' });
            if (r.status === 200) {
                postOk++;
            } else {
                issues.push(`❌ Featured image: ${r.status} → ${post.featured_image}`);
                postFail++;
            }
        } catch (e) {
            issues.push(`❌ Featured image fetch error: ${e.message}`);
            postFail++;
        }
    }

    // 2. Check all images in content
    if (post.content) {
        // Match all image URLs in src attributes
        const imgMatches = [...post.content.matchAll(/(?:src|data-src)=["']([^"']+)["']/gi)];
        const uniqueUrls = [...new Set(imgMatches.map(m => m[1]))];

        for (const url of uniqueUrls) {
            // Skip data URIs, relative paths, and SVGs
            if (url.startsWith('data:') || url.startsWith('/') || url.endsWith('.svg')) {
                postOk++;
                continue;
            }
            try {
                const r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
                if (r.status === 200) {
                    postOk++;
                } else {
                    issues.push(`❌ Content image: ${r.status} → ${url.substring(0, 80)}...`);
                    postFail++;
                }
            } catch (e) {
                issues.push(`❌ Content image error: ${e.message} → ${url.substring(0, 80)}...`);
                postFail++;
            }
        }
    }

    totalOk += postOk;
    totalFail += postFail;

    if (issues.length > 0) {
        failedPosts.push({ slug: post.slug, title: post.title, issues });
        console.log(`❌ ${post.slug} (${postOk} OK, ${postFail} FAIL)`);
        issues.forEach(i => console.log(`   ${i}`));
        console.log('');
    } else {
        console.log(`✅ ${post.slug} (${postOk} ảnh OK)`);
    }
}

console.log('\n' + '='.repeat(60));
console.log(`📊 KẾT QUẢ TỔNG HỢP:`);
console.log(`   ✅ Ảnh OK: ${totalOk}`);
console.log(`   ❌ Ảnh lỗi: ${totalFail}`);
console.log(`   📝 Bài viết có lỗi ảnh: ${failedPosts.length}/${posts.length}`);
console.log('='.repeat(60));

if (failedPosts.length > 0) {
    console.log('\n📋 DANH SÁCH BÀI CẦN SỬA:');
    failedPosts.forEach((p, i) => {
        console.log(`\n${i + 1}. ${p.slug}`);
        console.log(`   Tiêu đề: ${p.title}`);
        p.issues.forEach(issue => console.log(`   ${issue}`));
    });
}
