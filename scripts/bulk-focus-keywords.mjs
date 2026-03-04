import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Focus keyword map - derived from title + SEO analysis
const keywordMap = {
    'dau-tu-la-gi-huong-dan-toan-dien': 'đầu tư là gì',
    'so-sanh-kenh-dau-tu-pho-bien': 'so sánh kênh đầu tư',
    'chien-luoc-dca-binh-quan-gia': 'DCA bình quân giá',
    'dau-tu-chung-khoan-cho-nguoi-moi': 'đầu tư chứng khoán cho người mới',
    'phan-tich-ky-thuat-chung-khoan': 'phân tích kỹ thuật chứng khoán',
    'dau-tu-bitcoin-crypto-cho-nguoi-moi': 'đầu tư crypto cho người mới',
    'rui-ro-dau-tu-crypto-cach-phong-tranh': 'rủi ro đầu tư crypto',
    'dau-tu-vang-kenh-tru-an-an-toan': 'đầu tư vàng',
    'xu-huong-gia-vang-chien-luoc-dau-tu': 'xu hướng giá vàng 2026',
    'xay-dung-danh-muc-dau-tu-da-dang-hoa': 'đa dạng hóa danh mục đầu tư',
    'etf-la-gi-huong-dan-dau-tu-quy-etf': 'ETF là gì',
    'stablecoin-la-gi-usdt-usdc-vai-tro': 'stablecoin là gì',
    'cach-doc-bang-gia-chung-khoan-nguoi-moi': 'cách đọc bảng giá chứng khoán',
    'quy-khan-cap-tai-sao-can-xay-dung': 'quỹ khẩn cấp',
    'dau-tu-quy-mo-tai-viet-nam-2026': 'đầu tư quỹ mở Việt Nam',
    'tam-ly-giao-dich-sai-lam-cam-xuc': 'tâm lý giao dịch',
    'thue-dau-tu-viet-nam-2026-huong-dan': 'thuế đầu tư Việt Nam 2026',
    'cach-doc-bao-cao-tai-chinh-doanh-nghiep': 'cách đọc báo cáo tài chính',
    'dau-tu-bat-dong-san-2026-uu-nhuoc-diem': 'đầu tư bất động sản 2026',
    'lai-kep-la-gi-suc-manh-lai-kep-dau-tu': 'lãi kép là gì',
    'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan': 'quy tắc 50/30/20',
    'lam-phat-la-gi-tac-dong-bao-ve-tai-san': 'lạm phát là gì',
    'cach-tiet-kiem-tien-hieu-qua-nguoi-tre': 'cách tiết kiệm tiền',
    'forex-la-gi-huong-dan-giao-dich-ngoai-hoi-cho-nguoi-moi': 'forex là gì',
    'dau-tu-vang-cho-nguoi-moi-2026-sjc-nhan-tron-vang-tai-khoan': 'đầu tư vàng cho người mới',
    '10-sai-lam-pho-bien-khi-dau-tu-cach-tranh': '10 sai lầm đầu tư',
    'cach-dau-tu-chung-khoan-nguoi-moi-2026': 'cách đầu tư chứng khoán 2026',
    'reits-la-gi-dau-tu-bat-dong-san-von-nho': 'REITs là gì',
    'bitcoin-halving-la-gi-tac-dong-gia-btc': 'bitcoin halving là gì',
    'top-10-kenh-dau-tu-pho-bien-viet-nam-2026': 'top kênh đầu tư 2026',
    'co-phieu-tang-truong-vs-gia-tri': 'cổ phiếu tăng trưởng vs giá trị',
    'fire-movement-nghi-huu-som-tuoi-40': 'FIRE movement nghỉ hưu sớm',
    'p2p-lending-la-gi-co-hoi-rui-ro': 'P2P lending là gì',
    'bao-hiem-nhan-tho-co-phai-kenh-dau-tu': 'bảo hiểm nhân thọ đầu tư',
    'top-5-quy-etf-tot-nhat-viet-nam-2026': 'top quỹ ETF Việt Nam 2026',
    'nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh': 'nên đầu tư gì 2026',
    'dau-tu-esg-xu-huong-ben-vung-2026': 'đầu tư ESG là gì',
    'cac-loai-lenh-chung-khoan-ato-atc-lo-mp': 'lệnh ATO ATC LO MP',
    'cach-chon-cong-ty-chung-khoan-phu-hop': 'cách chọn công ty chứng khoán',
    'so-sanh-gui-tiet-kiem-vs-dau-tu-2026': 'gửi tiết kiệm vs đầu tư',
    'top-5-sai-lam-dau-tu-chung-khoan': 'sai lầm đầu tư chứng khoán',
    'lai-suat-ngan-hang-2026-so-sanh': 'lãi suất ngân hàng 2026',
    'giao-duc-tai-chinh-cho-con-day-tu-nho': 'giáo dục tài chính cho con',
    'dau-tu-vao-ban-than-kenh-loi-nhuan-cao': 'đầu tư vào bản thân',
    'kinh-te-vi-mo-anh-huong-dau-tu': 'kinh tế vĩ mô ảnh hưởng đầu tư',
    'chi-phi-an-khi-dau-tu-khoan-phi-mat': 'chi phí ẩn khi đầu tư',
    'cach-doc-tin-tuc-tai-chinh-phan-biet': 'cách đọc tin tức tài chính',
    'forex-vs-crypto-so-sanh-chi-tiet': 'forex vs crypto',
    'phan-tich-ky-thuat-forex-5-mo-hinh-nen-co-ban': 'phân tích kỹ thuật forex',
    'chon-san-forex-uy-tin-2026-5-tieu-chi-bat-buoc': 'chọn sàn forex uy tín',
    'quan-ly-von-forex-quy-tac-2-phan-tram': 'quản lý vốn forex quy tắc 2%',
    'gia-vang-tang-hay-giam-2026-phan-tich-5-yeu-to': 'giá vàng 2026',
    'mua-vang-o-dau-re-nhat-so-sanh-gia-2026': 'mua vàng ở đâu rẻ nhất',
    'vang-vs-bat-dong-san-vs-chung-khoan-kenh-nao-sinh-loi-nhat': 'vàng vs chứng khoán vs BĐS',
    'vang-vs-usd-kenh-phong-ho-rui-ro': 'vàng vs usd phòng hộ rủi ro',
    'dau-tu-trai-phieu-doanh-nghiep-2026': 'đầu tư trái phiếu doanh nghiệp',
    'tai-khoan-demo-luyen-tap-giao-dich': 'tài khoản demo giao dịch',
    'dau-tu-theo-mua-hieu-ung-january-sell-may': 'đầu tư theo mùa',
    'tong-ket-chien-luoc-dau-tu-thang-3-2026': 'chiến lược đầu tư tháng 3/2026',
    'tam-ly-dam-dong-trong-dau-tu-tranh-bay': 'tâm lý đám đông đầu tư',
    'dau-tu-chu-dong-vs-bi-dong-chien-luoc': 'đầu tư chủ động vs bị động',
    'phan-bo-tai-san-theo-do-tuoi-quy-tac': 'phân bổ tài sản theo độ tuổi',
    'dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong': 'cổ phiếu cổ tức',
    'quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua': 'quản lý rủi ro danh mục đầu tư',
    'huong-dan-mo-tai-khoan-chung-khoan-online-2026': 'mở tài khoản chứng khoán online',
    'dau-tu-xu-huong-ai-cong-nghe-2026': 'đầu tư AI công nghệ 2026',
    'altcoin-la-gi-co-hoi-rui-ro-dau-tu-2026': 'altcoin là gì',
    'dau-tu-thi-truong-quoc-te-tu-viet-nam-2026': 'đầu tư thị trường quốc tế',
    'mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet': 'mua nhà hay thuê nhà',
    'defi-la-gi-tai-chinh-phi-tap-trung-2026': 'DeFi là gì',
    'kinh-nghiem-dau-tu-warren-buffett-10-nguyen-tac': 'kinh nghiệm Warren Buffett',
    'ytm-la-gi-cach-tinh-yield-to-maturity': 'YTM là gì',
    'huong-dan-dau-tu-etf-cho-nguoi-moi-2026': 'hướng dẫn đầu tư ETF',
    'vn30-etf-danh-gia-chi-tiet-2026': 'VN30 ETF đánh giá',
    'vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh': 'VNFIN Lead ETF',
    'diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai': 'Diamond ETF',
    'so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026': 'phí quản lý ETF Việt Nam',
    'cach-theo-doi-nav-hieu-suat-quy-etf': 'theo dõi NAV ETF',
    'etf-quoc-te-co-nen-dau-tu-sp500-tu-viet-nam': 'đầu tư S&P 500 từ Việt Nam',
    'coupon-rate-vs-ytm-vs-current-yield': 'coupon rate vs YTM',
    'duration-trai-phieu-la-gi-rui-ro-lai-suat': 'duration trái phiếu là gì',
    'trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao': 'trái phiếu chính phủ vs doanh nghiệp',
    'rui-ro-lai-suat-dau-tu-trai-phieu-cach-phong-tranh': 'rủi ro lãi suất trái phiếu',
    'cach-doc-bang-gia-trai-phieu-cho-nguoi-moi': 'cách đọc bảng giá trái phiếu',
    'xep-hang-tin-nhiem-trai-phieu-rating-aaa-den-d': 'xếp hạng tín nhiệm trái phiếu',
    'dca-la-gi-chien-luoc-trung-binh-gia': 'DCA là gì',
    'mo-tai-khoan-chung-khoan-online-2026-so-sanh': 'so sánh công ty chứng khoán 2026',
    'phan-bo-tai-san-cho-nguoi-moi-quy-tac-60-30-10': 'phân bổ tài sản quy tắc 60/30/10',
    'lai-kep-la-gi-suc-manh-tang-truong-cap-so-nhan': 'sức mạnh lãi kép',
    'etf-vs-co-phieu-vs-quy-mo-nguoi-moi-nen-chon': 'ETF vs cổ phiếu vs quỹ mở',
    '10-thuat-ngu-chung-khoan-co-ban-nha-dau-tu-moi': 'thuật ngữ chứng khoán cơ bản',
    'bao-nhieu-tien-thi-nen-bat-dau-dau-tu': 'bao nhiêu tiền bắt đầu đầu tư',
    'co-10-trieu-nen-dau-tu-gi': 'có 10 triệu nên đầu tư gì',
    'cach-tinh-lai-kep-cong-thuc-bang-tinh-online': 'cách tính lãi kép',
    'co-50-trieu-nen-dau-tu-gi': 'có 50 triệu nên đầu tư gì',
    'vn30-gom-nhung-ma-nao-danh-sach-2026': 'VN30 gồm những mã nào',
    'co-100-trieu-nen-dau-tu-gi': 'có 100 triệu nên đầu tư gì',
    '20-tuoi-nen-dau-tu-gi': '20 tuổi nên đầu tư gì',
    'top-app-dau-tu-chung-khoan-tot-nhat-2026': 'app đầu tư chứng khoán 2026',
    '30-tuoi-nen-dau-tu-gi': '30 tuổi nên đầu tư gì',
    'margin-la-gi-don-bay-chung-khoan': 'margin là gì',
    'co-phieu-nao-nen-mua-2026-phan-tich-nganh': 'cổ phiếu nên mua 2026',
    'chung-khoan-phai-sinh-la-gi-huong-dan-co-ban': 'chứng khoán phái sinh là gì',
};

// Get all posts without focus_keyword
const { data: posts } = await s.from('posts')
    .select('id, slug, focus_keyword')
    .is('focus_keyword', null);

let updated = 0;
let skipped = 0;

for (const post of posts) {
    const keyword = keywordMap[post.slug];
    if (keyword) {
        const { error } = await s.from('posts').update({
            focus_keyword: keyword,
            updated_at: new Date().toISOString()
        }).eq('id', post.id);

        if (error) {
            console.log(`❌ ${post.slug}: ${error.message}`);
        } else {
            updated++;
        }
    } else {
        skipped++;
        console.log(`⚠️ No keyword for: ${post.slug}`);
    }
}

console.log(`\n✅ Updated focus_keyword: ${updated} bài`);
console.log(`⚠️ Skipped (no mapping): ${skipped} bài`);
console.log(`📝 Total without keyword before: ${posts.length}`);
