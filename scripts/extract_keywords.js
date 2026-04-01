const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchAllKeywords() {
    console.log("Fetching keywords from Supabase...");
    const { data: posts, error } = await supabase
        .from('posts')
        .select('focus_keyword, tags')
        .limit(1000);

    if (error) {
        console.error("Lỗi:", error);
        return;
    }

    let allKeywords = new Set();
    let allTags = new Set();
    
    posts.forEach(post => {
        if (post.focus_keyword) {
            post.focus_keyword.split(',').forEach(k => {
                if (k.trim()) allKeywords.add(k.trim().toLowerCase());
            });
        }
        if (post.tags) {
            let tagArray = Array.isArray(post.tags) ? post.tags : post.tags.toString().split(',');
            tagArray.forEach(t => {
                if (t.trim()) allTags.add(t.trim().toLowerCase());
            });
        }
    });

    const kwArray = Array.from(allKeywords);
    const tagsArray = Array.from(allTags);

    const result = {
        total_posts_analyzed: posts.length,
        keyword_count: kwArray.length,
        unique_keywords: kwArray,
        tags_count: tagsArray.length,
        unique_tags: tagsArray
    };

    fs.writeFileSync('keywords_audit.json', JSON.stringify(result, null, 2), 'utf-8');
    console.log(`Saved ${kwArray.length} keywords and ${tagsArray.length} tags to keywords_audit.json`);
}

fetchAllKeywords();
