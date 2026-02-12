import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const img = (id, w = 1200, h = 630) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const posts = [
    {
        title: 'P/E là gì? Cách sử dụng chỉ số P/E để định giá cổ phiếu',
        slug: 'pe-la-gi-dinh-gia-co-phieu',
        excerpt: 'Hiểu chỉ số P/E — công cụ định giá cổ phiếu phổ biến nhất. Kèm cách đọc, so sánh và tránh bẫy P/E thấp.',
        tags: ['P/E', 'chứng khoán', 'định giá', 'phân tích cơ bản'],
        reading_time: '9 phút',
        featured_image: img('1535320903710-d946a44dc2d0'),
        is_published: false,
        content: `## Chỉ số P/E là gì?

**P/E (Price-to-Earnings Ratio)** là tỷ lệ giữa giá cổ phiếu và lợi nhuận trên mỗi cổ phiếu (EPS). Nói đơn giản: P/E cho biết bạn phải trả bao nhiêu đồng để nhận được 1 đồng lợi nhuận.

**Công thức:** P/E = Giá cổ phiếu / EPS (Lợi nhuận trên mỗi cổ phiếu)

## Ý nghĩa các mức P/E

| Mức P/E | Ý nghĩa | Đánh giá |
|---------|---------|---------|
| < 10 | Rất thấp | Có thể là cơ hội HOẶC bẫy giá trị |
| 10-15 | Hợp lý | Phù hợp với cổ phiếu tăng trưởng ổn định |
| 15-25 | Trung bình - Cao | Kỳ vọng tăng trưởng tốt |
| > 25 | Cao | Cần tăng trưởng rất mạnh để justify |

## Cách đọc P/E đúng cách

### 1. So sánh trong cùng ngành
P/E = 20 có thể rẻ cho ngành công nghệ nhưng đắt cho ngành ngân hàng. Luôn so sánh P/E với trung bình ngành.

### 2. Kết hợp với tăng trưởng EPS
Chỉ số PEG (P/E ÷ Tốc độ tăng trưởng EPS) chính xác hơn P/E đơn lẻ. PEG < 1 thường là cơ hội tốt.

### 3. Phân biệt Trailing P/E vs Forward P/E
- **Trailing P/E**: Dựa trên lợi nhuận 12 tháng qua (số liệu thực)
- **Forward P/E**: Dựa trên lợi nhuận dự kiến (số liệu ước tính)

## P/E trung bình các ngành tại Việt Nam

| Ngành | P/E trung bình | Đặc điểm |
|-------|---------------|---------|
| Ngân hàng | 8-12 | Ổn định, cổ tức tốt |
| Bất động sản | 15-25 | Biến động theo chu kỳ |
| Công nghệ | 20-35 | Kỳ vọng tăng trưởng cao |
| Tiêu dùng | 15-20 | Ổn định, dòng tiền đều |
| Năng lượng | 8-15 | Phụ thuộc giá nguyên liệu |

## 3 bẫy P/E thấp cần tránh

### Bẫy 1: Lợi nhuận đột biến
EPS tăng bất thường do bán tài sản, thanh lý đầu tư → P/E tạm thời rất thấp nhưng không bền vững.

### Bẫy 2: Ngành đang suy thoái
P/E thấp có thể do nhà đầu tư kỳ vọng lợi nhuận sẽ giảm trong tương lai.

### Bẫy 3: Chất lượng lợi nhuận kém
Lợi nhuận cao nhưng dòng tiền thấp → cần kiểm tra [báo cáo tài chính](/blog/chung-khoan/cach-doc-bang-gia-chung-khoan) chi tiết.

## Câu hỏi thường gặp

### P/E bao nhiêu là rẻ?
Không có con số cố định. P/E phải được so sánh trong cùng ngành và kết hợp với tốc độ tăng trưởng. PEG < 1 thường được coi là rẻ.

### Cổ phiếu P/E âm nghĩa là gì?
P/E âm = doanh nghiệp đang lỗ. Những cổ phiếu này có rủi ro cao nhưng có thể là cơ hội nếu doanh nghiệp đang chuyển đổi.`
    },
    {
        title: 'DeFi là gì? Hướng dẫn tham gia tài chính phi tập trung',
        slug: 'defi-la-gi-huong-dan-tham-gia',
        excerpt: 'Tìm hiểu DeFi - hệ sinh thái tài chính phi tập trung trên blockchain. Kèm hướng dẫn sử dụng các giao thức phổ biến.',
        tags: ['DeFi', 'crypto', 'blockchain', 'yield farming'],
        reading_time: '11 phút',
        featured_image: img('1518546305927-5a555bb7020d'),
        is_published: false,
        content: `## DeFi là gì?

**DeFi (Decentralized Finance)** là hệ sinh thái các ứng dụng tài chính được xây dựng trên blockchain — hoạt động không cần ngân hàng, môi giới hay bất kỳ trung gian nào. Mọi thứ được quản lý bởi smart contract.

DeFi mang đến cùng dịch vụ tài chính truyền thống (vay, cho vay, giao dịch, bảo hiểm) nhưng minh bạch, mở và phi tập trung hơn.

## Các loại hình DeFi phổ biến

### 1. DEX (Sàn giao dịch phi tập trung)
Swap token trực tiếp peer-to-peer mà không cần sàn tập trung. Ví dụ: Uniswap, PancakeSwap, Jupiter.

### 2. Lending & Borrowing (Cho vay)
Gửi crypto để nhận lãi suất hoặc vay crypto với tài sản thế chấp. Ví dụ: Aave, Compound, Venus.

### 3. Yield Farming
Cung cấp thanh khoản cho các giao thức DeFi để nhận phần thưởng. Lãi suất có thể từ 5% đến hàng trăm %/năm.

### 4. Staking
Khóa token để bảo mật mạng lưới và nhận phần thưởng. An toàn hơn yield farming.

## So sánh DeFi vs CeFi

| Tiêu chí | DeFi | CeFi (Tập trung) |
|----------|------|------------------|
| Trung gian | Không cần | Cần sàn/ngân hàng |
| KYC | Thường không cần | Bắt buộc |
| Rủi ro | Smart contract, hack | Sàn phá sản, đóng băng |
| Lãi suất | Thường cao hơn | Ổn định hơn |
| Phí | Gas fee (biến động) | Phí cố định |

## Cách bắt đầu với DeFi

### Bước 1: Tạo ví non-custodial
Sử dụng MetaMask (Ethereum) hoặc Phantom (Solana). Bảo quản seed phrase cẩn thận.

### Bước 2: Mua crypto và chuyển vào ví
Mua ETH hoặc SOL trên sàn tập trung, sau đó chuyển sang ví DeFi.

### Bước 3: Kết nối với giao thức DeFi
Truy cập website của giao thức (ví dụ: app.aave.com) và kết nối ví.

### Bước 4: Bắt đầu với số tiền nhỏ
Thử gửi [stablecoin](/blog/crypto/stablecoin-la-gi-usdt-usdc) vào lending protocol để nhận lãi. Đây là cách an toàn nhất cho người mới.

## Lưu ý quan trọng về rủi ro

[WARNING] DeFi có rủi ro cao bao gồm: lỗi smart contract, rug pull, impermanent loss. Chỉ đầu tư tiền bạn sẵn sàng mất.

- Nghiên cứu kỹ giao thức trước khi tham gia
- Kiểm tra audit smart contract
- Không đầu tư quá 5-10% danh mục vào DeFi
- Cẩn thận với APY quá cao (>100%) — thường không bền vững

## Câu hỏi thường gặp

### DeFi có an toàn không?
DeFi có rủi ro riêng khác với tài chính truyền thống. Smart contract có thể bị hack, giá token có thể giảm mạnh. Chỉ nên tham gia với số tiền nhỏ ban đầu.

### Cần bao nhiêu tiền để bắt đầu DeFi?
Trên Ethereum cần ít nhất $100-200 để cover gas fee. Trên Solana hoặc BSC chỉ cần $10-20 là đủ bắt đầu.`
    },
    {
        title: 'Phân bổ tài sản theo độ tuổi: Chiến lược đầu tư phù hợp',
        slug: 'phan-bo-tai-san-theo-do-tuoi',
        excerpt: 'Hướng dẫn phân bổ tài sản đầu tư theo từng giai đoạn tuổi: 20s, 30s, 40s, 50s+ với tỷ lệ cụ thể cho từng kênh.',
        tags: ['phân bổ tài sản', 'danh mục', 'chiến lược', 'tài chính cá nhân'],
        reading_time: '9 phút',
        featured_image: img('1460925895917-afdab827c52f'),
        is_published: false,
        content: `## Tại sao phân bổ tài sản theo tuổi quan trọng?

Phân bổ tài sản (asset allocation) là yếu tố quyết định 90% hiệu quả đầu tư dài hạn. Khi tuổi tăng, khả năng chấp nhận rủi ro giảm — vì bạn có ít thời gian hơn để phục hồi từ thua lỗ.

**Quy tắc ngón tay cái**: Tỷ lệ % cổ phiếu = 110 - Tuổi của bạn

## Chiến lược phân bổ theo từng giai đoạn

### Tuổi 20-30: Giai đoạn tích lũy
Ưu tiên tăng trưởng — thời gian là lợi thế lớn nhất.

| Loại tài sản | Tỷ lệ | Gợi ý cụ thể |
|-------------|-------|-------------|
| Cổ phiếu/ETF | 60-70% | VN30 ETF, cổ phiếu tăng trưởng |
| Crypto | 10-15% | BTC, ETH, stablecoin farming |
| Tiết kiệm/Trái phiếu | 10-15% | Tiết kiệm online, quỹ trái phiếu |
| Quỹ khẩn cấp | 10% | 3-6 tháng chi tiêu |

### Tuổi 30-40: Giai đoạn cân bằng
Bắt đầu giảm rủi ro, tăng tài sản ổn định.

| Loại tài sản | Tỷ lệ | Gợi ý cụ thể |
|-------------|-------|-------------|
| Cổ phiếu/ETF | 50-60% | Kết hợp growth + dividend |
| Bất động sản | 15-20% | Nhà cho thuê, REITs |
| Trái phiếu/Vàng | 15-20% | Trái phiếu CP, vàng SJC |
| Crypto | 5-10% | BTC, ETH |
| Quỹ khẩn cấp | 5-10% | 6 tháng chi tiêu |

### Tuổi 40-50: Giai đoạn bảo toàn
Tập trung vào thu nhập ổn định và bảo toàn vốn.

| Loại tài sản | Tỷ lệ | Gợi ý cụ thể |
|-------------|-------|-------------|
| Trái phiếu/Tiết kiệm | 30-40% | Trái phiếu CP, tiền gửi kỳ hạn |
| Cổ phiếu cổ tức | 30-35% | Blue-chip, cổ phiếu cổ tức cao |
| Bất động sản | 15-20% | BĐS cho thuê ổn định |
| Vàng | 10% | Vàng vật chất, vàng tài khoản |

### Tuổi 50+: Giai đoạn an toàn
Ưu tiên bảo toàn vốn và thu nhập thụ động.

| Loại tài sản | Tỷ lệ | Gợi ý cụ thể |
|-------------|-------|-------------|
| Trái phiếu/Tiết kiệm | 50-60% | Trái phiếu CP, tiết kiệm |
| Cổ phiếu cổ tức | 20-25% | Blue-chip ổn định |
| Bất động sản | 10-15% | BĐS cho thuê |
| Vàng | 5-10% | Vàng phòng hộ |

## 3 sai lầm phân bổ tài sản phổ biến

### 1. Quá tập trung vào một kênh
Bỏ tất cả vào chứng khoán hoặc BĐS. Hãy [đa dạng hóa](/blog/tai-chinh-ca-nhan/xay-dung-danh-muc-dau-tu-da-dang-hoa) danh mục.

### 2. Không rebalance định kỳ
Mỗi 6-12 tháng, cần điều chỉnh tỷ lệ khi một kênh tăng/giảm quá mạnh.

### 3. Không có quỹ khẩn cấp
Thiếu [quỹ dự phòng](/blog/tai-chinh-ca-nhan/quy-khan-cap-tai-sao-can-xay-dung) dẫn đến phải bán tháo tài sản khi cần tiền gấp.

## Câu hỏi thường gặp

### Tôi 25 tuổi, có nên đầu tư 100% vào cổ phiếu?
Không nên. Dù bạn trẻ và chấp nhận rủi ro cao, vẫn cần 10-15% cho quỹ khẩn cấp và tiết kiệm. Đa dạng hóa luôn là nguyên tắc quan trọng.

### Bao lâu nên điều chỉnh lại danh mục?
Mỗi 6-12 tháng hoặc khi tỷ lệ chênh lệch quá 5-10% so với mục tiêu ban đầu.`
    },
    {
        title: 'Margin trading là gì? Ưu nhược điểm và cách quản lý rủi ro',
        slug: 'margin-trading-la-gi-rui-ro',
        excerpt: 'Tìm hiểu giao dịch ký quỹ (margin) — cơ hội nhân đôi lợi nhuận nhưng cũng nhân đôi rủi ro cho nhà đầu tư.',
        tags: ['margin', 'chứng khoán', 'rủi ro', 'đòn bẩy'],
        reading_time: '8 phút',
        featured_image: img('1611974789855-9c2a0a7236a3'),
        is_published: false,
        content: `## Margin trading là gì?

**Margin trading (Giao dịch ký quỹ)** là hình thức vay tiền từ công ty chứng khoán để mua thêm cổ phiếu, sử dụng tài khoản hiện có làm tài sản đảm bảo.

Ví dụ: Bạn có 100 triệu, margin 1:1 cho phép bạn mua 200 triệu cổ phiếu. Lợi nhuận và thua lỗ đều được nhân đôi.

## Cách margin hoạt động

| Tình huống | Không margin | Có margin (1:1) |
|-----------|-------------|----------------|
| Vốn gốc | 100 triệu | 100 triệu |
| Tổng mua | 100 triệu | 200 triệu |
| CP tăng 10% | +10 triệu (+10%) | +20 triệu (+20%) |
| CP giảm 10% | -10 triệu (-10%) | -20 triệu (-20%) |
| CP giảm 30% | -30 triệu (-30%) | -60 triệu (-60%) |

[WARNING] Khi cổ phiếu giảm 50%, bạn mất TOÀN BỘ vốn gốc nếu dùng margin 1:1!

## Ưu điểm của margin

### 1. Khuếch đại lợi nhuận
Margin cho phép tận dụng cơ hội khi tin tưởng cao vào một cổ phiếu.

### 2. Tăng sức mua
Có thể mua nhiều cổ phiếu hơn mà không cần bán khoản đầu tư khác.

## Nhược điểm và rủi ro

### 1. Khuếch đại thua lỗ
Thua lỗ cũng được nhân lên — có thể mất nhiều hơn vốn gốc.

### 2. Margin call (cưỡng chế bán)
Khi giá trị tài khoản giảm dưới ngưỡng duy trì, công ty chứng khoán sẽ bán cổ phiếu tự động để thu hồi nợ.

### 3. Phí lãi vay
Lãi suất margin thường 10-15%/năm — ăn mòn lợi nhuận theo thời gian.

## 5 quy tắc an toàn khi dùng margin

### 1. Không dùng quá 30-50% tổng margin cho phép

### 2. Chỉ margin cổ phiếu blue-chip thanh khoản cao

### 3. Đặt stop-loss nghiêm ngặt (tối đa -7 đến -10%)

### 4. Không margin khi thị trường biến động mạnh

### 5. Luôn có kế hoạch thoát lệnh trước khi vào

## Câu hỏi thường gặp

### Ai nên dùng margin?
Chỉ nhà đầu tư có kinh nghiệm, hiểu rõ rủi ro và có khả năng chịu lỗ lớn. Người mới tuyệt đối không nên dùng margin.

### Margin call xảy ra khi nào?
Khi tỷ lệ ký quỹ giảm dưới mức duy trì (thường 30-40%). Bạn phải nạp thêm tiền hoặc bị cưỡng chế bán.`
    },
    {
        title: 'Cổ tức là gì? Cách kiếm thu nhập thụ động từ cổ phiếu',
        slug: 'co-tuc-la-gi-thu-nhap-thu-dong',
        excerpt: 'Tìm hiểu cổ tức — cách kiếm thu nhập thụ động đều đặn từ đầu tư cổ phiếu. Kèm danh sách cổ phiếu cổ tức cao tại VN.',
        tags: ['cổ tức', 'thu nhập thụ động', 'chứng khoán', 'dividend'],
        reading_time: '8 phút',
        featured_image: img('1633158829585-23ba8f7c8451'),
        is_published: false,
        content: `## Cổ tức là gì?

**Cổ tức (Dividend)** là phần lợi nhuận mà doanh nghiệp chia cho cổ đông, thường trả bằng tiền mặt hoặc cổ phiếu. Đây là nguồn thu nhập thụ động ổn định cho nhà đầu tư dài hạn.

## Các loại cổ tức

### 1. Cổ tức tiền mặt
Doanh nghiệp trả trực tiếp bằng tiền. Ví dụ: cổ tức 2,000đ/cổ phiếu = bạn nhận 2,000đ cho mỗi cổ phiếu nắm giữ.

### 2. Cổ tức bằng cổ phiếu
Doanh nghiệp phát hành thêm cổ phiếu thay vì trả tiền. Ví dụ: tỷ lệ 10:1 = cứ 10 CP cũ nhận thêm 1 CP mới.

## Chỉ số quan trọng

| Chỉ số | Công thức | Ý nghĩa |
|--------|---------|---------|
| Tỷ suất cổ tức | Cổ tức/năm ÷ Giá CP | Lợi suất hàng năm từ cổ tức |
| Payout ratio | Cổ tức ÷ EPS | % lợi nhuận dùng để trả cổ tức |
| Dividend growth | Tăng trưởng cổ tức YoY | Khả năng tăng cổ tức theo thời gian |

## Top 10 cổ phiếu cổ tức cao tại Việt Nam

| Mã CP | Ngành | Tỷ suất cổ tức | Đặc điểm |
|-------|-------|---------------|---------|
| GAS | Dầu khí | 6-8% | Cổ tức ổn định, blue-chip |
| BWE | Điện nước | 5-7% | Dòng tiền đều, ít biến động |
| CTD | Xây dựng | 5-8% | Cổ tức tiền mặt cao |
| REE | Điện | 5-7% | Lịch sử cổ tức dài |
| VNM | Sữa | 4-6% | Blue-chip, thương hiệu mạnh |

## Chiến lược đầu tư cổ tức

### 1. Mua và nắm giữ dài hạn
Chọn cổ phiếu có lịch sử trả cổ tức ổn định 5-10 năm liên tục.

### 2. Tái đầu tư cổ tức
Dùng cổ tức nhận được để mua thêm cổ phiếu — [tận dụng lãi kép](/blog/tai-chinh-ca-nhan/lai-kep-la-gi-cong-thuc-tinh).

### 3. Đa dạng hóa
Không tập trung vào 1-2 cổ phiếu. [Phân bổ tài sản](/blog/tai-chinh-ca-nhan/phan-bo-tai-san-theo-do-tuoi) qua nhiều ngành khác nhau.

## Ngày quan trọng liên quan đến cổ tức

- **Ngày công bố**: Công ty thông báo mức cổ tức và lịch trả
- **Ngày chốt quyền**: Phải sở hữu CP trước ngày này để nhận cổ tức
- **Ngày giao dịch không hưởng quyền**: Từ ngày này, mua CP sẽ không nhận cổ tức kỳ này
- **Ngày thanh toán**: Ngày tiền cổ tức được chuyển vào tài khoản

[TIP] Mua cổ phiếu TRƯỚC ngày giao dịch không hưởng quyền ít nhất 2 ngày (T+2) để đảm bảo nhận cổ tức.

## Câu hỏi thường gặp

### Cổ tức có bị đánh thuế không?
Có, cổ tức tiền mặt tại Việt Nam chịu thuế thu nhập cá nhân 5%. Công ty chứng khoán sẽ tự động khấu trừ.

### Cổ tức cao luôn tốt?
Không nhất thiết. Payout ratio quá cao (>80%) có thể nghĩa là công ty không giữ đủ lợi nhuận để tái đầu tư phát triển.`
    }
];

async function seed() {
    console.log('🌱 Seeding 5 bài viết chất lượng cao (batch 4)...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth failed:', authError.message); return; }
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
