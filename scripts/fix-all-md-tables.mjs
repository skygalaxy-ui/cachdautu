import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

function mdTableToHtml(mdTable) {
    const lines = mdTable.trim().split('\n').filter(l => l.trim());
    if (lines.length < 2) return mdTable;

    // Parse header
    const headerCells = lines[0].split('|').map(c => c.trim()).filter(c => c);

    // Skip separator line (|---|---|)
    // Parse body rows
    const bodyRows = [];
    for (let i = 2; i < lines.length; i++) {
        const cells = lines[i].split('|').map(c => c.trim()).filter(c => c);
        if (cells.length > 0) bodyRows.push(cells);
    }

    // Build HTML
    let html = '<table>\n<thead>\n<tr>\n';
    headerCells.forEach(c => { html += `<th>${c}</th>\n`; });
    html += '</tr>\n</thead>\n<tbody>\n';
    bodyRows.forEach(row => {
        html += '<tr>\n';
        row.forEach(c => { html += `<td>${c}</td>\n`; });
        html += '</tr>\n';
    });
    html += '</tbody>\n</table>';

    return html;
}

function convertAllMdTables(content) {
    const lines = content.split('\n');
    let result = [];
    let i = 0;
    let tablesFixed = 0;

    while (i < lines.length) {
        const line = lines[i].trim();
        const nextLine = lines[i + 1]?.trim();

        // Detect markdown table start: line with | and next line is separator |---|
        if (line.includes('|') && nextLine && /^\|[\s\-\|:]+\|$/.test(nextLine)) {
            // Collect all table lines
            let tableLines = [lines[i]];
            let j = i + 1;
            while (j < lines.length && lines[j].trim().includes('|')) {
                tableLines.push(lines[j]);
                j++;
            }

            // Convert to HTML
            const htmlTable = mdTableToHtml(tableLines.join('\n'));
            result.push(htmlTable);
            tablesFixed++;
            i = j;
        } else {
            result.push(lines[i]);
            i++;
        }
    }

    return { content: result.join('\n'), tablesFixed };
}

const { data } = await s.from('posts').select('id,title,content').order('created_at', { ascending: true });

let totalFixed = 0;
let postsFixed = 0;

for (const p of data) {
    if (!p.content) continue;

    const { content: newContent, tablesFixed } = convertAllMdTables(p.content);

    if (tablesFixed > 0) {
        postsFixed++;
        totalFixed += tablesFixed;
        console.log(`${postsFixed}. ✅ ${p.title} — ${tablesFixed} bảng`);

        if (process.argv.includes('--apply')) {
            const { error } = await s.from('posts').update({
                content: newContent,
                updated_at: new Date().toISOString()
            }).eq('id', p.id);
            if (error) console.log(`   ⚠️ Error: ${error.message}`);
        }
    }
}

console.log(`\n=== Tổng: ${postsFixed} bài, ${totalFixed} bảng cần fix ===`);
if (!process.argv.includes('--apply')) {
    console.log('⚠️ PREVIEW - chạy với --apply để thực thi');
}
