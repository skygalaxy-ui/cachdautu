import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: cats } = await s.from('categories').select('*');
const catMap = {};
cats.forEach(c => { catMap[c.id] = c.name + ' (' + c.slug + ')'; });

const { data: posts } = await s.from('posts').select('id,title,slug,category_id,is_published');

// Count by category
const catCount = {};
posts.forEach(p => {
    const name = catMap[p.category_id] || 'UNKNOWN';
    catCount[name] = (catCount[name] || 0) + 1;
});
console.log('=== Phân bổ bài theo category ===');
Object.entries(catCount).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => console.log(`  ${c}: ${n} bài`));

// Find forex-related
console.log('\n=== Bài liên quan FOREX (đang nằm sai category?) ===');
posts.filter(p => p.title?.toLowerCase().includes('forex') || p.slug?.includes('forex'))
    .forEach(p => console.log(`  cat=${catMap[p.category_id]} | ${p.title}`));

// Find gold-related
console.log('\n=== Bài liên quan VÀNG (đang nằm sai category?) ===');
posts.filter(p => p.title?.toLowerCase().includes('vàng') || p.title?.toLowerCase().includes('vang') || p.slug?.includes('vang'))
    .forEach(p => console.log(`  cat=${catMap[p.category_id]} | ${p.title}`));

// Category IDs
console.log('\n=== Category IDs ===');
cats.forEach(c => console.log(`  ${c.slug}: ${c.id}`));
