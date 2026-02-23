import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const extras = {
    'co-phieu-tang-truong-vs-gia-tri': `
<h2>Cách nhận diện cổ phiếu tăng trưởng tiềm năng</h2>
<p>Cổ phiếu tăng trưởng thường có doanh thu tăng trên 20%/năm, biên lợi nhuận mở rộng, và hoạt động trong ngành có tiềm năng tăng trưởng lớn như công nghệ, năng lượng tái tạo, y tế sinh học. Tại Việt Nam, FPT, MWG, PNJ là những ví dụ điển hình của cổ phiếu tăng trưởng với mức tăng trưởng lợi nhuận đều đặn trên 15% trong nhiều năm liên tiếp.</p>
<p>Tuy nhiên, cổ phiếu tăng trưởng thường có PE cao (trên 20), nghĩa là nhà đầu tư đang trả giá premium cho triển vọng tương lai. Rủi ro lớn nhất là khi tăng trưởng chậm lại so với kỳ vọng, giá cổ phiếu có thể điều chỉnh mạnh 30-50%.</p>
<h2>Chiến lược đầu tư kết hợp GARP</h2>
<p>GARP (Growth At Reasonable Price) là chiến lược kết hợp cả hai trường phái: tìm doanh nghiệp tăng trưởng tốt nhưng với giá hợp lý. Chỉ số PEG (PE/Growth rate) dưới 1 là tín hiệu tốt. Ví dụ: cổ phiếu có PE 15 và tăng trưởng EPS 20% sẽ có PEG = 0.75, nghĩa là đang được định giá rẻ so với tốc độ tăng trưởng. Đây là phương pháp mà huyền thoại Peter Lynch đã sử dụng thành công để đạt lợi nhuận trung bình 29%/năm trong 13 năm quản lý quỹ Magellan.</p>`,

    'tai-khoan-demo-luyen-tap-giao-dich': `
<h2>Sai lầm phổ biến khi dùng tài khoản demo</h2>
<p>Sai lầm lớn nhất là giao dịch demo không nghiêm túc vì "không mất tiền thật." Nhiều người đặt lệnh liều lĩnh, không đặt stop-loss, và tạo thói quen xấu. Hãy đối xử với tài khoản demo như tiền thật: đặt số vốn giống thực tế (5-10 triệu thay vì 1 tỷ ảo), tuân thủ kế hoạch giao dịch, và ghi nhật ký mọi giao dịch.</p>
<p>Sai lầm tiếp theo là chuyển sang tài khoản thật quá sớm sau vài ngày thắng trên demo. Hãy giao dịch demo ít nhất 2-3 tháng và có lợi nhuận ổn định trước khi chuyển. Yếu tố tâm lý khi giao dịch tiền thật khác hoàn toàn so với demo, nên hãy chuẩn bị tinh thần cho sự chuyển đổi này.</p>
<h2>Từ demo đến thực tế: Lộ trình gợi ý</h2>
<p>Tháng 1-2: Làm quen nền tảng, học các loại lệnh, đọc bảng giá. Tháng 3-4: Xây dựng và thử nghiệm chiến lược giao dịch cụ thể. Tháng 5-6: Tinh chỉnh quản lý rủi ro, đạt tỷ lệ thắng trên 50%. Sau 6 tháng demo thành công, bắt đầu với tài khoản thật số vốn nhỏ. Tăng dần vốn khi đã chứng minh được khả năng sinh lời bền vững trong ít nhất 3 tháng liên tiếp.</p>`,

    'dau-tu-esg-xu-huong-ben-vung-2026': `
<h2>Thực trạng ESG tại Việt Nam</h2>
<p>Xu hướng đầu tư ESG tại Việt Nam đang ở giai đoạn đầu nhưng phát triển nhanh. Sàn HOSE đã triển khai Chỉ số Phát triển Bền vững (VNSI) từ 2017, bao gồm 20 doanh nghiệp đạt tiêu chuẩn ESG. Các công ty như Vinamilk, FPT, PNJ được đánh giá cao về minh bạch thông tin và trách nhiệm xã hội.</p>
<p>Từ năm 2025, Ủy ban Chứng khoán Nhà nước yêu cầu các công ty niêm yết công bố báo cáo phát triển bền vững, tạo cơ sở dữ liệu cho nhà đầu tư ESG đánh giá và so sánh. Nhiều quỹ đầu tư nước ngoài đã có tiêu chí ESG bắt buộc khi xem xét đầu tư vào thị trường Việt Nam.</p>
<h2>Lợi ích thực tế của đầu tư ESG</h2>
<p>Nghiên cứu cho thấy doanh nghiệp có điểm ESG cao thường có chi phí vốn thấp hơn, ít rủi ro pháp lý, và hiệu suất dài hạn tốt hơn. Trong giai đoạn thị trường giảm, danh mục ESG thường ít biến động hơn vì loại bỏ được các doanh nghiệp có rủi ro quản trị kém. Đây không chỉ là đầu tư có trách nhiệm mà còn là chiến lược đầu tư thông minh cho tương lai.</p>`,

    'reits-la-gi-dau-tu-bat-dong-san-von-nho': `
<h2>So sánh REITs với các hình thức đầu tư bất động sản khác</h2>
<p>Đầu tư bất động sản truyền thống yêu cầu vốn lớn (hàng tỷ đồng), thanh khoản thấp (bán mất nhiều tháng), và đòi hỏi kiến thức quản lý tài sản. REITs giải quyết tất cả vấn đề này: vốn nhỏ từ vài triệu đồng, thanh khoản cao (mua bán trên sàn chứng khoán), và được quản lý bởi chuyên gia.</p>
<p>Tuy nhiên, REITs cũng có nhược điểm: giá dao động theo thị trường chứng khoán (không ổn định như BĐS thật), chịu rủi ro lãi suất (khi lãi suất tăng, giá REITs thường giảm), và nhà đầu tư không có quyền kiểm soát tài sản cơ sở.</p>
<h2>REITs tại Việt Nam: Triển vọng và thách thức</h2>
<p>Khung pháp lý cho REITs tại Việt Nam đã có từ Luật Chứng khoán 2019 nhưng thị trường vẫn còn rất non trẻ. Hiện chỉ có một số quỹ đầu tư bất động sản hoạt động, chủ yếu tập trung vào phân khúc văn phòng và khu công nghiệp. Với tốc độ đô thị hóa cao và nhu cầu bất động sản tăng mạnh, REITs tại Việt Nam có tiềm năng phát triển mạnh trong 5-10 năm tới khi thị trường trưởng thành hơn và niềm tin nhà đầu tư được xây dựng.</p>`,

    'p2p-lending-la-gi-co-hoi-rui-ro': `
<h2>Thực trạng P2P Lending tại Việt Nam 2026</h2>
<p>Thị trường P2P Lending tại Việt Nam đã trải qua giai đoạn sàng lọc mạnh sau khi Ngân hàng Nhà nước ban hành khung pháp lý thử nghiệm (sandbox). Nhiều nền tảng không đạt chuẩn đã bị loại bỏ, còn lại các nền tảng uy tín hơn với quy trình thẩm định chặt chẽ và tỷ lệ nợ xấu được kiểm soát tốt hơn.</p>
<p>Lãi suất cho nhà đầu tư thường dao động 10-18%/năm, cao hơn đáng kể so với gửi tiết kiệm. Tuy nhiên, rủi ro vỡ nợ vẫn tồn tại ở mức 3-8% tùy nền tảng và loại khoản vay. Nhà đầu tư nên phân tán khoản đầu tư vào nhiều khoản vay nhỏ thay vì tập trung vào một vài khoản lớn.</p>
<h2>Chiến lược đầu tư P2P thông minh</h2>
<p>Chỉ phân bổ tối đa 10-15% danh mục vào P2P Lending. Ưu tiên các khoản vay có tài sản đảm bảo và kỳ hạn ngắn dưới 12 tháng. Đa dạng hóa trên nhiều nền tảng khác nhau để giảm rủi ro tập trung. Theo dõi sát tỷ lệ trả nợ đúng hạn và rút vốn ngay nếu thấy nền tảng có dấu hiệu bất thường. Đầu tư P2P cần kỷ luật và giám sát thường xuyên hơn các kênh đầu tư truyền thống.</p>`,

    'giao-duc-tai-chinh-cho-con-day-tu-nho': `
<h2>Hoạt động giáo dục tài chính theo độ tuổi</h2>
<p>Tuổi 3-5: Dạy nhận biết tiền xu, tiền giấy qua trò chơi bán hàng giả. Cho con heo đất để tạo thói quen tiết kiệm. Dạy khái niệm "muốn" và "cần" thông qua việc đi siêu thị cùng con. Tuổi 6-10: Cho tiền tiêu vặt hàng tuần với điều kiện ghi sổ chi tiêu. Mở tài khoản tiết kiệm đứng tên con tại ngân hàng. Dạy cách so sánh giá và tìm giá trị tốt nhất khi mua sắm.</p>
<p>Tuổi 11-14: Giới thiệu khái niệm đầu tư qua ví dụ thực tế (mua cổ phiếu game công ty yêu thích). Dạy về lãi kép bằng bảng tính Excel. Cho con tham gia lập ngân sách gia đình. Tuổi 15-18: Mở tài khoản chứng khoán giám hộ, để con thử giao dịch với vốn nhỏ. Dạy về thuế, bảo hiểm, và quản lý tín dụng trước khi vào đại học.</p>
<h2>Tài nguyên học tập được đề xuất</h2>
<p>Sách: "Cha giàu cha nghèo" (Robert Kiyosaki), "Người giàu nhất thành Babylon" (George Clason) phù hợp cho thanh thiếu niên. Game: Cashflow, Monopoly dạy tư duy tài chính qua trò chơi. Ứng dụng: GoHenry, Greenlight giúp quản lý chi tiêu cho trẻ em. Kênh YouTube: The Money Show VN, CashFlow Academy có nội dung tiếng Việt dễ hiểu cho gia đình.</p>`,

    'dau-tu-vao-ban-than-kenh-loi-nhuan-cao': `
<h2>Các kênh đầu tư bản thân hiệu quả nhất</h2>
<p>Học ngoại ngữ là đầu tư có ROI cao nhất. Người thành thạo tiếng Anh tại Việt Nam có mức lương cao hơn 30-50% so với cùng vị trí. Thêm tiếng Nhật, Hàn, Trung sẽ mở ra nhiều cơ hội nghề nghiệp hấp dẫn. Các nền tảng miễn phí như Duolingo, YouTube, podcast giúp bạn học mọi lúc mọi nơi.</p>
<p>Kỹ năng số (digital skills) ngày càng quan trọng: phân tích dữ liệu với Excel/Python, marketing online, thiết kế đồ họa, và lập trình cơ bản. Các khóa học trên Udemy, Coursera thường giảm giá còn 200-400 nghìn đồng, rẻ hơn rất nhiều so với giá trị kỹ năng mang lại.</p>
<h2>Đo lường ROI đầu tư bản thân</h2>
<p>Khác với đầu tư tài chính, ROI đầu tư bản thân khó đo lường chính xác nhưng thường cao hơn nhiều. Một khóa học 5 triệu đồng giúp bạn nâng lương 3 triệu/tháng có ROI 720%/năm. Một cuốn sách 200K mở ra ý tưởng kinh doanh triệu đô có ROI vô hạn. Hãy dành ít nhất 5-10% thu nhập hàng năm cho việc học tập và phát triển bản thân. Đây là khoản đầu tư duy nhất không ai có thể lấy đi được.</p>`,

    'tam-ly-giao-dich-sai-lam-cam-xuc': `
<h2>5 thiên kiến tâm lý nguy hiểm nhất trong đầu tư</h2>
<p>Thiên kiến xác nhận (Confirmation Bias): chỉ tìm thông tin ủng hộ quyết định đã có, bỏ qua cảnh báo ngược lại. Hiệu ứng bầy đàn (Herd Mentality): mua vì mọi người đang mua, bán vì mọi người đang bán, bất kể phân tích. Thiên kiến mất mát (Loss Aversion): giữ cổ phiếu lỗ quá lâu vì không muốn chấp nhận thua lỗ, trong khi bán cổ phiếu lời quá sớm.</p>
<p>Hiệu ứng neo (Anchoring Effect): để giá mua ban đầu ảnh hưởng quyết định hiện tại. Ví dụ: mua ở 50K, giá giảm về 30K, vẫn chờ "về vốn" mà không đánh giá lại triển vọng. Thiên kiến quá tự tin (Overconfidence): sau vài giao dịch thắng liên tiếp, tăng rủi ro quá mức và chịu thua lỗ lớn.</p>
<h2>Xây dựng kỷ luật giao dịch</h2>
<p>Viết trading plan trước mỗi giao dịch với điểm vào, stop-loss, và mục tiêu lợi nhuận cụ thể. Tuân thủ kế hoạch bất kể cảm xúc. Giới hạn số giao dịch mỗi ngày hoặc mỗi tuần. Sau mỗi giao dịch thua lỗ, nghỉ ít nhất 24 giờ trước khi giao dịch tiếp. Ghi nhật ký giao dịch bao gồm cả trạng thái cảm xúc để nhận diện pattern sai lầm tâm lý của bản thân.</p>`,

    'quy-khan-cap-tai-sao-can-xay-dung': `
<h2>Cách xây dựng quỹ khẩn cấp từ con số 0</h2>
<p>Nếu bạn chưa có quỹ khẩn cấp, hãy bắt đầu nhỏ. Đặt mục tiêu 1 tháng chi tiêu trước (khoảng 8-10 triệu). Cắt giảm 1-2 khoản chi không cần thiết mỗi tháng và chuyển tiền đó vào tài khoản riêng. Bán các đồ dùng không cần trên Chợ Tốt, Shopee. Sử dụng tiền thưởng, tiền lì xì, thu nhập phụ để tăng tốc xây dựng quỹ.</p>
<p>Khi đã có 1 tháng chi tiêu, tăng dần lên 3 tháng, rồi 6 tháng. Quỹ khẩn cấp nên được gửi ở nơi an toàn và có thanh khoản cao: tài khoản tiết kiệm online không kỳ hạn hoặc kỳ hạn 1 tháng, quỹ thị trường tiền tệ, hoặc tài khoản tiết kiệm lãi suất thả nổi.</p>
<h2>Khi nào được phép dùng quỹ khẩn cấp?</h2>
<p>Quỹ khẩn cấp CHỈ dùng cho tình huống thực sự khẩn cấp: mất việc, tai nạn, bệnh nặng, sửa chữa nhà/xe đột xuất. KHÔNG dùng cho: mua sắm giảm giá, du lịch, đầu tư "cơ hội vàng", hoặc cho vay bạn bè. Sau khi sử dụng, ưu tiên bổ sung lại quỹ ngay lập tức. Hãy coi quỹ khẩn cấp như bảo hiểm sinh mạng tài chính. Nó cho bạn sự an tâm và tự do để đưa ra quyết định tài chính đúng đắn thay vì quyết định vì sợ hãi.</p>`,

    'bao-hiem-nhan-tho-co-phai-kenh-dau-tu': `
<h2>Phân biệt bảo hiểm bảo vệ và bảo hiểm đầu tư</h2>
<p>Bảo hiểm nhân thọ truyền thống (term life) thuần túy là công cụ bảo vệ: phí thấp, quyền lợi cao nếu xảy ra rủi ro. Ví dụ: phí 3-5 triệu/năm cho quyền lợi bảo vệ 1-2 tỷ đồng. Đây là lựa chọn tốt nhất cho người cần bảo vệ gia đình với chi phí thấp.</p>
<p>Bảo hiểm liên kết đầu tư (unit-linked) kết hợp bảo vệ và đầu tư: một phần phí bảo hiểm được đầu tư vào các quỹ. Tuy nhiên, chi phí quản lý cao (2-4%/năm), phí ban đầu lớn (năm đầu có thể lên đến 50-70% phí đóng), và tính minh bạch thấp khiến hiệu suất đầu tư thực tế thường kém hơn so với tự đầu tư.</p>
<h2>Lời khuyên từ chuyên gia tài chính</h2>
<p>Hầu hết chuyên gia tài chính độc lập khuyên nên "Mua bảo hiểm thuần và đầu tư phần còn lại" (Buy Term and Invest the Difference - BTID). Cụ thể: mua bảo hiểm nhân thọ có kỳ hạn với chi phí thấp để bảo vệ gia đình, và sử dụng số tiền tiết kiệm được để tự đầu tư vào cổ phiếu, ETF, quỹ mở. Chiến lược này thường mang lại tổng giá trị tài sản cao hơn 20-40% sau 20 năm so với mua bảo hiểm liên kết đầu tư.</p>`,

    'dau-tu-quy-mo-tai-viet-nam-2026': `
<h2>Các loại quỹ mở phổ biến tại Việt Nam</h2>
<p>Quỹ cổ phiếu như VCBF-BCF, VFMVF4 đầu tư chủ yếu vào cổ phiếu, phù hợp nhà đầu tư chấp nhận rủi ro cao và đầu tư dài hạn trên 5 năm. Quỹ trái phiếu như VCBF-FIF, SSIBF an toàn hơn, phù hợp người muốn thu nhập ổn định. Quỹ cân bằng kết hợp cả cổ phiếu và trái phiếu, phù hợp đa số nhà đầu tư.</p>
<p>ETF (Exchange Traded Fund) là dạng quỹ mở niêm yết trên sàn chứng khoán, mua bán như cổ phiếu với phí quản lý rất thấp (0.3-0.5%/năm). VFMVN30 ETF theo dõi rổ VN30 là ETF phổ biến nhất tại Việt Nam, cho phép đầu tư vào 30 cổ phiếu lớn nhất chỉ với một giao dịch.</p>
<h2>Cách chọn quỹ mở phù hợp</h2>
<p>Xem xét hiệu suất quỹ trong ít nhất 3-5 năm, không chỉ 1 năm gần nhất. So sánh với benchmark (chỉ số tham chiếu) để đánh giá năng lực quản lý quỹ. Kiểm tra phí quản lý, phí mua/bán, phí hiệu suất. Đọc chiến lược đầu tư và xem danh mục top holdings. Ưu tiên quỹ từ các công ty quản lý quỹ uy tín có lịch sử hoạt động lâu năm như VinaCapital, Dragon Capital, SSI AM.</p>`,

    'stablecoin-la-gi-usdt-usdc-vai-tro': `
<h2>Rủi ro thực sự của Stablecoin</h2>
<p>Dù gọi là "stablecoin," chúng không hoàn toàn ổn định. Vụ sụp đổ TerraUSD (UST) năm 2022 khiến nhà đầu tư mất hàng tỷ USD là bài học đắt giá. UST là algorithmic stablecoin, duy trì peg bằng thuật toán thay vì tài sản dự trữ thực. Khi mất niềm tin, cơ chế này sụp đổ hoàn toàn.</p>
<p>USDT (Tether) cũng từng bị nghi vấn về tính minh bạch của tài sản dự trữ, mặc dù đã cải thiện với các báo cáo kiểm toán định kỳ. USDC (Circle) được coi là an toàn hơn nhờ dự trữ 100% bằng USD và trái phiếu Kho bạc Mỹ, với báo cáo kiểm toán tháng từ Grant Thornton.</p>
<h2>Ứng dụng thực tế của Stablecoin</h2>
<p>Stablecoin không chỉ dùng để trade crypto. Chuyển tiền quốc tế với stablecoin nhanh hơn (vài phút thay vì 2-5 ngày) và rẻ hơn (phí $1-5 thay vì $20-50) so với chuyển khoản ngân hàng truyền thống. Staking stablecoin trên các nền tảng DeFi uy tín có thể cho lợi nhuận 3-8%/năm, cao hơn tiết kiệm USD tại ngân hàng. Tuy nhiên, nhà đầu tư Việt Nam cần lưu ý rằng giao dịch crypto chưa có khung pháp lý rõ ràng tại Việt Nam, nên cần tự chịu trách nhiệm về rủi ro.</p>`,

    'cac-loai-lenh-chung-khoan-ato-atc-lo-mp': `
<h2>Chiến lược sử dụng lệnh hiệu quả</h2>
<p>Lệnh ATO phù hợp khi bạn muốn chắc chắn mua/bán được cổ phiếu ngay đầu phiên, thường dùng khi có tin tức quan trọng overnight. Lệnh LO là lựa chọn an toàn nhất cho người mới, cho phép kiểm soát giá mua/bán và thường được dùng trong phiên giao dịch liên tục từ 9h15-14h30.</p>
<p>Lệnh MP (Market Price) thực hiện ngay lập tức ở giá thị trường tốt nhất, phù hợp khi ưu tiên tốc độ hơn giá. Lệnh ATC dùng cuối phiên để tham gia đấu giá đóng cửa, thường có khối lượng giao dịch lớn và giá phản ánh cung cầu thực.</p>
<h2>Mẹo đặt lệnh cho người mới</h2>
<p>Đối với người mới, hãy bắt đầu chỉ dùng lệnh LO để kiểm soát rủi ro. Khi đặt lệnh mua, đặt giá thấp hơn giá hiện tại 1-2 bước giá và kiên nhẫn chờ. Khi bán, chia thành 2-3 lệnh ở các mức giá khác nhau để tối ưu giá bán trung bình. Tuyệt đối tránh đặt lệnh MP trong phiên biến động mạnh vì có thể khớp ở giá bất lợi. Và luôn kiểm tra lại lệnh trước khi xác nhận, vì sai sót trong đặt lệnh là lý do phổ biến nhất khiến nhà đầu tư mới thua lỗ.</p>`,
};

console.log('🔧 Enriching posts (batch 3: 12 posts)...\n');
let updated = 0;
for (const [slug, extra] of Object.entries(extras)) {
    const { data: post } = await s.from('posts').select('id, content').eq('slug', slug).single();
    if (!post) { console.log(`❌ Not found: ${slug}`); continue; }

    const newContent = post.content + '\n' + extra.trim();
    const wordCount = newContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w.length > 0).length;

    const { error } = await s.from('posts').update({ content: newContent }).eq('id', post.id);
    if (error) { console.log(`❌ ${slug}: ${error.message}`); }
    else { console.log(`✅ ${slug} → ${wordCount} từ`); updated++; }
}
console.log(`\n🎉 Enriched ${updated} posts`);
