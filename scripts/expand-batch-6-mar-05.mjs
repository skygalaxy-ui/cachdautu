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

// 37. Duration trái phiếu là gì?
const c37 = `Trong giới đầu tư trái phiếu chuyên nghiệp năm 2026, có một chỉ số được coi là "thước đo nỗi sợ" đối với sự thay đổi lãi suất, đó chính là **Duration (Độ nhạy thời gian)**. Nếu bạn nắm giữ trái phiếu mà không hiểu về Duration, bạn đang lái xe trong sương mù mà không biết khi nào "cú sốc" lãi suất sẽ làm nổ lốp xe của mình.

Bài viết này sẽ giúp bạn hiểu Duration một cách đơn giản nhất và cách dùng nó để bảo vệ túi tiền của mình.

## 1. Duration là gì? Tại sao nó không phải là "Kỳ hạn"?

Đừng nhầm lẫn giữa **Kỳ hạn (Maturity)** và **Duration**.
- **Kỳ hạn:** Là thời gian từ bây giờ đến lúc bạn nhận lại vốn gốc (ví dụ 10 năm).
- **Duration:** Là thời gian trung bình để bạn thu hồi lại toàn bộ dòng tiền (cả lãi và gốc). 

**Quy tắc ngón tay cái:** Duration càng lớn, giá trái phiếu càng nhạy cảm (biến động mạnh) khi lãi suất thay đổi. Nếu lãi suất tăng 1%, giá một trái phiếu có Duration là 5 năm sẽ giảm khoảng 5%.

## 2. Phân loại Duration bạn cần biết

Năm 2026, các phần mềm đầu tư thường hiển thị 2 loại chỉ số này:

### Macaulay Duration
Tính toán thời gian trung bình (tính bằng năm) để nhà đầu tư nhận lại tiền của mình. Đây là nền tảng toán học nhưng ít được dùng trong thực tế giao dịch hàng ngày.

### Modified Duration (Duration hiệu chỉnh)
Đây mới là chỉ số các nhà đầu tư chứng khoán chuyên nghiệp quan tâm. Nó đo lường trực tiếp phần trăm thay đổi của giá trái phiếu khi lãi suất biến động. 

---

## 3. Tại sao người mới phải hiểu Duration?

Hãy tưởng tượng bạn đang sống trong giai đoạn [kinh tế vĩ mô biến động](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu) và Ngân hàng Trung ương chuẩn bị tăng lãi suất:
- **Nếu bạn giữ trái phiếu có Duration cao (ví dụ 8-10 năm):** Danh mục của bạn sẽ sụt giảm giá trị rất nặng nề.
- **Nếu bạn giữ trái phiếu có Duration thấp (ví dụ 1-2 năm):** Bạn hầu như không bị ảnh hưởng và có thể sớm tái đầu tư ở mức lãi suất mới cao hơn.

Đây là bí quyết để các quỹ lớn [quản trị rủi ro danh mục](/blog/kien-thuc-dau-tu/quan-ly-roi-ro-danh-muc-dau-tu-hieu-qua) luôn thắng thị trường.

---

## 4. Cách sử dụng Duration để tối ưu hóa lợi nhuận

Năm 2026, chiến lược phù hợp là:
1. **Dự báo lãi suất giảm:** Hãy mua trái phiếu có **Duration dài**. Khi lãi suất giảm, giá trái phiếu của bạn sẽ tăng vọt mạnh hơn các loại khác.
2. **Dự báo lãi suất tăng:** Hãy chuyển sang các loại trái phiếu có **Duration ngắn** hoặc gửi tiết kiệm linh hoạt để chờ đợi cơ hội.
3. **Chiến lược phòng vệ:** Luôn duy trì một danh mục có Duration trung bình (khoảng 3-4 năm) để cân bằng giữa lợi nhuận và biến động.

## 5. Mối quan hệ giữa Coupon và Duration

Bạn có biết? Những trái phiếu có [Coupon Rate (Lãi suất danh nghĩa)](/blog/kien-thuc-dau-tu/coupon-rate-vs-ytm-vs-current-yield) càng cao thì Duration thường càng thấp. Tại sao? Vì bạn nhận được nhiều tiền lãi sớm hơn qua các kỳ trả lãi, làm rút ngắn thời gian thu hồi vốn thực tế.

Do đó, các loại trái phiếu "Zero Coupon" (không trả lãi định kỳ) là những loại có rủi ro lãi suất (Duration) cao nhất thị trường.

## Những câu hỏi thường gặp (FAQ)

**Làm sao để biết Duration của một trái phiếu đang niêm yết?**
Bạn không cần tự tính. Hãy truy cập website của các bên cung cấp dữ liệu như Fianda hoặc bảng cáo bạch của các [Quỹ mở trái phiếu](/blog/kien-thuc-dau-tu/dau-tu-quy-mo-tai-viet-nam-2026). Họ luôn công bố "Thời gian đáo hạn bình quân" (Average Duration) của cả danh mục quỹ.

**Duration có thay đổi theo thời gian không?**
Có. Khi thời gian trôi qua, trái phiếu càng gần ngày đáo hạn thì Duration của nó sẽ giảm dần về 0.

**Tại sao Duration quan trọng hơn YTM khi thị trường biến động?**
YTM cho bạn biết bạn kiếm được bao nhiêu nếu giữ đến cuối, nhưng Duration cho bạn biết tài khoản của bạn sẽ "vơi đi" bao nhiêu vào sáng mai nếu FED công bố tăng lãi suất bất ngờ.

## Kết luận

Hiểu về Duration là bạn đã bước một chân vào thế giới của những nhà quản lý quỹ thực thụ. Đừng để những biến động của lãi suất làm bạn bất ngờ. Hãy làm chủ Duration để biến rủi ro thành cơ hội tăng trưởng tài sản bền vững.

Chúc bạn luôn có những quyết định đầu tư sáng suốt dựa trên nền tảng kiến thức vững chắc!

---
*Lưu ý: Duration là một khái niệm kỹ thuật phức tạp. Hãy sử dụng các công cụ tính toán tự động để đảm bảo độ chính xác.*`;

