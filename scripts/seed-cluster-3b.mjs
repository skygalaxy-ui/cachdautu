import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
const { error: authError } = await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
if (authError) { console.log('❌', authError.message); process.exit(1); }

const KT = '31d10229-9735-4f69-a368-08ea7f0550a1';
const TC = '0a381b9b-e2af-4762-85d9-b8ff8c231b31';

const posts = [
    {
        title: "Lãi Kép Là Gì? Sức Mạnh Tăng Trưởng Theo Cấp Số Nhân Ai Cũng Cần Biết",
        slug: "lai-kep-la-gi-suc-manh-tang-truong-cap-so-nhan",
        excerpt: "Lãi kép được Einstein gọi là 'kỳ quan thứ 8'. Tìm hiểu cách lãi kép hoạt động, công thức tính, và tại sao bắt đầu sớm quan trọng hơn bắt đầu nhiều tiền.",
        category_id: TC,
        tags: ["lãi kép", "compound interest", "đầu tư dài hạn", "tài chính cá nhân"],
        reading_time: "8 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-12T03:00:00Z').toISOString(),
        content: `<p>Albert Einstein từng gọi lãi kép là "kỳ quan thứ tám của thế giới – ai hiểu nó thì kiếm được, ai không hiểu thì phải trả." Đây không phải lời nói khoa trương. Lãi kép thực sự là sức mạnh lớn nhất giúp biến số tiền nhỏ thành tài sản lớn – chỉ cần bạn cho nó đủ thời gian.</p>

<h2>Lãi kép hoạt động như thế nào?</h2>

<p>Lãi đơn tính lãi chỉ trên số vốn gốc ban đầu. Lãi kép tính lãi trên cả vốn gốc LẪN lãi đã tích lũy trước đó. Nghĩa là "tiền đẻ ra tiền, tiền con lại đẻ ra tiền cháu" – một vòng lặp tăng trưởng theo cấp số nhân.</p>

<p>Ví dụ đơn giản: Bạn đầu tư 10 triệu đồng với lợi suất 12%/năm. Sau năm 1, bạn có 11,2 triệu. Năm 2, lãi 12% tính trên 11,2 triệu (không phải 10 triệu), nên bạn có 12,544 triệu. Mỗi năm, "gốc" ngày càng lớn hơn, và lãi sinh ra cũng ngày càng nhiều hơn.</p>

<img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop" alt="Tăng trưởng lãi kép" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Quy tắc 72: Bao lâu để gấp đôi tài sản?</h2>

<p>Quy tắc 72 là công cụ tính nhanh cực kỳ hữu ích. Chia 72 cho lợi suất hàng năm sẽ cho bạn biết cần bao lâu để gấp đôi số tiền. Với lợi suất 12%/năm (trung bình <a href="/blog/chung-khoan/vn30-etf-danh-gia-chi-tiet-2026">VN30 ETF</a>): 72 / 12 = 6 năm để gấp đôi.</p>

<p>Với lãi suất tiết kiệm 6%/năm: 72 / 6 = 12 năm mới gấp đôi. Chênh lệch 6% lợi suất nghĩa là bạn mất gấp đôi thời gian. Đây là lý do tại sao chọn kênh đầu tư có lợi suất hợp lý (dù chỉ cao hơn vài phần trăm) tạo ra khác biệt khổng lồ trong dài hạn.</p>

<h2>10 triệu đồng trong 30 năm: Kết quả bất ngờ</h2>

<p>Hãy xem lãi kép tạo ra phép màu gì với 10 triệu đồng ban đầu, thêm 2 triệu mỗi tháng, lợi suất 12%/năm.</p>

| Năm | Tổng đã đầu tư | Giá trị danh mục | Lãi kép sinh ra |
|---|---|---|---|
| 5 | 130 triệu | 170 triệu | 40 triệu |
| 10 | 250 triệu | 475 triệu | 225 triệu |
| 20 | 490 triệu | 2,1 tỷ | 1,6 tỷ |
| 30 | 730 triệu | 7,8 tỷ | 7,1 tỷ |

<p>Sau 30 năm, bạn đầu tư tổng cộng 730 triệu nhưng nhận về 7,8 TỶ ĐỒNG – lãi kép tạo ra hơn 7 tỷ, gấp gần 10 lần số vốn bỏ ra. Đây chính là "phép màu" mà Einstein nói đến.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Biểu đồ lãi kép" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Bắt đầu sớm quan trọng hơn bắt đầu nhiều</h2>

<p>So sánh hai người: A bắt đầu đầu tư 2 triệu/tháng lúc 25 tuổi, dừng lúc 35 tuổi (10 năm, tổng 240 triệu). B bắt đầu 2 triệu/tháng lúc 35 tuổi, đầu tư đến 65 tuổi (30 năm, tổng 720 triệu). Cả hai đều đạt lợi suất 12%/năm.</p>

<p>Kết quả lúc 65 tuổi: A có khoảng 6,5 tỷ đồng. B có khoảng 7,8 tỷ đồng. A chỉ bỏ ra 240 triệu (1/3 của B) nhưng kết quả gần bằng – vì A có thêm 10 năm lãi kép tích lũy. Mỗi năm bắt đầu muộn đều "đắt đỏ" hơn bạn tưởng.</p>

<h2>Cách tận dụng lãi kép tối đa</h2>

<p>Bốn yếu tố quyết định sức mạnh lãi kép: thời gian, lợi suất, số tiền đầu tư, và tần suất ghép lãi. Trong đó, thời gian là yếu tố quan trọng nhất – bạn không thể "mua" thời gian, nên hãy bắt đầu ngay hôm nay.</p>

<p>Kết hợp lãi kép với <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">chiến lược DCA</a> và <a href="/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026">đầu tư ETF</a> là công thức hoàn hảo: đầu tư đều đặn, tái đầu tư lợi nhuận, kiên nhẫn giữ dài hạn. Đơn giản nhưng hiệu quả đến không ngờ.</p>

<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop" alt="Bắt đầu đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Lãi kép không phải phép màu – nó là toán học. Nhưng kết quả nó mang lại thì thực sự kỳ diệu. Bí mật duy nhất là thời gian và kỷ luật. Bắt đầu sớm, đầu tư đều đặn, không rút ra, và để lãi kép làm phần việc của nó. 10 năm sau, bạn sẽ cảm ơn bản thân hôm nay.</p>`
    },
    {
        title: "ETF vs Cổ Phiếu vs Quỹ Mở: Người Mới Nên Chọn Gì?",
        slug: "etf-vs-co-phieu-vs-quy-mo-nguoi-moi-nen-chon",
        excerpt: "So sánh ETF, cổ phiếu riêng lẻ và quỹ mở về rủi ro, lợi suất, phí và độ phức tạp. Hướng dẫn người mới chọn kênh đầu tư phù hợp nhất.",
        category_id: KT,
        tags: ["ETF", "cổ phiếu", "quỹ mở", "so sánh", "đầu tư cho người mới"],
        reading_time: "9 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-13T03:00:00Z').toISOString(),
        content: `<p>Khi quyết định bắt đầu đầu tư, bạn đứng trước ba lựa chọn phổ biến nhất: mua ETF, mua cổ phiếu riêng lẻ, hoặc mua quỹ mở. Cả ba đều giúp bạn tham gia thị trường chứng khoán, nhưng mỗi cách có đặc điểm, ưu nhược điểm riêng biệt.</p>

<p>Bài viết này sẽ so sánh trực tiếp cả ba để giúp bạn chọn hướng đi phù hợp nhất với tình huống của mình.</p>

<h2>ETF: Đầu tư "trọn gói" trên sàn</h2>

<p><a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">ETF (Exchange Traded Fund)</a> là quỹ đầu tư niêm yết trên sàn, mua bán như cổ phiếu nhưng chứa một rổ nhiều cổ phiếu. Khi bạn mua <a href="/blog/chung-khoan/vn30-etf-danh-gia-chi-tiet-2026">VN30 ETF</a>, bạn đồng thời sở hữu 30 cổ phiếu lớn nhất Việt Nam.</p>

<p>Ưu điểm lớn nhất của ETF là sự đơn giản. Bạn không cần phân tích từng công ty, không cần đọc báo cáo tài chính, không cần theo dõi tin tức hàng ngày. Chỉ cần <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">DCA hàng tháng</a> và kiên nhẫn chờ đợi.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Đầu tư ETF" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Cổ phiếu riêng lẻ: Tiềm năng cao, rủi ro cao</h2>

<p>Mua cổ phiếu riêng lẻ nghĩa là bạn tự chọn công ty để đầu tư. Lợi thế là tiềm năng lợi nhuận không giới hạn – cổ phiếu FPT đã tăng gấp 5 lần trong 3 năm, VN30 ETF chỉ tăng khoảng 50% cùng kỳ.</p>

<p>Nhưng ngược lại, chọn sai cổ phiếu có thể mất 50-90% vốn. Để chọn đúng, bạn cần kiến thức phân tích cơ bản (đọc báo cáo tài chính, đánh giá doanh nghiệp), phân tích kỹ thuật (biểu đồ, xu hướng), và dành nhiều thời gian theo dõi thị trường. Đây không phải việc dễ dàng cho người mới.</p>

<h2>Quỹ mở: Để chuyên gia quản lý hộ</h2>

<p>Quỹ mở (open-end fund) hoạt động giống ETF nhưng không niêm yết trên sàn. Bạn mua bán trực tiếp với công ty quản lý quỹ theo giá NAV cuối ngày. Quỹ mở được quản lý "chủ động" – quản lý quỹ tích cực chọn cổ phiếu, thời điểm mua bán nhằm vượt benchmark.</p>

<p>Ưu điểm là bạn có chuyên gia quản lý hộ danh mục. Nhược điểm là phí cao hơn ETF (thường 1,5-2,5%/năm) và lịch sử cho thấy đa số quỹ chủ động thua ETF thụ động trong dài hạn.</p>

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="So sánh đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Bảng so sánh toàn diện</h2>

| Tiêu chí | ETF | Cổ phiếu | Quỹ mở |
|---|---|---|---|
| Đa dạng hóa | Tự động (30-50 mã) | Tự làm | Tự động |
| Phí quản lý | 0,45-0,65%/năm | 0% | 1,5-2,5%/năm |
| Phí giao dịch | 0-0,2% | 0-0,2% | 0-2% (phí mua/bán) |
| Thanh khoản | Cao, mua bán tức thì | Cao | Trung bình (T+3 ngày) |
| Kiến thức cần | Thấp | Cao | Thấp |
| Thời gian cần | 30 phút/tháng | 5-10 giờ/tuần | 30 phút/tháng |
| Tiềm năng lợi nhuận | 10-15%/năm | -90% đến +500% | 8-15%/năm |
| Phù hợp | Mọi NĐT | NĐT có kinh nghiệm | NĐT bận rộn |

<h2>Lời khuyên cho người mới</h2>

<p>Nếu bạn mới bắt đầu, đây là lộ trình đề xuất. Giai đoạn 1 (năm 1-2): Bắt đầu 100% với <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF</a>, áp dụng DCA, học kiến thức cơ bản. Giai đoạn 2 (năm 2-3): Phân bổ 70% ETF + 30% cổ phiếu riêng lẻ để thực hành kỹ năng chọn mã. Giai đoạn 3 (năm 3+): Tùy chỉnh tỷ trọng dựa trên kinh nghiệm và mục tiêu. Một số người chuyển sang 100% cổ phiếu, một số vẫn giữ ETF làm chủ đạo.</p>

<p>Không nên bắt đầu bằng quỹ mở nếu bạn có thể tự mua ETF – phí quỹ mở cao hơn đáng kể mà hiệu suất thường không tốt hơn. Chỉ cân nhắc quỹ mở nếu bạn muốn đầu tư vào ngành/khu vực đặc thù mà ETF Việt Nam chưa có.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Lộ trình đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>ETF là lựa chọn tốt nhất cho đa số nhà đầu tư mới – đơn giản, phí thấp, đa dạng hóa tự động. Cổ phiếu phù hợp khi bạn đã có kinh nghiệm và sẵn sàng dành thời gian nghiên cứu. Quỹ mở là lựa chọn cuối nếu không có ETF phù hợp. Dù chọn gì, <a href="/blog/kien-thuc-dau-tu/phan-bo-tai-san-cho-nguoi-moi-quy-tac-60-30-10">phân bổ tài sản hợp lý</a> vẫn là yếu tố quyết định thành công.</p>`
    },
    {
        title: "10 Thuật Ngữ Chứng Khoán Cơ Bản Mà Nhà Đầu Tư Mới Cần Biết",
        slug: "10-thuat-ngu-chung-khoan-co-ban-nha-dau-tu-moi",
        excerpt: "Giải thích 10 thuật ngữ chứng khoán phổ biến nhất: P/E, EPS, ROE, margin, blue-chip... Bài viết dùng ngôn ngữ đơn giản, kèm ví dụ dễ hiểu.",
        category_id: KT,
        tags: ["thuật ngữ chứng khoán", "P/E", "EPS", "ROE", "kiến thức cơ bản"],
        reading_time: "9 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-14T03:00:00Z').toISOString(),
        content: `<p>Bước vào thế giới chứng khoán, bạn sẽ nghe thấy hàng loạt thuật ngữ lạ tai: P/E, EPS, ROE, margin call... Nghe như tiếng nước ngoài, nhưng thực ra mỗi thuật ngữ đều có ý nghĩa đơn giản. Bài viết này "dịch" 10 thuật ngữ quan trọng nhất sang ngôn ngữ dễ hiểu nhất.</p>

<h2>1. P/E (Price-to-Earnings Ratio) – "Bao lâu hòa vốn?"</h2>

<p>P/E là tỷ lệ giá cổ phiếu chia cho lợi nhuận trên mỗi cổ phiếu. Nói đơn giản, P/E cho biết nếu công ty giữ nguyên lợi nhuận, bạn cần bao nhiêu năm để "hòa vốn" từ lợi nhuận.</p>

<p>P/E = 15 nghĩa là bạn đang trả giá gấp 15 lần lợi nhuận hàng năm – cần 15 năm để lợi nhuận "trả lại" số tiền bạn bỏ ra (giả sử lợi nhuận không đổi). P/E thấp thường được coi là "rẻ", P/E cao là "đắt" – nhưng phải so sánh trong cùng ngành mới có ý nghĩa.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Phân tích cổ phiếu" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>2. EPS (Earnings Per Share) – "Công ty lời bao nhiêu cho mỗi cổ phiếu?"</h2>

<p>EPS = Lợi nhuận ròng / Tổng số cổ phiếu. Đây là con số cho biết phần lợi nhuận mà mỗi cổ phiếu "được hưởng". EPS tăng đều hàng năm là dấu hiệu tốt – công ty đang phát triển. EPS giảm là tín hiệu cảnh báo.</p>

<h2>3. ROE (Return On Equity) – "Công ty dùng vốn hiệu quả không?"</h2>

<p>ROE = Lợi nhuận / Vốn chủ sở hữu. ROE 20% nghĩa là cứ 100 đồng vốn, công ty tạo ra 20 đồng lợi nhuận. ROE trên 15% thường được coi là tốt. Warren Buffett thích những công ty có ROE ổn định trên 20%.</p>

<h2>4. Blue-chip – "Cổ phiếu của ông lớn"</h2>

<p>Blue-chip là cổ phiếu của các công ty lớn nhất, uy tín nhất thị trường. Tại Việt Nam, blue-chip gồm VCB, FPT, VIC, VHM, MBB... Những cổ phiếu này có thanh khoản cao, biến động ít hơn, và thường được đưa vào các quỹ <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF lớn</a>.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Blue-chip" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>5. Vốn hóa thị trường – "Công ty đáng giá bao nhiêu?"</h2>

<p>Vốn hóa = Giá cổ phiếu × Tổng số cổ phiếu. Đây là "giá trị" mà thị trường đánh giá một công ty. Vốn hóa lớn (trên 50.000 tỷ) là large-cap, trung bình (5.000-50.000 tỷ) là mid-cap, nhỏ (dưới 5.000 tỷ) là small-cap. <a href="/blog/chung-khoan/vn30-etf-danh-gia-chi-tiet-2026">VN30 ETF</a> chỉ gồm cổ phiếu large-cap.</p>

<h2>6. Margin – "Vay tiền để đầu tư"</h2>

<p>Margin là vay tiền từ công ty chứng khoán để mua thêm cổ phiếu. Ví dụ: bạn có 50 triệu, margin 1:1 cho phép mua 100 triệu cổ phiếu. Nếu cổ phiếu tăng 10%, bạn lời 10 triệu (20% trên vốn 50 triệu). Nhưng nếu giảm 10%, bạn lỗ 10 triệu – và có thể bị "margin call".</p>

<h2>7. Margin Call – "Cuộc gọi đáng sợ nhất"</h2>

<p>Margin call xảy ra khi tài sản giảm đến mức công ty chứng khoán yêu cầu bạn nộp thêm tiền hoặc bán bớt cổ phiếu. Nếu không đáp ứng, CTCK tự động bán cổ phiếu của bạn – thường ở giá rất thấp. Lời khuyên cho người mới: <strong>KHÔNG dùng margin</strong> cho đến khi có ít nhất 2-3 năm kinh nghiệm.</p>

<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop" alt="Thuật ngữ chứng khoán" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>8. Thanh khoản – "Dễ mua bán không?"</h2>

<p>Thanh khoản là khả năng mua bán một cổ phiếu nhanh chóng mà không ảnh hưởng đáng kể đến giá. Cổ phiếu VCB giao dịch hàng triệu cổ phiếu/phiên – thanh khoản cao. Cổ phiếu nhỏ chỉ vài nghìn cổ/phiên – thanh khoản thấp, có thể "kẹt hàng" khi muốn bán.</p>

<h2>9. Cổ tức (Dividend) – "Tiền chia từ lợi nhuận"</h2>

<p>Cổ tức là phần lợi nhuận công ty chia cho cổ đông. Có thể trả bằng tiền mặt hoặc cổ phiếu. Không phải công ty nào cũng trả cổ tức – nhiều công ty tăng trưởng giữ lại lợi nhuận để tái đầu tư. Cổ tức tiền mặt bị đánh thuế 5% tại Việt Nam.</p>

<h2>10. VN-Index – "Nhiệt kế thị trường"</h2>

<p>VN-Index là chỉ số tổng hợp phản ánh xu hướng chung của toàn bộ thị trường chứng khoán sàn HOSE. Khi VN-Index tăng, đa số cổ phiếu đang tăng giá. Khi VN-Index giảm, thị trường chung đang đi xuống. Đầu tư <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF theo chỉ số</a> giúp bạn "đi theo" VN-Index mà không cần chọn mã.</p>

<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop" alt="VN-Index" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>10 thuật ngữ trên là "vốn từ vựng" tối thiểu để bạn tự tin bước vào thị trường chứng khoán. Đừng cố nhớ hết một lúc – hãy quay lại bài viết này mỗi khi gặp thuật ngữ lạ. Và khi đã sẵn sàng hành động, hãy bắt đầu với <a href="/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026">hướng dẫn đầu tư ETF cho người mới</a> – nơi bạn áp dụng những kiến thức này vào thực tế.</p>`
    }
];

for (const post of posts) {
    const { data, error } = await supabase.from('posts').insert({
        ...post, created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }).select('id, title, scheduled_at');
    if (error) console.log(`❌ ${post.title}:`, error.message);
    else console.log(`✅ ${data[0].title}\n   → Scheduled: ${new Date(data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
}
console.log('\n🎉🎉🎉 HOÀN TẤT 18/18 bài viết!');
