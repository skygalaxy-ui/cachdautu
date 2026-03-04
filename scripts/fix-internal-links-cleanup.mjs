import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const replacements = [
    { from: /\/blog\/crypto\//g, to: '/blog/kien-thuc-dau-tu/' },
    { from: /\/blog\/forex\//g, to: '/blog/kien-thuc-dau-tu/' },
    { from: /đầu tư crypto/gi, to: 'đầu tư chứng khoán' },
    { from: /thị trường forex/gi, to: 'thị trường tài chính' },
    { from: /bitcoin/gi, to: 'vàng' },
    { from: /crypto/gi, to: 'tài chính' }
];

async function scanAndFix() {
    const { data: posts, error } = await s.from('posts').select('id, title, content');
    if (error) return console.error(error);

    let fixedCount = 0;
    for (const post of posts) {
        if (!post.content) continue;

        let newContent = post.content;
        let modified = false;

        replacements.forEach(r => {
            if (r.from.test(newContent)) {
                newContent = newContent.replace(r.from, r.to);
                modified = true;
            }
        });

        if (modified) {
            const { error: updateError } = await s.from('posts')
                .update({ content: newContent })
                .eq('id', post.id);

            if (!updateError) {
                console.log(`✅ Fixed: ${post.title}`);
                fixedCount++;
            }
        }
    }
    console.log(`\n--- ĐÃ QUÉT XONG: Sửa ${fixedCount} bài có chứa từ khóa nhạy cảm/link hỏng ---`);
}

scanAndFix();
