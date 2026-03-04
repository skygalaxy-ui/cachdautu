// scripts/debug-db.mjs - Debug: xem RLS trả về bao nhiêu bài
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://njchsjhdkcfaouqwyutc.supabase.co',
    'sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF'
);

async function main() {
    // Test 1: Count all posts (no filter)
    const { count: countAll } = await supabase
        .from('posts')
        .select('id', { count: 'exact', head: true });
    console.log(`📊 Query không filter: ${countAll} bài`);

    // Test 2: Only is_published = true
    const { count: countPub } = await supabase
        .from('posts')
        .select('id', { count: 'exact', head: true })
        .eq('is_published', true);
    console.log(`📊 is_published=true: ${countPub} bài`);

    // Test 3: With scheduled_at filter
    const now = new Date().toISOString();
    const { count: countSched } = await supabase
        .from('posts')
        .select('id', { count: 'exact', head: true })
        .not('scheduled_at', 'is', null)
        .lte('scheduled_at', now);
    console.log(`📊 scheduled_at <= now: ${countSched} bài`);

    // Test 4: Combined (like publishedFilter)
    const { data: combined, count: countCombined } = await supabase
        .from('posts')
        .select('id, title, featured_image', { count: 'exact' })
        .or(`is_published.eq.true,and(scheduled_at.not.is.null,scheduled_at.lte.${now})`)
        .order('created_at', { ascending: false })
        .limit(200);
    console.log(`📊 publishedFilter: ${countCombined} bài`);

    // Test 5: Check featured_image status
    if (combined) {
        const noImage = combined.filter(p => !p.featured_image || p.featured_image.trim() === '');
        const hasImage = combined.filter(p => p.featured_image && p.featured_image.trim() !== '');
        console.log(`\n📸 Có ảnh: ${hasImage.length} | Thiếu ảnh: ${noImage.length}`);

        if (noImage.length > 0) {
            console.log('\n❌ Bài viết thiếu ảnh:');
            noImage.forEach((p, i) => console.log(`  ${i + 1}. ${p.title}`));
        }
    }

    // Test 6: Try direct REST API
    console.log('\n🔗 Thử REST API trực tiếp...');
    try {
        const res = await fetch(
            `https://njchsjhdkcfaouqwyutc.supabase.co/rest/v1/posts?select=id&limit=1&apikey=sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF`,
            { headers: { 'Prefer': 'count=exact' } }
        );
        const contentRange = res.headers.get('content-range');
        console.log(`📊 REST API content-range: ${contentRange}`);
        console.log(`📊 REST API status: ${res.status}`);
    } catch (e) {
        console.error('REST error:', e.message);
    }
}

main().catch(console.error);
