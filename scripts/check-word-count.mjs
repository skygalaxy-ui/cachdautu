import { createClient } from '@supabase/supabase-js';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data, error } = await s.from('posts').select('id, slug, title, content').eq('is_published', true).order('created_at', { ascending: true });

if (error) { console.error('❌ Error:', error.message); process.exit(1); }

console.log('Tổng:', data.length, 'bài\n');

const results = data.map(p => {
    const text = (p.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text.split(' ').filter(w => w.length > 0).length;
    return { ...p, wordCount: words };
});

results.forEach(p => {
    const status = p.wordCount < 900 ? '⚠️' : '✅';
    console.log(`${status} ${String(p.wordCount).padStart(5)} từ | ${p.slug}`);
});

const shorts = results.filter(p => p.wordCount < 900);
console.log(`\n📊 Bài dưới 900 từ: ${shorts.length}/${data.length}`);
console.log('\n📋 Danh sách bài cần nâng cấp:');
shorts.forEach((p, i) => {
    console.log(`${i + 1}. [${p.wordCount} từ] ${p.slug} — ${p.title}`);
});
