import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const { data } = await s.from('posts').select('id,title').order('created_at', { ascending: true });

// Manual mapping for all titles - sentence case with proper nouns preserved
const titleFixes = {
    "Đầu Tư Chứng Khoán Cho Người Mới Bắt Đầu 2026 Hướng Dẫn Từ A-Z": "Đầu tư chứng khoán cho người mới bắt đầu 2026: hướng dẫn từ A-Z",
    "Đầu Tư Bitcoin Crypto Cho Người Mới 2026 Hướng Dẫn Chi Tiết": "Đầu tư Bitcoin Crypto cho người mới 2026: hướng dẫn chi tiết",
    "So Sánh Kênh Đầu Tư Phổ Biến 2026: Chứng Khoán, Vàng, Crypto, BĐS": "So sánh kênh đầu tư phổ biến 2026: chứng khoán, vàng, Crypto, BĐS",
    "Phân Tích Kỹ Thuật Chứng Khoán Cho Người Mới 2026 Hướng Dẫn Đầy Đủ": "Phân tích kỹ thuật chứng khoán cho người mới 2026: hướng dẫn đầy đủ",
    "Chiến Lược DCA Bình Quân Giá Cách Đầu Tư An Toàn Nhất Cho Người Mới": "Chiến lược DCA bình quân giá: cách đầu tư an toàn nhất cho người mới",
    "Rủi Ro Đầu Tư Crypto Và Cách Phòng Tránh 2026 Hướng Dẫn Chi Tiết": "Rủi ro đầu tư Crypto và cách phòng tránh 2026: hướng dẫn chi tiết",
    "Xu Hướng Giá Vàng 2026 Và Chiến Lược Đầu Tư Vàng Hiệu Quả": "Xu hướng giá vàng 2026 và chiến lược đầu tư vàng hiệu quả",
    "Xây Dựng Danh Mục Đầu Tư Đa Dạng Hóa 2026 Nguyên Tắc Và Mẫu Thực Tế": "Xây dựng danh mục đầu tư đa dạng hóa 2026: nguyên tắc và mẫu thực tế",
    "Đầu Tư Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới Bắt Đầu 2026": "Đầu tư là gì? Hướng dẫn toàn diện cho người mới bắt đầu 2026",
    "Đầu Tư Vàng Kênh Trú Ẩn An Toàn 2026: Hướng Dẫn Mua Vàng Hiệu Quả": "Đầu tư vàng kênh trú ẩn an toàn 2026: hướng dẫn mua vàng hiệu quả",
    "Top 10 Kênh Đầu Tư Phổ Biến Việt Nam 2026 Xếp Hạng Và So Sánh": "Top 10 kênh đầu tư phổ biến Việt Nam 2026: xếp hạng và so sánh",
    "Stablecoin là gì? USDT, USDC và vai trò trong đầu tư crypto": "Stablecoin là gì? USDT, USDC và vai trò trong đầu tư Crypto",
    "Cách đọc bảng giá chứng khoán Hướng dẫn chi tiết cho người mới": "Cách đọc bảng giá chứng khoán: hướng dẫn chi tiết cho người mới",
    "Quỹ khẩn cấp Tại sao cần xây dựng và cách tích lũy hiệu quả": "Quỹ khẩn cấp: tại sao cần xây dựng và cách tích lũy hiệu quả",
    "Đầu tư vào quỹ mở tại Việt Nam So sánh và lựa chọn 2026": "Đầu tư vào quỹ mở tại Việt Nam: so sánh và lựa chọn 2026",
    "Tâm lý giao dịch 7 sai lầm cảm xúc khiến nhà đầu tư thua lỗ": "Tâm lý giao dịch: 7 sai lầm cảm xúc khiến nhà đầu tư thua lỗ",
    "Thuế đầu tư tại Việt Nam 2026 Hướng dẫn đầy đủ cho nhà đầu tư": "Thuế đầu tư tại Việt Nam 2026: hướng dẫn đầy đủ cho nhà đầu tư",
    "Cách đọc báo cáo tài chính doanh nghiệp Kỹ năng cốt lõi cho nhà đầu tư": "Cách đọc báo cáo tài chính doanh nghiệp: kỹ năng cốt lõi cho nhà đầu tư",
    "Bitcoin Halving là gì? Tác động đến giá BTC và chiến lược đầu tư": "Bitcoin Halving là gì? Tác động đến giá BTC và chiến lược đầu tư",
    "REITs là gì? Cách đầu tư bất động sản không cần vốn lớn": "REITs là gì? Cách đầu tư bất động sản không cần vốn lớn",
    "P2P Lending là gì? Cơ hội và rủi ro khi cho vay ngang hàng": "P2P Lending là gì? Cơ hội và rủi ro khi cho vay ngang hàng",
    "Lạm phát là gì? Tác động và cách bảo vệ tài sản 2026": "Lạm phát là gì? Tác động và cách bảo vệ tài sản 2026",
    "Bảo hiểm nhân thọ có phải kênh đầu tư tốt? Sự thật cần biết": "Bảo hiểm nhân thọ có phải kênh đầu tư tốt? Sự thật cần biết",
    "Cách tiết kiệm tiền hiệu quả 10 mẹo thực tế cho người trẻ": "Cách tiết kiệm tiền hiệu quả: 10 mẹo thực tế cho người trẻ",
    "Lãi suất ngân hàng 2026 So sánh và cách gửi tiền tối ưu": "Lãi suất ngân hàng 2026: so sánh và cách gửi tiền tối ưu",
    "Đầu tư ESG là gì? Xu hướng đầu tư bền vững 2026": "Đầu tư ESG là gì? Xu hướng đầu tư bền vững 2026",
    "Cổ phiếu tăng trưởng vs cổ phiếu giá trị Nên chọn loại nào?": "Cổ phiếu tăng trưởng vs cổ phiếu giá trị: nên chọn loại nào?",
    "Đầu tư vào bản thân Kênh đầu tư lợi nhuận cao nhất": "Đầu tư vào bản thân: kênh đầu tư lợi nhuận cao nhất",
    "Các loại lệnh chứng khoán ATO, ATC, LO, MP giải thích đơn giản": "Các loại lệnh chứng khoán ATO, ATC, LO, MP: giải thích đơn giản",
    "FIRE Movement Cách nghỉ hưu sớm ở tuổi 40 tại Việt Nam": "FIRE Movement: cách nghỉ hưu sớm ở tuổi 40 tại Việt Nam",
    "Chi phí ẩn khi đầu tư Những khoản phí bạn không biết đang mất": "Chi phí ẩn khi đầu tư: những khoản phí bạn không biết đang mất",
    "Cách đọc tin tức tài chính Phân biệt thông tin giá trị và nhiễu": "Cách đọc tin tức tài chính: phân biệt thông tin giá trị và nhiễu",
    "Forex vs Crypto So sánh chi tiết cho nhà đầu tư mới": "Forex vs Crypto: so sánh chi tiết cho nhà đầu tư mới",
    "Giáo dục tài chính cho con Dạy con về tiền từ nhỏ": "Giáo dục tài chính cho con: dạy con về tiền từ nhỏ",
    "Kinh tế vĩ mô ảnh hưởng đầu tư như thế nào GDP, CPI, PMI": "Kinh tế vĩ mô ảnh hưởng đầu tư như thế nào? GDP, CPI, PMI",
    "Cách chọn công ty chứng khoán phù hợp Tiêu chí đánh giá 2026": "Cách chọn công ty chứng khoán phù hợp: tiêu chí đánh giá 2026",
    "Tài khoản demo Cách luyện tập giao dịch không tốn tiền thật": "Tài khoản demo: cách luyện tập giao dịch không tốn tiền thật",
    "Đầu tư trái phiếu doanh nghiệp 2026 Cơ hội và cảnh báo": "Đầu tư trái phiếu doanh nghiệp 2026: cơ hội và cảnh báo",
    "Vàng vs USD Kênh nào phòng hộ rủi ro tốt hơn?": "Vàng vs USD: kênh nào phòng hộ rủi ro tốt hơn?",
    "Đầu tư theo mùa Hiệu ứng January, Sell in May và Halloween": "Đầu tư theo mùa: hiệu ứng January, Sell in May và Halloween",
    "Tổng kết chiến lược đầu tư tháng 3/2026 Cơ hội và rủi ro": "Tổng kết chiến lược đầu tư tháng 3/2026: cơ hội và rủi ro",
    "Đầu Tư Chủ Động Vs Bị Động: Chiến Lược Nào Phù Hợp Với Bạn?": "Đầu tư chủ động vs bị động: chiến lược nào phù hợp với bạn?",
    "Phân Bổ Tài Sản Theo Độ Tuổi: Quy Tắc Vàng Cho Nhà Đầu Tư": "Phân bổ tài sản theo độ tuổi: quy tắc vàng cho nhà đầu tư",
    "Đầu Tư Cổ Phiếu Cổ Tức: Xây Dựng Thu Nhập Thụ Động Bền Vững": "Đầu tư cổ phiếu cổ tức: xây dựng thu nhập thụ động bền vững",
    "Quản Lý Rủi Ro Danh Mục Đầu Tư: Bảo Vệ Tài Sản Hiệu Quả": "Quản lý rủi ro danh mục đầu tư: bảo vệ tài sản hiệu quả",
    "Tâm Lý Đám Đông Trong Đầu Tư: Nhận Diện Và Tránh Bẫy": "Tâm lý đám đông trong đầu tư: nhận diện và tránh bẫy",
    "Hướng Dẫn Mở Tài Khoản Chứng Khoán Online 2026 Nhanh Nhất": "Hướng dẫn mở tài khoản chứng khoán online 2026 nhanh nhất",
    "Đầu Tư Theo Xu Hướng AI Và Công Nghệ 2026: Cơ Hội Mới": "Đầu tư theo xu hướng AI và công nghệ 2026: cơ hội mới",
    "Altcoin Là Gì? Cơ Hội Và Rủi Ro Đầu Tư Altcoin 2026": "Altcoin là gì? Cơ hội và rủi ro đầu tư Altcoin 2026",
    "Đầu Tư Vào Thị Trường Quốc Tế Từ Việt Nam: Hướng Dẫn 2026": "Đầu tư vào thị trường quốc tế từ Việt Nam: hướng dẫn 2026",
    "Mua Nhà Hay Thuê Nhà 2026: Phân Tích Chi Tiết Giúp Bạn Quyết Định": "Mua nhà hay thuê nhà 2026: phân tích chi tiết giúp bạn quyết định",
    "DeFi Là Gì? Hướng Dẫn Tài Chính Phi Tập Trung Cho Người Mới 2026": "DeFi là gì? Hướng dẫn tài chính phi tập trung cho người mới 2026",
    "Kinh Nghiệm Đầu Tư Từ Warren Buffett: 10 Nguyên Tắc Vàng Bất Biến": "Kinh nghiệm đầu tư từ Warren Buffett: 10 nguyên tắc vàng bất biến",
    "Top 5 Quỹ ETF Tốt Nhất Việt Nam 2026: So Sánh Chi Tiết Phí, Lợi Suất và Cách Mua": "Top 5 quỹ ETF tốt nhất Việt Nam 2026: so sánh chi tiết phí, lợi suất và cách mua",
    "YTM Là Gì? Cách Tính Yield to Maturity Trái Phiếu Chính Xác Nhất": "YTM là gì? Cách tính Yield to Maturity trái phiếu chính xác nhất",
    "Hướng Dẫn Đầu Tư ETF Cho Người Mới 2026: Bắt Đầu Từ 1 Triệu Đồng": "Hướng dẫn đầu tư ETF cho người mới 2026: bắt đầu từ 1 triệu đồng",
    "VN30 ETF Là Gì? Đánh Giá Chi Tiết Quỹ ETF Lớn Nhất Việt Nam 2026": "VN30 ETF là gì? Đánh giá chi tiết quỹ ETF lớn nhất Việt Nam 2026",
    "VNFIN Lead ETF: Cơ Hội Đầu Tư Ngành Tài Chính Ngân Hàng 2026": "VNFIN Lead ETF: cơ hội đầu tư ngành tài chính ngân hàng 2026",
    "Diamond ETF: Đầu Tư Cổ Phiếu Chất Lượng Cao Của Khối Ngoại": "Diamond ETF: đầu tư cổ phiếu chất lượng cao của khối ngoại",
    "So Sánh Phí Quản Lý Các Quỹ ETF Việt Nam 2026: Quỹ Nào Rẻ Nhất?": "So sánh phí quản lý các quỹ ETF Việt Nam 2026: quỹ nào rẻ nhất?",
    "Cách Theo Dõi NAV và Hiệu Suất Quỹ ETF Chính Xác Nhất": "Cách theo dõi NAV và hiệu suất quỹ ETF chính xác nhất",
    "ETF Quốc Tế: Có Nên Đầu Tư S&P 500 Từ Việt Nam Không?": "ETF quốc tế: có nên đầu tư S&P 500 từ Việt Nam không?",
    "Coupon Rate vs YTM vs Current Yield: Phân Biệt 3 Loại Lợi Suất Trái Phiếu": "Coupon Rate vs YTM vs Current Yield: phân biệt 3 loại lợi suất trái phiếu",
    "Duration Trái Phiếu Là Gì? Hiểu Rủi Ro Lãi Suất Trong 5 Phút": "Duration trái phiếu là gì? Hiểu rủi ro lãi suất trong 5 phút",
    "Trái Phiếu Chính Phủ vs Doanh Nghiệp: Nên Chọn Loại Nào?": "Trái phiếu chính phủ vs doanh nghiệp: nên chọn loại nào?",
    "Rủi Ro Lãi Suất Khi Đầu Tư Trái Phiếu: 4 Cách Phòng Tránh Hiệu Quả": "Rủi ro lãi suất khi đầu tư trái phiếu: 4 cách phòng tránh hiệu quả",
    "Cách Đọc Bảng Giá Trái Phiếu Cho Người Mới Bắt Đầu": "Cách đọc bảng giá trái phiếu cho người mới bắt đầu",
    "Xếp Hạng Tín Nhiệm Trái Phiếu: Hiểu Rating Từ AAA Đến D": "Xếp hạng tín nhiệm trái phiếu: hiểu rating từ AAA đến D",
    "DCA Là Gì? Chiến Lược Trung Bình Giá Cho Nhà Đầu Tư Thông Minh": "DCA là gì? Chiến lược trung bình giá cho nhà đầu tư thông minh",
    "Mở Tài Khoản Chứng Khoán Online 2026: So Sánh 5 Công Ty Tốt Nhất": "Mở tài khoản chứng khoán online 2026: so sánh 5 công ty tốt nhất",
    "Phân Bổ Tài Sản Cho Người Mới: Quy Tắc 60/30/10 Dễ Áp Dụng": "Phân bổ tài sản cho người mới: quy tắc 60/30/10 dễ áp dụng",
    "Lãi Kép Là Gì? Sức Mạnh Tăng Trưởng Theo Cấp Số Nhân Ai Cũng Cần Biết": "Lãi kép là gì? Sức mạnh tăng trưởng theo cấp số nhân ai cũng cần biết",
    "ETF vs Cổ Phiếu vs Quỹ Mở: Người Mới Nên Chọn Gì?": "ETF vs cổ phiếu vs quỹ mở: người mới nên chọn gì?",
    "10 Thuật Ngữ Chứng Khoán Cơ Bản Mà Nhà Đầu Tư Mới Cần Biết": "10 thuật ngữ chứng khoán cơ bản mà nhà đầu tư mới cần biết",
    "Đầu Tư Vàng Cho Người Mới 2026: SJC, Nhẫn Trơn Hay Vàng Tài Khoản?": "Đầu tư vàng cho người mới 2026: SJC, nhẫn trơn hay vàng tài khoản?",
    "Forex Là Gì? Hướng Dẫn Giao Dịch Ngoại Hối Cho Người Mới 2026": "Forex là gì? Hướng dẫn giao dịch ngoại hối cho người mới 2026",
    "Giá Vàng Tăng Hay Giảm 2026? Phân Tích 5 Yếu Tố Quyết Định": "Giá vàng tăng hay giảm 2026? Phân tích 5 yếu tố quyết định",
    "Chọn Sàn Forex Uy Tín 2026: 5 Tiêu Chí Bắt Buộc Phải Kiểm Tra": "Chọn sàn Forex uy tín 2026: 5 tiêu chí bắt buộc phải kiểm tra",
    "Mua Vàng Ở Đâu Rẻ Nhất? So Sánh Giá Tiệm Vàng, Ngân Hàng và Online": "Mua vàng ở đâu rẻ nhất? So sánh giá tiệm vàng, ngân hàng và online",
    "Quản Lý Vốn Forex: Quy Tắc 2% Giúp Bạn Sống Sót Trên Thị Trường": "Quản lý vốn Forex: quy tắc 2% giúp bạn sống sót trên thị trường",
    "Vàng vs Bất Động Sản vs Chứng Khoán: Kênh Nào Sinh Lời Nhất 10 Năm Qua?": "Vàng vs bất động sản vs chứng khoán: kênh nào sinh lời nhất 10 năm qua?",
    "Phân Tích Kỹ Thuật Forex Cơ Bản: 5 Mô Hình Nến Mọi Trader Cần Biết": "Phân tích kỹ thuật Forex cơ bản: 5 mô hình nến mọi trader cần biết",
    "Bao Nhiêu Tiền Thì Nên Bắt Đầu Đầu Tư? Câu Trả Lời Có Thể Khiến Bạn Bất Ngờ": "Bao nhiêu tiền thì nên bắt đầu đầu tư? Câu trả lời có thể khiến bạn bất ngờ",
    "Có 10 Triệu Nên Đầu Tư Gì? 5 Lựa Chọn Thực Tế Cho Người Mới": "Có 10 triệu nên đầu tư gì? 5 lựa chọn thực tế cho người mới",
    "Cách Tính Lãi Kép Đơn Giản: Công Thức + Bảng Tính Online Miễn Phí": "Cách tính lãi kép đơn giản: công thức + bảng tính online miễn phí",
    "Có 50 Triệu Nên Đầu Tư Gì? Chiến Lược Phân Bổ Tối Ưu 2026": "Có 50 triệu nên đầu tư gì? Chiến lược phân bổ tối ưu 2026",
    "VN30 Gồm Những Mã Nào? Danh Sách Cập Nhật 2026 Và Cách Đầu Tư": "VN30 gồm những mã nào? Danh sách cập nhật 2026 và cách đầu tư",
    "Có 100 Triệu Nên Đầu Tư Gì 2026? 4 Chiến Lược Theo Độ Tuổi": "Có 100 triệu nên đầu tư gì 2026? 4 chiến lược theo độ tuổi",
    "20 Tuổi Nên Đầu Tư Gì? Lộ Trình Tài Chính Cho Gen Z Việt Nam": "20 tuổi nên đầu tư gì? Lộ trình tài chính cho Gen Z Việt Nam",
    "Top 10 App Đầu Tư Chứng Khoán Tốt Nhất 2026 Cho Người Việt": "Top 10 app đầu tư chứng khoán tốt nhất 2026 cho người Việt",
    "30 Tuổi Nên Đầu Tư Gì? Chiến Lược Xây Dựng Tài Sản Giai Đoạn Vàng": "30 tuổi nên đầu tư gì? Chiến lược xây dựng tài sản giai đoạn vàng",
    "Margin Là Gì? Đòn Bẩy Chứng Khoán – Cơ Hội Hay Bẫy Tài Chính?": "Margin là gì? Đòn bẩy chứng khoán – cơ hội hay bẫy tài chính?",
    "Cổ Phiếu Nào Nên Mua 2026? Phân Tích 5 Nhóm Ngành Tiềm Năng": "Cổ phiếu nào nên mua 2026? Phân tích 5 nhóm ngành tiềm năng",
    "Chứng Khoán Phái Sinh Là Gì? Hướng Dẫn Cơ Bản Cho Người Mới": "Chứng khoán phái sinh là gì? Hướng dẫn cơ bản cho người mới",
};

let changed = 0;
for (const p of data) {
    const newTitle = titleFixes[p.title];
    if (newTitle && newTitle !== p.title) {
        changed++;
        console.log(`${changed}. ❌ ${p.title}`);
        console.log(`   ✅ ${newTitle}\n`);

        if (process.argv.includes('--apply')) {
            const { error } = await s.from('posts').update({ title: newTitle, updated_at: new Date().toISOString() }).eq('id', p.id);
            if (error) console.log(`   ⚠️ Error: ${error.message}`);
        }
    }
}

console.log(`\nTổng: ${changed} tiêu đề cần sửa`);
if (process.argv.includes('--apply')) {
    console.log(`✅ Đã cập nhật ${changed} tiêu đề!`);
} else {
    console.log('⚠️ PREVIEW - chạy với --apply để thực thi');
}
