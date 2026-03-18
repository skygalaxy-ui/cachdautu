import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

const BATCH = parseInt(process.argv[2] || '1');
const BATCH_SIZE = 10;

const { data: allPosts } = await s.from('posts')
    .select('id, title, slug, content, categories(slug)')
    .eq('is_published', true);

// Find posts without inline images
const needsImages = allPosts.filter(p => {
    const c = p.content || '';
    return !c.includes('<img') && !c.includes('<figure') && !c.includes('![');
});

console.log(`Total remaining: ${needsImages.length}`);
console.log(`Batch ${BATCH}: posts ${(BATCH-1)*BATCH_SIZE+1}-${BATCH*BATCH_SIZE}\n`);

const batch = needsImages.slice((BATCH-1)*BATCH_SIZE, BATCH*BATCH_SIZE);
if (!batch.length) { console.log('All done!'); process.exit(0); }

// Image bank - unique per offset
const IMAGES = [
    ['photo-1460925895917-afdab827c52f', 'Dashboard phân tích đầu tư'],
    ['photo-1543286386-2e659306cd6c', 'Biểu đồ tăng trưởng đầu tư'],
    ['photo-1579532537598-459ecdaf39cc', 'Tăng trưởng tài sản qua thời gian'],
    ['photo-1628348068343-eb9c7bd51d6e', 'Tiết kiệm và đầu tư'],
    ['photo-1553729459-afe8f2e2ed65', 'Biểu đồ phân tích hiệu suất'],
    ['photo-1462206092226-f46025ffe607', 'La bàn định hướng đầu tư'],
    ['photo-1563013544-824ae1b704d3', 'Quản lý tài chính thông minh'],
    ['photo-1567427018141-0584cfcbf1b8', 'Không gian làm việc nhà đầu tư'],
    ['photo-1590283603385-17ffb3a7f29f', 'Biểu đồ phân tích thị trường'],
    ['photo-1504607798333-52a30db54a5d', 'Biểu đồ tài chính chi tiết'],
    ['photo-1560520653-9e0e4c89eb11', 'Ứng dụng giao dịch trên điện thoại'],
    ['photo-1633158829585-23ba8f7c8caf', 'Nhà đầu tư theo dõi danh mục'],
    ['photo-1614028674026-a65e31bfd27c', 'Phân tích biểu đồ nến'],
    ['photo-1518186285589-2f7649de83e0', 'Phân tích tài chính trên laptop'],
    ['photo-1444653614773-995cb1ef9efa', 'Nghiên cứu dữ liệu đầu tư'],
    ['photo-1516321318423-f06f85e504b3', 'Công nghệ tài chính hiện đại'],
    ['photo-1579621970795-87facc2f976d', 'Tiết kiệm tài chính cá nhân'],
    ['photo-1556742049-0cfed4f6a45d', 'Thẻ tín dụng thông minh'],
    ['photo-1574607383476-f517f260d30b', 'Tiết kiệm cho tương lai'],
    ['photo-1610375461246-83df859d849d', 'Vàng miếng đầu tư'],
    ['photo-1624365168968-f283d506c6b6', 'Đồng vàng đầu tư'],
    ['photo-1560184897-ae75f418493e', 'Bất động sản đầu tư'],
    ['photo-1564013799919-ab600027ffc6', 'Nhà đất cao cấp'],
    ['photo-1559136555-9303baea8ebd', 'Đội nhóm startup'],
    ['photo-1519389950473-47ba0277781c', 'Công nghệ đổi mới'],
    ['photo-1551836022-deb4988cc6c0', 'Tư vấn đầu tư chuyên nghiệp'],
    ['photo-1522202176988-66273c2fd55f', 'Nghiên cứu đầu tư chi tiết'],
    ['photo-1434030216411-0b793f4b4173', 'Ghi chép chiến lược'],
    ['photo-1513128034602-7814ccadce8e', 'Suy nghĩ về chiến lược'],
    ['photo-1557804506-669a67965ba0', 'Cuộc họp gọi vốn startup'],
];

let imgIdx = (BATCH - 1) * BATCH_SIZE * 2; // 2 images per post, offset per batch
let ok = 0, skip = 0, err = 0;

