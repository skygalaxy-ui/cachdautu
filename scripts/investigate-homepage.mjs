/**
 * Kiểm tra xem bài mới nhất trong DB có khớp với trang chủ không
 */
import { createClient } from '@supabase/supabase-js';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// 10 bài mới nhất đã publish
const { data: latest } = await s.from('posts')
    .select('title, slug, created_at, updated_at, scheduled_at, is_published')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(15);

console.log('=== 15 BAI MOI NHAT TRONG DB (da publish) ===\n');
latest.forEach((p, i) => {
    const created = new Date(p.created_at);
    const scheduled = p.scheduled_at ? new Date(p.scheduled_at) : null;
    console.log(`${i+1}. [${created.toLocaleDateString('vi-VN')}] "${p.title}"`);
    console.log(`   created_at: ${p.created_at}`);
    if (scheduled) console.log(`   scheduled_at: ${p.scheduled_at}`);
    console.log(`   slug: ${p.slug}`);
    console.log();
});

// Check 3 bai tren trang chu (tu screenshot)
console.log('=== 3 BAI TREN TRANG CHU (tu screenshot) ===');
console.log('1. "Dong hanh cung khoan dau tu cua ban trong mot thi truong..." - 3/3/2026');
console.log('2. "Top cac quy dau tu (Quy mo) tot nhat Viet Nam 2026" - 3/3/2026');
console.log('3. "Su dung tai khoan giao dich demo: Luyen tap truoc khi dau..." - 3/3/2026');
console.log();

// Tim bai "Dong hanh cung khoan dau tu" trong DB
const { data: homepage3 } = await s.from('posts')
    .select('title, slug, created_at, scheduled_at, is_published')
    .or('slug.ilike.%dong-hanh%,slug.ilike.%khoan-dau-tu%')
    .limit(5);

console.log('=== TIM BAI "Dong hanh" TRONG DB ===');
homepage3?.forEach(p => {
    console.log(`  "${p.title}"`);
    console.log(`   slug: ${p.slug}`);
    console.log(`   created_at: ${p.created_at}`);
    console.log(`   published: ${p.is_published}`);
});

// Check xem trang chu dang sort theo gi
console.log('\n=== KIEM TRA SORT ORDER ===');
console.log('Trang chu nen hien bai moi nhat theo created_at hoac scheduled_at');
console.log(`Bai moi nhat DB: "${latest[0].title}" - ${latest[0].created_at}`);
console.log(`Trang chu hien: bai ngay 3/3/2026 - CACH 14 NGAY!\n`);

// Kiem tra xem bai tren trang chu co phai la bai created_at ngay 3/3 khong
const { data: march3 } = await s.from('posts')
    .select('title, slug, created_at')
    .eq('is_published', true)
    .gte('created_at', '2026-03-03T00:00:00')
    .lte('created_at', '2026-03-03T23:59:59')
    .order('created_at', { ascending: false });

console.log(`=== BAI CREATED NGAY 3/3/2026 ===`);
march3?.forEach(p => {
    console.log(`  "${p.title}" - ${p.created_at}`);
});