// 39. Trái phiếu Chính phủ vs Trái phiếu Doanh nghiệp
const c39 = `Nên gửi tiền vào "túi" của Nhà nước hay cho các tập đoàn lớn vay? Đây là câu hỏi kinh điển mà bất cứ nhà đầu tư nào bắt đầu quan tâm tới thu nhập cố định năm 2026 đều phải đối mặt. Sự lựa chọn giữa **Trái phiếu Chính phủ (TPCP)** và **Trái phiếu Doanh nghiệp (TPDN)** không chỉ là cuộc chiến về lãi suất, mà là bài toán về sự đánh đổi giữa An toàn và Lợi nhuận.

Bài viết này sẽ mổ xẻ chi tiết hai kênh đầu tư này để bạn tìm được nơi "chọn mặt gửi vàng" phù hợp nhất.

## 1. Trái phiếu Chính phủ: Cảng tránh bão an toàn nhất

Trái phiếu Chính phủ được mệnh danh là tài sản **"Không rủi ro" (Risk-free Asset)**. Tại sao? Vì Chính phủ có quyền in tiền và đánh thuế để trả nợ. Trừ khi quốc gia sụp đổ, bạn luôn nhận được cả gốc lẫn lãi đúng hạn.

- **Ưu điểm:** Cực kỳ an toàn, thanh khoản cao nhất thị trường, được dùng làm tài sản đảm bảo cho các khoản vay lớn.
- **Nhược điểm:** Lãi suất thường thấp nhất (chỉ cao hơn lạm phát một chút). Năm 2026, lãi suất TPCP thường xoay quanh mức 3-5%/năm tùy kỳ hạn.

## 2. Trái phiếu Doanh nghiệp: Cuộc chơi của lợi nhuận cao

Khi bạn mua TPDN, bạn đang cho một công ty (như VinGroup, Masan, hay các ngân hàng) vay tiền để họ mở rộng kinh doanh. 

- **Lợi nhuận:** Thường cao hơn TPCP từ 2-5% để bù đắp rủi ro. Có những đợt phát hành lên tới 10-12%/năm.
- **Rủi ro:** Công ty có thể làm ăn thua lỗ dẫn đến mất khả năng trả nợ (Vỡ nợ). Đây là lý do bạn cần nắm vững kỹ năng [đọc báo cáo tài chính doanh nghiệp](/blog/chung-khoan/cach-doc-bao-cao-tai-chi-doanh-nghiep).

---

## 3. Bảng so sánh trực diện (Side-by-Side)

| Tiêu chí | Trái phiếu Chính phủ | Trái phiếu Doanh nghiệp |
|---|---|---|
| **Độ an toàn** | Tuyệt đối (Cấp quốc gia) | Phụ thuộc sức khỏe công ty |
| **Lãi suất (Coupon)** | Thấp (Phòng thủ) | Cao (Tăng trưởng) |
| **Thanh khoản** | Dễ dàng mua bán số lượng lớn | Tùy vào uy tín doanh nghiệp |
| **Xếp hạng tín nhiệm** | Mặc định cao nhất | Từ AAA (Tốt) đến D (Vỡ nợ) |
| **Thuế & Phí** | Thường được ưu đãi | Phải đóng thuế TNCN 5% tiền lãi |

---

## 4. Năm 2026: Cách đầu tư thông minh cho nhà đầu tư cá nhân

Nhà đầu tư cá nhân không nên tự đi mua từng tờ trái phiếu lẻ vì khó kiểm soát rủi ro. Thay vào đó:

1. **Mua qua Quỹ mở trái phiếu:** Đây là cách tốt nhất. Quỹ sẽ trộn cả TPCP và TPDN hàng đầu để tạo ra danh mục vừa an toàn vừa có lãi suất tốt (khoảng 7-9%). Hãy xem các [so sánh quỹ mở trái phiếu 2026](/blog/kien-thuc-dau-tu/dau-tu-quy-mo-tai-viet-nam-2026).
2. **Kiểm tra xếp hạng tín nhiệm:** Chỉ mua TPDN của những công ty được các tổ chức uy tín như FiinRatings xếp hạng từ A trở lên.
3. **Cân nhắc kỳ hạn:** Nếu bạn cần tiền sớm, hãy chọn kỳ hạn ngắn hoặc các loại trái phiếu có cam kết mua lại từ ngân hàng/công ty chứng khoán.

## 5. Chiến lược phân bổ "Barbell" (Hình tạ)

Một chiến lược kinh điển là chia vốn làm 2 phần:
- **80% vốn vào TPCP:** Để bảo vệ "cốt lõi" tài sản, đảm bảo bạn không bao giờ trắng tay.
- **20% vốn vào TPDN lãi suất cao:** Để gia tăng hiệu suất tổng thể của danh mục.

Sự kết hợp này giúp bạn ngủ ngon khi thị trường giông bão nhưng vẫn có "quà" khi kinh tế khởi sắc. Đừng quên theo dõi các chỉ số về [lãi suất vĩ mô](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu) để biết khi nào nên điều chỉnh tỷ lệ này.

## Những câu hỏi thường gặp (FAQ)

**Nếu doanh nghiệp phá sản, tôi có được trả tiền trước không?**
Trong thứ tự ưu tiên thanh toán khi phá sản: Trái chủ (người mua trái phiếu) được trả trước cổ đông (người mua cổ phiếu). Tuy nhiên, nếu tài sản công ty không còn gì, bạn vẫn có nguy cơ mất vốn.

**Làm sao để mua trái phiếu Chính phủ với số tiền nhỏ (ví dụ 10 triệu)?**
Cách đơn giản nhất là mua chứng chỉ quỹ ETF Trái phiếu hoặc Quỹ mở trái phiếu. Các tổ chức này gom tiền của hàng ngàn người để mua các lô trái phiếu chính phủ hàng trăm tỷ đồng.

**Trái phiếu ngân hàng có an toàn như trái phiếu Chính phủ không?**
Không an toàn bằng, nhưng tại Việt Nam, các ngân hàng lớn (Big 4) thường có độ an toàn cực cao và lãi suất rất hấp dẫn cho mục tiêu tích sản.

## Kết luận

Lựa chọn giữa Chính phủ hay Doanh nghiệp phụ thuộc vào khẩu vị rủi ro của bạn. Người trẻ muốn làm giàu nhanh có thể nghiêng về Doanh nghiệp, người cần sự ổn định cho tuổi già nên chọn Chính phủ. 

Bản chất của đầu tư là sự hiểu biết. Hãy trang bị cho mình kiến thức vững chắc về [YTM và Duration](/blog/kien-thuc-dau-tu/duration-trai-phieu-la-gi-rui-ro-lai-suat) để không bao giờ bị rơi vào bẫy lãi suất. Chúc bạn một hành trình đầu tư thịnh vượng và bền vững!

---
*Lưu ý: Mọi quyết định đầu tư cần dựa trên tình hình tài chính thực tế của cá nhân.*`;

