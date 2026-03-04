import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const expandPost = async (slug, title, content, excerpt, focus_keyword) => {
    const { error } = await s.from('posts').update({
        content,
        excerpt,
        focus_keyword,
        updated_at: new Date().toISOString()
    }).eq('slug', slug);
    if (error) console.log(`❌ Error ${slug}:`, error.message);
    else console.log(`✅ Expanded: ${title} (${content.split(/\s+/).length} words)`);
};

// 29. Đọc báo cáo tài chính
const c29 = `Warren Buffett, một trong những nhà đầu tư vĩ đại nhất mọi thời đại, dành tới 80% thời gian mỗi ngày để đọc các báo cáo công ty. Ông nói: "Kế toán là ngôn ngữ của kinh doanh." Nếu bạn không thể **Đọc báo cáo tài chính**, bạn đang chơi một trò chơi mà bản thân không hiểu luật.

Đọc báo cáo tài chính không phải là việc đếm từng con số lẻ, mà là việc nhìn xuyên qua những con số để thấy "sức khỏe" thực sự của doanh nghiệp. Năm 2026, các doanh nghiệp chứng khoán Việt Nam đã minh bạch hơn bao giờ hết, và đây là cẩm nang để bạn bắt đầu.

## 1. Ba "trụ cột" của một bộ Báo cáo tài chính chuẩn

Một bộ BCTC đầy đủ (Quý hoặc Năm) sẽ bao gồm 3 bảng chính:

### Bảng cân đối kế toán (Balance Sheet)
Nó cho biết doanh nghiệp **đang có gì** (Tài sản) và **đang nợ gì** (Nguồn vốn) tại một thời điểm nhất định.
- **Công thức vàng:** Tài sản = Nợ phải trả + Vốn chủ sở hữu.
- **Lưu ý:** Hãy xem nợ ngắn hạn có lấn át tài sản ngắn hạn không. Nếu nợ quá nhiều, doanh nghiệp có nguy cơ mất thanh khoản. 

### Báo cáo kết quả hoạt động kinh doanh (P&L)
Nó cho biết doanh nghiệp **làm ăn ra sao** trong một khoảng thời gian (theo quý hoặc năm).
- Doanh thu thuần → Giá vốn hàng bán → Lợi nhuận gộp → Chi phí tài chính (lãi vay) → Lợi nhuận sau thuế.
- **Lưu ý:** Đừng chỉ nhìn vào con số lợi nhuận cuối cùng. Hãy xem lợi nhuận đó đến từ việc bán hàng (cốt lõi) hay từ việc bán đất, bán công ty con (lợi nhuận đột biến một lần).

### Báo cáo lưu chuyển tiền tệ (Cash Flow)
Đây là "huyết mạch" của công ty. Bạn có thể có lợi nhuận trên giấy tờ, nhưng nếu túi tiền trống rỗng, bạn vẫn phá sản.
- **Tiền từ hoạt động kinh doanh:** Phải lớn hơn 0 mới tốt.
- **Tiền từ hoạt động đầu tư:** Nếu là con số âm, chứng tỏ công ty đang mở rộng sản xuất, xây thêm nhà máy (tín hiệu tốt cho tương lai).

---

## 2. Năm 2026: Các chỉ số tài chính (Ratio) nhà đầu tư cần thuộc lòng

Sau khi đọc các bảng biểu, hãy dùng các con số để tính toán:

- **P/E (Price to Earnings):** Giá cổ phiếu gấp bao nhiêu lần lợi nhuận. P/E thấp thường là cổ phiếu rẻ, nhưng phải xem lý do tại sao nó rẻ. Một mức P/E 10-15 lần tại Việt Nam thường được coi là hợp lý.
- **ROE (Return on Equity):** Lợi nhuận trên vốn chủ sở hữu. ROE > 15-20% chứng tỏ doanh nghiệp dùng vốn rất hiệu quả. Đây là chỉ số quan trọng kiến tạo nên [lãi kép](/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu) bền vững.
- **Biên lợi nhuận gộp (Gross Margin):** Cho biết lợi thế cạnh tranh của sản phẩm. Một công ty có biên lợi nhuận gộp trên 30% thường là công ty có vị thế dẫn đầu thị trường.
- **Chỉ số thanh toán nhanh:** Phải lớn hơn 1 để đảm bảo doanh nghiệp không bị "ngạt thở" vì các khoản nợ đến hạn.

---

## 3. Cách phát hiện "nấu nướng" số liệu trong báo cáo

Không phải báo cáo nào cũng trung thực 100%. Hãy cảnh giác khi thấy các dấu hiệu sau:
1. **Hàng tồn kho tăng đột biến:** Nhưng doanh thu không tăng. Có thể là hàng tồn kho "ảo" hoặc không bán được.
2. **Khoản phải thu quá lớn:** Doanh thu vọt lên nhưng tiền chưa về túi mà nằm ở nợ của khách hàng. Có thể là doanh nghiệp "vẽ" doanh thu khống.
3. **Thay đổi phương pháp kế toán liên tục:** Để che giấu các khoản lỗ hoặc thổi phồng lợi nhuận.
4. **Lợi nhuận đến từ "hoạt động tài chính":** Trong khi hoạt động chính lại đang thua lỗ.

## 4. Những phần "vàng" mà nhiều nhà đầu tư bỏ qua

### Bản thuyết minh báo cáo tài chính
Đây là nơi công ty giải thích chi tiết các con số. Tại sao khoản nợ lại tăng 500 tỷ? Công ty đang vay ở ngân hàng nào? Lãi suất bao nhiêu? Mọi câu trả lời đều nằm ở đây.

### Báo cáo của đơn vị kiểm toán
Hãy ưu tiên các doanh nghiệp được kiểm toán bởi nhóm **Big 4** (PwC, Deloitte, KPMG, EY) để đảm bảo độ tin cậy cao nhất của số liệu. Nếu kiểm toán có các ý kiến "ngoại trừ" hoặc "nghi ngờ khả năng hoạt động liên tục", hãy tránh xa cổ phiếu đó ngay lập tức.

### Báo cáo thường niên (Annual Report)
Đọc để hiểu về tầm nhìn của Ban lãnh đạo, chiến lược 5 năm tới và các dự án trọng điểm đang triển khai.

---

## Những câu hỏi thường gặp (FAQ)

**Mất bao lâu để đọc xong một bộ báo cáo tài chính?**
Với người mới, có thể mất cả buổi chiều. Nhưng sau khi quen, bạn chỉ cần 30 phút để "quét" qua những điểm quan trọng nhất. Hãy sử dụng các phần mềm [phân tích chứng khoán](/blog/chung-khoan/phan-tich-co-ban-chung-khoan-phan-mem) để hỗ trợ tính toán nhanh các chỉ số.

**Tại sao lợi nhuận công ty tăng 50% mà giá cổ phiếu vẫn giảm?**
Thị trường chứng khoán là thị trường của **Kỳ Vọng**. Nếu nhà đầu tư đã dự kiến lợi nhuận phải tăng 100%, thì 50% vẫn bị coi là thất vọng. Hoặc đôi khi vĩ mô xấu ([lãi suất tăng](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu)) làm giảm định giá của toàn bộ ngành.

**Nên đọc báo cáo hợp nhất hay báo cáo công ty mẹ?**
Luôn ưu tiên đọc **Báo cáo tài chính hợp nhất**. Nó phản ánh toàn bộ sức mạnh của công ty mẹ và tất cả các công ty con trong hệ sinh thái của họ.

## Kết luận

Đọc báo cáo tài chính là bước đi đầu tiên để bạn thoát khỏi cái mác "F0" ngây thơ và chuyển mình thành một nhà đầu tư nội lực. Đừng sợ hãi những con số khô khan, chúng đang cố gắng nói với bạn về sự thật đằng sau những biểu đồ [phân tích kỹ thuật nến Nhật](/blog/forex/phan-tich-ky-thuat-forex-5-mo-hinh-nen-co-ban).

Hãy trang bị cho mình kiến thức thật tốt trước khi bước chân vào con đường [tự do tài chính FIRE](/blog/tai-chinh-ca-nhan/fire-movement-nghi-huoc-som-tuoi-40). Chúc bạn có những quyết định đầu tư sáng suốt dựa trên nền tảng vững chắc!

---
*Lưu ý: Phân tích số liệu cần sự tỉ mỉ và liên tục cập nhật. Nội dung trên mang tính chất giáo dục.*`;

