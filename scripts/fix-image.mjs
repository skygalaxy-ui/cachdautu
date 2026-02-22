import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function fix() {
    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth:', authError.message); return; }

    const { error } = await supabase
        .from('posts')
        .update({ featured_image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&q=80' })
        .eq('slug', 'reits-la-gi-dau-tu-bat-dong-san-von-nho');

    console.log(error ? '❌ ' + error.message : '✅ Đã sửa ảnh REITs');
}
fix();
