import { createClient } from '@supabase/supabase-js';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('slug,featured_image,content').eq('is_published', false);
let ok = 0, fail = 0;

for (const p of data) {
    const r1 = await fetch(p.featured_image, { method: 'HEAD', redirect: 'follow' });
    if (r1.status !== 200) { console.log('FAIL FEATURED', p.slug, r1.status); fail++; } else { ok++; }

    const imgs = [...p.content.matchAll(/unsplash\.com\/photo-([^?"]+)/g)];
    for (const m of imgs) {
        const url = 'https://images.unsplash.com/photo-' + m[1] + '?w=200';
        const r2 = await fetch(url, { method: 'HEAD', redirect: 'follow' });
        if (r2.status !== 200) { console.log('FAIL CONTENT', p.slug, r2.status); fail++; } else { ok++; }
    }
}
console.log('Result: ' + ok + ' OK, ' + fail + ' FAIL');
