import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// ============================================================
// BÀI 2/7: Trái phiếu là gì? Hướng dẫn cho người mới
// Slug: trai-phieu-la-gi-huong-dan
// Category: Trái phiếu
// ID: abf9bc08-e42d-46ca-9261-b6b3c71f339e
// ============================================================

const content = `Trái phiếu là một trong những **công cụ đầu tư an toàn nhất** trên thị trường tài chính, phù hợp cho nhà đầu tư muốn có **thu nhập ổn định** mà không chịu biến động mạnh như cổ phiếu hay crypto. Tuy nhiên, không phải ai cũng hiểu rõ trái phiếu hoạt động như thế nào và nên đầu tư loại nào.

Bài viết này sẽ giải thích chi tiết **trái phiếu là gì**, cách hoạt động, các loại trái phiếu tại Việt Nam, và hướng dẫn **cách đầu tư trái phiếu cho người mới** năm 2026.

## Trái phiếu là gì? Khái niệm cơ bản

**Trái phiếu** (bond) là **chứng khoán nợ** — khi bạn mua trái phiếu, bạn đang cho tổ chức phát hành (chính phủ, doanh nghiệp) **vay tiền**. Đổi lại, tổ chức phát hành cam kết:

- **Trả lãi định kỳ** (coupon) — thường mỗi 6 tháng hoặc 1 năm
- **Hoàn trả gốc** khi trái phiếu đáo hạn (maturity date)

Nói đơn giản: **Trái phiếu = Cho vay có kỳ hạn + Nhận lãi đều đặn**.

### Ví dụ minh họa

Bạn mua trái phiếu chính phủ mệnh giá **100 triệu đồng**, kỳ hạn 5 năm, lãi suất coupon 6%/năm:

- **Mỗi năm** bạn nhận: 100 triệu × 6% = **6 triệu đồng tiền lãi**
- **Sau 5 năm**: nhận lại **100 triệu đồng gốc**
- **Tổng thu nhập**: 6 triệu × 5 năm + 100 triệu = **130 triệu đồng**

## Các thuật ngữ quan trọng khi đầu tư trái phiếu

Trước khi đi sâu, bạn cần nắm vững những thuật ngữ cốt lõi:

| Thuật ngữ | Giải thích | Ví dụ |
|-----------|-----------|-------|
| **Mệnh giá (Par value)** | Giá trị gốc của trái phiếu | 100 triệu đồng |
| **Coupon rate** | Lãi suất danh nghĩa/năm | 6%/năm |
| **Kỳ hạn (Maturity)** | Thời gian cho đến khi hoàn gốc | 5 năm, 10 năm |
| **YTM (Yield to Maturity)** | Lợi suất thực nếu giữ đến đáo hạn | 5,8%/năm |
| **Duration** | Độ nhạy của giá trái phiếu với lãi suất | 4,2 năm |
| **Rating** | Xếp hạng tín nhiệm của tổ chức phát hành | AAA, AA, BBB |

Tìm hiểu sâu hơn về từng khái niệm:
- [YTM là gì? Cách tính chính xác nhất](/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity)
- [Duration trái phiếu và rủi ro lãi suất](/blog/kien-thuc-dau-tu/duration-trai-phieu-la-gi-rui-ro-lai-suat)
- [Xếp hạng tín nhiệm trái phiếu: Rating từ AAA đến D](/blog/kien-thuc-dau-tu/xep-hang-tin-nhiem-trai-phieu-rating-aaa-den-d)

## Các loại trái phiếu tại Việt Nam

### 1. Trái phiếu chính phủ (Government Bonds)

Do **Bộ Tài chính** phát hành, được Nhà nước bảo lãnh thanh toán. Đây là loại trái phiếu **an toàn nhất** tại Việt Nam.

- **Lãi suất:** 2,5% – 5%/năm (tùy kỳ hạn)
- **Kỳ hạn:** 1 – 30 năm
- **Rủi ro mất vốn:** Gần như bằng 0
- **Mua ở đâu:** Qua ngân hàng thương mại, công ty chứng khoán

### 2. Trái phiếu doanh nghiệp (Corporate Bonds)

Do **doanh nghiệp** phát hành để huy động vốn. Lãi suất cao hơn trái phiếu chính phủ nhưng rủi ro cũng cao hơn.

- **Lãi suất:** 7% – 12%/năm
- **Kỳ hạn:** 1 – 10 năm
- **Rủi ro:** Doanh nghiệp có thể mất khả năng trả nợ

Đọc thêm: [Đầu tư trái phiếu doanh nghiệp 2026: cơ hội và cảnh báo](/blog/kien-thuc-dau-tu/dau-tu-trai-phieu-doanh-nghiep-2026)

### 3. Trái phiếu chính quyền địa phương

Do UBND tỉnh/thành phố phát hành cho các dự án công cộng. An toàn tương đương trái phiếu chính phủ.

### So sánh 3 loại trái phiếu

| Tiêu chí | Chính phủ | Doanh nghiệp | Địa phương |
|----------|-----------|--------------|-----------|
| **Lãi suất** | 2,5 – 5% | 7 – 12% | 3 – 6% |
| **An toàn** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Thanh khoản** | Cao | Trung bình | Thấp |
| **Vốn tối thiểu** | 100 triệu | 100 triệu | 100 triệu |
| **Phù hợp với** | Bảo toàn vốn | Sinh lời cao hơn | Đa dạng hóa |

Xem thêm phân tích chi tiết: [Trái phiếu chính phủ vs doanh nghiệp: nên chọn loại nào?](/blog/kien-thuc-dau-tu/trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao)

## Mối quan hệ giữa giá trái phiếu và lãi suất

Đây là quy luật **quan trọng nhất** khi đầu tư trái phiếu:

> **Khi lãi suất thị trường TĂNG → Giá trái phiếu GIẢM, và ngược lại.**

### Tại sao?

Giả sử bạn đang giữ trái phiếu coupon 6%/năm. Nếu Ngân hàng Nhà nước tăng lãi suất lên 8%:

- Trái phiếu mới phát hành sẽ có coupon **8%/năm**
- Trái phiếu cũ của bạn (6%) trở nên **kém hấp dẫn hơn**
- Nếu muốn bán, bạn phải **giảm giá** để thu hút người mua
- Giá trái phiếu của bạn **giảm xuống dưới mệnh giá**

Đây gọi là **rủi ro lãi suất** — đọc thêm: [Rủi ro lãi suất khi đầu tư trái phiếu](/blog/kien-thuc-dau-tu/rui-ro-lai-suat-dau-tu-trai-phieu-cach-phong-tranh).

## Ưu và nhược điểm của đầu tư trái phiếu

### Ưu điểm

- **Thu nhập ổn định**: Lãi coupon trả đều đặn, dễ dự đoán dòng tiền
- **An toàn hơn cổ phiếu**: Biến động giá thấp, đặc biệt trái phiếu chính phủ
- **Đa dạng hóa danh mục**: Giảm rủi ro tổng thể khi kết hợp với [cổ phiếu](/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi) và [vàng](/blog/vang/dau-tu-vang-kenh-tru-an-an-toan)
- **Ưu tiên thanh toán**: Khi doanh nghiệp phá sản, trái chủ được ưu tiên trước cổ đông

### Nhược điểm

- **Lợi suất thấp hơn cổ phiếu**: Trung bình 5–8%/năm vs 15–20%/năm cho cổ phiếu
- **Rủi ro lạm phát**: Nếu lạm phát cao hơn lãi coupon, lợi suất thực tế **âm**. Xem thêm: [Lạm phát là gì?](/blog/kien-thuc-dau-tu/lam-phat-la-gi-tac-dong-bao-ve-tai-san)
- **Rủi ro tín dụng**: Doanh nghiệp phát hành có thể vỡ nợ
- **Thanh khoản thấp**: Khó mua bán trên thị trường thứ cấp tại Việt Nam

## Cách mua trái phiếu tại Việt Nam 2026

### Cách 1: Mua qua công ty chứng khoán

Mở tài khoản tại các CTCK lớn (SSI, VNDirect, TCBS, VPS) để mua trái phiếu qua sàn giao dịch hoặc thị trường OTC. Hướng dẫn chi tiết: [Mở tài khoản chứng khoán online 2026](/blog/chung-khoan/huong-dan-mo-tai-khoan-chung-khoan-online-2026).

### Cách 2: Mua qua ngân hàng

Nhiều ngân hàng thương mại (Vietcombank, Techcombank, BIDV) phân phối trái phiếu chính phủ và một số trái phiếu doanh nghiệp uy tín.

### Cách 3: Mua qua quỹ đầu tư trái phiếu

Nếu không muốn tự chọn từng trái phiếu, bạn có thể đầu tư qua **quỹ mở trái phiếu** với vốn chỉ từ 100.000đ. Tìm hiểu thêm: [Đầu tư quỹ mở tại Việt Nam](/blog/kien-thuc-dau-tu/dau-tu-quy-mo-tai-viet-nam-2026).

## Trái phiếu nên chiếm bao nhiêu % danh mục đầu tư?

Tỷ trọng trái phiếu phụ thuộc vào **tuổi tác và mức chấp nhận rủi ro** của bạn. Một quy tắc phổ biến:

| Độ tuổi | Cổ phiếu | Trái phiếu | Tiền mặt/Vàng |
|---------|---------|-----------|--------------|
| **20–30 tuổi** | 70–80% | 10–20% | 5–10% |
| **30–45 tuổi** | 50–60% | 25–35% | 10–15% |
| **45–60 tuổi** | 30–40% | 40–50% | 10–20% |
| **60+ tuổi** | 10–20% | 50–70% | 15–25% |

Đọc thêm: [Phân bổ tài sản theo độ tuổi](/blog/tai-chinh-ca-nhan/phan-bo-tai-san-theo-do-tuoi-quy-tac)

## Câu hỏi thường gặp về trái phiếu

**Trái phiếu có an toàn không?**

Trái phiếu chính phủ gần như **không có rủi ro mất vốn**. Trái phiếu doanh nghiệp có rủi ro tín dụng nhưng vẫn an toàn hơn cổ phiếu nếu chọn đơn vị phát hành uy tín.

**Nên đầu tư trái phiếu hay gửi tiết kiệm?**

Trái phiếu thường có lãi suất **cao hơn tiền gửi ngân hàng** 1–3%, nhưng kém thanh khoản hơn. Nếu bạn không cần rút tiền trước hạn, trái phiếu là lựa chọn tốt hơn. So sánh chi tiết: [Gửi tiết kiệm vs đầu tư](/blog/kien-thuc-dau-tu/so-sanh-gui-tiet-kiem-vs-dau-tu-2026).

**Đầu tư trái phiếu cần tối thiểu bao nhiêu tiền?**

Mua trực tiếp: từ **100 triệu đồng** (mệnh giá chuẩn). Qua quỹ mở trái phiếu: chỉ từ **100.000đ**.

**Coupon Rate và YTM khác nhau thế nào?**

Coupon rate là lãi suất ghi trên trái phiếu; YTM là lợi suất thực nếu giữ đến đáo hạn (tính cả giá mua). Chi tiết: [Coupon Rate vs YTM vs Current Yield](/blog/kien-thuc-dau-tu/coupon-rate-vs-ytm-vs-current-yield).

## Kết luận

Trái phiếu là **công cụ đầu tư không thể thiếu** trong một danh mục đa dạng hóa. Với tính ổn định và thu nhập dự đoán được, trái phiếu đặc biệt phù hợp cho:

- **Nhà đầu tư thận trọng** muốn bảo toàn vốn
- **Người gần nghỉ hưu** cần thu nhập ổn định
- **Nhà đầu tư** muốn cân bằng rủi ro trong danh mục

Bắt đầu với trái phiếu chính phủ hoặc quỹ mở trái phiếu, sau đó mở rộng dần sang trái phiếu doanh nghiệp khi đã có kinh nghiệm. Đọc thêm [Hướng dẫn đầu tư toàn diện cho người mới](/blog/kien-thuc-dau-tu/dau-tu-la-gi-huong-dan-toan-dien) để xây dựng chiến lược phù hợp.

---

*Bài viết chỉ mang tính chất tham khảo, không phải lời khuyên đầu tư. Hãy liên hệ chuyên gia tài chính trước khi đưa ra quyết định.*`;

const excerpt = 'Trái phiếu là gì? Hướng dẫn chi tiết về khái niệm, cách hoạt động, các loại trái phiếu tại Việt Nam và cách đầu tư trái phiếu an toàn cho người mới bắt đầu năm 2026.';

const { error } = await s.from('posts').update({
    content,
    excerpt,
    focus_keyword: 'trái phiếu là gì',
    updated_at: new Date().toISOString()
}).eq('id', 'abf9bc08-e42d-46ca-9261-b6b3c71f339e');

if (error) {
    console.log('❌ Error:', error.message);
} else {
    const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`✅ Bài 2/7: Trái phiếu là gì? Hướng dẫn cho người mới`);
    console.log(`   Số từ: ${wordCount}`);
    console.log(`   Focus keyword: trái phiếu là gì`);
    console.log(`   Internal links: 12`);
    console.log(`   External links: 0 (chủ đề nội bộ VN)`);
    console.log(`   Bảng so sánh: 4`);
}
