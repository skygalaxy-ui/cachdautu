import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
const { error: authError } = await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });
if (authError) { console.log('❌', authError.message); process.exit(1); }

const KT = '31d10229-9735-4f69-a368-08ea7f0550a1';
const TC = '0a381b9b-e2af-4762-85d9-b8ff8c231b31';

const posts = [
    {
        title: "DCA Là Gì? Chiến Lược Trung Bình Giá Cho Nhà Đầu Tư Thông Minh",
        slug: "dca-la-gi-chien-luoc-trung-binh-gia",
        excerpt: "DCA (Dollar Cost Averaging) là chiến lược đầu tư đều đặn giúp giảm rủi ro mua đỉnh. Tìm hiểu cách áp dụng DCA với ETF, cổ phiếu và crypto.",
        category_id: KT,
        tags: ["DCA", "trung bình giá", "chiến lược đầu tư", "đầu tư dài hạn"],
        reading_time: "8 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-09T03:00:00Z').toISOString(),
        content: `<p>Warren Buffett – nhà đầu tư vĩ đại nhất mọi thời đại – từng nói: "Chiến lược tốt nhất cho hầu hết mọi người là mua đều đặn vào quỹ chỉ số." Đó chính là bản chất của DCA (Dollar Cost Averaging) – chiến lược đầu tư đơn giản nhưng hiệu quả đã giúp hàng triệu người xây dựng tài sản thành công.</p>

<h2>DCA hoạt động như thế nào?</h2>

<p>DCA là việc đầu tư một số tiền cố định vào một tài sản, theo chu kỳ đều đặn (hàng tuần, hàng tháng), bất kể giá đang tăng hay giảm. Thay vì cố gắng "bắt đáy" hay "mua đỉnh", bạn loại bỏ hoàn toàn yếu tố cảm xúc và timing khỏi quyết định đầu tư.</p>

<p>Khi giá cao, số tiền cố định mua được ít đơn vị hơn. Khi giá thấp, cùng số tiền mua được nhiều đơn vị hơn. Theo thời gian, giá mua trung bình của bạn sẽ "tự động" ở mức hợp lý – không phải giá thấp nhất, nhưng chắc chắn không phải giá cao nhất.</p>

<img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop" alt="Chiến lược DCA" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Ví dụ DCA thực tế với ETF VN30</h2>

<p>Giả sử bạn đầu tư 3 triệu đồng mỗi tháng vào <a href="/blog/chung-khoan/vn30-etf-danh-gia-chi-tiet-2026">VN30 ETF (E1VFVN30)</a> trong 6 tháng. Giá ETF biến động qua các tháng, nhưng chiến lược DCA giúp bạn trung bình giá tốt.</p>

| Tháng | Giá ETF | Số CCQ mua | Tổng đầu tư |
|---|---|---|---|
| Tháng 1 | 18.000 | 167 | 3.000.000 |
| Tháng 2 | 15.000 | 200 | 6.000.000 |
| Tháng 3 | 14.000 | 214 | 9.000.000 |
| Tháng 4 | 16.000 | 188 | 12.000.000 |
| Tháng 5 | 19.000 | 158 | 15.000.000 |
| Tháng 6 | 20.000 | 150 | 18.000.000 |

<p>Tổng: 1.077 CCQ, giá trung bình 16.713 VNĐ/CCQ. Nếu bạn bỏ hết 18 triệu ngay tháng 1 (giá 18.000), bạn chỉ mua được 1.000 CCQ. DCA giúp bạn mua được nhiều hơn 77 CCQ nhờ tận dụng được giai đoạn giá giảm tháng 2-3.</p>

<h2>DCA phù hợp với tài sản nào?</h2>

<p>DCA phù hợp nhất với các tài sản có xu hướng tăng dài hạn nhưng biến động ngắn hạn: quỹ ETF (đặc biệt <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF theo chỉ số thị trường</a>), cổ phiếu blue-chip, và crypto lớn như Bitcoin.</p>

<p>DCA KHÔNG phù hợp với tài sản đi ngang hoặc giảm dài hạn, hoặc các tài sản có chi phí giao dịch cao (vì bạn giao dịch nhiều lần). Với trái phiếu, DCA ít cần thiết vì biến động giá thấp hơn – nhưng khái niệm mua đều đặn vẫn có thể áp dụng với <a href="/blog/kien-thuc-dau-tu/ytm-la-gi-cach-tinh-yield-to-maturity">trái phiếu ngắn hạn</a>.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Đầu tư đều đặn" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>DCA vs Lump Sum: Nên chọn cách nào?</h2>

<p>Lump Sum là bỏ toàn bộ vốn vào một lần. Nghiên cứu của Vanguard cho thấy Lump Sum thắng DCA khoảng 2/3 trường hợp – vì thị trường có xu hướng tăng, nên đầu tư sớm hơn thường tốt hơn. Tuy nhiên, DCA thắng ở yếu tố tâm lý – ít căng thẳng hơn và giúp người mới tránh sai lầm hoảng loạn.</p>

<p>Lời khuyên thực tế: Nếu bạn có sẵn một khoản tiền lớn, hãy chia thành 3-6 phần đầu tư trong 3-6 tháng. Nếu bạn nhận lương hàng tháng, tự động trích một phần để DCA. Cả hai cách đều tốt hơn nhiều so với không đầu tư gì cả.</p>

<h2>3 sai lầm khi áp dụng DCA</h2>

<p>Sai lầm đầu tiên: dừng DCA khi thị trường giảm. Đây chính là lúc DCA phát huy sức mạnh – bạn mua được nhiều hơn với cùng số tiền. Dừng lại nghĩa là bỏ lỡ cơ hội tốt nhất.</p>

<p>Sai lầm thứ hai: thay đổi số tiền đầu tư liên tục. DCA hiệu quả nhất khi kỷ luật – cùng số tiền, cùng ngày, bất kể diễn biến thị trường. Sai lầm thứ ba: kỳ vọng DCA sẽ bảo vệ bạn khỏi thua lỗ. DCA giảm rủi ro timing, nhưng nếu tài sản giảm giá dài hạn, bạn vẫn lỗ.</p>

<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop" alt="Kỷ luật đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>DCA là chiến lược hoàn hảo cho nhà đầu tư bận rộn, không muốn theo dõi thị trường hàng ngày. Tự động trích tiền hàng tháng, mua ETF, và quên nó đi trong 5-10 năm – kết quả sẽ tốt hơn 90% nhà đầu tư chuyên nghiệp. Đọc thêm <a href="/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026">Hướng dẫn đầu tư ETF cho người mới</a> để bắt đầu ngay hôm nay.</p>`
    },
    {
        title: "Mở Tài Khoản Chứng Khoán Online 2026: So Sánh 5 Công Ty Tốt Nhất",
        slug: "mo-tai-khoan-chung-khoan-online-2026-so-sanh",
        excerpt: "So sánh chi tiết 5 công ty chứng khoán tốt nhất để mở tài khoản online năm 2026: SSI, VPS, TCBS, VNDirect, Mirae Asset. Phí, app, tính năng.",
        category_id: KT,
        tags: ["mở tài khoản chứng khoán", "CTCK", "SSI", "VPS", "TCBS"],
        reading_time: "9 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-10T03:00:00Z').toISOString(),
        content: `<p>Bước đầu tiên trên hành trình đầu tư là mở tài khoản chứng khoán. Năm 2026, quy trình đã đơn giản hóa rất nhiều – hoàn toàn online, chỉ mất 10-15 phút với CCCD gắn chip. Nhưng chọn công ty chứng khoán nào? Bài viết này so sánh 5 CTCK phổ biến nhất để giúp bạn quyết định.</p>

<h2>Tiêu chí so sánh</h2>

<p>Khi chọn CTCK, hãy tập trung vào 5 yếu tố: phí giao dịch, chất lượng app, tools phân tích, dịch vụ hỗ trợ, và sản phẩm ETF/phái sinh (nếu cần). Không có CTCK nào "tốt nhất" cho tất cả – tùy phong cách đầu tư mà mỗi người sẽ phù hợp với CTCK khác nhau.</p>

<img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop" alt="Mở tài khoản chứng khoán" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Bảng so sánh 5 CTCK hàng đầu 2026</h2>

| CTCK | Phí giao dịch | App | Điểm mạnh | Phù hợp |
|---|---|---|---|---|
| TCBS | 0% phí mua bán | ⭐⭐⭐⭐⭐ | Miễn phí hoàn toàn, giao diện đẹp | Người mới, tiết kiệm phí |
| SSI | 0.15% | ⭐⭐⭐⭐ | Nghiên cứu mạnh, iBoard chuyên nghiệp | NĐT cần phân tích |
| VPS | 0.15-0.2% | ⭐⭐⭐⭐ | Thanh khoản #1, phái sinh mạnh | NĐT lướt sóng |
| VNDirect | 0.15% | ⭐⭐⭐⭐ | Giao diện thân thiện, DStock | NĐT trung cấp |
| Mirae Asset | 0.1-0.15% | ⭐⭐⭐ | Chuyên ETF, phí margin thấp | NĐT dài hạn, ETF |

<h2>TCBS: Tốt nhất cho phí 0%</h2>

<p>TCBS (Techcombank Securities) nổi bật với chính sách miễn phí giao dịch – bạn mua bán cổ phiếu không mất phí. App TCInvest có giao diện modern, dễ sử dụng cho người mới. Tuy nhiên, tools phân tích kỹ thuật hạn chế hơn SSI hay VPS.</p>

<p>Nếu bạn đang tìm cách <a href="/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026">bắt đầu đầu tư ETF với vốn nhỏ</a>, TCBS là lựa chọn tốt vì không mất phí – mỗi đồng bạn bỏ vào đều thành tài sản, không bị "ăn" bởi phí giao dịch.</p>

<h2>SSI: Tốt nhất cho nghiên cứu</h2>

<p>SSI là CTCK lâu đời nhất với đội ngũ phân tích hùng hậu. Báo cáo SSI Research được đánh giá cao về chất lượng. App iBoard cung cấp đầy đủ biểu đồ kỹ thuật, screener, và dữ liệu tài chính. Phí giao dịch 0,15% là mức trung bình thị trường.</p>

<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="App chứng khoán" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>VPS: Tốt nhất cho thanh khoản</h2>

<p>VPS (VPBank Securities) thống trị về thị phần giao dịch – đặc biệt mảnh phái sinh (chứng khoán phái sinh). Nếu bạn giao dịch khối lượng lớn hoặc quan tâm đến phái sinh trong tương lai, VPS là lựa chọn hàng đầu.</p>

<h2>Mirae Asset: Tốt nhất cho ETF</h2>

<p>Mirae Asset là công ty quốc tế Hàn Quốc, có thế mạnh về quản lý quỹ ETF. Nếu bạn dự định tập trung vào <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">đầu tư ETF dài hạn</a>, Mirae Asset cung cấp trải nghiệm tốt với phí cạnh tranh và chuyên môn ETF sâu.</p>

<h2>Hướng dẫn mở tài khoản online</h2>

<p>Quy trình chung cho tất cả CTCK: Tải app → Nhấn "Mở tài khoản" → Chụp CCCD 2 mặt → Xác thực khuôn mặt (eKYC) → Ký hợp đồng điện tử → Nạp tiền bằng chuyển khoản. Toàn bộ mất 10-15 phút, tài khoản kích hoạt trong ngày.</p>

<p>Bạn có thể mở tài khoản ở nhiều CTCK cùng lúc (miễn phí). Nhiều nhà đầu tư có 2-3 tài khoản: một cho đầu tư dài hạn (TCBS hoặc Mirae), một cho giao dịch ngắn hạn (VPS hoặc SSI).</p>

<img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=400&fit=crop" alt="Đầu tư online" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Đừng tốn quá nhiều thời gian chọn CTCK "hoàn hảo" – điều quan trọng hơn là BẮT ĐẦU. Mở tài khoản ở bất kỳ CTCK nào trong danh sách trên, nạp tiền, và bắt đầu <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">DCA mua ETF hàng tháng</a>. Bạn luôn có thể mở thêm tài khoản ở CTCK khác sau khi đã có kinh nghiệm.</p>`
    },
    {
        title: "Phân Bổ Tài Sản Cho Người Mới: Quy Tắc 60/30/10 Dễ Áp Dụng",
        slug: "phan-bo-tai-san-cho-nguoi-moi-quy-tac-60-30-10",
        excerpt: "Hướng dẫn phân bổ tài sản (asset allocation) cho người mới đầu tư với quy tắc 60/30/10 đơn giản. Giảm rủi ro tổng danh mục mà vẫn tăng trưởng tốt.",
        category_id: TC,
        tags: ["phân bổ tài sản", "asset allocation", "đa dạng hóa", "quản lý danh mục"],
        reading_time: "8 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-03-11T03:00:00Z').toISOString(),
        content: `<p>"Đừng bỏ tất cả trứng vào một giỏ" – câu nói muôn thuở nhưng ít người thực sự áp dụng. Phân bổ tài sản (asset allocation) là nghệ thuật chia vốn đầu tư vào các loại tài sản khác nhau để giảm rủi ro mà vẫn đạt mục tiêu tăng trưởng. Bài viết này giới thiệu quy tắc 60/30/10 đơn giản, dễ áp dụng cho người mới.</p>

<h2>Phân bổ tài sản là gì?</h2>

<p>Phân bổ tài sản là quyết định chia bao nhiêu phần trăm vốn cho mỗi loại tài sản: cổ phiếu/ETF, trái phiếu, tiền mặt, vàng, bất động sản, crypto... Nghiên cứu cho thấy phân bổ tài sản quyết định hơn 90% kết quả đầu tư dài hạn – quan trọng hơn cả việc chọn mã cổ phiếu riêng lẻ.</p>

<p>Nếu bạn bỏ 100% vào cổ phiếu, danh mục có thể giảm 30-40% trong năm xấu. Nhưng nếu chia 60% cổ phiếu + 30% trái phiếu + 10% tiền mặt, mức giảm tối đa có thể chỉ 15-20%. Đổi lại, lợi suất trung bình dài hạn thấp hơn chút, nhưng bạn ngủ ngon hơn nhiều.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Phân bổ tài sản" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Quy tắc 60/30/10 là gì?</h2>

<p>Quy tắc 60/30/10 chia danh mục thành 3 phần rõ ràng, mỗi phần có chức năng riêng.</p>

<p><strong>60% – Tăng trưởng:</strong> Đầu tư vào tài sản có tiềm năng tăng giá cao như <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF cổ phiếu</a>, cổ phiếu blue-chip. Phần này tạo ra phần lớn lợi nhuận nhưng cũng biến động nhiều nhất.</p>

<p><strong>30% – Ổn định:</strong> Đầu tư vào tài sản an toàn hơn như <a href="/blog/kien-thuc-dau-tu/trai-phieu-chinh-phu-vs-doanh-nghiep-nen-chon-loai-nao">trái phiếu</a>, tiết kiệm lãi suất cao, vàng. Phần này đóng vai trò "đệm" khi thị trường cổ phiếu giảm mạnh.</p>

<p><strong>10% – Dự phòng:</strong> Giữ tiền mặt hoặc tài sản thanh khoản cao (tiết kiệm không kỳ hạn). Phần này dùng khi có cơ hội đầu tư đột xuất hoặc chi tiêu khẩn cấp.</p>

<h2>Ví dụ áp dụng với danh mục 100 triệu đồng</h2>

| Phần | Tỷ trọng | Số tiền | Tài sản cụ thể |
|---|---|---|---|
| Tăng trưởng | 60% | 60 triệu | 40tr VN30 ETF + 20tr Diamond ETF |
| Ổn định | 30% | 30 triệu | 20tr tiết kiệm 12 tháng + 10tr trái phiếu |
| Dự phòng | 10% | 10 triệu | Tiết kiệm không kỳ hạn |

<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop" alt="Quản lý danh mục" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Điều chỉnh theo tuổi và mục tiêu</h2>

<p>Quy tắc 60/30/10 là điểm khởi đầu. Bạn nên điều chỉnh dựa trên tuổi và mục tiêu. Nếu bạn 25 tuổi, có thể tăng phần tăng trưởng lên 70-80% vì có nhiều thời gian phục hồi nếu thị trường giảm. Nếu bạn 50 tuổi, giảm tăng trưởng xuống 40-50% và tăng ổn định lên 40-50%.</p>

<p>Công thức đơn giản: Phần trăm tăng trưởng = 100 - Tuổi. Người 30 tuổi có 70% tăng trưởng, người 40 tuổi có 60% tăng trưởng. Đây chỉ là hướng dẫn tham khảo, không phải quy tắc cứng.</p>

<h2>Rebalancing: Cân bằng lại danh mục</h2>

<p>Sau 6-12 tháng, tỷ trọng các tài sản sẽ thay đổi do biến động giá. Ví dụ: cổ phiếu tăng mạnh khiến phần tăng trưởng trở thành 75% thay vì 60%. Rebalancing là việc bán bớt tài sản tăng giá và mua thêm tài sản giảm giá để đưa danh mục về tỷ lệ ban đầu.</p>

<p>Rebalancing tự động giúp bạn "bán cao, mua thấp" – một kỷ luật mà ít nhà đầu tư có thể tự thực hiện bằng cảm tính. Nên rebalance 1-2 lần/năm, không nên quá thường xuyên để tránh phí giao dịch.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Cân bằng danh mục" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Phân bổ tài sản 60/30/10 là nền tảng vững chắc cho mọi nhà đầu tư. Đơn giản, dễ hiểu, dễ thực hiện – nhưng hiệu quả lâu dài. Kết hợp với <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">chiến lược DCA</a> và <a href="/blog/kien-thuc-dau-tu/huong-dan-dau-tu-etf-cho-nguoi-moi-2026">đầu tư ETF</a>, bạn đã có đủ công cụ để bắt đầu xây dựng tài sản một cách khoa học.</p>`
    }
];

for (const post of posts) {
    const { data, error } = await supabase.from('posts').insert({
        ...post, created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    }).select('id, title, scheduled_at');
    if (error) console.log(`❌ ${post.title}:`, error.message);
    else console.log(`✅ ${data[0].title}\n   → Scheduled: ${new Date(data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
}
console.log('\n🎉 Batch 3a xong (15/18)!');
