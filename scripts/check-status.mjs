import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const now = new Date();
const nowISO = now.toISOString();
const vnNow = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

console.log(`\n🕐 Thời gian hiện tại: ${vnNow} (UTC: ${nowISO})\n`);
console.log('='.repeat(80));

// 1. Tổng quan
const { data: allPosts } = await s.from('posts').select('id, title, slug, is_published, scheduled_at, created_at, category_id').order('scheduled_at', { ascending: true, nullsFirst: false });

const published = allPosts.filter(p => p.is_published === true);
const drafts = allPosts.filter(p => p.is_published === false);
const scheduled = drafts.filter(p => p.scheduled_at);
const scheduledPast = scheduled.filter(p => new Date(p.scheduled_at) <= now);
const scheduledFuture = scheduled.filter(p => new Date(p.scheduled_at) > now);
const noSchedule = drafts.filter(p => !p.scheduled_at);

console.log(`\n📊 TỔNG QUAN BÀI VIẾT:`);
console.log(`   Tổng số bài: ${allPosts.length}`);
console.log(`   ✅ Đã xuất bản: ${published.length}`);
console.log(`   📝 Chưa xuất bản (nháp): ${drafts.length}`);
console.log(`      - Có lịch (scheduled_at): ${scheduled.length}`);
console.log(`      - Không có lịch: ${noSchedule.length}`);

// 2. Bài đã lên lịch nhưng QUÁ HẠN chưa được publish (= hệ thống cron không hoạt động)
if (scheduledPast.length > 0) {
    console.log(`\n⚠️  BÀI ĐÃ QUÁ HẠN LỊCH NHƯNG CHƯA ĐƯỢC XUẤT BẢN (${scheduledPast.length} bài):`);
    console.log('   → CÓ VẤN ĐỀ: Cron job tự động xuất bản KHÔNG hoạt động!\n');
    scheduledPast.forEach((p, i) => {
        const schedDate = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`   ${i + 1}. [${schedDate}] ${p.title}`);
        console.log(`      slug: ${p.slug}`);
    });
} else {
    console.log(`\n✅ Không có bài nào quá hạn lịch → Hệ thống cron đang hoạt động tốt!`);
}

// 3. Bài chưa xuất bản có lịch trong tương lai
if (scheduledFuture.length > 0) {
    console.log(`\n📅 BÀI ĐÃ LÊN LỊCH TRONG TƯƠNG LAI (${scheduledFuture.length} bài):`);
    scheduledFuture.forEach((p, i) => {
        const schedDate = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`   ${i + 1}. [${schedDate}] ${p.title}`);
    });
}

// 4. Bài đã xuất bản gần nhất
console.log(`\n📰 5 BÀI ĐÃ XUẤT BẢN GẦN NHẤT:`);
const recentPublished = published
    .filter(p => p.scheduled_at)
    .sort((a, b) => new Date(b.scheduled_at) - new Date(a.scheduled_at))
    .slice(0, 5);
if (recentPublished.length > 0) {
    recentPublished.forEach((p, i) => {
        const schedDate = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`   ${i + 1}. [${schedDate}] ${p.title}`);
    });
} else {
    const recentAny = published.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5);
    recentAny.forEach((p, i) => {
        const createdDate = new Date(p.created_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`   ${i + 1}. [Created: ${createdDate}] ${p.title}`);
    });
}

// 5. Bài nháp không có lịch
if (noSchedule.length > 0) {
    console.log(`\n🔕 BÀI NHÁP KHÔNG CÓ LỊCH (${noSchedule.length} bài):`);
    noSchedule.forEach((p, i) => {
        console.log(`   ${i + 1}. ${p.title} (slug: ${p.slug})`);
    });
}

console.log('\n' + '='.repeat(80));
console.log('Done!\n');
