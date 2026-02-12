import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const SITE = 'https://cachdautu.com';
const img = (id, w = 1200, h = 630) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const posts = [
    {
        title: 'Lãi kép là gì? Công thức tính và ví dụ thực tế 2026',
        slug: 'lai-kep-la-gi-cong-thuc-tinh',
        excerpt: 'Hiểu rõ sức mạnh lãi kép - vũ khí quan trọng nhất của nhà đầu tư dài hạn. Kèm công thức tính và bảng so sánh thực tế.',
        tags: ['lãi kép', 'tài chính cá nhân', 'người mới', 'compound interest'],
        reading_time: '8 phút',
        featured_image: img('1633158829585-23ba8f7c8451'),
        is_published: false,
        content: `## Lãi kép là gì?

**Lãi kép (Compound Interest)** là lãi tính trên cả vốn gốc lẫn lãi tích lũy từ các kỳ trước. Albert Einstein từng gọi lãi kép là "kỳ quan thứ 8 của thế giới" — kẻ hiểu nó sẽ kiếm được, kẻ không hiểu sẽ phải trả.

Khác với lãi đơn chỉ tính trên vốn gốc, lãi kép tạo ra hiệu ứng "bóng tuyết" — tiền lãi tiếp tục sinh ra lãi, tạo đà tăng trưởng theo cấp số nhân theo thời gian.

## Công thức tính lãi kép

**Công thức cơ bản:** A = P × (1 + r/n)^(n×t)

Trong đó:
- A = Số tiền cuối cùng
- P = Vốn gốc ban đầu
- r = Lãi suất hàng năm (dạng thập phân)
- n = Số lần ghép lãi trong năm
- t = Số năm đầu tư

## Ví dụ thực tế: Sức mạnh thời gian

| Thời gian | Đầu tư 5tr/tháng (10%/năm) | Đầu tư 5tr/tháng (15%/năm) | Đầu tư 5tr/tháng (20%/năm) |
|-----------|---------------------------|---------------------------|---------------------------|
| 5 năm | 388 triệu | 430 triệu | 478 triệu |
| 10 năm | 1.03 tỷ | 1.35 tỷ | 1.79 tỷ |
| 20 năm | 3.8 tỷ | 7.2 tỷ | 14.1 tỷ |
| 30 năm | 11.3 tỷ | 31.7 tỷ | 93.8 tỷ |

> Chỉ cần tăng lãi suất từ 10% lên 20%/năm, sau 30 năm khoản đầu tư chênh lệch tới 8 lần!

## Quy tắc 72 — Ước tính nhanh

**Quy tắc 72** giúp bạn ước tính nhanh thời gian để tiền nhân đôi: Số năm = 72 ÷ Lãi suất (%)

| Lãi suất | Thời gian nhân đôi |
|----------|-------------------|
| 6% (tiết kiệm) | 12 năm |
| 10% (quỹ mở) | 7.2 năm |
| 15% (chứng khoán) | 4.8 năm |
| 20% (đầu tư tích cực) | 3.6 năm |

## 5 cách tận dụng lãi kép hiệu quả

### 1. Bắt đầu càng sớm càng tốt
Thời gian là yếu tố quan trọng nhất. Người bắt đầu đầu tư từ 25 tuổi sẽ có lợi thế vượt trội so với người bắt đầu từ 35 tuổi, dù đầu tư ít hơn.

### 2. Đầu tư đều đặn (DCA)
Áp dụng [chiến lược DCA](/blog/tai-chinh-ca-nhan/chien-luoc-dca-binh-quan-gia) — đầu tư một khoản cố định hàng tháng bất kể thị trường lên hay xuống.

### 3. Tái đầu tư cổ tức và lãi
Không rút lãi ra tiêu xài — hãy để lãi tiếp tục làm việc cho bạn. Tái đầu tư cổ tức là cách đơn giản nhất để tối ưu lãi kép.

### 4. Tối ưu lãi suất
Tìm kiếm các kênh đầu tư có lãi suất cao hơn gửi tiết kiệm: [chứng khoán](/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi), [quỹ mở](/blog/quy-dau-tu/quy-mo-la-gi-huong-dan), hoặc [ETF](/blog/quy-dau-tu/so-sanh-cac-quy-etf-viet-nam).

### 5. Kiên nhẫn và kỷ luật
Lãi kép cần thời gian để phát huy sức mạnh. Đừng rút vốn sớm vì biến động ngắn hạn.

## Câu hỏi thường gặp

### Lãi kép khác lãi đơn như thế nào?
Lãi đơn chỉ tính trên vốn gốc ban đầu, trong khi lãi kép tính trên cả vốn gốc và lãi tích lũy. Sau thời gian dài, sự khác biệt là rất lớn.

### Cần bao nhiêu tiền để bắt đầu tận dụng lãi kép?
Bạn có thể bắt đầu với chỉ 500.000đ/tháng. Quan trọng nhất là bắt đầu sớm và đều đặn, không phải số tiền lớn.

### Lãi kép có áp dụng cho chứng khoán không?
Có! Khi bạn tái đầu tư cổ tức và lợi nhuận, chứng khoán cũng tạo ra hiệu ứng lãi kép. VN-Index đã tăng trung bình 15%/năm trong 20 năm qua.`
    },
    {
        title: 'ETF là gì? Hướng dẫn đầu tư ETF cho người mới 2026',
        slug: 'etf-la-gi-huong-dan-dau-tu',
        excerpt: 'Tìm hiểu ETF là gì, cách hoạt động và tại sao ETF là lựa chọn đầu tư thông minh cho người Việt. Kèm danh sách ETF tại VN.',
        tags: ['ETF', 'quỹ đầu tư', 'chứng khoán', 'người mới'],
        reading_time: '10 phút',
        featured_image: img('1611974789855-9c2a0a7236a3'),
        is_published: false,
        content: `## ETF là gì?

**ETF (Exchange-Traded Fund)** là quỹ đầu tư chỉ số được niêm yết và giao dịch trên sàn chứng khoán giống như cổ phiếu. Thay vì phải mua từng cổ phiếu riêng lẻ, bạn chỉ cần mua 1 chứng chỉ quỹ ETF là đã sở hữu một danh mục đa dạng.

ETF kết hợp ưu điểm của quỹ đầu tư (đa dạng hóa) và cổ phiếu (giao dịch linh hoạt), với phí quản lý thấp hơn nhiều so với quỹ mở thông thường.

## Tại sao nên đầu tư ETF?

### 1. Đa dạng hóa tự động
Mua 1 lô ETF VN30 = sở hữu 30 cổ phiếu lớn nhất Việt Nam. Giảm rủi ro đáng kể so với mua từng cổ phiếu.

### 2. Phí thấp
Phí quản lý ETF tại Việt Nam chỉ khoảng 0.5-0.8%/năm, so với 1.5-2.5% của quỹ mở truyền thống.

### 3. Thanh khoản cao
Giao dịch giống cổ phiếu — mua bán trong ngày, không cần chờ T+3 như quỹ mở.

## Các ETF phổ biến tại Việt Nam

| ETF | Chỉ số theo dõi | Phí quản lý | Quy mô (tỷ) |
|-----|----------------|-------------|-------------|
| FUEVFVND | VN30 | 0.65% | 12,000+ |
| E1VFVN30 | VN30 | 0.80% | 8,500+ |
| FUESSV50 | VNFIN Select | 0.65% | 3,200+ |
| FUEDCMID | VN Diamond | 0.80% | 1,500+ |

## Cách bắt đầu đầu tư ETF

### Bước 1: Mở tài khoản chứng khoán
Bạn cần [mở tài khoản](/blog/chung-khoan/cach-mo-tai-khoan-chung-khoan) tại một công ty chứng khoán uy tín. Quá trình mở tài khoản hiện nay có thể thực hiện 100% online.

### Bước 2: Nạp tiền vào tài khoản
Chuyển khoản từ ngân hàng vào tài khoản chứng khoán. Với ETF, bạn có thể bắt đầu từ 1-2 triệu đồng.

### Bước 3: Đặt lệnh mua ETF
Tìm mã ETF (ví dụ: FUEVFVND) trên ứng dụng chứng khoán và đặt lệnh mua giống như mua cổ phiếu thông thường.

### Bước 4: Áp dụng DCA
Mua đều đặn hàng tháng theo [chiến lược DCA](/blog/tai-chinh-ca-nhan/chien-luoc-dca-binh-quan-gia) để giảm rủi ro biến động giá.

## So sánh ETF vs Quỹ mở vs Cổ phiếu

| Tiêu chí | ETF | Quỹ mở | Cổ phiếu riêng lẻ |
|----------|-----|--------|------------------|
| Đa dạng hóa | Cao | Cao | Thấp |
| Phí quản lý | Thấp (0.5-0.8%) | Cao (1.5-2.5%) | Không có |
| Thanh khoản | Cao | Trung bình | Tùy cổ phiếu |
| Phù hợp | Mọi người | Người ít thời gian | Có kiến thức |

## Câu hỏi thường gặp

### ETF có rủi ro không?
Có, ETF vẫn chịu rủi ro thị trường. Tuy nhiên, nhờ đa dạng hóa, rủi ro thấp hơn nhiều so với đầu tư vào 1-2 cổ phiếu riêng lẻ.

### Cần bao nhiêu tiền để đầu tư ETF?
Chỉ cần khoảng 1-2 triệu đồng là đủ để mua 1 lô ETF. Phù hợp với người mới bắt đầu.

### Nên chọn ETF nào cho người mới?
FUEVFVND theo dõi VN30 là lựa chọn phổ biến nhất. Quỹ này bao gồm 30 cổ phiếu lớn nhất, thanh khoản tốt nhất trên sàn.`
    },
    {
        title: 'Cách đọc bảng giá chứng khoán: Hướng dẫn chi tiết từ A-Z',
        slug: 'cach-doc-bang-gia-chung-khoan',
        excerpt: 'Hướng dẫn đọc bảng giá chứng khoán với giải thích từng cột, mã màu và thuật ngữ quan trọng.',
        tags: ['chứng khoán', 'bảng giá', 'người mới', 'hướng dẫn'],
        reading_time: '7 phút',
        featured_image: img('1642790106117-e829e14a795f'),
        is_published: false,
        content: `## Bảng giá chứng khoán là gì?

Bảng giá chứng khoán là nơi hiển thị thông tin giá cả, khối lượng giao dịch và biến động của tất cả cổ phiếu trên sàn. Đây là công cụ không thể thiếu của mọi nhà đầu tư.

## Giải thích các cột quan trọng

### Mã chứng khoán (Ticker)
Mỗi công ty có một mã riêng gồm 3 ký tự. Ví dụ: VNM (Vinamilk), VHM (Vinhomes), FPT (FPT Corporation).

### Giá tham chiếu (TC)
Giá đóng cửa của phiên giao dịch trước đó. Đây là mốc để tính biên độ dao động giá trong ngày.

### Giá trần (Trần) và Giá sàn (Sàn)
- **Giá trần**: Giá cao nhất cổ phiếu có thể đạt trong ngày (TC + 7% trên HOSE)
- **Giá sàn**: Giá thấp nhất (TC - 7% trên HOSE)

## Ý nghĩa các màu sắc

| Màu | Ý nghĩa | Mô tả |
|-----|---------|-------|
| Tím | Giá trần | Cổ phiếu tăng tối đa trong ngày |
| Xanh lá | Tăng giá | Giá hiện tại cao hơn giá tham chiếu |
| Đỏ | Giảm giá | Giá hiện tại thấp hơn giá tham chiếu |
| Vàng | Giá tham chiếu | Giá không đổi so với hôm trước |
| Xanh dương | Giá sàn | Cổ phiếu giảm tối đa trong ngày |

## Các chỉ số quan trọng cần theo dõi

### Khối lượng giao dịch
Số lượng cổ phiếu được mua bán trong một khoảng thời gian. Khối lượng cao = nhiều người quan tâm.

### Dư mua / Dư bán
Hiển thị số lượng lệnh đang chờ mua và bán tại các mức giá khác nhau.

### Bước giá
Mức giá thay đổi tối thiểu tùy theo mức giá cổ phiếu.

## Mẹo đọc bảng giá hiệu quả

- Theo dõi khối lượng bất thường — tín hiệu có dòng tiền lớn
- So sánh giá hiện tại với giá tham chiếu để đánh giá xu hướng trong ngày
- Chú ý tỷ lệ dư mua/dư bán để nhận biết áp lực mua/bán
- Kết hợp với [phân tích kỹ thuật](/blog/chung-khoan/phan-tich-ky-thuat-chung-khoan) để ra quyết định chính xác hơn

## Câu hỏi thường gặp

### Sàn HOSE, HNX và UPCOM khác nhau thế nào?
HOSE là sàn lớn nhất với biên độ ±7%, HNX biên độ ±10%, UPCOM biên độ ±15%. Cổ phiếu trên HOSE thường có chất lượng và thanh khoản tốt nhất.

### Tại sao cổ phiếu có màu tím liên tục?
Cổ phiếu tăng trần liên tục thường do tin tức tích cực hoặc đầu cơ. Cần thận trọng khi mua đuổi giá trần vì rủi ro giảm mạnh rất cao.`
    },
    {
        title: 'Quỹ khẩn cấp: Tại sao bạn cần và cách xây dựng nhanh nhất',
        slug: 'quy-khan-cap-tai-sao-can-xay-dung',
        excerpt: 'Quỹ khẩn cấp là nền tảng tài chính quan trọng nhất. Hướng dẫn từng bước xây dựng quỹ dự phòng 3-6 tháng chi tiêu.',
        tags: ['quỹ khẩn cấp', 'tài chính cá nhân', 'tiết kiệm', 'an toàn tài chính'],
        reading_time: '6 phút',
        featured_image: img('1579621970563-9ae2e01248e6'),
        is_published: false,
        content: `## Quỹ khẩn cấp là gì?

**Quỹ khẩn cấp** là một khoản tiền dự phòng được giữ ở dạng thanh khoản cao (dễ rút ra bất cứ lúc nào), dùng để xử lý các tình huống tài chính bất ngờ như mất việc, ốm đau, hoặc sửa chữa nhà cửa.

Đây là bước ĐẦU TIÊN trước khi bạn nghĩ đến bất kỳ hình thức [đầu tư](/blog/tai-chinh-ca-nhan/dau-tu-la-gi-huong-dan-toan-dien) nào.

## Tại sao quỹ khẩn cấp quan trọng?

### 1. Bảo vệ trước rủi ro bất ngờ
68% người Việt không có đủ tiền dự phòng cho 3 tháng chi tiêu. Khi gặp sự cố, họ phải vay nặng lãi hoặc bán tháo tài sản.

### 2. Cho phép bạn đầu tư an tâm
Khi đã có quỹ dự phòng, bạn sẽ không phải bán lỗ cổ phiếu hay rút tiền đầu tư khi cần tiền gấp.

### 3. Giảm stress tài chính
Nghiên cứu cho thấy 78% người có quỹ khẩn cấp ít bị stress về tài chính hơn đáng kể.

## Bạn cần bao nhiêu tiền?

| Tình trạng | Mức khuyến nghị | Ví dụ (chi tiêu 15tr/tháng) |
|------------|----------------|---------------------------|
| Độc thân, công việc ổn định | 3 tháng | 45 triệu |
| Có gia đình | 6 tháng | 90 triệu |
| Tự kinh doanh / freelance | 9-12 tháng | 135-180 triệu |

## Kế hoạch xây dựng quỹ khẩn cấp trong 6 tháng

### Tháng 1-2: Thiết lập nền tảng
- Mở tài khoản tiết kiệm riêng chỉ dành cho quỹ khẩn cấp
- Áp dụng [quy tắc 50/30/20](/blog/tai-chinh-ca-nhan/quy-tac-50-30-20)
- Cắt giảm 1-2 khoản chi không cần thiết

### Tháng 3-4: Tăng tốc
- Bán đồ không dùng trên Shopee, Chợ Tốt
- Tìm nguồn thu nhập phụ (freelance, bán hàng online)
- Tự động chuyển tiền tiết kiệm vào đầu tháng

### Tháng 5-6: Hoàn thiện
- Đánh giá lại mục tiêu và điều chỉnh
- Khi đủ quỹ khẩn cấp, bắt đầu [đầu tư](/blog/tai-chinh-ca-nhan/xay-dung-danh-muc-dau-tu-da-dang-hoa) phần tiền tiết kiệm còn lại

## Nên để quỹ khẩn cấp ở đâu?

- **Tài khoản tiết kiệm online**: Lãi suất 4-5%/năm, rút bất cứ lúc nào
- **Tiết kiệm không kỳ hạn**: Linh hoạt nhất nhưng lãi suất thấp
- **KHÔNG nên**: Đầu tư vào chứng khoán, crypto hay bất động sản

## Câu hỏi thường gặp

### Có nên dùng quỹ khẩn cấp để đầu tư khi thấy cơ hội tốt?
Tuyệt đối không! Quỹ khẩn cấp phải luôn sẵn sàng. Nếu muốn đầu tư, hãy dùng tiền riêng ngoài quỹ khẩn cấp.

### Quỹ khẩn cấp bao nhiêu là đủ?
Tối thiểu 3 tháng chi tiêu cho người độc thân, 6 tháng cho gia đình. Nếu công việc không ổn định, nên có 9-12 tháng.`
    },
    {
        title: 'Stablecoin là gì? USDT, USDC và vai trò trong thị trường crypto',
        slug: 'stablecoin-la-gi-usdt-usdc',
        excerpt: 'Tìm hiểu stablecoin — loại tiền số ổn định giá, cách hoạt động và tại sao nó quan trọng trong thế giới crypto.',
        tags: ['stablecoin', 'USDT', 'crypto', 'DeFi'],
        reading_time: '8 phút',
        featured_image: img('1622630998477-0d96834cf5db'),
        is_published: false,
        content: `## Stablecoin là gì?

**Stablecoin** là loại tiền mã hóa được thiết kế để duy trì giá trị ổn định, thường neo theo USD (1 stablecoin ≈ 1 USD). Khác với Bitcoin hay Ethereum có thể biến động 10-20%/ngày, stablecoin giữ giá gần như không đổi.

## Các loại stablecoin phổ biến

| Stablecoin | Tổ chức | Vốn hóa | Cơ chế bảo chứng |
|-----------|---------|---------|-----------------|
| USDT (Tether) | Tether Ltd | $90 tỷ+ | Tiền mặt + trái phiếu |
| USDC | Circle | $30 tỷ+ | Tiền mặt + kho bạc Mỹ |
| DAI | MakerDAO | $5 tỷ+ | Crypto thế chấp |
| BUSD | Binance/Paxos | Đang thu hẹp | Tiền mặt |

## Tại sao cần stablecoin?

### 1. Trú ẩn khi thị trường giảm
Khi dự đoán thị trường sẽ giảm, nhà đầu tư chuyển crypto sang stablecoin để bảo toàn giá trị mà không cần rút về tiền fiat.

### 2. Giao dịch nhanh và rẻ
Chuyển USDT giữa các sàn chỉ mất vài phút và phí rất thấp, thay vì chờ 1-3 ngày chuyển khoản ngân hàng quốc tế.

### 3. Kiếm lãi suất cao
Gửi stablecoin trên các nền tảng DeFi có thể nhận lãi suất 3-8%/năm — cao hơn gửi tiết kiệm USD tại ngân hàng.

## Rủi ro cần biết

### Rủi ro depeg (mất neo giá)
Trường hợp UST/LUNA sụp đổ năm 2022 là bài học đắt giá. Algorithmic stablecoin có rủi ro cao hơn loại có bảo chứng.

### Rủi ro pháp lý
Chính phủ nhiều nước đang xem xét quy định chặt hơn với stablecoin, có thể ảnh hưởng đến hoạt động.

## Cách sử dụng stablecoin an toàn

- Ưu tiên USDT và USDC — hai đồng lớn nhất, uy tín nhất
- Không để quá nhiều tiền trên một nền tảng
- Kết hợp với [bảo mật ví crypto](/blog/crypto/rui-ro-dau-tu-crypto-cach-phong-tranh) để bảo vệ tài sản
- Theo dõi tin tức pháp lý liên quan đến stablecoin

## Câu hỏi thường gặp

### USDT và USDC khác nhau thế nào?
USDT có vốn hóa lớn hơn và thanh khoản tốt hơn, nhưng USDC minh bạch hơn về dự trữ tài sản. Cả hai đều an toàn cho sử dụng hàng ngày.

### Stablecoin có phải là đầu tư tốt không?
Stablecoin không tăng giá nên không phải kênh đầu tư sinh lời. Nó là công cụ lưu trữ giá trị và giao dịch trong thế giới crypto.`
    }
];

async function seed() {
    console.log('🌱 Seeding 5 bài viết chất lượng cao (batch 3)...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) {
        console.log('❌ Auth failed:', authError.message);
        return;
    }
    console.log('✅ Logged in\n');

    const { data: { user } } = await supabase.auth.getUser();

    for (const post of posts) {
        const { error } = await supabase.from('posts').insert({
            ...post,
            author_id: user.id,
        });
        if (error) {
            console.log(`❌ ${post.title.substring(0, 50)}: ${error.message}`);
        } else {
            console.log(`✅ ${post.title.substring(0, 50)}`);
        }
    }
    console.log('\n🎉 Done!');
}

seed();
