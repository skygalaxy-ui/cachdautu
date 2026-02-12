import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function check() {
    console.log('=== CHECK 1: Anon key (no auth) - giống blog page ===');
    const { data: posts1, count, error: e1 } = await supabase
        .from('posts')
        .select('id, title, slug, is_published, category_id, scheduled_at', { count: 'exact' })
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    console.log('Error:', e1?.message || 'none');
    console.log('Count:', count);
    console.log('Posts:', posts1?.length);
    posts1?.forEach(p => console.log(`  - [${p.is_published ? '✅' : '❌'}] ${p.slug} (cat: ${p.category_id})`));

    console.log('\n=== CHECK 2: Anon key (no auth) - ALL posts ===');
    const { data: posts2, error: e2 } = await supabase
        .from('posts')
        .select('id, title, slug, is_published, category_id');

    console.log('Error:', e2?.message || 'none');
    console.log('Total posts:', posts2?.length);
    posts2?.forEach(p => console.log(`  - [${p.is_published ? '✅' : '❌'}] ${p.slug}`));

    console.log('\n=== CHECK 3: With admin auth ===');
    await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });

    const { data: posts3, error: e3 } = await supabase
        .from('posts')
        .select('id, title, slug, is_published')
        .eq('is_published', true);

    console.log('Error:', e3?.message || 'none');
    console.log('Posts with auth:', posts3?.length);
    posts3?.forEach(p => console.log(`  - ✅ ${p.slug}`));
}

check();
