import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const posts = [
    {
        slug: 'tam-ly-giao-dich-sai-lam-cam-xuc',
        content: `<p>Kiến thức và chiến lược chỉ chiếm 20% thành công trong đầu tư — <strong>80% còn lại nằm ở tâm lý</strong>. Đây là lý do nhiều nhà đầu tư có kiến thức tốt vẫn thua lỗ. Bài viết này phân tích 7 sai lầm cảm xúc phổ biến nhất và cách khắc phục.</p>

<h2>Tại sao tâm lý quan trọng trong đầu tư?</h2>
<p>Thị trường tài chính là nơi cảm xúc của hàng triệu người va chạm nhau. Khi giá tăng, tham lam lên cao. Khi giá giảm, sợ hãi bao trùm. Nhà đầu tư thành công là người kiểm soát được cảm xúc của chính mình — mua khi người khác sợ hãi, bán khi người khác tham lam.</p>
<p>Theo nghiên cứu của Dalbar Inc., nhà đầu tư cá nhân trung bình chỉ đạt lợi nhuận <strong>3.6%/năm</strong> trong khi S&P 500 tăng <strong>10.5%/năm</strong> — phần lớn khoảng cách này do sai lầm tâm lý.</p>

<h2>7 sai lầm cảm xúc khiến nhà đầu tư thua lỗ</h2>

<h3>1. FOMO — Sợ bỏ lỡ cơ hội</h3>
<p><strong>Biểu hiện</strong>: Thấy cổ phiếu tăng 50% trong 2 tuần, vội vàng mua đuổi vì sợ "trễ tàu". Thấy bạn bè khoe lãi crypto, lao vào mua ở đỉnh.</p>
<p><strong>Hậu quả</strong>: Mua ở giá cao, khi thị trường điều chỉnh thì lỗ nặng. Đây là bẫy phổ biến nhất với người mới.</p>
<p><strong>Cách khắc phục</strong>: Luôn có kế hoạch đầu tư rõ ràng trước khi mở sàn. Nếu một cổ phiếu đã tăng quá mạnh, hãy chờ điều chỉnh hoặc tìm cơ hội khác.</p>

<h3>2. Loss Aversion — Sợ thua lỗ quá mức</h3>
<p><strong>Biểu hiện</strong>: Giữ cổ phiếu thua lỗ mãi không bán, hy vọng "một ngày nó sẽ về bờ". Bán ngay cổ phiếu vừa lãi 5% vì sợ mất lãi.</p>
<p><strong>Hậu quả</strong>: Giữ lỗ, bán lãi sớm — danh mục toàn cổ phiếu yếu, mất cơ hội tăng trưởng.</p>
<p><strong>Cách khắc phục</strong>: Đặt stop-loss trước khi mua. Nếu cổ phiếu giảm 10-15% so với giá mua, cắt lỗ dứt khoát.</p>

<h3>3. Confirmation Bias — Thiên kiến xác nhận</h3>
<p><strong>Biểu hiện</strong>: Chỉ đọc tin tức và phân tích ủng hộ quan điểm của mình. Bỏ qua mọi cảnh báo rủi ro.</p>
<p><strong>Hậu quả</strong>: Kẹt trong cổ phiếu yếu mà không nhận ra vì chỉ nghe "điều mình muốn nghe".</p>
<p><strong>Cách khắc phục</strong>: Chủ động tìm các quan điểm trái chiều. Hỏi bản thân: "Nếu tôi sai thì sao?"</p>

<h3>4. Overconfidence — Quá tự tin</h3>
<p><strong>Biểu hiện</strong>: Sau vài lần lãi liên tiếp, tin rằng mình có "nhãn" chọn cổ phiếu. Tăng vốn đầu tư mạnh, thậm chí vay margin.</p>
<p><strong>Hậu quả</strong>: Một lần thua lỗ lớn có thể xóa sạch toàn bộ lãi trước đó, thậm chí mất vốn gốc.</p>
<p><strong>Cách khắc phục</strong>: Ghi nhật ký giao dịch, phân tích cả lần thắng lẫn lần thua. Giữ tỷ lệ rủi ro không quá 2-5% vốn mỗi giao dịch.</p>

<h3>5. Herd Mentality — Tâm lý bầy đàn</h3>
<p><strong>Biểu hiện</strong>: Mua vì "group Zalo đều mua", bán vì "ai cũng bán". Không có phân tích cá nhân.</p>
<p><strong>Hậu quả</strong>: Luôn đi sau thị trường, mua đỉnh bán đáy theo đám đông.</p>
<p><strong>Cách khắc phục</strong>: Tự nghiên cứu trước khi quyết định. Warren Buffett nói: "Hãy sợ hãi khi người khác tham lam, tham lam khi người khác sợ hãi."</p>

<h3>6. Anchoring — Neo giá tâm lý</h3>
<p><strong>Biểu hiện</strong>: "Tôi mua ở giá 50.000đ nên phải đợi về 50.000đ mới bán" — dù fundamentals đã xấu đi.</p>
<p><strong>Hậu quả</strong>: Bỏ lỡ cơ hội cắt lỗ sớm, để thua lỗ ngày càng lớn.</p>
<p><strong>Cách khắc phục</strong>: Đánh giá cổ phiếu dựa trên giá trị hiện tại và tương lai, không dựa trên giá mua quá khứ.</p>

<h3>7. Revenge Trading — Giao dịch trả thù</h3>
<p><strong>Biểu hiện</strong>: Sau khi lỗ, lập tức mua cổ phiếu khác để "gỡ gạc". Tăng khối lượng gấp đôi để nhanh hòa vốn.</p>
<p><strong>Hậu quả</strong>: Lỗ chồng lỗ vì quyết định dựa trên cảm xúc tức giận, không phải lý trí.</p>
<p><strong>Cách khắc phục</strong>: Sau mỗi lần thua lỗ lớn, <strong>nghỉ 1-2 ngày</strong> không giao dịch. Quay lại khi đầu lạnh.</p>

<h2>Xây dựng kỷ luật đầu tư</h2>
<p>Để kiểm soát cảm xúc, bạn cần một <strong>hệ thống giao dịch rõ ràng</strong>:</p>
<ol>
<li><strong>Viết kế hoạch trước khi mua</strong>: Ghi rõ lý do mua, giá mục tiêu, điểm cắt lỗ.</li>
<li><strong>Giới hạn thời gian xem bảng giá</strong>: Xem tối đa 2-3 lần/ngày. Theo dõi liên tục tạo stress và quyết định bốc đồng.</li>
<li><strong>Ghi nhật ký giao dịch</strong>: Mỗi lần mua/bán, ghi lại lý do, cảm xúc lúc đó, và kết quả. Review hàng tháng.</li>
<li><strong>Tự động hóa</strong>: Sử dụng lệnh stop-loss và take-profit tự động để loại bỏ cảm xúc khỏi quá trình quyết định.</li>
</ol>

<h2>Kết luận</h2>
<p>Tâm lý giao dịch là yếu tố quyết định sự khác biệt giữa nhà đầu tư thành công và thất bại. Bạn không cần phải loại bỏ cảm xúc — điều đó là không thể — nhưng bạn cần <strong>nhận diện</strong> và <strong>kiểm soát</strong> chúng. Hãy xây dựng kỷ luật đầu tư vững chắc, và nhớ rằng: nhà đầu tư giỏi nhất không phải người thông minh nhất, mà là người kiên nhẫn và kỷ luật nhất.</p>`
    },
    {
        slug: 'thue-dau-tu-viet-nam-2026-huong-dan',
        content: `<p>Nhiều nhà đầu tư chỉ quan tâm đến lợi nhuận mà quên mất <strong>thuế</strong> — khoản chi phí ảnh hưởng trực tiếp đến thu nhập thực tế. Bài viết này hướng dẫn đầy đủ các loại thuế đầu tư tại Việt Nam 2026 và cách tối ưu hợp pháp.</p>

<h2>Tổng quan thuế đầu tư tại Việt Nam</h2>
<p>Tại Việt Nam, lợi nhuận từ đầu tư chịu thuế thu nhập cá nhân (TNCN). Mức thuế khác nhau tùy loại tài sản và cách tính.</p>

<h2>Thuế chứng khoán (Cổ phiếu)</h2>
<h3>Thuế khi bán cổ phiếu</h3>
<p>Nhà đầu tư cá nhân nộp thuế <strong>0.1% trên tổng giá trị bán</strong>, không phân biệt lãi hay lỗ. Ví dụ: bán 100 triệu đồng cổ phiếu → thuế = 100.000đ.</p>
<p>Thuế này được công ty chứng khoán khấu trừ tự động khi bạn bán, nên bạn không cần tự khai nộp.</p>

<h3>Thuế cổ tức tiền mặt</h3>
<p>Cổ tức nhận bằng tiền mặt chịu thuế <strong>5%</strong>. Ví dụ: nhận 10 triệu đồng cổ tức → thuế = 500.000đ. Thuế cũng được khấu trừ tự động tại nguồn.</p>

<h3>Cổ tức bằng cổ phiếu</h3>
<p>Nhận cổ phiếu thưởng <strong>chưa phải nộp thuế ngay</strong>. Thuế chỉ tính khi bạn bán cổ phiếu đó (0.1% giá bán).</p>

<h2>Thuế đầu tư bất động sản</h2>
<h3>Thuế chuyển nhượng</h3>
<p>Khi bán bất động sản, bạn nộp thuế TNCN = <strong>2% trên giá chuyển nhượng</strong>. Đây là thuế trên giá bán, không phải lợi nhuận.</p>
<p>Lưu ý: Giá chuyển nhượng phải ghi đúng trên hợp đồng. Ghi giá thấp hơn thực tế để trốn thuế là vi phạm pháp luật.</p>

<h3>Thuế cho thuê bất động sản</h3>
<table>
<thead><tr><th>Khoản thu</th><th>Mức thuế</th><th>Điều kiện</th></tr></thead>
<tbody>
<tr><td>Thu nhập cho thuê ≤ 100 triệu/năm</td><td>Miễn thuế VAT</td><td>Vẫn nộp thuế TNCN 5%</td></tr>
<tr><td>Thu nhập cho thuê > 100 triệu/năm</td><td>VAT 5% + TNCN 5%</td><td>Tổng 10% trên doanh thu</td></tr>
</tbody>
</table>

<h2>Thuế đầu tư vàng</h2>
<p>Mua bán vàng miếng/vàng trang sức tại Việt Nam hiện <strong>chưa có quy định thuế TNCN cụ thể</strong> đối với cá nhân mua bán nhỏ lẻ. Tuy nhiên, nếu kinh doanh vàng có đăng ký, bạn phải nộp thuế kinh doanh bình thường.</p>

<h2>Thuế tiền gửi tiết kiệm</h2>
<p>Lãi tiền gửi tiết kiệm tại ngân hàng Việt Nam hiện <strong>được miễn thuế TNCN</strong>. Đây là một lợi thế so với nhiều quốc gia khác.</p>

<h2>Thuế đầu tư crypto</h2>
<p>Tại Việt Nam, crypto chưa được công nhận là phương tiện thanh toán hợp pháp. Khung pháp lý về thuế crypto <strong>đang được Bộ Tài chính xây dựng</strong> (dự kiến hoàn thiện 2026-2027).</p>
<p>Hiện tại, nếu có lợi nhuận lớn từ crypto, về lý thuyết bạn vẫn phải khai thuế TNCN. Tuy nhiên, việc thực thi còn rất hạn chế.</p>

<h2>Cách tối ưu thuế đầu tư hợp pháp</h2>
<h3>1. Tận dụng cổ tức bằng cổ phiếu</h3>
<p>Chọn công ty trả cổ tức bằng cổ phiếu thay vì tiền mặt. Bạn hoãn thuế cho đến khi bán cổ phiếu.</p>

<h3>2. Đầu tư dài hạn thay vì lướt sóng</h3>
<p>Mua bán thường xuyên = nộp thuế 0.1% nhiều lần. Nếu bạn trading 100 triệu/tháng → thuế 1.2 triệu/năm chỉ riêng thuế bán. Đầu tư dài hạn giảm thuế tổng thể.</p>

<h3>3. Phân bổ tài sản hợp lý</h3>
<p>Kết hợp kênh miễn thuế (tiết kiệm) với kênh thuế thấp (cổ phiếu 0.1%) để tối ưu tổng thuế phải nộp.</p>

<h3>4. Giữ hóa đơn, chứng từ đầy đủ</h3>
<p>Đối với bất động sản, giữ đầy đủ chứng từ chứng minh chi phí cải tạo, sửa chữa. Những chi phí này có thể được trừ khi tính thuế trong một số trường hợp.</p>

<h2>Bảng tổng hợp thuế đầu tư 2026</h2>
<table>
<thead><tr><th>Kênh đầu tư</th><th>Loại thuế</th><th>Mức thuế</th><th>Cách nộp</th></tr></thead>
<tbody>
<tr><td>Cổ phiếu (bán)</td><td>TNCN</td><td>0.1% giá bán</td><td>Tự động khấu trừ</td></tr>
<tr><td>Cổ tức tiền mặt</td><td>TNCN</td><td>5%</td><td>Tự động khấu trừ</td></tr>
<tr><td>Bất động sản</td><td>TNCN</td><td>2% giá chuyển nhượng</td><td>Tự khai nộp</td></tr>
<tr><td>Cho thuê BĐS</td><td>VAT + TNCN</td><td>5% + 5%</td><td>Tự khai nộp</td></tr>
<tr><td>Tiền gửi tiết kiệm</td><td>Miễn</td><td>0%</td><td>—</td></tr>
<tr><td>Vàng (cá nhân)</td><td>Chưa rõ</td><td>—</td><td>—</td></tr>
<tr><td>Crypto</td><td>Đang xây dựng</td><td>—</td><td>—</td></tr>
</tbody>
</table>

<h2>Kết luận</h2>
<p>Hiểu rõ thuế đầu tư giúp bạn tính toán <strong>lợi nhuận thực (sau thuế)</strong> chính xác hơn và tránh những rủi ro pháp lý không đáng có. Thuế tại Việt Nam nhìn chung khá thấp so với nhiều quốc gia — đặc biệt cổ phiếu chỉ 0.1% và tiền gửi miễn thuế. Hãy tận dụng điều này để tối ưu hóa chiến lược đầu tư của bạn.</p>`
    },
    {
        slug: 'cach-doc-bao-cao-tai-chinh-doanh-nghiep',
        content: `<p>Đọc báo cáo tài chính là kỹ năng cốt lõi giúp nhà đầu tư đánh giá "sức khỏe" thực sự của doanh nghiệp, tránh mua phải cổ phiếu của công ty yếu kém. Bài viết này hướng dẫn cách đọc 3 báo cáo quan trọng nhất một cách dễ hiểu.</p>

<h2>Tại sao cần đọc báo cáo tài chính?</h2>
<p>Giá cổ phiếu ngắn hạn bị ảnh hưởng bởi tâm lý đám đông, nhưng dài hạn luôn phản ánh đúng giá trị doanh nghiệp. Báo cáo tài chính cho bạn biết:</p>
<ul>
<li>Công ty có thực sự <strong>kiếm được tiền</strong> hay chỉ "vẽ" doanh thu?</li>
<li>Công ty đang <strong>nợ bao nhiêu</strong> và có khả năng trả nợ không?</li>
<li><strong>Dòng tiền thực</strong> ra sao — có tiền mặt thật hay chỉ lãi trên giấy?</li>
</ul>

<h2>3 báo cáo tài chính quan trọng nhất</h2>

<h3>1. Bảng cân đối kế toán (Balance Sheet)</h3>
<p>Cho biết tại một thời điểm, công ty <strong>có gì</strong> (tài sản), <strong>nợ gì</strong> (nợ phải trả), và <strong>giá trị thực</strong> thuộc về cổ đông (vốn chủ sở hữu).</p>
<p><strong>Công thức cốt lõi</strong>: Tài sản = Nợ phải trả + Vốn chủ sở hữu</p>
<p><strong>Chỉ số cần chú ý</strong>:</p>
<ul>
<li><strong>Tỷ lệ nợ/vốn chủ (D/E)</strong>: Dưới 1 là an toàn. Trên 2 cần cảnh giác — công ty đang vay quá nhiều.</li>
<li><strong>Tài sản ngắn hạn/Nợ ngắn hạn</strong>: Tỷ lệ >1.5 cho thấy công ty có đủ tiền trả nợ ngắn hạn.</li>
<li><strong>Tiền và tương đương tiền</strong>: Tiền mặt nhiều = an toàn, nhưng quá nhiều có thể là sử dụng vốn chưa hiệu quả.</li>
</ul>

<h3>2. Báo cáo kết quả kinh doanh (Income Statement)</h3>
<p>Cho biết trong một kỳ (quý/năm), công ty <strong>kiếm được bao nhiêu</strong> và <strong>chi bao nhiêu</strong>.</p>
<p><strong>Các dòng quan trọng</strong>:</p>
<table>
<thead><tr><th>Mục</th><th>Ý nghĩa</th><th>Mẹo đánh giá</th></tr></thead>
<tbody>
<tr><td>Doanh thu thuần</td><td>Tổng tiền bán hàng/dịch vụ</td><td>Tăng trưởng đều >10%/năm là tốt</td></tr>
<tr><td>Lợi nhuận gộp</td><td>Doanh thu - Giá vốn</td><td>Biên lợi nhuận gộp >30% là mạnh</td></tr>
<tr><td>Lợi nhuận sau thuế</td><td>Tiền thực sự kiếm được</td><td>Tăng liên tục 3-5 năm là tín hiệu tốt</td></tr>
<tr><td>EPS (lãi trên cổ phiếu)</td><td>Lợi nhuận chia cho số cổ phiếu</td><td>EPS tăng = giá cổ phiếu có cơ sở tăng</td></tr>
</tbody>
</table>

<h3>3. Báo cáo lưu chuyển tiền tệ (Cash Flow Statement)</h3>
<p>Đây là báo cáo <strong>quan trọng nhất nhưng ít người đọc</strong>. Nó cho biết tiền mặt thực sự ra vào công ty như thế nào.</p>
<ul>
<li><strong>Dòng tiền hoạt động kinh doanh (CFO)</strong>: Phải dương. Nếu CFO âm liên tục nhiều quý = công ty không tạo ra tiền từ hoạt động chính → NGUY HIỂM.</li>
<li><strong>Dòng tiền đầu tư (CFI)</strong>: Thường âm (vì công ty đang đầu tư). Âm nhiều cho thấy công ty đang mở rộng.</li>
<li><strong>Dòng tiền tài chính (CFF)</strong>: Dương = công ty vay thêm nợ hoặc phát hành cổ phiếu. Âm = trả nợ hoặc chia cổ tức.</li>
</ul>

<h2>Các chỉ số tài chính phổ biến</h2>
<table>
<thead><tr><th>Chỉ số</th><th>Công thức</th><th>Ý nghĩa</th><th>Mức tốt</th></tr></thead>
<tbody>
<tr><td>P/E</td><td>Giá CP / EPS</td><td>Thị trường trả bao nhiêu cho 1đ lợi nhuận</td><td>10-15 (VN)</td></tr>
<tr><td>P/B</td><td>Giá CP / Giá trị sổ sách</td><td>So với tài sản thực</td><td>&lt;2</td></tr>
<tr><td>ROE</td><td>Lợi nhuận / Vốn chủ sở hữu</td><td>Hiệu quả sử dụng vốn</td><td>>15%</td></tr>
<tr><td>ROA</td><td>Lợi nhuận / Tổng tài sản</td><td>Hiệu quả sử dụng tài sản</td><td>>7%</td></tr>
</tbody>
</table>

<h2>5 bước đọc BCTC nhanh cho người mới</h2>
<ol>
<li><strong>Xem doanh thu 5 năm</strong>: Có tăng trưởng đều không? Giảm liên tục là dấu hiệu xấu.</li>
<li><strong>Kiểm tra lợi nhuận sau thuế</strong>: Có lãi thật không? Lãi tăng hay giảm?</li>
<li><strong>Nhìn dòng tiền kinh doanh</strong>: Dương hay âm? Nếu lãi trên giấy nhưng dòng tiền âm → cẩn thận.</li>
<li><strong>Đánh giá nợ</strong>: D/E > 2 → công ty vay quá nhiều, rủi ro cao khi lãi suất tăng.</li>
<li><strong>So sánh với đối thủ</strong>: Cùng ngành, công ty nào có ROE, biên lợi nhuận tốt hơn?</li>
</ol>

<h2>Ở đâu tìm báo cáo tài chính?</h2>
<ul>
<li><strong>CafeF.vn</strong>: Phổ biến nhất, miễn phí, dễ sử dụng</li>
<li><strong>VietstockFinance</strong>: Dữ liệu chi tiết, có công cụ phân tích</li>
<li><strong>Fireant.vn</strong>: Giao diện hiện đại, nhiều biểu đồ trực quan</li>
<li><strong>Website công ty</strong>: Phần "Quan hệ cổ đông" có BCTC gốc</li>
</ul>

<h2>Kết luận</h2>
<p>Đọc báo cáo tài chính không khó nếu bạn tập trung vào các chỉ số cốt lõi. Hãy bắt đầu với những công ty quen thuộc (Vinamilk, FPT, Vietcombank) để luyện tập. Kỹ năng này sẽ giúp bạn đầu tư dựa trên dữ liệu thay vì cảm tính — và đó chính là khác biệt giữa nhà đầu tư chuyên nghiệp và "con bạc".</p>`
    },
    {
        slug: 'bitcoin-halving-la-gi-tac-dong-gia-btc',
        content: `<p><strong>Bitcoin Halving</strong> là sự kiện được cộng đồng crypto theo dõi sát nhất, vì nó trực tiếp ảnh hưởng đến nguồn cung BTC và có thể tác động mạnh đến giá. Bài viết này giải thích Halving hoạt động thế nào và nhà đầu tư nên làm gì.</p>

<h2>Bitcoin Halving là gì?</h2>
<p><strong>Bitcoin Halving</strong> là sự kiện cắt giảm 50% phần thưởng khai thác (mining reward) cho mỗi block Bitcoin. Sự kiện này xảy ra tự động sau mỗi <strong>210.000 block</strong>, tương đương khoảng <strong>4 năm một lần</strong>.</p>
<p>Halving được Satoshi Nakamoto (người sáng tạo Bitcoin) lập trình sẵn trong mã nguồn Bitcoin từ ngày đầu tiên. Mục đích là kiểm soát lạm phát và đảm bảo tổng cung Bitcoin không bao giờ vượt quá <strong>21 triệu BTC</strong>.</p>

<h2>Lịch sử các lần Halving</h2>
<table>
<thead><tr><th>Lần</th><th>Thời gian</th><th>Phần thưởng trước</th><th>Phần thưởng sau</th><th>Giá BTC lúc Halving</th><th>Giá BTC 1 năm sau</th></tr></thead>
<tbody>
<tr><td>1</td><td>28/11/2012</td><td>50 BTC</td><td>25 BTC</td><td>$12</td><td>$1,100 (+9,000%)</td></tr>
<tr><td>2</td><td>09/07/2016</td><td>25 BTC</td><td>12.5 BTC</td><td>$650</td><td>$2,500 (+285%)</td></tr>
<tr><td>3</td><td>11/05/2020</td><td>12.5 BTC</td><td>6.25 BTC</td><td>$8,700</td><td>$55,000 (+530%)</td></tr>
<tr><td>4</td><td>19/04/2024</td><td>6.25 BTC</td><td>3.125 BTC</td><td>$63,500</td><td>?</td></tr>
</tbody>
</table>

<h2>Tại sao Halving ảnh hưởng đến giá Bitcoin?</h2>
<h3>Quy luật cung — cầu</h3>
<p>Halving cắt giảm 50% lượng BTC mới được tạo ra mỗi ngày. Trước Halving 2024, thợ đào tạo ra ~900 BTC/ngày. Sau Halving, chỉ còn ~450 BTC/ngày.</p>
<p>Nếu nhu cầu mua BTC giữ nguyên hoặc tăng (nhờ ETF Bitcoin spot, adoption tổ chức), nhưng nguồn cung mới giảm 50% → giá có xu hướng tăng theo thời gian.</p>

<h3>Tâm lý thị trường</h3>
<p>Halving tạo ra kỳ vọng tăng giá mạnh trong cộng đồng. Media đưa tin rộng rãi, thu hút nhà đầu tư mới. Tâm lý FOMO (sợ bỏ lỡ) đẩy giá lên cao hơn giá trị thực trong ngắn hạn.</p>

<h3>Áp lực lên thợ đào</h3>
<p>Phần thưởng giảm 50% nhưng chi phí điện không đổi. Thợ đào yếu kém phải bán BTC để trang trải chi phí hoặc ngừng hoạt động. Điều này tạo áp lực bán ngắn hạn nhưng dài hạn giúp mạng lưới khỏe mạnh hơn.</p>

<h2>Chu kỳ giá Bitcoin sau mỗi Halving</h2>
<p>Dựa trên dữ liệu lịch sử, giá BTC thường trải qua các giai đoạn sau Halving:</p>
<ol>
<li><strong>6-12 tháng trước Halving</strong>: Giá bắt đầu tăng nhẹ nhờ kỳ vọng.</li>
<li><strong>Ngay sau Halving</strong>: Có thể điều chỉnh nhẹ vì "buy the rumor, sell the news".</li>
<li><strong>6-18 tháng sau Halving</strong>: Giai đoạn tăng giá mạnh nhất (bull run). Cả 3 lần trước, đỉnh giá đều đạt được 12-18 tháng sau Halving.</li>
<li><strong>Sau đỉnh</strong>: Thị trường giảm mạnh (bear market) 60-80% từ đỉnh.</li>
</ol>

<h2>Halving 2024 — Lần này có khác không?</h2>
<p>Halving lần 4 (tháng 4/2024) có nhiều yếu tố mới:</p>
<ul>
<li><strong>Bitcoin ETF spot</strong> đã được SEC phê duyệt (01/2024), mở cửa cho dòng vốn tổ chức lớn.</li>
<li><strong>MicroStrategy, Tesla</strong> và nhiều công ty lớn đang nắm giữ BTC trên bảng cân đối kế toán.</li>
<li><strong>Quy mô thị trường lớn hơn nhiều</strong>: Vốn hóa BTC > $1 nghìn tỷ, khó tăng 10x như trước.</li>
<li><strong>Quy định pháp lý rõ ràng hơn</strong> tại Mỹ, EU, và nhiều quốc gia.</li>
</ul>

<h2>Chiến lược đầu tư Bitcoin quanh Halving</h2>
<h3>1. DCA trước Halving 6-12 tháng</h3>
<p>Mua đều đặn hàng tháng trong giai đoạn tích lũy. Không cố dự đoán đáy — DCA giúp bạn có giá mua trung bình hợp lý.</p>

<h3>2. Hold qua Halving, không bán sớm</h3>
<p>Đỉnh giá thường đến 12-18 tháng sau Halving. Bán ngay khi Halving xảy ra = bỏ lỡ phần lớn nhất của bull run.</p>

<h3>3. Đặt mục tiêu lợi nhuận rõ ràng</h3>
<p>Không ai biết đỉnh ở đâu. Khi BTC tăng 2x, bán 20-30% để chốt lãi. Tăng 5x, bán thêm 30%. Giữ một phần dài hạn.</p>

<h3>4. Chuẩn bị cho bear market</h3>
<p>Sau mỗi bull run đều có bear market. Đừng để tham lam khiến bạn giữ đến khi giá giảm 80% từ đỉnh.</p>

<h2>Kết luận</h2>
<p>Bitcoin Halving là sự kiện quan trọng nhất trong chu kỳ crypto. Lịch sử cho thấy giá BTC đều tăng mạnh sau mỗi lần Halving, dù mức tăng có xu hướng giảm dần. Hiểu rõ cơ chế Halving giúp bạn lập chiến lược đầu tư dài hạn thay vì chạy theo đám đông FOMO ở đỉnh.</p>`
    },
    {
        slug: 'reits-la-gi-dau-tu-bat-dong-san-von-nho',
        content: `<p>Muốn đầu tư bất động sản nhưng chưa có vài tỷ? <strong>REITs</strong> cho phép bạn sở hữu một phần bất động sản thương mại với số vốn chỉ từ vài triệu đồng. Bài viết này giải thích REITs hoạt động thế nào và cách đầu tư tại Việt Nam.</p>

<h2>REITs là gì?</h2>
<p><strong>REITs (Real Estate Investment Trust)</strong> — Quỹ tín thác đầu tư bất động sản — là loại quỹ chuyên mua, sở hữu và vận hành các bất động sản sinh lời: trung tâm thương mại, tòa nhà văn phòng, khách sạn, kho bãi, bệnh viện...</p>
<p>Khi mua chứng chỉ REITs, bạn gián tiếp sở hữu một phần các bất động sản này và nhận cổ tức từ tiền thuê. REITs được giao dịch trên sàn chứng khoán, nên bạn có thể mua bán dễ dàng như cổ phiếu.</p>

<h2>REITs hoạt động như thế nào?</h2>
<p>REITs huy động vốn từ nhà đầu tư → mua/xây bất động sản → cho thuê → thu tiền thuê → chia cổ tức cho nhà đầu tư. Theo quy định quốc tế, REITs phải phân phối ít nhất <strong>90% lợi nhuận</strong> dưới dạng cổ tức — đây là lý do REITs thường có cổ tức rất cao (4-8%/năm).</p>

<h2>Ưu điểm của REITs</h2>
<h3>1. Vốn nhỏ, đầu tư lớn</h3>
<p>Mua trực tiếp một tòa nhà văn phòng cần hàng trăm tỷ. Nhưng mua REITs chỉ cần vài triệu đồng — bạn vẫn hưởng lợi từ giá thuê và tăng giá bất động sản.</p>

<h3>2. Thanh khoản cao</h3>
<p>Bán bất động sản thật có thể mất 3-12 tháng. Bán REITs trên sàn chứng khoán chỉ mất vài giây. Đây là lợi thế lớn khi bạn cần tiền gấp.</p>

<h3>3. Thu nhập thụ động ổn định</h3>
<p>REITs trả cổ tức đều đặn hàng quý hoặc hàng năm từ tiền cho thuê. Đây là nguồn thu nhập thụ động ổn định, lý tưởng cho người muốn "tiền đẻ ra tiền".</p>

<h3>4. Quản lý chuyên nghiệp</h3>
<p>Bạn không cần lo tìm khách thuê, sửa chữa, hay quản lý tòa nhà. Đội ngũ chuyên nghiệp của REITs xử lý tất cả.</p>

<h3>5. Đa dạng hóa danh mục</h3>
<p>Một REITs có thể sở hữu 10-50 bất động sản ở nhiều vị trí. Rủi ro được phân tán tốt hơn so với mua một căn nhà duy nhất.</p>

<h2>Nhược điểm cần biết</h2>
<ul>
<li><strong>Biến động theo thị trường chứng khoán</strong>: Dù tài sản cơ sở là bất động sản, giá REITs trên sàn vẫn bị ảnh hưởng bởi tâm lý thị trường chung.</li>
<li><strong>Thuế cổ tức</strong>: Cổ tức REITs chịu thuế TNCN 5% (tại Việt Nam).</li>
<li><strong>Nhạy cảm với lãi suất</strong>: Khi lãi suất tăng, REITs thường giảm vì nhà đầu tư chuyển sang gửi tiết kiệm.</li>
<li><strong>Chưa phổ biến tại Việt Nam</strong>: Số lượng REITs niêm yết tại VN còn rất ít, thanh khoản hạn chế.</li>
</ul>

<h2>Các loại REITs phổ biến trên thế giới</h2>
<table>
<thead><tr><th>Loại REITs</th><th>Tài sản đầu tư</th><th>Lợi tức cổ tức</th><th>Ví dụ</th></tr></thead>
<tbody>
<tr><td>Office REITs</td><td>Tòa nhà văn phòng</td><td>3-5%</td><td>Boston Properties</td></tr>
<tr><td>Retail REITs</td><td>Trung tâm thương mại</td><td>4-7%</td><td>Simon Property</td></tr>
<tr><td>Residential REITs</td><td>Chung cư cho thuê</td><td>3-4%</td><td>AvalonBay</td></tr>
<tr><td>Industrial REITs</td><td>Kho bãi, logistics</td><td>2-4%</td><td>Prologis</td></tr>
<tr><td>Healthcare REITs</td><td>Bệnh viện, viện dưỡng</td><td>5-7%</td><td>Welltower</td></tr>
<tr><td>Data Center REITs</td><td>Trung tâm dữ liệu</td><td>2-3%</td><td>Equinix</td></tr>
</tbody>
</table>

<h2>REITs tại Việt Nam — Hiện trạng 2026</h2>
<p>Thị trường REITs Việt Nam còn non trẻ. Hiện có rất ít sản phẩm REITs chính thức. Tuy nhiên, bạn có thể tiếp cận REITs quốc tế qua:</p>
<ul>
<li><strong>ETF REITs quốc tế</strong>: Mua qua các sàn giao dịch quốc tế (Interactive Brokers, eToro) hoặc qua quỹ DCDS của Dragon Capital có phân bổ vào REITs.</li>
<li><strong>Cổ phiếu BĐS Việt Nam</strong>: VHM, NVL, KDH — không phải REITs nhưng cho phép tiếp cận thị trường BĐS với vốn nhỏ.</li>
</ul>

<h2>Ai nên đầu tư REITs?</h2>
<ul>
<li>Người muốn <strong>thu nhập thụ động từ BĐS</strong> nhưng không đủ vốn mua nhà.</li>
<li>Nhà đầu tư muốn <strong>đa dạng hóa</strong> danh mục ngoài cổ phiếu và trái phiếu.</li>
<li>Người đã <strong>nghỉ hưu</strong> cần dòng tiền cổ tức ổn định.</li>
</ul>

<h2>Kết luận</h2>
<p>REITs mở ra cánh cửa đầu tư bất động sản cho mọi người, không phân biệt vốn lớn hay nhỏ. Dù thị trường REITs Việt Nam chưa phát triển mạnh, bạn vẫn có thể tiếp cận REITs quốc tế. Với cổ tức cao và tiềm năng tăng giá dài hạn, REITs xứng đáng có một vị trí trong danh mục đầu tư đa dạng của bạn.</p>`
    }
];

async function run() {
    console.log('🔧 NÂNG CẤP NỘI DUNG BATCH 2 (5 bài)\n');
    for (const p of posts) {
        const { error } = await supabase.from('posts').update({ content: p.content }).eq('slug', p.slug);
        if (error) console.log(`❌ ${p.slug}: ${error.message}`);
        else {
            const wc = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w).length;
            console.log(`✅ ${p.slug} → ${wc} từ`);
        }
    }
    console.log('\n🎉 Batch 2 hoàn tất!');
}
run();
