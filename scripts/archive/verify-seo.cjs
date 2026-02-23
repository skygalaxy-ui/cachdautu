const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

function countWords(html) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
    return text.split(' ').filter(w => w.length > 0).length;
}

async function check() {
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, excerpt, content')
        .eq('is_published', true)
        .order('created_at');

    const lines = [];
    let lowCount = 0;
    for (const p of posts) {
        const words = countWords(p.content || '');
        const excerptLen = p.excerpt ? p.excerpt.length : 0;
        const ok = words >= 1000;
        if (!ok) lowCount++;
        lines.push(`${ok ? '+' : '-'} ${p.slug.substring(0, 40).padEnd(42)} | ${String(words).padStart(5)}w | desc:${excerptLen}ch`);
    }
    lines.push('');
    lines.push(`LOW: ${lowCount} posts under 1000 words`);
    fs.writeFileSync('seo-report.txt', lines.join('\n'));
    console.log(lines.join('\n'));
}
check();
