/**
 * Cleanup sensitive posts for Google Ads compliance
 * 1. Xóa bài Plus500 (forex broker review)
 * 2. Sửa description bài "Tài khoản demo" (bỏ forex/crypto)
 * 3. Sửa description bài "Nên đầu tư gì năm 2026" (bỏ crypto)
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc NEXT_PUBLIC_SUPABASE_ANON_KEY');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function cleanup() {
    console.log('🔧 Bắt đầu cleanup bài viết nhạy cảm...\n');

    // 1. Xóa bài Plus500
    console.log('1️⃣ Tìm và xóa bài Plus500...');
    const { data: plus500, error: findErr } = await supabase
        .from('posts')
        .select('id, title, slug')
        .ilike('slug', '%plus500%');

    if (findErr) {
        console.error('   ❌ Lỗi tìm bài Plus500:', findErr.message);
    } else if (plus500 && plus500.length > 0) {
        for (const post of plus500) {
            console.log(`   📝 Tìm thấy: "${post.title}" (${post.slug})`);
            const { error: delErr } = await supabase
                .from('posts')
                .delete()
                .eq('id', post.id);

            if (delErr) {
                console.error(`   ❌ Lỗi xóa: ${delErr.message}`);
            } else {
                console.log(`   ✅ Đã xóa bài "${post.title}"`);
            }
        }
    } else {
        console.log('   ⚠️ Không tìm thấy bài Plus500');
    }

    // 2. Sửa bài "Tài khoản demo" — bỏ mention forex/crypto trong excerpt
    console.log('\n2️⃣ Sửa description bài "Tài khoản demo"...');
    const { data: demoPost } = await supabase
        .from('posts')
        .select('id, title, slug, excerpt, meta_description')
        .ilike('slug', '%tai-khoan-demo%');

    if (demoPost && demoPost.length > 0) {
        for (const post of demoPost) {
            console.log(`   📝 Tìm thấy: "${post.title}"`);
            const updates = {};

            if (post.excerpt) {
                updates.excerpt = post.excerpt
                    .replace(/,?\s*forex/gi, '')
                    .replace(/,?\s*crypto/gi, '')
                    .replace(/,?\s*tiền điện tử/gi, '')
                    .replace(/,?\s*bitcoin/gi, '')
                    .replace(/\s{2,}/g, ' ')
                    .trim();
            }
            if (post.meta_description) {
                updates.meta_description = post.meta_description
                    .replace(/,?\s*forex/gi, '')
                    .replace(/,?\s*crypto/gi, '')
                    .replace(/,?\s*tiền điện tử/gi, '')
                    .replace(/,?\s*bitcoin/gi, '')
                    .replace(/\s{2,}/g, ' ')
                    .trim();
            }

            if (Object.keys(updates).length > 0) {
                const { error } = await supabase
                    .from('posts')
                    .update(updates)
                    .eq('id', post.id);

                if (error) {
                    console.error(`   ❌ Lỗi sửa: ${error.message}`);
                } else {
                    console.log(`   ✅ Đã sửa description`);
                    if (updates.excerpt) console.log(`      Excerpt mới: "${updates.excerpt.substring(0, 80)}..."`);
                    if (updates.meta_description) console.log(`      Meta mới: "${updates.meta_description.substring(0, 80)}..."`);
                }
            }
        }
    } else {
        console.log('   ⚠️ Không tìm thấy bài tài khoản demo');
    }

    // 3. Sửa bài "Nên đầu tư gì" — bỏ mention crypto
    console.log('\n3️⃣ Sửa description bài "Nên đầu tư gì năm 2026"...');
    const { data: investPost } = await supabase
        .from('posts')
        .select('id, title, slug, excerpt, meta_description')
        .ilike('slug', '%nen-dau-tu-gi%');

    if (investPost && investPost.length > 0) {
        for (const post of investPost) {
            console.log(`   📝 Tìm thấy: "${post.title}"`);
            const updates = {};

            if (post.excerpt) {
                updates.excerpt = post.excerpt
                    .replace(/,?\s*crypto/gi, '')
                    .replace(/,?\s*bitcoin/gi, '')
                    .replace(/,?\s*tiền điện tử/gi, '')
                    .replace(/,?\s*tiền mã hóa/gi, '')
                    .replace(/\s{2,}/g, ' ')
                    .trim();
            }
            if (post.meta_description) {
                updates.meta_description = post.meta_description
                    .replace(/,?\s*crypto/gi, '')
                    .replace(/,?\s*bitcoin/gi, '')
                    .replace(/,?\s*tiền điện tử/gi, '')
                    .replace(/,?\s*tiền mã hóa/gi, '')
                    .replace(/\s{2,}/g, ' ')
                    .trim();
            }

            if (Object.keys(updates).length > 0) {
                const { error } = await supabase
                    .from('posts')
                    .update(updates)
                    .eq('id', post.id);

                if (error) {
                    console.error(`   ❌ Lỗi sửa: ${error.message}`);
                } else {
                    console.log(`   ✅ Đã sửa description`);
                    if (updates.excerpt) console.log(`      Excerpt mới: "${updates.excerpt.substring(0, 80)}..."`);
                    if (updates.meta_description) console.log(`      Meta mới: "${updates.meta_description.substring(0, 80)}..."`);
                }
            }
        }
    } else {
        console.log('   ⚠️ Không tìm thấy bài nên đầu tư gì');
    }

    // 4. Quét toàn bộ — tìm thêm bài nào còn mention crypto/forex trong excerpt
    console.log('\n4️⃣ Quét toàn bộ posts tìm crypto/forex trong excerpt/meta...');
    const { data: allPosts } = await supabase
        .from('posts')
        .select('id, title, slug, excerpt, meta_description');

    let found = 0;
    if (allPosts) {
        for (const post of allPosts) {
            const text = `${post.excerpt || ''} ${post.meta_description || ''}`.toLowerCase();
            const keywords = ['crypto', 'forex', 'bitcoin', 'plus500', 'etoro', 'binance', 'coinbase', 'metatrader', 'mt4', 'mt5', 'cfd'];

            for (const kw of keywords) {
                if (text.includes(kw)) {
                    console.log(`   ⚠️ "${post.title}" chứa "${kw}" trong excerpt/meta`);
                    found++;
                    break;
                }
            }
        }
    }

    if (found === 0) {
        console.log('   ✅ Không tìm thấy bài nào còn chứa keywords nhạy cảm!');
    } else {
        console.log(`   ⚠️ Tìm thấy ${found} bài cần kiểm tra thêm`);
    }

    console.log('\n🎉 Cleanup hoàn tất!');
}

cleanup().catch(console.error);
