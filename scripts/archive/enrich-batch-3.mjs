import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const posts = [
    {
        slug: 'p2p-lending-la-gi-co-hoi-rui-ro',
        content: `<p>P2P Lending (cho vay ngang hàng) là mô hình tài chính mới cho phép người có tiền nhàn rỗi cho vay trực tiếp đến người cần vốn, không qua ngân hàng. Lợi nhuận hấp dẫn nhưng rủi ro cũng không nhỏ — bài viết này phân tích chi tiết để giúp bạn quyết định.</p>

<h2>P2P Lending là gì?</h2>
<p><strong>P2P Lending (Peer-to-Peer Lending)</strong> là hình thức cho vay trực tiếp giữa cá nhân với cá nhân hoặc doanh nghiệp nhỏ thông qua nền tảng công nghệ trung gian. Nền tảng P2P đóng vai trò kết nối, thẩm định tín dụng và thu hồi nợ — nhưng <strong>không đứng ra bảo lãnh</strong> khoản vay.</p>
<p>Ở Việt Nam, P2P Lending hoạt động từ khoảng 2016 dưới dạng thí điểm. Đến 2026, Ngân hàng Nhà nước đang xây dựng khung pháp lý chính thức cho loại hình này.</p>

<h2>P2P Lending hoạt động như thế nào?</h2>
<ol>
<li><strong>Người vay</strong> đăng ký trên nền tảng, cung cấp thông tin cá nhân và mục đích vay.</li>
<li><strong>Nền tảng</strong> thẩm định tín dụng, xếp hạng rủi ro và công bố khoản vay.</li>
<li><strong>Nhà đầu tư</strong> (người cho vay) chọn khoản vay phù hợp và chuyển tiền.</li>
<li><strong>Người vay</strong> trả gốc + lãi hàng tháng. Nền tảng phân phối lại cho nhà đầu tư.</li>
</ol>

<h2>Lợi nhuận P2P Lending</h2>
<table>
<thead><tr><th>Hạng tín dụng người vay</th><th>Lãi suất cho vay</th><th>Lợi nhuận NĐT (sau phí)</th><th>Rủi ro</th></tr></thead>
<tbody>
<tr><td>A (Tốt nhất)</td><td>12-15%/năm</td><td>9-12%/năm</td><td>Thấp</td></tr>
<tr><td>B (Khá)</td><td>15-20%/năm</td><td>12-16%/năm</td><td>Trung bình</td></tr>
<tr><td>C (Trung bình)</td><td>20-30%/năm</td><td>16-24%/năm</td><td>Cao</td></tr>
<tr><td>D (Rủi ro)</td><td>30-40%/năm</td><td>24-32%/năm</td><td>Rất cao</td></tr>
</tbody>
</table>
<p>Lợi nhuận P2P cao hơn nhiều so với gửi tiết kiệm ngân hàng (5-7%/năm), nhưng rủi ro tương ứng cũng cao hơn.</p>

<h2>Rủi ro khi đầu tư P2P Lending</h2>
<h3>1. Rủi ro vỡ nợ (Default Risk)</h3>
<p>Đây là rủi ro lớn nhất. Người vay có thể không trả được nợ vì mất việc, kinh doanh thất bại, hoặc cố tình trốn nợ. Tỷ lệ nợ xấu trên các nền tảng P2P Việt Nam dao động từ 3-15% tùy nền tảng.</p>

<h3>2. Rủi ro nền tảng</h3>
<p>Nền tảng P2P có thể phá sản, lừa đảo hoặc quản lý yếu kém. Tại Việt Nam đã có nhiều nền tảng P2P "biến mất" cùng tiền của nhà đầu tư.</p>

<h3>3. Rủi ro thanh khoản</h3>
<p>Tiền cho vay bị "khóa" trong thời hạn vay (3-36 tháng). Bạn không thể rút tiền trước hạn trong đa số trường hợp.</p>

<h3>4. Rủi ro pháp lý</h3>
<p>P2P Lending tại Việt Nam chưa có khung pháp lý hoàn chỉnh. Nếu xảy ra tranh chấp, quyền lợi nhà đầu tư chưa được bảo vệ rõ ràng.</p>

<h2>Cách giảm thiểu rủi ro khi đầu tư P2P</h2>
<ul>
<li><strong>Phân tán vốn</strong>: Chia nhỏ vốn vào 20-50 khoản vay khác nhau. Nếu 1-2 khoản vỡ nợ, tổng danh mục vẫn có lãi.</li>
<li><strong>Chọn nền tảng uy tín</strong>: Ưu tiên nền tảng có giấy phép, vận hành lâu năm, công bố tỷ lệ nợ xấu minh bạch.</li>
<li><strong>Bắt đầu với vốn nhỏ</strong>: Chỉ dùng tiền bạn chấp nhận mất (5-10% tổng tài sản đầu tư).</li>
<li><strong>Ưu tiên khoản vay hạng A-B</strong>: Chấp nhận lãi thấp hơn để an toàn hơn.</li>
<li><strong>Đọc kỹ hợp đồng</strong>: Hiểu rõ điều khoản xử lý nợ xấu, phí phạt, quyền và nghĩa vụ các bên.</li>
</ul>

<h2>Các nền tảng P2P tại Việt Nam</h2>
<p>Hiện có một số nền tảng đang hoạt động (lưu ý: luôn kiểm tra giấy phép và đánh giá trước khi đầu tư):</p>
<ul>
<li><strong>Tima</strong>: Nền tảng lâu đời nhất, kết nối vay cá nhân</li>
<li><strong>Vaymuon</strong>: Cho vay tiêu dùng ngắn hạn</li>
<li><strong>Lendbiz</strong>: Cho vay doanh nghiệp nhỏ</li>
</ul>
<p><strong>Cảnh báo</strong>: Nhiều nền tảng P2P trá hình lừa đảo. Không đầu tư vào nền tảng hứa lợi nhuận >30%/năm "không rủi ro" — đó là dấu hiệu Ponzi.</p>

<h2>P2P Lending so với các kênh đầu tư khác</h2>
<table>
<thead><tr><th>Kênh</th><th>Lợi nhuận</th><th>Rủi ro</th><th>Thanh khoản</th><th>Vốn tối thiểu</th></tr></thead>
<tbody>
<tr><td>Gửi tiết kiệm</td><td>5-7%</td><td>Rất thấp</td><td>Cao</td><td>1 triệu</td></tr>
<tr><td>P2P Lending</td><td>10-20%</td><td>Cao</td><td>Thấp</td><td>500.000đ</td></tr>
<tr><td>Chứng khoán</td><td>10-20%</td><td>Trung bình</td><td>Cao</td><td>~7 triệu</td></tr>
<tr><td>Crypto</td><td>-50% đến +200%</td><td>Rất cao</td><td>Cao</td><td>100.000đ</td></tr>
</tbody>
</table>

<h2>Kết luận</h2>
<p>P2P Lending là kênh đầu tư tiềm năng với lợi nhuận cao hơn gửi tiết kiệm, nhưng đi kèm rủi ro đáng kể — đặc biệt tại thị trường Việt Nam còn thiếu khung pháp lý. Nếu quyết định tham gia, hãy phân tán vốn, chọn nền tảng uy tín, và chỉ dùng một phần nhỏ tài sản (dưới 10%). Không bao giờ đặt toàn bộ trứng vào một giỏ — đặc biệt là giỏ P2P.</p>`
    },
    {
        slug: 'lam-phat-la-gi-tac-dong-bao-ve-tai-san',
        content: `<p>Lạm phát đang "ăn mòn" giá trị tiền của bạn mỗi ngày mà bạn không nhận ra. Hiểu rõ lạm phát là gì, nó ảnh hưởng thế nào đến tài sản, và cách bảo vệ tiền của mình là kiến thức tài chính quan trọng nhất mà ai cũng cần biết.</p>

<h2>Lạm phát là gì?</h2>
<p><strong>Lạm phát (Inflation)</strong> là sự tăng lên liên tục của mức giá chung trong nền kinh tế theo thời gian. Khi lạm phát tăng, sức mua của đồng tiền giảm — nghĩa là cùng một số tiền, bạn mua được ít hàng hóa hơn trước.</p>
<p>Ví dụ: Năm 2020, một tô phở giá 40.000đ. Năm 2026, cùng tô phở đó giá 55.000-60.000đ. Đó chính là lạm phát.</p>

<h2>Lạm phát tại Việt Nam qua các năm</h2>
<table>
<thead><tr><th>Năm</th><th>Tỷ lệ lạm phát</th><th>Nhận xét</th></tr></thead>
<tbody>
<tr><td>2020</td><td>3.23%</td><td>Ổn định dù COVID</td></tr>
<tr><td>2021</td><td>1.84%</td><td>Thấp do giãn cách</td></tr>
<tr><td>2022</td><td>3.15%</td><td>Tăng do chiến tranh Ukraine</td></tr>
<tr><td>2023</td><td>3.25%</td><td>Kiểm soát tốt</td></tr>
<tr><td>2024</td><td>3.63%</td><td>Áp lực từ giá năng lượng</td></tr>
<tr><td>2025</td><td>~4.0%</td><td>Tăng nhẹ</td></tr>
</tbody>
</table>
<p>Dù tỷ lệ này có vẻ nhỏ, nhưng lạm phát 4%/năm sau 10 năm sẽ khiến 100 triệu đồng chỉ còn sức mua tương đương <strong>67.5 triệu</strong> — mất gần 1/3 giá trị!</p>

<h2>Tác động của lạm phát đến đầu tư</h2>
<h3>1. Tiền mặt và tiết kiệm bị "bào mòn"</h3>
<p>Nếu lãi suất tiết kiệm 5%/năm nhưng lạm phát 4%, lãi suất thực chỉ là <strong>1%</strong>. Để tiền mặt dưới gối → mất 4% giá trị mỗi năm.</p>

<h3>2. Bất động sản hưởng lợi</h3>
<p>Giá BĐS thường tăng theo hoặc vượt lạm phát. Tiền thuê cũng tăng theo, bảo vệ dòng tiền cho nhà đầu tư.</p>

<h3>3. Vàng — Kênh trú ẩn truyền thống</h3>
<p>Trong lịch sử, giá vàng thường tăng mạnh khi lạm phát cao. Vàng giữ giá trị qua hàng nghìn năm, là "bảo hiểm" chống lạm phát hiệu quả.</p>

<h3>4. Chứng khoán — Tùy ngành</h3>
<p>Lạm phát vừa phải (2-4%) thường tốt cho chứng khoán. Nhưng lạm phát quá cao (>6%) gây áp lực vì Ngân hàng Nhà nước tăng lãi suất, chi phí vay tăng, lợi nhuận doanh nghiệp giảm.</p>

<h2>Cách bảo vệ tài sản khỏi lạm phát</h2>
<h3>1. Không giữ quá nhiều tiền mặt</h3>
<p>Chỉ giữ 3-6 tháng chi tiêu trong quỹ khẩn cấp. Phần còn lại phải được đầu tư vào các kênh tăng trưởng nhanh hơn lạm phát.</p>

<h3>2. Đầu tư cổ phiếu dài hạn</h3>
<p>Thị trường chứng khoán Việt Nam tăng trưởng trung bình 12-15%/năm trong dài hạn — vượt xa lạm phát. ETF VN30 là lựa chọn đơn giản và hiệu quả.</p>

<h3>3. Phân bổ vào vàng (10-15% danh mục)</h3>
<p>Vàng không sinh lợi tức nhưng bảo toàn giá trị tốt. Nên giữ 10-15% danh mục dưới dạng vàng miếng SJC hoặc ETF vàng.</p>

<h3>4. Bất động sản — Nếu có đủ vốn</h3>
<p>BĐS là kênh chống lạm phát mạnh nhất nhưng đòi hỏi vốn lớn và thanh khoản thấp. Xem xét REITs nếu vốn hạn chế.</p>

<h3>5. Trái phiếu có lãi suất thả nổi</h3>
<p>Trái phiếu với lãi suất điều chỉnh theo lạm phát (inflation-linked bonds) giúp bảo vệ dòng tiền cố định. Tại Việt Nam, có thể mua trái phiếu chính phủ qua VBMA.</p>

<h2>Công thức tính lãi suất thực</h2>
<p><strong>Lãi suất thực = Lãi suất danh nghĩa - Tỷ lệ lạm phát</strong></p>
<p>Nếu bạn gửi tiết kiệm 6%/năm, lạm phát 4% → Lãi suất thực = 2%. Nếu đầu tư chứng khoán 15%/năm, lạm phát 4% → Lãi suất thực = 11%. Đó là lý do đầu tư vượt trội so với tiết kiệm.</p>

<h2>Kết luận</h2>
<p>Lạm phát là "thuế vô hình" đánh vào tất cả mọi người, đặc biệt những ai để tiền nhàn rỗi không đầu tư. Giải pháp không phải tránh lạm phát — vì bạn không thể — mà là <strong>đầu tư vào các tài sản tăng trưởng nhanh hơn lạm phát</strong>. Hãy bắt đầu từ hôm nay, dù chỉ với số vốn nhỏ.</p>`
    },
    {
        slug: 'bao-hiem-nhan-tho-co-phai-kenh-dau-tu',
        content: `<p>"Bảo hiểm nhân thọ vừa được bảo vệ vừa đầu tư sinh lời" — đây là lời quảng cáo phổ biến nhất của các tư vấn viên bảo hiểm. Nhưng sự thật như thế nào? Bài viết này phân tích khách quan ưu nhược điểm để giúp bạn quyết định.</p>

<h2>Bảo hiểm nhân thọ là gì?</h2>
<p><strong>Bảo hiểm nhân thọ (BHNT)</strong> là hợp đồng giữa bạn và công ty bảo hiểm. Bạn đóng phí định kỳ, đổi lại công ty bảo hiểm chi trả một khoản tiền lớn khi bạn gặp rủi ro (tử vong, bệnh hiểm nghèo, tai nạn) hoặc khi hợp đồng đáo hạn.</p>

<h2>Các loại bảo hiểm nhân thọ phổ biến</h2>
<table>
<thead><tr><th>Loại BHNT</th><th>Bản chất</th><th>Yếu tố đầu tư</th><th>Phí hàng năm (ví dụ)</th></tr></thead>
<tbody>
<tr><td>Bảo hiểm tử kỳ (Term)</td><td>Bảo vệ thuần túy</td><td>Không có</td><td>3-5 triệu</td></tr>
<tr><td>Bảo hiểm trọn đời</td><td>Bảo vệ + tích lũy</td><td>Rất thấp, cố định</td><td>15-30 triệu</td></tr>
<tr><td>Bảo hiểm liên kết đầu tư (Unit-linked)</td><td>Bảo vệ + đầu tư quỹ</td><td>Có (chọn quỹ)</td><td>20-50 triệu</td></tr>
<tr><td>Bảo hiểm liên kết chung (Universal)</td><td>Bảo vệ + tích lũy linh hoạt</td><td>Lãi suất cam kết tối thiểu</td><td>15-40 triệu</td></tr>
</tbody>
</table>

<h2>Sự thật về "đầu tư" qua bảo hiểm nhân thọ</h2>
<h3>Chi phí cao — Lợi nhuận thấp</h3>
<p>Trong 3 năm đầu, <strong>60-80% phí bạn đóng</strong> được dùng để trả hoa hồng cho tư vấn viên và chi phí quản lý. Chỉ 20-40% được đầu tư thực sự. Vì vậy, giá trị tài khoản trong những năm đầu rất thấp — thậm chí bằng 0.</p>

<h3>Lợi nhuận thực tế</h3>
<p>Bảo hiểm liên kết đầu tư có lợi nhuận trung bình <strong>5-8%/năm</strong> (trước phí). Sau khi trừ các loại phí (quản lý quỹ, bảo hiểm rủi ro, phí quản lý hợp đồng), lợi nhuận thực chỉ khoảng <strong>2-5%/năm</strong> — tương đương hoặc thấp hơn gửi tiết kiệm.</p>

<h3>Tính thanh khoản kém</h3>
<p>Nếu hủy hợp đồng trong 5-10 năm đầu, bạn có thể <strong>mất 30-70% số tiền đã đóng</strong>. Đây là rủi ro lớn nhất mà nhiều người không biết trước khi ký.</p>

<h2>So sánh: Mua BHNT "combo" vs Tách riêng bảo vệ + đầu tư</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>BHNT Unit-linked (combo)</th><th>BHNT tử kỳ + Tự đầu tư</th></tr></thead>
<tbody>
<tr><td>Phí bảo hiểm/năm</td><td>30 triệu</td><td>4 triệu (tử kỳ) + 26 triệu (tự đầu tư)</td></tr>
<tr><td>Mức bảo vệ</td><td>500 triệu - 1 tỷ</td><td>Tương đương hoặc cao hơn</td></tr>
<tr><td>Lợi nhuận đầu tư (sau 20 năm)</td><td>~200-300 triệu</td><td>~500-800 triệu (nếu đầu tư ETF 12%/năm)</td></tr>
<tr><td>Thanh khoản</td><td>Rất thấp</td><td>Cao (bán ETF bất kỳ lúc nào)</td></tr>
<tr><td>Phí ẩn</td><td>Nhiều loại phí</td><td>Minh bạch</td></tr>
</tbody>
</table>
<p><strong>Kết quả</strong>: Tách riêng bảo vệ + đầu tư thường mang lại kết quả tốt hơn đáng kể sau 15-20 năm.</p>

<h2>Khi nào BHNT là lựa chọn hợp lý?</h2>
<ul>
<li><strong>Bạn là trụ cột tài chính gia đình</strong>: BHNT tử kỳ (thuần bảo vệ) là rất cần thiết — phí rẻ, mức bảo vệ cao.</li>
<li><strong>Bạn không có kỷ luật tự đầu tư</strong>: Nếu biết mình sẽ tiêu hết tiền thay vì đầu tư, BHNT buộc bạn phải đóng phí đều đặn.</li>
<li><strong>Bạn muốn bảo vệ trước bệnh hiểm nghèo</strong>: Rider bệnh hiểm nghèo trong BHNT có giá trị thực sự.</li>
</ul>

<h2>Khi nào KHÔNG nên dùng BHNT để đầu tư?</h2>
<ul>
<li>Bạn có kỷ luật tài chính tốt và sẵn sàng tự đầu tư.</li>
<li>Bạn hiểu về ETF, quỹ mở và có thể tự quản lý danh mục.</li>
<li>Bạn cần thanh khoản cao — có thể rút tiền bất cứ lúc nào.</li>
<li>Bạn muốn tối ưu lợi nhuận dài hạn.</li>
</ul>

<h2>Lời khuyên trước khi mua BHNT</h2>
<ol>
<li><strong>Đọc kỹ bảng minh họa quyền lợi</strong>: Hỏi rõ từng loại phí (phí ban đầu, phí quản lý, phí bảo hiểm rủi ro).</li>
<li><strong>Không ký dưới áp lực</strong>: Tư vấn viên có thể thúc giục bạn ký ngay. Hãy xin thời gian suy nghĩ ít nhất 1 tuần.</li>
<li><strong>Tận dụng quyền "free look" 21 ngày</strong>: Sau khi ký, bạn có 21 ngày để hủy hợp đồng và nhận lại tiền (trừ phí khám sức khỏe).</li>
<li><strong>Ưu tiên bảo hiểm tử kỳ</strong>: Phí rẻ hơn 5-10 lần so với unit-linked, mức bảo vệ tương đương. Tiền còn lại tự đầu tư.</li>
</ol>

<h2>Kết luận</h2>
<p>Bảo hiểm nhân thọ là công cụ <strong>bảo vệ tài chính</strong> tốt, nhưng <strong>không phải kênh đầu tư hiệu quả</strong>. Nếu mục tiêu của bạn là tăng trưởng tài sản, hãy tách riêng: mua BHNT tử kỳ để bảo vệ gia đình, và tự đầu tư phần còn lại vào ETF hoặc quỹ mở. Sự thật đơn giản là: không có sản phẩm tài chính nào vừa an toàn, vừa lãi cao, vừa thanh khoản tốt — nếu ai hứa như vậy, hãy cẩn thận.</p>`
    },
    {
        slug: 'cach-tiet-kiem-tien-hieu-qua-nguoi-tre',
        content: `<p>Tiết kiệm không phải là "bớt tiêu" — mà là <strong>biết ưu tiên chi tiêu</strong> cho những gì thực sự quan trọng. Bài viết này chia sẻ 10 mẹo thực tế giúp người trẻ Việt Nam tiết kiệm hiệu quả mà không cần sống khổ hạnh.</p>

<h2>Tại sao người trẻ cần tiết kiệm?</h2>
<p>Theo khảo sát, <strong>68% người Việt dưới 30 tuổi</strong> không có khoản tiết kiệm nào đáng kể. Nhiều người sống kiểu "tháng nào tiêu hết tháng đó" — một cú sốc tài chính nhỏ (mất việc, ốm đau) có thể khiến họ rơi vào nợ nần.</p>
<p>Tiết kiệm không chỉ để phòng thân, mà còn là <strong>bước đệm để đầu tư</strong>. Bạn không thể đầu tư nếu không có vốn — và vốn đến từ tiết kiệm.</p>

<h2>10 mẹo tiết kiệm thực tế cho người trẻ</h2>

<h3>1. Áp dụng quy tắc 50/30/20</h3>
<p>Chia thu nhập thành 3 phần: <strong>50% nhu cầu thiết yếu</strong> (nhà, ăn, đi lại), <strong>30% mong muốn</strong> (giải trí, mua sắm), <strong>20% tiết kiệm/đầu tư</strong>. Nếu lương 10 triệu → tiết kiệm tối thiểu 2 triệu/tháng.</p>

<h3>2. Trả cho bản thân trước (Pay Yourself First)</h3>
<p>Ngay khi nhận lương, <strong>chuyển 20% vào tài khoản tiết kiệm riêng trước</strong>. Đừng chờ cuối tháng mới tiết kiệm "phần thừa" — vì sẽ không bao giờ thừa.</p>
<p>Thiết lập chuyển khoản tự động từ ngân hàng lương sang tài khoản tiết kiệm vào ngày 1 hoặc ngày 5 hàng tháng.</p>

<h3>3. Theo dõi chi tiêu hàng ngày</h3>
<p>Ghi lại mọi khoản chi trong 1 tháng đầu. Bạn sẽ bất ngờ khi thấy mình chi bao nhiêu vào cà phê, trà sữa, grab, và mua sắm online. Dùng app Money Lover, Misa, hoặc đơn giản là Google Sheets.</p>

<h3>4. Quy tắc 24 giờ cho mua sắm</h3>
<p>Muốn mua thứ gì >500.000đ? <strong>Chờ 24 giờ</strong> trước khi quyết định. Nếu sau 24 giờ vẫn muốn mua → hãy mua. 80% trường hợp bạn sẽ nhận ra mình không thực sự cần.</p>

<h3>5. Nấu ăn tại nhà</h3>
<p>Ăn ngoài trung bình 50.000-80.000đ/bữa. Nấu ăn nhà chỉ tốn 20.000-30.000đ/bữa. Nếu nấu 20 bữa/tháng thay vì ăn ngoài, bạn tiết kiệm được <strong>600.000 - 1.000.000đ/tháng</strong>.</p>

<h3>6. Tận dụng ưu đãi, cashback</h3>
<p>Dùng thẻ tín dụng cashback 1-3% cho chi tiêu hàng ngày (nhưng luôn trả đủ hàng tháng). Mua sắm vào ngày sale lớn (11.11, Black Friday). Tích điểm thành viên tại cửa hàng thường xuyên lui tới.</p>

<h3>7. Cắt giảm đăng ký không dùng</h3>
<p>Kiểm tra xem bạn đang trả bao nhiêu subscription: Netflix, Spotify, gym, app học... Hủy những cái không dùng thường xuyên. 3-4 subscription nhỏ có thể tốn <strong>500.000-1.000.000đ/tháng</strong>.</p>

<h3>8. Mua đồ secondhand chất lượng</h3>
<p>Quần áo hàng hiệu secondhand, đồ điện tử refurbished, sách cũ — chất lượng gần như mới mà giá chỉ 30-50%. Đặc biệt hiệu quả với iPhone, laptop, và đồ gia dụng.</p>

<h3>9. Đặt mục tiêu cụ thể và có deadline</h3>
<p>Tiết kiệm "cho tương lai" quá mơ hồ. Thay vào đó: "Tiết kiệm 30 triệu trong 12 tháng để đi du lịch Nhật" hoặc "Tích lũy 50 triệu trong 18 tháng để bắt đầu đầu tư chứng khoán". Mục tiêu cụ thể tạo động lực hành động.</p>

<h3>10. Tạo nhiều nguồn thu nhập</h3>
<p>Tiết kiệm có giới hạn — nhưng kiếm thêm thì không. Các cách tăng thu nhập:</p>
<ul>
<li><strong>Freelance</strong>: Viết bài, thiết kế, lập trình, dịch thuật</li>
<li><strong>Dạy thêm/gia sư online</strong>: Dạy tiếng Anh, toán, kỹ năng IT</li>
<li><strong>Bán hàng online</strong>: Shopee, TikTok Shop không cần vốn lớn</li>
<li><strong>Thu nhập thụ động</strong>: Viết blog, tạo khóa học online, đầu tư ETF</li>
</ul>

<h2>Bao nhiêu tiền tiết kiệm là đủ?</h2>
<table>
<thead><tr><th>Mục tiêu</th><th>Số tiền cần</th><th>Thời gian (tiết kiệm 3tr/tháng)</th></tr></thead>
<tbody>
<tr><td>Quỹ khẩn cấp (6 tháng)</td><td>48-60 triệu</td><td>16-20 tháng</td></tr>
<tr><td>Vốn đầu tư ban đầu</td><td>20-50 triệu</td><td>7-17 tháng</td></tr>
<tr><td>Du lịch nước ngoài</td><td>20-40 triệu</td><td>7-13 tháng</td></tr>
<tr><td>Đặt cọc nhà trọ/xe</td><td>10-30 triệu</td><td>3-10 tháng</td></tr>
</tbody>
</table>

<h2>Kết luận</h2>
<p>Tiết kiệm hiệu quả không phải "sống khổ" — mà là <strong>chi tiêu có ý thức</strong>. Bắt đầu từ việc nhỏ nhất: chuyển 20% lương vào tài khoản tiết kiệm ngay hôm nay. Sau 3-6 tháng, khi bạn có quỹ khẩn cấp đầy đủ, hãy bắt đầu đầu tư — và đó là lúc tiền bắt đầu "làm việc cho bạn".</p>`
    },
    {
        slug: 'lai-suat-ngan-hang-2026-so-sanh',
        content: `<p>Gửi tiết kiệm ngân hàng vẫn là kênh an toàn nhất cho tiền nhàn rỗi. Nhưng chênh lệch lãi suất giữa các ngân hàng có thể lên đến <strong>1-2%/năm</strong> — tương đương hàng triệu đồng trên 100 triệu gửi. Bài này so sánh lãi suất mới nhất 2026.</p>

<h2>Bảng lãi suất tiết kiệm các ngân hàng (tháng 2/2026)</h2>
<table>
<thead><tr><th>Ngân hàng</th><th>1 tháng</th><th>3 tháng</th><th>6 tháng</th><th>12 tháng</th><th>24 tháng</th></tr></thead>
<tbody>
<tr><td>Vietcombank</td><td>1.6%</td><td>2.2%</td><td>3.0%</td><td>4.7%</td><td>4.7%</td></tr>
<tr><td>BIDV</td><td>1.6%</td><td>2.2%</td><td>3.0%</td><td>4.7%</td><td>4.7%</td></tr>
<tr><td>Agribank</td><td>1.6%</td><td>2.2%</td><td>3.0%</td><td>4.7%</td><td>4.7%</td></tr>
<tr><td>Techcombank</td><td>2.8%</td><td>3.3%</td><td>4.3%</td><td>5.2%</td><td>5.3%</td></tr>
<tr><td>MB Bank</td><td>2.9%</td><td>3.4%</td><td>4.3%</td><td>5.0%</td><td>5.2%</td></tr>
<tr><td>VPBank</td><td>3.3%</td><td>3.8%</td><td>4.8%</td><td>5.6%</td><td>5.8%</td></tr>
<tr><td>ACB</td><td>2.7%</td><td>3.2%</td><td>4.1%</td><td>5.0%</td><td>5.1%</td></tr>
<tr><td>Sacombank</td><td>3.0%</td><td>3.5%</td><td>4.5%</td><td>5.3%</td><td>5.5%</td></tr>
<tr><td>TPBank</td><td>3.1%</td><td>3.6%</td><td>4.5%</td><td>5.3%</td><td>5.4%</td></tr>
</tbody>
</table>
<p><em>Lưu ý: Lãi suất có thể thay đổi. Kiểm tra trực tiếp tại ngân hàng để có số liệu chính xác nhất.</em></p>

<h2>Nhận xét</h2>
<ul>
<li><strong>Nhóm Big 4</strong> (Vietcombank, BIDV, Agribank, Vietinbank): Lãi suất thấp nhất vì có lợi thế thương hiệu và lượng khách hàng lớn.</li>
<li><strong>Ngân hàng tư nhân</strong> (VPBank, TPBank, Sacombank): Lãi suất cao hơn 0.5-1% để thu hút tiền gửi.</li>
<li><strong>Gửi online</strong> thường được cộng thêm <strong>0.1-0.5%/năm</strong> so với gửi tại quầy.</li>
</ul>

<h2>Cách gửi tiết kiệm tối ưu lợi nhuận</h2>

<h3>1. Chiến lược bậc thang (CD Ladder)</h3>
<p>Chia tiền thành 6-12 phần, gửi ở các kỳ hạn khác nhau (1, 3, 6, 9, 12 tháng). Mỗi tháng sẽ có một khoản đáo hạn → đảm bảo thanh khoản mà vẫn hưởng lãi suất cao.</p>
<p>Ví dụ: Có 120 triệu → Chia thành 12 sổ × 10 triệu, mỗi sổ gửi kỳ hạn 12 tháng nhưng bắt đầu lệch nhau 1 tháng.</p>

<h3>2. Gửi online thay vì tại quầy</h3>
<p>Hầu hết ngân hàng cộng thêm 0.1-0.5% lãi suất khi gửi qua app/internet banking. Với 100 triệu gửi 12 tháng, chênh lệch 0.3% = <strong>300.000đ lãi thêm</strong> không mất công.</p>

<h3>3. So sánh giữa nhiều ngân hàng</h3>
<p>Không gửi toàn bộ ở một ngân hàng. Chia vốn giữa 2-3 ngân hàng để tận dụng lãi suất tốt nhất và phân tán rủi ro (dù rủi ro ngân hàng tại VN rất thấp nhờ bảo hiểm tiền gửi).</p>

<h3>4. Bảo hiểm tiền gửi — Giới hạn bạn cần biết</h3>
<p>Tại Việt Nam, bảo hiểm tiền gửi bảo vệ tối đa <strong>125 triệu đồng/người/ngân hàng</strong>. Nếu gửi 500 triệu, nên chia vào ít nhất 4 ngân hàng khác nhau để toàn bộ số tiền được bảo vệ.</p>

<h2>Gửi tiết kiệm vs Đầu tư — Nên kết hợp thế nào?</h2>
<table>
<thead><tr><th>Mục đích</th><th>Nên chọn</th><th>Lý do</th></tr></thead>
<tbody>
<tr><td>Quỹ khẩn cấp</td><td>Tiết kiệm kỳ hạn 1-3 tháng</td><td>Cần rút nhanh khi cần</td></tr>
<tr><td>Tích lũy 1-2 năm</td><td>Tiết kiệm 6-12 tháng + Quỹ trái phiếu</td><td>An toàn, lãi vừa phải</td></tr>
<tr><td>Đầu tư dài hạn (5+ năm)</td><td>ETF + Quỹ cổ phiếu</td><td>Lợi nhuận cao hơn lãi tiết kiệm nhiều</td></tr>
</tbody>
</table>
<p>Nguyên tắc vàng: <strong>Giữ 3-6 tháng chi tiêu trong tiết kiệm, phần còn lại đưa vào đầu tư</strong>.</p>

<h2>Khi nào lãi suất thay đổi?</h2>
<p>Lãi suất tiết kiệm phụ thuộc vào chính sách của Ngân hàng Nhà nước (NHNN). Khi NHNN tăng lãi suất điều hành → ngân hàng thương mại tăng lãi suất huy động. Và ngược lại.</p>
<p>Năm 2022-2023, lãi suất tăng mạnh do NHNN kiểm soát lạm phát. Từ 2024-2026, lãi suất giảm dần để kích thích kinh tế. Xu hướng hiện tại: lãi suất ổn định ở mức trung bình.</p>

<h2>Kết luận</h2>
<p>Gửi tiết kiệm ngân hàng là nền tảng an toàn cho tài chính cá nhân, nhưng không phải cách duy nhất để tiền "sinh sôi". Hãy tận dụng các mẹo tối ưu lãi suất, và khi đã có quỹ dự phòng đủ lớn, hãy mạnh dạn phân bổ một phần vào các kênh đầu tư tăng trưởng cao hơn.</p>`
    }
];

async function run() {
    console.log('🔧 NÂNG CẤP NỘI DUNG BATCH 3 (5 bài)\n');
    for (const p of posts) {
        const { error } = await supabase.from('posts').update({ content: p.content }).eq('slug', p.slug);
        if (error) console.log(`❌ ${p.slug}: ${error.message}`);
        else {
            const wc = p.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w).length;
            console.log(`✅ ${p.slug} → ${wc} từ`);
        }
    }
    console.log('\n🎉 Batch 3 hoàn tất!');
}
run();
