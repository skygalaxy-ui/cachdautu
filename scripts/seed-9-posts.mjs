import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const CATS = {
    'kien-thuc-dau-tu': '31d10229-9735-4f69-a368-08ea7f0550a1',
    'chung-khoan': '96d5c106-653b-470e-90a7-6875e9a490fd',
    'tai-chinh-ca-nhan': '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
    'crypto': 'b7ced1f1-2dc7-47c7-a3bb-36d66c24cae5',
    'kinh-nghiem': 'ac86a067-5518-42d7-8045-a92a75f4a15f',
    'bat-dong-san': '439e89a0-04db-4c18-a91b-92682428e111',
};

const schedule = [
    '2026-02-24T08:00:00+07:00',
    '2026-02-24T12:00:00+07:00',
    '2026-02-24T18:00:00+07:00',
    '2026-02-25T08:00:00+07:00',
    '2026-02-25T12:00:00+07:00',
    '2026-02-25T18:00:00+07:00',
    '2026-02-26T08:00:00+07:00',
    '2026-02-26T12:00:00+07:00',
    '2026-02-26T18:00:00+07:00',
];

function makeContent(title, sections) {
    let html = '';
    for (const [heading, paras] of sections) {
        html += `<h2>${heading}</h2>\n`;
        for (const p of paras) html += `<p>${p}</p>\n`;
    }
    html += `<h2>Đọc thêm</h2>\n`;
    html += `<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`;
    return html;
}

