import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,content').eq('slug', 'top-5-quy-etf-tot-nhat-viet-nam-2026').single();

// Find markdown tables
const lines = data.content.split('\n');
let inTable = false;
let tableCount = 0;
lines.forEach((line, i) => {
    if (line.trim().startsWith('|')) {
        if (!inTable) { tableCount++; console.log(`\n--- TABLE ${tableCount} at line ${i} ---`); }
        inTable = true;
        console.log(`  ${i}: ${line.trim()}`);
    } else if (inTable) {
        console.log(`--- END TABLE ---`);
        inTable = false;
    }
});
if (inTable) console.log(`--- END TABLE ---`);

console.log(`\nPost ID: ${data.id}`);
console.log(`Total tables found: ${tableCount}`);
console.log(`Content length: ${data.content.length} chars`);
