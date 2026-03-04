import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

async function getThinPosts() {
    const { data: posts, error } = await s.from('posts')
        .select('id, title, slug, content, scheduled_at')
        .gte('scheduled_at', new Date().toISOString())
        .order('scheduled_at', { ascending: true });

    if (error) {
        console.error(error);
        return;
    }

    const thin = posts.filter(p => !p.content || p.content.length < 2000);

    console.log(`Tìm thấy ${thin.length} bài viết cần mở rộng:`);
    thin.slice(0, 5).forEach(p => {
        console.log(`- [${p.scheduled_at}] ${p.title} (${p.content?.length || 0} chars)`);
    });
}

getThinPosts();
