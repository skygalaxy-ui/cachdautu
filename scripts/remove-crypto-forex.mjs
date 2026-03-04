/**
 * Script: Xóa hoàn toàn categories Crypto & Forex khỏi Supabase
 * 
 * Chạy: node scripts/remove-crypto-forex.mjs
 * 
 * ⚠️ KHÔNG thể hoàn tác! Script sẽ:
 * 1. Tìm category crypto và forex
 * 2. Xóa TẤT CẢ bài viết thuộc 2 category này
 * 3. Xóa 2 category
 */

import { createClient } from '@supabase/supabase-js';

// Hardcode Supabase credentials (hoặc từ .env)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Thiếu NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY');
    console.error('   Chạy lệnh: set NEXT_PUBLIC_SUPABASE_URL=... && set SUPABASE_SERVICE_ROLE_KEY=... && node scripts/remove-crypto-forex.mjs');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const CATEGORIES_TO_DELETE = ['crypto', 'forex'];

async function main() {
    console.log('🚀 Bắt đầu xóa Crypto & Forex...\n');

    for (const slug of CATEGORIES_TO_DELETE) {
        // 1. Tìm category
        const { data: category, error: catError } = await supabase
            .from('categories')
            .select('id, name, slug')
            .eq('slug', slug)
            .single();

        if (catError || !category) {
            console.log(`⚠️  Category "${slug}" không tồn tại, bỏ qua.`);
            continue;
        }

        console.log(`📂 Tìm thấy category: ${category.name} (id: ${category.id})`);

        // 2. Đếm bài viết
        const { count } = await supabase
            .from('posts')
            .select('*', { count: 'exact', head: true })
            .eq('category_id', category.id);

        console.log(`   📝 Số bài viết: ${count || 0}`);

        // 3. Xóa bài viết
        if (count && count > 0) {
            const { error: deletePostsError } = await supabase
                .from('posts')
                .delete()
                .eq('category_id', category.id);

            if (deletePostsError) {
                console.error(`   ❌ Lỗi xóa bài viết: ${deletePostsError.message}`);
                continue;
            }
            console.log(`   ✅ Đã xóa ${count} bài viết`);
        }

        // 4. Xóa category
        const { error: deleteCatError } = await supabase
            .from('categories')
            .delete()
            .eq('id', category.id);

        if (deleteCatError) {
            console.error(`   ❌ Lỗi xóa category: ${deleteCatError.message}`);
            continue;
        }
        console.log(`   ✅ Đã xóa category "${category.name}"\n`);
    }

    console.log('🎉 Hoàn tất! Crypto & Forex đã bị xóa hoàn toàn khỏi database.');
}

main().catch(console.error);
