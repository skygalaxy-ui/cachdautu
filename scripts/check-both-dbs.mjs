/**
 * Kiểm tra nội dung cả 2 Supabase projects
 * Chạy: node scripts/check-both-dbs.mjs
 */
import { createClient } from '@supabase/supabase-js';

const projects = [
    {
        name: 'Project 1: pbxpjmklrkkwatdvacap',
        url: 'https://pbxpjmklrkkwatdvacap.supabase.co',
        key: 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD',
        auth: { email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' },
    },
    {
        name: 'Project 2: ecipdcojedkbrlggaqja (sanuytin?)',
        url: 'https://ecipdcojedkbrlggaqja.supabase.co',
        key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY',
        auth: null, // dùng service key, không cần auth
    },
];

for (const proj of projects) {
    console.log('═'.repeat(60));
    console.log(`📦 ${proj.name}`);
    console.log(`   URL: ${proj.url}`);
    console.log('═'.repeat(60));

    const supabase = createClient(proj.url, proj.key);

    if (proj.auth) {
        const { error: authErr } = await supabase.auth.signInWithPassword(proj.auth);
        if (authErr) console.log(`  ⚠️ Auth: ${authErr.message}`);
        else console.log('  ✅ Đăng nhập thành công');
    }

    // Check posts
    const { data: posts, error: postErr, count } = await supabase
        .from('posts').select('id, title, slug, is_published', { count: 'exact' }).limit(10);

    if (postErr) {
        console.log(`  ❌ Lỗi đọc posts: ${postErr.message}`);
    } else {
        console.log(`\n  📝 Posts: ${count} tổng`);
        const published = posts?.filter(p => p.is_published) || [];
        console.log(`     Published: ${published.length}/${posts?.length || 0} (trong 10 mẫu)`);
        console.log('     Mẫu 5 bài đầu:');
        (posts || []).slice(0, 5).forEach(p => {
            console.log(`       - [${p.is_published ? 'PUB' : 'DRAFT'}] ${p.title}`);
        });
    }

    // Check categories
    const { data: cats, error: catErr } = await supabase
        .from('categories').select('id, name, slug');

    if (catErr) {
        console.log(`\n  ❌ Lỗi đọc categories: ${catErr.message}`);
    } else {
        console.log(`\n  📂 Categories: ${cats?.length || 0}`);
        (cats || []).forEach(c => console.log(`       - ${c.name} (${c.slug})`));
    }

    console.log('\n');
}
