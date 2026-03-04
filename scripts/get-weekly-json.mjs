import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const now = new Date('2026-03-03T00:00:00Z');
const nextWeek = new Date(now.getTime() + 8 * 24 * 60 * 60 * 1000);

const { data, error } = await s
    .from('posts')
    .select('title, slug, scheduled_at, content, category_id')
    .gte('scheduled_at', now.toISOString())
    .lte('scheduled_at', nextWeek.toISOString())
    .order('scheduled_at', { ascending: true });

if (error) {
    console.log(error);
} else {
    const report = data.map(p => ({
        date: new Date(p.scheduled_at).toLocaleDateString('vi-VN'),
        title: p.title,
        slug: p.slug,
        words: p.content ? p.content.split(/\s+/).length : 0
    }));
    fs.writeFileSync('f:/antigravity-projects/cachdautu/scripts/weekly-schedule.json', JSON.stringify(report, null, 2));
    console.log(`Found ${data.length} posts.`);
}
