import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const posts = [
    {
        slug: 'kinh-te-vi-mo-anh-huong-dau-tu',
        content: `<p>GDP, CPI, PMI — những chỉ số kinh tế vĩ mô tưởng chừng khô khan nhưng lại ảnh hưởng trực tiếp đến giá cổ phiếu, lãi suất và toàn bộ danh mục đầu tư của bạn. Bài viết giải thích từng chỉ số và cách ứng dụng vào đầu tư.</p>
<h2>Kinh tế vĩ mô là gì?</h2>
<p><strong>Kinh tế vĩ mô</strong> nghiên cứu nền kinh tế ở quy mô lớn: tổng sản lượng quốc gia, mức giá chung, tỷ lệ thất nghiệp, cán cân thương mại. Hiểu vĩ mô giúp nhà đầu tư dự đoán xu hướng thị trường và phân bổ tài sản hợp lý.</p>
<p>Warren Buffett không trading dựa trên vĩ mô, nhưng ông luôn hiểu rõ bức tranh lớn trước khi ra quyết định. Nhà đầu tư cá nhân cũng cần như vậy.</p>
<h2>5 chỉ số vĩ mô quan trọng nhất</h2>
<h3>1. GDP — Tổng sản phẩm quốc nội</h3>
<p><strong>GDP</strong> đo lường tổng giá trị hàng hóa và dịch vụ một quốc gia sản xuất trong một kỳ. GDP tăng = kinh tế tăng trưởng = doanh nghiệp kiếm nhiều tiền hơn = cổ phiếu có xu hướng tăng.</p>
<p>GDP Việt Nam 2025 tăng ~6.5% — thuộc nhóm cao nhất châu Á, tín hiệu tích cực cho chứng khoán.</p>
<p><strong>Ứng dụng</strong>: GDP tăng mạnh → tăng tỷ trọng cổ phiếu. GDP giảm → chuyển sang trái phiếu, vàng.</p>
<h3>2. CPI — Chỉ số giá tiêu dùng (Lạm phát)</h3>
<p><strong>CPI</strong> đo mức tăng giá của rổ hàng hóa tiêu dùng. CPI tăng cao = lạm phát = Ngân hàng Nhà nước có thể tăng lãi suất → cổ phiếu chịu áp lực giảm, trái phiếu/vàng hưởng lợi.</p>
<p>CPI Việt Nam 2025 ~4% — mức chấp nhận được. Nếu vượt 5%, NHNN sẽ siết tiền tệ → thị trường chứng khoán khó tăng.</p>
<p><strong>Ứng dụng</strong>: Lạm phát tăng → mua vàng, BĐS. Lạm phát giảm → mua cổ phiếu tăng trưởng.</p>
<h3>3. PMI — Chỉ số nhà quản trị mua hàng</h3>
<p><strong>PMI</strong> phản ánh sức khỏe ngành sản xuất. PMI > 50 = ngành đang mở rộng. PMI < 50 = ngành đang thu hẹp. PMI được công bố hàng tháng và là chỉ báo sớm cho GDP.</p>
<p><strong>Ứng dụng</strong>: PMI tăng liên tục → cổ phiếu công nghiệp, sản xuất hưởng lợi. PMI giảm → thận trọng.</p>
<h3>4. Lãi suất điều hành</h3>
<p>NHNN điều chỉnh lãi suất để kiểm soát lạm phát và kích thích kinh tế. <strong>Giảm lãi suất</strong> → tiền rẻ → doanh nghiệp vay dễ hơn → cổ phiếu tăng. <strong>Tăng lãi suất</strong> → tiền đắt → cổ phiếu chịu áp lực.</p>
<p>Đây là yếu tố vĩ mô ảnh hưởng mạnh nhất và nhanh nhất đến thị trường chứng khoán.</p>
<h3>5. Tỷ giá USD/VND</h3>
<p>Tỷ giá ảnh hưởng đến doanh nghiệp xuất nhập khẩu. VND mất giá → xuất khẩu hưởng lợi (dệt may, thủy sản), nhập khẩu chịu thiệt (xăng dầu, sắt thép).</p>
<h2>Bảng tóm tắt tác động vĩ mô</h2>
<table><thead><tr><th>Chỉ số</th><th>Khi tăng</th><th>Khi giảm</th></tr></thead><tbody>
<tr><td>GDP</td><td>✅ Cổ phiếu tăng</td><td>⚠️ Thận trọng, phòng thủ</td></tr>
<tr><td>CPI (lạm phát)</td><td>⚠️ Vàng, BĐS lên. CK áp lực</td><td>✅ CK tăng trưởng hưởng lợi</td></tr>
<tr><td>PMI</td><td>✅ CP công nghiệp hưởng lợi</td><td>⚠️ Sản xuất suy yếu</td></tr>
<tr><td>Lãi suất</td><td>⚠️ CK giảm, tiết kiệm hấp dẫn</td><td>✅ CK tăng, tiền rẻ</td></tr>
<tr><td>Tỷ giá USD/VND</td><td>✅ Xuất khẩu. ⚠️ Nhập khẩu</td><td>Ngược lại</td></tr>
</tbody></table>
<h2>Cách theo dõi chỉ số vĩ mô</h2>
<ul>
<li><strong>Tổng cục Thống kê (GSO)</strong>: Số liệu chính thức GDP, CPI Việt Nam.</li>
<li><strong>NHNN</strong>: Quyết định lãi suất, chính sách tiền tệ.</li>
<li><strong>Trading Economics</strong>: Dữ liệu vĩ mô toàn cầu, biểu đồ trực quan.</li>
<li><strong>S&P Global PMI</strong>: Công bố PMI Việt Nam hàng tháng.</li>
</ul>
<h2>Kết luận</h2>
<p>Nhà đầu tư không cần trở thành chuyên gia kinh tế, nhưng cần hiểu cơ bản các chỉ số vĩ mô. GDP, CPI, PMI, lãi suất — 4 chỉ số này cho bạn bức tranh tổng thể để quyết định nên tăng hay giảm tỷ trọng cổ phiếu, trái phiếu, vàng trong danh mục. Hãy theo dõi chúng hàng tháng — chỉ mất 10 phút nhưng giúp bạn đi trước đám đông.</p>`
    },
    {
        slug: 'cach-chon-cong-ty-chung-khoan-phu-hop',
        content: `<p>Công ty chứng khoán (CTCK) là cánh cổng bạn bước vào thị trường. Chọn sai CTCK có thể khiến bạn mất phí vô ích, gặp khó khi giao dịch, hoặc thiếu công cụ phân tích. Bài viết này đưa ra tiêu chí đánh giá giúp bạn chọn đúng.</p>
<h2>Công ty chứng khoán làm gì?</h2>
<p>CTCK là trung gian giữa bạn và sàn chứng khoán. Họ cung cấp: tài khoản giao dịch, nền tảng đặt lệnh, dữ liệu thị trường, báo cáo phân tích, và dịch vụ ký quỹ (margin).</p>
<h2>7 tiêu chí chọn CTCK</h2>
<h3>1. Phí giao dịch</h3>
<p>Tiêu chí quan trọng nhất. Phí dao động <strong>0.15-0.35%</strong> mỗi lần mua/bán. Chênh lệch 0.1% mỗi giao dịch, nếu trading thường xuyên, sẽ tích lũy thành triệu đồng mỗi năm.</p>
<table><thead><tr><th>CTCK</th><th>Phí giao dịch</th><th>Phí tối thiểu</th></tr></thead><tbody>
<tr><td>SSI</td><td>0.15-0.25%</td><td>Không</td></tr>
<tr><td>VNDirect</td><td>0.15-0.25%</td><td>Không</td></tr>
<tr><td>TCBS</td><td>0.15%</td><td>Không</td></tr>
<tr><td>HSC</td><td>0.15-0.20%</td><td>Không</td></tr>
<tr><td>Mirae Asset</td><td>0.15%</td><td>Không</td></tr>
</tbody></table>
<h3>2. Nền tảng giao dịch (App/Web)</h3>
<p>Giao diện có dễ dùng không? Có app mobile tốt không? Tốc độ khớp lệnh nhanh không? Hãy thử mở tài khoản demo trước. Các app tốt nhất hiện nay: TCBS, SSI iBoard, VNDirect.</p>
<h3>3. Công cụ phân tích & Báo cáo</h3>
<p>CTCK lớn cung cấp báo cáo phân tích miễn phí: VCSC, SSI Research, HSC. Đây là nguồn thông tin giá trị cho quyết định đầu tư.</p>
<h3>4. Chính sách margin (ký quỹ)</h3>
<p>Nếu bạn muốn dùng margin, so sánh: lãi suất margin (10-14%/năm), tỷ lệ margin cho phép, danh sách cổ phiếu được margin. Lãi suất chênh 1-2% rất quan trọng.</p>
<h3>5. Dịch vụ hỗ trợ khách hàng</h3>
<p>CTCK có hotline 24/7 không? Chat hỗ trợ nhanh không? Nhân viên tư vấn có kiến thức tốt không? Khi sự cố xảy ra (sàn lag, lệnh không khớp), hỗ trợ nhanh rất quan trọng.</p>
<h3>6. Quy mô và uy tín</h3>
<p>Chọn CTCK nằm trong top 10 thị phần: SSI, VNDirect, HSC, TCBS, Mirae Asset, VCSC, MBS, KIS. CTCK lớn = hệ thống ổn định, ít rủi ro phá sản.</p>
<h3>7. Quy trình mở tài khoản</h3>
<p>CTCK hiện đại cho phép mở tài khoản <strong>online 100%</strong> trong 10-15 phút: chụp CCCD + selfie + ký điện tử. Không cần đến quầy. Nếu CTCK nào yêu cầu đến quầy bắt buộc — hãy cân nhắc chuyển sang CTCK khác.</p>
<h2>Top 5 CTCK phổ biến nhất 2026</h2>
<table><thead><tr><th>CTCK</th><th>Ưu điểm</th><th>Nhược điểm</th><th>Phù hợp với</th></tr></thead><tbody>
<tr><td>SSI</td><td>Thị phần #1, app tốt, research mạnh</td><td>Phí không rẻ nhất</td><td>Mọi đối tượng</td></tr>
<tr><td>TCBS</td><td>Phí thấp, giao diện hiện đại</td><td>Research ít hơn SSI</td><td>Người mới, tech-savvy</td></tr>
<tr><td>VNDirect</td><td>Nền tảng đa năng, cộng đồng lớn</td><td>App đôi khi lag</td><td>Mọi đối tượng</td></tr>
<tr><td>HSC</td><td>Research chất lượng cao, phí thấp</td><td>App chưa bằng SSI/TCBS</td><td>Nhà đầu tư nghiêm túc</td></tr>
<tr><td>Mirae Asset</td><td>Phí rất thấp, margin lãi thấp</td><td>CTCK Hàn Quốc, ít quen</td><td>Trader, dùng margin</td></tr>
</tbody></table>
<h2>Sai lầm khi chọn CTCK</h2>
<ul>
<li><strong>Chọn vì "anh/chị giới thiệu"</strong>: Hãy so sánh khách quan thay vì theo lời giới thiệu.</li>
<li><strong>Không so sánh phí</strong>: Chênh 0.05-0.1% phí = hàng triệu đồng/năm nếu trading thường xuyên.</li>
<li><strong>Bỏ qua chất lượng app</strong>: App lag, khó dùng = bỏ lỡ cơ hội hoặc đặt sai lệnh.</li>
</ul>
<h2>Kết luận</h2>
<p>Chọn CTCK phù hợp giống như chọn ngân hàng — bạn sẽ gắn bó lâu dài. Ưu tiên CTCK có phí thấp, app tốt, và nằm trong top 10 thị phần. Nếu bạn là người mới, TCBS hoặc SSI là lựa chọn an toàn nhất. Hãy mở tài khoản demo trước để trải nghiệm trước khi chuyển tiền thật.</p>`
    },
    {
        slug: 'tai-khoan-demo-luyen-tap-giao-dich',
        content: `<p>Bạn có nhảy xuống bể bơi sâu 3m khi chưa biết bơi không? Chắc chắn là không. Vậy tại sao lại bỏ tiền thật vào chứng khoán khi chưa biết giao dịch? <strong>Tài khoản demo</strong> giúp bạn luyện tập an toàn.</p>
<h2>Tài khoản demo là gì?</h2>
<p><strong>Tài khoản demo (tài khoản mô phỏng)</strong> là tài khoản giao dịch với tiền ảo nhưng dữ liệu thị trường thực. Bạn có thể mua bán cổ phiếu, theo dõi danh mục, thử chiến lược — tất cả <strong>không tốn một đồng tiền thật</strong>.</p>
<p>Tài khoản demo cho phép bạn trải nghiệm cảm giác giao dịch thực tế: đặt lệnh, theo dõi P&L, xem tài khoản biến động — mà không có rủi ro mất tiền.</p>
<h2>Tại sao nên dùng tài khoản demo?</h2>
<h3>1. Học cách sử dụng nền tảng giao dịch</h3>
<p>Mỗi CTCK có giao diện khác nhau. Demo giúp bạn quen với cách đặt lệnh LO, ATO, ATC, MP, cách xem bảng giá, theo dõi danh mục — trước khi sai lầm trên tiền thật.</p>
<h3>2. Thử chiến lược không rủi ro</h3>
<p>Muốn biết DCA có hiệu quả không? Muốn thử phân tích kỹ thuật? Muốn test chiến lược mua break-out? Demo là "phòng thí nghiệm tài chính" miễn phí cho bạn.</p>
<h3>3. Kiểm soát cảm xúc</h3>
<p>Dù demo dùng tiền ảo, bạn vẫn trải nghiệm cảm giác lãi/lỗ. Đây là bước chuẩn bị tâm lý quan trọng trước khi giao dịch thật — khi mất tiền thật, stress sẽ gấp 10 lần.</p>
<h3>4. Hiểu cơ chế thị trường</h3>
<p>Bạn sẽ hiểu: tại sao lệnh không khớp, spread là gì, phiên ATO/ATC hoạt động thế nào, cổ phiếu T+2 nghĩa là gì — tất cả qua trải nghiệm thực tế.</p>
<h2>Các nền tảng demo phổ biến</h2>
<table><thead><tr><th>Nền tảng</th><th>Loại</th><th>Miễn phí</th><th>Đặc điểm</th></tr></thead><tbody>
<tr><td>SSI iBoard</td><td>Chứng khoán VN</td><td>Có</td><td>Dữ liệu real-time, giao diện giống thật</td></tr>
<tr><td>TCBS</td><td>Chứng khoán VN</td><td>Có</td><td>Tích hợp trong app, dễ dùng</td></tr>
<tr><td>Fireant.vn</td><td>Chứng khoán VN</td><td>Có (cơ bản)</td><td>Watchlist, portfolio tracking</td></tr>
<tr><td>TradingView</td><td>Đa thị trường</td><td>Có (giới hạn)</td><td>Công cụ phân tích kỹ thuật mạnh nhất</td></tr>
<tr><td>Binance Testnet</td><td>Crypto</td><td>Có</td><td>Giao dịch crypto với tiền ảo</td></tr>
<tr><td>MetaTrader 4/5</td><td>Forex</td><td>Có</td><td>Demo Forex, $10,000 tiền ảo</td></tr>
</tbody></table>
<h2>Cách sử dụng tài khoản demo hiệu quả</h2>
<h3>1. Đặt số vốn demo bằng số vốn thật bạn sẽ dùng</h3>
<p>Nếu dự định đầu tư 30 triệu, đặt demo 30 triệu (không phải 1 tỷ). Điều này tạo trải nghiệm thực tế hơn.</p>
<h3>2. Giao dịch nghiêm túc như tiền thật</h3>
<p>Ghi nhật ký giao dịch, đặt stop-loss, tuân thủ kỷ luật. Nếu demo mà trading bừa bãi, khi lên tiền thật bạn cũng sẽ bừa bãi.</p>
<h3>3. Thử ít nhất 3 tháng trước khi chuyển sang thật</h3>
<p>3 tháng đủ để bạn trải nghiệm thị trường tăng, giảm, và đi ngang. Nếu demo lãi ổn định 3 tháng → có cơ sở để thử tiền thật.</p>
<h3>4. Test nhiều chiến lược</h3>
<p>Tháng 1: DCA mua ETF. Tháng 2: Phân tích cơ bản chọn cổ phiếu value. Tháng 3: Phân tích kỹ thuật trading ngắn hạn. So sánh kết quả để tìm phong cách phù hợp với bạn.</p>
<h2>Hạn chế của tài khoản demo</h2>
<ul>
<li><strong>Không có cảm xúc thật</strong>: Mất 5 triệu ảo ≠ mất 5 triệu thật. Demo không test được tâm lý thực sự.</li>
<li><strong>Thanh khoản không giống thật</strong>: Demo luôn khớp lệnh, nhưng thị trường thật có thể không đủ thanh khoản.</li>
<li><strong>Dễ quá tự tin</strong>: Lãi trên demo → nghĩ mình giỏi → đổ tiền thật vào → thua. Hãy khiêm tốn.</li>
</ul>
<h2>Từ demo sang tiền thật — Lộ trình</h2>
<ol>
<li><strong>Tháng 1-3</strong>: Giao dịch demo, học cách dùng nền tảng, thử chiến lược.</li>
<li><strong>Tháng 4</strong>: Bắt đầu với <strong>số vốn nhỏ nhất</strong> (5-10 triệu). Chỉ mua 1-2 mã.</li>
<li><strong>Tháng 5-6</strong>: Tăng dần vốn nếu kết quả tốt. Giữ kỷ luật.</li>
<li><strong>Tháng 7+</strong>: Đạt vốn mục tiêu, giao dịch theo hệ thống đã kiểm chứng.</li>
</ol>
<h2>Kết luận</h2>
<p>Tài khoản demo là "bảo hiểm" tốt nhất cho người mới — giúp bạn tránh mất tiền khi chưa có kinh nghiệm. 3 tháng luyện tập trên demo sẽ tiết kiệm cho bạn hàng chục triệu đồng tiền "học phí" trên thị trường thật. Hãy xem demo như khóa đào tạo bắt buộc trước khi tốt nghiệp thành nhà đầu tư.</p>`
    }
];

async function run() {
    console.log('🔧 BATCH 6a (3 bài)\n');
    for (const p of posts) {
        const { error } = await s.from('posts').update({ content: p.content }).eq('slug', p.slug);
        if (error) console.log('❌ ' + p.slug + ': ' + error.message);
        else {
            const wc = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w).length;
            console.log('✅ ' + p.slug + ' → ' + wc + ' từ');
        }
    }
    console.log('\n🎉 Batch 6a hoàn tất!');
}
run();
