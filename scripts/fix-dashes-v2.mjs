import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts').select('id, slug, content, title').eq('is_published', true);

let fixed = 0;
for (const p of posts || []) {
    let changed = false;
    let content = p.content || '';
    let title = p.title || '';

    // 1. Remove " — " and " —" from content (inside headings, paragraphs, etc.)
    const c1 = content;
    content = content.replace(/ — /g, ' ').replace(/ —/g, '');
    if (content !== c1) changed = true;

    // 2. Remove " — " from title
    const t1 = title;
    title = title.replace(/ — /g, ' ').replace(/ —/g, '');

    const updates = {};
    if (content !== c1) updates.content = content;
    if (title !== t1) updates.title = title;

    if (Object.keys(updates).length > 0) {
        const { error } = await s.from('posts').update(updates).eq('id', p.id);
        if (error) {
            console.log(`❌ ${p.slug}: ${error.message}`);
        } else {
            console.log(`✅ ${p.slug}${updates.title ? ' [title fixed]' : ''}`);
            fixed++;
        }
    }
}
console.log(`\n🎉 Fixed ${fixed} posts (remaining dashes in content + titles)`);
