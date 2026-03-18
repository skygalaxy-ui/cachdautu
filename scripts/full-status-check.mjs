import { createClient } from '@supabase/supabase-js';

// DB chính xác cho cachdautu.com (từ database_mapping audit)
const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const now = new Date();
const vnNow = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

console.log(`\n${'='.repeat(80)}`);
console.log(`🕐 KIỂM TRA HỆ THỐNG BÀI VIẾT - ${vnNow}`);
console.log(`${'='.repeat(80)}`);

// 1. Lấy tất cả bài viết
const { data: allPosts, error } = await s.from('posts')
    .select('id, title, slug, is_published, scheduled_at, created_at, updated_at, category_id')
    .order('scheduled_at', { ascending: true, nullsFirst: false });

if (error) { console.error('❌ Lỗi:', error.message); process.exit(1); }

// 2. Phân loại
const published = allPosts.filter(p => p.is_published === true);
const drafts = allPosts.filter(p => p.is_published === false);
const scheduled = drafts.filter(p => p.scheduled_at);
const scheduledPast = scheduled.filter(p => new Date(p.scheduled_at) <= now);
const scheduledFuture = scheduled.filter(p => new Date(p.scheduled_at) > now);
const noSchedule = drafts.filter(p => !p.scheduled_at);

// Bài published nhưng có scheduled_at trong tương lai (bất thường)
const publishedButFuture = published.filter(p => p.scheduled_at && new Date(p.scheduled_at) > now);

console.log(`\n📊 TỔNG QUAN:`);
console.log(`   Tổng số bài viết: ${allPosts.length}`);
console.log(`   ✅ Đã xuất bản (is_published=true): ${published.length}`);
console.log(`   📝 Chưa xuất bản (is_published=false): ${drafts.length}`);
console.log(`      ├─ Có lịch đăng (scheduled_at): ${scheduled.length}`);
console.log(`      │  ├─ Đã quá hạn (cần publish): ${scheduledPast.length}`);
console.log(`      │  └─ Lịch trong tương lai: ${scheduledFuture.length}`);
console.log(`      └─ Không có lịch: ${noSchedule.length}`);

// 3. KIỂM TRA CRON: Bài đã quá hạn nhưng chưa publish
console.log(`\n${'─'.repeat(80)}`);
if (scheduledPast.length > 0) {
    console.log(`\n⚠️  CẢNH BÁO: ${scheduledPast.length} BÀI ĐÃ QUÁ HẠN LỊCH NHƯNG CHƯA PUBLISH:`);
    console.log(`   → Hệ thống tự động xuất bản (cron) CÓ THỂ KHÔNG hoạt động!\n`);
    scheduledPast.forEach((p, i) => {
        const schedDate = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        const hoursOverdue = Math.round((now - new Date(p.scheduled_at)) / (1000 * 60 * 60));
        console.log(`   ${i + 1}. [${schedDate}] ${p.title}`);
        console.log(`      slug: ${p.slug} | Quá hạn: ${hoursOverdue}h`);
    });
} else {
    console.log(`\n✅ CRON CHECK: Không có bài nào quá hạn → Hệ thống tự động hoạt động tốt!`);
}

// 4. Bài đã published nhưng scheduled_at trong tương lai (bất thường)
if (publishedButFuture.length > 0) {
    console.log(`\n⚠️  BẤT THƯỜNG: ${publishedButFuture.length} bài đã published nhưng scheduled_at trong tương lai:`);
    publishedButFuture.forEach((p, i) => {
        const schedDate = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`   ${i + 1}. [Lịch: ${schedDate}] ${p.title}`);
    });
}

