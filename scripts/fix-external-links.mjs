/**
 * FIX 4: Thêm external links cho 39 bài thiếu
 * Chỉ link tới nguồn uy tín: SSC, HOSE, HNX, SBV, các tổ chức tài chính VN
 * Bước 1: PREVIEW trước
 */
import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Mapping danh mục → external links phù hợp
const categoryLinks = {
    'chung-khoan': [
        { url: 'https://www.ssc.gov.vn', label: 'Ủy ban Chứng khoán Nhà nước (SSC)', keyword: 'chứng khoán' },
        { url: 'https://www.hsx.vn', label: 'Sở Giao dịch Chứng khoán TP.HCM (HOSE)', keyword: 'HOSE' },
        { url: 'https://hnx.vn', label: 'Sở Giao dịch Chứng khoán Hà Nội (HNX)', keyword: 'HNX' },
    ],
    'kien-thuc-dau-tu': [
        { url: 'https://www.ssc.gov.vn', label: 'Ủy ban Chứng khoán Nhà nước (SSC)', keyword: 'đầu tư' },
        { url: 'https://www.sbv.gov.vn', label: 'Ngân hàng Nhà nước Việt Nam (SBV)', keyword: 'tài chính' },
    ],
    'tai-chinh-ca-nhan': [
        { url: 'https://www.sbv.gov.vn', label: 'Ngân hàng Nhà nước Việt Nam (SBV)', keyword: 'tài chính' },
        { url: 'https://www.gso.gov.vn', label: 'Tổng cục Thống kê', keyword: 'kinh tế' },
    ],
    'vang': [
        { url: 'https://www.sjc.com.vn', label: 'Công ty Vàng bạc Đá quý SJC', keyword: 'vàng' },
        { url: 'https://www.sbv.gov.vn', label: 'Ngân hàng Nhà nước Việt Nam (SBV)', keyword: 'giá vàng' },
    ],
    'bat-dong-san': [
        { url: 'https://www.moc.gov.vn', label: 'Bộ Xây dựng', keyword: 'bất động sản' },
        { url: 'https://www.sbv.gov.vn', label: 'Ngân hàng Nhà nước Việt Nam (SBV)', keyword: 'tín dụng' },
    ],
    'trai-phieu': [
        { url: 'https://www.hnx.vn', label: 'Sở Giao dịch Chứng khoán Hà Nội (HNX)', keyword: 'trái phiếu' },
        { url: 'https://www.ssc.gov.vn', label: 'Ủy ban Chứng khoán Nhà nước (SSC)', keyword: 'trái phiếu' },
    ],
    'khoi-nghiep': [
        { url: 'https://www.sbv.gov.vn', label: 'Ngân hàng Nhà nước Việt Nam (SBV)', keyword: 'vốn' },
        { url: 'https://www.ssc.gov.vn', label: 'Ủy ban Chứng khoán Nhà nước (SSC)', keyword: 'đầu tư' },
    ],
    'quy-dau-tu': [
        { url: 'https://www.ssc.gov.vn', label: 'Ủy ban Chứng khoán Nhà nước (SSC)', keyword: 'quỹ đầu tư' },
        { url: 'https://www.hsx.vn', label: 'Sở Giao dịch Chứng khoán TP.HCM (HOSE)', keyword: 'ETF' },
    ],
    'kinh-nghiem': [
        { url: 'https://www.ssc.gov.vn', label: 'Ủy ban Chứng khoán Nhà nước (SSC)', keyword: 'đầu tư' },
        { url: 'https://www.sbv.gov.vn', label: 'Ngân hàng Nhà nước Việt Nam (SBV)', keyword: 'tài chính' },
    ],
};

// Default links nếu không khớp danh mục
const defaultLinks = [
    { url: 'https://www.ssc.gov.vn', label: 'Ủy ban Chứng khoán Nhà nước (SSC)', keyword: 'đầu tư' },
    { url: 'https://www.sbv.gov.vn', label: 'Ngân hàng Nhà nước Việt Nam (SBV)', keyword: 'tài chính' },
];