for (const post of batch) {
    const content = post.content || '';
    if (!content || content.length < 200) {
        console.log(`⏭️  SKIP (too short): ${post.title.substring(0, 50)}`);
        skip++;
        continue;
    }
    
    // Strategy: find ANY heading (h2, h3, ##, ###) or paragraph break points
    let newContent = content;
    let inserted = 0;
    
    // Try HTML headings first
    const headingMatches = [...content.matchAll(/<h[23][^>]*>.*?<\/h[23]>/gi)];
    
    if (headingMatches.length >= 2) {
        // Insert after 2nd and 4th heading's following content block
        const insertAfterIndices = [1, Math.min(3, headingMatches.length - 1)];
        let offset = 0;
        
        for (const hIdx of insertAfterIndices) {
            if (inserted >= 2) break;
            const heading = headingMatches[hIdx];
            const searchStart = heading.index + heading[0].length;
            
            // Find next block-level closing tag after heading
            const nextBreak = content.indexOf('</p>', searchStart);
            const nextH = content.indexOf('<h', searchStart + 10);
            
            let insertPos;
            if (nextBreak !== -1 && (nextH === -1 || nextBreak < nextH)) {
                insertPos = nextBreak + 4;
            } else if (nextH !== -1) {
                insertPos = nextH;
            } else {
                continue;
            }
            
            const [photoId, alt] = IMAGES[(imgIdx++) % IMAGES.length];
            const imgTag = `\n<figure class="my-8"><img src="https://images.unsplash.com/${photoId}?w=800&h=450&fit=crop&q=80" alt="${alt}" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">${alt}</figcaption></figure>\n`;
            
            const actualPos = insertPos + offset;
            newContent = newContent.slice(0, actualPos) + imgTag + newContent.slice(actualPos);
            offset += imgTag.length;
            inserted++;
        }
    }
    
    // Try markdown headings if HTML didn't work
    if (inserted === 0) {
        const lines = content.split('\n');
        const headingLines = [];
        lines.forEach((line, idx) => {
            if (line.match(/^#{2,3}\s/)) headingLines.push(idx);
        });
        
        if (headingLines.length >= 2) {
            const insertPoints = [headingLines[1], headingLines[Math.min(3, headingLines.length - 1)]];
            
            for (let i = insertPoints.length - 1; i >= 0; i--) {
                if (inserted >= 2) break;
                const idx = insertPoints[i];
                const [photoId, alt] = IMAGES[(imgIdx++) % IMAGES.length];
                const imgMd = `\n![${alt}](https://images.unsplash.com/${photoId}?w=800&h=450&fit=crop&q=80)\n*${alt}*\n`;
                lines.splice(idx, 0, imgMd);
                inserted++;
            }
            newContent = lines.join('\n');
        }
    }
    
    // Last resort: insert at roughly 1/3 and 2/3 of content
    if (inserted === 0 && content.length > 500) {
        const third = Math.floor(content.length / 3);
        const twoThird = Math.floor(content.length * 2 / 3);
        
        // Find nearest paragraph break near 1/3
        let pos1 = content.indexOf('</p>', third);
        let pos2 = content.indexOf('</p>', twoThird);
        
        if (pos1 === -1) pos1 = content.indexOf('\n\n', third);
        if (pos2 === -1) pos2 = content.indexOf('\n\n', twoThird);
        
        if (pos1 !== -1) {
            const isHtml = content.includes('</p>');
            const breakLen = isHtml ? 4 : 2;
            pos1 += breakLen;
            
            const [photoId1, alt1] = IMAGES[(imgIdx++) % IMAGES.length];
            const img1 = isHtml
                ? `\n<figure class="my-8"><img src="https://images.unsplash.com/${photoId1}?w=800&h=450&fit=crop&q=80" alt="${alt1}" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">${alt1}</figcaption></figure>\n`
                : `\n![${alt1}](https://images.unsplash.com/${photoId1}?w=800&h=450&fit=crop&q=80)\n*${alt1}*\n`;
            
            newContent = newContent.slice(0, pos1) + img1 + newContent.slice(pos1);
            inserted++;
            
            if (pos2 !== -1 && pos2 > pos1) {
                pos2 += breakLen + img1.length;
                const [photoId2, alt2] = IMAGES[(imgIdx++) % IMAGES.length];
                const img2 = isHtml
                    ? `\n<figure class="my-8"><img src="https://images.unsplash.com/${photoId2}?w=800&h=450&fit=crop&q=80" alt="${alt2}" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">${alt2}</figcaption></figure>\n`
                    : `\n![${alt2}](https://images.unsplash.com/${photoId2}?w=800&h=450&fit=crop&q=80)\n*${alt2}*\n`;
                newContent = newContent.slice(0, pos2) + img2 + newContent.slice(pos2);
                inserted++;
            }
        }
    }
    
    if (inserted === 0) {
        console.log(`⏭️  SKIP (no insert points): ${post.title.substring(0, 50)}`);
        skip++;
        continue;
    }
    
    const { error } = await s.from('posts').update({ content: newContent }).eq('id', post.id);
    if (error) {
        console.log(`❌ ERROR: ${post.title.substring(0, 50)} - ${error.message}`);
        err++;
    } else {
        console.log(`✅ ${post.title.substring(0, 50)} (+${inserted} imgs)`);
        ok++;
    }
}

console.log(`\n=== BATCH ${BATCH} DONE ===`);
console.log(`✅ ${ok} | ⏭️ ${skip} | ❌ ${err}`);
console.log(`Remaining: ~${needsImages.length - BATCH * BATCH_SIZE}`);
console.log(`Next: node fix-remaining-images.mjs ${BATCH + 1}`);
