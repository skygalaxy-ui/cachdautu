import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function checkMonthlySlots() {
    const { data: posts, error } = await s
        .from('posts')
        .select('scheduled_at, title, slug')
        .gte('scheduled_at', '2026-03-01T00:00:00Z')
        .lte('scheduled_at', '2026-03-31T23:59:59Z')
        .order('scheduled_at', { ascending: true });

    if (error) {
        console.error("Lỗi fetch:", error.message);
        return;
    }

    const marchSchedule = {};
    for (let i = 1; i <= 31; i++) {
        const dateStr = `2026-03-${i.toString().padStart(2, '0')}`;
        marchSchedule[dateStr] = [];
    }

    posts.forEach(p => {
        const date = p.scheduled_at.split('T')[0];
        if (marchSchedule[date]) {
            marchSchedule[date].push(p.title);
        }
    });

    console.log("=== LỊCH ĐĂNG BÀI THÁNG 3/2026 ===");
    Object.entries(marchSchedule).forEach(([date, titles]) => {
        console.log(`[${date}]: ${titles.length > 0 ? titles.join(' | ') : '--- TRỐNG ---'}`);
    });
}

checkMonthlySlots();
