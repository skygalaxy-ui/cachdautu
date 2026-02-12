const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const updates = [
    {
        id: '959bfde0-9c08-40ea-a731-2bd45bf3bdbf',
        content: `<h2>DCA là gì? Vì sao Warren Buffett khuyên dùng?</h2>
<p><strong>DCA (Dollar Cost Averaging)</strong> hay cách gọi tiếng Việt là "bình quân giá" — là chiến lược đầu tư mà bạn chia nhỏ vốn và mua đều đặn theo chu kỳ cố định (hàng tuần, hàng tháng), bất kể giá thị trường lên hay xuống. Đây là chiến lược được Warren Buffett — nhà đầu tư huyền thoại — khuyên dùng cho nhà đầu tư cá nhân.</p>
<p>Nguyên lý hoạt động rất đơn giản nhưng cực kỳ hiệu quả: khi giá thấp, số tiền cố định của bạn mua được nhiều đơn vị hơn; khi giá cao, bạn mua được ít hơn. Kết quả là giá mua trung bình của bạn sẽ được "san phẳng", giảm thiểu rủi ro mua đỉnh — nỗi sợ lớn nhất của hầu hết nhà đầu tư.</p>

<img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8451?w=1200&h=630&fit=crop&q=80" alt="Chiến lược DCA bình quân giá đầu tư" />

<h2>DCA hoạt động như thế nào? Ví dụ thực tế</h2>
<p>Hãy tưởng tượng bạn có 60 triệu đồng muốn đầu tư vào ETF VN30. Bạn có hai lựa chọn: bỏ hết 60 triệu một lần (lump sum), hoặc chia thành 12 lần, mỗi tháng 5 triệu (DCA).</p>

<table>
<thead><tr><th>Tháng</th><th>Giá ETF</th><th>DCA mua được (5tr/tháng)</th><th>Lump sum (60tr mua tháng 1)</th></tr></thead>
<tbody>
<tr><td>Tháng 1</td><td>20,000đ</td><td>250 chứng chỉ</td><td>3,000 chứng chỉ</td></tr>
<tr><td>Tháng 2</td><td>18,000đ</td><td>278 chứng chỉ</td><td>—</td></tr>
<tr><td>Tháng 3</td><td>15,000đ</td><td>333 chứng chỉ</td><td>—</td></tr>
<tr><td>Tháng 4</td><td>16,000đ</td><td>312 chứng chỉ</td><td>—</td></tr>
<tr><td>Tháng 5</td><td>19,000đ</td><td>263 chứng chỉ</td><td>—</td></tr>
<tr><td>Tháng 6</td><td>22,000đ</td><td>227 chứng chỉ</td><td>—</td></tr>
</tbody>
</table>

<p>Sau 6 tháng, DCA mua được tổng 1,663 chứng chỉ với giá trung bình ~18,040đ/chứng chỉ. Trong khi lump sum chỉ có 3,000 chứng chỉ tại giá 20,000đ. Ở thời điểm tháng 6 (giá 22,000đ), DCA lãi ~22%, lump sum chỉ lãi 10%. Đây là sức mạnh của việc "mua thêm khi giá giảm" một cách tự động.</p>
<p>Tất nhiên, nếu thị trường chỉ tăng liên tục, lump sum sẽ có lợi hơn. Nhưng thực tế thị trường luôn có biến động — và DCA bảo vệ bạn trước kịch bản xấu nhất: mua toàn bộ ở đỉnh.</p>

<h2>DCA phù hợp với kênh đầu tư nào?</h2>
<p>DCA không phù hợp với tất cả loại tài sản. Chiến lược này hiệu quả nhất với các tài sản có xu hướng tăng trong dài hạn nhưng biến động ngắn hạn lớn.</p>
<p><strong>ETF chỉ số (FUEVFVND, E1VFVN30):</strong> Đây là ứng dụng hoàn hảo nhất của DCA. VN30 đại diện cho 30 doanh nghiệp lớn nhất, có xu hướng tăng dài hạn. Mua ETF đều đặn mỗi tháng là cách đầu tư "lười" nhưng hiệu quả nhất. Tìm hiểu thêm tại <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">hướng dẫn đầu tư chứng khoán</a>.</p>
<p><strong>Bitcoin:</strong> Với biến động 20-50% là chuyện bình thường, DCA giúp bạn tránh "mua đỉnh" BTC. Tích lũy đều đặn mỗi tuần hoặc mỗi tháng — nhiều sàn hỗ trợ mua tự động (auto-buy). Chi tiết tại <a href="/blog/crypto/dau-tu-bitcoin-crypto-cho-nguoi-moi">bài viết về crypto</a>.</p>
<p><strong>Vàng:</strong> Mua vàng nhẫn 1-2 chỉ mỗi tháng là hình thức DCA truyền thống mà nhiều người Việt đã làm từ lâu. Tìm hiểu thêm tại <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">hướng dẫn đầu tư vàng</a>.</p>

<h2>3 sai lầm phổ biến khi áp dụng DCA</h2>
<p><strong>Sai lầm 1: Ngừng DCA khi thị trường giảm.</strong> Đây là lúc DCA phát huy sức mạnh nhất — bạn đang mua được nhiều hơn với cùng số tiền! Nhiều người hoảng sợ và dừng mua khi giá giảm, bỏ lỡ cơ hội tốt nhất. Hãy nhớ: khi siêu thị giảm giá 30%, bạn mua nhiều hơn chứ không ngừng mua.</p>
<p><strong>Sai lầm 2: Thay đổi số tiền DCA liên tục.</strong> Bản chất DCA là "tự động" — đều đặn cùng số tiền. Nếu bạn cứ thay đổi số tiền tùy cảm xúc (thị trường tốt thì mua nhiều, xấu thì mua ít), bạn đang phá vỡ nguyên lý bình quân giá.</p>
<p><strong>Sai lầm 3: DCA vào tài sản kém chất lượng.</strong> DCA chỉ hiệu quả khi tài sản có xu hướng tăng dài hạn. Nếu bạn DCA vào một cổ phiếu penny đang trên đà phá sản, bạn chỉ đang "bỏ thêm tiền vào hố đen". Hãy DCA vào ETF, blue-chip, hoặc BTC/ETH — không phải altcoin hay cổ phiếu rác.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Nên DCA hàng tuần hay hàng tháng?</h3>
<p>Nghiên cứu cho thấy sự khác biệt giữa DCA tuần và tháng là rất nhỏ trong dài hạn. Chọn tần suất phù hợp với lịch nhận lương của bạn — hầu hết người Việt chọn DCA vào đầu tháng sau khi nhận lương.</p>

<h3>DCA có tốt hơn đầu tư một lần không?</h3>
<p>Về mặt toán học, nếu thị trường luôn đi lên, đầu tư một lần sẽ cho lợi nhuận cao hơn (vì tiền của bạn "làm việc" sớm hơn). Tuy nhiên, DCA giúp giảm rủi ro tâm lý và biến động. Đối với người mới, DCA là lựa chọn an toàn hơn nhiều.</p>`
    },
    {
        id: '10828612-3535-47bf-b7c5-bcc5035e6838',
        content: `<h2>Thị trường crypto đầy rẫy rủi ro — nhưng có thể phòng tránh</h2>
<p>Nếu bạn đang cân nhắc đầu tư vào tiền mã hóa, điều quan trọng nhất cần biết không phải là "đồng nào sẽ tăng x100" mà là "làm sao để không mất tiền". Thống kê cho thấy hơn 80% nhà đầu tư crypto thua lỗ, và nguyên nhân chính không phải do thị trường tệ — mà vì họ không hiểu rõ và không chuẩn bị cho các rủi ro.</p>
<p>Bài viết này phân tích chi tiết 6 loại rủi ro phổ biến nhất và cách phòng tránh thực tế. Nếu bạn mới bắt đầu tìm hiểu crypto, hãy đọc <a href="/blog/crypto/dau-tu-bitcoin-crypto-cho-nguoi-moi">hướng dẫn đầu tư crypto cho người mới</a> trước khi tiếp tục.</p>

<img src="https://images.unsplash.com/photo-1622630998477-0d96834cf5db?w=1200&h=630&fit=crop&q=80" alt="Rủi ro đầu tư tiền mã hóa crypto" />

<h2>1. Rủi ro biến động giá — "Kẻ thù" số 1</h2>
<p>Biến động giá (volatility) là đặc trưng định nghĩa thị trường crypto. Bitcoin có thể tăng 20% trong tuần này rồi giảm 30% tuần sau — và đây được coi là "bình thường". Nhiều altcoin còn biến động kinh hoàng hơn, có thể mất 50-90% giá trị chỉ trong vài ngày.</p>
<p>Năm 2022 là minh chứng rõ ràng nhất: Bitcoin giảm từ 69,000 USD xuống 16,000 USD (giảm 77%), Ethereum từ 4,800 USD xuống 900 USD (giảm 81%). Nhiều nhà đầu tư đã bán hoảng loạn ở đáy, mất một phần lớn tài sản.</p>
<p><strong>Cách phòng tránh:</strong> Áp dụng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> thay vì mua một lần. Chỉ đầu tư số tiền bạn sẵn sàng mất hoàn toàn — KHÔNG dùng tiền sinh hoạt, tiền học, hay tiền vay. Đặt tâm lý chấp nhận từ đầu: tài khoản có thể giảm 50% bất cứ lúc nào.</p>

<h2>2. Rủi ro lừa đảo — Rug Pull và Ponzi</h2>
<p>Đây là loại rủi ro nguy hiểm nhất vì một khi dính phải, bạn mất 100% không thể phục hồi. Rug pull xảy ra khi đội ngũ phát triển rút hết thanh khoản và "biến mất" — token trở thành giấy lộn. Theo thống kê, hàng nghìn dự án rug pull xảy ra mỗi năm.</p>
<p>Mô hình Ponzi trong crypto thường xuất hiện dưới dạng "staking" hay "yield farming" với lãi suất bất thường (30-50%/tháng). Tiền lãi của người cũ được trả bằng tiền gốc của người mới, cho đến khi hệ thống sụp đổ. Bitconnect, OneCoin, và gần đây là Terra/LUNA là những bài học đau đớn.</p>
<p><strong>Cách phòng tránh:</strong> Không đầu tư vào dự án hứa lãi suất "quá đẹp" (trên 20%/tháng gần như chắc chắn là lừa đảo). Kiểm tra đội ngũ phát triển — nếu ẩn danh hoàn toàn thì rủi ro rất cao. Chỉ mua trên sàn uy tín (Binance, OKX). Với DeFi, ưu tiên giao thức đã qua audit bảo mật.</p>

<h2>3. Rủi ro bảo mật — Hacker và mất Private Key</h2>
<p>Khác với ngân hàng truyền thống, crypto không có bộ phận "hỗ trợ khách hàng" để giúp bạn lấy lại tài sản khi bị hack hoặc mất mật khẩu. Nếu bạn mất private key hoặc seed phrase, tiền sẽ mất vĩnh viễn — không có cách nào khôi phục.</p>
<p>Các vụ hack lớn trong lịch sử crypto đã gây thiệt hại hàng tỷ USD: Mt. Gox (2014, mất 850,000 BTC), Ronin Network (2022, mất $625 triệu), FTX (2022, sụp đổ hoàn toàn). Cá nhân nhà đầu tư cũng thường bị lừa qua phishing, keylogger, hoặc fake website.</p>
<p><strong>Cách phòng tránh:</strong> Sử dụng ví cứng (Ledger, Trezor) cho số tiền lớn. Bật 2FA (xác thực 2 bước) trên tất cả tài khoản sàn. KHÔNG bao giờ chia sẻ seed phrase với bất kỳ ai. Kiểm tra kỹ URL trước khi đăng nhập — phishing website rất tinh vi.</p>

<h2>4. Rủi ro pháp lý</h2>
<p>Khung pháp lý về crypto tại Việt Nam và nhiều quốc gia vẫn chưa hoàn chỉnh. Tại Việt Nam, crypto không bị cấm sở hữu nhưng không được công nhận là phương tiện thanh toán. Chính phủ đang trong quá trình xây dựng quy định, và bất kỳ thay đổi nào cũng có thể ảnh hưởng đến giá trị và tính hợp pháp của crypto trong tương lai.</p>
<p><strong>Cách phòng tránh:</strong> Theo dõi tin tức pháp lý thường xuyên. Không sử dụng crypto cho mục đích bất hợp pháp. Cân nhắc kê khai thuế thu nhập từ crypto (dù chưa bắt buộc) để tránh rắc rối về sau.</p>

<h2>Nguyên tắc vàng: Đa dạng hóa</h2>
<p>Quy tắc quan trọng nhất trong quản lý rủi ro crypto là KHÔNG bỏ tất cả vào một giỏ. Crypto chỉ nên chiếm 5-15% tổng danh mục đầu tư của bạn. Phần còn lại nên được phân bổ vào <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a>, <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">vàng</a>, và tiết kiệm. Tìm hiểu thêm về <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">cách xây dựng danh mục đa dạng hóa</a>.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Crypto có an toàn không?</h3>
<p>Bản thân công nghệ blockchain rất an toàn — Bitcoin chưa từng bị hack. Rủi ro nằm ở lỗi con người (mất key, bị lừa), sàn giao dịch (phá sản, hack), và biến động giá. Nếu bạn hiểu và phòng tránh các rủi ro này, crypto có thể là kênh đầu tư hiệu quả.</p>

<h3>Nên đầu tư bao nhiêu vào crypto?</h3>
<p>Quy tắc an toàn: không quá 5-10% tổng tài sản đầu tư. Đối với người mới, bắt đầu với 1-2 triệu đồng để làm quen trước khi tăng dần.</p>`
    },
    {
        id: '3fce249e-648c-411c-ab69-a77af0dc9941',
        content: `<h2>Vàng trong năm 2026: Vùng giá mới, cơ hội mới</h2>
<p>Năm 2025 đánh dấu một cột mốc lịch sử khi giá vàng thế giới vượt mốc 2,800 USD/ounce, thiết lập đỉnh cao mới. Tại Việt Nam, vàng SJC đã chạm mốc 90 triệu đồng/lượng — con số mà 5 năm trước không ai dám nghĩ tới. Vậy câu hỏi đặt ra cho năm 2026: liệu vàng còn có thể tăng tiếp?</p>
<p>Để trả lời, chúng ta cần nhìn vào bức tranh kinh tế vĩ mô toàn cầu. Nhiều yếu tố đang hỗ trợ giá vàng tiếp tục neo ở vùng cao: căng thẳng địa chính trị gia tăng, các ngân hàng trung ương mua vàng kỷ lục, lạm phát tuy đã hạ nhiệt nhưng vẫn trên mục tiêu ở nhiều nền kinh tế lớn.</p>

<img src="https://images.unsplash.com/photo-1610375461246-83df859df2d4?w=1200&h=630&fit=crop&q=80" alt="Xu hướng giá vàng 2026" />

<h2>3 yếu tố chính tác động đến giá vàng 2026</h2>

<h3>1. Chính sách lãi suất của Fed</h3>
<p>Vàng có mối quan hệ nghịch đảo với lãi suất: khi lãi suất giảm, vàng có xu hướng tăng vì chi phí cơ hội nắm giữ vàng (không sinh lãi) giảm đi. Với việc Fed bắt đầu chu kỳ cắt giảm lãi suất từ cuối 2024, nhiều chuyên gia dự báo giá vàng sẽ được hỗ trợ mạnh trong 2026.</p>
<p>Tuy nhiên, cần lưu ý rằng tốc độ và quy mô cắt giảm lãi suất phụ thuộc vào dữ liệu lạm phát. Nếu lạm phát bất ngờ tăng trở lại, Fed có thể tạm dừng giảm lãi suất — tạo áp lực ngắn hạn lên giá vàng.</p>

<h3>2. Nhu cầu từ ngân hàng trung ương</h3>
<p>Năm 2023-2024, các ngân hàng trung ương toàn cầu (đặc biệt Trung Quốc, Ấn Độ, Thổ Nhĩ Kỳ) đã mua hơn 1,000 tấn vàng/năm — mức cao nhất trong nhiều thập kỷ. Xu hướng "phi USD hóa" dự trữ ngoại hối đang thúc đẩy nhu cầu vàng dài hạn. Nhiều dự báo cho thấy xu hướng này sẽ tiếp tục trong 2026 và xa hơn.</p>

<h3>3. Bất ổn địa chính trị</h3>
<p>Xung đột kéo dài tại nhiều khu vực, căng thẳng thương mại Mỹ-Trung, và bất ổn chính trị tại một số quốc gia lớn đã biến vàng thành "kênh trú ẩn" không thể thiếu trong danh mục đầu tư toàn cầu. Vàng thường tăng giá mạnh nhất trong những giai đoạn thế giới bất ổn.</p>

<h2>Chiến lược đầu tư vàng thông minh cho 2026</h2>
<p>Với giá vàng ở vùng cao lịch sử, việc mua một lần lớn có rủi ro đáng kể. Thay vào đó, chiến lược an toàn nhất là DCA — mua đều đặn hàng tháng. Tìm hiểu chi tiết <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> để áp dụng hiệu quả.</p>
<p>Bên cạnh đó, theo dõi các đợt điều chỉnh giảm 3-5% để tăng mua. Đây là cơ hội tích lũy ở mức giá tốt hơn. Sử dụng <a href="/blog/chung-khoan/phan-tich-ky-thuat-chung-khoan">phân tích kỹ thuật</a> để xác định điểm mua hợp lý.</p>
<p>Vàng nên chiếm 15-25% tổng danh mục đầu tư trong bối cảnh hiện tại. Kết hợp với <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> và các tài sản khác để tối ưu lợi nhuận. Xem <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">chiến lược đa dạng hóa</a> để tham khảo.</p>

<h2>Dự báo giá vàng 2026</h2>
<table>
<thead><tr><th>Tổ chức/Chuyên gia</th><th>Dự báo giá vàng 2026</th><th>Cơ sở nhận định</th></tr></thead>
<tbody>
<tr><td>Goldman Sachs</td><td>2,900 - 3,100 USD/oz</td><td>Fed cắt giảm lãi suất, nhu cầu NHTW</td></tr>
<tr><td>J.P. Morgan</td><td>2,800 - 3,000 USD/oz</td><td>Bất ổn địa chính trị kéo dài</td></tr>
<tr><td>World Gold Council</td><td>Tích cực</td><td>Nhu cầu đầu tư và trang sức tăng</td></tr>
</tbody>
</table>

<p>Lưu ý: tất cả dự báo chỉ mang tính tham khảo. Giá vàng phụ thuộc vào rất nhiều yếu tố khó đoán trước. Điều quan trọng nhất không phải dự đoán đúng giá, mà là xây dựng chiến lược phù hợp với mục tiêu tài chính của bạn. Để hiểu rõ hơn cách đầu tư vàng, hãy đọc <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">hướng dẫn đầu tư vàng chi tiết</a>.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Giá vàng đang ở đỉnh, có nên mua vào?</h3>
<p>Đỉnh hiện tại có thể là đáy của tương lai. Thay vì cố đoán đỉnh, hãy DCA đều đặn hàng tháng. Lịch sử 50 năm qua cho thấy vàng luôn phá đỉnh cũ và tạo đỉnh mới trong dài hạn.</p>

<h3>Nên mua vàng SJC hay vàng nhẫn?</h3>
<p>Vàng nhẫn 9999 đang được ưa chuộng hơn vì chênh lệch mua-bán nhỏ hơn SJC. Vàng SJC có tính thanh khoản cao ở Việt Nam nhưng giá thường cao hơn giá thế giới 10-15 triệu/lượng. Với mục đích đầu tư, vàng nhẫn là lựa chọn hiệu quả hơn.</p>`
    },
    {
        id: '77b9f910-6a34-43e6-805e-eb18c154ca9c',
        content: `<h2>Đa dạng hóa — Nguyên tắc vàng được cả Warren Buffett và Ray Dalio công nhận</h2>
<p>"Đa dạng hóa là sự bảo vệ duy nhất chống lại sự thiếu hiểu biết" — đó là cách Warren Buffett diễn tả tầm quan trọng của việc không bỏ tất cả trứng vào một giỏ. Ray Dalio, người sáng lập quỹ đầu tư lớn nhất thế giới Bridgewater Associates, còn gọi đa dạng hóa là "Holy Grail" (viên ngọc thiêng) của đầu tư.</p>
<p>Nguyên lý rất đơn giản: khi bạn sở hữu nhiều loại tài sản có xu hướng di chuyển ngược chiều nhau, rủi ro tổng thể sẽ giảm mà lợi nhuận kỳ vọng vẫn được duy trì. Khi chứng khoán giảm, vàng thường tăng. Khi USD yếu, crypto có thể mạnh lên. Sự "bù trừ" này giúp danh mục của bạn ổn định hơn nhiều so với chỉ đầu tư vào một kênh duy nhất.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&q=80" alt="Đa dạng hóa danh mục đầu tư" />

<h2>Mẫu danh mục đầu tư theo mức rủi ro</h2>
<p>Không có một danh mục "hoàn hảo" chung cho tất cả mọi người. Tỷ lệ phân bổ phụ thuộc vào tuổi tác, thu nhập, mục tiêu tài chính và đặc biệt là khẩu vị rủi ro. Dưới đây là 3 mẫu danh mục phổ biến mà bạn có thể tham khảo:</p>

<table>
<thead><tr><th>Loại tài sản</th><th>Thận trọng (Rủi ro thấp)</th><th>Cân bằng (Trung bình)</th><th>Tích cực (Rủi ro cao)</th></tr></thead>
<tbody>
<tr><td>Chứng khoán / ETF</td><td>30%</td><td>45%</td><td>60%</td></tr>
<tr><td>Trái phiếu / Tiết kiệm</td><td>40%</td><td>20%</td><td>5%</td></tr>
<tr><td>Vàng</td><td>20%</td><td>15%</td><td>10%</td></tr>
<tr><td>Crypto</td><td>0%</td><td>10%</td><td>20%</td></tr>
<tr><td>Quỹ khẩn cấp</td><td>10%</td><td>10%</td><td>5%</td></tr>
</tbody>
</table>

<h3>Danh mục "Thận trọng" — Phù hợp với ai?</h3>
<p>Danh mục này ưu tiên bảo toàn vốn, phù hợp với người trên 45 tuổi, đang gần nghỉ hưu, hoặc đơn giản là không muốn mất ngủ vì biến động thị trường. Lợi nhuận kỳ vọng khoảng 7-10%/năm — không cao nhưng rất ổn định. Phần lớn tài sản nằm ở trái phiếu, tiết kiệm và vàng — những kênh ít biến động.</p>

<h3>Danh mục "Cân bằng" — Phổ biến nhất</h3>
<p>Đây là lựa chọn phù hợp với đa số nhà đầu tư (25-45 tuổi). Lợi nhuận kỳ vọng 10-15%/năm với mức biến động chấp nhận được. Chứng khoán chiếm vai trò cốt lõi (45%), được "bảo hiểm" bởi vàng (15%) và trái phiếu (20%). Crypto ở mức 10% vừa đủ để tận dụng tiềm năng tăng trưởng mà không gây rủi ro quá lớn.</p>

<h3>Danh mục "Tích cực" — Cho người trẻ, chấp nhận rủi ro</h3>
<p>Phù hợp với người dưới 30 tuổi, có thu nhập ổn định và sẵn sàng chịu biến động mạnh. Lợi nhuận kỳ vọng 15-25%/năm nhưng tài khoản có thể giảm 20-30% trong ngắn hạn. Chứng khoán (60%) và crypto (20%) chiếm vai trò chính.</p>

<h2>Cách thực hiện đa dạng hóa trong thực tế</h2>
<p>Lý thuyết nghe đơn giản, nhưng thực thi mới là thách thức. Dưới đây là hướng dẫn cụ thể cho từng kênh:</p>
<p><strong>Chứng khoán:</strong> Mua ETF VN30 (FUEVFVND) đều đặn mỗi tháng — đây là cách đa dạng hóa tự động trong 30 blue-chip lớn nhất. Áp dụng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> để giảm rủi ro timing. Tìm hiểu thêm tại <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">hướng dẫn chứng khoán cho người mới</a>.</p>
<p><strong>Vàng:</strong> Mua vàng nhẫn 9999 tích lũy hàng tháng, hoặc ETF vàng cho sự linh hoạt. Tham khảo <a href="/blog/kien-thuc-dau-tu/xu-huong-gia-vang-chien-luoc-dau-tu">xu hướng giá vàng</a> để chọn thời điểm phù hợp.</p>
<p><strong>Crypto:</strong> Tập trung 70% vào BTC/ETH, 30% vào altcoin chọn lọc. Đọc kỹ <a href="/blog/crypto/rui-ro-dau-tu-crypto-cach-phong-tranh">quản lý rủi ro crypto</a> trước khi phân bổ.</p>

<h2>Rebalance — Bước quan trọng hay bị bỏ quên</h2>
<p>Sau 6-12 tháng, tỷ lệ phân bổ sẽ thay đổi do các kênh tăng/giảm khác nhau. Ví dụ: bạn bắt đầu với 50% chứng khoán, nhưng sau khi chứng khoán tăng 30%, nó chiếm 58% danh mục. Lúc này bạn cần "rebalance" — bán bớt chứng khoán và mua thêm kênh khác để đưa tỷ lệ về đúng mục tiêu ban đầu.</p>
<p>Rebalance nghe đơn giản nhưng rất khó thực hiện về mặt tâm lý: bạn phải bán tài sản đang tăng mạnh (ai cũng muốn giữ thêm) và mua tài sản đang yếu (ai cũng sợ). Nhưng đây chính là bí quyết "mua thấp, bán cao" một cách có hệ thống.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Đa dạng hóa quá nhiều có tốt không?</h3>
<p>Không. "Quá đa dạng hóa" (over-diversification) — sở hữu quá nhiều tài sản — sẽ pha loãng lợi nhuận và khiến bạn khó quản lý. Một danh mục lý tưởng nên có 3-5 loại tài sản chính, mỗi loại chiếm ít nhất 10% để có ý nghĩa.</p>

<h3>Bao lâu nên rebalance danh mục?</h3>
<p>Mỗi 6-12 tháng, hoặc khi tỷ lệ một kênh chênh lệch quá 5-10% so với mục tiêu. Không cần rebalance quá thường xuyên vì sẽ tốn phí giao dịch và thuế.</p>`
    },
    {
        id: 'f5ef1cc5-3cc7-46e1-ac4e-7278a67402a8',
        content: `<h2>Vàng — Kênh đầu tư có lịch sử 5,000 năm</h2>
<p>Từ thời Ai Cập cổ đại đến nhà đầu tư hiện đại, vàng luôn giữ vị thế đặc biệt trong danh mục tài sản. Khác với cổ phiếu có thể phá sản, khác với tiền pháp định có thể mất giá do lạm phát, vàng là tài sản "bất diệt" — giá trị của nó không bao giờ trở về 0. Đó là lý do nó được gọi là "kênh trú ẩn an toàn" trong thế giới tài chính.</p>
<p>Tại Việt Nam, đầu tư vàng đã ăn sâu vào văn hóa. Nhiều gia đình có thói quen mua vàng tích trữ, đặc biệt vào mỗi dịp Thần Tài (ngày 10 tháng Giêng) hay khi có tiền nhàn rỗi. Tuy nhiên, để đầu tư vàng thực sự hiệu quả, bạn cần hiểu rõ các hình thức, ưu nhược điểm và chiến lược phù hợp.</p>

<img src="https://images.unsplash.com/photo-1624365168968-f283d506c6b0?w=1200&h=630&fit=crop&q=80" alt="Đầu tư vàng Việt Nam 2026" />

<h2>Các hình thức đầu tư vàng tại Việt Nam</h2>
<p>Không phải cứ "mua vàng" là giống nhau. Mỗi hình thức có đặc điểm riêng về phí, thanh khoản và rủi ro. Hiểu rõ sự khác biệt này là bước đầu tiên để chọn hình thức phù hợp.</p>

<table>
<thead><tr><th>Hình thức</th><th>Ưu điểm</th><th>Nhược điểm</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td>Vàng nhẫn 9999</td><td>Chênh lệch mua-bán nhỏ, dễ mua bán</td><td>Cần bảo quản, rủi ro mất cắp</td><td>Đầu tư trung-dài hạn</td></tr>
<tr><td>Vàng SJC</td><td>Thanh khoản cao nhất VN</td><td>Chênh lệch mua-bán lớn, giá cao hơn thế giới</td><td>Tích lũy, trang sức</td></tr>
<tr><td>Vàng tài khoản</td><td>Tiện lợi, mua bán online</td><td>Phụ thuộc vào ngân hàng/nền tảng</td><td>Giao dịch linh hoạt</td></tr>
<tr><td>ETF vàng quốc tế</td><td>Phí thấp, không cần bảo quản</td><td>Cần tài khoản chứng khoán quốc tế</td><td>Đầu tư dài hạn</td></tr>
</tbody>
</table>

<h2>Vàng nhẫn 9999 — Lựa chọn tối ưu cho người Việt</h2>
<p>Trong các hình thức trên, vàng nhẫn 9999 đang là lựa chọn được ưa chuộng nhất cho mục đích đầu tư. Lý do chính là chênh lệch giá mua-bán (spread) của vàng nhẫn nhỏ hơn nhiều so với vàng SJC — thường chỉ khoảng 300,000-500,000 đ/lượng, trong khi SJC có thể chênh 1-2 triệu.</p>
<p>Ngoài ra, giá vàng nhẫn bám sát giá vàng thế giới hơn, không bị "méo" bởi yếu tố cung cầu nội địa như SJC. Các thương hiệu vàng nhẫn uy tín bao gồm: Bảo Tín Minh Châu, PNJ, SJC nhẫn, và DOJI. Bạn có thể mua tại tiệm vàng hoặc qua ứng dụng di động của ngân hàng.</p>

<h2>Khi nào nên mua vàng?</h2>
<p>Câu hỏi "khi nào mua vàng" thực ra ít quan trọng hơn bạn nghĩ. Nếu bạn áp dụng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> — mua 1-2 chỉ vàng nhẫn đều đặn mỗi tháng — thì thời điểm mua không còn là yếu tố quyết định. Giá trung bình sẽ tự động được "san phẳng" qua thời gian.</p>
<p>Tuy nhiên, nếu bạn muốn tối ưu hóa giá mua, hãy chú ý các giai đoạn: giá vàng thường điều chỉnh giảm sau các đợt tăng mạnh (correction), hoặc khi Fed tăng lãi suất. Theo dõi <a href="/blog/kien-thuc-dau-tu/xu-huong-gia-vang-chien-luoc-dau-tu">phân tích xu hướng giá vàng</a> để tham khảo.</p>

<h2>Vàng trong danh mục đầu tư tổng thể</h2>
<p>Các chuyên gia tài chính khuyên nên giữ 10-20% tổng danh mục đầu tư ở vàng. Tỷ lệ này tăng lên 20-25% trong giai đoạn kinh tế bất ổn, và giảm xuống 10% khi mọi thứ ổn định. Vàng đóng vai trò "bảo hiểm" — không phải để kiếm lợi nhuận cao, mà để bảo vệ tổng giá trị danh mục khi các kênh khác giảm.</p>
<p>Kết hợp vàng với <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> và <a href="/blog/crypto/dau-tu-bitcoin-crypto-cho-nguoi-moi">crypto</a> để tối ưu lợi nhuận tổng thể. Xem thêm <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">chiến lược xây dựng danh mục đa dạng hóa</a> để hiểu cách phân bổ hiệu quả.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Vàng có bị mất giá không?</h3>
<p>Trong ngắn hạn (vài tháng đến 1-2 năm), giá vàng hoàn toàn có thể giảm 10-20%. Tuy nhiên, trong dài hạn (10-20 năm), giá vàng luôn đi lên. Trong 50 năm qua, vàng tăng trung bình 8-10%/năm — vượt xa lạm phát.</p>

<h3>Nên giữ vàng vật chất hay vàng tài khoản?</h3>
<p>Tùy thuộc vào nhu cầu. Vàng vật chất (nhẫn, SJC) phù hợp với đầu tư dài hạn vì bạn nắm giữ tài sản thực. Vàng tài khoản phù hợp với giao dịch ngắn hạn nhờ tính tiện lợi. Nếu đầu tư từ 10 triệu trở lên, nên chọn vàng vật chất.</p>`
    }
];

async function updatePosts() {
    console.log('📝 Cập nhật nội dung chi tiết cho 5 bài viết (batch 2)...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth failed:', authError.message); return; }

    for (const update of updates) {
        const { error } = await supabase
            .from('posts')
            .update({ content: update.content })
            .eq('id', update.id);
        if (error) {
            console.log(`❌ ${update.id}: ${error.message}`);
        } else {
            console.log(`✅ Updated ${update.id}`);
        }
    }
    console.log('\n🎉 Batch 2 done!');
}

updatePosts();
