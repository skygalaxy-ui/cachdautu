import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Valid Unsplash image replacements by topic
const fixes = [
    { match: 'mua vàng ở đâu', image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&auto=format' }, // gold bars
    { match: 'đầu tư chủ động vs bị động', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format' }, // stocks
    { match: 'cổ phiếu cổ tức', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format' }, // trading
    { match: 'tâm lý đám đông', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format' }, // crowd
    { match: 'mở tài khoản chứng khoán', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&auto=format' }, // phone app
    { match: 'altcoin là gì', image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format' }, // crypto
    { match: 'thị trường quốc tế', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format' }, // global
];

const { data: posts } = await s.from('posts').select('id,title,featured_image');
let fixed = 0;

for (const p of posts) {
    const t = p.title?.toLowerCase() || '';
    for (const fix of fixes) {
        if (t.includes(fix.match)) {
            const { error } = await s.from('posts').update({
                featured_image: fix.image,
                updated_at: new Date().toISOString()
            }).eq('id', p.id);
            if (error) {
                console.log(`❌ ${p.title}: ${error.message}`);
            } else {
                fixed++;
                console.log(`✅ ${p.title}`);
            }
            break;
        }
    }
}

console.log(`\n🎉 Fixed ${fixed} broken images!`);
