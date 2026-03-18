import { createClient } from '@supabase/supabase-js';

// Service role key to bypass RLS
const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

// =========================================================
// BATCH CONFIG - Change these for each batch
// =========================================================
const BATCH_NUMBER = parseInt(process.argv[2] || '1');
const BATCH_SIZE = 10;

// Get posts that need inline images (0 inline images currently)
const { data: allPosts } = await s.from('posts')
    .select('id, title, slug, content, categories(slug, name)')
    .eq('is_published', true)
    .order('scheduled_at', { ascending: false, nullsFirst: false });

// Filter posts with no inline images
const postsNeedingImages = allPosts.filter(p => {
    const htmlImgs = (p.content || '').match(/<img[^>]+/g) || [];
    const mdImgs = (p.content || '').match(/!\[.*?\]\(.*?\)/g) || [];
    return (htmlImgs.length + mdImgs.length) === 0;
});

console.log(`\nTotal posts needing inline images: ${postsNeedingImages.length}`);
console.log(`Processing Batch ${BATCH_NUMBER} (posts ${(BATCH_NUMBER-1)*BATCH_SIZE + 1} - ${BATCH_NUMBER*BATCH_SIZE})\n`);

const batchPosts = postsNeedingImages.slice((BATCH_NUMBER - 1) * BATCH_SIZE, BATCH_NUMBER * BATCH_SIZE);

if (batchPosts.length === 0) {
    console.log('No posts in this batch. All done!');
    process.exit(0);
}

