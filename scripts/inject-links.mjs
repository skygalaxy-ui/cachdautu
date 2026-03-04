/**
 * Auto-inject internal links + external links vào bài viết thiếu
 * Tìm keywords trong content và chèn links đến bài liên quan
 * Chạy: export $(grep -v '^#' .env.local | xargs) && node scripts/inject-links.mjs
 */
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Đăng nhập admin để có quyền ghi
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// External links uy tín theo chủ đề
const EXTERNAL_SOURCES = {
    finance: '<p><em>Nguồn tham khảo: <a href="https://www.ssc.gov.vn" target="_blank" rel="noopener noreferrer">Ủy ban Chứng khoán Nhà nước</a>, <a href="https://www.investopedia.com" target="_blank" rel="noopener noreferrer">Investopedia</a></em></p>',
    gold: '<p><em>Nguồn tham khảo: <a href="https://www.sbv.gov.vn" target="_blank" rel="noopener noreferrer">Ngân hàng Nhà nước Việt Nam</a>, <a href="https://www.kitco.com" target="_blank" rel="noopener noreferrer">Kitco Gold</a></em></p>',
    stock: '<p><em>Nguồn tham khảo: <a href="https://www.hsx.vn" target="_blank" rel="noopener noreferrer">Sở GDCK TP.HCM (HOSE)</a>, <a href="https://www.ssc.gov.vn" target="_blank" rel="noopener noreferrer">UBCKNN</a></em></p>',
    realestate: '<p><em>Nguồn tham khảo: <a href="https://www.mof.gov.vn" target="_blank" rel="noopener noreferrer">Bộ Tài chính</a>, <a href="https://batdongsan.com.vn" target="_blank" rel="noopener noreferrer">Batdongsan.com.vn</a></em></p>',
    startup: '<p><em>Nguồn tham khảo: <a href="https://www.ssc.gov.vn" target="_blank" rel="noopener noreferrer">UBCKNN</a>, <a href="https://www.crunchbase.com" target="_blank" rel="noopener noreferrer">Crunchbase</a></em></p>',
    bond: '<p><em>Nguồn tham khảo: <a href="https://www.hnx.vn" target="_blank" rel="noopener noreferrer">Sở GDCK Hà Nội (HNX)</a>, <a href="https://www.mof.gov.vn" target="_blank" rel="noopener noreferrer">Bộ Tài chính</a></em></p>',
    personal: '<p><em>Nguồn tham khảo: <a href="https://www.sbv.gov.vn" target="_blank" rel="noopener noreferrer">Ngân hàng Nhà nước</a>, <a href="https://www.investopedia.com" target="_blank" rel="noopener noreferrer">Investopedia</a></em></p>',
};

// Category → external source mapping
const CAT_EXT = {
    'chung-khoan': 'stock',
    'vang': 'gold',
    'bat-dong-san': 'realestate',
    'khoi-nghiep': 'startup',
    'trai-phieu': 'bond',
    'tai-chinh-ca-nhan': 'personal',
    'kien-thuc-dau-tu': 'finance',
    'kinh-nghiem': 'finance',
    'quy-dau-tu': 'finance',
    'dau-tu-thay-the': 'finance',
    'canh-bao-lua-dao': 'finance',
};

// Keyword → internal link mapping (keyword phải là text chưa nằm trong link)
const KEYWORD_LINKS = [
    { keywords: ['DCA', 'bình quân giá', 'dollar cost averaging'], href: '/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia', text: null },
    { keywords: ['ETF là gì', 'quỹ ETF'], href: '/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf', text: null },
    { keywords: ['đa dạng hóa', 'đa dạng hoá', 'danh mục đa dạng'], href: '/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026', text: null },
    { keywords: ['quản lý rủi ro', 'cắt lỗ', 'stop loss'], href: '/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua', text: null },
    { keywords: ['tâm lý đám đông', 'FOMO', 'panic sell'], href: '/blog/kinh-nghiem/tam-ly-dam-dong-trong-dau-tu-tranh-bay', text: null },
    { keywords: ['Warren Buffett', 'buffett'], href: '/blog/kinh-nghiem/kinh-nghiem-dau-tu-warren-buffett-10-nguyen-tac', text: null },
    { keywords: ['lừa đảo', 'scam', 'ponzi'], href: '/blog/kien-thuc-dau-tu/7-dau-hieu-nhan-biet-san-dau-tu-lua-dao', text: null },
    { keywords: ['Diamond ETF', 'VNDiamond'], href: '/blog/chung-khoan/diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai', text: null },
    { keywords: ['VNFIN Lead', 'ngành tài chính ngân hàng'], href: '/blog/chung-khoan/vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh', text: null },
    { keywords: ['cổ tức', 'thu nhập thụ động từ cổ phiếu'], href: '/blog/chung-khoan/dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong', text: null },
    { keywords: ['giá vàng', 'vàng tăng hay giảm'], href: '/blog/vang/gia-vang-tang-hay-giam-2026-phan-tich-5-yeu-to', text: null },
    { keywords: ['mua vàng ở đâu', 'mua vàng rẻ'], href: '/blog/vang/mua-vang-o-dau-re-nhat-so-sanh-gia-2026', text: null },
    { keywords: ['đầu tư vàng cho người mới', 'SJC', 'nhẫn trơn', 'vàng tài khoản'], href: '/blog/vang/dau-tu-vang-cho-nguoi-moi-2026-sjc-nhan-tron-vang-tai-khoan', text: null },
    { keywords: ['nên đầu tư gì', 'kênh đầu tư'], href: '/blog/kien-thuc-dau-tu/nen-dau-tu-gi-2026-so-sanh-5-kenh', text: null },
    { keywords: ['mua nhà hay thuê'], href: '/blog/bat-dong-san/mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet', text: null },
    { keywords: ['trái phiếu là gì', 'trái phiếu cho người mới'], href: '/blog/trai-phieu/trai-phieu-la-gi-huong-dan-cho-nguoi-moi', text: null },
    { keywords: ['lãi kép', 'lãi suất kép', 'compound'], href: '/blog/tai-chinh-ca-nhan/lai-kep-la-gi-suc-manh-tang-truong-cap-so-nhan', text: null },
    { keywords: ['crowdfunding', 'gọi vốn cộng đồng'], href: '/blog/khoi-nghiep/crowdfunding-goi-von-cong-dong', text: null },
    { keywords: ['angel investing', 'nhà đầu tư thiên thần'], href: '/blog/khoi-nghiep/angel-investing-la-gi', text: null },
    { keywords: ['phí ETF', 'phí quản lý ETF', 'expense ratio'], href: '/blog/chung-khoan/so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026', text: null },
];

