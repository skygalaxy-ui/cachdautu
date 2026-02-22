import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const posts = [
    {
        slug: 'etf-la-gi-huong-dan-dau-tu-quy-etf',
        content: `<p>Nếu bạn muốn đầu tư chứng khoán nhưng không có thời gian phân tích từng cổ phiếu, <strong>ETF (Exchange Traded Fund)</strong> chính là giải pháp lý tưởng. Bài viết này sẽ giúp bạn hiểu ETF là gì, cách hoạt động và hướng dẫn mua ETF tại Việt Nam năm 2026.</p>

<h2>ETF là gì?</h2>
<p><strong>ETF (Exchange Traded Fund)</strong> là quỹ đầu tư mô phỏng chỉ số chứng khoán, được niêm yết và giao dịch trực tiếp trên sàn như cổ phiếu thông thường. Khi mua 1 chứng chỉ quỹ ETF, bạn gián tiếp sở hữu toàn bộ rổ cổ phiếu trong chỉ số đó.</p>
<p>Ví dụ: Mua ETF VNFIN LEAD nghĩa là bạn đồng thời sở hữu cổ phiếu của VCB, BID, TCB, MBB và nhiều ngân hàng lớn khác — chỉ với một giao dịch duy nhất.</p>

<h2>ETF hoạt động như thế nào?</h2>
<p>Công ty quản lý quỹ (như SSIAM, Dragon Capital) tạo ra quỹ ETF bằng cách mua các cổ phiếu theo đúng tỷ trọng của chỉ số mục tiêu. Nhà đầu tư mua bán chứng chỉ quỹ ETF trên sàn chứng khoán giống như mua bán cổ phiếu.</p>
<p>Giá ETF biến động theo giá trị tài sản ròng (NAV) của rổ cổ phiếu bên trong. Quỹ tự động tái cân bằng khi chỉ số thay đổi thành phần.</p>

<h2>Ưu điểm của ETF so với đầu tư cổ phiếu riêng lẻ</h2>
<h3>1. Đa dạng hóa tự động</h3>
<p>Một chứng chỉ ETF giúp bạn sở hữu 20-30 cổ phiếu blue-chip cùng lúc, giảm thiểu rủi ro tập trung vào một mã duy nhất. Nếu một cổ phiếu giảm mạnh, các cổ phiếu khác trong rổ sẽ bù đắp.</p>

<h3>2. Chi phí quản lý cực thấp</h3>
<p>Phí quản lý ETF tại Việt Nam chỉ <strong>0.5-0.8%/năm</strong>, thấp hơn rất nhiều so với quỹ mở chủ động (1.5-2.5%/năm). Đây là lợi thế lớn khi đầu tư dài hạn vì phí gộp lại qua nhiều năm sẽ ảnh hưởng đáng kể đến lợi nhuận.</p>

<h3>3. Thanh khoản cao, mua bán dễ dàng</h3>
<p>ETF được giao dịch trên sàn chứng khoán trong giờ giao dịch, bạn có thể mua bán bất cứ lúc nào. Không cần chờ khớp lệnh cuối ngày như quỹ mở.</p>

<h3>4. Minh bạch</h3>
<p>Danh mục đầu tư của ETF được công bố công khai hàng ngày. Bạn luôn biết tiền của mình đang được đầu tư vào đâu.</p>

<h2>Nhược điểm cần lưu ý</h2>
<ul>
<li><strong>Lợi nhuận bị giới hạn</strong>: ETF chỉ đạt lợi nhuận bằng chỉ số, không thể vượt trội như chọn đúng cổ phiếu tăng mạnh.</li>
<li><strong>Tracking error</strong>: Đôi khi giá ETF chênh lệch nhỏ so với giá trị thực của rổ cổ phiếu.</li>
<li><strong>Không linh hoạt</strong>: Bạn không thể chọn loại bỏ cổ phiếu yếu trong rổ theo ý muốn.</li>
</ul>

<h2>Các quỹ ETF nổi bật tại Việt Nam 2026</h2>
<table>
<thead><tr><th>Tên quỹ</th><th>Chỉ số mô phỏng</th><th>Phí quản lý</th><th>Đặc điểm</th></tr></thead>
<tbody>
<tr><td>FUEVFVND</td><td>VN30</td><td>0.55%/năm</td><td>Top 30 cổ phiếu lớn nhất HOSE</td></tr>
<tr><td>FUESSV50</td><td>VN50</td><td>0.60%/năm</td><td>Top 50 cổ phiếu vốn hóa lớn</td></tr>
<tr><td>VNFIN LEAD</td><td>VN FIN LEAD</td><td>0.65%/năm</td><td>Cổ phiếu ngành tài chính - ngân hàng</td></tr>
<tr><td>FUEDCMID</td><td>VN DIAMOND</td><td>0.70%/năm</td><td>Cổ phiếu có room ngoại còn nhiều</td></tr>
</tbody>
</table>

<h2>Hướng dẫn mua ETF tại Việt Nam từng bước</h2>
<h3>Bước 1: Mở tài khoản chứng khoán</h3>
<p>Chọn một công ty chứng khoán uy tín (SSI, VNDirect, TCBS, HSC). Quá trình mở tài khoản online chỉ mất 10-15 phút với CCCD và ảnh selfie.</p>

<h3>Bước 2: Nạp tiền vào tài khoản</h3>
<p>Chuyển khoản từ ngân hàng liên kết. Số tiền tối thiểu để mua ETF chỉ khoảng 100.000-200.000đ (10 chứng chỉ quỹ).</p>

<h3>Bước 3: Đặt lệnh mua</h3>
<p>Tìm mã ETF (ví dụ: FUEVFVND), nhập số lượng và giá mua. Lệnh khớp trong giờ giao dịch (9h-11h30, 13h-14h45).</p>

<h3>Bước 4: Theo dõi và DCA định kỳ</h3>
<p>Chiến lược hiệu quả nhất với ETF là <strong>DCA (Dollar Cost Averaging)</strong> — mua đều đặn hàng tháng bất kể giá lên hay xuống, tận dụng lãi kép dài hạn.</p>

<h2>ETF phù hợp với ai?</h2>
<ul>
<li><strong>Người mới bắt đầu</strong>: Không cần kiến thức sâu về phân tích cổ phiếu.</li>
<li><strong>Người bận rộn</strong>: Không cần theo dõi thị trường hàng ngày.</li>
<li><strong>Nhà đầu tư dài hạn</strong>: Muốn hưởng lợi từ sự tăng trưởng chung của nền kinh tế.</li>
<li><strong>Người có vốn nhỏ</strong>: Chỉ cần từ 100.000đ để bắt đầu.</li>
</ul>

<h2>Sai lầm thường gặp khi đầu tư ETF</h2>
<p><strong>Trading quá nhiều</strong>: ETF không phải để lướt sóng ngắn hạn. Chi phí giao dịch sẽ ăn mòn lợi nhuận nếu mua bán liên tục.</p>
<p><strong>Không kiên nhẫn</strong>: Thị trường có thể giảm 20-30% trong ngắn hạn. Nếu bán tháo khi hoảng sợ, bạn sẽ "chốt lỗ" thay vì hưởng lợi dài hạn.</p>
<p><strong>Bỏ qua chi phí</strong>: So sánh kỹ phí quản lý giữa các quỹ ETF trước khi chọn. Chênh lệch 0.1% qua 20 năm có thể lên đến hàng chục triệu đồng.</p>

<h2>Kết luận</h2>
<p>ETF là công cụ đầu tư lý tưởng cho người mới nhờ tính đa dạng, chi phí thấp và dễ tiếp cận. Thay vì cố gắng chọn đúng cổ phiếu — một việc mà ngay cả chuyên gia cũng thường sai — bạn có thể "mua cả thị trường" thông qua ETF và để thời gian + lãi kép làm việc cho mình.</p>
<p>Bắt đầu với chiến lược DCA mỗi tháng 1-2 triệu đồng vào ETF VN30, kiên trì 5-10 năm, và bạn sẽ thấy sức mạnh thực sự của đầu tư thụ động.</p>`
    },
    {
        slug: 'stablecoin-la-gi-usdt-usdc-vai-tro',
        content: `<p>Trong thế giới crypto đầy biến động, <strong>stablecoin</strong> đóng vai trò như "bến đỗ an toàn" giúp nhà đầu tư bảo toàn giá trị. Bài viết này giải thích stablecoin là gì, so sánh USDT vs USDC, và cách sử dụng hiệu quả trong đầu tư 2026.</p>

<h2>Stablecoin là gì?</h2>
<p><strong>Stablecoin</strong> là loại tiền mã hóa được thiết kế để duy trì giá trị ổn định, thường neo theo đồng USD với tỷ lệ 1:1. Nghĩa là 1 USDT hoặc 1 USDC luôn có giá trị xấp xỉ 1 USD.</p>
<p>Khác với Bitcoin hay Ethereum có thể tăng giảm 10-20% trong một ngày, stablecoin gần như không biến động giá. Đây chính là cầu nối quan trọng giữa tài chính truyền thống và thế giới crypto.</p>

<h2>Tại sao stablecoin tồn tại?</h2>
<p>Thị trường crypto hoạt động 24/7, nhưng hệ thống ngân hàng truyền thống không như vậy. Stablecoin giải quyết vấn đề này bằng cách cho phép nhà đầu tư:</p>
<ul>
<li><strong>Chuyển tiền nhanh</strong>: Gửi USDT từ Việt Nam sang Mỹ chỉ mất 2-5 phút, so với 1-3 ngày qua ngân hàng.</li>
<li><strong>Tránh biến động</strong>: Khi thị trường crypto giảm mạnh, bạn có thể đổi sang stablecoin để "đứng ngoài" mà không cần rút về tiền mặt.</li>
<li><strong>Giao dịch ngoài giờ</strong>: Mua bán crypto vào cuối tuần, ngày lễ mà không phụ thuộc ngân hàng.</li>
</ul>

<h2>Các loại stablecoin phổ biến</h2>
<table>
<thead><tr><th>Stablecoin</th><th>Tổ chức phát hành</th><th>Tài sản đảm bảo</th><th>Vốn hóa (2026)</th><th>Mạng lưới</th></tr></thead>
<tbody>
<tr><td>USDT (Tether)</td><td>Tether Ltd</td><td>USD, trái phiếu kho bạc</td><td>~$95 tỷ</td><td>Ethereum, Tron, BSC</td></tr>
<tr><td>USDC</td><td>Circle</td><td>USD, trái phiếu Mỹ</td><td>~$35 tỷ</td><td>Ethereum, Solana, Base</td></tr>
<tr><td>DAI</td><td>MakerDAO</td><td>Crypto (thế chấp quá mức)</td><td>~$5 tỷ</td><td>Ethereum</td></tr>
<tr><td>FDUSD</td><td>First Digital</td><td>USD, tín phiếu kho bạc</td><td>~$3 tỷ</td><td>Ethereum, BSC</td></tr>
</tbody>
</table>

<h2>So sánh USDT vs USDC — Nên dùng loại nào?</h2>
<h3>USDT (Tether)</h3>
<ul>
<li><strong>Ưu điểm</strong>: Thanh khoản cao nhất, được hỗ trợ trên hầu hết sàn giao dịch và blockchain. Phí chuyển rẻ trên mạng Tron (TRC-20).</li>
<li><strong>Nhược điểm</strong>: Tether bị chất vấn về tính minh bạch của tài sản dự trữ. Công ty từng bị phạt bởi cơ quan quản lý Mỹ.</li>
</ul>
<h3>USDC (Circle)</h3>
<ul>
<li><strong>Ưu điểm</strong>: Minh bạch hơn, được kiểm toán định kỳ bởi Deloitte. Tuân thủ quy định pháp luật Mỹ nghiêm ngặt.</li>
<li><strong>Nhược điểm</strong>: Thanh khoản thấp hơn USDT. Từng bị depeg (mất neo giá) ngắn trong sự kiện sụp đổ SVB tháng 3/2023.</li>
</ul>
<p><strong>Lời khuyên</strong>: Nếu ưu tiên thanh khoản và chi phí giao dịch thấp, chọn USDT trên mạng Tron. Nếu ưu tiên an toàn và minh bạch, chọn USDC.</p>

<h2>Cách sử dụng stablecoin trong đầu tư</h2>
<h3>1. Phòng hộ rủi ro (Hedging)</h3>
<p>Khi BTC giảm từ $60,000 xuống $45,000, bạn có thể đổi sang USDT để bảo toàn vốn. Khi thị trường phục hồi, mua lại BTC ở giá thấp hơn.</p>

<h3>2. Earning lãi suất</h3>
<p>Gửi stablecoin trên các nền tảng DeFi hoặc CeFi để nhận lãi suất 3-8%/năm — cao hơn gửi tiết kiệm ngân hàng. Tuy nhiên, cần đánh giá kỹ rủi ro nền tảng.</p>

<h3>3. Chuyển tiền quốc tế</h3>
<p>Gửi USDT qua mạng Tron chỉ mất phí ~$1 và hoàn thành trong 2 phút, so với phí $20-50 và 1-3 ngày qua ngân hàng truyền thống.</p>

<h3>4. Trading pairs</h3>
<p>Hầu hết các cặp giao dịch trên sàn crypto đều sử dụng stablecoin (BTC/USDT, ETH/USDC). Stablecoin là "đồng tiền cơ sở" của thị trường crypto.</p>

<h2>Rủi ro của stablecoin</h2>
<ul>
<li><strong>Rủi ro depeg</strong>: Stablecoin có thể mất neo giá nếu tổ chức phát hành gặp vấn đề. Ví dụ: UST/LUNA sụp đổ năm 2022 khiến nhà đầu tư mất hàng tỷ USD.</li>
<li><strong>Rủi ro pháp lý</strong>: Nhiều quốc gia đang siết chặt quy định về stablecoin, có thể ảnh hưởng đến tính thanh khoản.</li>
<li><strong>Rủi ro nền tảng</strong>: Gửi stablecoin trên DeFi/CeFi có thể bị hack hoặc sàn phá sản (ví dụ: FTX, Celsius).</li>
</ul>

<h2>Mẹo sử dụng stablecoin an toàn</h2>
<ol>
<li><strong>Không để toàn bộ tài sản vào một loại stablecoin</strong>: Chia đều giữa USDT và USDC để giảm thiểu rủi ro.</li>
<li><strong>Chọn mạng lưới phù hợp</strong>: Dùng TRC-20 (Tron) cho USDT để phí rẻ nhất. Kiểm tra kỹ địa chỉ ví trước khi chuyển.</li>
<li><strong>Lưu trữ trên ví cá nhân</strong>: Không để quá nhiều tiền trên sàn giao dịch. Dùng ví phần cứng (Ledger, Trezor) cho số tiền lớn.</li>
</ol>

<h2>Kết luận</h2>
<p>Stablecoin là công cụ không thể thiếu trong đầu tư crypto. Dù không mang lại lợi nhuận cao như Bitcoin hay altcoin, stablecoin giúp bạn quản lý rủi ro, chuyển tiền nhanh và tận dụng cơ hội khi thị trường biến động. Hiểu rõ đặc điểm từng loại stablecoin sẽ giúp bạn đầu tư thông minh và an toàn hơn.</p>`
    },
    {
        slug: 'cach-doc-bang-gia-chung-khoan-nguoi-moi',
        content: `<p>Bảng giá chứng khoán chứa hàng chục cột dữ liệu khiến người mới cảm thấy choáng ngợp. Bài viết này sẽ hướng dẫn bạn cách đọc từng thông số quan trọng, hiểu ý nghĩa màu sắc và áp dụng vào quyết định mua bán thực tế.</p>

<h2>Bảng giá chứng khoán là gì?</h2>
<p>Bảng giá chứng khoán là hệ thống hiển thị thông tin giao dịch <strong>real-time</strong> (thời gian thực) của tất cả cổ phiếu niêm yết trên sàn. Đây là công cụ cơ bản nhất mà mọi nhà đầu tư phải biết đọc trước khi đặt lệnh.</p>
<p>Bạn có thể xem bảng giá miễn phí trên các nền tảng: SSI iBoard, VNDirect, TCBS, Fireant, hoặc trực tiếp tại website của HOSE/HNX.</p>

<h2>Ý nghĩa màu sắc trên bảng giá</h2>
<p>Màu sắc là "ngôn ngữ" quan trọng nhất trên bảng giá chứng khoán Việt Nam:</p>
<table>
<thead><tr><th>Màu</th><th>Ý nghĩa</th><th>Giải thích</th></tr></thead>
<tbody>
<tr><td style="color:#00C853"><strong>🟢 Xanh lá</strong></td><td>Giá tăng</td><td>Giá hiện tại cao hơn giá tham chiếu</td></tr>
<tr><td style="color:#FF1744"><strong>🔴 Đỏ</strong></td><td>Giá giảm</td><td>Giá hiện tại thấp hơn giá tham chiếu</td></tr>
<tr><td style="color:#FF6F00"><strong>🟡 Vàng/Cam</strong></td><td>Giá tham chiếu</td><td>Giá không đổi so với phiên trước</td></tr>
<tr><td style="color:#AA00FF"><strong>🟣 Tím</strong></td><td>Giá trần (CE)</td><td>Giá cao nhất có thể đạt trong phiên</td></tr>
<tr><td style="color:#2196F3"><strong>🔵 Xanh dương</strong></td><td>Giá sàn (FL)</td><td>Giá thấp nhất có thể đạt trong phiên</td></tr>
</tbody>
</table>

<h2>Các cột thông tin quan trọng cần biết</h2>
<h3>1. Giá tham chiếu (TC)</h3>
<p>Là giá đóng cửa của phiên giao dịch trước, dùng làm mốc tính giá trần và giá sàn cho phiên hôm nay. Đây là "điểm chuẩn" để xác định cổ phiếu đang tăng hay giảm.</p>

<h3>2. Giá trần (CE) và Giá sàn (FL)</h3>
<p>Mỗi sàn có biên độ dao động khác nhau:</p>
<ul>
<li><strong>HOSE</strong>: ±7% so với giá tham chiếu</li>
<li><strong>HNX</strong>: ±10%</li>
<li><strong>UPCOM</strong>: ±15%</li>
</ul>
<p>Ví dụ: Cổ phiếu VNM trên HOSE có giá tham chiếu 80.000đ → Giá trần = 85.600đ, Giá sàn = 74.400đ.</p>

<h3>3. Khối lượng giao dịch (KL)</h3>
<p>Số lượng cổ phiếu được mua bán trong phiên. Khối lượng lớn cho thấy cổ phiếu có thanh khoản tốt và nhiều nhà đầu tư quan tâm. Nếu giá tăng kèm khối lượng lớn → tín hiệu tăng mạnh. Giá tăng nhưng khối lượng nhỏ → tăng yếu, có thể đảo chiều.</p>

<h3>4. Dư mua - Dư bán</h3>
<p><strong>Dư mua (Bid)</strong>: Số lệnh mua đang chờ khớp ở các mức giá. Dư mua lớn cho thấy cổ phiếu được nhiều người muốn mua.</p>
<p><strong>Dư bán (Ask/Offer)</strong>: Số lệnh bán đang chờ. Dư bán lớn tạo áp lực giảm giá.</p>
<p>Tỷ lệ dư mua/dư bán > 1 → xu hướng tăng, < 1 → xu hướng giảm.</p>

<h3>5. Giá mở cửa (Open) và Giá cao nhất/thấp nhất</h3>
<p>Giá mở cửa là giá khớp đầu tiên trong phiên ATO. So sánh giá mở cửa với giá tham chiếu để đánh giá tâm lý thị trường ban đầu. Giá cao nhất/thấp nhất cho thấy biên độ dao động thực tế trong phiên.</p>

<h2>Cách đọc 3 phiên giao dịch trong ngày</h2>
<h3>Phiên sáng (9h00 - 11h30)</h3>
<p>Bắt đầu bằng lệnh ATO (At The Open) lúc 9h00. Đây là phiên giao dịch sôi động nhất, phản ánh tâm lý nhà đầu tư sau khi tiêu hóa thông tin qua đêm.</p>

<h3>Phiên chiều (13h00 - 14h30)</h3>
<p>Giao dịch liên tục, thường ổn định hơn phiên sáng. Nhà đầu tư có kinh nghiệm thường quan sát phiên sáng và ra quyết định vào phiên chiều.</p>

<h3>Phiên ATC (14h30 - 14h45)</h3>
<p>Phiên đóng cửa (At The Close). Giá khớp ATC là giá tham chiếu cho phiên hôm sau. Nhiều quỹ đầu tư thực hiện giao dịch lớn trong phiên ATC.</p>

<h2>Mẹo đọc bảng giá hiệu quả cho người mới</h2>
<ol>
<li><strong>Chỉ tập trung 5-10 mã</strong>: Đừng cố theo dõi cả trăm cổ phiếu. Tạo watchlist riêng với các mã bạn quan tâm.</li>
<li><strong>Quan sát VN-Index trước</strong>: Xu hướng chung của thị trường ảnh hưởng đến 70-80% cổ phiếu. Nếu VN-Index giảm mạnh, hãy thận trọng.</li>
<li><strong>Chú ý khối lượng bất thường</strong>: Khối lượng đột biến gấp 2-3 lần trung bình thường báo hiệu sự kiện quan trọng.</li>
<li><strong>Không quyết định chỉ dựa vào màu sắc</strong>: Cổ phiếu đỏ chưa chắc xấu — có thể đang ở vùng giá hấp dẫn để mua vào.</li>
</ol>

<h2>Kết luận</h2>
<p>Đọc bảng giá chứng khoán không khó nếu bạn hiểu ý nghĩa của từng thông số. Hãy bắt đầu bằng cách mở tài khoản demo, theo dõi bảng giá hàng ngày trong 1-2 tuần để quen mắt trước khi thực hiện giao dịch thật. Kỹ năng đọc bảng giá thành thạo sẽ giúp bạn ra quyết định đầu tư nhanh và chính xác hơn.</p>`
    },
    {
        slug: 'quy-khan-cap-tai-sao-can-xay-dung',
        content: `<p>Trước khi nghĩ đến đầu tư sinh lời, bạn cần có một <strong>quỹ khẩn cấp</strong> — tấm đệm tài chính bảo vệ bạn khỏi những bất ngờ không mong muốn trong cuộc sống. Bài viết này hướng dẫn cách xây dựng quỹ khẩn cấp phù hợp với thu nhập của người Việt.</p>

<h2>Quỹ khẩn cấp là gì?</h2>
<p><strong>Quỹ khẩn cấp (Emergency Fund)</strong> là khoản tiền dự phòng để đối phó với các tình huống bất ngờ: mất việc, tai nạn, ốm đau, sửa xe, sửa nhà, hoặc bất kỳ chi phí phát sinh nào nằm ngoài kế hoạch.</p>
<p>Đây <strong>không phải tiền đầu tư</strong> và <strong>không dùng để chi tiêu</strong>. Quỹ này chỉ được sử dụng khi thực sự cần thiết — khi cuộc sống "ném cho bạn một quả bóng" bất ngờ.</p>

<h2>Tại sao quỹ khẩn cấp quan trọng?</h2>
<h3>1. Tránh vay nợ lãi cao</h3>
<p>Khi không có quỹ dự phòng, bạn có thể phải vay tiêu dùng với lãi suất 20-40%/năm hoặc vay "app đen" với lãi cắt cổ. Quỹ khẩn cấp giúp bạn tự xử lý mà không rơi vào bẫy nợ.</p>

<h3>2. Bảo vệ danh mục đầu tư</h3>
<p>Nếu bạn đầu tư chứng khoán nhưng đột ngột cần tiền, bạn sẽ buộc phải bán cổ phiếu — có thể đúng lúc thị trường đang giảm. Quỹ khẩn cấp giúp bạn không phải "bán tháo" khi giá thấp.</p>

<h3>3. Giảm stress tài chính</h3>
<p>Nghiên cứu cho thấy 78% người Việt cảm thấy căng thẳng về tài chính. Có sẵn 3-6 tháng chi tiêu trong quỹ dự phòng giúp bạn ngủ ngon hơn và tập trung làm việc hiệu quả hơn.</p>

<h2>Cần bao nhiêu tiền cho quỹ khẩn cấp?</h2>
<table>
<thead><tr><th>Đối tượng</th><th>Mức dự phòng</th><th>Ví dụ cụ thể</th></tr></thead>
<tbody>
<tr><td>Độc thân, đi làm ổn định</td><td>3 tháng chi tiêu</td><td>Chi 8 triệu/tháng → cần 24 triệu</td></tr>
<tr><td>Gia đình, thu nhập ổn định</td><td>6 tháng chi tiêu</td><td>Chi 15 triệu/tháng → cần 90 triệu</td></tr>
<tr><td>Freelancer, kinh doanh riêng</td><td>6-9 tháng chi tiêu</td><td>Chi 12 triệu/tháng → cần 72-108 triệu</td></tr>
<tr><td>Gia đình trụ cột duy nhất</td><td>9-12 tháng chi tiêu</td><td>Chi 20 triệu/tháng → cần 180-240 triệu</td></tr>
</tbody>
</table>

<h2>Hướng dẫn xây dựng quỹ khẩn cấp từng bước</h2>
<h3>Bước 1: Tính chi tiêu hàng tháng</h3>
<p>Liệt kê tất cả chi phí cố định: tiền nhà, ăn uống, đi lại, điện nước, bảo hiểm, tiền học cho con. Đây là "con số sống còn" — số tiền tối thiểu bạn cần mỗi tháng.</p>

<h3>Bước 2: Đặt mục tiêu cụ thể</h3>
<p>Ví dụ: Chi tiêu cố định 10 triệu/tháng × 6 tháng = <strong>60 triệu đồng</strong>. Đây là số tiền bạn cần tích lũy.</p>

<h3>Bước 3: Tự động hóa tiết kiệm</h3>
<p>Thiết lập chuyển khoản tự động ngay khi nhận lương. <strong>Trả cho bản thân trước</strong> — dành ít nhất 10-20% thu nhập cho quỹ khẩn cấp trước khi chi tiêu bất kỳ thứ gì.</p>

<h3>Bước 4: Chọn nơi giữ tiền phù hợp</h3>
<p>Quỹ khẩn cấp cần 2 yếu tố: <strong>An toàn</strong> và <strong>Rút được ngay</strong>. Các lựa chọn tốt:</p>
<ul>
<li><strong>Tài khoản tiết kiệm online</strong>: Lãi suất 3-5%/năm, rút bất kỳ lúc nào qua app.</li>
<li><strong>Gửi tiết kiệm kỳ hạn 1-3 tháng</strong>: Xoay vòng để luôn có khoản đáo hạn hàng tháng.</li>
<li><strong>Quỹ trái phiếu ngắn hạn</strong>: Lãi cao hơn tiết kiệm, rút T+1 đến T+3.</li>
</ul>
<p><strong>Không nên</strong>: Để trong ví MoMo/ZaloPay (dễ tiêu), mua vàng (thanh khoản kém), hoặc đầu tư chứng khoán (rủi ro biến động).</p>

<h2>Bao lâu để xây xong quỹ khẩn cấp?</h2>
<p>Với mức tiết kiệm 3 triệu/tháng và mục tiêu 60 triệu, bạn cần 20 tháng. Nghe có vẻ lâu, nhưng có một số mẹo để nhanh hơn:</p>
<ul>
<li><strong>Cắt 1-2 khoản chi không cần thiết</strong>: Bỏ 1 bữa cà phê ngoài/tuần tiết kiệm được 100-200k/tháng.</li>
<li><strong>Dồn tiền thưởng, lương tháng 13</strong>: Đưa thẳng vào quỹ thay vì tiêu.</li>
<li><strong>Bán đồ không dùng</strong>: Quần áo, đồ điện tử cũ có thể bán được vài triệu.</li>
<li><strong>Thu nhập phụ</strong>: Làm freelance, dạy thêm, bán hàng online vào buổi tối.</li>
</ul>

<h2>Khi nào được sử dụng quỹ khẩn cấp?</h2>
<p><strong>NÊN sử dụng</strong>: Mất việc, tai nạn/bệnh viện, sửa chữa khẩn cấp (xe hỏng, nhà dột), người thân cần hỗ trợ gấp.</p>
<p><strong>KHÔNG NÊN sử dụng</strong>: Mua iPhone mới, đi du lịch, "cơ hội đầu tư ngàn năm có một", mua quần áo sale.</p>
<p>Sau khi sử dụng, hãy bắt đầu bổ sung lại quỹ ngay lập tức — đặt ưu tiên cao nhất cho việc này.</p>

<h2>Kết luận</h2>
<p>Quỹ khẩn cấp là nền tảng quan trọng nhất trong tài chính cá nhân. Không có quỹ dự phòng, mọi kế hoạch đầu tư đều như xây nhà trên cát. Hãy bắt đầu từ hôm nay — dù chỉ 500.000đ/tháng, bạn đang xây dựng một tấm đệm an toàn cho tương lai.</p>`
    },
    {
        slug: 'dau-tu-quy-mo-tai-viet-nam-2026',
        content: `<p>Không có thời gian nghiên cứu cổ phiếu? Không đủ kiến thức để tự quản lý danh mục? <strong>Quỹ mở (Open-ended Fund)</strong> là giải pháp để bạn giao tiền cho chuyên gia quản lý và hưởng lợi nhuận. Bài viết này so sánh các quỹ mở hàng đầu Việt Nam 2026.</p>

<h2>Quỹ mở là gì?</h2>
<p><strong>Quỹ mở</strong> là quỹ đầu tư tập hợp tiền từ nhiều nhà đầu tư nhỏ, được quản lý bởi công ty quản lý quỹ chuyên nghiệp có giấy phép từ Ủy ban Chứng khoán. Bạn có thể mua (phát hành) hoặc bán (hoàn lại) chứng chỉ quỹ bất kỳ lúc nào.</p>
<p>Khác với ETF giao dịch trên sàn, quỹ mở giao dịch trực tiếp với công ty quản lý quỹ. Giá mua/bán dựa trên <strong>NAV (Net Asset Value)</strong> — giá trị tài sản ròng được tính vào cuối mỗi ngày giao dịch.</p>

<h2>Phân loại quỹ mở tại Việt Nam</h2>
<table>
<thead><tr><th>Loại quỹ</th><th>Phân bổ tài sản</th><th>Rủi ro</th><th>Lợi nhuận kỳ vọng</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td>Quỹ cổ phiếu</td><td>≥80% cổ phiếu</td><td>Cao</td><td>12-20%/năm</td><td>Chấp nhận biến động, đầu tư 5+ năm</td></tr>
<tr><td>Quỹ cân bằng</td><td>40-60% CP + trái phiếu</td><td>Trung bình</td><td>8-15%/năm</td><td>Muốn cân bằng rủi ro/lợi nhuận</td></tr>
<tr><td>Quỹ trái phiếu</td><td>≥80% trái phiếu</td><td>Thấp</td><td>5-8%/năm</td><td>Ưu tiên bảo toàn vốn</td></tr>
<tr><td>Quỹ thị trường tiền tệ</td><td>Tiền gửi, tín phiếu</td><td>Rất thấp</td><td>3-5%/năm</td><td>Gửi tiền ngắn hạn, thay tiết kiệm</td></tr>
</tbody>
</table>

<h2>Top quỹ mở nổi bật tại Việt Nam 2026</h2>
<h3>Quỹ cổ phiếu</h3>
<ul>
<li><strong>VinaCapital VEOF</strong>: Quỹ cổ phiếu lớn nhất Việt Nam, lịch sử hoạt động lâu đời, đội ngũ quản lý giàu kinh nghiệm.</li>
<li><strong>Dragon Capital DCDS</strong>: Chiến lược đầu tư giá trị, tập trung cổ phiếu vốn hóa lớn.</li>
<li><strong>SSIAM VNSI</strong>: Quỹ chỉ số bán chủ động, phí quản lý thấp hơn quỹ chủ động.</li>
</ul>

<h3>Quỹ cân bằng và trái phiếu</h3>
<ul>
<li><strong>Techcom TCBF</strong>: Quỹ trái phiếu có quy mô lớn nhất, lịch sử trả lãi ổn định 6-8%/năm.</li>
<li><strong>Bảo Việt BVBF</strong>: Quỹ cân bằng với phân bổ linh hoạt giữa cổ phiếu và trái phiếu.</li>
<li><strong>MB Capital MBBOND</strong>: Quỹ trái phiếu với chiến lược bảo toàn vốn.</li>
</ul>

<h2>So sánh quỹ mở vs ETF vs tự đầu tư</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>Quỹ mở</th><th>ETF</th><th>Tự đầu tư</th></tr></thead>
<tbody>
<tr><td>Cần kiến thức</td><td>Thấp</td><td>Thấp</td><td>Cao</td></tr>
<tr><td>Phí quản lý</td><td>1.5-2.5%/năm</td><td>0.5-0.8%/năm</td><td>0%</td></tr>
<tr><td>Đa dạng hóa</td><td>Tự động</td><td>Tự động</td><td>Tự làm</td></tr>
<tr><td>Thanh khoản</td><td>T+2 đến T+4</td><td>Ngay trên sàn</td><td>Ngay trên sàn</td></tr>
<tr><td>Vốn tối thiểu</td><td>100.000đ</td><td>~100.000đ</td><td>~7 triệu (1 lot)</td></tr>
<tr><td>Quản lý chuyên nghiệp</td><td>Có</td><td>Thụ động</td><td>Không</td></tr>
</tbody>
</table>

<h2>Cách chọn quỹ mở phù hợp</h2>
<h3>1. Xác định mục tiêu và thời gian</h3>
<p>Đầu tư dưới 1 năm → quỹ trái phiếu/tiền tệ. Từ 1-3 năm → quỹ cân bằng. Trên 5 năm → quỹ cổ phiếu.</p>

<h3>2. Xem hiệu suất quá khứ (nhưng đừng quá tin)</h3>
<p>So sánh lợi nhuận 3-5 năm gần nhất. Quỹ tốt nên đánh bại VN-Index trong đa số các năm. Tuy nhiên, quá khứ không đảm bảo tương lai.</p>

<h3>3. So sánh phí</h3>
<p>Chú ý các loại phí: phí mua (0-3%), phí bán (0-2%), phí quản lý hàng năm (1-2.5%). Phí ăn vào lợi nhuận của bạn, nên chọn quỹ phí thấp nếu hiệu suất tương đương.</p>

<h3>4. Đánh giá công ty quản lý quỹ</h3>
<p>Chọn công ty có uy tín, lịch sử hoạt động lâu năm, quy mô quản lý lớn. Các tên tuổi đáng tin: VinaCapital, Dragon Capital, SSIAM, Techcom Capital, MB Capital.</p>

<h2>Hướng dẫn mua quỹ mở</h2>
<ol>
<li><strong>Mở tài khoản</strong>: Trực tiếp tại website/app của công ty quản lý quỹ hoặc qua đại lý phân phối (ngân hàng, Fmarket, Fundiin).</li>
<li><strong>Chọn quỹ và nạp tiền</strong>: Chuyển khoản từ ngân hàng, tối thiểu thường 100.000đ.</li>
<li><strong>Đặt lệnh mua định kỳ (SIP)</strong>: Thiết lập mua tự động hàng tháng — tương tự DCA với cổ phiếu.</li>
<li><strong>Theo dõi NAV</strong>: Kiểm tra giá trị tài sản ròng định kỳ, nhưng đừng hoảng sợ khi NAV giảm ngắn hạn.</li>
</ol>

<h2>Sai lầm thường gặp</h2>
<ul>
<li><strong>Bán khi thị trường giảm</strong>: Đây là sai lầm phổ biến nhất. Quỹ mở cần thời gian để sinh lời. Bán khi thua lỗ = chốt lỗ thật sự.</li>
<li><strong>Chạy theo quỹ "hot"</strong>: Quỹ lãi 50% năm ngoái có thể lỗ 20% năm sau. Đừng mua quỹ chỉ vì nó đang lên.</li>
<li><strong>Bỏ qua phí bán sớm</strong>: Nhiều quỹ tính phí bán 1-2% nếu rút trong 6-12 tháng đầu. Đọc kỹ bản cáo bạch trước khi mua.</li>
</ul>

<h2>Kết luận</h2>
<p>Quỹ mở là cách đầu tư thông minh cho người không có thời gian hoặc kiến thức chuyên sâu. Với vốn chỉ từ 100.000đ/tháng và chiến lược DCA kiên nhẫn, bạn có thể xây dựng tài sản dài hạn với sự hỗ trợ của đội ngũ quản lý quỹ chuyên nghiệp.</p>`
    }
];

async function run() {
    console.log('🔧 NÂNG CẤP NỘI DUNG BATCH 1 (5 bài)\n');
    for (const p of posts) {
        const { error } = await supabase.from('posts').update({ content: p.content }).eq('slug', p.slug);
        if (error) console.log(`❌ ${p.slug}: ${error.message}`);
        else {
            const wc = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w).length;
            console.log(`✅ ${p.slug} → ${wc} từ`);
        }
    }
    console.log('\n🎉 Batch 1 hoàn tất!');
}
run();
