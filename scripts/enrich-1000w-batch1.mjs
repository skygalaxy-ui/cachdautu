import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Extra content to append to each post (slug → HTML content)
const extras = {
    'cach-chon-cong-ty-chung-khoan-phu-hop': `
<h2>Các tiêu chí đánh giá công ty chứng khoán chi tiết</h2>
<p>Khi lựa chọn công ty chứng khoán, nhà đầu tư cần xem xét nhiều yếu tố quan trọng. Phí giao dịch là yếu tố đầu tiên cần so sánh, bao gồm phí mua bán cổ phiếu, phí lưu ký, phí chuyển tiền và các phí ẩn khác. Nhiều công ty hiện nay đã giảm phí xuống 0.15-0.2% để cạnh tranh, thậm chí một số còn miễn phí hoàn toàn cho giao dịch online.</p>
<p>Nền tảng giao dịch cũng là yếu tố then chốt. Một ứng dụng giao dịch tốt cần có giao diện thân thiện, tốc độ khớp lệnh nhanh, biểu đồ phân tích kỹ thuật đầy đủ, và tính năng đặt lệnh điều kiện. Bạn nên thử trải nghiệm demo trước khi mở tài khoản thật.</p>
<p>Chất lượng nghiên cứu và tư vấn là điểm khác biệt lớn giữa các công ty. Những công ty hàng đầu như SSI, VNDirect, HSC thường có đội ngũ phân tích chuyên nghiệp, cung cấp báo cáo chi tiết về ngành và doanh nghiệp, giúp nhà đầu tư có thêm góc nhìn để đưa ra quyết định.</p>
<h2>So sánh top 5 công ty chứng khoán 2026</h2>
<p>SSI Securities vẫn dẫn đầu thị phần với nền tảng iBoard hiện đại, phí giao dịch cạnh tranh 0.15% và đội ngũ nghiên cứu mạnh nhất thị trường. VNDirect nổi bật với ứng dụng mobile thân thiện và các sản phẩm phái sinh đa dạng. TCBS của Techcombank thu hút nhờ hệ sinh thái TCB và phí giao dịch miễn phí cho giao dịch online. VPS chuyên về giao dịch derivatives với tốc độ khớp lệnh nhanh. Cuối cùng, MBS được đánh giá cao nhờ dịch vụ chăm sóc khách hàng tận tâm và các chương trình đào tạo miễn phí.</p>
<p>Dù chọn công ty nào, điều quan trọng nhất là phải đảm bảo công ty được cấp phép hoạt động bởi Ủy ban Chứng khoán Nhà nước và có bảo hiểm tiền gửi cho tài khoản nhà đầu tư. Hãy bắt đầu với số vốn nhỏ để trải nghiệm dịch vụ trước khi cam kết lâu dài.</p>`,

    'lai-suat-ngan-hang-2026-so-sanh': `
<h2>Phân tích xu hướng lãi suất 2026</h2>
<p>Trong bối cảnh kinh tế Việt Nam phục hồi mạnh mẽ, Ngân hàng Nhà nước đã điều chỉnh chính sách tiền tệ linh hoạt hơn. Lãi suất huy động tại các ngân hàng thương mại dao động từ 4.5% đến 6.5% cho kỳ hạn 12 tháng, tùy thuộc vào từng ngân hàng và chương trình khuyến mãi.</p>
<p>Các ngân hàng quốc doanh như Vietcombank, BIDV, Agribank thường có lãi suất thấp hơn (4.5-5.2%) nhưng an toàn tuyệt đối. Ngược lại, các ngân hàng tư nhân như Techcombank, VPBank, MB thường chào lãi suất cao hơn (5.5-6.5%) để thu hút tiền gửi, đi kèm nhiều ưu đãi hấp dẫn.</p>
<h2>Chiến lược gửi tiết kiệm thông minh</h2>
<p>Thay vì gửi tất cả vào một kỳ hạn, nhà đầu tư khôn ngoan nên áp dụng chiến lược "bậc thang" (CD ladder). Chia tiền thành 4-6 phần bằng nhau, gửi vào các kỳ hạn khác nhau (3, 6, 9, 12 tháng). Khi mỗi sổ đáo hạn, tái gửi vào kỳ hạn dài nhất. Chiến lược này giúp bạn vừa hưởng lãi suất cao của kỳ hạn dài, vừa có thanh khoản định kỳ.</p>
<p>Ngoài ra, nhiều ngân hàng số như KakaoBank Việt Nam, Timo, TNEX cung cấp lãi suất tiết kiệm online cao hơn 0.2-0.5% so với gửi tại quầy, vì chi phí vận hành thấp hơn. Đây là lựa chọn đáng cân nhắc cho người trẻ quen với công nghệ. Hãy so sánh kỹ và đọc điều khoản rút trước hạn trước khi quyết định.</p>`,

    'tong-ket-chien-luoc-dau-tu-thang-3-2026': `
<h2>Phân bổ danh mục khuyến nghị tháng 3/2026</h2>
<p>Dựa trên phân tích vĩ mô và vi mô, danh mục đầu tư cân bằng cho tháng 3/2026 được khuyến nghị: 40% cổ phiếu (ưu tiên ngành ngân hàng và công nghệ), 25% trái phiếu doanh nghiệp hạng A, 15% vàng làm tài sản phòng hộ, 10% crypto (Bitcoin và Ethereum), và 10% tiền mặt dự phòng.</p>
<p>Đối với phần cổ phiếu, nhà đầu tư nên tập trung vào các doanh nghiệp có nền tảng tài chính vững, tỷ lệ nợ thấp và triển vọng tăng trưởng lợi nhuận trên 15% trong năm 2026. Các mã blue-chip trong VN30 như VCB, FPT, MWG, HPG vẫn là lựa chọn an toàn cho nhà đầu tư dài hạn.</p>
<h2>Rủi ro cần theo dõi trong quý II/2026</h2>
<p>Một số rủi ro chính mà nhà đầu tư cần giám sát bao gồm: biến động tỷ giá USD/VND khi Fed điều chỉnh lãi suất, áp lực lạm phát từ giá năng lượng toàn cầu, và tình hình địa chính trị khu vực. Ngoài ra, thị trường bất động sản đang trong giai đoạn tái cơ cấu, có thể ảnh hưởng đến nhóm cổ phiếu ngân hàng và xây dựng.</p>
<p>Chiến lược phòng thủ được khuyến nghị là luôn duy trì stop-loss ở mức 7-10% cho mỗi vị thế, không đầu tư quá 20% danh mục vào một ngành duy nhất, và cập nhật thông tin thị trường hàng ngày qua các nguồn uy tín như CafeF, VnExpress Kinh doanh, và Bloomberg.</p>`,

    'cach-tiet-kiem-tien-hieu-qua-nguoi-tre': `
<h2>Ứng dụng công nghệ trong quản lý chi tiêu</h2>
<p>Thế hệ Gen Z và Millennials có lợi thế lớn khi được tiếp cận nhiều ứng dụng quản lý tài chính miễn phí. Money Lover, MISA và Spendy là ba ứng dụng phổ biến nhất tại Việt Nam, giúp theo dõi thu chi theo danh mục, đặt ngân sách hàng tháng và nhận cảnh báo khi vượt hạn mức.</p>
<p>Phương pháp "Bay trước tiết kiệm" (Pay Yourself First) là cách hiệu quả nhất để tích lũy. Ngay khi nhận lương, tự động chuyển 20-30% vào tài khoản tiết kiệm riêng trước khi chi tiêu. Nhiều ngân hàng cho phép thiết lập lệnh chuyển tiền tự động theo ngày, giúp bạn tiết kiệm mà không cần ý chí.</p>
<h2>Những sai lầm tiết kiệm phổ biến cần tránh</h2>
<p>Sai lầm lớn nhất là tiết kiệm quá cực đoan đến mức hy sinh chất lượng cuộc sống. Tiết kiệm bền vững phải đi kèm với cuộc sống cân bằng. Một sai lầm khác là để tiền nhàn rỗi trong tài khoản thanh toán không sinh lời thay vì gửi tiết kiệm online linh hoạt.</p>
<p>Ngoài ra, nhiều bạn trẻ mắc bẫy "tiết kiệm giả" khi mua sắm giảm giá. Mua một món đồ 500.000đ giảm còn 300.000đ không phải là tiết kiệm 200.000đ nếu bạn không thực sự cần nó. Hãy luôn tự hỏi "Mình có mua nếu không giảm giá không?" trước khi quyết định. Thói quen nhỏ này có thể giúp bạn tiết kiệm hàng triệu đồng mỗi năm.</p>`,

    'kinh-te-vi-mo-anh-huong-dau-tu': `
<h2>Các chỉ số kinh tế vĩ mô quan trọng nhất</h2>
<p>GDP (Tổng sản phẩm quốc nội) là thước đo tổng quan nhất về sức khỏe nền kinh tế. Khi GDP tăng trưởng mạnh (trên 6%), thị trường chứng khoán thường có xu hướng tăng theo. Tuy nhiên, nhà đầu tư cần phân tích cấu trúc GDP để hiểu tăng trưởng đến từ đâu: xuất khẩu, tiêu dùng nội địa hay đầu tư công.</p>
<p>CPI (Chỉ số giá tiêu dùng) phản ánh mức lạm phát. Lạm phát vừa phải (2-4%) tốt cho nền kinh tế, nhưng lạm phát cao (trên 5%) sẽ ăn mòn giá trị đầu tư và buộc Ngân hàng Nhà nước tăng lãi suất, gây áp lực lên thị trường cổ phiếu và bất động sản.</p>
<h2>Chu kỳ kinh tế và chiến lược đầu tư</h2>
<p>Nền kinh tế vận hành theo chu kỳ 4 giai đoạn: mở rộng, đỉnh, thu hẹp và đáy. Mỗi giai đoạn phù hợp với các loại tài sản khác nhau. Trong giai đoạn mở rộng, cổ phiếu tăng trưởng và bất động sản là lựa chọn tốt. Khi nền kinh tế đạt đỉnh, chuyển sang cổ phiếu phòng thủ và trái phiếu. Giai đoạn thu hẹp nên nắm giữ vàng và tiền mặt. Và tại đáy chu kỳ, đó là thời điểm tốt nhất để mua cổ phiếu giá rẻ.</p>
<p>Nhà đầu tư Việt Nam cần đặc biệt theo dõi chính sách của Fed (Cục Dự trữ Liên bang Mỹ) vì quyết định lãi suất của Mỹ ảnh hưởng trực tiếp đến dòng vốn ngoại vào Việt Nam, tỷ giá USD/VND, và tâm lý thị trường toàn cầu.</p>`,

    'forex-vs-crypto-so-sanh-chi-tiet': `
<h2>Phân tích rủi ro và cơ hội từng thị trường</h2>
<p>Thị trường Forex có lịch sử hàng thập kỷ với khung pháp lý rõ ràng tại hầu hết các quốc gia. Các cặp tiền tệ chính như EUR/USD, GBP/USD có thanh khoản cực cao và spread thấp. Tuy nhiên, Forex đòi hỏi vốn lớn hơn để có lợi nhuận đáng kể vì biến động giá thường chỉ 0.5-1% mỗi ngày, và nhà đầu tư thường sử dụng đòn bẩy cao (1:100 trở lên), làm tăng rủi ro.</p>
<p>Crypto có biến động mạnh hơn nhiều, với Bitcoin có thể dao động 5-15% trong một ngày. Điều này tạo cơ hội lợi nhuận lớn nhưng cũng có thể xóa sạch tài khoản nhanh chóng. Thị trường crypto hoạt động 24/7/365, không có ngày nghỉ, phù hợp với người có thời gian theo dõi liên tục.</p>
<h2>Ai nên chọn Forex, ai nên chọn Crypto?</h2>
<p>Forex phù hợp với nhà đầu tư có kinh nghiệm phân tích kỹ thuật, thích giao dịch có kỷ luật với kế hoạch quản lý rủi ro chặt chẽ, và muốn giao dịch trong khung pháp lý rõ ràng. Crypto phù hợp với người trẻ, chấp nhận rủi ro cao, tin vào tiềm năng công nghệ blockchain dài hạn, và muốn bắt đầu với vốn nhỏ.</p>
<p>Nhiều nhà đầu tư chuyên nghiệp kết hợp cả hai: dùng Forex cho chiến lược ngắn hạn ổn định và crypto cho phần đầu tư mạo hiểm cao. Dù chọn thị trường nào, nguyên tắc vàng vẫn là không bao giờ đầu tư số tiền mà bạn không thể chấp nhận mất.</p>`,

    'lam-phat-la-gi-tac-dong-bao-ve-tai-san': `
<h2>Lạm phát tại Việt Nam: Thực trạng và dự báo</h2>
<p>Lạm phát tại Việt Nam năm 2025 được kiểm soát ở mức 3.5-4%, nhờ chính sách tiền tệ linh hoạt của Ngân hàng Nhà nước và giá lương thực ổn định. Tuy nhiên, áp lực lạm phát từ giá năng lượng toàn cầu và chi phí logistics vẫn là mối lo ngại cho năm 2026.</p>
<p>Điều đáng chú ý là lạm phát "cảm nhận" của người dân thường cao hơn chỉ số CPI chính thức. Giá thuê nhà, học phí, viện phí và thực phẩm tăng nhanh hơn mức lạm phát trung bình, ảnh hưởng trực tiếp đến chi tiêu hàng ngày của các gia đình.</p>
<h2>5 cách bảo vệ tài sản trước lạm phát</h2>
<p>Vàng là kênh phòng hộ truyền thống nhất, với giá trị bảo toàn qua hàng nghìn năm. Bất động sản cho thuê vừa tăng giá theo lạm phát vừa tạo dòng tiền đều đặn. Cổ phiếu của doanh nghiệp có khả năng chuyển chi phí sang người tiêu dùng (pricing power) như ngành tiêu dùng, y tế cũng là lá chắn hiệu quả.</p>
<p>Trái phiếu lãi suất thả nổi và trái phiếu chỉ số hóa theo lạm phát (TIPS) giúp bảo vệ dòng tiền cố định. Cuối cùng, đầu tư vào chính bản thân bạn thông qua nâng cao kỹ năng và giáo dục là cách tốt nhất để tăng thu nhập nhanh hơn lạm phát. Người có kỹ năng chuyên môn cao luôn có khả năng đàm phán lương tốt hơn.</p>`,

    'vang-vs-usd-kenh-phong-ho-rui-ro': `
<h2>Mối quan hệ giữa vàng và USD</h2>
<p>Vàng và USD thường có mối tương quan nghịch: khi USD mạnh lên, giá vàng tính bằng USD thường giảm, và ngược lại. Điều này xảy ra vì vàng được định giá bằng USD trên thị trường quốc tế. Khi USD yếu, các nhà đầu tư quốc tế mua vàng rẻ hơn bằng đồng nội tệ, đẩy cầu và giá vàng lên.</p>
<p>Tuy nhiên, trong các cuộc khủng hoảng tài chính nghiêm trọng, cả vàng và USD đều có thể tăng đồng thời khi nhà đầu tư tìm kiếm "safe haven" (nơi trú ẩn an toàn). Hiện tượng này đã xảy ra trong khủng hoảng COVID-19 năm 2020 và xung đột địa chính trị năm 2022.</p>
<h2>Chiến lược phân bổ vàng và USD trong danh mục</h2>
<p>Các chuyên gia tài chính khuyến nghị giữ 5-15% danh mục đầu tư bằng vàng và 5-10% bằng ngoại tệ mạnh (USD, EUR) như lớp phòng hộ. Tỷ lệ cụ thể phụ thuộc vào mức độ chấp nhận rủi ro và giai đoạn kinh tế.</p>
<p>Tại Việt Nam, nhà đầu tư có thể mua vàng SJC, vàng nhẫn 999.9, hoặc đầu tư vào quỹ ETF vàng như SPDR Gold Shares thông qua các sàn chứng khoán quốc tế. Với USD, cách phổ biến nhất là mở tài khoản ngoại tệ tại ngân hàng hoặc mua trái phiếu Chính phủ Mỹ (US Treasury) qua các nền tảng đầu tư quốc tế. Điều quan trọng là cân bằng giữa an toàn và tăng trưởng dài hạn.</p>`,

    'bitcoin-halving-la-gi-tac-dong-gia-btc': `
<h2>Lịch sử các đợt Bitcoin Halving</h2>
<p>Bitcoin đã trải qua 4 lần halving kể từ khi ra đời năm 2009. Halving đầu tiên (2012) giảm phần thưởng từ 50 BTC xuống 25 BTC, sau đó giá Bitcoin tăng từ $12 lên $1,100 trong 12 tháng. Halving thứ hai (2016) giảm xuống 12.5 BTC, giá tăng từ $650 lên $20,000. Halving thứ ba (2020) giảm xuống 6.25 BTC, giá leo từ $8,700 lên $69,000 vào cuối 2021.</p>
<p>Halving gần nhất (tháng 4/2024) đã giảm phần thưởng xuống 3.125 BTC. Dựa trên mô hình Stock-to-Flow, nhiều nhà phân tích dự báo giá Bitcoin có thể đạt $150,000-$250,000 trong chu kỳ này, mặc dù thị trường luôn có nhiều biến số không thể dự đoán.</p>
<h2>Chiến lược đầu tư quanh sự kiện Halving</h2>
<p>Kinh nghiệm từ các chu kỳ trước cho thấy giai đoạn tích lũy tốt nhất là 6-12 tháng trước halving. Sau halving, thị trường thường sideway 2-3 tháng rồi mới bắt đầu xu hướng tăng mạnh, kéo dài 12-18 tháng.</p>
<p>Nhà đầu tư nên áp dụng chiến lược DCA (Dollar Cost Averaging): mua đều đặn mỗi tuần hoặc mỗi tháng một lượng cố định, bất kể giá lên hay xuống. Chiến lược này giúp giảm rủi ro mua đỉnh và tạo giá vốn trung bình hợp lý. Quan trọng nhất: chỉ đầu tư số tiền bạn sẵn sàng mất hoàn toàn, vì thị trường crypto vẫn còn rất non trẻ và nhiều rủi ro.</p>`,

    'cach-doc-tin-tuc-tai-chinh-phan-biet': `
<h2>Nhận diện tin giả và thao túng thị trường</h2>
<p>Mạng xã hội và các group đầu tư trên Telegram, Zalo là nơi tin giả lan truyền nhanh nhất. Một số dấu hiệu cảnh báo bao gồm: tin tức không có nguồn rõ ràng, lời khuyên mua/bán cấp bách với ngôn ngữ kích động như "cơ hội cuối cùng", "lỡ là tiếc cả đời", hoặc cam kết lợi nhuận cụ thể không thực tế.</p>
<p>Thao túng thị trường thường diễn ra theo mô hình "pump and dump": một nhóm người mua gom cổ phiếu hoặc crypto, sau đó lan truyền tin tức tích cực để đẩy giá lên, rồi bán ra khi giá đạt đỉnh, để lại những nhà đầu tư nhỏ lẻ ôm lỗ.</p>
<h2>Xây dựng hệ thống lọc tin tức cá nhân</h2>
<p>Để đọc tin tài chính hiệu quả, hãy tạo một danh sách các nguồn tin đáng tin cậy và kiểm tra chéo thông tin từ ít nhất 2-3 nguồn trước khi hành động. Các nguồn uy tín tại Việt Nam bao gồm: CafeF, VnExpress Kinh doanh, Người Đồng Hành, và báo cáo từ các công ty chứng khoán lớn.</p>
<p>Quốc tế có Bloomberg, Reuters, Financial Times và Wall Street Journal. Luôn đọc phần disclaimer (tuyên bố miễn trừ trách nhiệm) cuối mỗi bài phân tích để hiểu xung đột lợi ích tiềm ẩn. Quan trọng nhất, hãy phát triển tư duy phản biện và không bao giờ đưa ra quyết định đầu tư chỉ dựa trên một bài báo hay một lời khuyên duy nhất.</p>`,
};

console.log('🔧 Enriching posts (batch 1: 10 posts)...\n');
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
