import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function getNextThin() {
    const { data: posts, error } = await s.from('posts')
        .select('id, title, slug, content, scheduled_at')
        .gte('scheduled_at', new Date().toISOString())
        .order('scheduled_at', { ascending: true });

    if (error) {
        console.error(error);
        return;
    }

    const thin = posts.filter(p => !p.content || p.content.length < 2000);

    console.log("DANH SÁCH BÀI MỎNG SẮP ĐẾN NGÀY ĐĂNG:");
    thin.slice(0, 10).forEach(p => {
        console.log(`- [${p.scheduled_at.split('T')[0]}] ${p.title} (${p.content?.length || 0} chars)`);
    });
}

getNextThin();
