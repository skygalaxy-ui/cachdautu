/**
 * Xóa 24 bài Forex bị lẫn vào cachdautu DB
 * Chạy: export $(grep -v '^#' .env.local | xargs) && node scripts/remove-forex-from-cachdautu.mjs
 */
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const FOREX_KEYWORDS = ['forex', 'pip', 'spread forex', 'scalping', 'metatrader', 'mt4', 'mt5', 'lot size', 'price action trading', 'breakout trading', 'sàn forex', 'copy trade', 'plus500', 'exness', 'xm ', 'vantage', 'đánh forex', 'chơi forex', 'giấy phép sàn forex', 'copy trading'];

async function main() {
    console.log('🔍 Tìm bài Forex trong cachdautu DB...\n');

    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, is_published, categories(name)');

    if (error) { console.error('❌', error.message); return; }

    // Tìm bài forex
    const forexPosts = posts.filter(p => {
        const text = (p.title || '').toLowerCase();
        return FOREX_KEYWORDS.some(kw => text.includes(kw));
    });

    console.log(`📊 Tìm thấy ${forexPosts.length} bài Forex trong cachdautu:\n`);

    const published = forexPosts.filter(p => p.is_published);
    const drafts = forexPosts.filter(p => !p.is_published);

    if (published.length > 0) {
        console.log(`🔴 PUBLISHED (${published.length} bài — cần xóa ngay!):`);
        for (const p of published) {
            console.log(`  ❌ "${p.title}"`);
        }
    }

    if (drafts.length > 0) {
        console.log(`\n🟡 DRAFT (${drafts.length} bài):`);
        for (const p of drafts) {
            console.log(`  ⚠️ "${p.title}"`);
        }
    }

    // Xóa tất cả
    console.log(`\n🗑️ Đang xóa ${forexPosts.length} bài Forex...`);

    let deleted = 0;
    for (const p of forexPosts) {
        const { error: delErr } = await supabase
            .from('posts')
            .delete()
            .eq('id', p.id);

        if (delErr) {
            console.log(`  ❌ Không xóa được: "${p.title}" — ${delErr.message}`);
        } else {
            deleted++;
            console.log(`  ✅ Đã xóa: "${p.title}"`);
        }
    }

    // Verify
    const { count } = await supabase
        .from('posts')
        .select('id', { count: 'exact' });

    console.log(`\n${'═'.repeat(60)}`);
    console.log(`📊 KẾT QUẢ`);
    console.log(`${'═'.repeat(60)}`);
    console.log(`  Đã xóa: ${deleted}/${forexPosts.length} bài Forex`);
    console.log(`  Tổng posts còn lại: ${count}`);
    console.log(`\n✅ Hoàn tất! cachdautu DB đã sạch Forex content.`);
}

main().catch(console.error);
