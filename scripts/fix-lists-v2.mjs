import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

function listToProse(listHtml) {
    const items = [];
    const liRegex = /<li>([\s\S]*?)<\/li>/g;
    let m;
    while ((m = liRegex.exec(listHtml)) !== null) {
        let text = m[1].trim();
        text = text.replace(/<\/?p>/g, '');
        // Convert <strong>Title</strong> Description → "Title — description"
        text = text.replace(/<strong>(.*?)<\/strong>\s*:?\s*/g, (_, title) => title + ': ');
        text = text.trim();
        if (text && !text.endsWith('.') && !text.endsWith('!') && !text.endsWith('?')) text += '.';
        if (text) items.push(text);
    }
    if (items.length === 0) return listHtml;

    // Group 2-3 items per paragraph for natural flow
    const paragraphs = [];
    for (let i = 0; i < items.length; i += 2) {
        const group = items.slice(i, i + 2);
        paragraphs.push('<p>' + group.join(' ') + '</p>');
    }
    return paragraphs.join('\n');
}

const { data: posts } = await s.from('posts').select('id, slug, content').eq('is_published', true);
let updated = 0;

for (const p of posts || []) {
    if (!p.content) continue;

    const liCount = (p.content.match(/<li>/g) || []).length;
    if (liCount < 6) continue; // Only process posts with 6+ list items

    let newContent = p.content;
    let convertedCount = 0;

    // Convert ALL lists with 4+ items to prose, keep only lists with ≤3 items
    newContent = newContent.replace(/<(ul|ol)>([\s\S]*?)<\/\1>/g, (match, tag, inner) => {
        const itemCount = (inner.match(/<li>/g) || []).length;
        if (itemCount <= 3) return match; // Keep short lists
        convertedCount++;
        return listToProse(match);
    });

    if (convertedCount > 0 && newContent !== p.content) {
        const newLi = (newContent.match(/<li>/g) || []).length;
        const { error } = await s.from('posts').update({ content: newContent }).eq('id', p.id);
        if (error) {
            console.log(`❌ ${p.slug}: ${error.message}`);
        } else {
            console.log(`✅ ${p.slug}: ${liCount}→${newLi} items (converted ${convertedCount} lists)`);
            updated++;
        }
    }
}

console.log(`\n🎉 Converted lists in ${updated} posts`);