function countInternalLinks(html) {
    return ((html || '').match(/href=["']\/blog\/[^"']+["']/gi) || []).length;
}

function countExternalLinks(html) {
    const allLinks = (html || '').match(/href=["'](https?:\/\/[^"']+)["']/gi) || [];
    return allLinks.filter(l => !l.includes('cachdautu.com')).length;
}

function injectInternalLinks(content, postSlug, maxLinks = 4) {
    let modified = content;
    let injected = 0;

    for (const rule of KEYWORD_LINKS) {
        if (injected >= maxLinks) break;
        // Bỏ qua nếu bài viết đang link đến chính nó
        if (rule.href.includes(postSlug)) continue;
        // Bỏ qua nếu đã có link này trong content
        if (modified.includes(rule.href)) continue;

        for (const keyword of rule.keywords) {
            if (injected >= maxLinks) break;
            // Tìm keyword KHÔNG nằm trong thẻ <a> 
            const escapedKw = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(?<!<a[^>]*>)(?<!<[^>]*)\\b(${escapedKw})\\b(?![^<]*<\\/a>)`, 'i');

            if (regex.test(modified)) {
                modified = modified.replace(regex, `<a href="${rule.href}">$1</a>`);
                injected++;
                break;
            }
        }
    }
    return { content: modified, injected };
}

async function main() {
    console.log('🔗 Bắt đầu inject internal + external links...\n');

    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, content, categories(slug)')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    if (error) { console.error('❌', error.message); return; }

    let totalInternal = 0, totalExternal = 0, updatedCount = 0;

    for (const post of posts) {
        const currentInternal = countInternalLinks(post.content);
        const currentExternal = countExternalLinks(post.content);
        const catSlug = post.categories?.slug || '';

        let newContent = post.content || '';
        let changes = [];

        // Inject internal links nếu thiếu
        if (currentInternal < 2) {
            const { content: withLinks, injected } = injectInternalLinks(newContent, post.slug, 4);
            if (injected > 0) {
                newContent = withLinks;
                changes.push(`+${injected} internal links`);
                totalInternal += injected;
            }
        }

        // Inject external links nếu thiếu
        if (currentExternal === 0) {
            const extKey = CAT_EXT[catSlug] || 'finance';
            const extHtml = EXTERNAL_SOURCES[extKey];
            if (extHtml && !newContent.includes('Nguồn tham khảo')) {
                newContent = newContent.trim() + '\n' + extHtml;
                changes.push('+external source');
                totalExternal++;
            }
        }

        // Update nếu có thay đổi
        if (changes.length > 0) {
            const { error: updateErr } = await supabase
                .from('posts').update({ content: newContent }).eq('id', post.id);

            if (updateErr) {
                console.log(`  ❌ Lỗi "${post.title}": ${updateErr.message}`);
            } else {
                updatedCount++;
                console.log(`  ✅ "${post.title}" → ${changes.join(', ')}`);
            }
        }
    }

    console.log('\n' + '═'.repeat(60));
    console.log('📊 KẾT QUẢ');
    console.log('═'.repeat(60));
    console.log(`  Bài đã cập nhật: ${updatedCount}/${posts.length}`);
    console.log(`  Internal links thêm: ${totalInternal}`);
    console.log(`  External sources thêm: ${totalExternal}`);
    console.log('\n🎉 Hoàn tất!');
}

main().catch(console.error);
