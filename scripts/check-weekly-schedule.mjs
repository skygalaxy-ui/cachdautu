import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const now = new Date('2026-03-03T00:00:00Z');
const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

const { data, error } = await s
    .from('posts')
    .select('title, slug, scheduled_at, content, is_published')
    .gte('scheduled_at', now.toISOString())
    .lte('scheduled_at', nextWeek.toISOString())
    .order('scheduled_at', { ascending: true });

if (error) {
    console.log('❌ Error:', error.message);
} else {
    console.log(`=== BÀI VIẾT LÊN LỊCH TRONG TUẦN (03/03 - 10/03/2026) ===`);
    if (data.length === 0) {
        console.log('Không có bài nào lên lịch trong tuần này.');
    } else {
        data.forEach(p => {
            const wc = p.content ? p.content.split(/\s+/).length : 0;
            console.log(`- [${new Date(p.scheduled_at).toLocaleDateString('vi-VN')}] ${p.title}`);
            console.log(`  🔹 Slug: ${p.slug}`);
            console.log(`  🔹 Số từ: ${wc} words ${wc < 1000 ? '⚠️ (Cần mở rộng)' : '✅'}`);
            console.log('--------------------------------------------------');
        });
    }
}
