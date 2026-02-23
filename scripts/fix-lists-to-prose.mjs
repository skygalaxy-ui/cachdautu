import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

/**
 * Convert a <ul>/<ol> block into prose paragraphs.
 * Each <li> becomes a sentence in a paragraph.
 * Groups of 3-4 list items become one paragraph.
 */
function listToProse(listHtml) {
    // Extract list items
    const items = [];
    const liRegex = /<li>([\s\S]*?)<\/li>/g;
    let m;
    while ((m = liRegex.exec(listHtml)) !== null) {
        let text = m[1].trim();
        // Clean up: remove nested tags but keep <a> and <strong>
        // Remove <p> wrappers inside li
        text = text.replace(/<\/?p>/g, '');
        // If item has <strong>Title</strong> Description pattern, format as "Title: description"
        text = text.replace(/<strong>(.*?)<\/strong>\s*/g, (_, title) => {
            return title + ': ';
        });
        // Ensure sentence ends with period
        text = text.trim();
        if (text && !text.endsWith('.') && !text.endsWith('。') && !text.endsWith('!') && !text.endsWith('?')) {
            text += '.';
        }
        if (text) items.push(text);
    }

    if (items.length === 0) return listHtml;

    // Group items into paragraphs (3-4 items each)
    const paragraphs = [];
    for (let i = 0; i < items.length; i += 3) {
        const group = items.slice(i, i + 3);
        paragraphs.push('<p>' + group.join(' ') + '</p>');
    }

    return paragraphs.join('\n');
}

// Process posts with high list ratio (>50%)
const { data: posts } = await s.from('posts').select('id, slug, content').eq('is_published', true);

let updated = 0;
for (const p of posts || []) {
    if (!p.content) continue;

    const liCount = (p.content.match(/<li>/g) || []).length;
    const pCount = (p.content.match(/<p>/g) || []).length;
    const ratio = liCount / (liCount + pCount);

    // Only process posts with >40% list ratio and >10 list items
    if (ratio < 0.4 || liCount < 10) continue;

    let newContent = p.content;

    // Find all ul/ol blocks and convert to prose
    // Keep at most 2 lists per post (for variety), convert the rest
    let listIndex = 0;
    newContent = newContent.replace(/<(ul|ol)>([\s\S]*?)<\/\1>/g, (match, tag, inner) => {
        listIndex++;
        const itemCount = (inner.match(/<li>/g) || []).length;

        // Keep short lists (≤3 items) and every 3rd list for visual variety
        if (itemCount <= 3 || listIndex % 3 === 0) {
            return match; // Keep this list
        }

        // Convert to prose
        return listToProse(match);
    });

    if (newContent !== p.content) {
        const newLi = (newContent.match(/<li>/g) || []).length;
        const newP = (newContent.match(/<p>/g) || []).length;
        const newRatio = (newLi / (newLi + newP) * 100).toFixed(0);

        const { error } = await s.from('posts').update({ content: newContent }).eq('id', p.id);
        if (error) {
            console.log(`❌ ${p.slug}: ${error.message}`);
        } else {
            console.log(`✅ ${p.slug}: ${liCount}→${newLi} items, ratio ${(ratio * 100).toFixed(0)}%→${newRatio}%`);
            updated++;
        }
    }
}

console.log(`\n🎉 Converted lists to prose in ${updated} posts`);