// 40. Rủi ro lãi suất khi đầu tư trái phiếu
const c40 = `Sai lầm lớn nhất của những người mới đầu tư trái phiếu là nghĩ rằng: "Đã là trái phiếu thì lãi suất luôn cố định và an toàn". Thực tế, có một "kẻ thù thầm lặng" có thể quét sạch lợi nhuận của bạn chỉ trong một đêm, đó chính là **Rủi ro lãi suất (Interest Rate Risk)**. 

Bài viết này sẽ vạch trần cách mà lãi suất ngân hàng "điều khiển" giá trị trái phiếu trong ví của bạn và 4 chiến lược phòng tránh hiệu quả nhất năm 2026.

## 1. Bản chất của Rủi ro lãi suất: Trò chơi bập bênh

Hãy tưởng tượng lãi suất thị trường và giá trái phiếu như hai đầu của một chiếc bập bênh:
- **Lãi suất tăng lên:** Giá trái phiếu trên thị trường sẽ **giảm xuống**. Tại sao? Vì không ai muốn mua lại trái phiếu cũ của bạn với lãi 8% khi mà ngân hàng đang trả tới 10%.
- **Lãi suất giảm đi:** Giá trái phiếu của bạn sẽ **tăng lên**. Bạn đang nắm giữ một "tài sản hiếm" có lãi suất cao hơn thị trường.

Mối quan hệ nghịch đảo này là quy luật cơ bản nhất của thị trường nợ toàn cầu.

## 2. Tại sao rủi ro này lại nguy hiểm năm 2026?

Năm 2026, kinh tế thế giới đang ở giai đoạn cuối sau những đợt biến động mạnh từ [FED (Mỹ)](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu). Chỉ cần một thông báo điều chỉnh lãi suất bất ngờ, những trái phiếu kỳ hạn dài (10-20 năm) có thể mất giá 10-15% giá trị thị trường chỉ trong vài tuần. Điều này cực kỳ nguy hiểm nếu bạn đang cần bán trái phiếu để lấy tiền mặt gấp.

---

## 3. Bốn cách phòng tránh rủi ro lãi suất hiệu quả

Đừng ngồi yên chờ đợi, hãy chủ động bảo vệ tài sản bằng các cách sau:

### Cách 1: Chiến lược thang trái phiếu (Bond Laddering)
Thay vì dồn tất cả tiền mua một loại trái phiếu 10 năm, hãy chia nhỏ vốn ra mua các loại có kỳ hạn 1 năm, 2 năm, 3 năm... hàng năm khi một khoản đáo hạn, bạn có thể tái đầu tư vào mức lãi suất mới nhất của thị trường. Cách này giúp bạn luôn có dòng tiền và không bao giờ bị "kẹt" ở mức lãi thấp.

### Cách 2: Chú ý đến chỉ số Duration
Như đã đề cập trong bài viết về [Duration trái phiếu](/blog/kien-thuc-dau-tu/duration-trai-phieu-la-gi-rui-ro-lai-suat), hãy chọn trái phiếu có Duration thấp nếu bạn dự báo lãi suất sắp tăng. Duration càng ngắn, giá trị trái phiếu càng ít biến động trước các "cú sốc" vĩ mô.

### Cách 3: Đầu tư vào Trái phiếu lãi suất thả nổi (Floating Rate Bonds)
Đây là loại trái phiếu mà tiền lãi của bạn sẽ được điều chỉnh định kỳ theo lãi suất thị trường (ví dụ: Lãi suất tiết kiệm 12 tháng + 3.0%). Với loại này, khi lãi suất tăng, túi tiền của bạn cũng tăng theo. Bạn gần như được bảo vệ tuyệt đối trước rủi ro lãi suất.

### Cách 4: Đa dạng hóa vào các kênh tài sản khác
Đừng bỏ hết trứng vào một giỏ trái phiếu. Hãy kết hợp với [vàng](/blog/vang/dau-tu-vang-cho-nguoi-moi-2026-sjc-nhan-tron-vang-tai-khoan) hoặc [cổ phiếu cổ tức](/blog/chung-khoan/dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong). Thông thường, khi lãi suất tăng làm trái phiếu giảm giá, thì các tài sản như Vàng có thể giữ giá tốt hơn.

---

## 4. Những hiểu lầm kinh điển cần tránh

- **Hiểu lầm 1: "Tôi giữ đến đáo hạn thì không sợ lỗ":** Đúng là bạn sẽ nhận lại đủ vốn gốc, nhưng bạn đã mất đi **Chi phí cơ hội**. Số tiền đó nếu gửi tiết kiệm với lãi suất mới cao hơn sẽ mang lại nhiều tiền hơn.
- **Hiểu lầm 2: "Trái phiếu Chính phủ không có rủi ro lãi suất":** Sai. [Trái phiếu Chính phủ](/blog/kien-thuc-dau-tu/trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao) dù an toàn về vốn gốc nhưng vẫn biến động giá cực mạnh theo lãi suất thị trường.

## Những câu hỏi thường gặp (FAQ)

**Làm sao để biết lãi suất thị trường sắp tăng hay giảm?**
Hãy theo dõi các báo cáo vĩ mô của Ngân hàng Nhà nước và các chỉ số lạm phát. Nếu lạm phát tăng cao, khả năng rất lớn là lãi suất sẽ được điều chỉnh tăng để kiềm tỏa lạm phát.

**Khi nào là thời điểm tốt nhất để mua trái phiếu dài hạn?**
Đó là khi lãi suất thị trường đang ở mức **đỉnh** và chuẩn bị đi xuống. Lúc này bạn sẽ "khóa" được mức lãi suất cao cho nhiều năm tới và còn được hưởng lợi từ việc giá trái phiếu tăng mạnh trong tương lai.

**Quỹ mở trái phiếu có giúp tôi quản lý rủi ro này không?**
Có. Các chuyên gia quỹ liên tục mua bán và điều chỉnh tỷ trọng danh mục (Active Management) để tối ưu hóa Duration, giúp giảm thiểu tác động tiêu cực của lãi suất hơn là việc bạn tự đầu tư cá nhân.

## Kết luận

Rủi ro lãi suất không đáng sợ nếu bạn hiểu và có chiến lược đối phó. Hãy luôn giữ một tâm thế linh hoạt, đa dạng hóa danh mục và không ngừng cập nhật kiến thức về [phân tích cơ bản](/blog/chung-khoan/phan-tich-co-ban-chung-khoan-phan-mem). 

Đầu tư là một chặng đua marathon dài hạn. Chúc bạn luôn vững tay chèo và đạt được mục tiêu [tự do tài chính](/blog/tai-chinh-ca-nhan/fire-movement-nghi-huoc-som-tuoi-40) của mình!

---
*Lưu ý: Mọi phân tích chỉ mang tính chất tham khảo. Hãy tự chịu trách nhiệm với túi tiền của mình.*`;

