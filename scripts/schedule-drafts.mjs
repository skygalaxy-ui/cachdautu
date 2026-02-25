import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,title').eq('is_published', false).order('created_at');

console.log(`Tổng bài nháp: ${data.length}`);
console.log(`Lên lịch 3 bài/ngày, bắt đầu 26/02/2026\n`);

// 3 time slots per day (Vietnam time UTC+7)
const timeSlots = ['00:00:00', '05:00:00', '11:00:00']; // UTC = 7:00, 12:00, 18:00 VN

const startDate = new Date('2026-02-26');
let dayIndex = 0;
let slotIndex = 0;

const schedule = [];

for (const p of data) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + dayIndex);

    const dateStr = date.toISOString().split('T')[0];
    const scheduledAt = `${dateStr}T${timeSlots[slotIndex]}+00:00`;

    // Convert to VN time for display
    const vnDate = new Date(scheduledAt);
    vnDate.setHours(vnDate.getHours() + 7);
    const vnTime = vnDate.toISOString().substring(0, 16).replace('T', ' ');

    schedule.push({ id: p.id, title: p.title, scheduledAt, vnTime, dateStr });

    slotIndex++;
    if (slotIndex >= timeSlots.length) {
        slotIndex = 0;
        dayIndex++;
    }
}

// Display schedule grouped by day
let currentDay = '';
schedule.forEach((item, i) => {
    if (item.dateStr !== currentDay) {
        currentDay = item.dateStr;
        console.log(`\n📅 ${currentDay}:`);
    }
    console.log(`  ${i + 1}. ${item.vnTime.split(' ')[1]} → ${item.title}`);
});

const totalDays = dayIndex + (slotIndex > 0 ? 1 : 0);
console.log(`\n=== Tổng: ${data.length} bài / ${totalDays} ngày (26/02 → ${schedule[schedule.length - 1].dateStr}) ===`);

if (process.argv.includes('--apply')) {
    let ok = 0;
    for (const item of schedule) {
        const { error } = await s.from('posts').update({
            scheduled_at: item.scheduledAt,
            updated_at: new Date().toISOString()
        }).eq('id', item.id);
        if (error) console.log(`❌ ${item.title}: ${error.message}`);
        else ok++;
    }
    console.log(`\n✅ Đã lên lịch ${ok} bài!`);
} else {
    console.log('\n⚠️ PREVIEW - chạy với --apply để thực thi');
}
