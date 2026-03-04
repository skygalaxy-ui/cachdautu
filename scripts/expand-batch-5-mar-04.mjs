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

// 34. Cách theo dõi NAV và hiệu suất quỹ ETF
const c34 = `Khi đầu tư vào [quỹ ETF](/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf), có một chỉ số quan trọng hơn cả giá thị trường mà bạn phải biết: **NAV (Net Asset Value) — Giá trị tài sản ròng**. Hiểu và theo dõi NAV chính là chìa khóa để biết bạn đang mua "đúng giá" hay đang bị hớ.

Năm 2026, các công cụ trực tuyến giúp việc theo dõi hiệu suất quỹ trở nên vô cùng đơn giản. Bài viết này sẽ hướng dẫn bạn cách đọc chỉ số NAV và đánh giá hiệu quả đầu tư một cách chuyên nghiệp.

## 1. NAV là gì? Tại sao nó khác với giá thị trường?

**NAV (Net Asset Value)** là tổng giá trị thị trường của tất cả cổ phiếu trong danh mục của quỹ trừ đi các khoản nợ, sau đó chia cho tổng số chứng chỉ quỹ đang lưu hành.

- **NAV:** Phản ánh "giá trị thực" của chứng chỉ quỹ dựa trên tài sản gốc.
- **Giá thị trường (Market Price):** Là giá bạn thấy nhảy múa trên bảng điện chứng khoán, do cung và cầu quyết định.

**Tại sao có sự chênh lệch?**
- Nếu Giá > NAV: Chứng chỉ quỹ đang được giao dịch ở mức **Premium (Thặng dư)**. Nhà đầu tư đang kỳ vọng rất cao vào tương lai của quỹ.
- Nếu Giá < NAV: Chứng chỉ quỹ đang ở mức **Discount (Chiết khấu)**. Đây có thể là cơ hội mua rẻ, nhưng cũng có thể là dấu hiệu thị trường đang lo ngại về danh mục của quỹ.

## 2. Cách theo dõi NAV hàng ngày năm 2026

Bạn không cần tự tính toán thủ công. Có 3 nguồn dữ liệu uy tín nhất:
1. **Website của Công ty quản lý quỹ:** (Ví dụ: dragoncapital.com.vn cho [Diamond ETF](/blog/kien-thuc-dau-tu/diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai)). Dữ liệu tại đây là chính xác và chính thống nhất.
2. **Website của Sở Giao dịch Chứng khoán (HOSE):** Cập nhật NAV của tất cả các quỹ ETF niêm yết hàng ngày sau giờ giao dịch.
3. **Các App tài chính chuyên sâu:** Fianda, FireAnt hay TradingView. Các app này cung cấp biểu đồ so sánh giữa Giá và NAV để bạn thấy được mức độ thặng dư/chiết khấu theo thời gian.

---

## 3. Các chỉ số đánh giá hiệu quả (Performance Metrics)

Để biết quỹ ETF của bạn có đang làm việc tốt hay không, hãy nhìn vào 3 chỉ số sau:

### Tỷ suất lợi nhuận (Return)
So sánh lợi nhuận của quỹ trong các khoảng thời gian: 1 tháng, 6 tháng, 1 năm và từ khi thành lập (Inception). Hãy so sánh nó với chỉ số tham chiếu (Benchmark) như VN30. 

### Sai số bám đuổi (Tracking Error)
Đây là "bài kiểm tra" năng lực quản trị. Một quỹ ETF tốt phải có Tracking Error cực thấp (thường < 0.5%). Nếu chỉ số VN30 tăng 10% nhưng quỹ chỉ tăng 8%, chứng tỏ quỹ đang vận hành kém hiệu quả hoặc [chi phí quản lý](/blog/kien-thuc-dau-tu/so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026) quá cao.

### Chỉ số hiệu quả theo rủi ro (Sharpe Ratio)
Chỉ số này cho biết bạn nhận được bao nhiêu lợi nhuận trên mỗi đơn vị rủi ro. Sharpe Ratio > 1 được coi là tốt, > 2 là xuất sắc.

## 4. Năm 2026: Ứng dụng AI trong theo dõi danh mục

Công nghệ AI năm 2026 đã cho phép nhà đầu tư cá nhân:
- Nhận thông báo tự động khi Giá và NAV lệch nhau quá 1% (Cơ hội kinh doanh chênh lệch giá - Arbitrage).
- Dự báo biến động NAV dựa trên tin tức [kinh tế vĩ mô](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu) và các biến động của thị trường Mỹ.
- Tự động hóa [chiến lược DCA](/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia) khi NAV ở vùng chiết khấu hấp dẫn.

---

## 5. Những lưu ý khi đọc báo cáo hiệu suất quỹ

- **Cảnh giác với lợi nhuận ảo:** Một số quỹ có thể có lợi nhuận đột biến trong 1 năm nhưng lại thua lỗ trong 5 năm trước đó. Hãy luôn nhìn vào **Lợi nhuận lũy kế dài hạn**.
- **Phí ẩn:** Một số báo cáo hiệu suất chưa trừ phí quản lý và phí vận hành. Hãy đọc kỹ phần Thuyết minh của quỹ.
- **Tần suất cập nhật:** NAV của ETF được cập nhật hàng ngày, nhưng NAV của [quỹ mở](/blog/kien-thuc-dau-tu/dau-tu-quy-mo-tai-viet-nam-2026) có thể chỉ cập nhật 1-2 lần/tuần.

## Những câu hỏi thường gặp (FAQ)

**Tại sao NAV lại giảm trong khi danh mục cổ phiếu vẫn tăng nhẹ?**
Có thể do các khoản nợ của quỹ tăng lên hoặc do quỹ thực hiện chi trả cổ tức tiền mặt cho nhà đầu tư. Khi đó, giá trị tài sản ròng sẽ giảm tương ứng với số tiền đã chi ra.

**Làm sao để biết quỹ ETF có bị "rút vốn" không?**
Hãy theo dõi số lượng chứng chỉ quỹ đang lưu hành (Shares Outstanding). Nếu số lượng này giảm liên tục, chứng tỏ nhà đầu tư đang thực hiện lệnh bán lại (Redemption) và quỹ đang thu hẹp quy mô.

**NAV có phải là giá để tôi đặt lệnh mua trên sàn không?**
Không. Bạn đặt lệnh mua theo giá thị trường (với mã FUEVFVND, E1VFVN30...). Tuy nhiên, bạn nên tham chiếu NAV gần nhất để biết mình có đang mua quá đắt so với giá trị thực hay không.

## Kết luận

Theo dõi NAV và hiệu suất quỹ là bước đi của một nhà đầu tư chuyên nghiệp. Đừng chỉ nhìn vào màu Xanh - Đỏ trên bảng điện, hãy nhìn vào bản chất của tài sản bạn đang nắm giữ. Khi bạn làm chủ được các con số, bạn sẽ có sự kiên định để đạt được mục tiêu [tự do tài chính FIRE](/blog/tai-chinh-ca-nhan/fire-movement-nghi-huoc-som-tuoi-40).

Chúc bạn có những thương vụ đầu tư hiệu quả và an tâm!

---
*Lưu ý: Dữ liệu NAV mang tính chất tham khảo. Hãy kiểm tra tại nguồn chính thức của công ty quản lý quỹ.*`;

