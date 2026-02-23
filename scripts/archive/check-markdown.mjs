import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts').select('id, slug, content').eq('is_published', true);
let issues = 0;
for (const p of posts || []) {
    if (!p.content) continue;
    // Check for markdown syntax in content
    const hasMarkdownLinks = /\[([^\]]+)\]\(\/blog\/[^\)]+\)/.test(p.content);
    const hasMarkdownHeadings = /\n## /.test(p.content);
    const hasBulletList = /\n- \[/.test(p.content);
    if (hasMarkdownLinks || hasBulletList) {
        console.log(`⚠️ ${p.slug} — has markdown links in HTML content`);
        // Show the problematic section
        const match = p.content.match(/Bài viết liên quan[\s\S]{0,300}/);
        if (match) console.log('   →', match[0].substring(0, 200));
        issues++;
    }
}
console.log(`\nTotal issues: ${issues}`);
