import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
const { error: authError } = await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
if (authError) { console.log('❌', authError.message); process.exit(1); }

const KT = '31d10229-9735-4f69-a368-08ea7f0550a1';

const posts = [
    {
        title: "Coupon Rate vs YTM vs Current Yield: Phân Biệt 3 Loại Lợi Suất Trái Phiếu",
        slug: "coupon-rate-vs-ytm-vs-current-yield",
        excerpt: "So sánh chi tiết Coupon Rate, Current Yield và YTM – 3 chỉ số lợi suất trái phiếu quan trọng nhất. Ví dụ thực tế giúp bạn hiểu ngay sự khác biệt.",
        category_id: KT,
        tags: ["coupon rate", "YTM", "current yield", "trái phiếu", "lợi suất"],
        reading_time: "8 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-03T03:00:00Z').toISOString(),
        content: `<p>Khi tìm hiểu về trái phiếu, bạn sẽ gặp ít nhất 3 con số "lợi suất" khác nhau: Coupon Rate, Current Yield và YTM. Cả ba đều liên quan đến lợi nhuận trái phiếu, nhưng mỗi cái mang ý nghĩa khác nhau. Hiểu sai sẽ dẫn đến quyết định đầu tư sai lệch.</p>

<p>Bài viết này sẽ giải thích rõ ràng từng loại, so sánh trực tiếp bằng ví dụ cụ thể, và hướng dẫn bạn khi nào nên dùng chỉ số nào. Nếu bạn chưa quen với khái niệm <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM là gì</a>, hãy đọc bài đó trước.</p>

<h2>Coupon Rate: Lãi suất "trên giấy"</h2>

<p>Coupon Rate là lãi suất ghi trên mặt trái phiếu khi phát hành. Nó cố định và không thay đổi trong suốt đời sống trái phiếu. Ví dụ: Trái phiếu mệnh giá 1 triệu đồng, coupon rate 8%, nghĩa là mỗi năm bạn nhận 80.000 đồng tiền lãi, bất kể bạn mua trái phiếu với giá bao nhiêu.</p>

<p>Coupon Rate giống như lãi suất ghi trên sổ tiết kiệm – đơn giản, dễ hiểu, nhưng không phản ánh đầy đủ mức sinh lời thực tế khi bạn mua trái phiếu trên thị trường thứ cấp với giá khác mệnh giá.</p>

<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop" alt="Lãi suất trái phiếu" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Current Yield: Lợi suất dựa trên giá hiện tại</h2>

<p>Current Yield tiến thêm một bước – nó tính lợi suất dựa trên giá bạn thực sự trả, không phải mệnh giá. Công thức rất đơn giản: Current Yield = Coupon hàng năm / Giá mua hiện tại.</p>

<p>Nếu trái phiếu coupon 8% (80.000 đồng/năm) nhưng bạn mua với giá 950.000 đồng (thấp hơn mệnh giá), Current Yield = 80.000 / 950.000 = 8,42%. Ngược lại, nếu mua 1.050.000 đồng (cao hơn mệnh giá), Current Yield chỉ 7,62%.</p>

<p>Current Yield thực tế hơn Coupon Rate vì phản ánh giá mua thực tế. Tuy nhiên, nó vẫn bỏ sót một khoản lời (hoặc lỗ) quan trọng: chênh lệch giữa giá mua và mệnh giá khi trái phiếu đáo hạn.</p>

<h2>YTM: Bức tranh toàn diện nhất</h2>

<p><a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM (Yield to Maturity)</a> là chỉ số toàn diện nhất vì tính đến tất cả: coupon nhận được hàng năm, chênh lệch giữa giá mua và mệnh giá khi đáo hạn, và cả việc tái đầu tư các khoản coupon. Đây là con số mà các chuyên gia tài chính sử dụng khi đánh giá trái phiếu.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Phân tích tài chính" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Ví dụ so sánh trực tiếp</h2>

<p>Hãy cùng tính cả 3 chỉ số cho một trái phiếu cụ thể: Mệnh giá 1 triệu đồng, coupon 8%/năm, giá mua 950.000 đồng, kỳ hạn còn lại 5 năm.</p>

| Chỉ số | Công thức | Kết quả |
|---|---|---|
| Coupon Rate | 80.000 / 1.000.000 | 8,00% |
| Current Yield | 80.000 / 950.000 | 8,42% |
| YTM | Phức tạp (xem bài YTM) | 9,23% |

<p>Có thể thấy, cùng một trái phiếu nhưng 3 con số lợi suất hoàn toàn khác nhau. YTM cao nhất vì tính cả khoản lời 50.000 đồng khi đáo hạn (mua 950.000, nhận lại 1.000.000). Nếu bạn chỉ nhìn Coupon Rate 8%, bạn đang đánh giá thấp mức sinh lời thực tế.</p>

<h2>Khi nào nên dùng chỉ số nào?</h2>

<p>Coupon Rate hữu ích khi bạn muốn tính nhanh dòng tiền sẽ nhận hàng năm – nó cho biết chính xác số tiền lãi bạn sẽ nhận mỗi kỳ. Current Yield hữu ích khi so sánh nhanh lợi suất của trái phiếu đang giao dịch trên thị trường.</p>

<p>Tuy nhiên, khi đưa ra quyết định đầu tư cuối cùng, hãy luôn dùng YTM. Đây là chỉ số duy nhất cho phép so sánh công bằng giữa các trái phiếu có kỳ hạn, coupon và giá khác nhau. Nó cũng là chỉ số chuẩn khi so sánh trái phiếu với các kênh đầu tư khác như <a href="/blog/tai-chinh-ca-nhan/lai-suat-ngan-hang-2026-so-sanh">gửi tiết kiệm ngân hàng</a>.</p>

<img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=400&fit=crop" alt="Quyết định đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Coupon Rate, Current Yield và YTM – ba con số, ba câu chuyện khác nhau. Coupon cho biết dòng tiền, Current Yield cho biết hiệu suất tức thời, và YTM cho biết lợi suất tổng thể. Là nhà đầu tư thông minh, hãy nắm cả ba nhưng ưu tiên YTM khi ra quyết định. Tìm hiểu sâu hơn về cách tính YTM trong bài <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM Là Gì? Cách Tính Chính Xác Nhất</a>.</p>`
    },
    {
        title: "Duration Trái Phiếu Là Gì? Hiểu Rủi Ro Lãi Suất Trong 5 Phút",
        slug: "duration-trai-phieu-la-gi-rui-ro-lai-suat",
        excerpt: "Duration là thước đo rủi ro lãi suất quan trọng nhất khi đầu tư trái phiếu. Bài viết giải thích Duration bằng ngôn ngữ đơn giản với ví dụ thực tế.",
        category_id: KT,
        tags: ["duration", "rủi ro lãi suất", "trái phiếu", "modified duration"],
        reading_time: "7 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-04T03:00:00Z').toISOString(),
        content: `<p>Bạn đã biết <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM cho biết trái phiếu lời bao nhiêu</a>, nhưng nếu lãi suất thị trường thay đổi thì sao? Giá trái phiếu sẽ biến động bao nhiêu? Đó chính là câu hỏi mà Duration giúp trả lời. Đây là khái niệm cốt lõi mà mọi nhà đầu tư trái phiếu cần nắm.</p>

<h2>Duration là gì? Giải thích đơn giản</h2>

<p>Duration (thời gian đáo hạn bình quân) là một con số đo lường mức độ nhạy cảm của giá trái phiếu với sự thay đổi lãi suất. Duration càng cao, giá trái phiếu biến động càng mạnh khi lãi suất thay đổi.</p>

<p>Hãy nghĩ thế này: Duration giống như "tốc độ gió" ảnh hưởng đến cây. Cây cao (Duration cao) sẽ lung lay nhiều hơn cây thấp (Duration thấp) khi gió mạnh (lãi suất thay đổi). Trái phiếu kỳ hạn dài, coupon thấp sẽ có Duration cao – và biến động giá mạnh hơn khi lãi suất thay đổi.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Rủi ro lãi suất" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Duration hoạt động như thế nào?</h2>

<p>Giả sử bạn có trái phiếu Duration = 5. Nếu lãi suất thị trường tăng 1%, giá trái phiếu sẽ giảm khoảng 5%. Ngược lại, nếu lãi suất giảm 1%, giá trái phiếu tăng khoảng 5%. Con số Duration cho bạn biết "mức độ rung lắc" dự kiến.</p>

<p>Đây là mối quan hệ nghịch: lãi suất tăng thì giá trái phiếu giảm, và ngược lại. Duration cao đồng nghĩa với rủi ro cao hơn, nhưng cũng có cơ hội lợi nhuận cao hơn nếu lãi suất đi đúng hướng bạn kỳ vọng.</p>

<h2>Những yếu tố ảnh hưởng đến Duration</h2>

<p>Ba yếu tố chính quyết định Duration: kỳ hạn còn lại, lãi suất coupon và mức lãi suất thị trường hiện tại. Trái phiếu kỳ hạn 10 năm có Duration cao hơn trái phiếu kỳ hạn 2 năm. Trái phiếu coupon thấp (5%) có Duration cao hơn trái phiếu coupon cao (10%) vì bạn phải đợi lâu hơn để thu hồi vốn.</p>

<p>Trái phiếu zero-coupon (không trả lãi định kỳ, chỉ trả gốc khi đáo hạn) có Duration bằng chính kỳ hạn – là loại trái phiếu nhạy cảm nhất với lãi suất.</p>

<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop" alt="Phân tích trái phiếu" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Ứng dụng Duration trong đầu tư</h2>

<p>Nếu bạn dự đoán lãi suất sẽ giảm trong tương lai, hãy chọn trái phiếu Duration cao để hưởng lợi từ tăng giá. Ngược lại, nếu lo ngại lãi suất sẽ tăng, chọn trái phiếu Duration thấp để hạn chế thiệt hại.</p>

<p>Với nhà đầu tư đang xem xét <a href="/blog/kien-thuc-dau-tu/dau-tu-trai-phieu-doanh-nghiep-2026">trái phiếu doanh nghiệp</a>, Duration giúp bạn đánh giá rủi ro ngoài rủi ro tín dụng. Một trái phiếu DN kỳ hạn 5 năm với Duration 4,2 sẽ giảm khoảng 4,2% giá nếu lãi suất tăng 1% – đây là con số cụ thể giúp bạn cân nhắc.</p>

<h2>Duration vs Kỳ hạn – khác nhau chỗ nào?</h2>

<p>Nhiều người nhầm Duration với kỳ hạn (maturity). Kỳ hạn là thời điểm trái phiếu đáo hạn – ngày bạn nhận lại gốc. Duration là thước đo rủi ro lãi suất – nó luôn nhỏ hơn hoặc bằng kỳ hạn. Chỉ trái phiếu zero-coupon mới có Duration bằng kỳ hạn.</p>

<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop" alt="Quản lý danh mục" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Duration là công cụ quan trọng giúp nhà đầu tư trái phiếu quản lý rủi ro lãi suất. Hiểu Duration giúp bạn chọn trái phiếu phù hợp với kỳ vọng lãi suất và khẩu vị rủi ro. Kết hợp Duration với <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM</a> và <a href="/blog/kien-thuc-dau-tu/coupon-rate-vs-ytm-vs-current-yield">Coupon Rate/Current Yield</a>, bạn sẽ có đủ công cụ để đánh giá bất kỳ trái phiếu nào.</p>`
    },
    {
        title: "Trái Phiếu Chính Phủ vs Doanh Nghiệp: Nên Chọn Loại Nào?",
        slug: "trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao",
        excerpt: "So sánh trái phiếu chính phủ và trái phiếu doanh nghiệp về lợi suất, rủi ro, thanh khoản. Hướng dẫn chọn loại phù hợp với mục tiêu đầu tư của bạn.",
        category_id: KT,
        tags: ["trái phiếu chính phủ", "trái phiếu doanh nghiệp", "so sánh", "rủi ro tín dụng"],
        reading_time: "8 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-05T03:00:00Z').toISOString(),
        content: `<p>Khi nói đến đầu tư trái phiếu, câu hỏi đầu tiên là: trái phiếu chính phủ hay doanh nghiệp? Hai loại này tuy cùng bản chất – cho vay và nhận lãi – nhưng khác nhau hoàn toàn về rủi ro, lợi suất và cách tiếp cận. Bài viết này sẽ giúp bạn so sánh và chọn loại phù hợp.</p>

<h2>Trái phiếu chính phủ: An toàn nhưng lãi thấp</h2>

<p>Trái phiếu chính phủ Việt Nam (TPCP) do Bộ Tài chính phát hành và được bảo đảm bằng uy tín quốc gia. Đây được coi là khoản đầu tư "không rủi ro" (risk-free) vì khả năng chính phủ vỡ nợ gần như bằng 0. Đổi lại, <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">lợi suất YTM</a> thường thấp hơn trái phiếu doanh nghiệp.</p>

<p>TPCP Việt Nam có kỳ hạn từ 1 đến 30 năm, với lợi suất dao động 2-5%/năm tùy kỳ hạn. Lãi suất này thấp hơn gửi tiết kiệm ngân hàng, nhưng TPCP có thanh khoản cao – bạn có thể bán trước hạn trên thị trường thứ cấp.</p>

<img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&h=400&fit=crop" alt="Tài chính chính phủ" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Trái phiếu doanh nghiệp: Lãi cao nhưng rủi ro hơn</h2>

<p>Trái phiếu doanh nghiệp (TPDN) do các công ty phát hành để huy động vốn. Lợi suất TPDN thường cao hơn TPCP từ 2-6% tùy chất lượng tín dụng của doanh nghiệp. Một công ty uy tín như Vingroup hay Masan có thể phát hành TPDN lãi 8-10%, trong khi doanh nghiệp nhỏ hơn có thể phải trả 12-14%.</p>

<p>Lợi suất cao hơn đi kèm rủi ro cao hơn. Rủi ro lớn nhất là rủi ro tín dụng – khả năng doanh nghiệp không trả được nợ. Giai đoạn 2022-2023 tại Việt Nam đã chứng kiến nhiều vụ vỡ nợ TPDN, gây thiệt hại cho hàng nghìn nhà đầu tư. Đọc thêm bài phân tích <a href="/blog/kien-thuc-dau-tu/dau-tu-trai-phieu-doanh-nghiep-2026">đầu tư trái phiếu doanh nghiệp 2026</a>.</p>

<h2>So sánh trực tiếp hai loại trái phiếu</h2>

| Tiêu chí | Trái phiếu chính phủ | Trái phiếu doanh nghiệp |
|---|---|---|
| Lợi suất | 2-5%/năm | 6-14%/năm |
| Rủi ro tín dụng | Gần như 0 | Thấp đến cao tùy DN |
| Thanh khoản | Rất cao | Thấp đến trung bình |
| Kỳ hạn phổ biến | 1-30 năm | 1-5 năm |
| Mệnh giá tối thiểu | 100.000 VNĐ | 100 triệu - 1 tỷ VNĐ |
| Kênh mua | Ngân hàng, CTCK | CTCK, sàn giao dịch TP |

<img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=400&fit=crop" alt="So sánh đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Ai nên chọn trái phiếu chính phủ?</h2>

<p>TPCP phù hợp với nhà đầu tư ưu tiên bảo toàn vốn tuyệt đối, quỹ hưu trí, hoặc những người muốn "neo" một phần danh mục vào tài sản an toàn. Trong giai đoạn thị trường bất ổn, TPCP đóng vai trò "phao cứu sinh" giúp danh mục đầu tư không bị sụt giảm quá mạnh.</p>

<p>TPCP cũng là lựa chọn khi bạn dự đoán lãi suất sẽ giảm – giá TPCP sẽ tăng khi lãi suất giảm, đặc biệt với TPCP kỳ hạn dài có <a href="/blog/kien-thuc-dau-tu/duration-trai-phieu-la-gi-rui-ro-lai-suat">Duration cao</a>.</p>

<h2>Ai nên chọn trái phiếu doanh nghiệp?</h2>

<p>TPDN phù hợp với nhà đầu tư chấp nhận rủi ro cao hơn để đổi lấy lợi suất hấp dẫn. Tuy nhiên, bạn PHẢI có khả năng đánh giá chất lượng tín dụng của doanh nghiệp phát hành. Kiểm tra báo cáo tài chính, tỷ lệ nợ/vốn, dòng tiền, và xếp hạng tín nhiệm trước khi mua.</p>

<p>Nguyên tắc quan trọng: KHÔNG bao giờ bỏ quá 20% tổng tài sản vào TPDN của một doanh nghiệp duy nhất. Đa dạng hóa qua nhiều TPDN khác nhau hoặc thông qua quỹ đầu tư trái phiếu.</p>

<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop" alt="Phân tích doanh nghiệp" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Không có loại trái phiếu nào "tốt hơn" – chỉ có loại phù hợp hơn với bạn. TPCP cho sự an toàn, TPDN cho lợi suất cao. Nhiều nhà đầu tư khôn ngoan kết hợp cả hai: 60-70% TPCP làm nền tảng ổn định, 30-40% TPDN chất lượng cao để tăng lợi suất. Dù chọn loại nào, hãy luôn so sánh bằng <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM</a> để đánh giá công bằng.</p>`
    }
];

for (const post of posts) {
    const { data, error } = await supabase.from('posts').insert({
        ...post, created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }).select('id, title, scheduled_at');
    if (error) console.log(`❌ ${post.title}:`, error.message);
    else console.log(`✅ ${data[0].title}\n   → Scheduled: ${new Date(data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
}
console.log('\n🎉 Batch 2a xong (9/18)!');
