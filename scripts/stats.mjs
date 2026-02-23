import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: all } = await s.from('posts').select('id, slug, title, is_published, scheduled_at, categories(name, slug)');
const published = all.filter(p => p.is_published);
const scheduled = all.filter(p => !p.is_published && p.scheduled_at);
const draft = all.filter(p => !p.is_published && !p.scheduled_at);

console.log('📊 TỔNG: ' + all.length + ' bài\n');

console.log('✅ ĐÃ ĐĂNG: ' + published.length + ' bài');
const byCat = {};
for (const p of published) { const c = p.categories?.name || 'Chưa phân loại'; byCat[c] = (byCat[c] || 0) + 1; }
for (const [c, n] of Object.entries(byCat).sort((a, b) => b[1] - a[1])) console.log('   ' + c + ': ' + n);

if (scheduled.length) {
    console.log('\n📅 ĐÃ LÊN LỊCH: ' + scheduled.length + ' bài');
    for (const p of scheduled) console.log('   ' + p.scheduled_at + ' | ' + p.title);
}
if (draft.length) {
    console.log('\n📝 NHÁP: ' + draft.length + ' bài');
    for (const p of draft) console.log('   ' + p.title);
}
