import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const extras = {
    // Fix 3 bài vẫn dưới 1000 từ batch 1
    'lai-suat-ngan-hang-2026-so-sanh': `
<h2>Lưu ý quan trọng khi gửi tiết kiệm</h2>
<p>Trước khi gửi tiết kiệm, hãy đảm bảo bạn đã có quỹ khẩn cấp đủ 3-6 tháng chi tiêu trong tài khoản thanh toán. Khi chọn ngân hàng, ưu tiên những ngân hàng được Bảo hiểm Tiền gửi Việt Nam bảo vệ và thuộc nhóm có vốn điều lệ lớn. Ngoài lãi suất, cần xem xét phí duy trì tài khoản, điều kiện rút trước hạn và chất lượng dịch vụ khách hàng. Đừng quên rằng lãi tiết kiệm phải chịu thuế thu nhập cá nhân 5% trên phần lãi nhận được.</p>`,

    'tong-ket-chien-luoc-dau-tu-thang-3-2026': `
<h2>Lời khuyên cho nhà đầu tư mới</h2>
<p>Nếu bạn mới bắt đầu hành trình đầu tư, tháng 3/2026 là thời điểm tốt để xây dựng nền tảng kiến thức trước khi bỏ vốn. Hãy dành thời gian học về phân tích cơ bản, đọc báo cáo tài chính doanh nghiệp, và thử nghiệm trên tài khoản demo trước khi giao dịch thật. Bắt đầu với số vốn nhỏ, học từ sai lầm và dần mở rộng khi đã có kinh nghiệm và sự tự tin.</p>`,

    'cach-tiet-kiem-tien-hieu-qua-nguoi-tre': `
<h2>Mục tiêu tiết kiệm theo độ tuổi</h2>
<p>Ở tuổi 25, mục tiêu đầu tiên nên là xây dựng quỹ khẩn cấp bằng 3 tháng lương. Đến tuổi 30, bạn nên có quỹ tiết kiệm bằng 1 năm thu nhập và bắt đầu đầu tư dài hạn. Tuổi 35 là lúc tối ưu hóa danh mục đầu tư và chuẩn bị cho các mục tiêu lớn như mua nhà hoặc lập gia đình. Hãy nhớ rằng bắt đầu sớm là lợi thế lớn nhất nhờ sức mạnh của lãi kép theo thời gian.</p>`,

    // Batch 2: 10 bài tiếp theo
    'fire-movement-nghi-huu-som-tuoi-40': `
<h2>Các biến thể của phong trào FIRE</h2>
<p>FIRE không chỉ có một hình thức duy nhất. Lean FIRE dành cho người sống tối giản, cần khoảng 25 triệu/tháng chi tiêu, tương đương tích lũy khoảng 7.5 tỷ đồng. Fat FIRE dành cho người muốn duy trì mức sống cao, cần 50-100 triệu/tháng, đòi hỏi tích lũy 15-30 tỷ đồng. Barista FIRE là hình thức bán nghỉ hưu: bạn chỉ cần công việc bán thời gian nhẹ nhàng để bổ sung thu nhập thụ động.</p>
<h2>Lộ trình FIRE thực tế tại Việt Nam</h2>
<p>Với mức lương trung bình 20-40 triệu/tháng tại các thành phố lớn, đạt FIRE ở tuổi 40 là thách thức nhưng khả thi nếu bạn bắt đầu từ tuổi 25. Chìa khóa là tăng thu nhập (thăng tiến, nghề tay trái, kinh doanh online) đồng thời kiểm soát chi tiêu ở mức 50-60% thu nhập. Phần còn lại được đầu tư thông minh vào danh mục đa dạng hóa gồm cổ phiếu, ETF, bất động sản cho thuê và trái phiếu.</p>
<p>Điều quan trọng nhất không chỉ là con số mà là xây dựng cuộc sống có ý nghĩa sau khi nghỉ hưu sớm. Nhiều người đạt FIRE nhận ra rằng họ vẫn muốn làm việc, nhưng theo cách họ thích và không bị áp lực tài chính.</p>`,

    'dau-tu-trai-phieu-doanh-nghiep-2026': `
<h2>Cách đánh giá rủi ro trái phiếu doanh nghiệp</h2>
<p>Trước khi mua trái phiếu doanh nghiệp, nhà đầu tư cần kiểm tra kỹ: xếp hạng tín nhiệm của tổ chức phát hành (nếu có), tỷ lệ nợ/vốn chủ sở hữu, dòng tiền từ hoạt động kinh doanh, và tài sản đảm bảo. Trái phiếu có tài sản đảm bảo (secured) an toàn hơn nhưng lãi suất thấp hơn trái phiếu không có tài sản đảm bảo (unsecured).</p>
<p>Sau vụ Tân Hoàng Minh và Vạn Thịnh Phát, Chính phủ đã siết chặt quy định phát hành trái phiếu doanh nghiệp riêng lẻ. Nhà đầu tư cá nhân nên ưu tiên mua trái phiếu qua các quỹ đầu tư trái phiếu uy tín thay vì mua trực tiếp, để được đa dạng hóa rủi ro và có chuyên gia quản lý danh mục.</p>
<h2>So sánh trái phiếu doanh nghiệp với kênh đầu tư khác</h2>
<p>So với gửi tiết kiệm ngân hàng, trái phiếu doanh nghiệp có lãi suất cao hơn 1-3% nhưng rủi ro cũng cao hơn đáng kể. So với cổ phiếu, trái phiếu ít biến động hơn và có dòng tiền coupon đều đặn. Một danh mục cân bằng thường phân bổ 20-40% vào trái phiếu tùy theo độ tuổi và mức chấp nhận rủi ro của nhà đầu tư.</p>`,

    'thue-dau-tu-viet-nam-2026-huong-dan': `
<h2>Các loại thuế đầu tư phổ biến tại Việt Nam</h2>
<p>Thuế trên lợi nhuận chứng khoán hiện áp dụng hai phương pháp: thuế suất 0.1% trên giá trị giao dịch bán (phổ biến nhất) hoặc 20% trên lợi nhuận ròng (phải kê khai quyết toán). Hầu hết nhà đầu tư cá nhân chọn phương pháp 0.1% vì đơn giản hơn, nhưng nếu bạn lỗ hoặc lợi nhuận thấp, phương pháp 20% có thể tiết kiệm hơn.</p>
<p>Lãi tiền gửi tiết kiệm chịu thuế 5%, được ngân hàng khấu trừ tại nguồn. Cổ tức tiền mặt chịu thuế 5% thuế thu nhập cá nhân. Thu nhập từ cho thuê bất động sản chịu thuế 5% VAT và 5% thuế TNCN trên doanh thu.</p>
<h2>Chiến lược tối ưu thuế hợp pháp</h2>
<p>Nhà đầu tư có thể tối ưu thuế bằng cách: (1) Sử dụng tài khoản đầu tư dài hạn để giảm tần suất giao dịch và thuế phát sinh; (2) Tận dụng các khoản giảm trừ gia cảnh khi quyết toán thuế; (3) Phân bổ đầu tư vào các kênh có ưu đãi thuế như quỹ hưu trí tự nguyện; (4) Giữ chứng từ đầy đủ để chứng minh chi phí khi cần. Tư vấn kế toán thuế chuyên nghiệp là khoản đầu tư xứng đáng cho nhà đầu tư có danh mục lớn.</p>`,

    'chi-phi-an-khi-dau-tu-khoan-phi-mat': `
<h2>Chi phí ẩn trong từng kênh đầu tư</h2>
<p>Chứng khoán có phí môi giới (0.15-0.35%), phí quản lý tài khoản, phí chuyển tiền, và thuế giao dịch 0.1%. Các quỹ mở có phí quản lý hàng năm 0.5-2% tính trên tổng tài sản, phí mua/bán đơn vị quỹ 0-2%, và phí hiệu suất (performance fee) nếu có. Crypto trên các sàn như Binance thu phí giao dịch 0.1%, phí rút coin, và spread (chênh lệch giá mua/bán).</p>
<p>Bất động sản có nhiều chi phí ẩn nhất: thuế trước bạ 0.5%, phí công chứng, phí sang tên 2%, chi phí sửa chữa bảo trì, phí quản lý chung cư, thuế đất hàng năm, và chi phí tìm khách thuê nếu đầu tư cho thuê.</p>
<h2>Cách giảm thiểu chi phí đầu tư</h2>
<p>Đầu tiên, lựa chọn nền tảng giao dịch có phí cạnh tranh nhất. Thứ hai, giảm tần suất giao dịch vì mỗi lần mua/bán đều phát sinh phí. Thứ ba, với quỹ đầu tư, ưu tiên ETF (phí quản lý thấp 0.3-0.5%) thay vì quỹ chủ động (phí 1-2%). Cuối cùng, luôn đọc kỹ biểu phí trước khi mở tài khoản tại bất kỳ đâu. Một chiếc máy tính Excel đơn giản tính tổng chi phí trong 10-20 năm sẽ cho bạn thấy sự khác biệt đáng kinh ngạc giữa 0.5% và 2% phí hàng năm.</p>`,

    'dau-tu-theo-mua-hieu-ung-january-sell-may': `
<h2>Hiệu ứng mùa vụ tại thị trường Việt Nam</h2>
<p>Tại Việt Nam, thị trường chứng khoán có những đặc điểm mùa vụ riêng. Giai đoạn trước Tết Nguyên Đán thường chứng kiến áp lực bán ròng khi nhà đầu tư cần tiền mặt cho chi tiêu Tết. Ngược lại, tháng 1-2 sau Tết thường là giai đoạn hồi phục mạnh khi tiền quay lại thị trường.</p>
<p>Mùa báo cáo kết quả kinh doanh (tháng 1-2 cho Q4 và cả năm, tháng 4-5 cho Q1, tháng 7-8 cho Q2) cũng tạo ra biến động đáng kể. Nhà đầu tư thông minh sẽ chuẩn bị vốn trước và mua vào khi thị trường giảm theo mùa.</p>
<h2>Kết hợp phân tích mùa vụ với phân tích cơ bản</h2>
<p>Hiệu ứng mùa vụ chỉ là một yếu tố tham khảo, không phải đảm bảo chắc chắn. Nhà đầu tư nên kết hợp với phân tích cơ bản doanh nghiệp và phân tích kỹ thuật để đưa ra quyết định chính xác hơn. Ví dụ: nếu một cổ phiếu có nền tảng tốt và đang ở vùng hỗ trợ mạnh trong giai đoạn "Sell in May", đó có thể là cơ hội mua vào tuyệt vời thay vì bán ra theo đám đông.</p>`,

    'cach-doc-bang-gia-chung-khoan-nguoi-moi': `
<h2>Các chỉ số quan trọng trên bảng giá</h2>
<p>Ngoài giá và khối lượng, bảng giá còn chứa nhiều thông tin quan trọng khác. PE (Price/Earnings) cho biết bạn đang trả bao nhiêu cho mỗi đồng lợi nhuận. EPS (Earnings Per Share) thể hiện lợi nhuận trên mỗi cổ phiếu. Book Value là giá trị sổ sách. Dividend Yield cho biết tỷ lệ cổ tức trên giá cổ phiếu.</p>
<p>Room ngoại (Foreign Room) cho biết còn bao nhiêu % cổ phiếu mà nhà đầu tư nước ngoài được phép mua. Khi room gần hết, đó thường là dấu hiệu tích cực vì cho thấy sự quan tâm lớn từ dòng vốn ngoại chuyên nghiệp.</p>
<h2>Mẹo đọc bảng giá hiệu quả</h2>
<p>Tạo danh sách theo dõi (watchlist) riêng cho từng nhóm ngành bạn quan tâm thay vì cố đọc toàn bộ thị trường. Sử dụng bộ lọc (screener) để tìm cổ phiếu theo tiêu chí cụ thể như PE dưới 15, tăng trưởng lợi nhuận trên 20%, hoặc cổ tức trên 5%. Quan sát dòng tiền ròng vào/ra để biết nhà đầu tư tổ chức đang mua hay bán. Những kỹ năng này sẽ giúp bạn nhanh chóng nhận diện cơ hội trong hàng trăm mã trên sàn.</p>`,

    'cach-doc-bao-cao-tai-chinh-doanh-nghiep': `
<h2>Phân tích 3 báo cáo tài chính chính</h2>
<p>Bảng cân đối kế toán cho biết doanh nghiệp sở hữu gì (tài sản), nợ bao nhiêu (nợ phải trả), và phần còn lại thuộc về cổ đông (vốn chủ sở hữu). Tỷ lệ nợ/vốn chủ sở hữu (D/E ratio) dưới 1 thường được coi là an toàn. Doanh nghiệp có tài sản ngắn hạn lớn hơn nợ ngắn hạn cho thấy khả năng thanh khoản tốt.</p>
<p>Báo cáo kết quả kinh doanh phản ánh doanh thu, chi phí và lợi nhuận trong kỳ. Biên lợi nhuận gộp ổn định hoặc tăng theo thời gian là dấu hiệu tích cực cho thấy lợi thế cạnh tranh bền vững. Lợi nhuận sau thuế tăng trưởng đều đặn trên 15%/năm trong 3-5 năm là tiêu chí của doanh nghiệp chất lượng.</p>
<h2>Red flags cần cảnh giác</h2>
<p>Các dấu hiệu cảnh báo bao gồm: doanh thu tăng nhưng dòng tiền hoạt động âm liên tục, khoản phải thu tăng nhanh hơn doanh thu (có thể ghi nhận doanh thu ảo), hàng tồn kho tăng bất thường, nợ vay ngắn hạn lớn hơn tài sản ngắn hạn, và thay đổi chính sách kế toán đột ngột. Nếu phát hiện nhiều red flags, nên tránh đầu tư dù cổ phiếu có giá rẻ đến đâu.</p>`,
};

console.log('🔧 Enriching posts (batch 2: 13 posts)...\n');
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
