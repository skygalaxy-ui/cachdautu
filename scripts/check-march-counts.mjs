import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function checkMonthlySlots() {
    const { data: posts, error } = await s
        .from('posts')
        .select('scheduled_at')
        .gte('scheduled_at', '2026-03-01T00:00:00Z')
        .lte('scheduled_at', '2026-03-31T23:59:59Z')
        .order('scheduled_at', { ascending: true });

    if (error) {
        console.error("error:", error.message);
        return;
    }

    const counts = {};
    posts.forEach(p => {
        const date = p.scheduled_at.split('T')[0];
        counts[date] = (counts[date] || 0) + 1;
    });

    console.log("D: C");
    for (let i = 3; i <= 31; i++) {
        const d = `2026-03-${i.toString().padStart(2, '0')}`;
        console.log(`${d}: ${counts[d] || 0}`);
    }
}

checkMonthlySlots();