// 5. Bài lên lịch trong tương lai
console.log(`\n${'─'.repeat(80)}`);
if (scheduledFuture.length > 0) {
    console.log(`\n📅 BÀI ĐÃ LÊN LỊCH TRONG TƯƠNG LAI (${scheduledFuture.length} bài):`);
    
    // Nhóm theo ngày
    const byDate = {};
    scheduledFuture.forEach(p => {
        const dateKey = new Date(p.scheduled_at).toLocaleDateString('vi-VN', { 
            timeZone: 'Asia/Ho_Chi_Minh', weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' 
        });
        if (!byDate[dateKey]) byDate[dateKey] = [];
        byDate[dateKey].push(p);
    });

    Object.entries(byDate).forEach(([date, posts]) => {
        console.log(`\n   📅 ${date} (${posts.length} bài):`);
        posts.forEach(p => {
            const time = new Date(p.scheduled_at).toLocaleTimeString('vi-VN', { 
                timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit' 
            });
            console.log(`      ${time} → ${p.title}`);
        });
    });

    // Kiểm tra lịch có đều không
    const futureDates = [...new Set(scheduledFuture.map(p => 
        new Date(p.scheduled_at).toISOString().split('T')[0]
    ))].sort();
    
    if (futureDates.length > 1) {
        console.log(`\n   📈 Phân bố lịch: ${futureDates[0]} → ${futureDates[futureDates.length - 1]}`);
        
        // Kiểm tra gaps (ngày trống giữa các ngày lên lịch)
        const gaps = [];
        for (let i = 1; i < futureDates.length; i++) {
            const d1 = new Date(futureDates[i - 1]);
            const d2 = new Date(futureDates[i]);
            const diff = (d2 - d1) / (1000 * 60 * 60 * 24);
            if (diff > 2) gaps.push({ from: futureDates[i - 1], to: futureDates[i], days: diff });
        }
        if (gaps.length > 0) {
            console.log(`\n   ⚠️  Phát hiện ${gaps.length} khoảng trống lớn trong lịch:`);
            gaps.forEach(g => console.log(`      ${g.from} → ${g.to} (${g.days} ngày)`));
        } else {
            console.log(`   ✅ Lịch xuất bản liên tục, không có khoảng trống lớn.`);
        }
    }
} else {
    console.log(`\n📅 Không có bài nào được lên lịch trong tương lai.`);
}

// 6. Bài published gần nhất
console.log(`\n${'─'.repeat(80)}`);
console.log(`\n📰 10 BÀI ĐÃ XUẤT BẢN GẦN NHẤT:`);
const recentPublished = published
    .sort((a, b) => new Date(b.scheduled_at || b.created_at) - new Date(a.scheduled_at || a.created_at))
    .slice(0, 10);

recentPublished.forEach((p, i) => {
    const date = new Date(p.scheduled_at || p.created_at).toLocaleString('vi-VN', { 
        timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    console.log(`   ${i + 1}. [${date}] ${p.title}`);
});

// 7. Bài nháp không có lịch
if (noSchedule.length > 0) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log(`\n🔕 BÀI NHÁP KHÔNG CÓ LỊCH (${noSchedule.length} bài):`);
    noSchedule.forEach((p, i) => {
        console.log(`   ${i + 1}. ${p.title} (slug: ${p.slug})`);
    });
}

// 8. Kiểm tra cron/edge function cho tự động publish
console.log(`\n${'─'.repeat(80)}`);
console.log(`\n🔧 KIỂM TRA HỆ THỐNG TỰ ĐỘNG:`);

// Check if there's a pattern - are published posts' scheduled_at always in the past?
const publishedWithSchedule = published.filter(p => p.scheduled_at);
const publishedCorrect = publishedWithSchedule.filter(p => new Date(p.scheduled_at) <= now);
const publishedPremature = publishedWithSchedule.filter(p => new Date(p.scheduled_at) > now);

console.log(`   Bài published có scheduled_at:

 ${publishedWithSchedule.length}/${published.length}`);
console.log(`   ├─ scheduled_at đã qua (đúng): ${publishedCorrect.length}`);
console.log(`   └─ scheduled_at chưa đến (bất thường): ${publishedPremature.length}`);

// Check publishing pattern - are posts being published at expected times?
if (publishedWithSchedule.length > 0) {
    const scheduledTimes = publishedWithSchedule.map(p => {
        const d = new Date(p.scheduled_at);
        return d.getUTCHours();
    });
    const hourCounts = {};
    scheduledTimes.forEach(h => { hourCounts[h] = (hourCounts[h] || 0) + 1; });
    
    console.log(`\n   ⏰ Phân bố giờ xuất bản (UTC):`);
    Object.entries(hourCounts).sort((a, b) => b[1] - a[1]).forEach(([hour, count]) => {
        const vnHour = (parseInt(hour) + 7) % 24;
        console.log(`      ${hour.padStart(2)}:00 UTC (${String(vnHour).padStart(2)}:00 VN): ${'█'.repeat(Math.min(count, 50))} ${count} bài`);
    });
}

console.log(`\n${'='.repeat(80)}`);
console.log('✅ Kiểm tra hoàn tất!\n');
