import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Fix: Remove broken markdown "Bài viết liên quan" sections from all posts
// These were added as markdown but content is rendered as HTML, causing raw text display

async function fix() {
    console.log('🔧 Fixing broken "Bài viết liên quan" sections...\n');

    const { data: posts } = await s.from('posts').select('id, slug, content')
        .eq('is_published', true);

    let fixed = 0;
    for (const post of posts || []) {
        if (!post.content) continue;

        // Check for markdown-style related links section
        if (post.content.includes('## Bài viết liên quan')) {
            // Remove the entire markdown section (## Bài viết liên quan + list items)
            let newContent = post.content.replace(/\n*## Bài viết liên quan[\s\S]*$/, '').trim();

            const { error } = await s.from('posts').update({ content: newContent }).eq('id', post.id);
            if (error) {
                console.log(`❌ ${post.slug}: ${error.message}`);
            } else {
                console.log(`✅ ${post.slug} — removed broken markdown links`);
                fixed++;
            }
        }
    }

    console.log(`\n🎉 Fixed ${fixed} posts. Related posts are already rendered by the page component.`);
}

fix();