const posts = [
    {
        title: 'Đầu Tư Chủ Động Vs Bị Động: Chiến Lược Nào Phù Hợp Với Bạn?',
        slug: 'dau-tu-chu-dong-vs-bi-dong-chien-luoc',
        excerpt: 'So sánh chi tiết đầu tư chủ động và bị động, giúp bạn chọn chiến lược phù hợp với mục tiêu tài chính.',
        category: 'kien-thuc-dau-tu',
        content: makeContent('Đầu Tư Chủ Động Vs Bị Động', [
            ['Đầu tư chủ động là gì?', [
                'Đầu tư chủ động (Active Investing) là chiến lược mà nhà đầu tư hoặc quỹ quản lý chủ động mua bán chứng khoán nhằm đạt lợi nhuận vượt trội so với thị trường chung. Người theo đuổi phương pháp này tin rằng thông qua phân tích kỹ lưỡng, họ có thể tìm ra những cổ phiếu bị định giá thấp hoặc nắm bắt xu hướng thị trường tốt hơn so với chỉ số tham chiếu.',
                'Đầu tư chủ động đòi hỏi nhà đầu tư dành nhiều thời gian nghiên cứu báo cáo tài chính, theo dõi tin tức kinh tế vĩ mô, phân tích kỹ thuật đồ thị giá và liên tục điều chỉnh danh mục. Các quỹ đầu tư chủ động thường có đội ngũ phân tích chuyên nghiệp, sử dụng mô hình định lượng phức tạp và có mạng lưới thông tin rộng để đưa ra quyết định đầu tư.',
                'Tuy nhiên, chi phí quản lý của đầu tư chủ động thường cao hơn đáng kể so với đầu tư bị động. Phí quản lý quỹ chủ động tại Việt Nam dao động từ 1.5% đến 2.5% giá trị tài sản ròng mỗi năm, chưa kể phí giao dịch phát sinh từ việc mua bán thường xuyên. Điều này tạo ra áp lực lớn, buộc nhà quản lý quỹ phải tạo ra lợi nhuận đủ cao để bù đắp chi phí và vẫn mang lại giá trị cho nhà đầu tư.',
            ]],
            ['Đầu tư bị động hoạt động như thế nào?', [
                'Đầu tư bị động (Passive Investing) là chiến lược mà nhà đầu tư mua và nắm giữ một danh mục phản ánh một chỉ số thị trường, chẳng hạn VN-Index hoặc VN30. Thay vì cố gắng "đánh bại thị trường", nhà đầu tư bị động chấp nhận mức lợi nhuận bằng với thị trường, tin rằng theo thời gian dài, rất ít ai có thể liên tục vượt trội so với chỉ số tham chiếu.',
                'Quỹ ETF (Exchange-Traded Fund) là công cụ phổ biến nhất cho đầu tư bị động tại Việt Nam. Các quỹ như E1VFVN30, FUEVFVND hay FUESSV50 cho phép nhà đầu tư sở hữu một rổ cổ phiếu đa dạng chỉ với một giao dịch duy nhất. Phí quản lý của quỹ ETF thường rất thấp, chỉ từ 0.3% đến 0.8% mỗi năm, tiết kiệm đáng kể so với quỹ chủ động.',
                'Warren Buffett, nhà đầu tư huyền thoại, từng đặt cược 1 triệu USD rằng quỹ chỉ số S&P 500 sẽ đánh bại một nhóm quỹ hedge fund trong 10 năm. Kết quả, quỹ chỉ số thắng áp đảo với lợi nhuận tích lũy 125.8% so với mức trung bình 36% của các quỹ hedge fund. Điều này chứng minh sức mạnh của đầu tư bị động trong dài hạn.',
            ]],
            ['So sánh hiệu suất thực tế tại Việt Nam', [
                'Tại thị trường Việt Nam, dữ liệu từ 2015 đến 2025 cho thấy khoảng 70% quỹ đầu tư chủ động không thể đánh bại VN-Index sau khi trừ phí. Tuy nhiên, 30% còn lại đã tạo ra alpha (lợi nhuận vượt trội) đáng kể, đặc biệt trong các giai đoạn thị trường biến động mạnh như đại dịch COVID-19 năm 2020 hoặc đợt suy giảm 2022.',
                'Điều thú vị là các quỹ chủ động tại Việt Nam có xu hướng hoạt động tốt hơn ở phân khúc cổ phiếu vốn hóa nhỏ và trung bình, nơi thông tin chưa được phản ánh đầy đủ vào giá. Ngược lại, ở phân khúc vốn hóa lớn (VN30), đầu tư bị động thường cho kết quả tương đương hoặc tốt hơn sau khi trừ phí.',
                'Số liệu từ các công ty quản lý quỹ hàng đầu cho thấy quỹ chỉ số VN30 ETF đã tăng trưởng trung bình 12% mỗi năm trong giai đoạn 2019-2025, trong khi quỹ chủ động trung bình chỉ đạt 10.5% sau phí. Tuy nhiên, quỹ chủ động tốt nhất đã đạt 18-20% hàng năm, chứng tỏ rằng lựa chọn đúng quỹ chủ động vẫn có thể mang lại phần thưởng xứng đáng.',
            ]],
            ['Khi nào nên chọn đầu tư chủ động?', [
                'Đầu tư chủ động phù hợp với những nhà đầu tư có thời gian, kiến thức và khả năng chịu rủi ro cao. Nếu bạn đam mê phân tích doanh nghiệp, có kinh nghiệm đọc báo cáo tài chính và sẵn sàng dành ít nhất 10-15 giờ mỗi tuần cho việc nghiên cứu, đầu tư chủ động có thể phù hợp với bạn.',
                'Bên cạnh đó, đầu tư chủ động cũng thích hợp trong các thị trường mới nổi như Việt Nam, nơi thông tin chưa hoàn toàn minh bạch và hiệu quả thị trường còn thấp. Những nhà đầu tư có lợi thế thông tin hoặc hiểu biết sâu về một ngành cụ thể có thể tận dụng sự kém hiệu quả này để tạo lợi nhuận vượt trội.',
                'Tuy nhiên, nếu bạn là người mới bắt đầu, có ít thời gian theo dõi thị trường hoặc muốn đầu tư một cách đơn giản và ít căng thẳng, đầu tư bị động thông qua quỹ ETF là lựa chọn thông minh hơn. Bạn có thể kết hợp cả hai phương pháp: dành 70-80% vốn cho đầu tư bị động qua ETF và 20-30% cho đầu tư chủ động vào những cổ phiếu bạn tin tưởng.',
            ]],
            ['Kết luận', [
                'Không có chiến lược nào là tuyệt đối đúng cho tất cả mọi người. Đầu tư chủ động mang lại tiềm năng lợi nhuận cao hơn nhưng đi kèm rủi ro và chi phí lớn hơn. Đầu tư bị động đơn giản, chi phí thấp và phù hợp với đa số nhà đầu tư cá nhân. Điều quan trọng nhất là hiểu rõ bản thân, mục tiêu tài chính và khả năng chịu rủi ro để đưa ra quyết định phù hợp.',
                'Dù chọn phương pháp nào, hãy nhớ rằng tính kỷ luật và kiên nhẫn là yếu tố quyết định thành công trong đầu tư dài hạn. Đừng để cảm xúc chi phối quyết định và luôn đa dạng hóa danh mục để giảm thiểu rủi ro.',
            ]],
        ]),
        links: '<p><a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">Tìm hiểu quỹ ETF</a> · <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">Chiến lược DCA</a></p>',
    },
    {
        title: 'Phân Bổ Tài Sản Theo Độ Tuổi: Quy Tắc Vàng Cho Nhà Đầu Tư',
        slug: 'phan-bo-tai-san-theo-do-tuoi-quy-tac',
        excerpt: 'Hướng dẫn phân bổ tài sản hợp lý theo từng giai đoạn cuộc đời để tối ưu lợi nhuận và giảm rủi ro.',
        category: 'tai-chinh-ca-nhan',
        content: makeContent('Phân Bổ Tài Sản Theo Độ Tuổi', [
            ['Tại sao phân bổ tài sản quan trọng?', [
                'Phân bổ tài sản (Asset Allocation) là quá trình chia vốn đầu tư vào các loại tài sản khác nhau như cổ phiếu, trái phiếu, bất động sản, vàng và tiền mặt. Nghiên cứu từ đại học Yale cho thấy hơn 90% sự khác biệt về lợi nhuận giữa các danh mục đầu tư được giải thích bởi cách phân bổ tài sản, không phải bởi việc chọn mã cổ phiếu hay timing thị trường.',
                'Phân bổ tài sản hợp lý giúp bạn cân bằng giữa tăng trưởng và bảo toàn vốn. Khi còn trẻ, bạn có nhiều thời gian để phục hồi từ những biến động thị trường, nên có thể chấp nhận rủi ro cao hơn với tỷ lệ cổ phiếu lớn. Ngược lại, khi gần nghỉ hưu, việc bảo toàn vốn trở nên ưu tiên hơn và bạn nên chuyển dần sang các tài sản an toàn hơn.',
                'Một sai lầm phổ biến của nhà đầu tư Việt Nam là tập trung quá nhiều vào một loại tài sản duy nhất. Nhiều người dồn 100% vào cổ phiếu khi thị trường tăng, hoặc 100% vào vàng khi lo ngại lạm phát. Đa dạng hóa qua phân bổ tài sản giúp giảm thiểu rủi ro mà không phải hy sinh quá nhiều lợi nhuận kỳ vọng.',
            ]],
            ['Quy tắc "100 trừ tuổi"', [
                'Quy tắc đơn giản nhất là "100 trừ tuổi" — con số này là tỷ lệ phần trăm vốn nên đầu tư vào cổ phiếu. Ví dụ, nếu bạn 30 tuổi, 70% vốn nên ở cổ phiếu và 30% vào trái phiếu hoặc tài sản an toàn. Khi 50 tuổi, tỷ lệ cổ phiếu giảm còn 50%.',
                'Tuy nhiên, quy tắc này cần điều chỉnh cho phù hợp với bối cảnh Việt Nam. Với kỳ vọng sống ngày càng tăng và lạm phát trung bình 3-4% mỗi năm, nhiều chuyên gia khuyên nên dùng công thức "110 trừ tuổi" hoặc "120 trừ tuổi" để duy trì tỷ lệ cổ phiếu cao hơn, đảm bảo danh mục tăng trưởng đủ để bù lạm phát trong suốt thời gian nghỉ hưu.',
                'Ngoài ra, thu nhập ổn định từ lương cũng nên được tính như một "trái phiếu ngầm". Nếu bạn có công việc ổn định với thu nhập cao, bạn có thể chấp nhận rủi ro đầu tư cao hơn so với người làm freelance hoặc kinh doanh riêng. Điều này có nghĩa là quy tắc tuổi chỉ là điểm khởi đầu, cần cá nhân hóa theo hoàn cảnh cụ thể.',
            ]],
            ['Giai đoạn 20-30 tuổi: Tích lũy và tăng trưởng', [
                'Đây là giai đoạn vàng để đầu tư mạnh vào cổ phiếu và tài sản rủi ro cao. Với 30-40 năm trước khi nghỉ hưu, bạn có đủ thời gian để vượt qua mọi chu kỳ giảm của thị trường. Danh mục gợi ý gồm 70-80% cổ phiếu (bao gồm ETF VN30 và cổ phiếu tăng trưởng), 10-15% crypto hoặc tài sản thay thế, và 10-15% quỹ khẩn cấp bằng tiền mặt.',
                'Ở giai đoạn này, sai lầm lớn nhất không phải là mất tiền vì đầu tư sai, mà là không đầu tư. Chi phí cơ hội của việc để tiền trong tài khoản tiết kiệm lãi suất 5% mỗi năm trong khi thị trường chứng khoán tăng trung bình 12% là vô cùng lớn khi tính theo lãi kép qua 30 năm. Một khoản 10 triệu đồng đầu tư vào chỉ số VN30 ETF năm 25 tuổi có thể tăng lên hơn 300 triệu đồng khi bạn 55 tuổi với tỷ suất 12% mỗi năm.',
                'Điều quan trọng nhất ở giai đoạn này là xây dựng thói quen đầu tư đều đặn. Áp dụng chiến lược DCA (Dollar Cost Averaging) bằng cách đầu tư một số tiền cố định mỗi tháng, bất kể thị trường tăng hay giảm. Thói quen này vừa giúp hạn chế rủi ro timing thị trường, vừa tận dụng sức mạnh của lãi kép từ sớm.',
            ]],
            ['Giai đoạn 30-50 tuổi: Cân bằng và đa dạng', [
                'Khi bước vào giai đoạn giữa sự nghiệp, bạn có trách nhiệm tài chính lớn hơn như nuôi con, trả nợ nhà và chuẩn bị cho giáo dục con cái. Danh mục cần cân bằng hơn với 50-60% cổ phiếu, 20-25% trái phiếu và quỹ mở, 10-15% bất động sản hoặc REITs, và 5-10% vàng phòng hộ.',
                'Giai đoạn này cũng là lúc bạn nên bắt đầu nghĩ đến thu nhập thụ động từ cổ tức. Chuyển một phần danh mục cổ phiếu từ cổ phiếu tăng trưởng sang cổ phiếu cổ tức cao và ổn định (dividend stocks) như các ngân hàng lớn, công ty tiện ích hoặc bất động sản. Thu nhập cổ tức không chỉ tạo dòng tiền đều đặn mà còn giảm biến động tổng thể của danh mục.',
                'Bảo hiểm cũng trở nên quan trọng ở giai đoạn này. Bảo hiểm nhân thọ, bảo hiểm sức khỏe và bảo hiểm tài sản giúp bảo vệ gia đình trước những rủi ro bất ngờ. Tuy nhiên, đừng nhầm lẫn bảo hiểm với đầu tư — mua bảo hiểm thuần túy (term insurance) với phí thấp và dành phần tiết kiệm được để đầu tư sẽ hiệu quả hơn so với các gói bảo hiểm liên kết đầu tư.',
            ]],
            ['Giai đoạn 50+ tuổi: Bảo toàn và thu nhập', [
                'Khi gần đến tuổi nghỉ hưu, ưu tiên là bảo toàn vốn và tạo dòng thu nhập ổn định. Danh mục nên gồm 30-40% cổ phiếu cổ tức cao, 30-35% trái phiếu chính phủ và doanh nghiệp uy tín, 15-20% tiền gửi tiết kiệm và 10% vàng. Mục tiêu là tạo ra dòng thu nhập đủ trang trải chi phí sinh hoạt mà không cần bán tài sản gốc.',
                'Một nguyên tắc quan trọng ở giai đoạn này là "quy tắc 4%" — mỗi năm bạn chỉ nên rút tối đa 4% giá trị danh mục để chi tiêu. Với quy tắc này, nếu bạn cần 20 triệu đồng mỗi tháng (240 triệu/năm), danh mục đầu tư cần đạt ít nhất 6 tỷ đồng khi nghỉ hưu. Con số này nghe có vẻ lớn, nhưng hoàn toàn khả thi nếu bạn bắt đầu đầu tư từ sớm với kỷ luật và chiến lược phân bổ tài sản đúng đắn.',
            ]],
            ['Kết luận', [
                'Phân bổ tài sản theo độ tuổi không phải là công thức cứng nhắc mà là kim chỉ nam linh hoạt. Điều quan trọng nhất là bắt đầu đầu tư càng sớm càng tốt, đa dạng hóa danh mục và điều chỉnh định kỳ theo giai đoạn cuộc đời. Hãy dành thời gian mỗi năm để đánh giá lại danh mục và tái cân bằng tài sản cho phù hợp với mục tiêu và khả năng chịu rủi ro hiện tại.',
            ]],
        ]),
        links: '<p><a href="/blog/tai-chinh-ca-nhan/fire-movement-nghi-huu-som-tuoi-40">Phong trào FIRE</a> · <a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">Sức mạnh lãi kép</a></p>',
    },
    {
        title: 'Đầu Tư Cổ Phiếu Cổ Tức: Xây Dựng Thu Nhập Thụ Động Bền Vững',
        slug: 'dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong',
        excerpt: 'Hướng dẫn đầu tư cổ phiếu cổ tức tại Việt Nam, cách chọn cổ phiếu và xây dựng danh mục thu nhập thụ động.',
        category: 'chung-khoan',
        content: makeContent('Đầu Tư Cổ Phiếu Cổ Tức', [
            ['Cổ tức là gì và tại sao quan trọng?', [
                'Cổ tức (Dividend) là phần lợi nhuận mà công ty phân phối cho cổ đông. Khi bạn sở hữu cổ phiếu của một công ty trả cổ tức đều đặn, bạn nhận được dòng tiền thụ động mà không cần bán cổ phiếu. Đây là chiến lược đầu tư được nhiều nhà đầu tư giàu kinh nghiệm ưa chuộng vì tính ổn định và khả năng tạo thu nhập dài hạn.',
                'Tại thị trường chứng khoán Việt Nam, nhiều doanh nghiệp lớn duy trì chính sách cổ tức hấp dẫn với tỷ suất cổ tức (Dividend Yield) từ 5% đến 10% mỗi năm. So với lãi suất tiết kiệm ngân hàng 4-5%, đầu tư cổ phiếu cổ tức mang lại lợi suất cao hơn đáng kể, đồng thời vẫn có cơ hội tăng giá vốn.',
                'Nghiên cứu lịch sử cho thấy cổ tức đóng góp tới 40-50% tổng lợi nhuận dài hạn của thị trường chứng khoán. Nhiều nhà đầu tư mới thường bỏ qua cổ tức và chỉ tập trung vào tăng giá, nhưng trong những giai đoạn thị trường đi ngang hoặc giảm, cổ tức là nguồn thu nhập đệm quan trọng giúp duy trì tổng lợi nhuận dương.',
            ]],
            ['Cách chọn cổ phiếu cổ tức tốt', [
                'Không phải mọi cổ phiếu trả cổ tức đều đáng đầu tư. Tiêu chí quan trọng nhất là tính bền vững của cổ tức. Hãy tìm các công ty đã trả cổ tức liên tục ít nhất 5 năm liên tiếp và có xu hướng tăng cổ tức qua các năm. Tỷ lệ chi trả cổ tức (Payout Ratio) nên dưới 70% lợi nhuận để đảm bảo công ty vẫn giữ lại đủ vốn để tái đầu tư và tăng trưởng.',
                'Các ngành thường có cổ tức cao và ổn định tại Việt Nam bao gồm ngân hàng thương mại lớn, công ty tiện ích như điện nước, viễn thông, khu công nghiệp và một số doanh nghiệp hàng tiêu dùng thiết yếu. Những công ty này có dòng tiền ổn định và ít bị ảnh hưởng bởi chu kỳ kinh tế.',
                'Bên cạnh tỷ suất cổ tức, hãy xem xét chất lượng cổ tức bằng cách kiểm tra dòng tiền tự do (Free Cash Flow). Nếu công ty trả cổ tức lớn hơn dòng tiền tự do, cổ tức có thể bị cắt giảm trong tương lai. Ngoài ra, tránh các công ty trả cổ tức cao bất thường trong một năm duy nhất (do bán tài sản hay lợi nhuận đột biến) vì tỷ suất này không bền vững.',
            ]],
            ['Chiến lược tái đầu tư cổ tức', [
                'Tái đầu tư cổ tức (Dividend Reinvestment) là chiến lược mạnh mẽ nhất để tận dụng lãi kép. Thay vì tiêu số tiền cổ tức nhận được, bạn dùng nó để mua thêm cổ phiếu. Theo thời gian, số lượng cổ phiếu bạn sở hữu tăng lên, dẫn đến số tiền cổ tức nhận được cũng tăng đều đặn, tạo thành vòng xoáy tăng trưởng.',
                'Giả sử bạn đầu tư 100 triệu đồng vào cổ phiếu có tỷ suất cổ tức 7% và giá cổ phiếu tăng trung bình 8% mỗi năm. Nếu tái đầu tư toàn bộ cổ tức, sau 20 năm danh mục của bạn sẽ đạt khoảng 1.2 tỷ đồng, so với chỉ 466 triệu nếu không tái đầu tư cổ tức. Sự khác biệt khổng lồ này chính là sức mạnh của hiệu ứng kép từ cổ tức.',
                'Để tối ưu chiến lược này, bạn nên mua thêm cổ phiếu vào những thời điểm giá giảm hoặc điều chỉnh. Cổ tức nhận được vào những lúc thị trường giảm cho phép bạn mua được nhiều cổ phiếu hơn với giá thấp hơn, tăng tỷ suất sinh lợi dài hạn.',
            ]],
            ['Xây dựng danh mục cổ tức đa dạng', [
                'Một danh mục cổ tức lý tưởng nên gồm 8-12 cổ phiếu từ ít nhất 4-5 ngành khác nhau. Đa dạng hóa ngành giúp giảm rủi ro khi một ngành gặp khó khăn. Ví dụ, khi ngành ngân hàng gặp vấn đề nợ xấu, cổ tức từ cổ phiếu tiện ích và hàng tiêu dùng vẫn duy trì ổn định, giúp cân bằng tổng thu nhập.',
                'Ngoài cổ phiếu đơn lẻ, bạn cũng có thể xem xét các quỹ ETF tập trung vào cổ tức nếu có sẵn tại thị trường Việt Nam. Quỹ ETF cổ tức giúp bạn đa dạng hóa rộng rãi mà không cần tự chọn từng mã cổ phiếu, đặc biệt phù hợp với nhà đầu tư bận rộn.',
                'Hãy theo dõi lịch trả cổ tức của từng công ty để tối ưu dòng tiền. Lý tưởng nhất là phân bổ danh mục sao cho mỗi quý hoặc mỗi tháng đều nhận được cổ tức, tạo dòng thu nhập đều đặn thay vì nhận tập trung vào một vài tháng trong năm.',
            ]],
            ['Kết luận', [
                'Đầu tư cổ phiếu cổ tức là chiến lược phù hợp cho những ai muốn xây dựng dòng thu nhập thụ động bền vững. Với sự kiên nhẫn, kỷ luật tái đầu tư cổ tức và đa dạng hóa danh mục, bạn hoàn toàn có thể tạo ra nguồn thu nhập đáng kể sau 10-20 năm. Quan trọng là bắt đầu ngay hôm nay và duy trì chiến lược nhất quán qua mọi giai đoạn thị trường.',
            ]],
        ]),
        links: '<p><a href="/blog/chung-khoan/co-phieu-tang-truong-vs-gia-tri">Cổ phiếu tăng trưởng vs giá trị</a> · <a href="/blog/chung-khoan/cach-dau-tu-chung-khoan-nguoi-moi-2026">Hướng dẫn đầu tư chứng khoán</a></p>',
    },
];

// Add links to content
for (const p of posts) {
    p.content += '\n' + p.links;
    delete p.links;
}

console.log('🔧 Creating 3 posts (batch 1/3)...\n');
for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const words = p.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const { error } = await s.from('posts').insert({
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        content: p.content,
        category_id: CATS[p.category],
        is_published: false,
        scheduled_at: schedule[i],
        featured_image: `https://images.unsplash.com/photo-${1611974789855 + i * 1000}-aOOWM_y0i7Q?w=800`,
        reading_time: `${Math.ceil(words / 200)} phút`,
    });
    if (error) console.log(`❌ ${p.slug}: ${error.message}`);
    else console.log(`✅ ${p.slug} → ${schedule[i].substring(5, 16)} (${words} từ)`);
}

console.log('\n🎉 Batch 1 done!');
