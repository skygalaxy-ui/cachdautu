import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const SITE = 'https://cachdautu.com';
const img = (id, w = 1200, h = 630) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const posts = [
    {
        title: 'Phân tích kỹ thuật trong đầu tư chứng khoán – Công cụ không thể thiếu',
        slug: 'phan-tich-ky-thuat-chung-khoan',
        excerpt: 'Tìm hiểu phân tích kỹ thuật chứng khoán: đọc biểu đồ nến, chỉ báo RSI, MACD, Bollinger Bands và cách áp dụng vào giao dịch thực tế.',
        tags: ['phân tích kỹ thuật', 'chứng khoán', 'biểu đồ nến', 'RSI', 'MACD'],
        reading_time: '7 phút',
        featured_image: img('1642790106117-e829e14a795f'),
        content: `<h2>Phân tích kỹ thuật là gì?</h2>
<p><strong>Phân tích kỹ thuật (Technical Analysis - TA)</strong> là phương pháp dự đoán xu hướng giá cổ phiếu dựa trên lịch sử giao dịch, bao gồm giá và khối lượng. Khác với phân tích cơ bản đánh giá giá trị doanh nghiệp, phân tích kỹ thuật tập trung vào hành vi của thị trường — "giá đã phản ánh tất cả".</p>
<p>Phân tích kỹ thuật được sử dụng rộng rãi trong <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">đầu tư chứng khoán</a>, giao dịch <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">crypto</a> và cả <a href="${SITE}/bai-viet/xu-huong-gia-vang-chien-luoc-dau-tu">vàng</a>.</p>

<img src="${img('1551288049-bebda4e38f71')}" alt="Biểu đồ phân tích kỹ thuật chứng khoán" />

<h2>Các loại biểu đồ phổ biến</h2>
<table>
<thead><tr><th>Loại biểu đồ</th><th>Đặc điểm</th><th>Phù hợp</th></tr></thead>
<tbody>
<tr><td>Biểu đồ nến (Candlestick)</td><td>Hiển thị giá mở/đóng/cao/thấp</td><td>Phổ biến nhất, nhiều tín hiệu</td></tr>
<tr><td>Biểu đồ đường (Line)</td><td>Chỉ hiện giá đóng cửa</td><td>Xem xu hướng tổng quan</td></tr>
<tr><td>Biểu đồ thanh (Bar)</td><td>Giống nến nhưng dạng thanh</td><td>Thị trường quốc tế</td></tr>
</tbody>
</table>

<h2>Các mô hình nến quan trọng</h2>
<h3>Mô hình đảo chiều tăng</h3>
<ul>
<li><strong>Hammer (Búa):</strong> Thân nến nhỏ, bóng dưới dài — tín hiệu đáy</li>
<li><strong>Morning Star:</strong> Bộ 3 nến báo hiệu đảo chiều từ giảm sang tăng</li>
<li><strong>Bullish Engulfing:</strong> Nến tăng nuốt trọn nến giảm trước đó</li>
</ul>
<h3>Mô hình đảo chiều giảm</h3>
<ul>
<li><strong>Shooting Star:</strong> Bóng trên dài, thân nhỏ — tín hiệu đỉnh</li>
<li><strong>Evening Star:</strong> Bộ 3 nến báo hiệu đảo chiều từ tăng sang giảm</li>
<li><strong>Bearish Engulfing:</strong> Nến giảm nuốt trọn nến tăng trước đó</li>
</ul>

<h2>Chỉ báo kỹ thuật phổ biến</h2>
<h3>RSI (Relative Strength Index)</h3>
<p>Đo lường sức mạnh giá trên thang 0-100. RSI trên 70 = quá mua (có thể giảm), RSI dưới 30 = quá bán (có thể tăng). Kết hợp RSI với xu hướng chính để tìm điểm vào lệnh tốt nhất.</p>

<h3>MACD (Moving Average Convergence Divergence)</h3>
<p>Chỉ báo xu hướng và động lượng. Khi đường MACD cắt lên đường Signal = tín hiệu mua. Khi cắt xuống = tín hiệu bán. Histogram cho thấy sức mạnh xu hướng.</p>

<h3>Đường trung bình động (MA)</h3>
<p>MA20, MA50, MA200 là các mốc quan trọng. "Golden Cross" (MA50 cắt lên MA200) là tín hiệu tăng mạnh. "Death Cross" (MA50 cắt xuống MA200) là tín hiệu giảm.</p>

<h3>Bollinger Bands</h3>
<p>Ba đường bao quanh giá, cho biết biến động và vùng hỗ trợ/kháng cự động. Giá chạm band trên = có thể điều chỉnh, chạm band dưới = có thể phục hồi.</p>

<h2>Lời khuyên khi sử dụng phân tích kỹ thuật</h2>
<ul>
<li>Không dùng một chỉ báo duy nhất — kết hợp ít nhất 2-3 công cụ</li>
<li>Luôn xác nhận bằng khối lượng giao dịch</li>
<li>Kết hợp với <a href="${SITE}/bai-viet/dau-tu-la-gi-huong-dan-toan-dien">kiến thức nền tảng đầu tư</a></li>
<li>Thực hành trên tài khoản demo trước khi giao dịch thật</li>
</ul>
<p>Phân tích kỹ thuật là công cụ mạnh mẽ nhưng không phải "chén thánh". Hãy kết hợp với quản lý vốn và kỷ luật giao dịch để đạt hiệu quả cao nhất. Theo dõi <a href="${SITE}">CachDauTu.com</a> để cập nhật thêm kiến thức.</p>`
    },
    {
        title: 'Chiến lược DCA – Bình quân giá đầu tư hiệu quả cho mọi thị trường',
        slug: 'chien-luoc-dca-binh-quan-gia',
        excerpt: 'Tìm hiểu chiến lược DCA (Dollar Cost Averaging) – phương pháp đầu tư bình quân giá giúp giảm rủi ro và tối ưu lợi nhuận dài hạn.',
        tags: ['DCA', 'bình quân giá', 'chiến lược đầu tư', 'đầu tư dài hạn'],
        reading_time: '5 phút',
        featured_image: img('1633158829585-23ba8f7c8451'),
        content: `<h2>DCA là gì?</h2>
<p><strong>DCA (Dollar Cost Averaging)</strong> hay còn gọi là chiến lược bình quân giá, là phương pháp đầu tư bằng cách mua một tài sản với số tiền cố định theo chu kỳ đều đặn (hàng tuần, hàng tháng), bất kể giá tại thời điểm đó là bao nhiêu.</p>
<p>Đây là chiến lược được Warren Buffett khuyên dùng cho nhà đầu tư cá nhân, đặc biệt hiệu quả khi áp dụng cho <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a>, <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">crypto</a> và <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">vàng</a>.</p>

<img src="${img('1579621970563-9ae2e01248e6')}" alt="Minh họa chiến lược DCA bình quân giá" />

<h2>DCA hoạt động như thế nào?</h2>
<p>Ví dụ minh họa: Bạn đầu tư 5 triệu đồng mỗi tháng vào Bitcoin trong 6 tháng.</p>
<table>
<thead><tr><th>Tháng</th><th>Giá BTC</th><th>Số tiền mua</th><th>Số BTC nhận</th></tr></thead>
<tbody>
<tr><td>Tháng 1</td><td>$40,000</td><td>5 triệu</td><td>0.005 BTC</td></tr>
<tr><td>Tháng 2</td><td>$35,000</td><td>5 triệu</td><td>0.0057 BTC</td></tr>
<tr><td>Tháng 3</td><td>$30,000</td><td>5 triệu</td><td>0.0067 BTC</td></tr>
<tr><td>Tháng 4</td><td>$32,000</td><td>5 triệu</td><td>0.0063 BTC</td></tr>
<tr><td>Tháng 5</td><td>$38,000</td><td>5 triệu</td><td>0.0053 BTC</td></tr>
<tr><td>Tháng 6</td><td>$42,000</td><td>5 triệu</td><td>0.0048 BTC</td></tr>
<tr><td><strong>Tổng</strong></td><td><strong>TB: $36,167</strong></td><td><strong>30 triệu</strong></td><td><strong>0.0338 BTC</strong></td></tr>
</tbody>
</table>
<p>Giá trung bình của bạn là $36,167/BTC — thấp hơn giá hiện tại ($42,000), tạo ra lợi nhuận 16% mà không cần "đoán đáy".</p>

<h2>Ưu điểm của DCA</h2>
<ul>
<li><strong>Loại bỏ cảm xúc:</strong> Không cần lo lắng về timing thị trường</li>
<li><strong>Giảm rủi ro mua đỉnh:</strong> Phân bổ vốn đều đặn, giá trung bình sẽ được san phẳng</li>
<li><strong>Đơn giản và kỷ luật:</strong> Phù hợp với người bận rộn, không cần theo dõi thị trường liên tục</li>
<li><strong>Tận dụng khi giá giảm:</strong> Mua được nhiều hơn khi giá thấp, ít hơn khi giá cao</li>
</ul>

<h2>DCA phù hợp với ai?</h2>
<ul>
<li>Người mới bắt đầu đầu tư, chưa có nhiều kinh nghiệm</li>
<li>Người có thu nhập cố định hàng tháng muốn tích lũy dần</li>
<li>Nhà đầu tư dài hạn tin vào tiềm năng tăng trưởng của tài sản</li>
<li>Người không muốn mất thời gian theo dõi thị trường hàng ngày</li>
</ul>

<h2>Áp dụng DCA vào thực tế</h2>
<h3>DCA cho chứng khoán</h3>
<p>Mua ETF như E1VFVN30 hoặc FUEVFVND đều đặn mỗi tháng là cách đơn giản nhất. Xem thêm <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">hướng dẫn đầu tư chứng khoán</a>.</p>

<h3>DCA cho crypto</h3>
<p>Phân bổ đều vào BTC (60%) và ETH (40%) mỗi tuần hoặc mỗi tháng. Nhiều sàn hỗ trợ mua tự động. Tìm hiểu thêm tại <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">bài viết về crypto</a>.</p>

<h3>DCA cho vàng</h3>
<p>Mua vàng nhẫn 1-2 chỉ mỗi tháng, hoặc sử dụng tài khoản vàng tích lũy. Chi tiết tại <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">hướng dẫn đầu tư vàng</a>.</p>

<p>DCA không phải là chiến lược hoàn hảo, nhưng là phương pháp đầu tư an toàn và hiệu quả nhất cho đa số nhà đầu tư cá nhân. Bắt đầu ngay hôm nay với <a href="${SITE}">CachDauTu.com</a>!</p>`
    },
    {
        title: 'Rủi ro khi đầu tư crypto và cách phòng tránh hiệu quả',
        slug: 'rui-ro-dau-tu-crypto-cach-phong-tranh',
        excerpt: 'Phân tích chi tiết các rủi ro khi đầu tư tiền điện tử: biến động giá, lừa đảo, hack sàn. Hướng dẫn cách phòng tránh và bảo vệ tài sản.',
        tags: ['rủi ro crypto', 'bảo mật', 'lừa đảo crypto', 'quản lý rủi ro'],
        reading_time: '6 phút',
        featured_image: img('1622630998477-0d96834cf5db'),
        content: `<h2>Crypto: Cơ hội lớn đi kèm rủi ro lớn</h2>
<p>Thị trường <strong>tiền điện tử (crypto)</strong> nổi tiếng với mức sinh lời ấn tượng nhưng cũng là nơi nhiều nhà đầu tư mất trắng. Hiểu rõ các rủi ro khi đầu tư crypto là bước đầu tiên để bảo vệ tài sản và đầu tư thông minh hơn.</p>
<p>Nếu bạn đang tìm hiểu về <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">đầu tư crypto cho người mới</a>, bài viết này sẽ giúp bạn nhận diện và phòng tránh các rủi ro phổ biến nhất.</p>

<img src="${img('1518546305927-5a555bb7020d')}" alt="Rủi ro đầu tư crypto và cách phòng tránh" />

<h2>Các loại rủi ro khi đầu tư crypto</h2>
<table>
<thead><tr><th>Loại rủi ro</th><th>Mức độ</th><th>Mô tả</th><th>Cách phòng tránh</th></tr></thead>
<tbody>
<tr><td>Biến động giá</td><td>🔴 Cao</td><td>Giá có thể giảm 30-50% trong vài ngày</td><td>DCA, không all-in</td></tr>
<tr><td>Lừa đảo (Scam)</td><td>🔴 Cao</td><td>Dự án giả, Ponzi, rug pull</td><td>Nghiên cứu kỹ, DYOR</td></tr>
<tr><td>Hack sàn/ví</td><td>🟡 TB</td><td>Mất tài sản do bảo mật yếu</td><td>Ví lạnh, 2FA</td></tr>
<tr><td>Pháp lý</td><td>🟡 TB</td><td>Chính sách quản lý thay đổi</td><td>Theo dõi tin tức</td></tr>
<tr><td>Thanh khoản</td><td>🟡 TB</td><td>Không bán được khi cần</td><td>Chọn coin vốn hóa lớn</td></tr>
</tbody>
</table>

<h2>Rủi ro biến động giá cực đoan</h2>
<p>Crypto là thị trường có biến động giá mạnh nhất trong tất cả các kênh đầu tư. Bitcoin từng giảm từ $69,000 xuống $16,000 (giảm 77%) trong giai đoạn 2021-2022 trước khi phục hồi mạnh mẽ. Nhiều altcoin nhỏ thậm chí mất 90-99% giá trị và không bao giờ hồi lại.</p>
<p>Để giảm thiểu rủi ro biến động, hãy áp dụng <a href="${SITE}/bai-viet/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> và chỉ đầu tư vào các đồng coin có vốn hóa lớn (BTC, ETH).</p>

<h2>Rủi ro lừa đảo và Rug Pull</h2>
<p>Hàng nghìn dự án crypto mới ra đời mỗi năm với lời hứa lợi nhuận khổng lồ. Nhiều trong số đó là "rug pull" — nhà phát triển tạo token, pump giá, rồi rút toàn bộ thanh khoản và biến mất, để lại nhà đầu tư với token vô giá trị.</p>
<h3>Dấu hiệu nhận biết scam:</h3>
<ul>
<li>Hứa hẹn lợi nhuận cố định bất hợp lý (5-10%/ngày)</li>
<li>Đội ngũ phát triển ẩn danh, không thông tin</li>
<li>Không có whitepaper hoặc roadmap rõ ràng</li>
<li>Gấp rút FOMO với "cơ hội cuối cùng"</li>
<li>Tokenomics không minh bạch, team giữ tỷ lệ lớn</li>
</ul>

<h2>Rủi ro bảo mật: Hack sàn và mất ví</h2>
<p>Nhiều sàn giao dịch lớn từng bị hack: Mt. Gox mất 850,000 BTC, FTX sụp đổ gây thiệt hại hàng tỷ USD cho nhà đầu tư.</p>
<h3>Cách bảo vệ tài sản:</h3>
<ul>
<li><strong>Sử dụng ví lạnh (Ledger, Trezor)</strong> cho tài sản lớn</li>
<li><strong>Bật xác thực 2 bước (2FA)</strong> trên mọi sàn</li>
<li><strong>Không chia sẻ seed phrase</strong> với bất kỳ ai</li>
<li><strong>Phân tán tài sản</strong> trên nhiều ví và sàn khác nhau</li>
<li><strong>Chỉ dùng sàn uy tín:</strong> Binance, OKX, Coinbase</li>
</ul>

<h2>Chiến lược quản lý rủi ro tổng thể</h2>
<p>Nguyên tắc vàng: chỉ đầu tư vào crypto số tiền bạn sẵn sàng mất hoàn toàn. Hãy phân bổ tài sản đa dạng, kết hợp crypto với <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> và <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">vàng</a> để cân bằng rủi ro. Xem thêm <a href="${SITE}/bai-viet/xay-dung-danh-muc-dau-tu-da-dang-hoa">cách xây dựng danh mục đa dạng hóa</a> trên <a href="${SITE}">CachDauTu.com</a>.</p>`
    },
    {
        title: 'Xu hướng giá vàng 2025 và chiến lược đầu tư vàng thông minh',
        slug: 'xu-huong-gia-vang-chien-luoc-dau-tu',
        excerpt: 'Phân tích xu hướng giá vàng 2025, các yếu tố tác động và chiến lược đầu tư vàng thông minh để tối ưu lợi nhuận trong năm mới.',
        tags: ['xu hướng vàng', 'giá vàng 2025', 'đầu tư vàng', 'phân tích vàng'],
        reading_time: '5 phút',
        featured_image: img('1624365168968-f283d506c6b0'),
        content: `<h2>Bức tranh thị trường vàng 2025</h2>
<p><strong>Giá vàng</strong> đã liên tục lập đỉnh mới trong năm 2024 và xu hướng này được dự báo tiếp tục trong năm 2025. Giá vàng thế giới đã vượt mốc $2,500/oz, trong khi vàng SJC trong nước cũng phá kỷ lục trên 85 triệu đồng/lượng.</p>
<p>Nếu bạn đang tìm hiểu <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">đầu tư vàng cơ bản</a>, hãy kết hợp với phân tích xu hướng trong bài viết này để đưa ra quyết định đúng đắn.</p>

<img src="${img('1610375461246-83df859df2d4')}" alt="Phân tích xu hướng giá vàng 2025" />

<h2>Các yếu tố chính tác động đến giá vàng 2025</h2>
<table>
<thead><tr><th>Yếu tố</th><th>Tác động</th><th>Dự báo 2025</th></tr></thead>
<tbody>
<tr><td>Lãi suất FED</td><td>Giảm lãi suất → vàng tăng</td><td>FED có thể cắt lãi suất 2-3 lần</td></tr>
<tr><td>Lạm phát toàn cầu</td><td>Lạm phát cao → vàng tăng</td><td>Lạm phát vẫn ở mức cao</td></tr>
<tr><td>Căng thẳng địa chính trị</td><td>Bất ổn → vàng tăng</td><td>Nhiều điểm nóng chưa giải quyết</td></tr>
<tr><td>NHTW mua vàng</td><td>Cầu tăng → giá tăng</td><td>Xu hướng tiếp tục mạnh</td></tr>
<tr><td>USD suy yếu</td><td>USD giảm → vàng tăng</td><td>Đồng USD có thể yếu đi</td></tr>
</tbody>
</table>

<h2>Dự báo giá vàng năm 2025</h2>
<p>Nhiều tổ chức tài chính lớn đưa ra dự báo tích cực cho giá vàng năm 2025. Goldman Sachs dự báo vàng có thể đạt $2,700-2,900/oz, trong khi JP Morgan đưa ra mức $2,600-2,800/oz. Tại Việt Nam, vàng SJC có thể dao động quanh mức 80-95 triệu đồng/lượng.</p>

<h2>Chiến lược đầu tư vàng cho năm 2025</h2>
<h3>1. DCA hàng tháng</h3>
<p>Chiến lược an toàn nhất là mua vàng đều đặn mỗi tháng. Tìm hiểu <a href="${SITE}/bai-viet/chien-luoc-dca-binh-quan-gia">chiến lược DCA chi tiết</a> để áp dụng hiệu quả.</p>

<h3>2. Mua khi giá điều chỉnh</h3>
<p>Theo dõi các đợt giá vàng điều chỉnh giảm 3-5% để mua vào. Đây là cơ hội tích lũy ở mức giá tốt hơn. Sử dụng <a href="${SITE}/bai-viet/phan-tich-ky-thuat-chung-khoan">phân tích kỹ thuật</a> để xác định điểm entry hợp lý.</p>

<h3>3. Phân bổ trong danh mục đa dạng</h3>
<p>Vàng nên chiếm 15-25% tổng danh mục đầu tư trong bối cảnh bất ổn hiện tại. Kết hợp với <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> và <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">crypto</a> để tối ưu lợi nhuận. Xem <a href="${SITE}/bai-viet/xay-dung-danh-muc-dau-tu-da-dang-hoa">chiến lược đa dạng hóa</a>.</p>

<h3>4. Chọn hình thức phù hợp</h3>
<ul>
<li><strong>Vàng nhẫn 9999:</strong> Phù hợp tích lũy nhỏ lẻ, chênh lệch mua/bán thấp</li>
<li><strong>Vàng miếng SJC:</strong> Giá trị lớn, thanh khoản cao tại Việt Nam</li>
<li><strong>ETF Vàng:</strong> Tiện lợi, giao dịch qua tài khoản chứng khoán</li>
</ul>

<p>Vàng tiếp tục là kênh đầu tư hấp dẫn trong năm 2025. Theo dõi diễn biến giá và phân tích thị trường mới nhất tại <a href="${SITE}">CachDauTu.com</a> để không bỏ lỡ cơ hội.</p>`
    },
    {
        title: 'Xây dựng danh mục đầu tư đa dạng hóa – Chìa khóa thành công dài hạn',
        slug: 'xay-dung-danh-muc-dau-tu-da-dang-hoa',
        excerpt: 'Hướng dẫn xây dựng danh mục đầu tư đa dạng hóa: phân bổ tài sản, tỷ lệ hợp lý giữa chứng khoán, vàng, crypto và tiết kiệm.',
        tags: ['đa dạng hóa', 'danh mục đầu tư', 'phân bổ tài sản', 'quản lý rủi ro'],
        reading_time: '6 phút',
        featured_image: img('1460925895917-afdab827c52f'),
        content: `<h2>Tại sao cần đa dạng hóa danh mục đầu tư?</h2>
<p><strong>Đa dạng hóa danh mục đầu tư</strong> là nguyên tắc vàng trong tài chính — "Không bỏ tất cả trứng vào một giỏ." Bằng cách phân bổ vốn vào nhiều loại tài sản khác nhau, bạn giảm thiểu rủi ro khi một kênh đầu tư nào đó sụt giảm.</p>
<p>Theo nghiên cứu của Vanguard, phân bổ tài sản quyết định đến 90% kết quả đầu tư dài hạn — quan trọng hơn cả việc chọn đúng cổ phiếu hay timing thị trường.</p>

<img src="${img('1633158829585-23ba8f7c8451')}" alt="Xây dựng danh mục đầu tư đa dạng hóa" />

<h2>Danh mục mẫu theo mức rủi ro</h2>
<table>
<thead><tr><th>Tài sản</th><th>An toàn (Tuổi 50+)</th><th>Cân bằng (30-50)</th><th>Tăng trưởng (20-30)</th></tr></thead>
<tbody>
<tr><td>Tiết kiệm/Trái phiếu</td><td>40%</td><td>20%</td><td>10%</td></tr>
<tr><td>Chứng khoán</td><td>30%</td><td>40%</td><td>40%</td></tr>
<tr><td>Vàng</td><td>20%</td><td>15%</td><td>10%</td></tr>
<tr><td>Crypto</td><td>0%</td><td>10%</td><td>25%</td></tr>
<tr><td>BĐS/Quỹ đầu tư</td><td>10%</td><td>15%</td><td>15%</td></tr>
<tr><td><strong>Tổng</strong></td><td><strong>100%</strong></td><td><strong>100%</strong></td><td><strong>100%</strong></td></tr>
</tbody>
</table>

<h2>Nguyên tắc phân bổ tài sản</h2>
<h3>1. Xác định mục tiêu và thời gian đầu tư</h3>
<p>Đầu tư ngắn hạn (dưới 2 năm) nên ưu tiên tài sản an toàn như tiết kiệm và vàng. Dài hạn (trên 5 năm) có thể chấp nhận rủi ro cao hơn với chứng khoán và crypto.</p>

<h3>2. Đánh giá khẩu vị rủi ro</h3>
<p>Bạn có thể chịu được mức giảm bao nhiêu %? Nếu thấy lo lắng khi danh mục giảm 10%, bạn thuộc nhóm an toàn. Nếu OK với mức giảm 30-40%, bạn có thể chọn danh mục tăng trưởng.</p>

<h3>3. Tương quan nghịch giữa các tài sản</h3>
<p>Chọn tài sản có xu hướng di chuyển ngược chiều nhau. Khi chứng khoán giảm, <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">vàng</a> thường tăng. Khi USD yếu, <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">crypto</a> có thể mạnh lên. Điều này giúp danh mục ổn định hơn.</p>

<h2>Xây dựng danh mục cụ thể</h2>
<h3>Phần chứng khoán (40%)</h3>
<p>Chia đều giữa ETF chỉ số (VN30 ETF) và cổ phiếu Blue-chip riêng lẻ. Áp dụng <a href="${SITE}/bai-viet/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> để mua đều đặn. Tìm hiểu thêm tại <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">hướng dẫn chứng khoán</a>.</p>

<h3>Phần vàng (15%)</h3>
<p>Kết hợp vàng nhẫn 9999 tích lũy và ETF vàng cho linh hoạt. Xem <a href="${SITE}/bai-viet/xu-huong-gia-vang-chien-luoc-dau-tu">xu hướng giá vàng</a> để timing phù hợp.</p>

<h3>Phần crypto (10-15%)</h3>
<p>Tập trung 70% vào BTC/ETH, 30% vào altcoin chọn lọc. Xem <a href="${SITE}/bai-viet/rui-ro-dau-tu-crypto-cach-phong-tranh">quản lý rủi ro crypto</a> trước khi phân bổ.</p>

<h2>Tái cân bằng danh mục</h2>
<p>Mỗi quý (3 tháng), hãy kiểm tra lại tỷ lệ phân bổ và điều chỉnh về mức mục tiêu. Nếu chứng khoán tăng mạnh khiến tỷ trọng vượt 50%, hãy chốt lời một phần và chuyển sang vàng hoặc tiết kiệm.</p>
<ul>
<li>Tái cân bằng 3-6 tháng/lần</li>
<li>Không tái cân bằng quá thường xuyên (tốn phí giao dịch)</li>
<li>Điều chỉnh tỷ lệ khi có thay đổi lớn về mục tiêu cuộc sống</li>
</ul>

<p>Đa dạng hóa danh mục là nền tảng của <a href="${SITE}/bai-viet/dau-tu-la-gi-huong-dan-toan-dien">đầu tư thành công</a>. Tìm hiểu thêm kiến thức đầu tư toàn diện tại <a href="${SITE}">CachDauTu.com</a> — đồng hành cùng bạn trên hành trình tài chính.</p>`
    }
];

async function seed() {
    console.log('🌱 Tạo thêm 5 bài viết nháp (batch 2)...\n');

    // Sign in as admin
    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Đăng nhập thất bại:', authError.message); return; }
    console.log('✅ Đăng nhập admin thành công\n');

    for (let i = 0; i < posts.length; i++) {
        const p = posts[i];
        const { error, data } = await supabase.from('posts').insert({
            title: p.title,
            slug: p.slug,
            excerpt: p.excerpt,
            content: p.content,
            tags: p.tags,
            reading_time: p.reading_time,
            featured_image: p.featured_image,
            is_published: false,
            category_id: null,
        }).select('id').single();

        if (error) {
            console.log(`❌ Lỗi bài ${i + 6}: ${error.message}`);
        } else {
            console.log(`✅ ${i + 6}. ${p.title.substring(0, 50)}... (ID: ${data.id})`);
        }
    }

    console.log('\n🎉 Hoàn tất! Tổng cộng 10 bài viết nháp đã được tạo.');
}

seed();
