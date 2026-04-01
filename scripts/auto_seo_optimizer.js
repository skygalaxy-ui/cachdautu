const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

function getGenericFinanceImages(keyword) {
    const defaultImages = [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1565514020179-026b92b64700?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=800&auto=format&fit=crop"  
    ];
    // Return a random image, but make it somewhat deterministic based on title length so it stays constant if re-run
    const index = (keyword ? keyword.length : Math.floor(Math.random() * 10)) % defaultImages.length;
    return defaultImages[index];
}

async function run() {
    console.log("Đang phân tích 133 bài viết đã xuất bản từ Database...");
    const { data: posts, error } = await supabase.from('posts').select('id, title, slug, content, focus_keyword, categories(slug)').eq('is_published', true);
    if(error) return console.error(error);

    // 1. Tạo bản đồ Link (Ma trận Keyword -> Link)
    const linkMap = [];
    posts.forEach(p => {
        if(p.focus_keyword) {
            const kws = p.focus_keyword.split(',');
            kws.forEach(kw => {
                const cleanKw = kw.trim();
                // Chỉ làm Internal Link cho các từ khoá có ý nghĩa (>= 5 ký tự)
                if(cleanKw.length >= 5) {
                    const catSlug = p.categories && p.categories.slug ? p.categories.slug : 'uncategorized';
                    linkMap.push({
                        keyword: cleanKw,
                        post_id: p.id,
                        url: `/blog/${catSlug}/${p.slug}`
                    });
                }
            });
        }
    });
    
    // Sắp xếp từ khoá dài lên trước để ưu tiên (Cụm từ dài match trước bảo vệ cụm từ ngắn)
    linkMap.sort((a,b) => b.keyword.length - a.keyword.length);

    let updatedCount = 0;
    console.log(`Tìm thấy ${linkMap.length} từ khóa chính. Bắt đầu bơm Ảnh và chèn Mạng nhện Internal Links...`);

    for(let i=0; i<posts.length; i++) {
        let post = posts[i];
        if (!post.content) continue;
        
        let newContent = post.content;
        let modified = false;

        // == BƯỚC 1: BƠM ẢNH MINH HỌA VÀO CÁC BÀI CHƯA CÓ ==
        const imgMatches = newContent.match(/<img[^>]+>/g);
        if(!imgMatches || imgMatches.length === 0) {
            const paragraphs = newContent.split('</p>');
            let finalContent = "";
            let imgInjected = 0;
            
            for(let j=0; j<paragraphs.length; j++) {
                finalContent += paragraphs[j];
                // Thêm lại thẻ </p> bị mất do split
                if(paragraphs[j].trim() !== "" && !paragraphs[j].endsWith('</p>')) finalContent += "</p>";
                
                // Rải đều mỗi 4-5 đoạn văn sẽ chèn 1 cái ảnh, tối đa 3 ảnh/bài
                if (j > 0 && j % 5 === 0 && imgInjected < 3 && j < paragraphs.length - 2) {
                    // Trộn một chút mix mốc ảnh để ảnh ko giống hệt nhau
                    const imgUrl = getGenericFinanceImages(post.title + imgInjected.toString());
                    finalContent += `\n<figure class="my-8"><img src="${imgUrl}" alt="${post.title} - Ảnh minh họa ${imgInjected+1}" class="w-full h-auto rounded-xl shadow-lg border border-gray-100 object-cover max-h-[450px]" /><figcaption class="text-center text-sm text-gray-500 mt-3 italic">${post.title} (Nguồn: Unsplash)</figcaption></figure>\n`;
                    imgInjected++;
                    modified = true;
                }
            }
            newContent = finalContent;
        }

        // == BƯỚC 2: DỆT MẠNG LƯỚI INTERNAL LINKS ==
        let linkInjected = 0;
        // Trộn ngẫu nhiên linkMap cho mỗi bài để nó không toàn link tới các bài giống hệt nhau (lên đỉnh mảng)
        const shuffledLinks = [...linkMap].sort(() => 0.5 - Math.random());
        
        for(const link of linkMap) { 
            // KHỐNG CHẾ: tối đa 5 links/bài tránh spam
            if(linkInjected >= 5) break;
            
            // Không tự link chính mình
            if(link.post_id === post.id) continue;
            // Đã chèn link này trong bài rồi thì bỏ qua
            if(newContent.includes(link.url)) continue;
            
            // THUẬT TOÁN AN TOÀN: Chỉ tìm Keyword ĐƯỢC BỌC TRONG '> VÀ <' MÀ THÔI 
            // Điều này đảm bảo tuyệt đối không đâm thủng cấu trúc HTML (src, alt, class)
            // Ví dụ: "<p>Tìm hiểu sâu về cách đầu tư cổ phiếu nhé</p>"
            const regex = new RegExp(`(>[^<]*?)(${link.keyword})([^>]*?<)`, 'i');
            
            if(regex.test(newContent)) {
                newContent = newContent.replace(regex, `$1<a href="${link.url}" class="text-blue-600 font-semibold hover:underline" title="Đọc thêm về $2">$2</a>$3`);
                linkInjected++;
                modified = true;
            }
        }

        if(modified) {
            // Đẩy lên Database
            const { error: updateError } = await supabase.from('posts').update({ content: newContent }).eq('id', post.id);
            if(!updateError) {
                updatedCount++;
                console.log(`[OK] Phẫu thuật tối ưu bài: "${post.title.substring(0, 30)}..." | Đã bơm Links: ${linkInjected}`);
            } else {
                console.log(`[LỖI] Bài ${post.id}:`, updateError.message);
            }
        }
    }
    
    console.log(`\n✅ HOÀN TẤT CHIẾN DỊCH ÉP INDEX! Đã tối ưu sinh thái SEO cho ${updatedCount} bài viết trong Database.`);
}

run();