// 35. ETF quốc tế: Có nên đầu tư S&P 500 từ Việt Nam?
const c35 = `Bạn có muốn trở thành "cổ đông" của Apple, Microsoft, Amazon hay Tesla? Trong thế giới tài chính phẳng năm 2026, giấc mơ sở hữu những tập đoàn vĩ đại nhất hành tinh đã không còn xa vời với nhà đầu tư Việt Nam. **ETF quốc tế (đặc biệt là S&P 500)** chính là "tấm vé thông hành" để bạn tham gia vào thị trường chứng khoán lớn nhất thế giới.

Bài viết này sẽ phân tích chi tiết cơ hội, rủi ro và cách thức để bạn đầu tư vào Mỹ ngay từ chiếc smartphone của mình tại Việt Nam.

## 1. S&P 500 là gì? Tại sao mọi tỷ phú đều khuyên đầu tư vào nó?

S&P 500 là chỉ số bao gồm 500 công ty có vốn hóa lớn nhất được niêm yết tại Mỹ. Nó đại diện cho sức khỏe của nền kinh tế số 1 thế giới.
- **Hiệu suất lịch sử:** Trong 90 năm qua, S&P 500 mang lại lợi nhuận trung bình khoảng **10%/năm**.
- **Sự tự đào thải:** Những công ty yếu kém sẽ bị loại bỏ và những ngôi sao mới (như các công ty [xu hướng AI](/blog/kien-thuc-dau-tu/dau-tu-xu-huong-ai-cong-nghe-2026)) sẽ được thêm vào.
- **Lời khuyên của Warren Buffett:** Ông đã di chúc rằng 90% số tiền của gia đình mình sau khi ông qua đời nên được đổ vào quỹ chỉ số S&P 500 chi phí thấp.

## 2. Cách đầu tư S&P 500 từ Việt Nam năm 2026

Hiện nay có 3 con đường chính để bạn tiếp cận thị trường Mỹ:

### Đường 1: Các App đầu tư Fintech (Phổ biến nhất)
Năm 2026, các ứng dụng như eToro, Interactive Brokers hay các đối tác Việt Nam liên kết với sàn Mỹ cho phép bạn mua chứng chỉ quỹ như **VOO (Vanguard) hoặc SPY (SPDR)** chỉ với vài trăm USD. Ưu điểm là hỗ trợ nạp rút tiền tiện lợi.

### Đường 2: Quỹ ETF quốc tế mô phỏng Việt Nam
Một số công ty quản lý quỹ tại Việt Nam đã phát hành các quỹ rổ đầu tư ra nước ngoài hoặc các quỹ "Feeder Fund" (quỹ mẹ mua quỹ con tại Mỹ). Đây là cách an toàn nhất về mặt pháp lý và thuế vụ cho người Việt.

### Đường 3: Hợp đồng chênh lệch (CFD)
Đây là cách dành cho những ai thích lướt sóng ngắn hạn với đòn bẩy cao. Tuy nhiên rủi ro cực lớn và không được khuyến khích cho mục đích [tích sản lâu dài](/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu).

---

## 3. Ưu và Nhược điểm khi "đánh bắt xa bờ"

### Ưu điểm:
- **Đa dạng hóa toàn cầu:** Khi thị trường Việt Nam đi xuống, thị trường Mỹ có thể đi ngang hoặc tăng. Đây là cách [quản trị rủi ro danh mục](/blog/kien-thuc-dau-tu/quan-ly-roi-ro-danh-muc-dau-tu-hieu-qua) cấp độ quốc tế.
- **Sở hữu đồng USD:** Bạn đang nắm giữ tài sản bằng đồng tiền mạnh nhất thế giới, giúp bảo vệ tài sản trước sự mất giá của nội tệ.
- **Công cụ minh bạch:** Thị trường Mỹ có luật lệ khắt khe nhất, bảo vệ nhà đầu tư cá nhân cực kỳ tốt.

### Nhược điểm:
- **Rủi ro tỷ giá:** Nếu đồng VNĐ mạnh lên so với USD, lợi nhuận của bạn sẽ bị sụt giảm khi quy đổi về tiền Việt.
- **Rào cản pháp lý và Thuế:** Bạn phải đóng thuế thu nhập tại Mỹ (thường là 15-30% cho cổ tức) và tuân thủ các quy định chuyển tiền ra nước ngoài của Ngân hàng Nhà nước Việt Nam.
- **Lệch múi giờ:** Thị trường Mỹ mở cửa vào ban đêm tại Việt Nam, gây khó khăn cho việc theo dõi bảng điện trực tiếp.

---

## 4. Năm 2026: Những "ngôi sao" ETF quốc tế bạn nên biết

Bên cạnh S&P 500, bạn có thể cân nhắc:
- **QQQ (Invesco QQQ):** Tập trung vào 100 công ty công nghệ lớn nhất Nasdaq. Phù hợp cho ai tin vào [cách mạng AI](/blog/kien-thuc-dau-tu/dau-tu-xu-huong-ai-cong-nghe-2026).
- **VTI (Vanguard Total Stock Market):** Sở hữu toàn bộ thị trường chứng Khoán Mỹ (hơn 3000 mã).
- **VNM (VanEck Vietnam ETF):** Một quỹ quốc tế nhưng lại đầu tư ngược vào các công ty Việt Nam (dành cho khối ngoại và Việt Kiều).

## 5. Chiến lược đầu tư thông minh cho người bận rộn

Đừng cố gắng dự báo khi nào FED [tăng hay giảm lãi suất](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu). Hãy áp dụng:
1. **Chiến lược DCA:** Đều đặn mỗi tháng trích 5-10 triệu đồng mua VOO.
2. **Tư duy 10 năm:** Xem đây là khoản tiết kiệm cho con đi du học hoặc quỹ hưu trí.
3. **Luôn có [quỹ khẩn cấp](/blog/tai-chinh-ca-nhan/quy-khan-cap-tai-sao-can-xay-dung):** Bằng tiền Việt để chi tiêu hàng ngày, tránh việc phải bán tháo tài sản quốc tế khi kẹt tiền.

## Những câu hỏi thường gặp (FAQ)

**Đầu tư S&P 500 tại Việt Nam có hợp pháp không?**
Hiện nay pháp luật Việt Nam vẫn còn những hạn chế về việc cá nhân tự ý chuyển tiền ra nước ngoài đầu tư trực tiếp. Tuy nhiên, việc đầu tư thông qua các định chế tài chính trung gian hoặc các quỹ được cấp phép là hoàn toàn hợp pháp và an toàn.

**Bao nhiêu tiền thì bắt đầu mua được cổ phiếu Mỹ?**
Nhờ tính năng "Fractional Shares" (Cổ phiếu lẻ) của các app năm 2026, bạn có thể mua Apple hay Microsoft chỉ với **1 USD**. Không cần phải mua cả một cổ phiếu đắt đỏ.

**Nếu App đầu tư sụp đổ thì tiền của tôi đi đâu?**
Hãy chọn các sàn có bảo hiểm ký quỹ (SIPIC) lên tới 500.000 USD tại Mỹ. Ngay cả khi sàn phá sản, cổ phiếu của bạn vẫn được lưu ký tại trung tâm độc lập và sẽ được chuyển trả cho bạn.

## Kết luận

Đầu tư ETF quốc tế là bước đi của một công dân toàn cầu. Nó không chỉ mang lại lợi nhuận mà còn mở rộng tầm nhìn của bạn về nền kinh tế toàn cầu. Hãy bắt đầu từ một số vốn nhỏ, học cách [đọc báo cáo tài chính quốc tế](/blog/chung-khoan/cach-doc-bao-cao-tai-chi-doanh-nghiep) và kiên trì với mục tiêu của mình. 

Tương lai thịnh vượng không có biên giới. Chúc bạn thành công!

---
*Lưu ý: Đầu tư quốc tế có rủi ro tỷ giá và pháp lý. Hãy tìm hiểu kỹ trước khi tham gia.*`;

