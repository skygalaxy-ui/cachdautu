import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function checkGaps() {
    const { data: posts, error } = await s
        .from('posts')
        .select('scheduled_at')
        .gte('scheduled_at', '2026-03-04T00:00:00Z')
        .lte('scheduled_at', '2026-03-31T23:59:59Z')
        .order('scheduled_at', { ascending: true });

    if (error) {
        console.error("error:", error.message);
        return;
    }

    const scheduledDates = new Set();
    posts.forEach(p => scheduledDates.add(p.scheduled_at.split('T')[0]));

    console.log("=== CÁC NGÀY CHƯA CÓ BÀI TRONG THÁNG 3/2026 ===");
    for (let i = 4; i <= 31; i++) {
        const dateStr = `2026-03-${i.toString().padStart(2, '0')}`;
        if (!scheduledDates.has(dateStr)) {
            console.log(`- ${dateStr} (TRỐNG)`);
        }
    }
}

checkGaps();
