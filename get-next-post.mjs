import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data: posts } = await s.from('posts')
    .select('*, categories(name, slug)')
    .eq('is_published', true)
    .order('scheduled_at', { ascending: false, nullsFirst: false })
    .range(3, 3);

const p = posts[0];
const c = p.content || '';
const wc = c.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;

console.log(`ID: ${p.id}`);
console.log(`Title: ${p.title}`);
console.log(`Slug: ${p.slug}`);
console.log(`Cat: ${p.categories?.slug}`);
console.log(`Words: ${wc} | H2: ${(c.match(/<h2/gi)||[]).length} | Imgs: ${(c.match(/<img/gi)||[]).length}`);
console.log(`Meta: ${p.meta_title || 'NONE'} | Desc: ${p.meta_description ? 'YES' : 'NONE'}`);
console.log(`Tags: ${JSON.stringify(p.tags)}`);

writeFileSync('/tmp/post4.txt', c);
