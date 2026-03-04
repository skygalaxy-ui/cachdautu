import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

async function findPillars() {
    const { data: posts } = await s.from('posts')
        .select('title, slug')
        .ilike('title', '%đầu tư là gì%');

    console.log("Found:", posts);
}

findPillars();