// Curated image library - categorized, each URL unique per post
// Using different Unsplash photos per topic area
const INLINE_IMAGE_BANK = {
    'chung-khoan': [
        ['photo-1590283603385-17ffb3a7f29f', 'Biểu đồ phân tích cổ phiếu trên màn hình giao dịch'],
        ['photo-1535320903710-d993d3d77d29', 'Thị trường chứng khoán tăng trưởng'],
        ['photo-1569025690938-a00729c9e1f3', 'Dữ liệu giao dịch chứng khoán'],
        ['photo-1504607798333-52a30db54a5d', 'Biểu đồ tài chính chi tiết'],
        ['photo-1560520653-9e0e4c89eb11', 'Ứng dụng giao dịch chứng khoán trên điện thoại'],
        ['photo-1633158829585-23ba8f7c8caf', 'Nhà đầu tư theo dõi thị trường'],
        ['photo-1614028674026-a65e31bfd27c', 'Biểu đồ nến phân tích kỹ thuật'],
        ['photo-1518186285589-2f7649de83e0', 'Laptop phân tích tài chính'],
        ['photo-1444653614773-995cb1ef9efa', 'Phân tích dữ liệu đầu tư'],
        ['photo-1516321318423-f06f85e504b3', 'Màn hình giao dịch công nghệ'],
        ['photo-1551288049-bbbda536339a', 'Quản lý danh mục đầu tư'],
        ['photo-1580519542036-c47de6196ba5', 'Xây dựng danh mục cổ phiếu'],
    ],
    'kien-thuc-dau-tu': [
        ['photo-1460925895917-afdab827c52f', 'Dashboard phân tích đầu tư'],
        ['photo-1543286386-2e659306cd6c', 'Biểu đồ tăng trưởng đầu tư'],
        ['photo-1579532537598-459ecdaf39cc', 'Tăng trưởng tài sản qua thời gian'],
        ['photo-1628348068343-eb9c7bd51d6e', 'Tiết kiệm và đầu tư sinh lời'],
        ['photo-1553729459-afe8f2e2ed65', 'Biểu đồ phân tích hiệu suất'],
        ['photo-1462206092226-f46025ffe607', 'La bàn định hướng đầu tư'],
        ['photo-1563013544-824ae1b704d3', 'Quản lý tài chính thông minh'],
        ['photo-1567427018141-0584cfcbf1b8', 'Không gian làm việc nhà đầu tư'],
        ['photo-1504868584819-f8e8b4b6d7e3', 'Giá trị thời gian của tiền'],
        ['photo-1517245386747-e95b4b3c9781', 'Ý tưởng đầu tư sáng tạo'],
        ['photo-1554768804-50c1e2b50a6e', 'Lập kế hoạch đầu tư dài hạn'],
        ['photo-1571771894821-ce9b6c11b08e', 'Đầu tư qua ứng dụng di động'],
    ],
    'tai-chinh-ca-nhan': [
        ['photo-1579621970795-87facc2f976d', 'Tiết kiệm tài chính cá nhân'],
        ['photo-1556742049-0cfed4f6a45d', 'Quản lý thẻ tín dụng thông minh'],
        ['photo-1574607383476-f517f260d30b', 'Tiết kiệm cho gia đình'],
        ['photo-1556742111-a301076d9d18', 'Quản lý chi tiêu hàng ngày'],
        ['photo-1544377193-33dcf4d68fb5', 'Lối sống tối giản tài chính'],
        ['photo-1521737711867-e3b97375f902', 'Kế hoạch tài chính gia đình'],
        ['photo-1556742393-d75f468bfcb0', 'Hoạch định tài chính cặp đôi'],
        ['photo-1523287562758-66c7fc58967f', 'Trao đổi về tài chính'],
    ],
    'vang': [
        ['photo-1610375461246-83df859d849d', 'Vàng miếng đầu tư'],
        ['photo-1624365168968-f283d506c6b6', 'Đồng vàng đầu tư'],
        ['photo-1589656966895-2f33e7653819', 'Vàng cận cảnh'],
        ['photo-1580974852861-c381510bc98a', 'Thỏi vàng nguyên chất'],
        ['photo-1573408301185-9146fe634ad0', 'Trang sức vàng đầu tư'],
        ['photo-1542222024-c39e2281f121', 'Kho báu vàng'],
    ],
    'bat-dong-san': [
        ['photo-1560184897-ae75f418493e', 'Ngôi nhà hiện đại đầu tư'],
        ['photo-1564013799919-ab600027ffc6', 'Bất động sản cao cấp'],
        ['photo-1582407947304-fd86f028f716', 'Chung cư đầu tư'],
        ['photo-1600596542815-ffad4c1539a9', 'Nhà đất sang trọng'],
        ['photo-1600585154340-be6161a56a0c', 'Nội thất bất động sản'],
    ],
    'kinh-nghiem': [
        ['photo-1551836022-deb4988cc6c0', 'Tư vấn kinh nghiệm đầu tư'],
        ['photo-1522202176988-66273c2fd55f', 'Học tập và nghiên cứu đầu tư'],
        ['photo-1434030216411-0b793f4b4173', 'Ghi chép kinh nghiệm đầu tư'],
        ['photo-1513128034602-7814ccadce8e', 'Suy nghĩ chiến lược đầu tư'],
        ['photo-1488998427799-e3362cec87c3', 'Giáo dục tài chính'],
    ],
    'khoi-nghiep': [
        ['photo-1559136555-9303baea8ebd', 'Đội nhóm startup'],
        ['photo-1519389950473-47ba0277781c', 'Công nghệ khởi nghiệp'],
        ['photo-1557804506-669a67965ba0', 'Cuộc họp gọi vốn'],
        ['photo-1553877522-43269d4ea984', 'Bảng trắng lập kế hoạch'],
    ],
    'quy-dau-tu': [
        ['photo-1460925895917-afdab827c52f', 'Dashboard quỹ đầu tư'],
        ['photo-1551288049-bebda4e38f71', 'Phân tích quỹ đầu tư'],
        ['photo-1543286386-2e659306cd6c', 'Tăng trưởng NAV quỹ'],
        ['photo-1553729459-afe8f2e2ed65', 'So sánh hiệu suất quỹ'],
    ],
};

// Global counter to prevent reuse
let globalImgIndex = BATCH_NUMBER * 30; // Offset per batch

