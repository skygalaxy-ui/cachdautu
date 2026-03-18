import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

const { data: posts } = await s.from('posts')
    .select('id, title, content, categories(slug)')
    .eq('is_published', true);

// Find the 11 posts with ZERO images
const noImg = posts.filter(p => {
    const c = p.content || '';
    return !c.includes('<img') && !c.includes('![') && !c.includes('<figure');
});

console.log(`Processing ${noImg.length} posts without images...\n`);

const IMAGES = [
    ['photo-1460925895917-afdab827c52f', 'Dashboard phân tích đầu tư'],
    ['photo-1543286386-2e659306cd6c', 'Biểu đồ tăng trưởng'],
    ['photo-1579532537598-459ecdaf39cc', 'Tăng trưởng tài sản'],
    ['photo-1628348068343-eb9c7bd51d6e', 'Tiết kiệm và đầu tư'],
    ['photo-1553729459-afe8f2e2ed65', 'Phân tích hiệu suất'],
    ['photo-1462206092226-f46025ffe607', 'Định hướng đầu tư'],
    ['photo-1563013544-824ae1b704d3', 'Quản lý tài chính'],
    ['photo-1567427018141-0584cfcbf1b8', 'Không gian đầu tư'],
    ['photo-1590283603385-17ffb3a7f29f', 'Phân tích thị trường'],
    ['photo-1504607798333-52a30db54a5d', 'Biểu đồ tài chính'],
    ['photo-1560520653-9e0e4c89eb11', 'Ứng dụng giao dịch'],
    ['photo-1633158829585-23ba8f7c8caf', 'Theo dõi danh mục'],
    ['photo-1614028674026-a65e31bfd27c', 'Biểu đồ nến'],
    ['photo-1518186285589-2f7649de83e0', 'Phân tích trên laptop'],
    ['photo-1444653614773-995cb1ef9efa', 'Nghiên cứu dữ liệu'],
    ['photo-1516321318423-f06f85e504b3', 'Công nghệ tài chính'],
    ['photo-1610375461246-83df859d849d', 'Vàng miếng đầu tư'],
    ['photo-1624365168968-f283d506c6b6', 'Đồng vàng đầu tư'],
    ['photo-1560184897-ae75f418493e', 'Bất động sản đầu tư'],
    ['photo-1574607383476-f517f260d30b', 'Tiết kiệm cho tương lai'],
    ['photo-1556742049-0cfed4f6a45d', 'Thẻ tín dụng thông minh'],
    ['photo-1559136555-9303baea8ebd', 'Đội nhóm startup'],
];

let imgIdx = 100; // unique offset
let ok = 0;

for (const post of noImg) {
    const content = post.content || '';
    if (content.length < 100) {
        console.log(`⏭️  SKIP (too short): ${post.title.substring(0, 50)}`);
        continue;
    }
    
    // Strategy: insert at 1/3 and 2/3 position using paragraph/newline breaks
    const isHTML = content.includes('</p>') || content.includes('</h');
    let newContent = content;
    let inserted = 0;
    
    const breakTag = isHTML ? '</p>' : '\n\n';
    const breakLen = isHTML ? 4 : 2;
    
    const third = Math.floor(content.length / 3);
    const twoThirds = Math.floor(content.length * 2 / 3);
    
    // Find nearest break near 1/3
    let pos1 = content.indexOf(breakTag, third);
    if (pos1 === -1) pos1 = content.indexOf(breakTag, Math.floor(third / 2));
    
    if (pos1 !== -1) {
        const actualPos1 = pos1 + breakLen;
        const [pid1, alt1] = IMAGES[(imgIdx++) % IMAGES.length];
        const tag1 = isHTML
            ? `\n<figure class="my-8"><img src="https://images.unsplash.com/${pid1}?w=800&h=450&fit=crop&q=80" alt="${alt1}" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">${alt1}</figcaption></figure>\n`
            : `\n\n![${alt1}](https://images.unsplash.com/${pid1}?w=800&h=450&fit=crop&q=80)\n*${alt1}*\n\n`;
        
        newContent = newContent.slice(0, actualPos1) + tag1 + newContent.slice(actualPos1);
        inserted++;
        
        // Find break near 2/3 (adjusted for insertion)
        let pos2 = newContent.indexOf(breakTag, twoThirds + tag1.length);
        if (pos2 !== -1 && pos2 > actualPos1 + tag1.length + 100) {
            const actualPos2 = pos2 + breakLen;
            const [pid2, alt2] = IMAGES[(imgIdx++) % IMAGES.length];
            const tag2 = isHTML
                ? `\n<figure class="my-8"><img src="https://images.unsplash.com/${pid2}?w=800&h=450&fit=crop&q=80" alt="${alt2}" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">${alt2}</figcaption></figure>\n`
                : `\n\n![${alt2}](https://images.unsplash.com/${pid2}?w=800&h=450&fit=crop&q=80)\n*${alt2}*\n\n`;
            
            newContent = newContent.slice(0, actualPos2) + tag2 + newContent.slice(actualPos2);
            inserted++;
        }
    }
    
    if (inserted === 0) {
        console.log(`⏭️  SKIP: ${post.title.substring(0, 50)}`);
        continue;
    }
    
    const { error } = await s.from('posts').update({ content: newContent }).eq('id', post.id);
    if (error) {
        console.log(`❌ ${post.title.substring(0, 50)}: ${error.message}`);
    } else {
        console.log(`✅ ${post.title.substring(0, 50)} (+${inserted} imgs)`);
        ok++;
    }
}

console.log(`\n=== ALL DONE: ${ok}/${noImg.length} updated ===`);
