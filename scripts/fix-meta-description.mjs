/**
 * FIX 1: Tạo meta_description từ excerpt cho 104 bài thiếu
 * Bước 1: PREVIEW - Xem trước kết quả trước khi apply
 */
import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Lấy tất cả bài thiếu meta_description
const { data: posts, error } = await s.from('posts')
    .select('id, title, slug, excerpt, meta_description, focus_keyword')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

if (error) { console.error('❌ Lỗi:', error.message); process.exit(1); }

const needFix = posts.filter(p => !p.meta_description || p.meta_description.trim().length < 10);
const alreadyOk = posts.filter(p => p.meta_description && p.meta_description.trim().length >= 10);

console.log(`\n📊 PREVIEW - Tạo Meta Description`);
console.log(`   Tổng bài published: ${posts.length}`);
console.log(`   Đã có meta_description: ${alreadyOk.length}`);
console.log(`   Cần tạo: ${needFix.length}`);

// Hàm tạo meta description tối ưu
function generateMeta(post) {
    let excerpt = (post.excerpt || '').trim();
    
    if (!excerpt || excerpt.length < 20) {
        return null; // Không có excerpt để copy
    }
    
    // Cắt ≤155 ký tự, giữ nguyên câu
    if (excerpt.length <= 155) {
        return excerpt;
    }
    
    // Cắt tại dấu chấm cuối cùng trong phạm vi 155 ký tự
    const truncated = excerpt.substring(0, 155);
    const lastDot = truncated.lastIndexOf('.');
    const lastComma = truncated.lastIndexOf(',');
    
    if (lastDot > 100) {
        return truncated.substring(0, lastDot + 1);
    } else if (lastComma > 100) {
        return truncated.substring(0, lastComma) + '...';
    } else {
        // Cắt tại từ cuối cùng
        const lastSpace = truncated.lastIndexOf(' ');
        return truncated.substring(0, lastSpace) + '...';
    }
}

// Preview kết quả
let canFix = 0;
let cannotFix = 0;
const fixes = [];

console.log('\n' + '─'.repeat(80));
console.log('📝 PREVIEW KẾT QUẢ:\n');

for (const post of needFix) {
    const meta = generateMeta(post);
    if (meta) {
        canFix++;
        fixes.push({ id: post.id, title: post.title, meta });
        if (canFix <= 10) {
            console.log(`  ✅ "${post.title}"`);
            console.log(`     Excerpt: ${(post.excerpt || '').substring(0, 80)}...`);
            console.log(`     Meta (${meta.length} chars): ${meta}`);
            console.log();
        }
    } else {
        cannotFix++;
        console.log(`  ❌ "${post.title}" → Không có excerpt để tạo meta`);
    }
}

if (canFix > 10) {
    console.log(`  ... và ${canFix - 10} bài khác\n`);
}

console.log('─'.repeat(80));
console.log(`\n📊 KẾT QUẢ PREVIEW:`);
console.log(`   ✅ Có thể tạo meta: ${canFix}/${needFix.length}`);
console.log(`   ❌ Không tạo được: ${cannotFix}/${needFix.length}`);

// Kiểm tra chất lượng
const metaLengths = fixes.map(f => f.meta.length);
const avgLen = Math.round(metaLengths.reduce((a, b) => a + b, 0) / metaLengths.length);
const minLen = Math.min(...metaLengths);
const maxLen = Math.max(...metaLengths);

console.log(`\n   📏 Độ dài meta description:`);
console.log(`      Trung bình: ${avgLen} ký tự`);
console.log(`      Ngắn nhất: ${minLen} ký tự`);
console.log(`      Dài nhất: ${maxLen} ký tự`);
console.log(`      Tối ưu (120-155): ${metaLengths.filter(l => l >= 120 && l <= 155).length}/${fixes.length}`);

// Apply nếu có flag --apply
if (process.argv.includes('--apply')) {
    console.log(`\n🚀 ĐANG ÁP DỤNG...`);
    let ok = 0, fail = 0;
    
    for (const fix of fixes) {
        const { error: updateError } = await s.from('posts')
            .update({ meta_description: fix.meta })
            .eq('id', fix.id);
        
        if (updateError) {
            console.log(`  ❌ "${fix.title}": ${updateError.message}`);
            fail++;
        } else {
            ok++;
        }
    }
    
    console.log(`\n✅ HOÀN TẤT: ${ok} bài đã cập nhật meta_description`);
    if (fail > 0) console.log(`  ❌ ${fail} bài lỗi`);
} else {
    console.log(`\n⚠️  PREVIEW MODE - Chạy lại với --apply để thực thi`);
    console.log(`   node scripts/fix-meta-description.mjs --apply`);
}
