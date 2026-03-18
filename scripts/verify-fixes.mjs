import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts')
    .select('id, title, content, meta_description')
    .eq('is_published', true);

const hasMeta = posts.filter(p => p.meta_description && p.meta_description.length >= 10);
const noMeta = posts.filter(p => !p.meta_description || p.meta_description.length < 10);

function countExtLinks(html) {
    const h = html || '';
    const htmlL = (h.match(/href=["'](https?:\/\/[^"']+)["']/gi) || []).filter(l => !l.includes('cachdautu.com')).length;
    const mdL = (h.match(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g) || []).filter(l => !l.includes('cachdautu.com')).length;
    return htmlL + mdL;
}

const hasExt = posts.filter(p => countExtLinks(p.content) > 0);
const noExt = posts.filter(p => countExtLinks(p.content) === 0);

console.log(`\n✅ VERIFY SAU KHI FIX:`);
console.log(`   Meta description: ${hasMeta.length}/${posts.length} có (trước: 1/105)`);
console.log(`   Meta thiếu: ${noMeta.length} (trước: 104)`);
console.log(`   External links: ${hasExt.length}/${posts.length} có (trước: 66/105)`);
console.log(`   External thiếu: ${noExt.length} (trước: 39)`);
