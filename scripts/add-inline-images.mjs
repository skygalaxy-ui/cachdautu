import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Map keywords to relevant Unsplash images
const imageMap = [
    { match: ['chứng khoán', 'cổ phiếu', 'vn30', 'margin', 'phái sinh'], img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format', alt: 'Thị trường chứng khoán' },
    { match: ['etf', 'quỹ mở', 'quỹ etf'], img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format', alt: 'Đầu tư quỹ ETF' },
    { match: ['crypto', 'bitcoin', 'blockchain', 'altcoin', 'stablecoin'], img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format', alt: 'Cryptocurrency' },
    { match: ['forex', 'ngoại hối', 'tỷ giá'], img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format', alt: 'Giao dịch Forex' },
    { match: ['vàng', 'sjc', 'gold'], img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&auto=format', alt: 'Đầu tư vàng' },
    { match: ['bất động sản', 'bđs', 'reits', 'nhà đất'], img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format', alt: 'Bất động sản' },
    { match: ['tài chính cá nhân', 'tiết kiệm', 'chi tiêu', 'ngân sách'], img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format', alt: 'Quản lý tài chính cá nhân' },
    { match: ['lãi kép', 'compound', 'tăng trưởng'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format', alt: 'Sức mạnh lãi kép' },
    { match: ['trái phiếu', 'ytm', 'coupon', 'bond'], img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format', alt: 'Đầu tư trái phiếu' },
    { match: ['warren buffett', 'kinh nghiệm', 'nhà đầu tư'], img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format', alt: 'Nhà đầu tư thành công' },
    { match: ['thuế', 'luật', 'pháp lý'], img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format', alt: 'Luật thuế đầu tư' },
    { match: ['tâm lý', 'cảm xúc', 'fomo', 'đám đông'], img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format', alt: 'Tâm lý đầu tư' },
    { match: ['app', 'ứng dụng', 'công nghệ', 'online'], img: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&auto=format', alt: 'Ứng dụng đầu tư' },
    { match: ['dca', 'phân bổ', 'danh mục', 'portfolio'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format', alt: 'Phân bổ danh mục đầu tư' },
    { match: ['fire', 'tự do tài chính', 'nghỉ hưu'], img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&auto=format', alt: 'Tự do tài chính' },
];

const defaultImg = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format';
const defaultAlt = 'Kiến thức đầu tư tài chính';

function findImage(title) {
    const t = title.toLowerCase();
    for (const entry of imageMap) {
        if (entry.match.some(kw => t.includes(kw))) {
            return { src: entry.img, alt: entry.alt };
        }
    }
    return { src: defaultImg, alt: defaultAlt };
}

function insertImageAfterFirstH2(content, imgSrc, imgAlt) {
    // Insert image after the first </h2>...<p>...</p> block
    const firstH2End = content.indexOf('</h2>');
    if (firstH2End === -1) return content;

    // Find end of first paragraph after h2
    const afterH2 = content.substring(firstH2End);
    const firstPEnd = afterH2.indexOf('</p>');
    if (firstPEnd === -1) return content;

    const insertPos = firstH2End + firstPEnd + 4;
    const imgTag = `\n\n<img src="${imgSrc}" alt="${imgAlt}" style="width:100%;border-radius:12px;margin:24px 0" />\n`;

    return content.substring(0, insertPos) + imgTag + content.substring(insertPos);
}

const { data } = await s.from('posts').select('id,title,content');
let fixed = 0;

for (const p of data) {
    if (!p.content || p.content.includes('<img')) continue;

    const { src, alt } = findImage(p.title);
    const newContent = insertImageAfterFirstH2(p.content, src, alt);

    if (newContent !== p.content) {
        if (process.argv.includes('--apply')) {
            const { error } = await s.from('posts').update({ content: newContent, updated_at: new Date().toISOString() }).eq('id', p.id);
            if (error) { console.log(`❌ ${p.title}: ${error.message}`); continue; }
        }
        fixed++;
        console.log(`✅ ${p.title}`);
    }
}

console.log(`\n🎉 ${fixed} bài đã thêm ảnh minh họa`);
if (!process.argv.includes('--apply')) console.log('⚠️ PREVIEW - chạy --apply để thực thi');