// 36. Phân biệt Coupon Rate vs YTM vs Current Yield
const c36 = `Khi bước chân vào thị trường **Trái phiếu** năm 2026, bạn sẽ bị bủa vây bởi hàng loạt thuật ngữ về lãi suất: Coupon, YTM, Current Yield... Nếu không phân biệt rõ các loại lợi suất này, bạn rất dễ bị các nhân viên tư vấn "dắt mũi" bằng những con số lợi nhuận ảo.

Bài viết này sẽ "giải mã" 3 loại lợi suất trái phiếu quan trọng nhất theo cách đơn giản và trực quan nhất.

## 1. Coupon Rate (Lãi suất danh nghĩa) - Lời hứa ban đầu

Đây là con số được in trực tiếp trên tờ trái phiếu khi phát hành. 
- **Đặc điểm:** Cố định suốt đời hạn của trái phiếu (thường là vậy). 
- **Ví dụ:** Bạn mua trái phiếu doanh nghiệp mệnh giá 100 triệu, Coupon Rate 10%/năm. Nghĩa là mỗi năm bạn chắc chắn nhận được 10 triệu đồng tiền lãi cho đến khi đáo hạn.

## 2. Current Yield (Lợi suất hiện hành) - Con số thực tế hàng ngày

Current Yield phản ánh lợi nhuận bạn nhận được dựa trên **giá thị trường hiện tại** của trái phiếu, thay vì giá gốc (mệnh giá).

> **Công thức:** Current Yield = Tiền lãi hàng năm / Giá thị trường hiện tại.

**Tại sao nó thay đổi?**
Khi [lãi suất ngân hàng tăng](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu), giá trái phiếu trên sàn thường giảm xuống. 
- Giả sử giá trái phiếu 100 triệu giảm còn 90 triệu. 
- Tiền lãi vẫn là 10 triệu.
- Current Yield = 10 / 90 = **11.11%**. 
Nghĩa là dù lãi suất gốc là 10%, nhưng nếu bạn mua lúc giá rẻ, lợi suất thực tế của bạn sẽ cao hơn.

---

## 3. Yield to Maturity (YTM - Lợi suất đáo hạn) - Chỉ số quan trọng nhất

YTM là tổng tỷ suất lợi nhuận kỳ vọng của bạn nếu bạn mua trái phiếu ở giá hiện tại và **nắm giữ cho đến ngày đáo hạn**. Nó tính đến:
1. Toàn bộ tiền lãi sẽ nhận được.
2. Sự chênh lệch giữa giá mua và mệnh giá nhận lại khi hết hạn.
3. [Sức mạnh lãi kép](/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu) từ việc tái đầu tư tiền lãi.

Đây là chỉ số "vàng" để bạn so sánh giữa hai trái phiếu khác nhau xem cái nào thực sự mang lại nhiều tiền hơn. Xem thêm: [Cách tính YTM chuẩn xác](/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity).

---

## 4. Bảng so sánh nhanh 3 loại lợi suất

| Tiêu chí | Coupon Rate | Current Yield | Yield to Maturity (YTM) |
|---|---|---|---|
| **Căn cứ tính** | Mệnh giá (Par Value) | Giá thị trường hiện tại | Giá hiện tại + Thời gian giữ |
| **Giá trị** | Thường không đổi | Thay đổi theo giá | Thay đổi theo giá & thời gian |
| **Ý nghĩa** | Số tiền lãi chắc chắn nhận | Lợi nhuận tức thời | Lợi nhuận tổng thể đến cuối |
| **Sử dụng khi** | Mới phát hành | Giao dịch trên sàn | Định giá đầu tư dài hạn |

## 5. Mối quan hệ giữa Giá trái phiếu và Lợi suất

Có một quy tắc bất di bất dịch trong tài chính: **Giá và Lợi suất luôn đi ngược chiều nhau.**
- Khi thị trường khởi sắc, lãi suất giảm → Giá trái phiếu tăng → Lợi suất bạn nhận được sẽ giảm. 
- Khi thị trường xấu, rủi ro cao → Giá trái phiếu giảm sâu → Lợi suất (YTM) sẽ tăng vọt để bù đắp rủi ro cho nhà đầu tư dũng cảm.

Năm 2026, khi đầu tư vào [quỹ mở trái phiếu](/blog/kien-thuc-dau-tu/dau-tu-quy-mo-tai-viet-nam-2026), bạn không cần tự tính các số này vì App sẽ hiển thị sẵn. Tuy nhiên, hiểu bản chất sẽ giúp bạn biết khi nào nên "bắt đáy" trái phiếu.

## Những câu hỏi thường gặp (FAQ)

**Tại sao YTM của một số trái phiếu doanh nghiệp lên tới 20-30%?**
Đó là tín hiệu báo động đỏ. YTM quá cao chứng tỏ rủi ro doanh nghiệp vỡ nợ là rất lớn nên giá trái phiếu bị bán tháo. Đừng tham lời mà mất vốn gốc. Hãy xem [cách quản trị rủi ro danh mục](/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua).

**Tôi nên quan tâm đến chỉ số nào nhất?**
Với nhà đầu tư dài hạn, hãy quan tâm đến **YTM**. Nó phản ánh bức tranh toàn diện nhất về khoản đầu tư của bạn.

**Cổ tức chứng khoán có giống Coupon trái phiếu không?**
Không. Cổ tức của [cổ phiếu cổ tức](/blog/chung-khoan/dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong) không cố định và phụ thuộc vào kết quả kinh doanh của công ty. Coupon trái phiếu là một cam kết nợ bắt buộc.

## Kết luận

Thao túng được các loại lợi suất trái phiếu chính là bước ngoặt giúp bạn trở thành nhà đầu tư chuyên nghiệp. Hãy luôn tỉnh táo trước những con số "lãi suất khủng" và luôn kiểm tra YTM thực tế trước khi xuống tiền. 

Đừng quên kết hợp với kiến thức về [đọc báo cáo tài chính doanh nghiệp](/blog/chung-khoan/cach-doc-bao-cao-tai-chi-doanh-nghiep) phát hành trái phiếu để đảm bảo họ có đủ khả năng trả nợ cho bạn. Chúc bạn thành công và thịnh vượng!

---
*Lưu ý: Nội dung mang tính giáo dục tài chính. Hãy tham vấn chuyên gia trước khi thực hiện các giao dịch trái phiếu giá trị lớn.*`;