await expandPost('duration-trai-phieu-la-gi-rui-ro-lai-suat', 'Duration trái phiếu', c37, 'Tìm hiểu Duration - thước đo rủi ro lãi suất trong đầu tư trái phiếu năm 2026. Phân biệt Macaulay Duration, Modified Duration và cách dùng Duration để bảo vệ danh mục.', 'Duration trái phiếu là gì');
await expandPost('trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao', 'Trái phiếu Chính phủ vs Doanh nghiệp', c39, 'So sánh chi tiết đầu tư trái phiếu Chính phủ và trái phiếu Doanh nghiệp năm 2026. Đánh giá rủi ro, lợi nhuận và chiến lược phân bổ tài sản thông minh cho nhà đầu tư cá nhân.', 'trái phiếu chính phủ vs doanh nghiệp');
await expandPost('rui-ro-lai-suat-dau-tu-trai-phieu-cach-phong-tranh', 'Rủi ro lãi suất trái phiếu', c40, 'Khám phá rủi ro lãi suất - kẻ thù thầm lặng trong đầu tư trái phiếu. 4 chiến lược phòng tránh hiệu quả: Thang trái phiếu, Duration thấp và tái phân bổ tài sản thông minh 2026.', 'rủi ro lãi suất trái phiếu');
