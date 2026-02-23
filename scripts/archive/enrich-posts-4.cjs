const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const updates = [
    {
        id: 'ed96aba8-1c77-4eb1-9fa1-fa0b450497d8',
        content: `<h2>Đầu tư là gì? Khái niệm nền tảng mọi nhà đầu tư cần hiểu</h2>
<p><strong>Đầu tư</strong> là việc sử dụng tiền bạc hoặc tài sản hiện tại để tạo ra lợi nhuận trong tương lai. Khác với tiết kiệm đơn thuần — chỉ cất tiền vào ngân hàng — đầu tư nghĩa là đưa tiền của bạn "đi làm", để nó sinh sôi nảy nở theo thời gian nhờ lãi kép và tăng trưởng giá trị.</p>
<p>Trong bối cảnh lạm phát tại Việt Nam trung bình 3-4%/năm, nếu bạn chỉ giữ 100 triệu trong két sắt, sau 10 năm sức mua thực tế chỉ còn khoảng 67 triệu. Nếu gửi tiết kiệm 5%/năm, bạn chỉ vừa đủ "hòa" với lạm phát. Chỉ khi đầu tư với mức sinh lời trên 8-10%/năm, tiền của bạn mới thực sự tăng trưởng.</p>

<img src="https://images.unsplash.com/photo-1579621970563-9ae2e01248e6?w=1200&h=630&fit=crop&q=80" alt="Các hình thức đầu tư phổ biến tại Việt Nam" />

<h2>Các hình thức đầu tư phổ biến tại Việt Nam</h2>
<p>Hiện nay, nhà đầu tư Việt Nam có rất nhiều lựa chọn — từ truyền thống như vàng, bất động sản, đến hiện đại như chứng khoán và crypto. Mỗi kênh có đặc điểm riêng về lợi nhuận, rủi ro và vốn tối thiểu.</p>

<table>
<thead><tr><th>Kênh đầu tư</th><th>Lợi nhuận kỳ vọng</th><th>Mức rủi ro</th><th>Vốn tối thiểu</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td>Gửi tiết kiệm</td><td>4-6%/năm</td><td>Rất thấp</td><td>1 triệu</td><td>Quỹ khẩn cấp</td></tr>
<tr><td>Chứng khoán</td><td>12-20%/năm</td><td>Trung bình</td><td>5 triệu</td><td>Đầu tư dài hạn</td></tr>
<tr><td>Vàng</td><td>8-15%/năm</td><td>Thấp-Trung bình</td><td>2 triệu</td><td>Phòng hộ rủi ro</td></tr>
<tr><td>Crypto</td><td>30-100%+/năm</td><td>Rất cao</td><td>500K</td><td>Chấp nhận rủi ro cao</td></tr>
<tr><td>Bất động sản</td><td>10-25%/năm</td><td>Trung bình</td><td>500 triệu+</td><td>Vốn lớn, dài hạn</td></tr>
</tbody>
</table>

<p>Tìm hiểu chi tiết từng kênh: <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">Chứng khoán</a> | <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">Vàng</a> | <a href="/blog/crypto/dau-tu-bitcoin-crypto-cho-nguoi-moi">Crypto</a> | <a href="/blog/kien-thuc-dau-tu/so-sanh-kenh-dau-tu-pho-bien">So sánh tất cả kênh</a></p>

<h2>Tại sao nên bắt đầu đầu tư sớm?</h2>
<p><a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">Sức mạnh của lãi kép</a> là lý do quan trọng nhất. Nếu bạn đầu tư 5 triệu đồng/tháng với lãi suất 15%/năm, sau 20 năm bạn sẽ có hơn 7 tỷ đồng — trong đó 6 tỷ là tiền lãi kép tạo ra. Bắt đầu sớm 5 năm có thể tạo ra sự khác biệt vài tỷ đồng khi nghỉ hưu.</p>
<p>Ngoài tiền bạc, đầu tư sớm còn giúp bạn tích lũy kinh nghiệm quý giá. Những bài học từ thị trường — cả thắng lẫn thua — sẽ giúp bạn trở thành nhà đầu tư giỏi hơn theo thời gian. Không ai sinh ra đã biết đầu tư, kinh nghiệm chỉ đến từ thực hành.</p>

<h2>5 nguyên tắc đầu tư cơ bản cho người mới</h2>
<h3>1. Chỉ đầu tư tiền nhàn rỗi</h3>
<p>Không bao giờ đầu tư bằng tiền sinh hoạt, tiền dự phòng khẩn cấp hoặc tiền vay nợ. Hãy đảm bảo bạn đã có quỹ dự phòng ít nhất 3-6 tháng chi tiêu trước khi bắt đầu. Xem thêm <a href="/blog/tai-chinh-ca-nhan/quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan">quy tắc 50/30/20</a> để biết cách phân chia thu nhập hợp lý.</p>

<h3>2. Đa dạng hóa danh mục</h3>
<p>"Đừng bỏ trứng vào một giỏ" — đây là quy tắc kinh điển nhưng vẫn bị rất nhiều người bỏ qua. Khi một kênh thua lỗ, các kênh khác có thể bù đắp. Tham khảo <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">chiến lược đa dạng hóa danh mục</a> để biết cách thực hiện.</p>

<h3>3. Tìm hiểu kỹ trước khi đầu tư</h3>
<p>Warren Buffett có câu nói nổi tiếng: "Risk comes from not knowing what you're doing" (Rủi ro đến từ việc không biết mình đang làm gì). Trước khi bỏ tiền vào bất kỳ kênh nào, hãy dành ít nhất 2-4 tuần nghiên cứu. Đọc sách, đọc bài phân tích, theo dõi thị trường — kiến thức là "bảo hiểm" tốt nhất cho tiền của bạn.</p>

<h3>4. Kiên nhẫn và kỷ luật</h3>
<p>Đầu tư thành công đòi hỏi sự kiên nhẫn — đôi khi nhiều năm. Đừng bị dao động bởi biến động ngắn hạn. Chiến lược <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">DCA (Dollar Cost Averaging)</a> là cách tiếp cận hiệu quả nhất cho người mới — đầu tư đều đặn bất kể thị trường lên hay xuống.</p>

<h3>5. Quản lý rủi ro</h3>
<p>Luôn đặt mức cắt lỗ và chốt lời rõ ràng. Không để cảm xúc chi phối quyết định đầu tư. Tìm hiểu về <a href="/blog/crypto/rui-ro-dau-tu-crypto-cach-phong-tranh">quản lý rủi ro</a> để bảo vệ tài sản. Nếu bạn là người mới, bắt đầu với các kênh an toàn như ETF hoặc vàng trước khi thử thách bản thân với cổ phiếu riêng lẻ hay crypto.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Đầu tư có rủi ro không?</h3>
<p>Mọi hình thức đầu tư đều có rủi ro — đây là quy luật bất biến. Tuy nhiên, rủi ro lớn nhất thực ra là KHÔNG đầu tư gì cả — để tiền mất giá dần theo lạm phát. Mục tiêu không phải loại bỏ rủi ro (không thể), mà là quản lý và kiểm soát rủi ro ở mức chấp nhận được.</p>

<h3>Tôi mới đi làm, lương 10 triệu — có nên đầu tư không?</h3>
<p>Chắc chắn nên! Bắt đầu với 2 triệu/tháng: 1 triệu gửi tiết kiệm online (quỹ khẩn cấp), 1 triệu mua ETF VN30. Sau 5-10 năm, khoản nhỏ này sẽ tạo ra sự khác biệt lớn nhờ lãi kép.</p>`
    },
    {
        id: '34dd0ffd-6e1d-4a34-9050-4b64200b7b2a',
        content: `<h2>10 sai lầm khiến nhà đầu tư mới mất tiền — và cách tránh</h2>
<p>Hầu hết nhà đầu tư mới đều mắc cùng những sai lầm giống nhau — và đáng tiếc là phải trả giá bằng tiền thật trước khi rút ra bài học. Bài viết này tổng hợp 10 sai lầm phổ biến nhất mà chúng tôi đã quan sát từ hàng nghìn nhà đầu tư cá nhân, kèm theo hướng dẫn cụ thể để bạn tránh "đổ máu" không cần thiết.</p>

<h2>1. Đầu tư theo đám đông (FOMO)</h2>
<p>Khi mọi người xung quanh khoe lãi chứng khoán, crypto — bạn sợ bỏ lỡ và lao vào mua mà không nghiên cứu. Đây là sai lầm kinh điển nhất. Thường thì khi "người bán rau cũng nói về chứng khoán", thị trường đã gần đỉnh. Bạn nhảy vào mua ở giá cao, rồi kẹp lại khi giá điều chỉnh.</p>
<p><strong>Cách tránh:</strong> Luôn tự nghiên cứu trước khi đầu tư. Nếu lý do duy nhất bạn mua là "mọi người đang mua", đó là dấu hiệu nguy hiểm. Hãy xây dựng kế hoạch đầu tư riêng dựa trên tài chính cá nhân, không phải xu hướng đám đông.</p>

<h2>2. Không có quỹ khẩn cấp</h2>
<p>Nhiều người đổ hết tiền vào đầu tư mà không giữ lại khoản dự phòng. Khi gặp sự cố bất ngờ (ốm đau, mất việc, sửa xe...), họ buộc phải bán lỗ đầu tư để lấy tiền. Đây là cách nhanh nhất để biến khoản đầu tư thua lỗ. Áp dụng <a href="/blog/tai-chinh-ca-nhan/quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan">quy tắc 50/30/20</a> và xây dựng quỹ khẩn cấp 3-6 tháng chi tiêu TRƯỚC khi đầu tư.</p>

<h2>3. Bán hoảng loạn khi thị trường giảm</h2>
<p>Thị trường giảm 10-20% là điều bình thường, xảy ra vài lần mỗi năm. Nhưng người mới thường hoảng sợ và bán tháo ở đáy — sau đó nhìn giá hồi phục với tiếc nuối. Nếu bạn mua cổ phiếu tốt với giá hợp lý, giảm giá ngắn hạn là CƠ HỘI mua thêm, không phải lý do bán.</p>

<h2>4. Đặt kỳ vọng lợi nhuận phi thực tế</h2>
<p>"Tôi muốn gấp đôi tiền trong 3 tháng" — nếu đây là mục tiêu của bạn, bạn đang đặt mình vào rủi ro cực kỳ cao. Lợi nhuận trung bình hợp lý là 12-20%/năm cho chứng khoán, 8-15% cho vàng. Bất kỳ ai hứa lợi nhuận 30-50%/tháng gần như chắc chắn là lừa đảo.</p>

<h2>5. Thiếu kỷ luật với chiến lược</h2>
<p>Bạn bắt đầu với chiến lược DCA hàng tháng, nhưng sau 2 tháng thấy theo "lời khuyên" trên Telegram có vẻ lãi hơn, bạn nhảy sang. Rồi 1 tháng sau lại đổi sang cách khác. Kết quả là không chiến lược nào được theo đuổi đủ lâu để phát huy hiệu quả. <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">Chiến lược DCA</a> cần ít nhất 2-3 năm để thấy rõ hiệu quả.</p>

<h2>6. Đầu tư bằng tiền vay</h2>
<p>Vay tiền để đầu tư chứng khoán hay crypto là một trong những quyết định tài chính tệ nhất bạn có thể đưa ra. Khi thị trường giảm, bạn vừa lỗ vốn đầu tư vừa phải trả nợ + lãi — áp lực gấp đôi dẫn đến quyết định hoảng loạn.</p>

<h2>7. Không đa dạng hóa</h2>
<p>Bỏ tất cả 100 triệu vào một cổ phiếu duy nhất. Nếu cổ phiếu đó tăng, bạn lãi lớn. Nhưng nếu giảm 50%, bạn mất 50 triệu. Hãy luôn <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">đa dạng hóa danh mục</a> — phân bổ vào 3-5 kênh đầu tư khác nhau.</p>

<h2>8. Nghe theo "guru" mà không tự nghiên cứu</h2>
<p>Các nhóm Telegram, Zalo, Facebook tràn ngập "chuyên gia" khuyên mua bán. Nhiều người trong số họ không có kiến thức thực sự, hoặc tệ hơn — đang "đánh lên" để bán cho bạn ở giá cao. Lời khuyên miễn phí trên internet thường trị giá đúng bằng số tiền bạn bỏ ra — zero.</p>

<h2>9. Giao dịch quá nhiều (Over-trading)</h2>
<p>Mua bán liên tục hàng ngày không chỉ tốn phí giao dịch mà còn khiến bạn dễ đưa ra quyết định cảm xúc. Nghiên cứu cho thấy nhà đầu tư giao dịch ít thường có lợi nhuận cao hơn nhà đầu tư giao dịch nhiều. "Ngồi yên" đôi khi là chiến lược tốt nhất.</p>

<h2>10. Không có mục tiêu tài chính rõ ràng</h2>
<p>Đầu tư mà không biết mình đầu tư "để làm gì" giống như lái xe không biết đi đâu. Hãy xác định rõ: bạn đầu tư cho về hưu (20-30 năm)? Mua nhà (5-7 năm)? Hay tạo thu nhập thụ động hàng tháng? Mỗi mục tiêu cần chiến lược khác nhau.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Tôi đã mắc sai lầm, làm sao phục hồi?</h3>
<p>Bước đầu tiên là dừng lại và đánh giá tình hình — đừng cố "gỡ" bằng cách đầu tư mạo hiểm hơn. Quay lại cơ bản: xây dựng quỹ khẩn cấp, học kiến thức nền tảng, và bắt đầu lại với DCA vào ETF. Thời gian là đồng minh — <a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">lãi kép</a> sẽ giúp bạn phục hồi dần dần.</p>`
    }
];

async function updatePosts() {
    console.log('📝 Cập nhật nội dung (batch 4)...\n');
    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com', password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth:', authError.message); return; }

    for (const u of updates) {
        const { error } = await supabase.from('posts').update({ content: u.content }).eq('id', u.id);
        console.log(error ? `❌ ${u.id}: ${error.message}` : `✅ ${u.id}`);
    }
    console.log('\n🎉 Batch 4 done!');
}
updatePosts();
