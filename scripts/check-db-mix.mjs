/**
 * Kiểm tra chi tiết nội dung 2 DB — phát hiện bài bị nhầm project
 * Chạy: node scripts/check-db-mix.mjs
 */
import { createClient } from '@supabase/supabase-js';

const DB1 = {
    name: 'cachdautu (pbxpjmklrkkwatdvacap)',
    url: 'https://pbxpjmklrkkwatdvacap.supabase.co',
    key: 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD',
    auth: { email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' },
};

const DB2 = {
    name: 'sanuytin (ecipdcojedkbrlggaqja)',
    url: 'https://ecipdcojedkbrlggaqja.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY',
    auth: null,
};

// Từ khóa để phân loại
const FOREX_KEYWORDS = ['forex', 'pip', 'spread', 'scalping', 'metatrader', 'mt4', 'mt5', 'leverage forex', 'lot size', 'price action trading', 'breakout trading', 'sàn forex', 'copy trade', 'plus500'];
const INVEST_KEYWORDS = ['etf', 'dca', 'bình quân giá', 'cổ tức', 'vn30', 'chứng khoán việt', 'trái phiếu', 'bất động sản', 'vàng sjc', 'quỹ mở', 'tiết kiệm', 'lãi kép'];

function classifyPost(title, content) {
    const text = ((title || '') + ' ' + (content || '').substring(0, 500)).toLowerCase();
    let forexScore = 0, investScore = 0;
    for (const kw of FOREX_KEYWORDS) if (text.includes(kw)) forexScore++;
    for (const kw of INVEST_KEYWORDS) if (text.includes(kw)) investScore++;
    if (forexScore > investScore) return 'FOREX';
    if (investScore > forexScore) return 'INVEST';
    return 'UNKNOWN';
}

async function checkDB(db) {
    const supabase = createClient(db.url, db.key);
    if (db.auth) {
        const { error } = await supabase.auth.signInWithPassword(db.auth);
        if (error) { console.log(`  ⚠️ Auth error: ${error.message}`); return null; }
    }

    const { data: posts, error, count } = await supabase
        .from('posts')
        .select('id, title, slug, content, is_published, categories(name, slug)', { count: 'exact' });

    if (error) { console.log(`  ❌ Error: ${error.message}`); return null; }

    const { data: cats } = await supabase.from('categories').select('name, slug');

    return { posts: posts || [], categories: cats || [], total: count };
}

async function main() {
    console.log('🔍 KIỂM TRA CHI TIẾT 2 DATABASE\n');

    // Check DB1 (cachdautu)
    console.log('═'.repeat(70));
    console.log(`📦 ${DB1.name}`);
    console.log('═'.repeat(70));
    const db1 = await checkDB(DB1);
    if (!db1) return;

    console.log(`  Tổng: ${db1.total} posts`);
    console.log(`  Categories: ${db1.categories.map(c => c.name).join(', ')}`);

    // Phân loại từng bài
    const db1Forex = [], db1Invest = [], db1Unknown = [];
    for (const p of db1.posts) {
        const cls = classifyPost(p.title, p.content);
        if (cls === 'FOREX') db1Forex.push(p);
        else if (cls === 'INVEST') db1Invest.push(p);
        else db1Unknown.push(p);
    }

    console.log(`\n  📊 Phân loại nội dung:`);
    console.log(`    Đầu tư (đúng): ${db1Invest.length} bài`);
    console.log(`    Forex (SAI!):   ${db1Forex.length} bài`);
    console.log(`    Không rõ:       ${db1Unknown.length} bài`);

    if (db1Forex.length > 0) {
        console.log(`\n  🚨 BÀI FOREX BỊ LẪN VÀO CACHDAUTU:`);
        for (const p of db1Forex) {
            console.log(`    ❌ [${p.is_published ? 'PUB' : 'DRAFT'}] "${p.title}" (${p.categories?.name || 'N/A'})`);
        }
    }

    // Check DB2 (sanuytin)
    console.log('\n' + '═'.repeat(70));
    console.log(`📦 ${DB2.name}`);
    console.log('═'.repeat(70));
    const db2 = await checkDB(DB2);
    if (!db2) return;

    console.log(`  Tổng: ${db2.total} posts`);
    console.log(`  Categories: ${db2.categories.map(c => c.name).join(', ')}`);

    const db2Forex = [], db2Invest = [], db2Unknown = [];
    for (const p of db2.posts) {
        const cls = classifyPost(p.title, p.content);
        if (cls === 'FOREX') db2Forex.push(p);
        else if (cls === 'INVEST') db2Invest.push(p);
        else db2Unknown.push(p);
    }

    console.log(`\n  📊 Phân loại nội dung:`);
    console.log(`    Forex (đúng):   ${db2Forex.length} bài`);
    console.log(`    Đầu tư (SAI!):  ${db2Invest.length} bài`);
    console.log(`    Không rõ:       ${db2Unknown.length} bài`);

    if (db2Invest.length > 0) {
        console.log(`\n  🚨 BÀI ĐẦU TƯ BỊ LẪN VÀO SANUYTIN:`);
        for (const p of db2Invest) {
            console.log(`    ❌ [${p.is_published ? 'PUB' : 'DRAFT'}] "${p.title}" (${p.categories?.name || 'N/A'})`);
        }
    }

    // Check trùng lặp
    console.log('\n' + '═'.repeat(70));
    console.log('🔄 KIỂM TRA TRÙNG LẶP GIỮA 2 DB');
    console.log('═'.repeat(70));

    const db1Slugs = new Set(db1.posts.map(p => p.slug));
    const db2Slugs = new Set(db2.posts.map(p => p.slug));
    const duplicates = [...db1Slugs].filter(s => db2Slugs.has(s));

    if (duplicates.length > 0) {
        console.log(`  ⚠️ ${duplicates.length} bài TRÙNG slug giữa 2 DB:`);
        for (const slug of duplicates) {
            const p1 = db1.posts.find(p => p.slug === slug);
            const p2 = db2.posts.find(p => p.slug === slug);
            console.log(`    🔄 "${slug}"`);
            console.log(`       DB1: "${p1?.title}" (${p1?.categories?.name || 'N/A'})`);
            console.log(`       DB2: "${p2?.title}" (${p2?.categories?.name || 'N/A'})`);
        }
    } else {
        console.log('  ✅ Không có bài trùng lặp');
    }

    // Summary
    console.log('\n' + '═'.repeat(70));
    console.log('📋 TÓM TẮT');
    console.log('═'.repeat(70));
    console.log(`  cachdautu: ${db1.total} posts (${db1Invest.length} đầu tư, ${db1Forex.length} forex, ${db1Unknown.length} khác)`);
    console.log(`  sanuytin:  ${db2.total} posts (${db2Forex.length} forex, ${db2Invest.length} đầu tư, ${db2Unknown.length} khác)`);
    console.log(`  Trùng lặp: ${duplicates.length} bài`);

    if (db1Forex.length > 0 || db2Invest.length > 0) {
        console.log('\n  ⚠️ CÓ BÀI BỊ NHẦM DB! Cần xử lý.');
    } else {
        console.log('\n  ✅ Không phát hiện bài bị nhầm DB.');
    }
}

main().catch(console.error);
