import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const img = (id, w = 1200, h = 630) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const posts = [
    {
        title: 'ETF là gì? Hướng dẫn đầu tư quỹ ETF cho người mới 2026',
        slug: 'etf-la-gi-huong-dan-dau-tu-quy-etf',
        excerpt: 'Tìm hiểu quỹ ETF — cách đầu tư đa dạng hóa với chi phí thấp nhất. Kèm danh sách ETF phổ biến tại Việt Nam.',
        tags: ['ETF', 'quỹ đầu tư', 'chứng khoán', 'đa dạng hóa'],
        reading_time: '8 phút',
        featured_image: img('1590283603385-17ffb3a7f29f'),
        scheduled_at: '2026-02-13T09:00:00+07:00',
        content: `## ETF là gì?

**ETF (Exchange Traded Fund)** là quỹ đầu tư mô phỏng chỉ số, được giao dịch trực tiếp trên sàn chứng khoán như cổ phiếu thông thường. Khi mua 1 đơn vị ETF, bạn gián tiếp sở hữu toàn bộ cổ phiếu trong rổ chỉ số.

## Ưu điểm của ETF

### 1. Đa dạng hóa tự động
Một chứng chỉ ETF = sở hữu 20-30 cổ phiếu blue-chip. Giảm rủi ro tập trung.

### 2. Chi phí thấp
Phí quản lý ETF chỉ 0.5-1%/năm — thấp hơn nhiều so với quỹ chủ động (1.5-2.5%).

### 3. Thanh khoản cao
Mua bán dễ dàng trên sàn, không cần chờ đáo hạn như quỹ mở.

## Top ETF phổ biến tại Việt Nam

| Mã ETF | Chỉ số theo dõi | Đặc điểm |
|--------|-----------------|----------|
| E1VFVN30 | VN30 | 30 CP lớn nhất sàn HOSE |
| FUEVFVND | VN Diamond | CP vốn hóa lớn, thanh khoản cao |
| FUESSV50 | VNFIN Select | Nhóm tài chính - ngân hàng |

## Cách bắt đầu đầu tư ETF

### Bước 1: Mở tài khoản chứng khoán
Đăng ký tại SSI, VNDirect, TCBS hoặc bất kỳ CTCK nào.

### Bước 2: Nạp tiền
Chuyển tiền vào tài khoản chứng khoán qua ngân hàng liên kết.

### Bước 3: Đặt lệnh mua ETF
Tìm mã ETF (ví dụ: E1VFVN30) và đặt lệnh mua như mua cổ phiếu bình thường.

### Bước 4: Áp dụng DCA
[Mua đều đặn hàng tháng](/blog/tai-chinh-ca-nhan/chien-luoc-dca-binh-quan-gia) để giảm rủi ro timing.

## So sánh ETF vs Cổ phiếu riêng lẻ

| Tiêu chí | ETF | Cổ phiếu |
|----------|-----|----------|
| Rủi ro | Phân tán | Tập trung |
| Kiến thức cần | Ít | Nhiều |
| Thời gian theo dõi | Ít | Nhiều |
| Lợi nhuận tiềm năng | Trung bình | Cao/Thấp |
| Phù hợp | Người mới | Có kinh nghiệm |

## Câu hỏi thường gặp

### Cần bao nhiêu tiền để mua ETF?
Chỉ cần khoảng 500,000 - 1,000,000 VNĐ là đủ mua 1 lot ETF. Đây là mức đầu tư rất phù hợp cho người mới.

### ETF có trả cổ tức không?
Hầu hết ETF tại Việt Nam không trả cổ tức trực tiếp. Cổ tức được tái đầu tư vào quỹ, phản ánh qua giá NAV tăng.`
    },
    {
        title: 'Stablecoin là gì? USDT, USDC và vai trò trong đầu tư crypto',
        slug: 'stablecoin-la-gi-usdt-usdc-vai-tro',
        excerpt: 'Hiểu về stablecoin — đồng tiền số ổn định. So sánh USDT vs USDC và cách sử dụng stablecoin an toàn.',
        tags: ['stablecoin', 'USDT', 'USDC', 'crypto'],
        reading_time: '7 phút',
        featured_image: img('1621761191319-c6fb62004040'),
        scheduled_at: '2026-02-14T09:00:00+07:00',
        content: `## Stablecoin là gì?

**Stablecoin** là loại tiền mã hóa được thiết kế để duy trì giá trị ổn định, thường neo theo đồng USD với tỷ lệ 1:1. Đây là cầu nối quan trọng giữa tài chính truyền thống và thế giới crypto.

## Các loại Stablecoin phổ biến

| Stablecoin | Tổ chức phát hành | Tài sản đảm bảo | Vốn hóa |
|-----------|-------------------|-----------------|---------|
| USDT (Tether) | Tether Ltd | USD, trái phiếu | ~$95 tỷ |
| USDC | Circle | USD, trái phiếu kho bạc | ~$30 tỷ |
| DAI | MakerDAO | Crypto thế chấp | ~$5 tỷ |

## So sánh USDT vs USDC

| Tiêu chí | USDT | USDC |
|----------|------|------|
| Minh bạch | Trung bình | Cao (kiểm toán hàng tháng) |
| Thanh khoản | Cao nhất | Cao |
| Rủi ro | Cao hơn | Thấp hơn |
| Phổ biến VN | Rất phổ biến | Phổ biến |

## Cách sử dụng Stablecoin trong đầu tư

### 1. Trú ẩn khi thị trường giảm
Chuyển crypto về stablecoin để bảo toàn giá trị khi thị trường biến động mạnh.

### 2. Kiếm lãi suất
Gửi stablecoin vào các nền tảng lending để nhận lãi suất 3-8%/năm — cao hơn nhiều so với gửi USD ngân hàng.

### 3. Chuyển tiền quốc tế
Phí thấp, tốc độ nhanh, hoạt động 24/7 — phù hợp cho freelancer và người làm việc quốc tế.

## Rủi ro cần biết

- **Depeg**: Stablecoin có thể mất neo giá (UST/Luna crash 2022)
- **Pháp lý**: Quy định về stablecoin đang thay đổi liên tục
- **Counterparty risk**: Phụ thuộc vào tổ chức phát hành

## Câu hỏi thường gặp

### Stablecoin có an toàn 100% không?
Không. Dù ổn định hơn crypto khác, stablecoin vẫn có rủi ro depeg, rủi ro pháp lý và rủi ro từ tổ chức phát hành.

### Nên chọn USDT hay USDC?
USDC minh bạch hơn, phù hợp cho số tiền lớn. USDT thanh khoản cao hơn, phù hợp cho giao dịch thường xuyên.`
    },
    {
        title: 'Cách đọc bảng giá chứng khoán — Hướng dẫn chi tiết cho người mới',
        slug: 'cach-doc-bang-gia-chung-khoan-nguoi-moi',
        excerpt: 'Hướng dẫn đọc bảng giá chứng khoán từ A-Z: giá trần, giá sàn, khối lượng, dư mua dư bán và các chỉ số quan trọng.',
        tags: ['chứng khoán', 'bảng giá', 'hướng dẫn', 'người mới'],
        reading_time: '10 phút',
        featured_image: img('1611974789855-9c2a0a7236a3'),
        scheduled_at: '2026-02-15T09:00:00+07:00',
        content: `## Bảng giá chứng khoán là gì?

Bảng giá chứng khoán là nơi hiển thị thông tin giao dịch real-time của tất cả cổ phiếu trên sàn. Đọc được bảng giá là kỹ năng cơ bản nhất mà mọi nhà đầu tư cần nắm.

## Các cột thông tin quan trọng

### 1. Giá tham chiếu (TC)
Giá đóng cửa phiên trước, dùng làm mốc tính giá trần và giá sàn.

### 2. Giá trần (CE) - Màu tím
Giá cao nhất cổ phiếu có thể đạt trong phiên. HOSE: +7%, HNX: +10%, UPCOM: +15%.

### 3. Giá sàn (FL) - Màu xanh lam
Giá thấp nhất cổ phiếu có thể giảm trong phiên.

### 4. Giá khớp - Màu sắc theo biến động
- **Xanh lá**: Tăng so với tham chiếu
- **Đỏ**: Giảm so với tham chiếu
- **Vàng**: Bằng giá tham chiếu
- **Tím**: Đạt giá trần
- **Xanh lam**: Chạm giá sàn

## Cách đọc bên Mua và bên Bán

| Bên Mua (Bid) | Ý nghĩa |
|---------------|---------|
| Giá 1, 2, 3 | 3 mức giá chờ mua cao nhất |
| KL 1, 2, 3 | Khối lượng chờ mua tại mỗi mức giá |

| Bên Bán (Ask) | Ý nghĩa |
|---------------|---------|
| Giá 1, 2, 3 | 3 mức giá chờ bán thấp nhất |
| KL 1, 2, 3 | Khối lượng chờ bán tại mỗi mức giá |

## Các chỉ số khối lượng

- **KLGD (Volume)**: Tổng khối lượng đã khớp trong phiên
- **GTGD**: Tổng giá trị giao dịch
- **Dư mua > Dư bán**: Áp lực mua mạnh → xu hướng tăng
- **Dư bán > Dư mua**: Áp lực bán mạnh → xu hướng giảm

## Mẹo đọc bảng giá hiệu quả

### 1. Theo dõi khối lượng bất thường
Khối lượng gấp 2-3 lần trung bình = tín hiệu quan trọng, có thể là cơ hội hoặc rủi ro.

### 2. Quan sát dòng tiền
Cổ phiếu tăng giá + khối lượng lớn = dòng tiền thật sự vào. Tăng giá + khối lượng nhỏ = không bền vững.

### 3. Xem bảng giá đúng thời điểm
Phiên ATO (9:00-9:15) và ATC (14:30-14:45) có biến động mạnh nhất.

## Câu hỏi thường gặp

### Nên xem bảng giá ở đâu?
Các app phổ biến: SSI iBoard, VNDirect, TCBS, Fireant. Hoặc trực tiếp trên website sàn HOSE.

### Cần theo dõi bảng giá liên tục không?
Không cần thiết cho nhà đầu tư dài hạn. Chỉ cần kiểm tra 1-2 lần/ngày. Theo dõi liên tục dễ dẫn đến giao dịch cảm xúc.`
    },
    {
        title: 'Quỹ khẩn cấp — Tại sao cần xây dựng và cách tích lũy hiệu quả',
        slug: 'quy-khan-cap-tai-sao-can-xay-dung',
        excerpt: 'Hướng dẫn xây dựng quỹ khẩn cấp 3-6 tháng chi tiêu. Nơi nào gửi an toàn và sai lầm cần tránh.',
        tags: ['quỹ khẩn cấp', 'tài chính cá nhân', 'tiết kiệm', 'an toàn'],
        reading_time: '7 phút',
        featured_image: img('1579621970563-9d57d11b0b13'),
        scheduled_at: '2026-02-16T09:00:00+07:00',
        content: `## Quỹ khẩn cấp là gì?

**Quỹ khẩn cấp (Emergency Fund)** là khoản tiền dự phòng cho các tình huống bất ngờ: mất việc, ốm đau, sửa xe, sửa nhà... Đây là nền tảng tài chính cá nhân quan trọng nhất trước khi bắt đầu đầu tư.

## Cần bao nhiêu tiền cho quỹ khẩn cấp?

| Đối tượng | Mức dự phòng | Lý do |
|-----------|-------------|-------|
| Người đi làm ổn định | 3 tháng chi tiêu | Rủi ro thấp |
| Freelancer, KD riêng | 6 tháng chi tiêu | Thu nhập không ổn định |
| Gia đình có con nhỏ | 6-9 tháng chi tiêu | Chi phí y tế, giáo dục bất ngờ |
| Người sắp nghỉ hưu | 12 tháng chi tiêu | Cần đệm an toàn dày |

**Ví dụ**: Chi tiêu 15 triệu/tháng → Quỹ khẩn cấp = 45-90 triệu.

## Cách xây dựng quỹ khẩn cấp

### Bước 1: Tính chi tiêu hàng tháng
Liệt kê tất cả chi phí cố định: tiền nhà, ăn uống, đi lại, bảo hiểm, internet...

### Bước 2: Đặt mục tiêu
Bắt đầu với 1 tháng chi tiêu, rồi tăng dần lên 3-6 tháng.

### Bước 3: Tự động hóa
Đặt lệnh tự động chuyển 10-20% lương vào tài khoản riêng ngay khi nhận lương.

### Bước 4: Gửi đúng nơi
Quỹ khẩn cấp cần THANH KHOẢN CAO — rút được ngay khi cần.

## Nên gửi quỹ khẩn cấp ở đâu?

| Nơi gửi | Lãi suất | Thanh khoản | Đánh giá |
|---------|----------|-------------|---------|
| Tiết kiệm online | 4-5%/năm | Rút ngay | ⭐⭐⭐⭐⭐ |
| Tài khoản tiết kiệm | 3-4%/năm | Rút ngay | ⭐⭐⭐⭐ |
| Gửi kỳ hạn 1-3 tháng | 4-5.5%/năm | 1-3 tháng | ⭐⭐⭐ |

## 3 sai lầm phổ biến

### 1. Không có quỹ khẩn cấp
70% người Việt không có đủ tiền dự phòng cho 3 tháng. Đây là rủi ro lớn nhất.

### 2. Đầu tư quỹ khẩn cấp vào chứng khoán/crypto
Khi cần tiền gấp mà thị trường đang giảm = bán lỗ. Quỹ khẩn cấp phải AN TOÀN tuyệt đối.

### 3. Dùng quỹ khẩn cấp cho mục đích không khẩn cấp
Du lịch, mua sắm không phải khẩn cấp. Hãy có khoản tiết kiệm riêng cho những mục tiêu đó.

## Câu hỏi thường gặp

### Có nên đầu tư trước khi có quỹ khẩn cấp?
Không. Quỹ khẩn cấp là ưu tiên số 1. Không có nó, bạn có thể phải bán tháo đầu tư khi cần tiền gấp.`
    },
    {
        title: 'Đầu tư vào quỹ mở tại Việt Nam — So sánh và lựa chọn 2026',
        slug: 'dau-tu-quy-mo-tai-viet-nam-2026',
        excerpt: 'So sánh các quỹ mở hàng đầu tại Việt Nam: DCDS, VESAF, VLGF. Hướng dẫn chọn quỹ phù hợp với mục tiêu đầu tư.',
        tags: ['quỹ mở', 'quỹ đầu tư', 'DCDS', 'VESAF'],
        reading_time: '9 phút',
        featured_image: img('1460925895917-afdab827c52f'),
        scheduled_at: '2026-02-17T09:00:00+07:00',
        content: `## Quỹ mở là gì?

**Quỹ mở (Open-ended Fund)** là quỹ đầu tư tập hợp tiền từ nhiều nhà đầu tư, được quản lý bởi công ty quản lý quỹ chuyên nghiệp. Bạn có thể mua bán chứng chỉ quỹ bất kỳ lúc nào.

## Phân loại quỹ mở

| Loại quỹ | Rủi ro | Lợi nhuận kỳ vọng | Phù hợp |
|---------|--------|-------------------|---------|
| Quỹ cổ phiếu | Cao | 12-20%/năm | Chấp nhận rủi ro |
| Quỹ cân bằng | Trung bình | 8-15%/năm | Vừa phải |
| Quỹ trái phiếu | Thấp | 5-8%/năm | An toàn |

## Top quỹ mở nổi bật tại Việt Nam

### 1. DCDS - Dragon Capital
Quỹ cổ phiếu lớn nhất VN, tập trung blue-chip. Hiệu suất 5 năm: ~15%/năm.

### 2. VESAF - VinaCapital
Quỹ cổ phiếu tăng trưởng, tập trung mid-cap tiềm năng. Hiệu suất tốt trong giai đoạn thị trường tăng.

### 3. VLGF - VinaCapital
Quỹ cổ phiếu vốn hóa lớn, ổn định hơn VESAF.

## Ưu điểm của quỹ mở

- Quản lý chuyên nghiệp — không cần tự phân tích cổ phiếu
- Đa dạng hóa tự động
- Đầu tư từ 100,000 VNĐ
- Thanh khoản T+3 đến T+5

## Nhược điểm cần lưu ý

- Phí quản lý 1.5-2.5%/năm — ăn mòn lợi nhuận dài hạn
- Không kiểm soát được danh mục đầu tư
- Hiệu suất phụ thuộc vào fund manager

## Câu hỏi thường gặp

### Nên chọn quỹ mở hay ETF?
ETF phí thấp hơn, phù hợp đầu tư thụ động. Quỹ mở phù hợp khi bạn tin tưởng vào khả năng quản lý của fund manager.

### Đầu tư quỹ mở có mất vốn không?
Có thể. Giá trị quỹ biến động theo thị trường. Nhưng đầu tư dài hạn 5-10 năm thường cho kết quả tích cực.`
    },
    {
        title: 'Tâm lý giao dịch — 7 sai lầm cảm xúc khiến nhà đầu tư thua lỗ',
        slug: 'tam-ly-giao-dich-sai-lam-cam-xuc',
        excerpt: 'Phân tích 7 bẫy tâm lý phổ biến nhất trong đầu tư: FOMO, tham lam, sợ hãi và cách kiểm soát cảm xúc hiệu quả.',
        tags: ['tâm lý', 'giao dịch', 'FOMO', 'quản lý rủi ro'],
        reading_time: '8 phút',
        featured_image: img('1507003211169-0a1dd7228f2d'),
        scheduled_at: '2026-02-18T09:00:00+07:00',
        content: `## Tại sao tâm lý quyết định 80% thành bại?

Warren Buffett nói: "Thị trường chứng khoán là nơi chuyển tiền từ người thiếu kiên nhẫn sang người kiên nhẫn." Phần lớn thua lỗ không đến từ chiến lược sai mà từ cảm xúc không kiểm soát được.

## 7 bẫy tâm lý phổ biến

### 1. FOMO (Fear Of Missing Out)
Sợ bỏ lỡ cơ hội → mua đuổi khi giá đã tăng cao. Đây là nguyên nhân #1 khiến người mới thua lỗ.

**Cách tránh**: Luôn có kế hoạch mua từ trước. Nếu bỏ lỡ, chờ cơ hội tiếp theo.

### 2. Tham lam — Không chốt lời
Cổ phiếu tăng 30% nhưng không bán vì nghĩ sẽ tăng tiếp → giá quay đầu, lợi nhuận bay hết.

**Cách tránh**: Đặt mục tiêu lợi nhuận trước khi mua. Chốt lời từng phần.

### 3. Sợ hãi — Bán tháo khi giảm
Thị trường giảm 10% → hoảng loạn bán tất cả → giá phục hồi nhưng đã bán mất.

**Cách tránh**: Nhớ rằng giảm 10-20% là bình thường. Chỉ bán khi fundamentals thay đổi.

### 4. Confirmation Bias
Chỉ tìm thông tin ủng hộ quyết định đã có, bỏ qua tín hiệu cảnh báo.

### 5. Sunk Cost Fallacy
"Đã lỗ nhiều rồi, bán cũng không được bao nhiêu" → tiếp tục giữ CP tệ thay vì cắt lỗ chuyển sang cơ hội khác.

### 6. Overtrading
Giao dịch quá nhiều → phí chồng phí, quyết định kém chất lượng.

### 7. Hiệu ứng đám đông
Mua/bán theo đám đông, diễn đàn, group tín hiệu mà không tự phân tích.

## 5 nguyên tắc kiểm soát cảm xúc

1. **Viết nhật ký giao dịch** — ghi lý do mua/bán để rút kinh nghiệm
2. **Đặt stop-loss trước** — bảo vệ vốn tự động
3. **Không xem bảng giá liên tục** — giảm stress
4. **Đầu tư theo kế hoạch** — DCA đều đặn, không timing market
5. **Nghỉ ngơi khi thua lỗ liên tục** — reset tâm lý

## Câu hỏi thường gặp

### Làm sao biết mình đang giao dịch theo cảm xúc?
Nếu bạn mua/bán mà không giải thích được lý do cụ thể bằng data, rất có thể bạn đang giao dịch theo cảm xúc.`
    },
    {
        title: 'Thuế đầu tư tại Việt Nam 2026 — Hướng dẫn đầy đủ cho nhà đầu tư',
        slug: 'thue-dau-tu-viet-nam-2026-huong-dan',
        excerpt: 'Tổng hợp thuế đầu tư tại Việt Nam: thuế chứng khoán, thuế BĐS, thuế crypto và cách tối ưu thuế hợp pháp.',
        tags: ['thuế', 'đầu tư', 'chứng khoán', 'pháp luật'],
        reading_time: '9 phút',
        featured_image: img('1554224155-6726b3ff858f'),
        scheduled_at: '2026-02-19T09:00:00+07:00',
        content: `## Tổng quan thuế đầu tư tại Việt Nam

Hiểu rõ nghĩa vụ thuế giúp bạn tính toán lợi nhuận thực tế và tránh rủi ro pháp lý. Dưới đây là hướng dẫn đầy đủ.

## Thuế theo loại hình đầu tư

### 1. Thuế chứng khoán

| Loại thuế | Mức thuế | Ghi chú |
|-----------|---------|---------|
| Thuế bán CP | 0.1% giá trị bán | Trừ tự động khi bán |
| Thuế cổ tức tiền mặt | 5% | CTCK khấu trừ |
| Thuế cổ tức bằng CP | Tạm miễn | Chỉ tính khi bán |

### 2. Thuế bất động sản

| Loại thuế | Mức thuế | Ghi chú |
|-----------|---------|---------|
| Thuế chuyển nhượng | 2% giá bán | Trên hợp đồng công chứng |
| Thuế thu nhập BĐS | 2% giá bán | Hoặc 25% lợi nhuận |
| Thuế cho thuê | 5% doanh thu | Nếu > 100 triệu/năm |

### 3. Thuế đầu tư crypto
Hiện chưa có khung pháp lý rõ ràng tại Việt Nam. Tuy nhiên, thu nhập từ crypto có thể chịu thuế TNCN 20% theo quy định chung.

### 4. Thuế tiền gửi ngân hàng
Lãi suất tiền gửi MIỄN thuế TNCN — đây là ưu điểm lớn của kênh tiết kiệm.

## Cách tối ưu thuế hợp pháp

### 1. Sử dụng tài khoản đầu tư dài hạn
Giữ cổ phiếu dài hạn → ít giao dịch → ít thuế bán 0.1%.

### 2. Tận dụng khấu trừ thuế
Nắm rõ các khoản được giảm trừ gia cảnh: 11 triệu/tháng cho bản thân, 4.4 triệu/người phụ thuộc.

### 3. Đa dạng kênh đầu tư
Phân bổ hợp lý giữa kênh chịu thuế (CK, BĐS) và miễn thuế (tiết kiệm, bảo hiểm nhân thọ).

## Câu hỏi thường gặp

### Có cần khai thuế đầu tư chứng khoán không?
Thuế bán CP 0.1% và thuế cổ tức 5% đều được CTCK tự động khấu trừ. Bạn không cần khai thuế riêng.

### Đầu tư crypto có phải đóng thuế?
Theo luật hiện hành, thu nhập từ mọi nguồn đều phải chịu thuế TNCN. Tuy nhiên, việc thực thi với crypto vẫn chưa rõ ràng.`
    },
    {
        title: 'Cách đọc báo cáo tài chính doanh nghiệp — Kỹ năng cốt lõi cho nhà đầu tư',
        slug: 'cach-doc-bao-cao-tai-chinh-doanh-nghiep',
        excerpt: 'Hướng dẫn đọc 3 báo cáo tài chính quan trọng nhất: bảng cân đối, kết quả kinh doanh và lưu chuyển tiền tệ.',
        tags: ['báo cáo tài chính', 'phân tích cơ bản', 'chứng khoán', 'EPS'],
        reading_time: '11 phút',
        featured_image: img('1454165804606-c3d57bc86b40'),
        scheduled_at: '2026-02-20T09:00:00+07:00',
        content: `## Tại sao phải đọc báo cáo tài chính?

Báo cáo tài chính là "sức khỏe" của doanh nghiệp. Warren Buffett đọc hàng trăm báo cáo tài chính mỗi năm. Đây là cách duy nhất để biết doanh nghiệp thực sự làm ăn ra sao.

## 3 báo cáo quan trọng nhất

### 1. Bảng cân đối kế toán (Balance Sheet)
Cho biết doanh nghiệp SỞ HỮU những gì và NỢ bao nhiêu tại một thời điểm.

| Mục | Ý nghĩa | Cần chú ý |
|-----|---------|-----------|
| Tổng tài sản | DN sở hữu bao nhiêu | Tăng trưởng qua các năm |
| Nợ phải trả | DN nợ bao nhiêu | Tỷ lệ nợ/vốn < 1 là an toàn |
| Vốn chủ sở hữu | Giá trị thực của DN | Phải tăng đều |

### 2. Báo cáo kết quả kinh doanh (Income Statement)
Cho biết DN KIẾM ĐƯỢC bao nhiêu trong một kỳ.

**Công thức cốt lõi**: Doanh thu - Chi phí = Lợi nhuận

| Chỉ số | Công thức | Ý nghĩa |
|--------|----------|---------|
| Biên lợi nhuận gộp | Lãi gộp / DT | Hiệu quả sản xuất |
| Biên lợi nhuận ròng | LN ròng / DT | Hiệu quả tổng thể |
| EPS | LN ròng / Số CP | Lợi nhuận trên mỗi CP |

### 3. Báo cáo lưu chuyển tiền tệ (Cash Flow)
Cho biết TIỀN THẬT đi vào và ra khỏi DN. Đây là báo cáo khó giả mạo nhất.

- **Dòng tiền hoạt động kinh doanh** > 0: DN tạo ra tiền thật từ hoạt động chính
- **Dòng tiền đầu tư** < 0: DN đang mở rộng (tín hiệu tốt nếu hợp lý)
- **Dòng tiền tài chính**: Vay nợ, trả nợ, chia cổ tức

## 5 chỉ số tài chính quan trọng nhất

| Chỉ số | Công thức | Mức tốt |
|--------|----------|---------|
| ROE | LN ròng / Vốn CSH | > 15% |
| ROA | LN ròng / Tổng TS | > 5% |
| D/E | Nợ / Vốn CSH | < 1 |
| Current Ratio | TS ngắn hạn / Nợ NH | > 1.5 |
| EPS Growth | Tăng trưởng EPS YoY | > 10% |

## Câu hỏi thường gặp

### Đọc báo cáo tài chính ở đâu?
Website cổ phiếu68.com, cafef.vn, hoặc trực tiếp trên website IR của doanh nghiệp. Tất cả đều miễn phí.

### Cần đọc bao nhiêu năm?
Tối thiểu 3-5 năm gần nhất để thấy xu hướng. 1 năm đơn lẻ không nói lên nhiều điều.`
    },
    {
        title: 'Bitcoin Halving là gì? Tác động đến giá BTC và chiến lược đầu tư',
        slug: 'bitcoin-halving-la-gi-tac-dong-gia-btc',
        excerpt: 'Giải thích Bitcoin Halving — sự kiện quan trọng nhất của BTC. Phân tích lịch sử giá sau halving và chiến lược tối ưu.',
        tags: ['Bitcoin', 'halving', 'crypto', 'chiến lược'],
        reading_time: '8 phút',
        featured_image: img('1518546305927-5a555bb7020d'),
        scheduled_at: '2026-02-21T09:00:00+07:00',
        content: `## Bitcoin Halving là gì?

**Bitcoin Halving** là sự kiện phần thưởng khối (block reward) cho thợ đào Bitcoin bị cắt giảm 50%, xảy ra mỗi 210,000 block (~4 năm). Đây là cơ chế kiểm soát lạm phát được lập trình sẵn trong code Bitcoin.

## Lịch sử các lần Halving

| Lần | Năm | Phần thưởng | Giá BTC lúc đó | Giá cao nhất sau |
|-----|-----|------------|----------------|-----------------|
| 1 | 2012 | 50→25 BTC | $12 | $1,100 (+9,000%) |
| 2 | 2016 | 25→12.5 BTC | $650 | $20,000 (+2,900%) |
| 3 | 2020 | 12.5→6.25 BTC | $8,600 | $69,000 (+700%) |
| 4 | 2024 | 6.25→3.125 BTC | $64,000 | Đang diễn ra |

## Tại sao Halving quan trọng?

### 1. Giảm cung Bitcoin mới
Nguồn cung BTC mới giảm 50% → khan hiếm hơn → áp lực tăng giá (nếu cầu giữ nguyên hoặc tăng).

### 2. Chu kỳ giá lịch sử
Mỗi lần halving đều kéo theo bull run kéo dài 12-18 tháng. Tuy nhiên, mức tăng giảm dần qua mỗi chu kỳ.

### 3. Tâm lý thị trường
Halving tạo narrative mạnh mẽ, thu hút dòng tiền mới từ nhà đầu tư tổ chức và cá nhân.

## Chiến lược đầu tư theo chu kỳ Halving

### 1. Tích lũy trước Halving 6-12 tháng
Lịch sử cho thấy giai đoạn trước halving là thời điểm tốt để mua BTC.

### 2. DCA đều đặn
Áp dụng chiến lược mua đều hàng tuần/tháng thay vì all-in một lần.

### 3. Chốt lời từng phần sau Halving 12-18 tháng
Bán 20-30% khi giá tăng 2-3x. Giữ lại 50-70% cho dài hạn.

### 4. Không FOMO ở đỉnh
Khi mọi người xung quanh đều nói về Bitcoin → có thể đã gần đỉnh. Đây là lúc cần thận trọng nhất.

## Câu hỏi thường gặp

### Halving tiếp theo khi nào?
Halving lần thứ 5 dự kiến vào năm 2028, khi phần thưởng giảm từ 3.125 xuống 1.5625 BTC.

### Halving có đảm bảo giá tăng không?
Không đảm bảo. Lịch sử cho thấy xu hướng tăng nhưng past performance doesn't guarantee future results. Nhiều yếu tố khác cũng ảnh hưởng đến giá.`
    },
    {
        title: 'REITs là gì? Cách đầu tư bất động sản không cần vốn lớn',
        slug: 'reits-la-gi-dau-tu-bat-dong-san-von-nho',
        excerpt: 'Tìm hiểu REITs — quỹ tín thác bất động sản. Cách đầu tư BĐS chỉ với vài triệu đồng, nhận cổ tức đều đặn.',
        tags: ['REITs', 'bất động sản', 'quỹ đầu tư', 'thu nhập thụ động'],
        reading_time: '8 phút',
        featured_image: img('1560518883-ce09cec164f7'),
        scheduled_at: '2026-02-22T09:00:00+07:00',
        content: `## REITs là gì?

**REITs (Real Estate Investment Trust)** là quỹ tín thác bất động sản — hình thức đầu tư BĐS thông qua chứng khoán. Thay vì mua cả căn nhà/tòa nhà, bạn mua chứng chỉ quỹ REITs để sở hữu một phần danh mục BĐS.

## So sánh REITs vs Mua BĐS trực tiếp

| Tiêu chí | REITs | BĐS trực tiếp |
|----------|-------|---------------|
| Vốn tối thiểu | Vài triệu | Hàng tỷ |
| Thanh khoản | Cao (bán nhanh) | Thấp (bán lâu) |
| Quản lý | Chuyên nghiệp | Tự quản lý |
| Đa dạng hóa | Nhiều BĐS | 1-2 BĐS |
| Cổ tức | 4-8%/năm | Phụ thuộc cho thuê |
| Đòn bẩy | Không | Có (vay ngân hàng) |

## Các loại REITs

### 1. Equity REITs (Phổ biến nhất)
Sở hữu và vận hành BĐS thực: tòa nhà văn phòng, trung tâm thương mại, kho bãi, căn hộ cho thuê.

### 2. Mortgage REITs
Đầu tư vào các khoản vay thế chấp BĐS. Lợi nhuận từ chênh lệch lãi suất.

### 3. Hybrid REITs
Kết hợp cả sở hữu BĐS và đầu tư mortgage.

## REITs tại Việt Nam

Thị trường REITs tại VN còn non trẻ nhưng đang phát triển:

- **TCREIT**: Quỹ tín thác BĐS đầu tiên tại VN (Techcom Capital)
- **Quỹ VFMVN Real Estate ETF**: Theo dõi nhóm cổ phiếu BĐS niêm yết

Ngoài ra, bạn có thể đầu tư REITs quốc tế qua các nền tảng như eToro, Interactive Brokers.

## Ưu điểm nổi bật của REITs

### 1. Thu nhập thụ động ổn định
REITs bắt buộc phải chia tối thiểu 90% lợi nhuận cho cổ đông → cổ tức cao và đều.

### 2. Bảo vệ trước lạm phát
Giá thuê BĐS thường tăng theo lạm phát → doanh thu REITs tăng tự nhiên.

### 3. Tiếp cận BĐS chất lượng cao
Tòa nhà văn phòng hạng A, trung tâm thương mại lớn — những BĐS mà cá nhân khó sở hữu.

## Câu hỏi thường gặp

### REITs có rủi ro gì?
Giá REITs biến động theo thị trường chứng khoán, nhạy cảm với lãi suất. Khi lãi suất tăng, REITs thường giảm giá.

### Nên phân bổ bao nhiêu % vào REITs?
Khoảng 5-15% danh mục đầu tư tổng thể. REITs là công cụ đa dạng hóa, không nên tập trung quá nhiều.`
    }
];

async function seed() {
    console.log('🌱 Seeding 10 bài viết mới (batch 5) - Lên lịch từ 13/02 đến 22/02...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth failed:', authError.message); return; }
    console.log('✅ Logged in\n');

    let success = 0;
    for (const post of posts) {
        const { error } = await supabase.from('posts').insert({
            ...post,
            is_published: true,
            published_at: post.scheduled_at,
        });
        if (error) {
            console.log(`❌ ${post.title.substring(0, 60)}: ${error.message}`);
        } else {
            console.log(`✅ ${post.title.substring(0, 60)} | ${post.scheduled_at}`);
            success++;
        }
    }
    console.log(`\n🎉 Done! ${success}/${posts.length} bài đã được tạo và xuất bản.`);
}

seed();
