// scripts/fix-broken-images.mjs
// Sửa các ảnh đại diện bị lỗi 404 - download từ Unsplash và upload lên Supabase Storage
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://njchsjhdkcfaouqwyutc.supabase.co',
    'sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF'
);

// Ảnh Unsplash ĐÃ KIỂM TRA - chắc chắn hoạt động
const VERIFIED_IMAGES = {
    'savings': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=630&fit=crop&q=80',
    'real-estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop&q=80',
    'investment': 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=630&fit=crop&q=80',
    'education': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop&q=80',
    'stock-market': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop&q=80',
    'crypto': 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=630&fit=crop&q=80',
    'personal-finance': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&q=80',
    'bonds': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop&q=80',
};

function detectTopic(title) {
    const t = title.toLowerCase();
    if (t.includes('lãi kép') || t.includes('lãi suất') || t.includes('tiết kiệm')) return 'savings';
    if (t.includes('bất động sản') || t.includes('nhà')) return 'real-estate';
    if (t.includes('sai lầm') || t.includes('bài học') || t.includes('kinh nghiệm')) return 'education';
    if (t.includes('chứng khoán') || t.includes('cổ phiếu')) return 'stock-market';
    if (t.includes('crypto') || t.includes('bitcoin')) return 'crypto';
    if (t.includes('tài chính') || t.includes('chi tiêu')) return 'personal-finance';
    if (t.includes('trái phiếu')) return 'bonds';
    return 'investment';
}

async function main() {
    console.log('🔍 Tìm bài viết có ảnh bị lỗi...\n');

    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, featured_image')
        .order('created_at', { ascending: false })
        .limit(50);

    if (error) { console.error('❌', error.message); return; }

    // Check each post's image
    const brokenPosts = [];
    for (const post of posts) {
        if (!post.featured_image || post.featured_image.trim() === '') {
            brokenPosts.push(post);
            continue;
        }
        try {
            const res = await fetch(post.featured_image, { method: 'HEAD' });
            if (!res.ok) {
                brokenPosts.push(post);
            }
        } catch {
            brokenPosts.push(post);
        }
    }

    if (brokenPosts.length === 0) {
        console.log('✅ Không có ảnh nào bị lỗi!');
        return;
    }

    console.log(`⚠️ Tìm thấy ${brokenPosts.length} bài viết cần sửa ảnh:\n`);
    brokenPosts.forEach((p, i) => console.log(`  ${i + 1}. ${p.title}`));
    console.log('');

    let success = 0;
    const usedTopics = {};

    for (const post of brokenPosts) {
        try {
            const topic = detectTopic(post.title);
            // Add variation by appending number to filename
            usedTopics[topic] = (usedTopics[topic] || 0) + 1;

            const sourceUrl = VERIFIED_IMAGES[topic] || VERIFIED_IMAGES['investment'];
            console.log(`⬇️  Downloading [${topic}]: ${post.title}`);

            // Download image
            const response = await fetch(sourceUrl);
            if (!response.ok) throw new Error(`Download failed: ${response.status}`);

            const arrayBuffer = await response.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);

            // Upload to Supabase Storage
            const fileName = `posts/featured-${post.slug}-${Date.now()}.jpg`;
            const { error: uploadErr } = await supabase.storage
                .from('images')
                .upload(fileName, buffer, { contentType: 'image/jpeg', upsert: true });

            if (uploadErr) throw new Error(`Upload: ${uploadErr.message}`);

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('images')
                .getPublicUrl(fileName);

            // Update post
            const { error: updateErr } = await supabase
                .from('posts')
                .update({ featured_image: publicUrl })
                .eq('id', post.id);

            if (updateErr) throw new Error(`Update: ${updateErr.message}`);

            success++;
            console.log(`  ✅ → ${publicUrl}\n`);
            await new Promise(r => setTimeout(r, 300));

        } catch (err) {
            console.error(`  ❌ ${err.message}\n`);
        }
    }

    console.log('═══════════════════════════════════════');
    console.log(`📊 Sửa thành công: ${success}/${brokenPosts.length}`);
    console.log('═══════════════════════════════════════');
}

main().catch(console.error);