function getInlineImages(catSlug, count = 2) {
    const pool = INLINE_IMAGE_BANK[catSlug] || INLINE_IMAGE_BANK['kien-thuc-dau-tu'];
    const result = [];
    for (let i = 0; i < count; i++) {
        const idx = (globalImgIndex++) % pool.length;
        const [photoId, alt] = pool[idx];
        result.push({
            url: `https://images.unsplash.com/${photoId}?w=800&h=450&fit=crop&q=80`,
            alt
        });
    }
    return result;
}

function addImagesToContent(content, images) {
    if (!content) return content;
    
    const isHTML = /<[a-z][\s\S]*>/i.test(content);
    
    if (isHTML) {
        // Find all H2 headings
        const h2Matches = [...content.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
        
        if (h2Matches.length >= 2) {
            // Insert images after the 2nd and 4th H2 (or last available)
            const insertPoints = [
                Math.min(1, h2Matches.length - 1), // After 2nd H2
                Math.min(3, h2Matches.length - 1), // After 4th H2
            ];
            
            let result = content;
            let offset = 0;
            
            for (let i = 0; i < Math.min(images.length, insertPoints.length); i++) {
                const h2 = h2Matches[insertPoints[i]];
                // Find the end of the next paragraph after this H2
                const h2End = h2.index + h2[0].length;
                const nextParagraph = content.indexOf('</p>', h2End);
                
                if (nextParagraph !== -1) {
                    const insertPos = nextParagraph + 4 + offset;
                    const imgTag = `\n<figure class="my-8"><img src="${images[i].url}" alt="${images[i].alt}" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">${images[i].alt}</figcaption></figure>\n`;
                    result = result.slice(0, insertPos) + imgTag + result.slice(insertPos);
                    offset += imgTag.length;
                }
            }
            return result;
        }
    } else {
        // Markdown content
        const lines = content.split('\n');
        const h2Indices = lines.reduce((acc, line, idx) => {
            if (line.startsWith('## ')) acc.push(idx);
            return acc;
        }, []);
        
        if (h2Indices.length >= 2) {
            const insertAfter = [
                Math.min(1, h2Indices.length - 1),
                Math.min(3, h2Indices.length - 1),
            ];
            
            let inserted = 0;
            for (let i = insertAfter.length - 1; i >= 0; i--) {
                if (inserted >= images.length) break;
                const idx = h2Indices[insertAfter[i]];
                // Find next empty line after H2
                let insertIdx = idx + 2;
                while (insertIdx < lines.length && lines[insertIdx].trim() !== '') insertIdx++;
                
                const img = images[inserted];
                const imgMd = `\n![${img.alt}](${img.url})\n*${img.alt}*\n`;
                lines.splice(insertIdx, 0, imgMd);
                inserted++;
            }
            return lines.join('\n');
        }
    }
    
    return content; // No change if can't find good insert points
}

// Process batch
let successCount = 0;
let skipCount = 0;
let errorCount = 0;

for (const post of batchPosts) {
    const catSlug = post.categories?.slug || 'kien-thuc-dau-tu';
    const images = getInlineImages(catSlug, 2);
    
    const newContent = addImagesToContent(post.content, images);
    
    if (newContent === post.content) {
        console.log(`⏭️  SKIP: ${post.title.substring(0, 55)} (no good insert points)`);
        skipCount++;
        continue;
    }
    
    const { error } = await s.from('posts')
        .update({ content: newContent })
        .eq('id', post.id);
    
    if (error) {
        console.log(`❌ ERROR: ${post.title.substring(0, 55)} - ${error.message}`);
        errorCount++;
    } else {
        console.log(`✅ [${successCount + 1}] ${post.title.substring(0, 55)} (+${images.length} images)`);
        successCount++;
    }
}

console.log(`\n===== BATCH ${BATCH_NUMBER} DONE =====`);
console.log(`✅ Updated: ${successCount}`);
console.log(`⏭️  Skipped: ${skipCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`\nRemaining posts needing images: ${postsNeedingImages.length - BATCH_NUMBER * BATCH_SIZE}`);
console.log(`Next: node add-inline-images.mjs ${BATCH_NUMBER + 1}`);
