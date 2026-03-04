/**
 * Check broken links on cachdautu.com
 * Quét tất cả bài viết trong database và kiểm tra URL
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Thiếu biến môi trường');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const BASE = 'https://cachdautu.com';

async function checkUrl(url) {
    try {
        const res = await fetch(url, { method: 'HEAD', redirect: 'manual' });
        return { url, status: res.status, ok: res.status >= 200 && res.status < 400 };
    } catch (e) {
        return { url, status: 'ERROR', ok: false, error: e.message };
    }
}

async function main() {
    console.log('🔍 Kiểm tra broken links trên cachdautu.com...\n');

    // 1. Kiểm tra các trang tĩnh
    console.log('📄 Kiểm tra trang tĩnh...');
    const staticPages = [
        '/',
        '/blog',
        '/about',
        '/lp/hoc-dau-tu',
        '/mien-tru-trach-nhiem',
        '/chinh-sach-bao-mat',
        '/dieu-khoan-su-dung',
        '/blog/crypto',
        '/blog/forex',
    ];

    for (const path of staticPages) {
        const result = await checkUrl(BASE + path);
        const icon = result.ok || result.status === 301 || result.status === 308 ? '✅' : '❌';
        console.log(`  ${icon} ${path} → ${result.status}`);
    }

    // 2. Kiểm tra tất cả category pages
    console.log('\n📂 Kiểm tra trang chuyên mục...');
    const { data: categories } = await supabase
        .from('categories')
        .select('slug, name');

    if (categories) {
        for (const cat of categories) {
            const result = await checkUrl(`${BASE}/blog/${cat.slug}`);
            const icon = result.ok ? '✅' : '❌';
            console.log(`  ${icon} /blog/${cat.slug} (${cat.name}) → ${result.status}`);
        }
    }

    // 3. Kiểm tra TẤT CẢ bài viết
    console.log('\n📝 Kiểm tra tất cả bài viết...');
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, categories(slug)')
        .order('created_at', { ascending: false });

    if (!posts || posts.length === 0) {
        console.log('  ⚠️ Không tìm thấy bài viết nào');
        return;
    }

    console.log(`  Tổng: ${posts.length} bài viết\n`);

    const broken = [];
    let checked = 0;

    for (const post of posts) {
        const catSlug = post.categories?.slug || 'uncategorized';
        const url = `${BASE}/blog/${catSlug}/${post.slug}`;
        const result = await checkUrl(url);
        checked++;

        if (!result.ok) {
            broken.push({ title: post.title, url, status: result.status });
            console.log(`  ❌ [${result.status}] ${post.title}`);
            console.log(`     → ${url}`);
        } else {
            // Chỉ show mỗi 10 bài OK để không spam
            if (checked % 10 === 0) {
                console.log(`  ✅ Đã kiểm tra ${checked}/${posts.length} bài...`);
            }
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 KẾT QUẢ');
    console.log('='.repeat(60));
    console.log(`  Tổng bài: ${posts.length}`);
    console.log(`  ✅ OK: ${posts.length - broken.length}`);
    console.log(`  ❌ Broken: ${broken.length}`);

    if (broken.length > 0) {
        console.log('\n🔴 DANH SÁCH LINK LỖI:');
        for (const b of broken) {
            console.log(`  - [${b.status}] "${b.title}"`);
            console.log(`    ${b.url}`);
        }
    } else {
        console.log('\n🎉 Không có link lỗi! Website sạch.');
    }
}

main().catch(console.error);
