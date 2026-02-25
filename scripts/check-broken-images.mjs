import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,title,featured_image');
let broken = 0;

for (const p of data) {
    if (!p.featured_image) {
        broken++;
        console.log('❌ NO IMAGE:', p.title);
        continue;
    }
    try {
        const r = await fetch(p.featured_image, { method: 'HEAD' });
        if (!r.ok) {
            broken++;
            console.log(`❌ ${r.status}: ${p.title}`);
            console.log(`   → ${p.featured_image.substring(0, 80)}`);
        }
    } catch (e) {
        broken++;
        console.log(`❌ FETCH ERR: ${p.title}`);
    }
}

console.log(`\nTotal broken: ${broken}/${data.length}`);
