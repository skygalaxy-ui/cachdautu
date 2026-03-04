/**
 * Batch 1: Mở rộng 3 bài ngắn nhất + thêm internal/external links
 * Chạy: cd ~/cachdautu && export $(grep -v '^#' .env.local | xargs) && node scripts/expand-posts-batch1.mjs
 */
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Đăng nhập admin để có quyền ghi
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const expandedContent = {
    'dong-hanh-cung-khoan-dau-tu-cua-ban-trong-mot-thi-truong-day-bien-dong': `Thị trường tài chính năm 2026 đang chứng kiến những biến động chưa từng có. Từ lạm phát toàn cầu, căng thẳng địa chính trị, đến các chính sách tiền tệ thay đổi liên tục — nhà đầu tư cá nhân phải đối mặt với nhiều thách thức. Bài viết này chia sẻ **chiến lược đồng hành cùng khoản đầu tư** giúp bạn giữ vững tâm lý và tối ưu lợi nhuận trong mọi điều kiện thị trường.

## Tại sao thị trường biến động là bình thường?

Theo dữ liệu từ [Sở GDCK TP.HCM (HOSE)](https://www.hsx.vn), VN-Index trung bình trải qua 3-4 đợt điều chỉnh trên 10% mỗi năm. Biến động không phải kẻ thù — nó là **bản chất tự nhiên** của thị trường.

Những nhà đầu tư thành công nhất thế giới như Warren Buffett, Peter Lynch đều khẳng định: *"Biến động tạo ra cơ hội cho người có kế hoạch."* Điều quan trọng không phải là dự đoán thị trường, mà là có **chiến lược phù hợp** để vượt qua mọi giai đoạn.

## 1. Tâm lý là chìa khóa vàng

Nghiên cứu từ Dalbar Inc. cho thấy nhà đầu tư cá nhân thường đạt lợi nhuận thấp hơn thị trường 3-5%/năm, chủ yếu do **quyết định cảm xúc**: mua khi tham lam, bán khi sợ hãi.

### Cách kiểm soát tâm lý đầu tư:

- **Viết nhật ký đầu tư:** Ghi lại lý do mua/bán mỗi quyết định
- **Đặt quy tắc trước:** Xác định điểm cắt lỗ và chốt lời từ đầu
- **Tránh kiểm tra portfolio liên tục:** Kiểm tra 1-2 lần/tuần thay vì hàng giờ
- **Tránh [tâm lý đám đông](/blog/kinh-nghiem/tam-ly-dam-dong-trong-dau-tu-tranh-bay):** Đừng mua/bán chỉ vì người khác làm vậy

## 2. Chiến thuật "Đồng hành" thay vì "Đánh bại"

Thay vì cố gắng thắng thị trường, hãy **đồng hành cùng xu hướng dài hạn**. Dữ liệu lịch sử cho thấy VN-Index tăng trưởng trung bình 12-15%/năm trong giai đoạn 10 năm, bất chấp các đợt sụt giảm ngắn hạn.

### Áp dụng chiến lược DCA (Dollar Cost Averaging):

Một trong những cách hiệu quả nhất là [chiến lược DCA bình quân giá](/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia) — đầu tư đều đặn một số tiền cố định mỗi tháng, bất kể giá lên hay xuống.

| Phương pháp | Ưu điểm | Nhược điểm | Phù hợp với |
|---|---|---|---|
| **DCA hàng tháng** | Giảm rủi ro timing, kỷ luật | Bỏ lỡ đáy | Người mới, ít thời gian |
| **Value Averaging** | Mua nhiều khi rẻ, ít khi đắt | Cần vốn linh hoạt | Người có kinh nghiệm |
| **Lump Sum** | Tận dụng cơ hội nhanh | Rủi ro timing cao | Trader chuyên nghiệp |

## 3. Đa dạng hóa — Không bỏ trứng vào một giỏ

Khi thị trường biến động, đa dạng hóa là tấm khiên bảo vệ tốt nhất. Hãy [xây dựng danh mục đầu tư đa dạng hóa](/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026) bao gồm nhiều loại tài sản khác nhau.

### Mô hình phân bổ tài sản cho nhà đầu tư Việt Nam:

| Loại tài sản | Tỷ trọng gợi ý | Vai trò |
|---|---|---|
| Cổ phiếu / ETF | 40-50% | Tăng trưởng |
| Trái phiếu | 20-30% | Ổn định |
| Vàng | 10-15% | Phòng ngừa lạm phát |
| Tiết kiệm / Tiền mặt | 10-15% | Thanh khoản |
| Bất động sản | 5-10% | Tăng trưởng dài hạn |

## 4. Tái cân bằng danh mục định kỳ

Sau mỗi 3-6 tháng, hãy kiểm tra lại tỷ trọng danh mục và điều chỉnh nếu cần. Ví dụ: nếu cổ phiếu tăng mạnh và chiếm 60% danh mục (thay vì 40% ban đầu), hãy bán bớt để đưa về tỷ trọng mục tiêu.

Tái cân bằng giúp bạn tự động thực hiện nguyên tắc **"mua thấp, bán cao"** mà không cần dự đoán thị trường.

## 5. Xây dựng quỹ dự phòng trước khi đầu tư

Trước khi đầu tư, hãy đảm bảo bạn có **quỹ dự phòng 3-6 tháng chi phí sinh hoạt**. Điều này giúp bạn không phải bán tài sản đầu tư trong trường hợp khẩn cấp — thường là lúc thị trường đang giảm.

## 6. Học từ lịch sử thị trường

Nhìn lại lịch sử, mọi cuộc khủng hoảng đều kết thúc và thị trường phục hồi mạnh mẽ hơn:

- **2008:** Khủng hoảng tài chính toàn cầu → VN-Index giảm 70%, phục hồi sau 3 năm
- **2020:** COVID-19 → VN-Index giảm 33%, phục hồi hoàn toàn sau 6 tháng
- **2022:** Sự kiện trái phiếu → VN-Index giảm 40%, phục hồi sau 18 tháng

Bài học: **Người kiên nhẫn luôn được thưởng**. Tham khảo thêm [phân tích 5 kênh đầu tư tốt nhất 2026](/blog/kien-thuc-dau-tu/nen-dau-tu-gi-2026-so-sanh-5-kenh) để lựa chọn phù hợp.

## Checklist đồng hành cùng danh mục đầu tư

- ☐ Đã có quỹ dự phòng 3-6 tháng
- ☐ Đã xác định mục tiêu đầu tư rõ ràng
- ☐ Danh mục đa dạng hóa ít nhất 3 loại tài sản
- ☐ Có lịch tái cân bằng danh mục (3-6 tháng/lần)
- ☐ Đã hiểu [cách quản lý rủi ro](/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua)
- ☐ Không đầu tư bằng tiền đi vay

## Câu hỏi thường gặp (FAQ)

### Khi nào nên bán tài sản đầu tư?

Bán khi: (1) mục tiêu đầu tư đã đạt, (2) thay đổi cơ bản về chất lượng tài sản, (3) cần tái cân bằng danh mục. **KHÔNG** bán chỉ vì giá giảm ngắn hạn.

### Nên đầu tư bao nhiêu % thu nhập?

Quy tắc phổ biến là **50/30/20**: 50% chi phí thiết yếu, 30% mong muốn, 20% tiết kiệm và đầu tư. Nếu có thể, hãy nâng tỷ lệ đầu tư lên 25-30%.

### Có nên dừng đầu tư khi thị trường giảm?

Không! Thị trường giảm chính là cơ hội mua vào với giá rẻ hơn. Hãy duy trì kế hoạch DCA đều đặn.

## Kết luận

Đồng hành cùng khoản đầu tư trong thị trường biến động đòi hỏi **kỷ luật, kiến thức, và tâm lý vững vàng**. Hãy nhớ rằng đầu tư là cuộc marathon, không phải chạy nước rút. Xây dựng danh mục đa dạng, duy trì DCA, và kiên nhẫn — đó là con đường đến thành công tài chính bền vững.

*Nguồn tham khảo: [Ủy ban Chứng khoán Nhà nước](https://www.ssc.gov.vn), [Investopedia](https://www.investopedia.com)*`,

    'cach-theo-doi-nav-hieu-suat-quy-etf': `NAV (Net Asset Value) là chỉ số quan trọng nhất khi đầu tư quỹ ETF. Hiểu đúng và theo dõi chính xác NAV giúp bạn đưa ra quyết định mua/bán thông minh hơn. Bài viết hướng dẫn chi tiết cách theo dõi NAV và đánh giá hiệu suất quỹ ETF tại Việt Nam năm 2026.

## NAV là gì? Tại sao quan trọng?

**NAV (Giá trị tài sản ròng)** là tổng giá trị tài sản của quỹ trừ đi các khoản nợ, chia cho số lượng chứng chỉ quỹ đang lưu hành. Công thức:

*NAV = (Tổng tài sản quỹ - Tổng nợ phải trả) / Số chứng chỉ quỹ lưu hành*

NAV được cập nhật **hàng ngày** sau phiên giao dịch và công bố trên trang web của công ty quản lý quỹ, được giám sát bởi [Ủy ban Chứng khoán Nhà nước](https://www.ssc.gov.vn).

### Sự khác biệt giữa NAV và giá thị trường

| Tiêu chí | NAV | Giá thị trường |
|---|---|---|
| Cách tính | Dựa trên giá trị tài sản thực | Dựa trên cung cầu trên sàn |
| Cập nhật | Cuối phiên giao dịch | Liên tục trong phiên |
| Chênh lệch | Premium (giá > NAV) hoặc Discount (giá < NAV) | |

**Mẹo:** Khi giá thị trường thấp hơn NAV (discount), đó có thể là cơ hội mua vào tốt. Tìm hiểu thêm về [ETF là gì và cách đầu tư](/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf).

## 5 công cụ theo dõi NAV quỹ ETF Việt Nam 2026

### 1. Website công ty quản lý quỹ

Đây là nguồn **chính xác và cập nhật nhất**. Một số website quỹ uy tín:

- SSIAM (quản lý VNDiamond ETF, VNFIN Lead ETF)
- Dragon Capital (quản lý VFMVN30 ETF)
- VinaCapital (quản lý FUEVFVND)

### 2. Sở Giao dịch Chứng khoán

Truy cập [Sở GDCK TP.HCM (HOSE)](https://www.hsx.vn) hoặc [Sở GDCK Hà Nội (HNX)](https://www.hnx.vn) để xem thông tin NAV và giá giao dịch của các quỹ ETF niêm yết.

### 3. Ứng dụng chứng khoán

Các app như SSI iBoard, VNDirect, TCBS cung cấp thông tin NAV real-time và biểu đồ lịch sử.

### 4. Bloomberg / Reuters

Cho nhà đầu tư chuyên nghiệp cần dữ liệu chi tiết và so sánh quốc tế.

### 5. ETF comparison tools

Các trang như [Investopedia](https://www.investopedia.com) cung cấp công cụ so sánh ETF toàn cầu.

## 4 chỉ số đánh giá hiệu suất quỹ ETF

### 1. Tracking Error (Sai số theo dõi)

Đo lường mức độ quỹ ETF bám sát chỉ số cơ sở. Tracking error **càng thấp càng tốt** — dưới 1% là xuất sắc.

### 2. Total Return (Tổng lợi nhuận)

Bao gồm cả tăng/giảm giá và cổ tức (nếu có). So sánh Total Return với benchmark index để đánh giá hiệu quả.

### 3. Expense Ratio (Phí quản lý)

Phí hàng năm quỹ thu từ nhà đầu tư. So sánh chi tiết tại bài [so sánh phí quản lý các quỹ ETF Việt Nam 2026](/blog/chung-khoan/so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026).

### 4. Thanh khoản (Volume)

Khối lượng giao dịch trung bình hàng ngày. ETF có thanh khoản cao giúp bạn mua/bán dễ dàng với spread nhỏ.

## So sánh hiệu suất các quỹ ETF Việt Nam nổi bật

| Quỹ ETF | Benchmark | NAV (tham khảo) | Phí quản lý | Thanh khoản |
|---|---|---|---|---|
| **FUEVFVND** | VN30 | ~19,000đ | 0.65%/năm | Cao |
| **E1VFVN30** | VN30 | ~18,500đ | 0.60%/năm | Rất cao |
| **FUEVN100** | VN100 | ~16,000đ | 0.75%/năm | Trung bình |
| **FUESSVFL** | VNFIN Lead | ~12,000đ | 0.80%/năm | Trung bình |

Tham khảo thêm: [Diamond ETF đầu tư cổ phiếu chất lượng cao](/blog/chung-khoan/diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai) và [VNFIN Lead ETF ngành tài chính](/blog/chung-khoan/vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh).

## Hướng dẫn thực hành: Theo dõi NAV hiệu quả

1. **Tạo bảng theo dõi:** Dùng Google Sheets ghi lại NAV hàng tuần
2. **So sánh với benchmark:** Kiểm tra tracking error mỗi tháng
3. **Theo dõi premium/discount:** Mua khi discount, thận trọng khi premium cao
4. **Review hiệu suất:** So sánh total return mỗi quý

## Câu hỏi thường gặp (FAQ)

### NAV cập nhật lúc nào?

NAV thường được công bố sau 17h00 mỗi ngày giao dịch, dựa trên giá đóng cửa của các cổ phiếu trong danh mục.

### Nên mua ETF khi NAV cao hay thấp?

Đừng quá tập trung vào giá tuyệt đối. Quan trọng hơn là xu hướng dài hạn và tỷ lệ premium/discount.

### Quỹ ETF nào tốt nhất cho người mới?

Quỹ theo dõi VN30 (như E1VFVN30 hoặc FUEVFVND) là lựa chọn phổ biến nhất do thanh khoản cao và phí thấp.

## Kết luận

Theo dõi NAV và hiệu suất quỹ ETF là kỹ năng quan trọng giúp bạn đưa ra quyết định đầu tư sáng suốt. Hãy sử dụng các công cụ được giới thiệu ở trên, kết hợp với phân tích các chỉ số hiệu suất để tối ưu danh mục đầu tư của mình.

*Nguồn tham khảo: [Trung tâm Lưu ký Chứng khoán](https://www.vsd.vn), [Sở GDCK TP.HCM](https://www.hsx.vn)*`,

    'chien-luoc-dca-binh-quan-gia': `DCA (Dollar Cost Averaging) hay **bình quân giá** là chiến lược đầu tư đều đặn một số tiền cố định vào tài sản theo chu kỳ, bất kể giá lên hay xuống. Đây là phương pháp được Warren Buffett khuyến nghị cho nhà đầu tư cá nhân và được chứng minh hiệu quả qua hàng thập kỷ dữ liệu.

## DCA hoạt động như thế nào?

Thay vì cố gắng "bắt đáy" — điều mà kể cả chuyên gia cũng hiếm khi làm đúng — DCA giúp bạn **trung bình hóa giá mua** theo thời gian.

### Ví dụ minh họa: Đầu tư 5 triệu/tháng vào ETF VN30

| Tháng | Giá ETF | Số tiền đầu tư | Số đơn vị mua |
|---|---|---|---|
| Tháng 1 | 20,000đ | 5,000,000đ | 250 |
| Tháng 2 | 18,000đ | 5,000,000đ | 278 |
| Tháng 3 | 16,000đ | 5,000,000đ | 313 |
| Tháng 4 | 19,000đ | 5,000,000đ | 263 |
| Tháng 5 | 21,000đ | 5,000,000đ | 238 |
| **Tổng** | **TB: 18,657đ** | **25,000,000đ** | **1,342 đơn vị** |

Giá trung bình mua: 18,627đ/đơn vị — thấp hơn giá trung bình thị trường (18,800đ). **DCA tự động giúp bạn mua nhiều hơn khi giá rẻ**.

## Tại sao DCA phù hợp với người Việt?

- **Thu nhập hàng tháng:** Phù hợp với người nhận lương tháng, trích 10-20% đầu tư đều đặn
- **Giảm áp lực tâm lý:** Không cần lo timing thị trường, tránh [tâm lý đám đông trong đầu tư](/blog/kinh-nghiem/tam-ly-dam-dong-trong-dau-tu-tranh-bay)
- **Kỷ luật đầu tư:** Tạo thói quen tiết kiệm và đầu tư tự động
- **Phù hợp mọi ngân sách:** Bắt đầu từ 500,000đ/tháng

## DCA vs. Lump Sum: Cái nào tốt hơn?

| Tiêu chí | DCA | Lump Sum |
|---|---|---|
| Rủi ro timing | ⭐ Thấp | Cao |
| Lợi nhuận kỳ vọng | Tốt | ⭐ Cao hơn (thị trường uptrend) |
| Áp lực tâm lý | ⭐ Thấp | Cao |
| Phù hợp người mới | ⭐ Rất tốt | Không khuyến nghị |
| Vốn ban đầu cần | ⭐ Thấp | Lớn |

Theo nghiên cứu của Vanguard, Lump Sum thắng DCA khoảng 66% thời gian xét về lợi nhuận tuyệt đối. Tuy nhiên, DCA vượt trội về **quản lý rủi ro** và **phù hợp cho người mới**. Tìm hiểu thêm về [quản lý rủi ro danh mục đầu tư](/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua).

## Các bước triển khai DCA tại Việt Nam

### Bước 1: Xác định số tiền đầu tư hàng tháng

Khuyến nghị: **10-20% thu nhập ròng**. Ví dụ thu nhập 15 triệu → đầu tư 1.5-3 triệu/tháng.

### Bước 2: Chọn tài sản đầu tư

DCA phù hợp nhất với:

- [Quỹ ETF](/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf) (khuyến nghị nhất cho người mới)
- Cổ phiếu blue chip
- Quỹ mở (Open-end fund)

### Bước 3: Đặt lịch mua tự động

Nhiều công ty chứng khoán hỗ trợ đặt lệnh định kỳ. Đặt vào ngày cố định mỗi tháng (ví dụ: ngày 5, ngay sau khi nhận lương).

### Bước 4: Kiên nhẫn và duy trì

DCA cần ít nhất **12-24 tháng** để thấy hiệu quả rõ rệt. Đừng dừng lại khi thị trường giảm — đó chính là lúc DCA phát huy sức mạnh!

## 5 sai lầm phổ biến khi áp dụng DCA

1. **Dừng DCA khi thị trường giảm** — Đây là sai lầm lớn nhất! Giá giảm = mua được nhiều hơn
2. **Thay đổi số tiền liên tục** — Giữ cố định hoặc tăng dần theo thu nhập
3. **Đầu tư vào tài sản rủi ro cao** — DCA phù hợp nhất với ETF hoặc blue chip
4. **Không review định kỳ** — Kiểm tra danh mục mỗi 6 tháng, [xây dựng danh mục đa dạng hóa](/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026)
5. **Kỳ vọng lợi nhuận ngắn hạn** — DCA là chiến lược dài hạn (3-5 năm+)

## Câu hỏi thường gặp (FAQ)

### DCA có bảo đảm lời không?

Không phương pháp nào bảo đảm lời 100%. Tuy nhiên, xét theo dữ liệu lịch sử, DCA vào chỉ số VN30 trong bất kỳ giai đoạn 5 năm nào đều mang lại lợi nhuận dương — theo dữ liệu từ [Sở GDCK TP.HCM](https://www.hsx.vn).

### Nên DCA hàng tuần hay hàng tháng?

Nghiên cứu cho thấy sự khác biệt không đáng kể. Hàng tháng là phổ biến nhất do phù hợp với chu kỳ lương. Nếu vốn lớn, có thể DCA hàng tuần.

### Khi nào nên ngừng DCA?

Khi đã đạt mục tiêu tài chính hoặc khi cần chuyển sang giai đoạn rút vốn (thường là khi nghỉ hưu).

## Kết luận

DCA là chiến lược đầu tư đơn giản nhưng cực kỳ hiệu quả, đặc biệt cho nhà đầu tư cá nhân tại Việt Nam. Bằng cách đầu tư đều đặn, kiên nhẫn, và chọn đúng tài sản — bạn đang xây dựng nền tảng tài chính vững chắc cho tương lai.

*Nguồn tham khảo: [Investopedia](https://www.investopedia.com), [Ủy ban Chứng khoán Nhà nước](https://www.ssc.gov.vn)*`,
};

async function main() {
    console.log('📝 Bắt đầu mở rộng bài viết Batch 1 (3 bài ngắn nhất)...\n');

    for (const [slug, newContent] of Object.entries(expandedContent)) {
        console.log(`🔄 Đang xử lý: ${slug}`);

        const { data: post, error: findErr } = await supabase
            .from('posts').select('id, title, content').eq('slug', slug).single();

        if (findErr || !post) {
            console.log(`  ❌ Không tìm thấy: ${findErr?.message || 'not found'}`);
            continue;
        }

        console.log(`  📄 Tìm thấy: "${post.title}"`);
        const oldLen = (post.content || '').length;

        const { error: updateErr } = await supabase
            .from('posts').update({ content: newContent.trim() }).eq('id', post.id);

        if (updateErr) {
            console.log(`  ❌ Lỗi cập nhật: ${updateErr.message}`);
        } else {
            console.log(`  ✅ Đã cập nhật! ${oldLen} chars → ${newContent.trim().length} chars`);
        }
        console.log();
    }
    console.log('🎉 Batch 1 hoàn tất!');
}

main().catch(console.error);
