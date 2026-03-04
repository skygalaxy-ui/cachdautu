/**
 * Mở rộng từng bài 1: "Cách đánh giá startup trước khi đầu tư" (616 → 1200+ từ)
 */
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slug = 'danh-gia-startup-truoc-dau-tu';

const newContent = `Đầu tư vào startup có thể mang lại lợi nhuận gấp hàng chục lần — nhưng cũng có thể mất trắng. Theo thống kê, **90% startup thất bại** trong 5 năm đầu tiên. Vì vậy, kỹ năng đánh giá startup trước khi rót vốn là yếu tố sống còn cho nhà đầu tư. Bài viết này cung cấp **framework đánh giá toàn diện** giúp bạn giảm thiểu rủi ro và tăng cơ hội chọn đúng startup tiềm năng.

## Tại sao phải đánh giá startup kỹ lưỡng?

Khi đầu tư vào cổ phiếu niêm yết, bạn có thể dựa vào báo cáo tài chính, giá lịch sử, và phân tích kỹ thuật. Nhưng startup thì khác — chúng thường chưa có doanh thu ổn định, chưa có lịch sử giao dịch, và mọi thứ đều dựa trên **tiềm năng tương lai**.

Nếu bạn hiểu rõ [cách đọc báo cáo tài chính](/blog/chung-khoan/cach-doc-bao-cao-tai-chinh-doanh-nghiep) của doanh nghiệp niêm yết, thì đánh giá startup đòi hỏi thêm nhiều tiêu chí khác như đội ngũ, thị trường, và mô hình kinh doanh.

## Framework đánh giá startup: 7 tiêu chí quan trọng

### 1. Đội ngũ sáng lập (Team)

Đây là tiêu chí **quan trọng nhất**. Nhiều nhà đầu tư nổi tiếng như Paul Graham (Y Combinator) khẳng định: *"Đầu tư vào con người, không phải ý tưởng."*

Các yếu tố cần đánh giá:

- **Kinh nghiệm ngành:** Founder có bao nhiêu năm kinh nghiệm trong lĩnh vực startup đang hoạt động?
- **Bổ sung lẫn nhau:** Đội ngũ có đủ kỹ năng (tech, business, marketing) hay không?
- **Track record:** Founder đã từng xây dựng/thoái vốn startup nào trước đó?
- **Cam kết:** Founder có all-in hay chỉ làm part-time?
- **Khả năng thích ứng:** Startup thường phải pivot — founder có đủ linh hoạt không?

### 2. Quy mô thị trường (Market Size)

Ba cấp độ đánh giá thị trường:

| Cấp độ | Viết tắt | Ý nghĩa | Ví dụ (Fintech VN) |
|---|---|---|---|
| **Total Addressable Market** | TAM | Toàn bộ thị trường | 50 triệu người dùng tài chính |
| **Serviceable Addressable Market** | SAM | Phân khúc phục vụ được | 10 triệu người dùng mobile banking |
| **Serviceable Obtainable Market** | SOM | Thị phần thực tế nhắm đến | 500,000 người dùng năm đầu |

**Quy tắc:** Thị trường TAM tối thiểu **$1 tỷ** mới đủ hấp dẫn cho venture capital. Với [angel investing](/blog/khoi-nghiep/angel-investing-la-gi) ở giai đoạn sớm, thị trường nhỏ hơn cũng chấp nhận được nếu tốc độ tăng trưởng cao.

### 3. Sản phẩm và Product-Market Fit

Đánh giá sản phẩm startup:

- **Pain point có thực sự đau không?** Sản phẩm giải quyết vấn đề "nice to have" hay "must have"?
- **Product-Market Fit (PMF):** Có dấu hiệu PMF chưa? (Retention cao, organic growth, khách hàng tự giới thiệu)
- **Lợi thế cạnh tranh:** Moat là gì? Technology, network effect, brand, hay chi phí chuyển đổi?
- **Traction:** Có người dùng thực tế không? Tốc độ tăng trưởng MoM/QoQ?

### 4. Mô hình kinh doanh (Business Model)

| Mô hình | Đặc điểm | Ví dụ |
|---|---|---|
| **SaaS** | Doanh thu định kỳ, scalable | Slack, Notion |
| **Marketplace** | Kết nối 2 bên, network effect | Grab, Shopee |
| **Freemium** | Miễn phí + premium | Spotify, Canva |
| **Transaction Fee** | Phí giao dịch | Momo, VNPay |
| **Quảng cáo** | Miễn phí cho user, bán ads | Facebook, Google |

Câu hỏi cần trả lời: **Unit economics có dương không?** Tức là doanh thu trên mỗi khách hàng (LTV) có lớn hơn chi phí thu hút khách hàng (CAC) không?

### 5. Tài chính và Burn Rate

Startup thường chưa có lợi nhuận, nhưng bạn cần hiểu:

- **Burn rate:** Startup đốt bao nhiêu tiền mỗi tháng?
- **Runway:** Với tiền hiện có, startup sống được bao lâu? (Tối thiểu 12-18 tháng)
- **Cap table:** Ai đang nắm cổ phần? Founder vẫn giữ kiểm soát?
- **Định giá:** Có hợp lý so với stage và traction hiện tại?

Tham khảo thêm về [quản lý rủi ro trong đầu tư](/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua) để hiểu cách phân bổ vốn hợp lý khi đầu tư startup.

### 6. Cạnh tranh và Lợi thế bền vững

- **Đối thủ trực tiếp:** Ai đang cạnh tranh cùng phân khúc?
- **Đối thủ gián tiếp:** Khách hàng đang giải quyết vấn đề bằng cách nào?
- **Barriers to entry:** Rào cản gia nhập ngành cao hay thấp?
- **Differentiation:** Startup khác biệt ở điểm nào so với đối thủ?

### 7. Chiến lược thoái vốn (Exit Strategy)

Trước khi đầu tư, hãy nghĩ đến cách bạn sẽ thu hồi vốn:

- **IPO:** Startup niêm yết trên sàn chứng khoán
- **M&A:** Được mua lại bởi công ty lớn
- **Secondary sale:** Bán cổ phần cho nhà đầu tư mới ở vòng sau
- **Buyback:** Founder mua lại cổ phần

## Bảng chấm điểm đánh giá startup

| Tiêu chí | Trọng số | Điểm (1-5) | Ghi chú |
|---|---|---|---|
| Đội ngũ sáng lập | 30% | | |
| Quy mô thị trường | 20% | | |
| Sản phẩm & PMF | 20% | | |
| Mô hình kinh doanh | 10% | | |
| Tài chính | 10% | | |
| Cạnh tranh | 5% | | |
| Exit strategy | 5% | | |

**Cách tính:** Nhân điểm với trọng số → tổng điểm. Trên 3.5/5 = đáng cân nhắc. Trên 4/5 = rất tiềm năng.

## 5 Red Flags cần tránh

1. **Founder không minh bạch về tài chính** — Từ chối chia sẻ burn rate hoặc cap table
2. **Không có traction thực tế** — Chỉ có ý tưởng, chưa có người dùng sau 6+ tháng
3. **Định giá quá cao** — So với stage và thị trường tương tự
4. **Đội ngũ không ổn định** — Co-founder rời đi, turnover cao
5. **Thị trường quá nhỏ** — TAM dưới $100 triệu, khó scale

## So sánh đầu tư startup vs. các kênh khác

| Tiêu chí | Startup | [Cổ phiếu](/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi-2026) | [ETF](/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf) |
|---|---|---|---|
| Lợi nhuận tiềm năng | ⭐⭐⭐⭐⭐ (10-100x) | ⭐⭐⭐ (15-30%/năm) | ⭐⭐ (10-15%/năm) |
| Rủi ro | ⭐⭐⭐⭐⭐ (mất trắng) | ⭐⭐⭐ (biến động) | ⭐⭐ (thấp) |
| Thanh khoản | ⭐ (rất thấp) | ⭐⭐⭐⭐⭐ (cao) | ⭐⭐⭐⭐⭐ (cao) |
| Kiến thức cần | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Vốn tối thiểu | Cao (50-500 triệu) | Thấp (5-10 triệu) | Thấp (2 triệu) |

## Câu hỏi thường gặp (FAQ)

### Nên đầu tư bao nhiêu vào startup?

Tối đa **5-10% tổng danh mục đầu tư**. Đa dạng hóa bằng cách đầu tư vào 5-10 startup thay vì all-in vào 1 startup. Phần lớn danh mục nên dành cho [các kênh an toàn hơn](/blog/kien-thuc-dau-tu/nen-dau-tu-gi-2026-so-sanh-5-kenh).

### Giai đoạn nào nên đầu tư vào startup?

- **Pre-seed/Seed:** Rủi ro cao nhất, lợi nhuận tiềm năng cao nhất
- **Series A:** Đã có PMF, rủi ro giảm
- **Series B+:** Gần break-even, lợi nhuận tiềm năng thấp hơn

### Làm sao tìm startup để đầu tư?

Qua các kênh: Accelerator Việt Nam (VIISA, VSV), [crowdfunding](/blog/khoi-nghiep/crowdfunding-goi-von-cong-dong), angel investor network, hoặc giới thiệu trực tiếp.

## Kết luận

Đánh giá startup là nghệ thuật kết hợp với khoa học. Không có công thức hoàn hảo, nhưng framework 7 tiêu chí trên giúp bạn **giảm thiểu rủi ro và tăng xác suất chọn đúng startup tiềm năng**. Hãy nhớ: đa dạng hóa danh mục, chỉ đầu tư số tiền có thể mất, và luôn due diligence kỹ lưỡng trước mọi quyết định.

*Nguồn tham khảo: [Ủy ban Chứng khoán Nhà nước](https://www.ssc.gov.vn), [Crunchbase](https://www.crunchbase.com)*`;

async function main() {
    console.log('📝 Mở rộng: "Cách đánh giá startup trước khi đầu tư"...');

    const { data: post, error: findErr } = await supabase
        .from('posts').select('id, title, content').eq('slug', slug).single();

    if (findErr || !post) { console.log('❌ Không tìm thấy:', findErr?.message); return; }

    const oldLen = (post.content || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;

    const { error: updateErr } = await supabase
        .from('posts').update({ content: newContent.trim() }).eq('id', post.id);

    if (updateErr) { console.log('❌ Lỗi:', updateErr.message); return; }

    const newLen = newContent.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
    console.log(\`✅ Đã cập nhật! ~\${oldLen} từ → ~\${newLen} từ\`);
}
main().catch(console.error);
