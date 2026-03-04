// scripts/check-images.mjs - Kiểm tra trạng thái ảnh đại diện
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://njchsjhdkcfaouqwyutc.supabase.co',
    'sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF'
);

async function main() {
    // Lấy 20 bài viết mới nhất
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, featured_image, is_published, created_at')
        .order('created_at', { ascending: false })
        .limit(20);

    if (error) {
        console.error('❌ Lỗi:', error.message);
        return;
    }

    console.log(`\n📋 20 bài viết mới nhất:\n`);

    let noImage = 0;
    let brokenImage = 0;
    let goodImage = 0;

    for (const post of posts) {
        const img = post.featured_image;
        let status = '';

        if (!img || img.trim() === '') {
            status = '❌ KHÔNG CÓ ẢNH';
            noImage++;
        } else {
            // Check if image URL is accessible
            try {
                const res = await fetch(img, { method: 'HEAD' });
                if (res.ok) {
                    status = `✅ OK`;
                    goodImage++;
                } else {
                    status = `⚠️ LỖI ${res.status}`;
                    brokenImage++;
                }
            } catch (e) {
                status = `⚠️ KHÔNG TRUY CẬP ĐƯỢC`;
                brokenImage++;
            }
        }

        const date = new Date(post.created_at).toLocaleDateString('vi-VN');
        const pub = post.is_published ? '📗' : '📙';
        console.log(`${pub} ${status} | ${post.title}`);
        if (img) console.log(`   → ${img.substring(0, 80)}...`);
        console.log('');
    }

    console.log('═══════════════════════════════════════');
    console.log(`📊 Tổng kết: ✅ ${goodImage} OK | ⚠️ ${brokenImage} lỗi | ❌ ${noImage} thiếu ảnh`);
    console.log('═══════════════════════════════════════');
}

main().catch(console.error);
