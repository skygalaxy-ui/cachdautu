import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts').select('id, slug, content').eq('is_published', true);

let fixed = 0;
for (const p of posts || []) {
    if (!p.content) continue;
    let c = p.content;
    let changed = false;

    // 1. Remove "Kết luận" headings (H2 and H3 variants)
    // Match <h2>Kết luận</h2>, <h2>| Kết luận</h2>, etc.
    const beforeKL = c;
    c = c.replace(/<h2[^>]*>\s*\|?\s*Kết luận\s*<\/h2>/gi, '');
    c = c.replace(/<h3[^>]*>\s*\|?\s*Kết luận\s*<\/h3>/gi, '');
    if (c !== beforeKL) changed = true;

    // 2. Remove " —" (space + em dash) patterns
    const beforeDash = c;
    c = c.replace(/ —/g, '');
    c = c.replace(/ — /g, ' ');
    if (c !== beforeDash) changed = true;

    if (changed) {
        const { error } = await s.from('posts').update({ content: c }).eq('id', p.id);
        if (error) {
            console.log(`❌ ${p.slug}: ${error.message}`);
        } else {
            console.log(`✅ ${p.slug}`);
            fixed++;
        }
    }
}

console.log(`\n🎉 Fixed ${fixed} posts`);
