import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');

// Map slug -> related slugs with anchor text
const internalLinks = {
    'p2p-lending-la-gi-co-hoi-rui-ro': [
        { text: 'quỹ khẩn cấp', slug: 'quy-khan-cap-tai-sao-can-xay-dung' },
        { text: 'lãi kép trong đầu tư', slug: 'lai-kep-la-gi-cong-thuc-tinh-lai-kep' },
        { text: 'phân bổ tài sản theo tuổi', slug: 'phan-bo-tai-san-theo-do-tuoi' },
    ],
    'lam-phat-la-gi-tac-dong-bao-ve-tai-san': [
        { text: 'đầu tư vàng an toàn', slug: 'dau-tu-vang-kenh-tru-an-an-toan-2026' },
        { text: 'xây dựng danh mục đầu tư đa dạng hóa', slug: 'xay-dung-danh-muc-dau-tu-da-dang-hoa-2026' },
        { text: 'đầu tư bất động sản', slug: 'dau-tu-bat-dong-san-2026-uu-nhuoc-diem' },
    ],
    'bao-hiem-nhan-tho-co-phai-kenh-dau-tu': [
        { text: 'quỹ mở tại Việt Nam', slug: 'dau-tu-quy-mo-tai-viet-nam-2026' },
        { text: 'ETF cho người mới', slug: 'etf-la-gi-huong-dan-dau-tu-quy-etf' },
        { text: 'quỹ khẩn cấp', slug: 'quy-khan-cap-tai-sao-can-xay-dung' },
    ],
    'cach-tiet-kiem-tien-hieu-qua-nguoi-tre': [
        { text: 'quy tắc 50/30/20', slug: 'quy-tac-50-30-20-phuong-phap-quan-ly-tai-chinh' },
        { text: 'xây dựng quỹ khẩn cấp', slug: 'quy-khan-cap-tai-sao-can-xay-dung' },
        { text: 'lãi kép khi đầu tư sớm', slug: 'lai-kep-la-gi-cong-thuc-tinh-lai-kep' },
    ],
    'lai-suat-ngan-hang-2026-so-sanh': [
        { text: 'lạm phát và cách phòng hộ', slug: 'lam-phat-la-gi-tac-dong-bao-ve-tai-san' },
        { text: 'đầu tư ETF thay thế', slug: 'etf-la-gi-huong-dan-dau-tu-quy-etf' },
        { text: 'so sánh tiết kiệm vs đầu tư', slug: 'so-sanh-gui-tiet-kiem-vs-dau-tu' },
    ],
    'dau-tu-esg-xu-huong-ben-vung-2026': [
        { text: 'cách đọc báo cáo tài chính', slug: 'cach-doc-bao-cao-tai-chinh-doanh-nghiep' },
        { text: 'cổ phiếu tăng trưởng vs giá trị', slug: 'co-phieu-tang-truong-vs-gia-tri' },
        { text: 'đầu tư chứng khoán cho người mới', slug: 'cach-dau-tu-chung-khoan-cho-nguoi-moi-2026' },
    ],
    'co-phieu-tang-truong-vs-gia-tri': [
        { text: 'chỉ số P/E định giá cổ phiếu', slug: 'pe-la-gi-dinh-gia-co-phieu' },
        { text: 'chiến lược DCA bình quân giá', slug: 'chien-luoc-dca-binh-quan-gia' },
        { text: 'cổ tức và thu nhập thụ động', slug: 'co-tuc-la-gi-thu-nhap-thu-dong' },
    ],
    'dau-tu-vao-ban-than-kenh-loi-nhuan-cao': [
        { text: 'cách tiết kiệm tiền hiệu quả', slug: 'cach-tiet-kiem-tien-hieu-qua-nguoi-tre' },
        { text: 'phong trào FIRE nghỉ hưu sớm', slug: 'fire-movement-nghi-huu-som-tuoi-40' },
        { text: 'quy tắc 50/30/20', slug: 'quy-tac-50-30-20-phuong-phap-quan-ly-tai-chinh' },
    ],
    'cac-loai-lenh-chung-khoan-ato-atc-lo-mp': [
        { text: 'cách đọc bảng giá chứng khoán', slug: 'cach-doc-bang-gia-chung-khoan-nguoi-moi' },
        { text: 'phân tích kỹ thuật chứng khoán', slug: 'phan-tich-ky-thuat-chung-khoan-cho-nguoi-moi-2026' },
        { text: 'chọn công ty chứng khoán phù hợp', slug: 'cach-chon-cong-ty-chung-khoan-phu-hop' },
    ],
    'fire-movement-nghi-huu-som-tuoi-40': [
        { text: 'phân bổ tài sản theo độ tuổi', slug: 'phan-bo-tai-san-theo-do-tuoi' },
        { text: 'sức mạnh lãi kép', slug: 'lai-kep-la-gi-cong-thuc-tinh-lai-kep' },
        { text: 'đầu tư ETF chi phí thấp', slug: 'etf-la-gi-huong-dan-dau-tu-quy-etf' },
    ],
    'chi-phi-an-khi-dau-tu-khoan-phi-mat': [
        { text: 'quỹ mở vs ETF so sánh', slug: 'dau-tu-quy-mo-tai-viet-nam-2026' },
        { text: 'chọn công ty chứng khoán phí thấp', slug: 'cach-chon-cong-ty-chung-khoan-phu-hop' },
        { text: 'margin trading và rủi ro', slug: 'margin-trading-la-gi-rui-ro' },
    ],
    'cach-doc-tin-tuc-tai-chinh-phan-biet': [
        { text: 'cách đọc báo cáo tài chính', slug: 'cach-doc-bao-cao-tai-chinh-doanh-nghiep' },
        { text: 'tâm lý giao dịch và sai lầm cảm xúc', slug: 'tam-ly-giao-dich-sai-lam-cam-xuc' },
        { text: 'kinh tế vĩ mô ảnh hưởng đầu tư', slug: 'kinh-te-vi-mo-anh-huong-dau-tu' },
    ],
    'forex-vs-crypto-so-sanh-chi-tiet': [
        { text: 'DeFi tài chính phi tập trung', slug: 'defi-la-gi-huong-dan-tham-gia' },
        { text: 'stablecoin USDT USDC', slug: 'stablecoin-la-gi-usdt-usdc-vai-tro' },
        { text: 'tài khoản demo luyện tập', slug: 'tai-khoan-demo-luyen-tap-giao-dich' },
    ],
    'giao-duc-tai-chinh-cho-con-day-tu-nho': [
        { text: 'cách tiết kiệm tiền hiệu quả', slug: 'cach-tiet-kiem-tien-hieu-qua-nguoi-tre' },
        { text: 'lãi kép sức mạnh kỳ diệu', slug: 'lai-kep-la-gi-cong-thuc-tinh-lai-kep' },
        { text: 'đầu tư vào bản thân', slug: 'dau-tu-vao-ban-than-kenh-loi-nhuan-cao' },
    ],
    'kinh-te-vi-mo-anh-huong-dau-tu': [
        { text: 'lạm phát và tác động', slug: 'lam-phat-la-gi-tac-dong-bao-ve-tai-san' },
        { text: 'lãi suất ngân hàng 2026', slug: 'lai-suat-ngan-hang-2026-so-sanh' },
        { text: 'đầu tư theo mùa', slug: 'dau-tu-theo-mua-hieu-ung-january-sell-may' },
    ],
    'cach-chon-cong-ty-chung-khoan-phu-hop': [
        { text: 'các loại lệnh chứng khoán', slug: 'cac-loai-lenh-chung-khoan-ato-atc-lo-mp' },
        { text: 'cách đọc bảng giá chứng khoán', slug: 'cach-doc-bang-gia-chung-khoan-nguoi-moi' },
        { text: 'chi phí ẩn khi đầu tư', slug: 'chi-phi-an-khi-dau-tu-khoan-phi-mat' },
    ],
    'tai-khoan-demo-luyen-tap-giao-dich': [
        { text: 'tâm lý giao dịch', slug: 'tam-ly-giao-dich-sai-lam-cam-xuc' },
        { text: 'forex vs crypto so sánh', slug: 'forex-vs-crypto-so-sanh-chi-tiet' },
        { text: 'các loại lệnh giao dịch', slug: 'cac-loai-lenh-chung-khoan-ato-atc-lo-mp' },
    ],
    'dau-tu-trai-phieu-doanh-nghiep-2026': [
        { text: 'cách đọc báo cáo tài chính', slug: 'cach-doc-bao-cao-tai-chinh-doanh-nghiep' },
        { text: 'rủi ro đầu tư crypto', slug: 'rui-ro-dau-tu-crypto-va-cach-phong-tranh-2026' },
        { text: 'xây dựng danh mục đa dạng hóa', slug: 'xay-dung-danh-muc-dau-tu-da-dang-hoa-2026' },
    ],
    'vang-vs-usd-kenh-phong-ho-rui-ro': [
        { text: 'đầu tư vàng hiệu quả', slug: 'dau-tu-vang-kenh-tru-an-an-toan-2026' },
        { text: 'xu hướng giá vàng 2026', slug: 'xu-huong-gia-vang-2026-chien-luoc-dau-tu' },
        { text: 'lạm phát và cách phòng hộ', slug: 'lam-phat-la-gi-tac-dong-bao-ve-tai-san' },
    ],
    'dau-tu-theo-mua-hieu-ung-january-sell-may': [
        { text: 'phân tích kỹ thuật chứng khoán', slug: 'phan-tich-ky-thuat-chung-khoan-cho-nguoi-moi-2026' },
        { text: 'tâm lý giao dịch cảm xúc', slug: 'tam-ly-giao-dich-sai-lam-cam-xuc' },
        { text: 'chiến lược DCA bình quân giá', slug: 'chien-luoc-dca-binh-quan-gia' },
    ],
    'tong-ket-chien-luoc-dau-tu-thang-3-2026': [
        { text: 'top 10 kênh đầu tư phổ biến', slug: 'top-10-kenh-dau-tu-pho-bien-viet-nam-2026' },
        { text: 'Bitcoin Halving và chiến lược', slug: 'bitcoin-halving-la-gi-tac-dong-gia-btc' },
        { text: 'phân bổ tài sản theo độ tuổi', slug: 'phan-bo-tai-san-theo-do-tuoi' },
    ],
};

async function addLinks() {
    console.log('🔗 Thêm internal links SEO cho 21 bài viết...\n');
    const { error: authError } = await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
    if (authError) { console.log('❌ Auth:', authError.message); return; }

    let ok = 0;
    for (const [slug, links] of Object.entries(internalLinks)) {
        const { data: post } = await supabase.from('posts').select('id, content').eq('slug', slug).single();
        if (!post) { console.log(`⏭️ Skip ${slug} (not found)`); continue; }

        // Build related posts section
        const linksSection = `\n\n## Bài viết liên quan\n\n${links.map(l => `- [${l.text}](/blog/${l.slug})`).join('\n')}`;

        // Check if already has links section
        if (post.content && post.content.includes('## Bài viết liên quan')) {
            console.log(`⏭️ ${slug} (already has links)`);
            continue;
        }

        const newContent = (post.content || '') + linksSection;
        const { error } = await supabase.from('posts').update({ content: newContent }).eq('id', post.id);
        if (error) console.log(`❌ ${slug}: ${error.message}`);
        else { console.log(`✅ ${slug} (+${links.length} links)`); ok++; }
    }
    console.log(`\n🎉 Done! ${ok} bài đã thêm internal links.`);
}
addLinks();
