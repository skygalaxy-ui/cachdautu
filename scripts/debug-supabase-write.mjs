/**
 * Kiểm tra quyền ghi Supabase và verify nội dung
 * Chạy: export $(grep -v '^#' .env.local | xargs) && node scripts/debug-supabase-write.mjs
 */
import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

console.log('🔍 Kiểm tra Supabase credentials...');
console.log(`  URL: ${url ? '✅ Có' : '❌ Thiếu'}`);
console.log(`  Anon Key: ${anonKey ? '✅ Có' : '❌ Thiếu'}`);
console.log(`  Service Role Key: ${serviceKey ? '✅ Có' : '❌ Thiếu'}`);
console.log();

// Dùng service key nếu có, fallback sang anon key
const key = serviceKey || anonKey;
const keyType = serviceKey ? 'SERVICE_ROLE' : 'ANON';
console.log(`  Đang dùng: ${keyType} key\n`);

const supabase = createClient(url, key);

async function main() {
    // 1. Đọc 1 bài test
    const slug = 'dong-hanh-cung-khoan-dau-tu-cua-ban-trong-mot-thi-truong-day-bien-dong';
    console.log('📖 Đọc bài test...');
    const { data: post, error: readErr } = await supabase
        .from('posts')
        .select('id, title, content')
        .eq('slug', slug)
        .single();

    if (readErr) {
        console.log('❌ Lỗi đọc:', readErr.message);
        return;
    }

    console.log(`  ID: ${post.id}`);
    console.log(`  Title: ${post.title}`);
    console.log(`  Content length: ${(post.content || '').length} chars`);
    console.log(`  Content preview: ${(post.content || '').substring(0, 200)}...`);
    console.log();

    // 2. Thử ghi test
    const testMarker = '<!-- test-write-check -->';
    const testContent = post.content + testMarker;

    console.log('✏️ Thử ghi test marker...');
    const { data: updateResult, error: writeErr, count } = await supabase
        .from('posts')
        .update({ content: testContent })
        .eq('id', post.id)
        .select('id, content');

    if (writeErr) {
        console.log('❌ Lỗi ghi:', writeErr.message);
        console.log('💡 Cần dùng Service Role Key thay vì Anon Key!');
        return;
    }

    console.log('  Update response:', updateResult ? `${updateResult.length} row(s)` : 'null');

    // 3. Đọc lại verify
    console.log('🔄 Đọc lại verify...');
    const { data: verify } = await supabase
        .from('posts')
        .select('content')
        .eq('id', post.id)
        .single();

    const hasMarker = (verify?.content || '').includes(testMarker);
    console.log(`  Marker found: ${hasMarker ? '✅ GHI THÀNH CÔNG' : '❌ GHI THẤT BẠI - RLS đang chặn!'}`);

    if (hasMarker) {
        // Xóa marker
        const { error: cleanErr } = await supabase
            .from('posts')
            .update({ content: post.content })
            .eq('id', post.id);
        console.log(`  Đã xóa marker test: ${cleanErr ? '❌' : '✅'}`);
    } else {
        console.log('\n⚠️ GIẢI PHÁP:');
        console.log('  1. Thêm SUPABASE_SERVICE_ROLE_KEY vào .env.local');
        console.log('  2. Lấy key từ: Supabase Dashboard → Settings → API → service_role key');
        console.log('  3. Thêm dòng: SUPABASE_SERVICE_ROLE_KEY=eyJ...');
    }

    // 4. Liệt kê env vars liên quan
    console.log('\n📋 Tất cả env vars Supabase:');
    for (const [k, v] of Object.entries(process.env)) {
        if (k.toLowerCase().includes('supabase')) {
            console.log(`  ${k} = ${v ? v.substring(0, 20) + '...' : 'undefined'}`);
        }
    }
}

main().catch(console.error);
