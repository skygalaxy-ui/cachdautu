import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const VANG_ID = '49a89c1c-90dc-4d14-9f06-6efc97aec499';
const FOREX_ID = 'd0457801-0e3c-402b-9846-2a5926fb64c6';

const { data: posts } = await s.from('posts').select('id,title,slug,category_id');

const moves = [];

for (const p of posts) {
    const t = p.title?.toLowerCase() || '';
    const sl = p.slug?.toLowerCase() || '';

    // Move to Vàng category
    if (p.category_id !== VANG_ID) {
        if (
            (t.includes('vàng') && !t.includes('vàng bất biến') && !t.includes('quy tắc vàng') && !t.includes('giai đoạn vàng')) ||
            (sl.includes('vang') && !sl.includes('vang-bat-bien') && sl.includes('dau-tu-vang') || sl.includes('gia-vang') || sl.includes('mua-vang')) ||
            (t.includes('sjc') || t.includes('nhẫn trơn'))
        ) {
            // Only if primarily about gold
            if (t.includes('xu hướng giá vàng') || t.includes('đầu tư vàng') || t.includes('mua vàng') ||
                t.includes('vàng vs usd') || t.includes('giá vàng')) {
                moves.push({ id: p.id, title: p.title, from: p.category_id, to: VANG_ID, toCat: 'Vàng' });
            }
        }
    }

    // Move to Forex category
    if (p.category_id !== FOREX_ID) {
        if (t.includes('forex') && !t.includes('forex vs crypto')) {
            moves.push({ id: p.id, title: p.title, from: p.category_id, to: FOREX_ID, toCat: 'Forex' });
        }
    }
}

console.log(`=== ${moves.length} bài cần chuyển category ===\n`);
moves.forEach((m, i) => {
    console.log(`${i + 1}. → ${m.toCat}: ${m.title}`);
});

if (process.argv.includes('--apply')) {
    for (const m of moves) {
        const { error } = await s.from('posts').update({ category_id: m.to, updated_at: new Date().toISOString() }).eq('id', m.id);
        if (error) console.log(`  ⚠️ Error: ${error.message}`);
    }
    console.log(`\n✅ Đã chuyển ${moves.length} bài!`);
} else {
    console.log('\n⚠️ PREVIEW - chạy với --apply để thực thi');
}
