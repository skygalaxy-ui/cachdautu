import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const posts = [
    {
        slug: 'fire-movement-nghi-huu-som-tuoi-40',
        content: `<p>Nghỉ hưu ở tuổi 30-40 thay vì 60 — nghe có vẻ viển vông nhưng hàng nghìn người trên thế giới đã làm được nhờ phong trào <strong>FIRE</strong>. Bài viết này hướng dẫn cách áp dụng FIRE với điều kiện kinh tế Việt Nam.</p>

<h2>FIRE là gì?</h2>
<p><strong>FIRE (Financial Independence, Retire Early)</strong> là phong trào tài chính hướng đến 2 mục tiêu: <strong>Độc lập tài chính</strong> (không phụ thuộc vào lương) và <strong>Nghỉ hưu sớm</strong> (có đủ tiền để sống mà không cần đi làm).</p>
<p>Cốt lõi của FIRE là: tiết kiệm 50-70% thu nhập, đầu tư thông minh, và xây dựng nguồn thu nhập thụ động đủ để trang trải chi phí sống.</p>

<h2>Các biến thể FIRE</h2>
<table>
<thead><tr><th>Loại FIRE</th><th>Tỷ lệ tiết kiệm</th><th>Mức sống sau nghỉ hưu</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td>Lean FIRE</td><td>60-80%</td><td>Tối giản, dưới 10 triệu/tháng</td><td>Người thích sống đơn giản</td></tr>
<tr><td>Regular FIRE</td><td>50-60%</td><td>Trung bình, 15-25 triệu/tháng</td><td>Phần lớn mọi người</td></tr>
<tr><td>Fat FIRE</td><td>40-50%</td><td>Thoải mái, >30 triệu/tháng</td><td>Thu nhập cao</td></tr>
<tr><td>Barista FIRE</td><td>40-50%</td><td>Trung bình + job nhẹ bán thời gian</td><td>Muốn vẫn hoạt động</td></tr>
</tbody>
</table>

<h2>Quy tắc 4% — Chìa khóa của FIRE</h2>
<p>Quy tắc 4% (The 4% Rule) nói rằng nếu bạn rút <strong>4% tổng tài sản đầu tư mỗi năm</strong>, danh mục đầu tư của bạn sẽ không bao giờ cạn trong 30+ năm (giả sử lợi nhuận trung bình 7-8%/năm).</p>
<p><strong>Công thức</strong>: Số tiền cần = Chi phí hàng năm × 25</p>
<p>Ví dụ: Chi tiêu 20 triệu/tháng = 240 triệu/năm → Cần tích lũy <strong>6 tỷ đồng</strong> để đạt FIRE.</p>

<h2>FIRE tại Việt Nam — Có khả thi không?</h2>
<h3>Thuận lợi</h3>
<ul>
<li><strong>Chi phí sống thấp hơn phương Tây</strong>: Sống thoải mái ở tỉnh với 10-15 triệu/tháng.</li>
<li><strong>Thị trường đầu tư phát triển</strong>: Chứng khoán, ETF, quỹ mở dễ tiếp cận.</li>
<li><strong>Thu nhập thụ động từ BĐS</strong>: Cho thuê nhà/phòng trọ phổ biến ở VN.</li>
</ul>

<h3>Thách thức</h3>
<ul>
<li><strong>Thu nhập trung bình còn thấp</strong>: Lương 15-20 triệu, tiết kiệm 50% rất khó.</li>
<li><strong>Bảo hiểm y tế</strong>: Không có BHYT công ty, chi phí y tế tự túc rất đắt.</li>
<li><strong>Lạm phát cao hơn</strong>: 3-5%/năm ăn mòn giá trị tài sản nhanh hơn.</li>
<li><strong>Áp lực xã hội</strong>: Gia đình, bạn bè không hiểu khi bạn "không đi làm".</li>
</ul>

<h2>Lộ trình FIRE cho người Việt</h2>
<h3>Giai đoạn 1: Tăng thu nhập (tuổi 22-28)</h3>
<p>Tập trung phát triển kỹ năng và sự nghiệp. Mục tiêu: đạt thu nhập tối thiểu 25-40 triệu/tháng thông qua kỹ năng chuyên môn cao, freelance, hoặc side business.</p>

<h3>Giai đoạn 2: Tích lũy mạnh (tuổi 28-35)</h3>
<p>Tiết kiệm 40-60% thu nhập. Đầu tư vào ETF, quỹ mở, bất động sản cho thuê. Xây dựng nhiều nguồn thu nhập thụ động.</p>

<h3>Giai đoạn 3: Đạt con số FIRE (tuổi 35-42)</h3>
<p>Khi tài sản đầu tư đạt 25× chi phí hàng năm, bạn có thể FIRE. Tiếp tục theo dõi và tái cân bằng danh mục.</p>

<h2>Ví dụ thực tế</h2>
<table>
<thead><tr><th>Kịch bản</th><th>Thu nhập/tháng</th><th>Tiết kiệm/tháng</th><th>Đầu tư (15%/năm)</th><th>Đạt 6 tỷ sau</th></tr></thead>
<tbody>
<tr><td>Cơ bản</td><td>25 triệu</td><td>10 triệu</td><td>ETF + quỹ mở</td><td>~18 năm</td></tr>
<tr><td>Tích cực</td><td>40 triệu</td><td>20 triệu</td><td>ETF + BĐS cho thuê</td><td>~12 năm</td></tr>
<tr><td>Siêu tích cực</td><td>60 triệu</td><td>35 triệu</td><td>Đa dạng</td><td>~8 năm</td></tr>
</tbody>
</table>

<h2>Sai lầm phổ biến khi theo đuổi FIRE</h2>
<ul>
<li><strong>Hy sinh quá nhiều hiện tại</strong>: FIRE không phải sống khổ 15 năm để sướng sau đó. Cần cân bằng.</li>
<li><strong>Không tính đến lạm phát</strong>: Con số 6 tỷ hôm nay có thể cần 10 tỷ sau 15 năm.</li>
<li><strong>Quá lạc quan về lợi nhuận đầu tư</strong>: Thị trường có năm tăng 30% nhưng cũng có năm giảm 20%.</li>
<li><strong>Không có kế hoạch bảo hiểm y tế</strong>: Một lần phẫu thuật lớn có thể tốn 200-500 triệu.</li>
</ul>

<h2>Kết luận</h2>
<p>FIRE là một mô hình tài chính đầy cảm hứng, nhưng cần thực tế. Tại Việt Nam, mục tiêu khả thi hơn là <strong>đạt độc lập tài chính ở tuổi 40-45</strong> thay vì 30-35. Điều quan trọng nhất không phải ngày bạn nghỉ hưu, mà là <strong>tự do lựa chọn</strong> — làm việc vì thích, không phải vì phải.</p>`
    },
    {
        slug: 'chi-phi-an-khi-dau-tu-khoan-phi-mat',
        content: `<p>Bạn nghĩ lợi nhuận đầu tư là 15%/năm? Sau khi trừ các chi phí ẩn, con số thực có thể chỉ còn <strong>8-10%</strong>. Bài viết này phơi bày những khoản phí mà nhà đầu tư thường bỏ qua — và chúng đang "ăn mòn" lợi nhuận của bạn.</p>

<h2>Tại sao chi phí ẩn quan trọng?</h2>
<p>Einstein từng nói lãi kép là "kỳ quan thứ 8" — nhưng ông quên nói rằng <strong>phí kép cũng là thảm họa thứ 8</strong>. Chênh lệch 1% chi phí mỗi năm, sau 30 năm có thể khiến bạn mất <strong>25-30% tổng tài sản</strong>.</p>
<p>Ví dụ: Đầu tư 500 triệu trong 30 năm với lợi nhuận 12%/năm → Nếu phí 1%: còn 8.6 tỷ. Nếu phí 2.5%: chỉ còn 5.4 tỷ. Chênh lệch <strong>3.2 tỷ</strong> chỉ vì 1.5% phí!</p>

<h2>Chi phí ẩn khi đầu tư chứng khoán</h2>
<h3>1. Phí giao dịch (Brokerage Fee)</h3>
<p>Mỗi lần mua/bán cổ phiếu, bạn trả phí cho công ty chứng khoán: <strong>0.15-0.35%</strong> giá trị giao dịch. Mua + Bán = trả 2 lần → tổng <strong>0.3-0.7%</strong> mỗi vòng giao dịch.</p>
<p>Nếu bạn trading 10 lần/tháng với 100 triệu → phí giao dịch ~3-7 triệu/năm.</p>

<h3>2. Thuế bán chứng khoán</h3>
<p><strong>0.1%</strong> trên giá trị bán. Dù lãi hay lỗ đều phải trả. Trading nhiều = thuế nhiều.</p>

<h3>3. Trượt giá (Slippage)</h3>
<p>Khi bạn đặt lệnh mua, giá thực tế khớp có thể cao hơn giá bạn muốn — đặc biệt với cổ phiếu thanh khoản thấp. Slippage trung bình 0.1-0.5% mỗi giao dịch.</p>

<h3>4. Chi phí cơ hội khi giữ tiền mặt</h3>
<p>Tiền nằm trong tài khoản chứng khoán không sinh lãi. Nếu giữ 30% danh mục bằng tiền mặt "chờ cơ hội", bạn đang mất lãi suất tiết kiệm 4-5%/năm trên phần tiền đó.</p>

<h2>Chi phí ẩn khi đầu tư quỹ mở/ETF</h2>
<table>
<thead><tr><th>Loại phí</th><th>Quỹ mở chủ động</th><th>ETF</th><th>Ai thu?</th></tr></thead>
<tbody>
<tr><td>Phí quản lý hàng năm</td><td>1.5-2.5%/năm</td><td>0.5-0.8%/năm</td><td>Công ty quản lý quỹ</td></tr>
<tr><td>Phí mua (Front-load)</td><td>0-3%</td><td>0%</td><td>Đại lý phân phối</td></tr>
<tr><td>Phí bán (Back-load)</td><td>0-2% (giảm theo thời gian)</td><td>0%</td><td>Công ty quản lý quỹ</td></tr>
<tr><td>Phí lưu ký</td><td>0.03-0.05%/năm</td><td>Đã tính trong phí QL</td><td>Ngân hàng lưu ký</td></tr>
<tr><td>Phí giao dịch nội bộ</td><td>0.2-0.5%/năm (ẩn)</td><td>Thấp hơn</td><td>Giao dịch trong quỹ</td></tr>
</tbody>
</table>

<h2>Chi phí ẩn khi đầu tư bất động sản</h2>
<ul>
<li><strong>Thuế chuyển nhượng</strong>: 2% giá bán — trên BĐS 3 tỷ = 60 triệu.</li>
<li><strong>Phí công chứng</strong>: 0.1% giá trị giao dịch.</li>
<li><strong>Phí môi giới</strong>: 1-2% giá trị BĐS.</li>
<li><strong>Chi phí bảo trì</strong>: Sửa chữa, bảo dưỡng mỗi năm = 1-3% giá trị BĐS.</li>
<li><strong>Chi phí trống phòng</strong>: Khi không có khách thuê, vẫn phải trả chi phí lãi vay, bảo trì.</li>
<li><strong>Lãi vay</strong>: Nếu vay mua BĐS, lãi suất 8-12%/năm là chi phí rất lớn.</li>
</ul>

<h2>Chi phí ẩn khi đầu tư crypto</h2>
<ul>
<li><strong>Phí giao dịch sàn</strong>: 0.1% mỗi lần mua/bán (Binance). Sàn nhỏ có thể 0.2-0.5%.</li>
<li><strong>Phí rút tiền</strong>: Rút BTC ~0.0005 BTC (~$30). Rút USDT (TRC-20) ~$1.</li>
<li><strong>Spread (chênh lệch mua-bán)</strong>: Trên sàn P2P, spread có thể 1-3% — chi phí ẩn lớn nhất.</li>
<li><strong>Phí gas (Ethereum)</strong>: Giao dịch DeFi trên Ethereum có thể tốn $5-50/lần khi mạng tắc.</li>
<li><strong>Impermanent Loss (DeFi)</strong>: Cung cấp thanh khoản trên Uniswap có thể lỗ 2-10% do biến động giá.</li>
</ul>

<h2>Cách giảm thiểu chi phí ẩn</h2>
<ol>
<li><strong>Hạn chế trading</strong>: Mỗi giao dịch = phí × 2 (mua + bán). Đầu tư dài hạn giảm phí tổng thể.</li>
<li><strong>Chọn CTCK phí thấp</strong>: So sánh phí giữa SSI, VNDirect, TCBS, HSC. Chênh lệch 0.05-0.1% tích lũy rất lớn.</li>
<li><strong>Ưu tiên ETF hơn quỹ mở chủ động</strong>: Phí quản lý ETF thấp hơn 1-1.5%/năm — tiết kiệm hàng chục triệu dài hạn.</li>
<li><strong>Đọc kỹ biểu phí</strong>: Trước khi đầu tư bất kỳ sản phẩm nào, yêu cầu bảng phí đầy đủ.</li>
<li><strong>Tính lợi nhuận SAU PHÍ</strong>: Luôn trừ tất cả chi phí để biết lợi nhuận thực tế.</li>
</ol>

<h2>Kết luận</h2>
<p>Chi phí ẩn là "kẻ giết người thầm lặng" trong đầu tư. Chênh lệch 1-2% phí mỗi năm có vẻ nhỏ, nhưng qua 20-30 năm tích lũy lãi kép, nó có thể cướp đi <strong>hàng tỷ đồng</strong> từ tài sản của bạn. Nhà đầu tư thông minh không chỉ tìm lợi nhuận cao — mà còn biết giảm chi phí thấp. Đó mới là lợi nhuận thực.</p>`
    },
    {
        slug: 'cach-doc-tin-tuc-tai-chinh-phan-biet',
        content: `<p>Mỗi ngày có hàng trăm tin tức tài chính — nhưng phần lớn là <strong>nhiễu</strong>. Biết cách lọc thông tin giá trị giúp bạn ra quyết định đầu tư tốt hơn thay vì chạy theo đám đông hoảng loạn.</p>

<h2>Tại sao cần đọc tin tức tài chính đúng cách?</h2>
<p>Tin tức sai hoặc hiểu sai tin tức là nguyên nhân #1 khiến nhà đầu tư cá nhân thua lỗ. Khi báo chí đưa tin "thị trường sắp sụp đổ", nhiều người bán tháo. Khi đưa tin "cổ phiếu X sắp tăng gấp 3", người ta mua đuổi. Cả hai hành vi đều dẫn đến thua lỗ.</p>

<h2>Phân biệt 3 loại tin tức</h2>
<h3>1. Tin tức có giá trị đầu tư (Signal)</h3>
<p>Đây là thông tin thực sự ảnh hưởng đến giá trị doanh nghiệp hoặc thị trường:</p>
<ul>
<li><strong>Báo cáo tài chính quý/năm</strong>: Doanh thu, lợi nhuận, dòng tiền thực tế.</li>
<li><strong>Quyết định lãi suất</strong> của Ngân hàng Nhà nước/Fed: Ảnh hưởng đến toàn bộ thị trường.</li>
<li><strong>Thay đổi chính sách</strong>: Luật thuế mới, quy định ngành, hiệp định thương mại.</li>
<li><strong>M&A, phát hành cổ phiếu</strong>: Ảnh hưởng trực tiếp đến giá cổ phiếu.</li>
</ul>

<h3>2. Tin nhiễu (Noise)</h3>
<p>Chiếm 80% tin tức tài chính, không có giá trị dự đoán:</p>
<ul>
<li>"Chuyên gia dự đoán VN-Index sẽ đạt 1,500 điểm" — Không ai dự đoán chính xác được.</li>
<li>"Cổ phiếu X sẽ tăng 50% theo phân tích kỹ thuật" — Phân tích kỹ thuật không đảm bảo tương lai.</li>
<li>Bình luận cảm xúc trên forum, group Zalo: "Mua ngay kẻo trễ!", "Bán hết, sắp sập!"</li>
</ul>

<h3>3. Tin lũa đảo / Pump and Dump</h3>
<p>Tin tức được tạo ra có chủ đích để thao túng giá:</p>
<ul>
<li>"Insider" chia sẻ "mã cổ phiếu bí mật" trong group kín.</li>
<li>"Chuyên gia" quảng bá altcoin/NFT vô danh trên YouTube/TikTok.</li>
<li>Bài viết PR trá hình thành "phân tích" trên các trang tin.</li>
</ul>

<h2>5 quy tắc đọc tin tức thông minh</h2>
<h3>1. Kiểm tra nguồn tin</h3>
<p>Tin từ Reuters, Bloomberg, CafeF, VnExpress Finance = đáng tin cậy hơn. Tin từ group Zalo, TikTok, YouTube "guru" = cần kiểm chứng lại.</p>

<h3>2. Tách biệt SỰ KIỆN và BÌNH LUẬN</h3>
<p><strong>Sự kiện</strong>: "Fed tăng lãi suất 0.25%" → Dữ kiện khách quan.</p>
<p><strong>Bình luận</strong>: "Thị trường sẽ sụp đổ vì Fed tăng lãi suất" → Ý kiến chủ quan.</p>
<p>Chỉ ra quyết định dựa trên sự kiện, không dựa trên bình luận.</p>

<h3>3. Hỏi "Ai hưởng lợi từ tin này?"</h3>
<p>Nếu một bài viết khuyến khích bạn mua cổ phiếu X, hãy tự hỏi: Người viết có đang nắm giữ cổ phiếu X không? Họ có lợi ích gì khi bạn mua?</p>

<h3>4. Đọc cả hai chiều</h3>
<p>Khi thấy tin bullish (tích cực), tìm đọc tin bearish (tiêu cực) về cùng chủ đề. Sự thật thường nằm ở giữa.</p>

<h3>5. Giới hạn thời gian đọc tin</h3>
<p>Đọc tin tối đa <strong>30 phút/ngày</strong>. Đọc quá nhiều gây lo âu và quyết định bốc đồng. Những tin quan trọng thực sự sẽ tự "tìm đến" bạn qua nhiều nguồn khác nhau.</p>

<h2>Nguồn tin chất lượng cho nhà đầu tư Việt Nam</h2>
<table>
<thead><tr><th>Loại</th><th>Nguồn</th><th>Đặc điểm</th></tr></thead>
<tbody>
<tr><td>Tin tức tổng hợp</td><td>CafeF, VnExpress Kinh doanh, Vneconomy</td><td>Nhanh, miễn phí, phổ biến</td></tr>
<tr><td>Phân tích chuyên sâu</td><td>VCSC, SSI Research, Vietcap</td><td>Báo cáo phân tích chuyên nghiệp</td></tr>
<tr><td>Dữ liệu real-time</td><td>Fireant, TradingView, iBoard</td><td>Bảng giá, biểu đồ, thống kê</td></tr>
<tr><td>Quốc tế</td><td>Bloomberg, Reuters, CNBC</td><td>Tin toàn cầu, ảnh hưởng VN</td></tr>
<tr><td>Cộng đồng</td><td>F319, Reddit r/VietNam</td><td>Thảo luận, nhưng cần lọc nhiễu</td></tr>
</tbody>
</table>

<h2>Dấu hiệu nhận biết tin lừa đảo</h2>
<ul>
<li>"Lợi nhuận cam kết 30-50%/tháng" → 100% scam.</li>
<li>"Cơ hội ngàn năm có một, không ai biết" → Pump and dump.</li>
<li>"Đầu tư AI tự động, không cần làm gì" → Quá đẹp để thật.</li>
<li>Yêu cầu chuyển tiền vào tài khoản cá nhân thay vì tổ chức chính thức.</li>
</ul>

<h2>Kết luận</h2>
<p>Tin tức tài chính là công cụ — nhưng cũng có thể là bẫy. Nhà đầu tư giỏi không phải người đọc nhiều tin nhất, mà là người <strong>biết lọc tin</strong> và <strong>không bị cảm xúc chi phối</strong> bởi tiêu đề giật gân. Hãy xây dựng thói quen đọc tin có hệ thống, và nhớ rằng: thông tin tốt nhất thường đến từ báo cáo tài chính chính thức — không phải từ group Zalo.</p>`
    },
    {
        slug: 'forex-vs-crypto-so-sanh-chi-tiet',
        content: `<p>Forex và Crypto đều là thị trường giao dịch hấp dẫn với tiềm năng lợi nhuận cao. Nhưng chúng khác nhau cơ bản về cơ chế, rủi ro và pháp lý. Bài viết này so sánh chi tiết để giúp bạn chọn thị trường phù hợp.</p>

<h2>Forex là gì? Crypto là gì?</h2>
<p><strong>Forex (Foreign Exchange)</strong>: Thị trường ngoại hối — nơi mua bán các cặp tiền tệ quốc gia (EUR/USD, USD/JPY...). Đây là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch >$7.5 nghìn tỷ USD/ngày.</p>
<p><strong>Crypto</strong>: Thị trường tiền mã hóa — nơi giao dịch Bitcoin, Ethereum và hàng nghìn token khác. Khối lượng giao dịch ~$50-100 tỷ USD/ngày, nhỏ hơn Forex nhiều.</p>

<h2>So sánh chi tiết Forex vs Crypto</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>Forex</th><th>Crypto</th></tr></thead>
<tbody>
<tr><td>Giờ giao dịch</td><td>24/5 (nghỉ T7-CN)</td><td>24/7 (không nghỉ)</td></tr>
<tr><td>Biến động giá</td><td>Thấp (0.5-2%/ngày)</td><td>Cao (5-20%+/ngày)</td></tr>
<tr><td>Đòn bẩy tối đa</td><td>1:100 đến 1:500</td><td>1:2 đến 1:125</td></tr>
<tr><td>Quy định pháp lý (VN)</td><td>Không hợp pháp chính thức</td><td>Không hợp pháp chính thức</td></tr>
<tr><td>Vốn tối thiểu</td><td>$10-100</td><td>$1-10</td></tr>
<tr><td>Phí giao dịch</td><td>Spread (1-3 pip)</td><td>0.1-0.5%/lệnh</td></tr>
<tr><td>Tuổi thị trường</td><td>50+ năm (thể chế)</td><td>15 năm (mới)</td></tr>
<tr><td>Tính minh bạch</td><td>Cao (qua broker)</td><td>Trung bình (sàn CEX/DEX)</td></tr>
</tbody>
</table>

<h2>Ưu nhược điểm của Forex</h2>
<h3>Ưu điểm</h3>
<ul>
<li><strong>Thanh khoản cực cao</strong>: Luôn có người mua/bán ở mọi mức giá.</li>
<li><strong>Biến động vừa phải</strong>: Phù hợp với chiến lược kỹ thuật, dễ quản lý rủi ro.</li>
<li><strong>Đòn bẩy cao</strong>: Biến $100 thành sức mua $10,000 — nhưng cũng là con dao hai lưỡi.</li>
<li><strong>Phân tích kỹ thuật hiệu quả</strong>: Thị trường lâu đời, các mô hình kỹ thuật hoạt động tốt.</li>
</ul>

<h3>Nhược điểm</h3>
<ul>
<li><strong>Không hợp pháp tại Việt Nam</strong>: Giao dịch qua sàn nước ngoài, rủi ro pháp lý.</li>
<li><strong>Dễ cháy tài khoản</strong>: Đòn bẩy cao + người mới = mất hết vốn rất nhanh. 80% retail trader thua lỗ.</li>
<li><strong>Sàn lừa đảo nhiều</strong>: Nhiều sàn Forex không uy tín, thao túng giá hoặc không cho rút tiền.</li>
</ul>

<h2>Ưu nhược điểm của Crypto</h2>
<h3>Ưu điểm</h3>
<ul>
<li><strong>Giao dịch 24/7</strong>: Không bao giờ đóng cửa.</li>
<li><strong>Tiềm năng lợi nhuận cực cao</strong>: BTC tăng từ $0 lên $100,000 trong 15 năm.</li>
<li><strong>Phi tập trung</strong>: Không bị kiểm soát bởi chính phủ hay ngân hàng trung ương.</li>
<li><strong>Vốn nhỏ</strong>: Bắt đầu từ $1.</li>
</ul>

<h3>Nhược điểm</h3>
<ul>
<li><strong>Biến động cực cao</strong>: Giá có thể giảm 50-80% trong bear market.</li>
<li><strong>Scam rất nhiều</strong>: Rug pull, Ponzi, airdrop giả — mất tiền nếu không cẩn thận.</li>
<li><strong>Chưa có khung pháp lý</strong>: Nếu bị hack/lừa, rất khó lấy lại tiền.</li>
<li><strong>Phức tạp kỹ thuật</strong>: Ví, private key, blockchain — đường cong học tập dốc đối với người mới.</li>
</ul>

<h2>Nên chọn Forex hay Crypto?</h2>
<table>
<thead><tr><th>Bạn nên chọn...</th><th>Nếu bạn...</th></tr></thead>
<tbody>
<tr><td>Forex</td><td>Thích phân tích kỹ thuật, muốn giao dịch ngắn hạn có hệ thống, chấp nhận biến động vừa phải</td></tr>
<tr><td>Crypto</td><td>Tin vào blockchain dài hạn, chấp nhận biến động cực cao, muốn đầu tư DCA vào BTC/ETH</td></tr>
<tr><td>Cả hai</td><td>Có kinh nghiệm, muốn đa dạng hóa, hiểu rủi ro của cả hai thị trường</td></tr>
<tr><td>Không cái nào</td><td>Mới bắt đầu tìm hiểu đầu tư → nên bắt đầu từ chứng khoán hoặc quỹ mở</td></tr>
</tbody>
</table>

<h2>Lưu ý pháp lý tại Việt Nam</h2>
<p>Cả Forex lẫn Crypto đều <strong>chưa được pháp luật Việt Nam công nhận chính thức</strong> như công cụ đầu tư hợp pháp. Giao dịch Forex qua sàn nước ngoài và giao dịch crypto đều mang rủi ro pháp lý. Nhà đầu tư cần hiểu rõ và chấp nhận rủi ro này.</p>

<h2>Kết luận</h2>
<p>Forex và Crypto đều có cơ hội sinh lời nhưng cũng đầy rủi ro. Nếu bạn là người mới, hãy bắt đầu từ các kênh an toàn hơn như chứng khoán Việt Nam, ETF, quỹ mở — nơi có khung pháp lý rõ ràng và rủi ro được kiểm soát tốt hơn. Chỉ tham gia Forex/Crypto khi bạn đã có nền tảng kiến thức vững chắc.</p>`
    },
    {
        slug: 'giao-duc-tai-chinh-cho-con-day-tu-nho',
        content: `<p>Trẻ em không được dạy về tiền ở trường — nhưng tiền ảnh hưởng đến mọi quyết định trong cuộc sống. Bài viết này hướng dẫn cha mẹ cách dạy con về tài chính theo từng độ tuổi, xây dựng nền tảng tư duy tài chính vững chắc cho tương lai.</p>

<h2>Tại sao cần giáo dục tài chính cho trẻ?</h2>
<p>Theo khảo sát của OECD, <strong>60% thanh niên 18-25 tuổi</strong> không có kiến thức tài chính cơ bản. Hậu quả: vay nợ không kiểm soát, tiêu xài vô tội vạ, không biết đầu tư, và rơi vào bẫy tài chính.</p>
<p>Trẻ em hình thành thói quen tiên bạc từ rất sớm — <strong>từ 3-5 tuổi</strong> đã bắt đầu hiểu khái niệm "mua" và "bán". Nếu không được giáo dục, chúng sẽ học về tiền từ quảng cáo và bạn bè — nguồn thông tin không đáng tin cậy.</p>

<h2>Giáo dục tài chính theo từng độ tuổi</h2>

<h3>3-5 tuổi: Giới thiệu khái niệm tiền</h3>
<ul>
<li><strong>Tiền là gì</strong>: Cho trẻ cầm tiền xu, tiền giấy. Giải thích rằng tiền dùng để đổi lấy đồ vật.</li>
<li><strong>Chơi bán hàng</strong>: Đóng vai "cửa hàng" — trẻ học giao dịch, trao đổi.</li>
<li><strong>Muốn vs Cần</strong>: Dạy sự khác biệt: "Con CẦN ăn cơm" vs "Con MUỐN mua đồ chơi". Đây là bài học cơ bản nhất.</li>
</ul>

<h3>6-9 tuổi: Bắt đầu quản lý tiền</h3>
<ul>
<li><strong>Tiền tiêu vặt hàng tuần</strong>: Cho trẻ một khoản tiền cố định (20.000-50.000đ/tuần) để tự quản lý. Không "bù" thêm khi hết.</li>
<li><strong>3 hũ tiền</strong>: Chia tiền vào 3 hũ — <strong>Tiêu</strong> (chi tiêu ngay), <strong>Tiết kiệm</strong> (mục tiêu lớn), <strong>Cho đi</strong> (giúp đỡ người khác).</li>
<li><strong>Mục tiêu tiết kiệm</strong>: Trẻ muốn món đồ chơi 200.000đ? Cùng tính: "Mỗi tuần tiết kiệm 30.000đ, sau 7 tuần con sẽ có đủ!"</li>
</ul>

<h3>10-13 tuổi: Hiểu giá trị lao động và đầu tư</h3>
<ul>
<li><strong>Kiếm tiền từ công việc nhà</strong>: Trả tiền cho công việc ngoài trách nhiệm thường (rửa xe, phụ nấu ăn). Trẻ học rằng tiền đến từ lao động.</li>
<li><strong>Lãi suất cơ bản</strong>: Cha mẹ làm "ngân hàng" — trẻ gửi tiết kiệm, cuối tháng nhận thêm 5-10% lãi. Trẻ thấy tiền "tự sinh ra tiền".</li>
<li><strong>So sánh giá</strong>: Khi mua sắm cùng con, hướng dẫn so sánh giá giữa các sản phẩm. Trẻ học về giá trị và lựa chọn.</li>
<li><strong>Ngân sách sự kiện</strong>: Cho trẻ ngân sách để tự tổ chức sinh nhật hoặc chuyến đi chơi. Trẻ học cách phân bổ tiền.</li>
</ul>

<h3>14-17 tuổi: Tư duy tài chính nâng cao</h3>
<ul>
<li><strong>Mở tài khoản ngân hàng</strong>: Tài khoản riêng (dưới tên cha mẹ) giúp trẻ quen với hệ thống ngân hàng, app thanh toán.</li>
<li><strong>Giới thiệu đầu tư cơ bản</strong>: Giải thích cổ phiếu, trái phiếu, lãi kép bằng ngôn ngữ đơn giản. Cho trẻ "đầu tư giả" trên tài khoản demo.</li>
<li><strong>Thảo luận về nợ</strong>: Giải thích thẻ tín dụng, vay ngân hàng, lãi suất vay. Dạy rằng nợ có thể là "tốt" (vay mua nhà) hoặc "xấu" (vay tiêu dùng).</li>
<li><strong>Kiếm tiền thực sự</strong>: Hỗ trợ trẻ tìm việc làm thêm phù hợp (bán hàng online, gia sư, giúp việc hàng xóm).</li>
</ul>

<h2>5 nguyên tắc dạy con về tiền</h2>
<ol>
<li><strong>Làm gương</strong>: Trẻ học từ hành vi cha mẹ nhiều hơn lời nói. Nếu bạn tiêu xài hoang phí, con cũng sẽ vậy.</li>
<li><strong>Cho phép sai lầm</strong>: Để trẻ tiêu hết tiền tiêu vặt trong 1 ngày rồi không có gì cả tuần. Bài học từ trải nghiệm in sâu hơn lý thuyết.</li>
<li><strong>Nói chuyện về tiền</strong>: Đừng biến tiền thành chủ đề cấm kỵ. Chia sẻ với con về ngân sách gia đình, hóa đơn, tiết kiệm (ở mức phù hợp với tuổi).</li>
<li><strong>Khen ngợi hành vi tiết kiệm</strong>: Khi con tiết kiệm được để mua đồ chơi, khen ngợi sự kiên nhẫn. Đây là kỹ năng quý giá suốt đời.</li>
<li><strong>Sử dụng trò chơi</strong>: Monopoly, Game of Life, hoặc app tài chính cho trẻ — học qua chơi hiệu quả nhất.</li>
</ol>

<h2>Sách và tài nguyên hay</h2>
<ul>
<li><strong>"Dạy con về tiền" (Beth Kobliner)</strong>: Hướng dẫn theo độ tuổi, thực tế.</li>
<li><strong>"Cha giàu, cha nghèo" (Robert Kiyosaki)</strong>: Tư duy tài chính cho thanh thiếu niên.</li>
<li><strong>App Greenlight / GoHenry</strong>: Thẻ ghi nợ cho trẻ em, cha mẹ theo dõi chi tiêu.</li>
</ul>

<h2>Kết luận</h2>
<p>Giáo dục tài chính cho con không phải dạy trẻ "mê tiền" — mà là dạy chúng <strong>hiểu giá trị của tiền</strong> và biết quản lý nó thông minh. Một đứa trẻ biết tiết kiệm, biết phân biệt muốn/cần, và hiểu lãi kép từ sớm sẽ có lợi thế tài chính lớn khi trưởng thành. Đừng chờ đến khi con 18 tuổi mới nói về tiền — hãy bắt đầu từ hôm nay.</p>`
    }
];

async function run() {
    console.log('🔧 NÂNG CẤP NỘI DUNG BATCH 5 (5 bài)\n');
    for (const p of posts) {
        const { error } = await supabase.from('posts').update({ content: p.content }).eq('slug', p.slug);
        if (error) console.log(`❌ ${p.slug}: ${error.message}`);
        else {
            const wc = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w).length;
            console.log(`✅ ${p.slug} → ${wc} từ`);
        }
    }
    console.log('\n🎉 Batch 5 hoàn tất!');
}
run();
