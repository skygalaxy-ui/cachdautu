import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const FOREX_ID = 'd0457801-0e3c-402b-9846-2a5926fb64c6';
const VANG_ID = '49a89c1c-90dc-4d14-9f06-6efc97aec499';
const now = new Date().toISOString();

// 1. Publish all Forex + Vàng articles
console.log('=== 1. Publishing Forex + Vàng articles ===\n');

const { data: forex } = await s.from('posts').select('id,title').eq('category_id', FOREX_ID);
const { data: vang } = await s.from('posts').select('id,title').eq('category_id', VANG_ID);

const toPublish = [...(forex || []), ...(vang || [])];
for (const p of toPublish) {
    const { error } = await s.from('posts').update({
        is_published: true,
        scheduled_at: now,
        updated_at: now
    }).eq('id', p.id);
    if (error) {
        console.log(`❌ ${p.title}: ${error.message}`);
    } else {
        console.log(`✅ ${p.title}`);
    }
}

// 2. Move 3 misplaced vàng articles
console.log('\n=== 2. Chuyển 3 bài vàng sai category ===\n');

const { data: allPosts } = await s.from('posts').select('id,title,category_id');
const vangMoves = allPosts.filter(p => {
    if (p.category_id === VANG_ID) return false;
    const t = p.title?.toLowerCase() || '';
    return (
        t.includes('xu hướng giá vàng') ||
        t.includes('đầu tư vàng kênh trú ẩn') ||
        t === 'vàng vs usd: kênh nào phòng hộ rủi ro tốt hơn?'
    );
});

for (const p of vangMoves) {
    const { error } = await s.from('posts').update({
        category_id: VANG_ID,
        updated_at: now
    }).eq('id', p.id);
    if (error) {
        console.log(`❌ ${p.title}: ${error.message}`);
    } else {
        console.log(`✅ → Vàng: ${p.title}`);
    }
}

console.log(`\n🎉 Done! Published ${toPublish.length} bài, chuyển ${vangMoves.length} bài sang Vàng`);
