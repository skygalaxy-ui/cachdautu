import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,title,slug,content,category_id');

const thin = []; // bài mỏng < 3000 chars
const noImg = []; // bài không có ảnh minh họa trong content

for (const p of data) {
    if (!p.content) continue;
    const len = p.content.length;
    const hasImg = p.content.includes('<img');

    if (len < 3000) {
        thin.push({ title: p.title, len, hasImg });
    }
    if (!hasImg) {
        noImg.push({ title: p.title, len });
    }
}

console.log(`=== Bài MỎNG (< 3000 chars) — ${thin.length} bài ===\n`);
thin.sort((a, b) => a.len - b.len);
thin.forEach((p, i) => {
    console.log(`${i + 1}. ${p.len} chars | img=${p.hasImg} | ${p.title}`);
});

console.log(`\n=== Bài KHÔNG CÓ ẢNH minh họa — ${noImg.length}/${data.length} bài ===\n`);
// Just show count and some examples
console.log(`${noImg.length} bài không có <img> trong nội dung`);
console.log('Ví dụ:');
noImg.slice(0, 10).forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.len} chars | ${p.title}`);
});
