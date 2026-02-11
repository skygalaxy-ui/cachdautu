import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const SITE = 'https://cachdautu.com';
const img = (id, w = 1200, h = 630) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

// Unsplash image IDs
const imgs = {
    invest1: '1611974789855-9c2a0a7236a3', invest1b: '1579621970563-9ae2e01248e6',
    stock1: '1611974789855-9c2a0a7236a3', stock1b: '1535320903710-d946a44dc2d0',
    crypto1: '1518546305927-5a555bb7020d', crypto1b: '1622630998477-0d96834cf5db',
    gold1: '1610375461246-83df859df2d4', gold1b: '1624365168968-f283d506c6b0',
    compare: '1460925895917-afdab827c52f', compareb: '1551288049-bebda4e38f71',
    ta1: '1642790106117-e829e14a795f', ta1b: '1551288049-bebda4e38f71',
    dca1: '1633158829585-23ba8f7c8451', dca1b: '1579621970563-9ae2e01248e6',
    risk1: '1622630998477-0d96834cf5db', risk1b: '1518546305927-5a555bb7020d',
    goldtr: '1624365168968-f283d506c6b0', goldtrb: '1610375461246-83df859df2d4',
    port1: '1460925895917-afdab827c52f', port1b: '1633158829585-23ba8f7c8451',
};

