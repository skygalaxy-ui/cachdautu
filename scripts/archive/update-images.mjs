// Script to update featured_image for all posts in Supabase
// Run with: node scripts/update-images.mjs

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://njchsjhdkcfaouqwyutc.supabase.co';
const supabaseKey = 'sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF';

const supabase = createClient(supabaseUrl, supabaseKey);

// Image mapping: category_slug -> array of image filenames
const categoryImages = {
    'chung-khoan': [
        'huong-dan-doc-bao-cao-tai-chinh.png',
        'phan-tich-ky-thuat-co-ban.png',
        'top-10-co-phieu-blue-chip.png',
        'cach-mo-tai-khoan-chung-khoan.png',
        'chien-luoc-dca-co-phieu.png',
    ],
    'crypto': [
        'bitcoin-la-gi.png',
        'ethereum-smart-contracts.png',
        'cach-tao-vi-crypto.png',
        'defi-la-gi.png',
        'nft-co-ban.png',
    ],
    'bat-dong-san': [
        'bat-dong-san-co-ban.png',
        'loi-nhuan-cho-thue.png',
        'xu-huong-bds-2024.png',
        'dat-nen-hay-can-ho.png',
        'phap-ly-bat-dong-san.png',
    ],
    'vang': [
        'dau-tu-vang-co-ban.png',
        'vang-sjc-hay-vang-nhan.png',
        'thoi-diem-mua-vang.png',
        'vang-chong-lam-phat.png',
        'luu-tru-vang-an-toan.png',
    ],
    'forex': [
        'forex-la-gi.png',
        'pip-va-lot.png',
        'quan-ly-rui-ro-forex.png',
        'chon-san-forex.png',
        'giao-dich-vang-forex.png',
    ],
    'trai-phieu': [
        'trai-phieu-chinh-phu.png',
        'trai-phieu-doanh-nghiep.png',
        'lai-suat-trai-phieu.png',
        'so-sanh-trai-phieu.png',
        'danh-muc-trai-phieu.png',
    ],
    'quy-dau-tu': [
        'quy-mo-co-ban.png',
        'quy-etf-la-gi.png',
        'quy-chi-so-vnindex.png',
        'chon-quy-phu-hop.png',
        'so-sanh-quy-dau-tu.png',
    ],
    'khoi-nghiep': [
        'angel-investor.png',
        'startup-funding-stages.png',
        'khoi-nghiep-co-ban.png',
        'dinh-gia-startup.png',
        'exit-strategy.png',
    ],
    'dau-tu-thay-the': [
        'dau-tu-thay-the.png',
        'dau-tu-nghe-thuat.png',
        'hang-hoa-phai-sinh.png',
        'dau-tu-ruou-vang.png',
        'private-equity.png',
    ],
    'tai-chinh-ca-nhan': [
        'quy-khan-cap.png',
        'quan-ly-tai-chinh.png',
        'da-dang-hoa-dau-tu.png',
        'huu-tri-tu-som.png',
        'thu-nhap-thu-dong.png',
    ],
};

async function updateImages() {
    console.log('Fetching categories...');

    // Get all categories
    const { data: categories, error: catError } = await supabase
        .from('categories')
        .select('id, slug');

    if (catError) {
        console.error('Error fetching categories:', catError);
        return;
    }

    console.log(`Found ${categories.length} categories`);

    // Create category slug to id mapping
    const categoryMap = {};
    for (const cat of categories) {
        categoryMap[cat.slug] = cat.id;
    }

    // Get all posts
    const { data: posts, error: postError } = await supabase
        .from('posts')
        .select('id, slug, category_id, featured_image')
        .order('created_at', { ascending: true });

    if (postError) {
        console.error('Error fetching posts:', postError);
        return;
    }

    console.log(`Found ${posts.length} posts`);

    // Track image usage per category
    const imageIndex = {};

    let updated = 0;
    let skipped = 0;

    for (const post of posts) {
        // Find category slug from id
        const category = categories.find(c => c.id === post.category_id);
        if (!category) {
            console.log(`Skipping post ${post.slug}: no category found`);
            skipped++;
            continue;
        }

        const catSlug = category.slug;
        const images = categoryImages[catSlug];

        if (!images || images.length === 0) {
            console.log(`Skipping post ${post.slug}: no images for category ${catSlug}`);
            skipped++;
            continue;
        }

        // Get next image index for this category
        if (imageIndex[catSlug] === undefined) {
            imageIndex[catSlug] = 0;
        }

        const imgIdx = imageIndex[catSlug] % images.length;
        const imagePath = `/images/blog/${catSlug}/${images[imgIdx]}`;

        imageIndex[catSlug]++;

        // Update the post
        const { error: updateError } = await supabase
            .from('posts')
            .update({ featured_image: imagePath })
            .eq('id', post.id);

        if (updateError) {
            console.error(`Error updating post ${post.slug}:`, updateError);
        } else {
            console.log(`✓ Updated ${post.slug} -> ${imagePath}`);
            updated++;
        }
    }

    console.log('\n=== Summary ===');
    console.log(`Updated: ${updated} posts`);
    console.log(`Skipped: ${skipped} posts`);
}

updateImages().catch(console.error);
