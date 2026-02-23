import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const CATS = {
    'kien-thuc-dau-tu': '31d10229-9735-4f69-a368-08ea7f0550a1',
    'chung-khoan': '96d5c106-653b-470e-90a7-6875e9a490fd',
    'kinh-nghiem': 'ac86a067-5518-42d7-8045-a92a75f4a15f',
};

const schedule = [
    '2026-02-25T08:00:00+07:00',
    '2026-02-25T12:00:00+07:00',
    '2026-02-25T18:00:00+07:00',
];

const posts = [
    {
        title: 'Quản Lý Rủi Ro Danh Mục Đầu Tư: Bảo Vệ Tài Sản Hiệu Quả',
        slug: 'quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua',
        excerpt: 'Hướng dẫn các phương pháp quản lý rủi ro trong đầu tư, từ đa dạng hóa đến sử dụng stop-loss và hedging.',
        category_id: CATS['kien-thuc-dau-tu'],
        content: `<h2>Rủi ro đầu tư là gì?</h2>
<p>Rủi ro đầu tư là khả năng một khoản đầu tư không đạt được kỳ vọng lợi nhuận, hoặc tệ hơn là mất vốn. Trong thế giới tài chính, rủi ro và lợi nhuận luôn đi đôi với nhau — không có khoản đầu tư nào mang lại lợi nhuận cao mà không kèm theo rủi ro tương xứng. Tuy nhiên, điều khác biệt giữa nhà đầu tư thành công và người thất bại nằm ở cách họ quản lý và kiểm soát rủi ro.</p>
<p>Có hai loại rủi ro chính mà nhà đầu tư cần hiểu rõ. Rủi ro hệ thống (Systematic Risk) là rủi ro ảnh hưởng toàn bộ thị trường như suy thoái kinh tế, lạm phát, thay đổi chính sách tiền tệ hay khủng hoảng địa chính trị. Loại rủi ro này không thể loại bỏ hoàn toàn bằng đa dạng hóa. Rủi ro phi hệ thống (Unsystematic Risk) là rủi ro riêng của từng công ty hoặc ngành, ví dụ như CEO từ chức, sản phẩm bị thu hồi hay đối thủ cạnh tranh mới xuất hiện. Đa dạng hóa danh mục có thể giảm thiểu đáng kể loại rủi ro này.</p>
<p>Tại Việt Nam, thị trường chứng khoán còn non trẻ và biến động mạnh, khiến việc quản lý rủi ro càng trở nên quan trọng. Trong giai đoạn 2020-2025, VN-Index đã trải qua nhiều đợt tăng giảm hơn 20%, gây ra tổn thất lớn cho những nhà đầu tư không có chiến lược quản lý rủi ro phù hợp.</p>

<h2>Đa dạng hóa: Nền tảng quản lý rủi ro</h2>
<p>Đa dạng hóa là phương pháp giảm rủi ro cơ bản nhất — không bỏ tất cả trứng vào một giỏ. Một danh mục đa dạng nên bao gồm nhiều loại tài sản (cổ phiếu, trái phiếu, vàng, tiền mặt), nhiều ngành (ngân hàng, công nghệ, tiêu dùng, bất động sản) và nhiều quy mô doanh nghiệp (vốn hóa lớn, vừa, nhỏ).</p>
<p>Nghiên cứu từ các nhà kinh tế học cho thấy một danh mục gồm 15-20 cổ phiếu từ các ngành khác nhau có thể loại bỏ khoảng 80-90% rủi ro phi hệ thống. Tuy nhiên, đa dạng hóa quá mức (trên 30 cổ phiếu) lại không mang lại thêm lợi ích đáng kể mà còn làm giảm khả năng theo dõi và quản lý danh mục hiệu quả.</p>
<p>Điều quan trọng là đa dạng hóa đúng cách. Việc sở hữu 10 cổ phiếu ngân hàng không phải đa dạng hóa thực sự vì chúng đều chịu ảnh hưởng bởi cùng các yếu tố như lãi suất, nợ xấu. Thay vào đó, hãy kết hợp cổ phiếu ngân hàng với cổ phiếu tiêu dùng, công nghệ, và khu công nghiệp để giảm tương quan giữa các vị thế trong danh mục.</p>

<h2>Stop-loss: Cắt lỗ kỷ luật</h2>
<p>Stop-loss là mức giá được xác định trước mà tại đó bạn sẽ bán cổ phiếu để cắt lỗ. Đây là công cụ đơn giản nhưng hiệu quả nhất để bảo vệ vốn. Nhiều nhà đầu tư Việt Nam thường mắc bẫy tâm lý "hy vọng giá sẽ quay lại" và giữ cổ phiếu thua lỗ quá lâu, dẫn đến mất mát ngày càng lớn.</p>
<p>Quy tắc phổ biến là đặt stop-loss ở mức 7-10% dưới giá mua. Điều này có nghĩa là nếu bạn mua cổ phiếu giá 100.000 đồng, bạn sẽ bán khi giá giảm xuống 90.000-93.000 đồng. Tuy nhiên, mức stop-loss cần điều chỉnh tùy theo biến động của từng cổ phiếu. Cổ phiếu blue-chip ít biến động có thể dùng stop-loss chặt hơn (5-7%), trong khi cổ phiếu nhỏ biến động mạnh cần stop-loss rộng hơn (10-15%).</p>
<p>Một kỹ thuật nâng cao là trailing stop-loss (stop-loss trượt), trong đó mức cắt lỗ tự động điều chỉnh lên khi giá cổ phiếu tăng. Ví dụ, nếu bạn đặt trailing stop 10% và cổ phiếu tăng từ 100.000 lên 150.000 đồng, mức cắt lỗ tự động dịch chuyển từ 90.000 lên 135.000 đồng, giúp bạn bảo vệ phần lớn lợi nhuận đã có.</p>

<h2>Quy tắc quản lý vốn</h2>
<p>Quy tắc "không bao giờ rủi ro hơn 2% tổng vốn cho một giao dịch" là nguyên tắc vàng được các trader chuyên nghiệp áp dụng. Nghĩa là nếu bạn có 500 triệu đồng, mức lỗ tối đa cho mỗi vị thế không nên vượt quá 10 triệu đồng. Quy tắc này đảm bảo rằng ngay cả khi bạn sai liên tiếp 10 lần, tổng thiệt hại vẫn chỉ ở mức 20% — có thể phục hồi được.</p>
<p>Bên cạnh đó, hãy áp dụng tỷ lệ Risk-Reward tối thiểu 1:2. Mỗi giao dịch bạn tham gia nên có tiềm năng lợi nhuận gấp đôi mức rủi ro. Nếu bạn sẵn sàng chấp nhận lỗ 5%, mục tiêu lợi nhuận tối thiểu phải là 10%. Với tỷ lệ này, bạn chỉ cần đúng 40% số giao dịch để vẫn có lãi tổng thể.</p>

<h2>Kết luận</h2>
<p>Quản lý rủi ro không phải là tránh rủi ro hoàn toàn, mà là kiểm soát và hạn chế thiệt hại ở mức có thể chấp nhận được. Bằng cách kết hợp đa dạng hóa, stop-loss kỷ luật và quản lý vốn thông minh, bạn có thể bảo vệ tài sản và tối ưu lợi nhuận dài hạn trong mọi điều kiện thị trường.</p>
<h2>Đọc thêm</h2>
<p><a href="/blog/chung-khoan/top-5-sai-lam-dau-tu-chung-khoan">Top 5 sai lầm đầu tư</a> · <a href="/blog/kien-thuc-dau-tu/tam-ly-giao-dich-sai-lam-cam-xuc">Tâm lý giao dịch</a></p>
<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`,
    },
    {
        title: 'Tâm Lý Đám Đông Trong Đầu Tư: Nhận Diện Và Tránh Bẫy',
        slug: 'tam-ly-dam-dong-trong-dau-tu-tranh-bay',
        excerpt: 'Phân tích tâm lý đám đông trong đầu tư, cách nhận biết hiệu ứng bầy đàn và chiến lược giữ vững lập trường.',
        category_id: CATS['kinh-nghiem'],
        content: `<h2>Hiệu ứng đám đông là gì?</h2>
<p>Tâm lý đám đông (Herd Mentality) trong đầu tư là hiện tượng nhà đầu tư đưa ra quyết định không dựa trên phân tích riêng mà vì "mọi người đều làm vậy". Khi thấy đám đông đổ xô mua một cổ phiếu, bạn cảm thấy sợ bỏ lỡ cơ hội (FOMO). Khi mọi người hoảng loạn bán tháo, bạn cũng vội vàng bán theo dù không có lý do cơ bản nào thay đổi.</p>
<p>Hiệu ứng đám đông đã gây ra những bong bóng tài chính lớn nhất trong lịch sử. Từ bong bóng hoa tulip ở Hà Lan năm 1637, bong bóng dotcom năm 2000 cho đến cơn sốt Bitcoin năm 2017 và 2021, tất cả đều có chung một kịch bản: giá tăng chóng mặt khi đám đông đổ xô vào, rồi sụp đổ khi niềm tin mất đi. Tại Việt Nam, thị trường chứng khoán giai đoạn 2021-2022 cũng chứng kiến hiện tượng tương tự khi hàng triệu tài khoản F0 mở mới và đổ tiền vào thị trường ở đỉnh, rồi chịu tổn thất nặng khi thị trường đảo chiều.</p>
<p>Nguyên nhân sâu xa của tâm lý đám đông nằm trong cấu trúc não bộ. Nghiên cứu thần kinh học cho thấy khi chúng ta hành động cùng nhóm, não tiết ra dopamine tạo cảm giác an toàn và hài lòng. Ngược lại, đi ngược đám đông kích hoạt vùng não liên quan đến nỗi đau và lo lắng, khiến việc duy trì lập trường độc lập trở nên cực kỳ khó khăn về mặt sinh học.</p>

<h2>Các dấu hiệu nhận biết bẫy đám đông</h2>
<p>Dấu hiệu đầu tiên là khi mọi người xung quanh bạn, kể cả những người chưa bao giờ quan tâm đến đầu tư, bắt đầu nói về một cổ phiếu hoặc loại tài sản nào đó. Khi anh xe ôm, chị bán hàng online hay bác hàng xóm đều khoe lãi chứng khoán, đó thường là dấu hiệu cho thấy thị trường đã ở gần đỉnh. Warren Buffett có câu nói nổi tiếng: "Hãy sợ khi người khác tham lam, và tham lam khi người khác sợ hãi."</p>
<p>Dấu hiệu thứ hai là sự xuất hiện ồ ạt của các "guru" tài chính trên mạng xã hội. Trong mọi đợt bong bóng, luôn có những người tự xưng là chuyên gia, đưa ra dự đoán táo bạo và thu hút hàng nghìn followers. Họ thường khoe screenshot lợi nhuận ấn tượng nhưng không bao giờ cho thấy những giao dịch thua lỗ. Hãy cẩn thận với những lời khuyên đầu tư miễn phí trên mạng, vì "nếu bạn không trả tiền cho sản phẩm, bạn chính là sản phẩm."</p>
<p>Dấu hiệu thứ ba là khi giá tài sản tăng quá nhanh so với giá trị nội tại. Nếu một cổ phiếu có P/E vượt quá 30 lần trong khi trung bình ngành chỉ 15 lần, hoặc giá bất động sản tăng 50-100% trong một năm mà thu nhập cho thuê không thay đổi, đó là dấu hiệu rõ ràng của bong bóng do đám đông tạo ra.</p>

<h2>Contrarian investing: Đầu tư ngược dòng</h2>
<p>Contrarian investing (đầu tư ngược dòng) là chiến lược đi ngược lại đám đông — mua khi mọi người bán và bán khi mọi người mua. Nghe đơn giản nhưng thực hiện cực kỳ khó vì nó đòi hỏi sự tự tin, kiên nhẫn và kỷ luật cao độ. Tuy nhiên, lịch sử cho thấy những nhà đầu tư thành công nhất như Warren Buffett, Howard Marks hay Sir John Templeton đều là những contrarian investor.</p>
<p>Để áp dụng contrarian investing hiệu quả, bạn cần phân biệt giữa "đi ngược đám đông một cách thông minh" và "đi ngược đám đông một cách mù quáng". Không phải lúc nào đám đông cũng sai. Đôi khi xu hướng tăng kéo dài nhiều năm và việc chống lại nó là sai lầm. Chìa khóa nằm ở việc phân tích cơ bản: khi giá tài sản giảm mạnh nhưng giá trị nội tại vẫn còn nguyên hoặc đang tăng, đó là lúc nên hành động ngược dòng.</p>
<p>Tại thị trường Việt Nam, những đợt panic sell thường tạo ra cơ hội tuyệt vời cho contrarian investors. Trong đợt bán tháo tháng 4-6/2022, VN-Index giảm từ 1,500 xuống dưới 1,000 điểm. Những nhà đầu tư dũng cảm mua vào ở vùng đáy đã thu được lợi nhuận 50-70% chỉ trong 12 tháng sau đó khi thị trường phục hồi.</p>

<h2>Xây dựng hệ thống đầu tư cá nhân</h2>
<p>Cách tốt nhất để tránh bẫy đám đông là có một hệ thống đầu tư rõ ràng và tuân thủ nghiêm ngặt. Hệ thống này bao gồm tiêu chí chọn cổ phiếu (ví dụ: ROE trên 15%, nợ/vốn chủ dưới 1, tăng trưởng doanh thu ít nhất 10%/năm), quy tắc mua bán (mua khi P/E dưới trung bình 5 năm, bán khi đạt mục tiêu giá hoặc khi cơ bản xấu đi) và quản lý vốn (không quá 10% vốn cho một cổ phiếu).</p>
<p>Viết nhật ký đầu tư cũng là công cụ hữu ích để kiểm soát cảm xúc. Mỗi khi mua hoặc bán, hãy ghi lại lý do, kỳ vọng và cảm xúc tại thời điểm đó. Khi nhìn lại, bạn sẽ nhận ra những mô hình cảm xúc lặp đi lặp lại và học cách kiểm soát chúng tốt hơn. Nhiều nhà đầu tư chuyên nghiệp thậm chí có quy tắc "chờ 24 giờ" trước khi thực hiện bất kỳ giao dịch nào dưới tác động của cảm xúc mạnh.</p>

<h2>Kết luận</h2>
<p>Tâm lý đám đông là kẻ thù lớn nhất của nhà đầu tư thông minh. Nhận diện các dấu hiệu bẫy đám đông, xây dựng hệ thống đầu tư kỷ luật và giữ vững lập trường dựa trên phân tích cơ bản là chìa khóa để vượt qua hiệu ứng bầy đàn và đạt được lợi nhuận bền vững trong dài hạn.</p>
<h2>Đọc thêm</h2>
<p><a href="/blog/kien-thuc-dau-tu/tam-ly-giao-dich-sai-lam-cam-xuc">Tâm lý giao dịch</a> · <a href="/blog/chung-khoan/top-5-sai-lam-dau-tu-chung-khoan">5 sai lầm đầu tư</a></p>
<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`,
    },
    {
        title: 'Hướng Dẫn Mở Tài Khoản Chứng Khoán Online 2026 Nhanh Nhất',
        slug: 'huong-dan-mo-tai-khoan-chung-khoan-online-2026',
        excerpt: 'Hướng dẫn chi tiết cách mở tài khoản chứng khoán online năm 2026, từ chọn công ty đến bắt đầu giao dịch.',
        category_id: CATS['chung-khoan'],
        content: `<h2>Tại sao nên mở tài khoản chứng khoán online?</h2>
<p>Năm 2026, việc mở tài khoản chứng khoán đã trở nên đơn giản hơn bao giờ hết. Bạn có thể hoàn tất toàn bộ quy trình ngay trên điện thoại trong vòng 15-30 phút mà không cần đến quầy giao dịch. eKYC (xác thực điện tử) cho phép xác minh danh tính qua camera điện thoại, giúp tiết kiệm thời gian và công sức đáng kể so với phương thức truyền thống.</p>
<p>Thị trường chứng khoán Việt Nam đang trong giai đoạn phát triển mạnh mẽ với nhiều cải cách quan trọng. Hệ thống giao dịch KRX mới nâng cao thanh khoản và rút ngắn thời gian thanh toán từ T+2 xuống T+1, tạo điều kiện thuận lợi hơn cho nhà đầu tư cá nhân. Bên cạnh đó, Việt Nam đang trong lộ trình nâng hạng thị trường từ Frontier Market lên Emerging Market, thu hút dòng vốn quốc tế khổng lồ.</p>
<p>Với vốn tối thiểu chỉ từ 5-10 triệu đồng và phí giao dịch ngày càng thấp (nhiều công ty chứng khoán miễn phí mở tài khoản và giảm phí giao dịch xuống 0.1-0.15%), rào cản tham gia thị trường chứng khoán gần như không còn. Đây là thời điểm tốt nhất để bắt đầu hành trình đầu tư của bạn.</p>

<h2>Chọn công ty chứng khoán phù hợp</h2>
<p>Việc chọn đúng công ty chứng khoán ảnh hưởng trực tiếp đến trải nghiệm đầu tư của bạn. Các yếu tố quan trọng cần xem xét bao gồm uy tín và quy mô công ty, nền tảng giao dịch (app hoặc web), phí giao dịch, chất lượng nghiên cứu và hỗ trợ khách hàng. Năm 2026, các công ty chứng khoán hàng đầu tại Việt Nam như SSI, VPS, VNDirect, HSC, TCBS và MBS đều cung cấp dịch vụ mở tài khoản online hoàn toàn miễn phí.</p>
<p>Nếu bạn là người mới bắt đầu, hãy ưu tiên chọn công ty có nền tảng giao dịch thân thiện với người dùng, có đội ngũ tư vấn hỗ trợ tốt và cung cấp nhiều tài liệu giáo dục đầu tư. Nhiều công ty còn cung cấp tài khoản demo (giả lập) cho phép bạn luyện tập giao dịch với tiền ảo trước khi sử dụng tiền thật, giảm thiểu rủi ro cho người mới.</p>
<p>Phí giao dịch cũng là yếu tố quan trọng, đặc biệt nếu bạn giao dịch thường xuyên. Phí trung bình hiện nay dao động từ 0.1% đến 0.25% giá trị giao dịch. Một số công ty chứng khoán còn miễn phí giao dịch trong 3-6 tháng đầu cho tài khoản mới, giúp bạn tiết kiệm chi phí trong giai đoạn làm quen.</p>

<h2>Quy trình mở tài khoản online</h2>
<p>Bước đầu tiên là chuẩn bị giấy tờ cần thiết: CCCD/CMND còn hiệu lực, tài khoản ngân hàng đã đăng ký internet banking và điện thoại có camera. Sau đó tải ứng dụng của công ty chứng khoán bạn đã chọn hoặc truy cập website của họ để bắt đầu đăng ký.</p>
<p>Quá trình eKYC yêu cầu bạn chụp ảnh 2 mặt CCCD/CMND và thực hiện xác thực khuôn mặt trực tiếp qua camera. Hệ thống AI sẽ đối chiếu khuôn mặt của bạn với ảnh trên giấy tờ tùy thân để xác minh danh tính. Sau khi hoàn tất eKYC, bạn điền thông tin cá nhân, liên kết tài khoản ngân hàng và ký hợp đồng điện tử. Toàn bộ quá trình mất khoảng 15-30 phút.</p>
<p>Sau khi đăng ký, tài khoản thường được kích hoạt trong vòng 1-2 ngày làm việc. Một số công ty chứng khoán hiện đã hỗ trợ kích hoạt tài khoản ngay lập tức sau khi hoàn tất eKYC. Khi đã có tài khoản, bạn nạp tiền qua chuyển khoản ngân hàng và bắt đầu giao dịch cổ phiếu trên sàn HOSE hoặc HNX.</p>

<h2>Những bước đầu tiên sau khi mở tài khoản</h2>
<p>Sau khi có tài khoản, đừng vội vàng mua cổ phiếu ngay. Hãy dành ít nhất 1-2 tuần để làm quen với nền tảng giao dịch, tìm hiểu cách đọc bảng giá, các loại lệnh giao dịch (LO, MP, ATO, ATC) và thời gian giao dịch (phiên sáng 9:00-11:30, phiên chiều 13:00-14:45). Sử dụng tài khoản demo nếu có để luyện tập trước.</p>
<p>Bắt đầu với số vốn nhỏ mà bạn có thể chấp nhận mất mà không ảnh hưởng đến cuộc sống. Nhiều chuyên gia khuyên người mới nên bắt đầu với 10-20 triệu đồng, tập trung vào 2-3 cổ phiếu blue-chip hoặc quỹ ETF VN30 để có trải nghiệm thực tế trước khi tăng vốn. Đầu tư theo phương pháp DCA (mua đều đặn mỗi tháng) sẽ giúp bạn giảm rủi ro timing thị trường.</p>
<p>Quan trọng nhất là không ngừng học hỏi. Đọc sách về đầu tư, theo dõi tin tức kinh tế, tham gia các khóa học online và học hỏi từ những nhà đầu tư giàu kinh nghiệm. Thị trường chứng khoán là trường học lớn nhất và bài học đắt nhất thường đến từ những sai lầm của chính mình.</p>

<h2>Kết luận</h2>
<p>Mở tài khoản chứng khoán online năm 2026 là bước khởi đầu đơn giản nhất trong hành trình đầu tư. Chỉ cần CCCD, điện thoại và 15 phút là bạn đã sẵn sàng tham gia thị trường. Hãy bắt đầu ngay hôm nay, học hỏi liên tục và kiên nhẫn xây dựng tài sản cho tương lai.</p>
<h2>Đọc thêm</h2>
<p><a href="/blog/chung-khoan/cach-chon-cong-ty-chung-khoan-phu-hop">Cách chọn CTCK</a> · <a href="/blog/chung-khoan/cach-dau-tu-chung-khoan-nguoi-moi-2026">Đầu tư chứng khoán cho người mới</a></p>
<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`,
    },
];

console.log('🔧 Creating 3 posts (batch 2/3)...\n');
for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const words = p.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const { error } = await s.from('posts').insert({
        ...p,
        is_published: false,
        scheduled_at: schedule[i],
        featured_image: `https://images.unsplash.com/photo-${1590283603385 + i * 1111}-17ffb3a7f29f?w=800`,
        reading_time: `${Math.ceil(words / 200)} phút`,
    });
    if (error) console.log(`❌ ${p.slug}: ${error.message}`);
    else console.log(`✅ ${p.slug} → ${schedule[i].substring(5, 16)} (${words} từ)`);
}
console.log('\n🎉 Batch 2 done!');
