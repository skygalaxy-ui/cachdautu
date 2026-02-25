import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,title,content').order('created_at', { ascending: true });

let found = 0;
const results = [];

for (const p of data) {
    if (!p.content) continue;

    // Find markdown table patterns: lines with | separators
    const lines = p.content.split('\n');
    let hasMdTable = false;

    for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i].trim();
        const nextLine = lines[i + 1]?.trim();

        // Markdown table: line with |, followed by |---|---| separator
        if (line.includes('|') && nextLine && /^\|[\s\-\|:]+\|$/.test(nextLine)) {
            hasMdTable = true;
            break;
        }
    }

    if (hasMdTable) {
        found++;
        results.push({ id: p.id, title: p.title });
        console.log(`${found}. ❌ ${p.title}`);
        console.log(`   ID: ${p.id}\n`);
    }
}

console.log(`\n=== Tổng: ${found}/${data.length} bài có bảng Markdown chưa convert ===`);
