import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts').select('id, slug, content').eq('is_published', true);

let totalLists = 0;
const results = [];
for (const p of posts || []) {
    if (!p.content) continue;
    const ulCount = (p.content.match(/<ul>/g) || []).length;
    const olCount = (p.content.match(/<ol>/g) || []).length;
    const liCount = (p.content.match(/<li>/g) || []).length;
    const pCount = (p.content.match(/<p>/g) || []).length;
    const ratio = liCount > 0 ? (liCount / (liCount + pCount) * 100).toFixed(0) : 0;
    if (liCount > 5) {
        results.push({ slug: p.slug, lists: ulCount + olCount, items: liCount, paragraphs: pCount, ratio: ratio + '%' });
        totalLists += liCount;
    }
}

results.sort((a, b) => b.items - a.items);
console.log(`📊 Bài có nhiều list items (>5):\n`);
console.log('Slug | Lists | Items | Paragraphs | Ratio');
console.log('-'.repeat(70));
for (const r of results) {
    console.log(`${r.slug} | ${r.lists} | ${r.items} | ${r.paragraphs} | ${r.ratio}`);
}
console.log(`\nTổng: ${results.length} bài có nhiều list, ${totalLists} list items`);

// Show sample content of worst offender
if (results.length > 0) {
    const worst = results[0];
    const { data: post } = await s.from('posts').select('content').eq('slug', worst.slug).single();
    // Show first 2 lists
    const lists = post.content.match(/<ul>[\s\S]*?<\/ul>/g) || [];
    console.log(`\n📝 Mẫu từ "${worst.slug}":\n`);
    for (let i = 0; i < Math.min(2, lists.length); i++) {
        console.log(lists[i].substring(0, 500));
        console.log('...\n');
    }
}
