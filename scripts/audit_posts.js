const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkPosts() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('title, slug, content, meta_title, is_published, created_at')
        .order('created_at', { ascending: false })
        .limit(10);

    if (error) {
        console.error("Lỗi kết nối cơ sở dữ liệu:", error);
        return;
    }

    const results = [];
    
    for (const post of posts) {
        // Đếm từ
        const textOnly = post.content ? post.content.replace(/<[^>]*>/g, ' ') : '';
        const wordCount = textOnly.trim() ? textOnly.trim().split(/\s+/).length : 0;
        
        // Đếm hình ảnh
        const imgMatches = post.content ? post.content.match(/<img[^>]+>/g) : [];
        const imgCount = imgMatches ? imgMatches.length : 0;
        
        // Đánh giá tiêu đề
        let titleEval = "Cần tối ưu";
        if (post.title.length >= 40 && post.title.length <= 70) titleEval = "Khá chuẩn";
        if (post.title.includes('? ') || post.title.includes(': ') || /[0-9]/.test(post.title)) {
            titleEval = "Tốt (Có thu hút)";
        }
        
        results.push({
            title: post.title,
            length: post.title.length,
            title_evaluation: titleEval,
            status: post.is_published ? 'Đã xuất bản' : 'Bản nháp',
            word_count: wordCount,
            image_count: imgCount
        });
    }
    
    fs.writeFileSync('audit_results.json', JSON.stringify(results, null, 2), 'utf-8');
    console.log("Saved to audit_results.json");
}

checkPosts();
