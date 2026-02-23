import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// ALL posts (published + scheduled/draft)
const { data: posts } = await s.from('posts').select('id, slug, title, content, is_published, scheduled_at');

const short = [];
for (const p of posts || []) {
    const text = (p.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text.split(' ').filter(w => w.length > 0).length;
    const status = p.is_published ? '✅' : (p.scheduled_at ? '📅' : '📝');
    if (words < 1000) {
        short.push({ slug: p.slug, words, status, id: p.id });
    }
}

short.sort((a, b) => a.words - b.words);
console.log(`📊 Tổng: ${(posts || []).length} bài | Dưới 1000 từ: ${short.length} bài\n`);
console.log('✅=published  📅=scheduled  📝=draft\n');
for (const p of short) {
    console.log(`  ${p.status} ${p.words} từ | ${p.slug}`);
}