await expandPost('cach-theo-doi-nav-hieu-suat-quy-etf', 'Cách theo dõi NAV quỹ ETF', c34, 'Hướng dẫn theo dõi NAV và hiệu suất quỹ ETF năm 2026: Phân biệt giá thị trường vs NAV, cách tính Tracking Error và các công cụ AI hỗ trợ đánh giá quỹ chuyên nghiệp.', 'cách theo dõi NAV quỹ ETF');
await expandPost('etf-quoc-te-co-nen-dau-tu-sp500-tu-viet-nam', 'ETF quốc tế S&P 500', c35, 'Có nên đầu tư S&P 500 từ Việt Nam năm 2026? Phân tích cơ hội sở hữu Apple, Tesla qua quỹ ETF quốc tế, rủi ro tỷ giá và hướng dẫn cách mua an toàn nhất.', 'đầu tư S&P 500 từ Việt Nam');
await expandPost('coupon-rate-vs-ytm-vs-current-yield', 'Phân biệt lợi suất trái phiếu', c36, 'Hiểu rõ Coupon Rate, YTM và Current Yield trong đầu tư trái phiếu 2026. Hướng dẫn cách tính lợi suất thực tế và mối quan hệ nghịch đảo giữa giá trái phiếu vs lãi suất.', 'lợi suất trái phiếu YTM là gì');
