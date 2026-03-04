import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const now = new Date();
const nowISO = now.toISOString();

const { data: allPosts } = await s.from('posts').select('id, title, slug, is_published, scheduled_at, created_at').order('scheduled_at', { ascending: true, nullsFirst: false });

const published = allPosts.filter(p => p.is_published === true);
const drafts = allPosts.filter(p => p.is_published === false);
const scheduled = drafts.filter(p => p.scheduled_at);
const scheduledPast = scheduled.filter(p => new Date(p.scheduled_at) <= now);
const scheduledFuture = scheduled.filter(p => new Date(p.scheduled_at) > now);
const noSchedule = drafts.filter(p => !p.scheduled_at);

// Output as JSON for easy reading
const result = {
    checked_at: nowISO,
    summary: {
        total: allPosts.length,
        published: published.length,
        drafts: drafts.length,
        scheduled_total: scheduled.length,
        overdue: scheduledPast.length,
        upcoming: scheduledFuture.length,
        no_schedule: noSchedule.length,
    },
    overdue_posts: scheduledPast.map(p => ({
        title: p.title,
        slug: p.slug,
        scheduled_at: p.scheduled_at
    })),
    upcoming_posts: scheduledFuture.map(p => ({
        title: p.title,
        slug: p.slug,
        scheduled_at: p.scheduled_at
    })),
    no_schedule_posts: noSchedule.map(p => ({
        title: p.title,
        slug: p.slug,
    })),
    recent_published: published
        .sort((a, b) => new Date(b.scheduled_at || b.created_at) - new Date(a.scheduled_at || a.created_at))
        .slice(0, 5)
        .map(p => ({
            title: p.title,
            slug: p.slug,
            scheduled_at: p.scheduled_at,
            created_at: p.created_at
        }))
};

// Write to file for easy reading
import { writeFileSync } from 'fs';
writeFileSync('f:/antigravity-projects/cachdautu/scripts/status-report.json', JSON.stringify(result, null, 2));
console.log('Report saved to status-report.json');
console.log(`Total: ${result.summary.total} | Published: ${result.summary.published} | Drafts: ${result.summary.drafts} | Overdue: ${result.summary.overdue} | Upcoming: ${result.summary.upcoming}`);