// 31. Phân tích cơ bản
const c31 = `Phân tích cơ bản (Fundamental Analysis - FA) là quá trình xác định giá trị thực của một tài sản dựa trên các yếu tố kinh tế, tài chính và định hướng phát triển của doanh nghiệp. Nếu [phân tích kỹ thuật](/blog/chung-khoan/phan-tich-ky-thuat-chung-khoan-co-ban) giúp bạn chọn "thời điểm", thì phân tích cơ bản giúp bạn chọn "đúng người".

Để thành công vang dội trên thị trường tài chính 2026, bạn không thể bỏ qua sức mạnh của các **Phần mềm phân tích cơ bản** giúp rút ngắn thời gian xử lý dữ liệu hàng ngàn doanh nghiệp chỉ trong một cú nhấp chuột.

## 1. Ba cấp độ của Phân tích cơ bản (Top-Down Approach)

Các chuyên gia hàng đầu thường phân tích theo trình tự từ trên xuống dưới:

- **Cấp độ 1: Phân tích Vĩ mô:** Đánh giá [lãi suất, lạm phát, tỷ giá](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu) để xem dòng tiền đang chảy về đâu.
- **Cấp độ 2: Phân tích Ngành:** Tìm kiếm những ngành nghề được hưởng lợi (ví dụ [Xu hướng AI](/blog/kien-thuc-dau-tu/dau-tu-xu-huong-ai-cong-nghe-2026) hay đầu tư công).
- **Cấp độ 3: Phân tích Doanh nghiệp:** Đây là lúc bạn đi sâu vào [đọc báo cáo tài chính](/blog/chung-khoan/cach-doc-bao-cao-tai-chi-doanh-nghiep) để lọc ra "siêu cổ phiếu".

## 2. Các chỉ số FA "Chất lỏng" nhà đầu tư cần nắm vững

Trong năm 2026, thay vì chỉ xem P/E hay EPS đơn thuần, hãy tập trung vào:
1. **Giá trị sổ sách (P/B):** Cực kỳ quan trọng khi phân tích ngân hàng và công ty bất động sản.
2. **Cổ tức tiền mặt (Dividend Yield):** Bí quyết để xây dựng [dòng tiền thụ động hưu trí](/blog/chung-khoan/dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong).
3. **Moat (Lợi thế cạnh tranh):** Doanh nghiệp có điều gì đặc biệt mà đối thủ không thể sao chép? (Ví dụ: Thương hiệu, Bằng sáng chế, Hạ tầng độc quyền).

---

## 3. Top 5 Phần mềm Phân tích Cơ bản tốt nhất 2026

Đừng làm việc thủ công nữa, hãy dùng các công cụ sau:
- **Fianda / FiinTrade:** Nền tảng phân tích mã nguồn Việt Nam chuyên nghiệp nhất hiện nay. Nó giúp bạn lọc nhanh cổ phiếu theo hàng trăm tiêu chí FA.
- **TCAnalysis (Của TCBS):** Cung cấp các biểu đồ tài chính trực quan, so sánh các doanh nghiệp cùng ngành chỉ trong 1 giây.
- **Simply Wall St:** Một ứng dụng quốc tế giúp trực quan hóa dữ liệu tài chính dưới dạng "Bông tuyết" cực kỳ dễ hiểu cho người mới.
- **Investing.com:** Cập nhật tin tức vĩ mô và kết quả kinh doanh định kỳ của các tập đoàn toàn cầu.
- **FireAnt:** Cộng đồng và dữ liệu tài chính lớn nhất cho các nhà đầu tư cá nhân trên di động.

---

## 4. Quy trình 4 bước để định giá một cổ phiếu

Làm sao để biết cổ phiếu đang đắt hay rẻ? Bạn có thể dùng 2 phương pháp kinh điển:
1. **Phương pháp so sánh (P/E & P/B):** So sánh chỉ số của doanh nghiệp với trung bình ngành. Nếu thấp hơn một cách vô lý trong khi kết quả kinh doanh vẫn tốt, đó là cơ hội mua.
2. **Phương pháp chiết khấu dòng tiền (DCF):** Dự báo số tiền doanh nghiệp làm ra trong 10 năm tới và đưa về giá trị hiện tại. Phương pháp này chính xác nhất nhưng yêu cầu trình độ tính toán cao.
3. **Mô hình định giá tài sản ròng (NAV):** Thường dùng riêng cho các công ty Bất động sản.

## 5. Những sai lầm thường gặp khi dùng phân tích cơ bản

- **Chỉ nhìn vào quá khứ:** BCTC là dữ liệu của quá khứ. Giá cổ phiếu phản ánh **tương lai**. Đừng chỉ mua vì lãi năm ngoái cao, hãy mua vì doanh nghiệp chuẩn bị có dự án mới, nhà máy mới hoạt động.
- **Bỏ qua quản trị rủi ro:** Một công ty tốt vẫn có thể bị "ngã ngựa" nếu vĩ mô quay đầu hoặc lãnh đạo có bê bối pháp lý. Luôn duy trì [danh mục đa dạng](/blog/kien-thuc-dau-tu/quan-ly-roi-ro-danh-muc-dau-tu-hieu-qua).
- **Lạm dụng đòn bẩy:** Phân tích FA cần thời gian dài để "thấm giá". Dùng [Margin](/blog/chung-khoan/margin-la-gi-don-bay-chung-khoan) quá cao sẽ khiến bạn bị Force Sell trước khi phân tích của mình kịp đúng.

## Những câu hỏi thường gặp (FAQ)

**Phân tích cơ bản có cần giỏi toán không?**
Bạn chỉ cần biết các phép toán cộng trừ nhân chia cơ bản. Quan trọng nhất là **Tư duy Logic** để kết nối các sự kiện kinh tế lại với nhau. Phần còn lại hãy để phần mềm tính hộ.

**Tôi nên phân tích cơ bản hàng ngày hay hàng quý?**
Hãy cập nhật hàng quý khi báo cáo tài chính mới ra lò và hàng ngày cho các tin tức thời sự có thể thay đổi cục diện doanh nghiệp (như thay đổi chính sách ngành).

**Nên tin vào các dự báo của phần mềm không?**
Các dự báo chỉ mang tính tham khảo dựa trên thuật toán. Hãy luôn kiểm tra lại bằng tư duy phản biện cá nhân của bạn.

## Kết luận

Phân tích cơ bản là "gốc rễ" của mọi khoản đầu tư triệu đô. Nó giúp bạn ngủ ngon hơn khi thị trường bão táp vì bạn biết mình đang nắm giữ giá trị thực. Hãy bắt đầu sử dụng các phần mềm phân tích để nâng cao hiệu suất đầu tư của bạn ngay hôm nay!

Chúc bạn luôn tìm được những "viên kim cương" ẩn giấu trong núi dữ liệu tài chính!

---
*Lưu ý: Đầu tư tài chính luôn có rủi ro. Các công cụ hỗ trợ không thay thế được trách nhiệm quyết định cá nhân.*`;

await expandPost('cach-doc-bao-cao-tai-chi-doanh-nghiep', 'Đọc báo cáo tài chính', c29, 'Hướng dẫn chi tiết cách đọc báo cáo tài chính doanh nghiệp năm 2026: Phân tích bảng cân đối kế toán, P&L, lưu chuyển tiền tệ và cách phát hiện số liệu ảo để đầu tư an toàn.', 'đọc báo cáo tài chính');
await expandPost('phan-tich-co-ban-chung-khoan-phan-mem', 'Phân tích cơ bản', c31, 'Tìm hiểu Phân tích cơ bản (FA) và các phần mềm hỗ trợ định giá cổ phiếu hàng đầu 2026. Cách kết hợp chỉ số tài chính và vĩ mô để chọn siêu cổ phiếu tăng trưởng dài hạn.', 'phân tích cơ bản chứng khoán');
