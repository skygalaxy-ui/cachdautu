const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function analyze() {
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, content')
        .eq('is_published', true)
        .order('created_at');

    const lines = posts.map((p, i) => {
        const len = p.content ? p.content.length : 0;
        const lists = (p.content || '').match(/<li>/g);
        const paras = (p.content || '').match(/<p>/g);
        return `${i + 1}. [${p.id.substring(0, 8)}] ${p.slug} | ${len}chars | <p>:${paras ? paras.length : 0} | <li>:${lists ? lists.length : 0}`;
    });
    fs.writeFileSync('post-analysis.txt', lines.join('\n'));
    console.log(lines.join('\n'));
}
analyze();
