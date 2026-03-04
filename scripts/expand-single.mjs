/**
 * Mở rộng bài 2/8: "ESOP: Cổ phiếu ưu đãi cho nhân viên" (735 → 1200+ từ)
 */
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slug = 'esop-co-phieu-nhan-vien';

const newContent = `ESOP (Employee Stock Ownership Plan) là chương trình cấp **quyền sở hữu cổ phiếu cho nhân viên** — một công cụ mạnh mẽ giúp startup và doanh nghiệp giữ chân nhân tài, đồng thời tạo cơ hội cho nhân viên chia sẻ thành công cùng công ty. Tại Việt Nam, ESOP ngày càng phổ biến trong lĩnh vực công nghệ và fintech.

## ESOP là gì?

ESOP cho phép nhân viên **mua hoặc được tặng cổ phiếu công ty** với giá ưu đãi (thường thấp hơn giá thị trường). Khi công ty phát triển và giá cổ phiếu tăng, nhân viên được hưởng lợi trực tiếp.

Ví dụ: Bạn được cấp ESOP 10,000 cổ phiếu với giá 10,000đ/cp. Sau 4 năm, công ty niêm yết sàn chứng khoán và giá cổ phiếu tăng lên 100,000đ/cp. Giá trị ESOP của bạn: **1 tỷ đồng** (lãi 900 triệu).

## Các loại ESOP phổ biến

| Loại ESOP | Cách hoạt động | Ưu điểm | Nhược điểm |
|---|---|---|---|
| **Stock Option** | Quyền mua CP với giá cố định | Không cần bỏ tiền trước | Có thể hết giá trị nếu giá CP giảm |
| **RSU (Restricted Stock Unit)** | Cổ phiếu cấp miễn phí, vest theo thời gian | Không cần mua, luôn có giá trị | Thường ít hơn Stock Option |
| **Phantom Stock** | Thưởng tiền mặt dựa trên giá CP | Đơn giản, không pha loãng | Không sở hữu thực sự |
| **ESPP (Employee Stock Purchase Plan)** | Mua CP giá ưu đãi (thường giảm 15%) | Lợi nhuận gần như chắc chắn | Cần bỏ tiền mua |

## Vesting Schedule — Lịch vest cổ phiếu

Đa số ESOP không cho bạn sở hữu ngay lập tức. Thay vào đó, cổ phiếu được **vest (mở khóa) theo thời gian**, thường theo lịch:

### Lịch vest phổ biến: 4 năm + 1 năm cliff

| Thời gian | % được vest | Giải thích |
|---|---|---|
| Năm 1 (Cliff) | 0% | Chưa được gì nếu nghỉ trước 12 tháng |
| Sau năm 1 | 25% | Vest một lần lớn sau 1 năm |
| Năm 2 | 50% | Vest thêm 25% (hàng tháng hoặc quý) |
| Năm 3 | 75% | Tiếp tục vest |
| Năm 4 | 100% | Đã vest toàn bộ |

**Cliff period** (thường 1 năm) là giai đoạn thử thách — nếu bạn nghỉ việc trước cliff, bạn **không được gì**. Đây là cách công ty đảm bảo nhân viên cam kết lâu dài.

## ESOP tại Việt Nam: Thực trạng 2026

Theo [Ủy ban Chứng khoán Nhà nước](https://www.ssc.gov.vn), số lượng doanh nghiệp phát hành ESOP trên sàn HOSE và HNX tăng đều mỗi năm. Các công ty công nghệ như FPT, VNG, và các startup fintech tích cực sử dụng ESOP để thu hút nhân tài.

### Một số case study nổi bật:

- **FPT:** Chương trình ESOP hàng năm cho nhân viên cấp quản lý, giúp gắn kết lợi ích dài hạn
- **VNG:** ESOP là yếu tố quan trọng giữ chân kỹ sư công nghệ hàng đầu
- **Startup fintech:** Nhiều startup như Timo, Momo sử dụng ESOP thay vì trả lương cao ngay từ đầu

## Cách đánh giá ESOP khi nhận offer

Khi được offer ESOP, đừng chỉ nhìn vào số lượng cổ phiếu. Hãy đánh giá kỹ:

### 5 câu hỏi phải hỏi:

1. **Tỷ lệ sở hữu:** Bao nhiêu % tổng cổ phiếu? (10,000 CP nghe nhiều nhưng nếu tổng là 100 triệu CP thì chỉ 0.01%)
2. **Định giá hiện tại:** Giá mỗi CP (strike price) là bao nhiêu? Dựa trên định giá nào?
3. **Vesting schedule:** Bao lâu vest hết? Có cliff không?
4. **Exit scenario:** Công ty có kế hoạch IPO, M&A hay không? Khi nào?
5. **Pha loãng:** Qua các vòng gọi vốn sau, tỷ lệ sở hữu có bị pha loãng bao nhiêu?

Nếu bạn đang cân nhắc đầu tư vào startup thông qua [angel investing](/blog/khoi-nghiep/angel-investing-la-gi), hiểu về ESOP cũng giúp bạn đánh giá cách startup quản lý nhân sự.

## So sánh: ESOP vs. Lương cao vs. Cổ phiếu tự mua

| Tiêu chí | ESOP | Lương cao | Tự mua cổ phiếu |
|---|---|---|---|
| Rủi ro | Trung bình (phụ thuộc công ty) | ⭐ Thấp | Tùy loại |
| Upside tiềm năng | ⭐⭐⭐⭐⭐ (rất cao) | Thấp | ⭐⭐⭐ |
| Thanh khoản | Thấp (chờ vest + exit) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Thuế | Ưu đãi (tùy quy định) | Thu nhập cá nhân | Thuế chứng khoán |
| Gắn kết công ty | ⭐⭐⭐⭐⭐ | Thấp | Không |

## Thuế ESOP tại Việt Nam

Theo quy định hiện hành:

- **Khi nhận ESOP:** Chưa phải đóng thuế (chỉ là quyền mua)
- **Khi thực hiện quyền mua (exercise):** Chênh lệch giữa giá thị trường và strike price được tính là thu nhập cá nhân → đóng thuế TNCN
- **Khi bán cổ phiếu:** Đóng thuế bán chứng khoán (0.1% giá trị giao dịch)

Tham khảo thêm: [Thuế đầu tư tại Việt Nam 2026](/blog/kien-thuc-dau-tu/thue-dau-tu-tai-viet-nam-2026)

## 5 rủi ro cần biết khi nhận ESOP

1. **Công ty thất bại:** 90% startup thất bại → ESOP mất giá trị hoàn toàn
2. **Pha loãng:** Qua nhiều vòng gọi vốn, tỷ lệ sở hữu giảm đáng kể
3. **Không thanh khoản:** Nếu công ty chưa niêm yết, bạn không thể bán ESOP trên thị trường
4. **Cliff period:** Nghỉ trước cliff = mất toàn bộ
5. **Lock-up period:** Sau IPO, thường phải chờ thêm 6-12 tháng mới được bán

Hiểu rõ [cách quản lý rủi ro danh mục đầu tư](/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua) giúp bạn cân đối ESOP với các khoản đầu tư khác.

## Câu hỏi thường gặp (FAQ)

### ESOP có phải là cổ phiếu thường không?

Không hoàn toàn. ESOP thường là cổ phiếu ưu đãi hoặc quyền mua cổ phiếu. Sau khi vest và exercise, chúng trở thành cổ phiếu thường.

### Có nên chấp nhận lương thấp hơn để có ESOP?

Tùy thuộc vào tiềm năng công ty. Nếu startup có founder mạnh, traction tốt, và thị trường lớn — ESOP có thể đáng giá gấp nhiều lần lương. Tham khảo bài [đánh giá startup trước khi đầu tư](/blog/khoi-nghiep/danh-gia-startup-truoc-dau-tu).

### Nếu nghỉ việc, ESOP sẽ ra sao?

Cổ phiếu đã vest thường được giữ lại, nhưng bạn có thể bị yêu cầu exercise (mua) trong vòng 90 ngày. Cổ phiếu chưa vest → mất.

## Kết luận

ESOP là công cụ tài chính mạnh mẽ cho cả nhân viên và doanh nghiệp. Đối với nhân viên, đây là cơ hội **chia sẻ thành công** cùng công ty và xây dựng tài sản dài hạn. Tuy nhiên, hãy đánh giá kỹ các yếu tố: vesting schedule, định giá, exit strategy, và rủi ro pha loãng trước khi xem ESOP như một phần quan trọng trong danh mục [đầu tư cá nhân](/blog/kien-thuc-dau-tu/nen-dau-tu-gi-2026-so-sanh-5-kenh).

*Nguồn tham khảo: [Ủy ban Chứng khoán Nhà nước](https://www.ssc.gov.vn), [Crunchbase](https://www.crunchbase.com)*`;

async function main() {
    console.log('📝 Mở rộng: "ESOP: Cổ phiếu ưu đãi cho nhân viên"...');
    const { data: post, error: findErr } = await supabase
        .from('posts').select('id, title, content').eq('slug', slug).single();
    if (findErr || !post) { console.log('❌ Không tìm thấy:', findErr?.message); return; }
    const oldLen = (post.content || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
    const { error: updateErr } = await supabase
        .from('posts').update({ content: newContent.trim() }).eq('id', post.id);
    if (updateErr) { console.log('❌ Lỗi:', updateErr.message); return; }
    const newLen = newContent.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
    console.log(`✅ Đã cập nhật! ~${oldLen} từ → ~${newLen} từ`);
}
main().catch(console.error);