function countExternalLinks(html) {
    const h = html || '';
    const htmlL = (h.match(/href=["'](https?:\/\/[^"']+)["']/gi) || []).filter(l => !l.includes('cachdautu.com')).length;
    const mdL = (h.match(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g) || []).filter(l => !l.includes('cachdautu.com')).length;
    return htmlL + mdL;
}

// Tạo block "Nguồn tham khảo" để thêm cuối bài
function createReferenceBlock(links) {
    let block = '\n\n---\n\n';
    block += '## Nguồn tham khảo\n\n';
    links.forEach(link => {
        block += `- [${link.label}](${link.url})\n`;
    });
    return block;
}

// Lấy bài thiếu external links
const { data: posts, error } = await s.from('posts')
    .select('id, title, slug, content, categories(name, slug)')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

if (error) { console.error('❌ Lỗi:', error.message); process.exit(1); }

const needFix = posts.filter(p => countExternalLinks(p.content) === 0);

console.log(`\n📊 PREVIEW - Thêm External Links`);
console.log(`   Tổng bài published: ${posts.length}`);
console.log(`   Đã có external links: ${posts.length - needFix.length}`);
console.log(`   Cần thêm: ${needFix.length}`);

const fixes = [];

console.log('\n' + '─'.repeat(80));
console.log('📝 PREVIEW:\n');

for (const post of needFix) {
    const catSlug = post.categories?.slug || '';
    const links = categoryLinks[catSlug] || defaultLinks;
    
    // Chọn 2 links phù hợp nhất (không trùng)
    const selectedLinks = links.slice(0, 2);
    const refBlock = createReferenceBlock(selectedLinks);
    
    fixes.push({
        id: post.id,
        title: post.title,
        catSlug,
        category: post.categories?.name || 'N/A',
        links: selectedLinks,
        newContent: post.content + refBlock,
    });

    if (fixes.length <= 8) {
        console.log(`  ✅ "${post.title}" (${post.categories?.name || 'N/A'})`);
        selectedLinks.forEach(l => console.log(`     → ${l.label}: ${l.url}`));
        console.log();
    }
}

if (fixes.length > 8) console.log(`  ... và ${fixes.length - 8} bài khác\n`);

console.log('─'.repeat(80));
console.log(`\n📊 KẾT QUẢ PREVIEW:`);
console.log(`   ✅ Sẽ thêm external links: ${fixes.length} bài`);
console.log(`   📎 Mỗi bài thêm: 2 links tới nguồn uy tín`);
console.log(`   📐 Format: Block "Nguồn tham khảo" cuối bài`);

// Kiểm tra danh mục
const catCount = {};
fixes.forEach(f => {
    catCount[f.category] = (catCount[f.category] || 0) + 1;
});
console.log(`\n   📂 Phân bổ theo danh mục:`);
Object.entries(catCount).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    console.log(`      ${cat}: ${count} bài`);
});

if (process.argv.includes('--apply')) {
    console.log(`\n🚀 ĐANG ÁP DỤNG...`);
    let ok = 0, fail = 0;
    
    for (const fix of fixes) {
        const { error: updateError } = await s.from('posts')
            .update({ content: fix.newContent })
            .eq('id', fix.id);
        
        if (updateError) {
            console.log(`  ❌ "${fix.title}": ${updateError.message}`);
            fail++;
        } else {
            ok++;
        }
    }
    
    console.log(`\n✅ HOÀN TẤT: ${ok} bài đã thêm external links`);
    if (fail > 0) console.log(`  ❌ ${fail} bài lỗi`);
} else {
    console.log(`\n⚠️  PREVIEW MODE - Chạy lại với --apply để thực thi`);
    console.log(`   node scripts/fix-external-links.mjs --apply`);
}