const posts = [
    {
        title: 'Đầu tư là gì? Hướng dẫn toàn diện cho người mới bắt đầu 2025',
        slug: 'dau-tu-la-gi-huong-dan-toan-dien',
        excerpt: 'Tìm hiểu đầu tư là gì, các hình thức đầu tư phổ biến và cách bắt đầu đầu tư hiệu quả cho người mới. Hướng dẫn chi tiết từ A-Z.',
        tags: ['đầu tư', 'người mới', 'tài chính cá nhân', 'hướng dẫn đầu tư'],
        reading_time: '5 phút',
        featured_image: img(imgs.invest1),
        content: `<h2>Đầu tư là gì?</h2>
<p><strong>Đầu tư</strong> là việc sử dụng tiền bạc hoặc tài sản hiện tại để tạo ra lợi nhuận trong tương lai. Khác với tiết kiệm đơn thuần, đầu tư giúp tiền của bạn "làm việc" và sinh lời theo thời gian nhờ lãi kép và tăng trưởng giá trị tài sản.</p>
<p>Trong bối cảnh lạm phát liên tục gia tăng, việc chỉ gửi tiết kiệm ngân hàng không còn đủ để bảo toàn giá trị tài sản. Đó là lý do tại sao ngày càng nhiều người Việt Nam quan tâm đến các kênh đầu tư sinh lời hiệu quả hơn.</p>

<img src="${img(imgs.invest1b)}" alt="Các hình thức đầu tư phổ biến tại Việt Nam" />

<h2>Các hình thức đầu tư phổ biến tại Việt Nam</h2>
<p>Hiện nay có rất nhiều kênh đầu tư khác nhau, mỗi kênh có đặc điểm riêng về lợi nhuận và rủi ro. Dưới đây là bảng so sánh tổng quan:</p>

<table>
<thead><tr><th>Kênh đầu tư</th><th>Lợi nhuận kỳ vọng</th><th>Mức rủi ro</th><th>Vốn tối thiểu</th></tr></thead>
<tbody>
<tr><td>Gửi tiết kiệm</td><td>4-6%/năm</td><td>Rất thấp</td><td>1 triệu</td></tr>
<tr><td>Chứng khoán</td><td>15-30%/năm</td><td>Trung bình - Cao</td><td>5 triệu</td></tr>
<tr><td>Crypto</td><td>50-200%+/năm</td><td>Rất cao</td><td>500K</td></tr>
<tr><td>Vàng</td><td>8-15%/năm</td><td>Thấp - Trung bình</td><td>2 triệu</td></tr>
<tr><td>Bất động sản</td><td>10-20%/năm</td><td>Trung bình</td><td>500 triệu+</td></tr>
</tbody>
</table>

<h2>Tại sao nên bắt đầu đầu tư sớm?</h2>
<p>Sức mạnh của lãi kép là lý do quan trọng nhất để bạn bắt đầu đầu tư càng sớm càng tốt. Albert Einstein từng gọi lãi kép là "kỳ quan thứ 8 của thế giới". Nếu bạn đầu tư 5 triệu đồng mỗi tháng với lãi suất 15%/năm, sau 20 năm bạn sẽ có hơn 7 tỷ đồng.</p>
<p>Ngoài ra, đầu tư sớm giúp bạn:</p>
<ul>
<li>Xây dựng thói quen quản lý tài chính tốt</li>
<li>Tích lũy kinh nghiệm và kiến thức thị trường</li>
<li>Tạo nguồn thu nhập thụ động bền vững</li>
<li>Đảm bảo tài chính cho tương lai và nghỉ hưu</li>
</ul>

<h2>5 nguyên tắc đầu tư cơ bản cho người mới</h2>
<h3>1. Chỉ đầu tư tiền nhàn rỗi</h3>
<p>Không bao giờ đầu tư bằng tiền sinh hoạt, tiền dự phòng khẩn cấp hoặc tiền vay nợ. Hãy đảm bảo bạn đã có quỹ dự phòng ít nhất 3-6 tháng chi tiêu trước khi bắt đầu đầu tư.</p>

<h3>2. Đa dạng hóa danh mục</h3>
<p>Không "bỏ trứng vào một giỏ" — phân bổ vốn vào nhiều loại tài sản khác nhau để giảm thiểu rủi ro. Bạn có thể tham khảo <a href="${SITE}/bai-viet/xay-dung-danh-muc-dau-tu-da-dang-hoa">chiến lược đa dạng hóa danh mục</a> để hiểu rõ hơn.</p>

<h3>3. Tìm hiểu kỹ trước khi đầu tư</h3>
<p>Đừng đầu tư vào thứ bạn không hiểu. Hãy dành thời gian nghiên cứu, học hỏi và nắm vững kiến thức về kênh đầu tư bạn chọn. Trang <a href="${SITE}">CachDauTu.com</a> cung cấp nhiều bài viết hữu ích giúp bạn nâng cao kiến thức đầu tư.</p>

<h3>4. Kiên nhẫn và kỷ luật</h3>
<p>Đầu tư thành công đòi hỏi sự kiên nhẫn. Đừng bị dao động bởi biến động ngắn hạn của thị trường. Chiến lược <a href="${SITE}/bai-viet/chien-luoc-dca-binh-quan-gia">DCA (Dollar Cost Averaging)</a> là cách tiếp cận hiệu quả cho người mới.</p>

<h3>5. Quản lý rủi ro chặt chẽ</h3>
<p>Luôn đặt mức cắt lỗ và chốt lời rõ ràng. Không để cảm xúc chi phối các quyết định đầu tư, đặc biệt khi thị trường biến động mạnh. Tìm hiểu thêm về <a href="${SITE}/bai-viet/rui-ro-dau-tu-crypto-cach-phong-tranh">quản lý rủi ro</a> để bảo vệ tài sản của bạn.</p>

<h2>Bắt đầu từ đâu?</h2>
<p>Nếu bạn là người mới, hãy bắt đầu bằng việc tìm hiểu các kênh đầu tư cơ bản. Tùy thuộc vào khẩu vị rủi ro, bạn có thể chọn <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a>, <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">vàng</a> hay <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">crypto</a>.</p>
<p>Quan trọng nhất là hãy bắt đầu — dù với một khoản nhỏ. Thời gian và lãi kép sẽ là đồng minh lớn nhất của bạn trên hành trình đầu tư.</p>`
    },
    {
        title: 'Đầu tư chứng khoán cho người mới bắt đầu – Từ A đến Z',
        slug: 'dau-tu-chung-khoan-cho-nguoi-moi',
        excerpt: 'Hướng dẫn đầu tư chứng khoán chi tiết cho người mới: cách mở tài khoản, chọn cổ phiếu, phân tích và chiến lược giao dịch hiệu quả.',
        tags: ['chứng khoán', 'cổ phiếu', 'đầu tư chứng khoán', 'người mới'],
        reading_time: '6 phút',
        featured_image: img(imgs.stock1),
        content: `<h2>Tại sao nên đầu tư chứng khoán?</h2>
<p><strong>Đầu tư chứng khoán</strong> là một trong những kênh đầu tư phổ biến và hiệu quả nhất trên thế giới. Tại Việt Nam, thị trường chứng khoán đã phát triển mạnh mẽ trong những năm gần đây với hàng triệu tài khoản giao dịch mới được mở.</p>
<p>So với gửi tiết kiệm ngân hàng, chứng khoán mang lại tiềm năng lợi nhuận vượt trội — trung bình 15-30%/năm cho nhà đầu tư có chiến lược tốt. Đây cũng là kênh đầu tư minh bạch và được quản lý bởi Ủy ban Chứng khoán Nhà nước.</p>

<img src="${img(imgs.stock1b)}" alt="Biểu đồ phân tích chứng khoán Việt Nam" />

<h2>Cách mở tài khoản chứng khoán</h2>
<p>Để bắt đầu đầu tư chứng khoán, bạn cần mở tài khoản tại một công ty chứng khoán uy tín. Quy trình rất đơn giản và có thể thực hiện hoàn toàn online chỉ trong 5-10 phút.</p>
<h3>Các bước mở tài khoản:</h3>
<ol>
<li>Chọn công ty chứng khoán uy tín (SSI, VNDirect, TCBS, VPS...)</li>
<li>Đăng ký trực tuyến hoặc đến quầy giao dịch</li>
<li>Chuẩn bị CCCD/CMND còn hiệu lực</li>
<li>Xác minh danh tính bằng eKYC</li>
<li>Nạp tiền vào tài khoản và bắt đầu giao dịch</li>
</ol>

<h2>Các loại chứng khoán phổ biến</h2>
<table>
<thead><tr><th>Loại</th><th>Đặc điểm</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td>Cổ phiếu Blue-chip</td><td>Ổn định, thanh khoản cao</td><td>Người mới, ít rủi ro</td></tr>
<tr><td>Cổ phiếu tăng trưởng</td><td>Tiềm năng lợi nhuận cao</td><td>Chấp nhận rủi ro trung bình</td></tr>
<tr><td>Cổ phiếu penny</td><td>Biến động mạnh, rủi ro cao</td><td>Trader kinh nghiệm</td></tr>
<tr><td>ETF/Quỹ chỉ số</td><td>Đa dạng hóa tự động</td><td>Đầu tư dài hạn, thụ động</td></tr>
<tr><td>Trái phiếu</td><td>Thu nhập cố định, an toàn</td><td>Bảo toàn vốn</td></tr>
</tbody>
</table>

<h2>Cách chọn cổ phiếu tốt</h2>
<p>Chọn cổ phiếu là kỹ năng quan trọng nhất khi đầu tư chứng khoán. Có hai phương pháp phân tích chính:</p>

<h3>Phân tích cơ bản (FA)</h3>
<p>Đánh giá giá trị thực của doanh nghiệp thông qua báo cáo tài chính, doanh thu, lợi nhuận, tình hình nợ và triển vọng ngành. Các chỉ số quan trọng cần xem xét: P/E, P/B, ROE, EPS, cổ tức.</p>

<h3>Phân tích kỹ thuật (TA)</h3>
<p>Dựa trên biểu đồ giá và khối lượng giao dịch để dự đoán xu hướng. Tìm hiểu chi tiết về <a href="${SITE}/bai-viet/phan-tich-ky-thuat-chung-khoan">phân tích kỹ thuật trong chứng khoán</a> để nâng cao kỹ năng giao dịch.</p>

<h2>Chiến lược đầu tư cho người mới</h2>
<p>Nếu bạn mới bắt đầu, chiến lược an toàn nhất là:</p>
<ul>
<li><strong>Bắt đầu với ETF hoặc Blue-chip:</strong> VN30 ETF là lựa chọn tuyệt vời cho người mới</li>
<li><strong>Áp dụng DCA:</strong> Mua định kỳ mỗi tháng với số tiền cố định. Xem thêm <a href="${SITE}/bai-viet/chien-luoc-dca-binh-quan-gia">chiến lược DCA chi tiết</a></li>
<li><strong>Đầu tư dài hạn:</strong> Giữ cổ phiếu tốt ít nhất 1-3 năm</li>
<li><strong>Đa dạng hóa:</strong> Không tập trung quá 20% vốn vào một mã</li>
</ul>
<p>Bạn cũng nên kết hợp chứng khoán với các kênh đầu tư khác như <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">vàng</a> để cân bằng rủi ro. Xem thêm <a href="${SITE}/bai-viet/so-sanh-kenh-dau-tu-pho-bien">so sánh các kênh đầu tư</a> trên CachDauTu.com để có cái nhìn tổng quan.</p>

<h2>Sai lầm thường gặp cần tránh</h2>
<ul>
<li>Chạy theo đám đông và tin đồn "cổ phiếu nóng"</li>
<li>Không cắt lỗ khi giá giảm sâu</li>
<li>Sử dụng margin (đòn bẩy) khi chưa có kinh nghiệm</li>
<li>Giao dịch quá nhiều, tốn phí và mất tập trung</li>
</ul>
<p>Hãy kiên nhẫn học hỏi và thực hành. <a href="${SITE}">CachDauTu.com</a> sẽ đồng hành cùng bạn trên hành trình đầu tư chứng khoán thành công.</p>`
    },
    {
        title: 'Đầu tư Bitcoin và Crypto cho người mới – Toàn bộ kiến thức cần biết',
        slug: 'dau-tu-bitcoin-crypto-cho-nguoi-moi',
        excerpt: 'Hướng dẫn đầu tư Bitcoin và tiền điện tử cho người mới: cách mua crypto, chọn sàn giao dịch uy tín, và chiến lược đầu tư an toàn.',
        tags: ['crypto', 'bitcoin', 'tiền điện tử', 'đầu tư crypto', 'blockchain'],
        reading_time: '6 phút',
        featured_image: img(imgs.crypto1),
        content: `<h2>Bitcoin và Crypto là gì?</h2>
<p><strong>Bitcoin</strong> là đồng tiền điện tử đầu tiên trên thế giới, được tạo ra năm 2009 bởi Satoshi Nakamoto. <strong>Cryptocurrency (crypto)</strong> là thuật ngữ chung cho tất cả các loại tiền điện tử hoạt động trên nền tảng blockchain — một công nghệ sổ cái phân tán, minh bạch và không thể thay đổi.</p>
<p>Từ một tài sản bị hoài nghi, Bitcoin đã trở thành loại tài sản có mức tăng trưởng mạnh nhất trong lịch sử, với giá trị tăng từ vài cent lên hàng chục nghìn USD chỉ trong hơn một thập kỷ.</p>

<img src="${img(imgs.crypto1b)}" alt="Giao dịch Bitcoin và cryptocurrency" />

<h2>Các đồng crypto phổ biến</h2>
<table>
<thead><tr><th>Đồng coin</th><th>Ký hiệu</th><th>Đặc điểm nổi bật</th><th>Vốn hóa</th></tr></thead>
<tbody>
<tr><td>Bitcoin</td><td>BTC</td><td>Đồng tiền số đầu tiên, "vàng số"</td><td>#1</td></tr>
<tr><td>Ethereum</td><td>ETH</td><td>Nền tảng hợp đồng thông minh</td><td>#2</td></tr>
<tr><td>BNB</td><td>BNB</td><td>Token của sàn Binance</td><td>#4</td></tr>
<tr><td>Solana</td><td>SOL</td><td>Tốc độ giao dịch nhanh, phí thấp</td><td>#5</td></tr>
<tr><td>XRP</td><td>XRP</td><td>Thanh toán xuyên biên giới</td><td>#6</td></tr>
</tbody>
</table>

<h2>Cách bắt đầu đầu tư crypto</h2>
<h3>Bước 1: Chọn sàn giao dịch uy tín</h3>
<p>Lựa chọn sàn giao dịch là bước quan trọng đầu tiên. Các sàn phổ biến và đáng tin cậy cho người Việt Nam bao gồm Binance, OKX, Bybit và MEXC. Hãy ưu tiên sàn có lịch sử hoạt động lâu dài, bảo mật tốt và hỗ trợ tiếng Việt.</p>

<h3>Bước 2: Xác minh tài khoản (KYC)</h3>
<p>Hoàn tất xác minh danh tính để được giao dịch đầy đủ chức năng và nâng cao bảo mật tài khoản.</p>

<h3>Bước 3: Nạp tiền và mua crypto</h3>
<p>Bạn có thể nạp tiền qua P2P (mua trực tiếp bằng VND từ người bán), chuyển khoản ngân hàng, hoặc thẻ tín dụng. Mua P2P là cách phổ biến nhất tại Việt Nam.</p>

<h3>Bước 4: Bảo quản tài sản an toàn</h3>
<p>Sử dụng ví lạnh (hardware wallet) cho số lượng lớn, bật xác thực 2 lớp (2FA) và không chia sẻ seed phrase với bất kỳ ai.</p>

<h2>Chiến lược đầu tư crypto cho người mới</h2>
<ul>
<li><strong>HODL (Hold On for Dear Life):</strong> Mua và giữ dài hạn các đồng coin lớn như BTC, ETH</li>
<li><strong>DCA (Dollar Cost Averaging):</strong> Mua định kỳ mỗi tuần/tháng với số tiền cố định. Tham khảo <a href="${SITE}/bai-viet/chien-luoc-dca-binh-quan-gia">chi tiết chiến lược DCA</a></li>
<li><strong>Phân bổ hợp lý:</strong> 60-70% vào BTC/ETH, 20-30% vào altcoin tiềm năng, 10% cho các dự án mới</li>
</ul>

<h2>Rủi ro khi đầu tư crypto</h2>
<p>Crypto là thị trường có biến động cực kỳ cao. Giá có thể tăng 50% hoặc giảm 30% chỉ trong vài ngày. Điều này tạo ra cơ hội lớn nhưng cũng đi kèm rủi ro nghiêm trọng. Tìm hiểu kỹ về <a href="${SITE}/bai-viet/rui-ro-dau-tu-crypto-cach-phong-tranh">các rủi ro khi đầu tư crypto</a> trước khi tham gia.</p>
<p>Ngoài biến động giá, bạn cần cảnh giác với lừa đảo (scam), rug pull, hack sàn và các dự án không minh bạch. Chỉ đầu tư vào crypto với số tiền bạn sẵn sàng mất hoàn toàn.</p>
<p>Nếu muốn phân bổ rủi ro, hãy kết hợp crypto với các kênh an toàn hơn như <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">đầu tư vàng</a> hoặc <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a>. Theo dõi thêm kiến thức đầu tư tại <a href="${SITE}">CachDauTu.com</a>.</p>`
    },
    {
        title: 'Đầu tư vàng – Kênh trú ẩn an toàn trong mọi thời kỳ',
        slug: 'dau-tu-vang-kenh-tru-an-an-toan',
        excerpt: 'Tìm hiểu cách đầu tư vàng hiệu quả: vàng miếng, vàng nhẫn, vàng tài khoản. So sánh ưu nhược điểm và chiến lược đầu tư vàng thông minh.',
        tags: ['đầu tư vàng', 'vàng miếng', 'tài sản an toàn', 'vàng SJC'],
        reading_time: '5 phút',
        featured_image: img(imgs.gold1),
        content: `<h2>Vì sao vàng là kênh đầu tư được ưa chuộng?</h2>
<p><strong>Đầu tư vàng</strong> từ lâu đã được coi là kênh trú ẩn an toàn trong mọi giai đoạn kinh tế. Khi thị trường chứng khoán sụt giảm, lạm phát tăng cao hay bất ổn địa chính trị, giá vàng thường có xu hướng đi lên, giúp bảo toàn giá trị tài sản cho nhà đầu tư.</p>
<p>Tại Việt Nam, vàng không chỉ là kênh đầu tư mà còn mang ý nghĩa văn hóa sâu sắc. Người dân tin tưởng vào giá trị bền vững của vàng, nhất là trong bối cảnh VND có xu hướng mất giá so với USD theo thời gian.</p>

<img src="${img(imgs.gold1b)}" alt="Các hình thức đầu tư vàng phổ biến" />

<h2>Các hình thức đầu tư vàng</h2>
<table>
<thead><tr><th>Hình thức</th><th>Ưu điểm</th><th>Nhược điểm</th><th>Phù hợp</th></tr></thead>
<tbody>
<tr><td>Vàng miếng SJC</td><td>Thanh khoản cao, giá trị lớn</td><td>Chênh lệch mua/bán cao, cần lưu trữ</td><td>Đầu tư lớn, dài hạn</td></tr>
<tr><td>Vàng nhẫn 9999</td><td>Giá sát thế giới, linh hoạt</td><td>Chênh lệch thấp hơn SJC</td><td>Linh hoạt, số lượng nhỏ</td></tr>
<tr><td>Vàng tài khoản</td><td>Không cần lưu trữ vật lý</td><td>Phí giao dịch, rủi ro sàn</td><td>Giao dịch thường xuyên</td></tr>
<tr><td>ETF Vàng</td><td>Đa dạng hóa, minh bạch</td><td>Cần tài khoản chứng khoán</td><td>Nhà đầu tư hiện đại</td></tr>
</tbody>
</table>

<h2>Yếu tố ảnh hưởng đến giá vàng</h2>
<ul>
<li><strong>Chính sách tiền tệ của FED:</strong> Khi FED tăng lãi suất, vàng thường giảm và ngược lại</li>
<li><strong>Tỷ giá USD/VND:</strong> USD mạnh lên thì vàng thế giới giảm, nhưng vàng trong nước có thể tăng do tỷ giá</li>
<li><strong>Lạm phát:</strong> Lạm phát cao thúc đẩy nhu cầu mua vàng phòng tránh rủi ro</li>
<li><strong>Bất ổn geopolitics:</strong> Chiến tranh, xung đột, khủng hoảng kinh tế đẩy giá vàng tăng</li>
<li><strong>Cung cầu:</strong> Sản lượng khai thác, nhu cầu trang sức và ngân hàng trung ương mua vàng</li>
</ul>

<h2>Chiến lược đầu tư vàng thông minh</h2>
<h3>Mua tích lũy dần (DCA)</h3>
<p>Thay vì mua một lần lớn, hãy chia nhỏ và mua đều đặn hàng tháng. Chiến lược <a href="${SITE}/bai-viet/chien-luoc-dca-binh-quan-gia">DCA bình quân giá</a> giúp giảm rủi ro mua đỉnh.</p>

<h3>Phân bổ hợp lý trong danh mục</h3>
<p>Các chuyên gia khuyên nên phân bổ 10-20% tổng danh mục đầu tư vào vàng. Kết hợp với <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> và các tài sản khác để tối ưu lợi nhuận. Xem thêm <a href="${SITE}/bai-viet/xay-dung-danh-muc-dau-tu-da-dang-hoa">cách xây dựng danh mục đa dạng</a>.</p>

<h3>Theo dõi xu hướng dài hạn</h3>
<p>Vàng phù hợp với đầu tư trung và dài hạn (từ 1-5 năm). Đọc thêm <a href="${SITE}/bai-viet/xu-huong-gia-vang-chien-luoc-dau-tu">phân tích xu hướng giá vàng</a> để ra quyết định đúng thời điểm.</p>

<p>Vàng là một phần không thể thiếu trong <a href="${SITE}/bai-viet/dau-tu-la-gi-huong-dan-toan-dien">chiến lược đầu tư toàn diện</a>. Hãy theo dõi <a href="${SITE}">CachDauTu.com</a> để cập nhật diễn biến giá vàng và kiến thức đầu tư mới nhất.</p>`
    },
    {
        title: 'So sánh các kênh đầu tư phổ biến nhất 2025 – Nên chọn kênh nào?',
        slug: 'so-sanh-kenh-dau-tu-pho-bien',
        excerpt: 'So sánh chi tiết các kênh đầu tư phổ biến: chứng khoán, crypto, vàng, bất động sản, gửi tiết kiệm. Phân tích lợi nhuận, rủi ro giúp bạn lựa chọn.',
        tags: ['so sánh đầu tư', 'kênh đầu tư', 'chứng khoán', 'crypto', 'vàng'],
        reading_time: '6 phút',
        featured_image: img(imgs.compare),
        content: `<h2>Nên đầu tư vào kênh nào?</h2>
<p>Đây là câu hỏi phổ biến nhất của người mới bước vào thế giới đầu tư. Không có câu trả lời đúng cho tất cả, vì mỗi kênh đầu tư có đặc điểm riêng, phù hợp với mục tiêu, khẩu vị rủi ro và khả năng tài chính khác nhau.</p>
<p>Bài viết này sẽ <strong>so sánh các kênh đầu tư phổ biến</strong> nhất hiện nay, giúp bạn có cái nhìn toàn diện để đưa ra quyết định phù hợp.</p>

<img src="${img(imgs.compareb)}" alt="So sánh các kênh đầu tư 2025" />

<h2>Bảng so sánh chi tiết các kênh đầu tư</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>Chứng khoán</th><th>Crypto</th><th>Vàng</th><th>BĐS</th><th>Tiết kiệm</th></tr></thead>
<tbody>
<tr><td>Lợi nhuận TB/năm</td><td>15-30%</td><td>50-200%+</td><td>8-15%</td><td>10-20%</td><td>4-6%</td></tr>
<tr><td>Mức rủi ro</td><td>Trung bình</td><td>Rất cao</td><td>Thấp</td><td>Trung bình</td><td>Rất thấp</td></tr>
<tr><td>Vốn tối thiểu</td><td>5 triệu</td><td>500K</td><td>2 triệu</td><td>500 triệu+</td><td>1 triệu</td></tr>
<tr><td>Thanh khoản</td><td>Cao</td><td>Rất cao</td><td>Trung bình</td><td>Thấp</td><td>Cao</td></tr>
<tr><td>Thời gian giao dịch</td><td>T+2.5</td><td>24/7</td><td>Giờ hành chính</td><td>Vài tuần-tháng</td><td>Linh hoạt</td></tr>
<tr><td>Kiến thức cần có</td><td>Trung bình</td><td>Cao</td><td>Thấp</td><td>Cao</td><td>Không cần</td></tr>
<tr><td>Phù hợp dài hạn</td><td>✅ Rất tốt</td><td>⚠️ Chọn lọc</td><td>✅ Tốt</td><td>✅ Rất tốt</td><td>❌ Lạm phát</td></tr>
</tbody>
</table>

<h2>Phân tích từng kênh đầu tư</h2>

<h3>1. Chứng khoán – Cân bằng giữa lợi nhuận và rủi ro</h3>
<p>Chứng khoán là lựa chọn số 1 cho đa số nhà đầu tư nhờ tính minh bạch, thanh khoản tốt và tiềm năng lợi nhuận hấp dẫn. Với VN-Index, bạn có thể đầu tư vào hàng trăm doanh nghiệp hàng đầu Việt Nam. Tìm hiểu chi tiết tại <a href="${SITE}/bai-viet/dau-tu-chung-khoan-cho-nguoi-moi">hướng dẫn đầu tư chứng khoán</a>.</p>

<h3>2. Crypto – Lợi nhuận cao, rủi ro cực lớn</h3>
<p>Crypto mang lại tiềm năng sinh lời vượt trội nhưng biến động mạnh. Chỉ phù hợp với người chấp nhận rủi ro cao và có kiến thức về blockchain. Đọc thêm <a href="${SITE}/bai-viet/dau-tu-bitcoin-crypto-cho-nguoi-moi">đầu tư crypto cho người mới</a>.</p>

<h3>3. Vàng – Tấm khiên chống lạm phát</h3>
<p>Vàng là kênh trú ẩn an toàn, đặc biệt hiệu quả trong thời kỳ kinh tế bất ổn. Lợi nhuận không quá cao nhưng ổn định và bảo toàn vốn tốt. Xem <a href="${SITE}/bai-viet/dau-tu-vang-kenh-tru-an-an-toan">hướng dẫn đầu tư vàng</a>.</p>

<h3>4. Bất động sản – An toàn nhưng cần vốn lớn</h3>
<p>BĐS phù hợp đầu tư dài hạn và có vốn lớn. Nhược điểm lớn nhất là thanh khoản thấp và cần nhiều kiến thức pháp lý.</p>

<h3>5. Gửi tiết kiệm – An toàn tuyệt đối nhưng thấp</h3>
<p>Lãi suất tiết kiệm hiện tại chỉ 4-6%/năm, thấp hơn hoặc bằng lạm phát. Chỉ nên dùng cho quỹ dự phòng khẩn cấp.</p>

<h2>Lời khuyên phân bổ tài sản</h2>
<p>Thay vì chọn một kênh duy nhất, hãy <a href="${SITE}/bai-viet/xay-dung-danh-muc-dau-tu-da-dang-hoa">xây dựng danh mục đa dạng hóa</a>. Một danh mục mẫu cho người mới có thể là:</p>
<ul>
<li>40% Chứng khoán (ETF + Blue-chip)</li>
<li>15% Vàng</li>
<li>15% Crypto (BTC/ETH)</li>
<li>20% Tiết kiệm/Trái phiếu</li>
<li>10% Dự phòng</li>
</ul>
<p>Hãy điều chỉnh tỷ lệ phù hợp với khẩu vị rủi ro của bạn. Theo dõi <a href="${SITE}">CachDauTu.com</a> để được tư vấn chiến lược đầu tư phù hợp nhất.</p>`
    }
];

async function seed() {
    console.log('🌱 Bắt đầu tạo bài viết nháp...\n');

    // Sign in as admin
    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Đăng nhập thất bại:', authError.message); return; }
    console.log('✅ Đăng nhập admin thành công');

    // Get existing categories
    const { data: cats } = await supabase.from('categories').select('*');
    console.log(`📂 Tìm thấy ${cats?.length || 0} chuyên mục`);

    const catMap = {};
    if (cats) cats.forEach(c => { catMap[c.slug] = c.id; catMap[c.name.toLowerCase()] = c.id; });

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
            console.log(`❌ Lỗi bài ${i + 1}: ${error.message}`);
        } else {
            console.log(`✅ ${i + 1}. ${p.title.substring(0, 50)}... (ID: ${data.id})`);
        }
    }

    console.log('\n🎉 Hoàn tất batch 1! Sẽ tạo thêm 5 bài nữa...');
}

seed();
