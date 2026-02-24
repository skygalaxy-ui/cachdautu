import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
const { error: authError } = await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
if (authError) { console.log('❌', authError.message); process.exit(1); }

const CK = '96d5c106-653b-470e-90a7-6875e9a490fd';
const KT = '31d10229-9735-4f69-a368-08ea7f0550a1';

const posts = [
    {
        title: "So Sánh Phí Quản Lý Các Quỹ ETF Việt Nam 2026: Quỹ Nào Rẻ Nhất?",
        slug: "so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026",
        excerpt: "Bảng so sánh chi tiết phí quản lý của tất cả quỹ ETF tại Việt Nam năm 2026. Phí thấp hơn 0,1% mỗi năm có thể tiết kiệm hàng triệu đồng trong dài hạn.",
        category_id: CK,
        tags: ["phí ETF", "quỹ ETF", "chi phí đầu tư", "so sánh ETF"],
        reading_time: "7 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-02-28T03:00:00Z').toISOString(),
        content: `<p>Khi đầu tư ETF, nhiều người chỉ quan tâm đến hiệu suất mà bỏ quên một yếu tố quan trọng không kém: phí quản lý. Chênh lệch 0,1% nghe có vẻ nhỏ, nhưng với khoản đầu tư 100 triệu đồng trong 20 năm, con số này tạo ra sự khác biệt hàng chục triệu đồng.</p>

<p>Bài viết này sẽ so sánh phí quản lý của tất cả quỹ ETF phổ biến tại Việt Nam, giúp bạn chọn được quỹ tiết kiệm nhất cho chiến lược đầu tư dài hạn.</p>

<h2>Phí quản lý ETF tính như thế nào?</h2>

<p>Phí quản lý (expense ratio) là khoản phí mà công ty quản lý quỹ thu hàng năm để vận hành quỹ. Phí này được trừ tự động từ tài sản ròng (NAV) của quỹ – bạn không cần thanh toán riêng, nhưng nó ảnh hưởng trực tiếp đến lợi suất thực nhận.</p>

<p>Ví dụ: Nếu quỹ tăng trưởng 12% trong năm nhưng phí quản lý là 0,55%, lợi suất thực tế bạn nhận là khoảng 11,45%. Nghe không đáng kể, nhưng qua 10-20 năm, hiệu ứng lãi kép khiến khoản phí này "ăn mòn" một phần đáng kể vào tổng tài sản.</p>

<img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=400&fit=crop" alt="Chi phí đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Bảng so sánh phí quản lý ETF Việt Nam 2026</h2>

| Quỹ ETF | Mã giao dịch | Phí quản lý/năm | Chỉ số theo dõi |
|---|---|---|---|
| MAFM VN30 ETF | FUEMAV30 | 0,45% | VN30 |
| SSIAM VN30 ETF | E1VFVN30 | 0,55% | VN30 |
| SSIAM VNX50 ETF | E1VFVN50 | 0,55% | VNX50 |
| Diamond ETF | FUEDCMID | 0,60% | VNDiamond |
| VNFIN Lead ETF | FUEVFVND | 0,65% | VNFIN Lead |

<p>MAFM VN30 ETF đang có mức phí thấp nhất thị trường – chỉ 0,45%/năm. Với nhà đầu tư cùng muốn theo dõi chỉ số VN30, đây là lựa chọn tiết kiệm hơn so với E1VFVN30 của SSIAM.</p>

<h2>Phí thấp hơn 0,1% tạo ra bao nhiêu khác biệt?</h2>

<p>Hãy làm một phép tính đơn giản. Giả sử bạn đầu tư 50 triệu đồng ban đầu và thêm 3 triệu đồng mỗi tháng trong 20 năm, với lợi suất trung bình 12%/năm.</p>

<p>Với phí 0,55% (SSIAM VN30): Tổng tài sản sau 20 năm khoảng 3,2 tỷ đồng. Với phí 0,45% (MAFM VN30): Tổng tài sản sau 20 năm khoảng 3,28 tỷ đồng. Chênh lệch khoảng 80 triệu đồng – chỉ vì 0,1% phí mỗi năm!</p>

<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop" alt="Tính toán đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Nhưng phí thấp không phải là tất cả</h2>

<p>Trước khi chạy theo quỹ phí thấp nhất, hãy cân nhắc yếu tố thanh khoản. <a href="/blog/chung-khoan/vn30-etf-danh-gia-chi-tiet-2026">VN30 ETF (E1VFVN30)</a> tuy phí cao hơn 0,1%, nhưng thanh khoản gấp nhiều lần MAFM VN30. Với khối lượng giao dịch lớn, bạn mua bán dễ dàng hơn, chênh lệch giá bid-ask nhỏ hơn.</p>

<p>Với số vốn dưới 100 triệu, sự chênh lệch phí rất nhỏ (dưới 100.000 đồng/năm). Lúc này, thanh khoản và sự tiện lợi quan trọng hơn. Nhưng với nhà đầu tư dài hạn, vốn lớn, việc chọn quỹ phí thấp tạo ra lợi thế tích lũy đáng kể.</p>

<h2>Các loại phí khác cần biết</h2>

<p>Ngoài phí quản lý, nhà đầu tư ETF còn phải trả phí giao dịch cho công ty chứng khoán (0,15-0,25% mỗi lệnh) và thuế bán chứng khoán (0,1% giá trị giao dịch). Những chi phí này áp dụng giống nhau cho mọi ETF, nên phí quản lý vẫn là yếu tố phân biệt chính.</p>

<p>Nếu bạn dùng chiến lược <a href="/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026">DCA mua đều hàng tháng</a>, hãy chọn CTCK có phí giao dịch thấp hoặc miễn phí (như TCBS) để tối ưu thêm chi phí.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Tối ưu chi phí" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Phí quản lý là yếu tố "ẩn" nhưng ảnh hưởng lớn đến kết quả đầu tư dài hạn. Ưu tiên chọn quỹ phí thấp khi theo dõi cùng chỉ số, nhưng đừng quên cân nhắc thanh khoản. Để tìm quỹ ETF phù hợp nhất, tham khảo bài <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">Top 5 Quỹ ETF Tốt Nhất Việt Nam 2026</a>.</p>`
    },
    {
        title: "Cách Theo Dõi NAV và Hiệu Suất Quỹ ETF Chính Xác Nhất",
        slug: "cach-theo-doi-nav-hieu-suat-quy-etf",
        excerpt: "Hướng dẫn cách theo dõi NAV (giá trị tài sản ròng), iNAV, và đánh giá hiệu suất quỹ ETF. Biết chính xác ETF của bạn đang sinh lời hay lỗ.",
        category_id: KT,
        tags: ["NAV", "hiệu suất ETF", "iNAV", "quỹ ETF", "theo dõi đầu tư"],
        reading_time: "7 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-01T03:00:00Z').toISOString(),
        content: `<p>Sau khi mua ETF, câu hỏi tiếp theo mà mọi nhà đầu tư đều có là: "Quỹ của tôi đang lời hay lỗ?" Để trả lời chính xác, bạn cần hiểu một số khái niệm quan trọng như NAV, iNAV và tracking error. Bài viết này sẽ hướng dẫn bạn cách theo dõi hiệu suất ETF một cách chuyên nghiệp.</p>

<h2>NAV là gì và tại sao quan trọng?</h2>

<p>NAV (Net Asset Value) là giá trị tài sản ròng của quỹ ETF, được tính bằng cách lấy tổng giá trị tài sản của quỹ trừ đi các khoản nợ, sau đó chia cho tổng số chứng chỉ quỹ đang lưu hành. NAV được công bố hàng ngày sau khi thị trường đóng cửa.</p>

<p>Đây là "giá trị thực" của mỗi chứng chỉ quỹ. Trong khi giá giao dịch trên sàn có thể chênh lệch so với NAV (do cung cầu), NAV luôn phản ánh giá trị thực tế của tài sản trong quỹ. Nếu bạn đang đầu tư <a href="/blog/chung-khoan/vn30-etf-danh-gia-chi-tiet-2026">VN30 ETF</a>, NAV sẽ cho biết chính xác giá trị 30 cổ phiếu mà quỹ đang nắm giữ.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Biểu đồ NAV" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Phân biệt NAV, iNAV và giá thị trường</h2>

<p>Nhiều người nhầm lẫn giữa 3 con số này. NAV được tính cuối ngày, phản ánh giá trị đóng cửa. iNAV (indicative NAV) được cập nhật liên tục trong phiên giao dịch, mỗi 15 giây một lần, giúp bạn biết giá trị "ước tính" của quỹ tại bất kỳ thời điểm nào trong phiên.</p>

<p>Giá thị trường là giá bạn thực sự mua hoặc bán trên sàn – giá này phụ thuộc vào cung cầu và có thể cao hơn (premium) hoặc thấp hơn (discount) so với NAV. Nhà đầu tư thông minh sẽ so sánh giá thị trường với iNAV trước khi đặt lệnh để tránh mua quá đắt.</p>

<h2>Nên xem NAV ở đâu?</h2>

<p>Có nhiều nguồn để theo dõi NAV quỹ ETF. Trang web của công ty quản lý quỹ (SSIAM, Mirae Asset, Dragon Capital) công bố NAV hàng ngày. Các app chứng khoán như SSI, VPS, TCBS cũng hiển thị thông tin ETF bao gồm NAV, iNAV và giá thị trường.</p>

<p>Ngoài ra, website của Sở Giao dịch Chứng khoán TP.HCM (HOSE) có mục riêng cho ETF, cung cấp đầy đủ dữ liệu lịch sử. Bạn nên lưu lại trang này và kiểm tra định kỳ hàng tuần hoặc hàng tháng thay vì theo dõi mỗi ngày.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Theo dõi đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Tracking error: ETF có theo dõi tốt chỉ số không?</h2>

<p>Tracking error đo lường mức chênh lệch giữa hiệu suất của ETF và chỉ số mà nó theo dõi. Tracking error thấp (dưới 1%) nghĩa là quỹ đang làm tốt nhiệm vụ sao chép chỉ số. Tracking error cao có thể do nhiều nguyên nhân: chi phí giao dịch khi rebalance, phí quản lý, hoặc cách quản lý quỹ.</p>

<p>Khi <a href="/blog/chung-khoan/so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026">so sánh các quỹ ETF</a> cùng theo dõi một chỉ số (ví dụ VN30), tracking error là tiêu chí quan trọng bên cạnh phí quản lý. Quỹ có phí thấp nhưng tracking error cao thì chưa chắc đã tốt hơn quỹ phí cao nhưng tracking chính xác.</p>

<h2>Cách đánh giá hiệu suất ETF đúng cách</h2>

<p>Sai lầm phổ biến là đánh giá hiệu suất ETF theo từng ngày hoặc từng tuần. Với ETF, bạn nên nhìn hiệu suất theo quý hoặc theo năm. So sánh hiệu suất với chỉ số chuẩn (benchmark) và với các quỹ ETF đối thủ để có cái nhìn toàn diện.</p>

<p>Công thức tính lợi suất cá nhân: ghi lại tổng số tiền đã bỏ vào (bao gồm tất cả các lần mua DCA) và so với giá trị hiện tại. Đây mới là con số quan trọng nhất – lợi suất thực trên vốn đã đầu tư của bạn.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Đánh giá hiệu suất" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Theo dõi NAV và hiệu suất ETF không quá phức tạp, nhưng cần hiểu đúng các khái niệm cơ bản. Hãy tập trung vào NAV và tracking error khi đánh giá quỹ, so sánh giá thị trường với iNAV khi giao dịch, và luôn nhìn hiệu suất trong khung thời gian dài hạn. Tìm hiểu thêm về các quỹ cụ thể tại <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">Top 5 Quỹ ETF Tốt Nhất 2026</a>.</p>`
    },
    {
        title: "ETF Quốc Tế: Có Nên Đầu Tư S&P 500 Từ Việt Nam Không?",
        slug: "etf-quoc-te-co-nen-dau-tu-sp500-tu-viet-nam",
        excerpt: "Phân tích cơ hội đầu tư ETF quốc tế như S&P 500, Nasdaq từ Việt Nam. So sánh lợi thế, rủi ro tỷ giá và các cách tiếp cận khả thi cho nhà đầu tư Việt.",
        category_id: KT,
        tags: ["ETF quốc tế", "S&P 500", "đầu tư nước ngoài", "đa dạng hóa"],
        reading_time: "9 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-02T03:00:00Z').toISOString(),
        content: `<p>Sau khi đã tìm hiểu về <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">các quỹ ETF tại Việt Nam</a>, nhiều nhà đầu tư bắt đầu đặt câu hỏi: "Tôi có thể đầu tư ETF quốc tế như S&P 500 từ Việt Nam không?" Câu trả lời là có, nhưng không đơn giản như mua ETF nội địa.</p>

<p>Bài viết này sẽ phân tích cơ hội, thách thức và các cách tiếp cận thực tế để nhà đầu tư Việt Nam có thể đa dạng hóa danh mục ra thị trường quốc tế.</p>

<h2>Tại sao nên quan tâm ETF quốc tế?</h2>

<p>Thị trường chứng khoán Việt Nam tuy đang phát triển nhanh, nhưng chỉ chiếm khoảng 0,3% vốn hóa chứng khoán toàn cầu. Bỏ 100% vốn vào một thị trường duy nhất đồng nghĩa với việc bạn bỏ qua 99,7% cơ hội đầu tư trên thế giới.</p>

<p>S&P 500 – chỉ số 500 công ty lớn nhất nước Mỹ – đã mang lại lợi suất trung bình khoảng 10%/năm trong hơn 100 năm qua. Danh mục bao gồm Apple, Microsoft, Google, Amazon – những công ty khổng lồ mà sản phẩm của họ bạn sử dụng hàng ngày. Đầu tư vào S&P 500 ETF nghĩa là sở hữu một phần nhỏ của các doanh nghiệp thống trị nền kinh tế toàn cầu.</p>

<img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&h=400&fit=crop" alt="Thị trường quốc tế" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Các cách đầu tư ETF quốc tế từ Việt Nam</h2>

<p>Hiện nay có ba cách chính để nhà đầu tư Việt Nam tiếp cận ETF quốc tế. Cách thứ nhất là thông qua các công ty chứng khoán Việt Nam có dịch vụ giao dịch chứng khoán quốc tế, như DNSE, SSI, hay Mirae Asset. Bạn mở thêm tài khoản chứng khoán quốc tế và giao dịch trực tiếp trên sàn Mỹ.</p>

<p>Cách thứ hai là sử dụng các nền tảng fintech quốc tế như Interactive Brokers, eToro, hay Moomoo – cho phép nhà đầu tư từ Việt Nam mở tài khoản. Tuy nhiên, cần cân nhắc vấn đề pháp lý và thuế khi sử dụng các nền tảng này.</p>

<p>Cách thứ ba, đơn giản nhất, là đầu tư vào các quỹ mở tại Việt Nam có chiến lược đầu tư ra nước ngoài, như quỹ dragon Capital hoặc VinaCapital có sản phẩm tập trung vào thị trường quốc tế.</p>

<img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=400&fit=crop" alt="Giao dịch quốc tế" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Rủi ro tỷ giá – yếu tố quan trọng thường bị bỏ quên</h2>

<p>Khi đầu tư ETF quốc tế, bạn đang chuyển đổi VND sang USD. Lợi suất thực tế phụ thuộc vào cả hiệu suất ETF lẫn biến động tỷ giá USD/VND. May mắn là trong lịch sử, VND thường mất giá khoảng 2-3%/năm so với USD, nên rủi ro tỷ giá thực tế là "thuận lợi" cho nhà đầu tư Việt đầu tư sang Mỹ.</p>

<p>Tuy nhiên, trong ngắn hạn, biến động tỷ giá có thể gây ra kết quả bất ngờ. Nếu S&P 500 tăng 5% nhưng USD giảm 3% so với VND, lợi suất quy về VND chỉ còn khoảng 2%. Đây là yếu tố cần tính khi quyết định phân bổ bao nhiêu vốn cho ETF quốc tế.</p>

<h2>Phân bổ bao nhiêu cho ETF quốc tế?</h2>

<p>Các chuyên gia thường khuyên nhà đầu tư Việt Nam phân bổ 10-30% danh mục cho tài sản quốc tế, tùy vào khẩu vị rủi ro và vốn hiện có. Nếu tổng danh mục dưới 200 triệu đồng, việc đầu tư quốc tế có thể chưa cần thiết vì chi phí chuyển đổi và phí giao dịch quốc tế tương đối cao.</p>

<p>Với nhà đầu tư mới, hãy ưu tiên xây dựng nền tảng với <a href="/blog/chung-khoan/vn30-etf-danh-gia-chi-tiet-2026">ETF nội địa (VN30 ETF)</a> trước. Khi đã tích lũy đủ kinh nghiệm và vốn, bổ sung thêm ETF quốc tế để đa dạng hóa toàn cầu.</p>

<img src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&h=400&fit=crop" alt="Phân bổ danh mục" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>ETF quốc tế mở ra cơ hội đầu tư vào những nền kinh tế lớn nhất thế giới ngay từ Việt Nam. Tuy vấn đề tỷ giá, pháp lý và chi phí tạo ra một số rào cản, nhưng lợi ích đa dạng hóa là rất thực tế. Bắt đầu với ETF Việt Nam, sau đó từ từ mở rộng ra quốc tế khi đã sẵn sàng. Đọc thêm <a href="/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026">Hướng Dẫn Đầu Tư ETF Cho Người Mới</a> nếu bạn đang bắt đầu hành trình.</p>`
    }
];

for (const post of posts) {
    const { data, error } = await supabase.from('posts').insert({
        ...post, created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }).select('id, title, scheduled_at');
    if (error) console.log(`❌ ${post.title}:`, error.message);
    else console.log(`✅ ${data[0].title}\n   → Scheduled: ${new Date(data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
}
console.log('\n🎉 Batch 1b xong (6/18)!');
