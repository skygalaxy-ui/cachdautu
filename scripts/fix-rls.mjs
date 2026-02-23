import { createClient } from '@supabase/supabase-js';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Check current RLS policies via SQL
const { data: policies, error: polErr } = await s.rpc('exec_sql', {
    query: `SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
            FROM pg_policies WHERE tablename = 'posts'`
});

if (polErr) {
    console.log('Cannot read policies via RPC:', polErr.message);

    // Try alternative: update RLS to allow public read
    // First, let's check if we can use the management API
    console.log('\nTrying to fix via SQL...');

    const { error: sqlErr } = await s.rpc('exec_sql', {
        query: `
            DROP POLICY IF EXISTS "Allow public read published posts" ON posts;
            CREATE POLICY "Allow public read published posts" ON posts
                FOR SELECT USING (is_published = true);
        `
    });

    if (sqlErr) {
        console.log('SQL RPC failed:', sqlErr.message);
        console.log('\n⚠️  Cần fix RLS thủ công trên Supabase Dashboard:');
        console.log('1. Vào https://supabase.com/dashboard → Project → Authentication → Policies');
        console.log('2. Bảng "posts" → Thêm policy mới:');
        console.log('   - Name: "Allow public read published posts"');
        console.log('   - For: SELECT');
        console.log('   - Using: (is_published = true)');
        console.log('   - Target roles: public (anon)');
    } else {
        console.log('✅ RLS policy updated!');
    }
} else {
    console.log('Current policies:', JSON.stringify(policies, null, 2));
}
