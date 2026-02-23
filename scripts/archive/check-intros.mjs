import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Check which posts have H2 followed immediately by <p><strong> or <ul> or <h3> without intro paragraph
const { data: posts } = await s.from('posts').select('id, slug, content').eq('is_published', true);

let needsFix = [];
for (const p of posts || []) {
    if (!p.content) continue;
    // Count H2s followed by list-like patterns without intro paragraph
    const h2Pattern = /<\/h2>\s*\n*\s*(<p><strong>|<ul>|<ol>|<h3>)/g;
    const matches = p.content.match(h2Pattern);
    if (matches && matches.length >= 2) {
        needsFix.push({ slug: p.slug, count: matches.length });
    }
}

needsFix.sort((a, b) => b.count - a.count);
console.log(`Posts needing intro paragraphs: ${needsFix.length}\n`);
for (const p of needsFix) {
    console.log(`  ${p.count}x  ${p.slug}`);
}
