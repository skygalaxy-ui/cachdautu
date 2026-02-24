import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
const { error: authError } = await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
if (authError) { console.log('❌', authError.message); process.exit(1); }

const KT = '31d10229-9735-4f69-a368-08ea7f0550a1';

const posts = [
    {
        title: "Rủi Ro Lãi Suất Khi Đầu Tư Trái Phiếu: 4 Cách Phòng Tránh Hiệu Quả",
        slug: "rui-ro-lai-suat-dau-tu-trai-phieu-cach-phong-tranh",
        excerpt: "Lãi suất tăng khiến giá trái phiếu giảm – đây là rủi ro lớn nhất mà nhà đầu tư trái phiếu đối mặt. Tìm hiểu 4 chiến lược phòng tránh rủi ro lãi suất.",
        category_id: KT,
        tags: ["rủi ro lãi suất", "trái phiếu", "hedging", "quản lý rủi ro"],
        reading_time: "8 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-06T03:00:00Z').toISOString(),
        content: `<p>Nếu bạn đang đầu tư hoặc dự định đầu tư trái phiếu, có một loại rủi ro bạn không thể bỏ qua: rủi ro lãi suất. Đây là rủi ro lớn nhất và phổ biến nhất trong thị trường trái phiếu – khi lãi suất thị trường tăng, giá trái phiếu của bạn sẽ giảm, đôi khi giảm đáng kể.</p>

<p>Bài viết này sẽ giải thích cơ chế rủi ro lãi suất, cách đo lường bằng <a href="/blog/kien-thuc-dau-tu/duration-trai-phieu-la-gi-rui-ro-lai-suat">Duration</a>, và 4 chiến lược phòng tránh mà bạn có thể áp dụng ngay.</p>

<h2>Tại sao lãi suất tăng khiến giá trái phiếu giảm?</h2>

<p>Đây là quy luật cơ bản nhất của thị trường trái phiếu. Khi lãi suất thị trường tăng, trái phiếu mới phát hành sẽ có coupon cao hơn. Những trái phiếu cũ với coupon thấp hơn trở nên kém hấp dẫn – để bán được, giá phải giảm xuống đến mức mà <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM tương đương</a> với trái phiếu mới.</p>

<p>Ví dụ thực tế: Bạn mua trái phiếu coupon 8%, mệnh giá 1 triệu đồng. Nếu lãi suất thị trường tăng lên 10%, không ai muốn mua trái phiếu coupon 8% với giá đầy đủ nữa. Giá phải giảm xuống khoảng 920.000 đồng để YTM đạt mức 10% – khi đó bạn đang "lỗ" 80.000 đồng trên giấy.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Biến động lãi suất" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Cách 1: Chọn trái phiếu Duration thấp</h2>

<p>Duration thấp nghĩa là giá trái phiếu ít nhạy cảm với lãi suất. Trái phiếu kỳ hạn ngắn (1-3 năm) có Duration thấp hơn trái phiếu dài hạn (10-20 năm). Trong giai đoạn lo ngại lãi suất tăng, dịch chuyển danh mục sang trái phiếu ngắn hạn là chiến lược phổ biến nhất.</p>

<p>Ngoài ra, trái phiếu <a href="/blog/kien-thuc-dau-tu/coupon-rate-vs-ytm-vs-current-yield">coupon cao</a> cũng có Duration thấp hơn trái phiếu coupon thấp, vì bạn thu hồi vốn nhanh hơn thông qua các khoản lãi.</p>

<h2>Cách 2: Chiến lược bậc thang (Laddering)</h2>

<p>Laddering là việc chia vốn đầu tư vào nhiều trái phiếu có kỳ hạn khác nhau – ví dụ 20% vào kỳ hạn 1 năm, 20% vào 2 năm, 20% vào 3 năm, 20% vào 5 năm, 20% vào 7 năm.</p>

<p>Khi trái phiếu ngắn hạn đáo hạn, bạn tái đầu tư vào trái phiếu dài hạn mới (với lãi suất mới). Chiến lược này giúp bạn "trung bình" lãi suất qua thời gian, giống như DCA trong chứng khoán – không bỏ tất cả trứng vào một kỳ hạn.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Chiến lược đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Cách 3: Sử dụng trái phiếu lãi suất thả nổi</h2>

<p>Trái phiếu lãi suất thả nổi (floating rate) có coupon điều chỉnh theo lãi suất thị trường. Khi lãi suất tăng, coupon bạn nhận cũng tăng theo, bù đắp phần nào rủi ro giá giảm. Tại Việt Nam, một số trái phiếu doanh nghiệp phát hành với lãi suất thả nổi dạng "lãi suất tiết kiệm + biên".</p>

<p>Nhược điểm là khi lãi suất giảm, coupon cũng giảm – bạn mất cơ hội "khóa" lãi suất cao. Trái phiếu thả nổi phù hợp khi bạn kỳ vọng lãi suất sẽ tăng hoặc duy trì ở mức cao.</p>

<h2>Cách 4: Giữ đến đáo hạn</h2>

<p>Cách đơn giản nhất: nếu bạn giữ trái phiếu đến ngày đáo hạn, rủi ro lãi suất hoàn toàn biến mất. Dù giá trái phiếu biến động bao nhiêu trên thị trường thứ cấp, bạn vẫn nhận đủ mệnh giá khi đáo hạn (giả sử doanh nghiệp không vỡ nợ).</p>

<p>Chiến lược "buy and hold" đơn giản nhưng hiệu quả. YTM bạn tính tại thời điểm mua chính là lợi suất bạn sẽ nhận nếu giữ đến cuối. Biến động giá giữa chừng chỉ là "noise" – miễn bạn không bán.</p>

<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop" alt="Đầu tư dài hạn" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Rủi ro lãi suất là phần không thể tránh khỏi khi đầu tư trái phiếu, nhưng hoàn toàn có thể quản lý. Chọn Duration phù hợp, đa dạng kỳ hạn bằng chiến lược bậc thang, cân nhắc trái phiếu thả nổi, hoặc đơn giản giữ đến đáo hạn. Hiểu rủi ro để kiểm soát nó – đó là chìa khóa để đầu tư trái phiếu thành công. Xem thêm <a href="/blog/kien-thuc-dau-tu/trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao">so sánh trái phiếu chính phủ vs doanh nghiệp</a>.</p>`
    },
    {
        title: "Cách Đọc Bảng Giá Trái Phiếu Cho Người Mới Bắt Đầu",
        slug: "cach-doc-bang-gia-trai-phieu-cho-nguoi-moi",
        excerpt: "Hướng dẫn đọc bảng giá trái phiếu: hiểu mệnh giá, coupon, YTM, clean price vs dirty price. Bài viết kèm ảnh minh họa giúp người mới hiểu ngay.",
        category_id: KT,
        tags: ["bảng giá trái phiếu", "clean price", "dirty price", "giao dịch trái phiếu"],
        reading_time: "7 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-07T03:00:00Z').toISOString(),
        content: `<p>Lần đầu nhìn vào bảng giá trái phiếu, bạn có thể cảm thấy rối với hàng chục cột số liệu. Clean price, dirty price, accrued interest, bid, ask... Nhưng thực tế, bạn chỉ cần hiểu 6-7 thông tin cốt lõi là đủ để giao dịch trái phiếu một cách tự tin.</p>

<p>Bài viết này sẽ "giải mã" từng cột trong bảng giá trái phiếu bằng ngôn ngữ đơn giản, kèm ví dụ thực tế.</p>

<h2>Mệnh giá và đơn vị tính giá</h2>

<p>Mệnh giá (par value/face value) là giá trị gốc của trái phiếu, thường là 100.000 VNĐ cho trái phiếu chính phủ. Tuy nhiên, giá trái phiếu trên bảng thường được hiển thị theo phần trăm mệnh giá. Ví dụ: giá 98,5 nghĩa là trái phiếu đang giao dịch ở 98,5% mệnh giá – tức 98.500 VNĐ cho mỗi trái phiếu mệnh giá 100.000 VNĐ.</p>

<p>Giá dưới 100 gọi là discount (mua rẻ hơn mệnh giá), giá trên 100 gọi là premium (mua đắt hơn mệnh giá). Nhà đầu tư thường thích mua discount vì ngoài coupon, còn được lời thêm khoản chênh lệch giá khi đáo hạn – điều này phản ánh trong <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM cao hơn coupon rate</a>.</p>

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="Bảng giá chứng khoán" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Clean Price vs Dirty Price: Giá nào mới là "thật"?</h2>

<p>Đây là khái niệm gây nhầm lẫn nhiều nhất cho người mới. Clean Price là giá trái phiếu không bao gồm lãi tích lũy (accrued interest) – đây là giá bạn thấy trên bảng giá. Dirty Price = Clean Price + Accrued Interest – đây là giá thực tế bạn phải trả khi mua.</p>

<p>Accrued Interest là phần lãi coupon đã tích lũy từ ngày trả coupon gần nhất đến ngày giao dịch. Ví dụ: trái phiếu trả coupon 6 tháng/lần, bạn mua vào tháng thứ 3, bạn phải trả thêm 3 tháng lãi tích lũy cho người bán – vì họ đã "giữ" trái phiếu 3 tháng nhưng chưa nhận coupon.</p>

<h2>Bid, Ask và Spread</h2>

<p>Bid là giá người mua sẵn sàng trả, Ask (hay Offer) là giá người bán yêu cầu. Spread = Ask - Bid, phản ánh thanh khoản của trái phiếu. Spread nhỏ (0,1-0,3%) nghĩa là thanh khoản tốt, spread lớn (1-2%) nghĩa là khó mua bán.</p>

<p><a href="/blog/kien-thuc-dau-tu/trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao">Trái phiếu chính phủ</a> thường có spread rất nhỏ vì thanh khoản cao. Trái phiếu doanh nghiệp, đặc biệt doanh nghiệp nhỏ, có spread lớn – bạn có thể mua giá 98 nhưng khi cần bán chỉ được 96, mất 2% ngay lập tức.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Phân tích bảng giá" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>YTM trên bảng giá</h2>

<p>Hầu hết bảng giá trái phiếu đều hiển thị YTM đã tính sẵn, giúp bạn so sánh nhanh giữa các trái phiếu khác nhau. YTM ở cột Bid cho biết lợi suất nếu bạn bán (giá thấp hơn, YTM cao hơn), YTM ở cột Ask cho biết lợi suất nếu bạn mua (giá cao hơn, YTM thấp hơn).</p>

<p>Khi đánh giá mua trái phiếu, hãy nhìn YTM của giá Ask – đây là mức lợi suất thực bạn sẽ nhận. So sánh với <a href="/blog/tai-chinh-ca-nhan/lai-suat-ngan-hang-2026-so-sanh">lãi suất ngân hàng</a> cùng kỳ hạn để xem trái phiếu có xứng đáng không.</p>

<h2>Khối lượng giao dịch và ngày đáo hạn</h2>

<p>Khối lượng giao dịch cho biết bao nhiêu trái phiếu được mua bán trong phiên – con số này phản ánh mức quan tâm của thị trường. Trái phiếu khối lượng thấp (<100 tỷ/phiên) nên thận trọng vì khó mua bán số lượng lớn.</p>

<p>Ngày đáo hạn cho biết còn bao lâu nữa bạn nhận lại gốc. Kết hợp với <a href="/blog/kien-thuc-dau-tu/duration-trai-phieu-la-gi-rui-ro-lai-suat">Duration</a>, bạn hiểu được cả thời điểm thu hồi vốn lẫn mức rủi ro lãi suất.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Giao dịch trái phiếu" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Bảng giá trái phiếu không phức tạp như bạn tưởng. Tập trung vào 5 thông tin: Clean Price (giá niêm yết), Accrued Interest (lãi tích lũy), YTM (lợi suất đáo hạn), Bid-Ask Spread (thanh khoản), và ngày đáo hạn. Nắm vững những thông tin này, bạn đã sẵn sàng tham gia giao dịch trái phiếu một cách tự tin.</p>`
    },
    {
        title: "Xếp Hạng Tín Nhiệm Trái Phiếu: Hiểu Rating Từ AAA Đến D",
        slug: "xep-hang-tin-nhiem-trai-phieu-rating-aaa-den-d",
        excerpt: "Giải thích hệ thống xếp hạng tín nhiệm trái phiếu (credit rating) từ AAA đến D. Tại sao rating quan trọng và cách sử dụng nó khi đầu tư trái phiếu.",
        category_id: KT,
        tags: ["xếp hạng tín nhiệm", "credit rating", "trái phiếu", "rủi ro tín dụng"],
        reading_time: "7 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-08T03:00:00Z').toISOString(),
        content: `<p>Trước khi mua trái phiếu, bạn cần biết: "Người vay này có đáng tin không?" Xếp hạng tín nhiệm (credit rating) chính là câu trả lời từ các tổ chức đánh giá độc lập. Nó cho biết khả năng người phát hành trái phiếu trả được nợ đúng hạn – từ "cực kỳ đáng tin" (AAA) đến "đã vỡ nợ" (D).</p>

<h2>Hệ thống xếp hạng tín nhiệm hoạt động thế nào?</h2>

<p>Trên thế giới, ba tổ chức xếp hạng lớn nhất là Moody's, S&P Global và Fitch. Tại Việt Nam, có Phattinh Rating và FiinRatings đang hoạt động. Các tổ chức này phân tích tài chính, dòng tiền, mô hình kinh doanh, và triển vọng ngành của doanh nghiệp phát hành rồi gán một "điểm" dưới dạng chữ cái.</p>

<p>Rating không phải lời khuyên đầu tư, mà là đánh giá về khả năng trả nợ. Trái phiếu rating cao không đảm bảo lợi nhuận tốt – nó chỉ có nghĩa là rủi ro vỡ nợ thấp hơn. Đây là thông tin quan trọng khi bạn cân nhắc giữa <a href="/blog/kien-thuc-dau-tu/trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao">trái phiếu chính phủ vs doanh nghiệp</a>.</p>

<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop" alt="Xếp hạng tín nhiệm" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Bảng xếp hạng từ AAA đến D</h2>

| Rating | Ý nghĩa | Rủi ro vỡ nợ | Lợi suất |
|---|---|---|---|
| AAA | Chất lượng cao nhất | Cực thấp | Thấp nhất |
| AA | Chất lượng rất cao | Rất thấp | Thấp |
| A | Chất lượng cao | Thấp | Trung bình thấp |
| BBB | Đầu tư chấp nhận được | Vừa phải | Trung bình |
| BB | Đầu cơ | Đáng kể | Trung bình cao |
| B | Rủi ro cao | Cao | Cao |
| CCC | Rủi ro rất cao | Rất cao | Rất cao |
| D | Đã vỡ nợ | Đã xảy ra | Không xác định |

<p>Ranh giới quan trọng nhất là giữa BBB và BB – đây là "đường phân cách" giữa trái phiếu "Investment Grade" (đáng đầu tư) và "High Yield/Junk" (trái phiếu rác). Hầu hết quỹ đầu tư tổ chức chỉ được mua trái phiếu BBB trở lên.</p>

<h2>Rating ảnh hưởng gì đến lợi suất?</h2>

<p>Mối quan hệ nghịch: rating càng thấp, <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM càng cao</a>. Nhà đầu tư đòi hỏi lợi suất cao hơn để bù đắp rủi ro vỡ nợ cao hơn. Chênh lệch lợi suất giữa trái phiếu AAA và BBB gọi là "credit spread" – spread cao nghĩa là thị trường đang lo ngại rủi ro.</p>

<p>Tại Việt Nam, trái phiếu chính phủ (tương đương BBB+ theo S&P) có YTM khoảng 2-5%, trong khi trái phiếu doanh nghiệp chất lượng trung bình có YTM 8-12%. Chênh lệch 4-8% chính là "phần thưởng rủi ro" bạn nhận được khi chấp nhận mua <a href="/blog/kien-thuc-dau-tu/dau-tu-trai-phieu-doanh-nghiep-2026">trái phiếu doanh nghiệp</a>.</p>

<img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=400&fit=crop" alt="Đánh giá rủi ro" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Thực trạng xếp hạng tín nhiệm tại Việt Nam</h2>

<p>Thị trường xếp hạng tín nhiệm tại Việt Nam còn non trẻ. Phần lớn trái phiếu doanh nghiệp phát hành không có rating, khiến nhà đầu tư khó đánh giá rủi ro. Đây là một trong những nguyên nhân dẫn đến khủng hoảng TPDN 2022-2023 – nhiều người mua trái phiếu không rating chỉ vì lãi suất cao mà không hiểu rủi ro.</p>

<p>Tuy nhiên, quy định mới đang dần yêu cầu các doanh nghiệp phát hành TPDN phải có xếp hạng. Đây là bước tiến tích cực giúp thị trường minh bạch hơn và bảo vệ nhà đầu tư tốt hơn.</p>

<h2>Cách sử dụng rating khi đầu tư</h2>

<p>Nếu bạn là nhà đầu tư bảo thủ, chỉ nên mua trái phiếu BBB trở lên. Nếu sẵn sàng chấp nhận rủi ro cao hơn để đổi lợi suất, có thể xem xét BB nhưng KHÔNG NÊN vượt quá 20% danh mục. Tuyệt đối tránh trái phiếu CCC hoặc không có rating – đây là vùng "đánh bạc", không phải đầu tư.</p>

<p>Hãy nhớ: YTM cao bất thường là dấu hiệu cảnh báo. Nếu trái phiếu có YTM 15-20% trong khi thị trường chung chỉ 8-10%, rất có thể thị trường đang "giảm giá" trái phiếu đó vì lo ngại vỡ nợ.</p>

<img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=400&fit=crop" alt="Quản lý danh mục" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Xếp hạng tín nhiệm là "tấm lá chắn" đầu tiên bảo vệ nhà đầu tư trái phiếu. Dù không hoàn hảo, rating cung cấp khung tham chiếu để đánh giá rủi ro tín dụng nhanh chóng. Kết hợp rating với phân tích <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">YTM</a>, <a href="/blog/kien-thuc-dau-tu/duration-trai-phieu-la-gi-rui-ro-lai-suat">Duration</a> và <a href="/blog/kien-thuc-dau-tu/rui-ro-lai-suat-dau-tu-trai-phieu-cach-phong-tranh">rủi ro lãi suất</a>, bạn sẽ có bộ công cụ đầy đủ để đầu tư trái phiếu an toàn.</p>`
    }
];

for (const post of posts) {
    const { data, error } = await supabase.from('posts').insert({
        ...post, created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }).select('id, title, scheduled_at');
    if (error) console.log(`❌ ${post.title}:`, error.message);
    else console.log(`✅ ${data[0].title}\n   → Scheduled: ${new Date(data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
}
console.log('\n🎉 Batch 2b xong (12/18)!');
