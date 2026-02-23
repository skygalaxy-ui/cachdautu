const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');

function countWords(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w.length > 0).length;
}

const extras = {
    '8fdd1f37-6eab-4523-ab81-4f93cc6b9f45': `
<h2>Các yếu tố cần kiểm tra khi mua bất động sản</h2>
<p>Trước khi xuống tiền mua bất động sản 2026, bạn cần kiểm tra kỹ 5 yếu tố: (1) Pháp lý — sổ đỏ/sổ hồng rõ ràng, không tranh chấp; (2) Quy hoạch — kiểm tra trên website sở xây dựng xem khu đất có nằm trong diện thu hồi không; (3) Hạ tầng — đường giao thông, trường học, bệnh viện trong bán kính 5km; (4) Thanh khoản — khu vực có người mua bán thường xuyên không; (5) Giá so với khu vực — so sánh với 5-10 BĐS tương tự đã giao dịch gần đây.</p>
<p>Chi phí thuê luật sư kiểm tra pháp lý chỉ khoảng 3-5 triệu đồng — rất nhỏ so với giá trị giao dịch hàng tỷ đồng. Đừng tiết kiệm khoản này vì hậu quả của việc mua phải BĐS có vấn đề pháp lý có thể là mất trắng toàn bộ.</p>

<h2>Đầu tư bất động sản gián tiếp — Giải pháp cho vốn nhỏ</h2>
<p>Không phải ai cũng có hàng tỷ đồng để mua nhà đất trực tiếp. Tin vui là có nhiều cách đầu tư bất động sản gián tiếp với vốn nhỏ hơn nhiều: mua cổ phiếu doanh nghiệp BĐS niêm yết (VIC, VHM, NVL, KDH) từ 5-10 triệu đồng; tham gia quỹ ETF bất động sản; hoặc crowdfunding BĐS qua các nền tảng fintech mới. Đây là cách tiếp cận thông minh để hưởng lợi từ thị trường BĐS mà không cần vốn lớn.</p>
<p>Nếu bạn đang tích lũy để mua BĐS, hãy đầu tư khoản tiết kiệm vào <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> hoặc <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">vàng</a> trong khi chờ đủ vốn. Áp dụng <a href="/blog/tai-chinh-ca-nhan/quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan">quy tắc 50/30/20</a> để tối đa hóa khoản tiết kiệm mỗi tháng hướng đến mục tiêu BĐS.</p>

<h2>Kết luận: Đầu tư bất động sản 2026 — Cơ hội có chọn lọc</h2>
<p>Đầu tư bất động sản 2026 vẫn là kênh hấp dẫn nhưng đòi hỏi sự nghiên cứu kỹ lưỡng hơn bao giờ hết. Thời kỳ "mua đâu cũng lãi" đã qua — giờ đây, ưu nhược điểm của từng phân khúc cần được phân tích cẩn thận. Chọn đúng vị trí, pháp lý rõ ràng, và không vay quá 50% giá trị — đó là công thức đầu tư bất động sản bền vững.</p>`,

    '291008eb-9ebe-4dc4-9df2-75e439a26f7b': `
<h2>Bảng tính lãi kép: Đầu tư 5 triệu/tháng trong 20 năm</h2>
<p>Hãy xem con số cụ thể để hiểu sức mạnh lãi kép khi đầu tư đều đặn 5 triệu/tháng (60 triệu/năm) trong 20 năm:</p>
<table>
<thead><tr><th>Kênh đầu tư</th><th>Lãi suất/năm</th><th>Tổng vốn bỏ ra</th><th>Giá trị sau 20 năm</th><th>Tiền lãi kép sinh ra</th></tr></thead>
<tbody>
<tr><td>Tiết kiệm</td><td>5%</td><td>1.2 tỷ</td><td>2.06 tỷ</td><td>0.86 tỷ</td></tr>
<tr><td>Vàng</td><td>10%</td><td>1.2 tỷ</td><td>3.79 tỷ</td><td>2.59 tỷ</td></tr>
<tr><td>Chứng khoán</td><td>15%</td><td>1.2 tỷ</td><td>7.47 tỷ</td><td>6.27 tỷ</td></tr>
</tbody>
</table>
<p>Chỉ cần tăng lãi suất từ 5% lên 15%, tiền lãi kép tăng từ 860 triệu lên 6.27 TỶ — gấp 7 lần! Đây chính là lý do tại sao lãi kép được gọi là "kỳ quan thứ 8" của thế giới.</p>

<h2>Quy tắc 72 — Công cụ tính nhẩm lãi kép</h2>
<p>Muốn biết bao lâu tiền nhân đôi? Chia 72 cho lãi suất. Tiết kiệm 5%: 72/5 = 14.4 năm. Chứng khoán 15%: 72/15 = 4.8 năm. Bitcoin 30%: 72/30 = 2.4 năm (nhưng rủi ro tương ứng!). Ngược lại, lạm phát 3.5%/năm khiến sức mua giảm nửa sau 72/3.5 = 20 năm. Hiểu lãi kép là gì và cách nó hoạt động chính là bước đầu tiên để bảo vệ tài sản khỏi lạm phát.</p>

<h2>Kết luận: Sức mạnh lãi kép trong đầu tư</h2>
<p>Lãi kép là gì? Là công cụ mạnh mẽ nhất mà bất kỳ nhà đầu tư nào cũng có thể tận dụng — miễn là bắt đầu SỚM và kiên trì. Sức mạnh lãi kép trong đầu tư không đến từ may mắn hay thiên tài, mà từ thời gian và kỷ luật. Mỗi ngày trì hoãn là một ngày lãi kép bị lãng phí. Hãy bắt đầu ngay hôm nay với <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a>.</p>`,

    '13a3ea2c-5e00-4dd2-83e6-b2e35a41420b': `
<h2>Ứng dụng quy tắc 50/30/20 cho các mức thu nhập khác nhau</h2>
<table>
<thead><tr><th>Thu nhập</th><th>Thiết yếu (50%)</th><th>Mong muốn (30%)</th><th>Tiết kiệm (20%)</th></tr></thead>
<tbody>
<tr><td>10 triệu</td><td>5 triệu</td><td>3 triệu</td><td>2 triệu</td></tr>
<tr><td>20 triệu</td><td>10 triệu</td><td>6 triệu</td><td>4 triệu</td></tr>
<tr><td>30 triệu</td><td>15 triệu</td><td>9 triệu</td><td>6 triệu</td></tr>
<tr><td>50 triệu</td><td>25 triệu</td><td>15 triệu</td><td>10 triệu</td></tr>
</tbody>
</table>
<p>Khi thu nhập tăng, phần thiết yếu thường không tăng tỷ lệ — bạn không cần ăn gấp đôi hay thuê nhà lớn gấp đôi. Vì vậy, người thu nhập cao nên tăng tỷ lệ tiết kiệm/đầu tư lên 30-40% thay vì giữ 20%. Đây là "tối ưu hóa" quy tắc 50/30/20 cho người có thu nhập từ 30 triệu trở lên.</p>

<h2>Kết luận: Quy tắc 50/30/20 quản lý tài chính cá nhân</h2>
<p>Quy tắc 50/30/20 quản lý tài chính cá nhân không phải là công thức cứng nhắc — mà là framework linh hoạt để bạn kiểm soát tiền bạc. Điều quan trọng nhất không phải tỷ lệ chính xác, mà là LUÔN CÓ phần tiết kiệm và đầu tư trong mỗi kỳ lương. Phần 20% nhỏ bé hôm nay, nhờ <a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">sức mạnh lãi kép</a>, sẽ trở thành tài sản lớn sau 10-20 năm.</p>`,

    '34dd0ffd-6e1d-4a34-9050-4b64200b7b2a': `
<h2>Checklist tránh 10 sai lầm phổ biến khi đầu tư</h2>
<p>Để giúp bạn dễ nhớ và áp dụng, đây là checklist 10 điều CẦN LÀM trước mỗi quyết định đầu tư:</p>
<p>✅ Đã nghiên cứu kỹ ít nhất 3 ngày trước khi mua? ✅ Có quỹ khẩn cấp đủ 3-6 tháng chi phí? ✅ Đầu tư bằng tiền nhàn rỗi, không vay nợ? ✅ Có mục tiêu rõ ràng (ngắn hạn/dài hạn)? ✅ Đã đặt mức cắt lỗ từ trước? ✅ Danh mục đa dạng ít nhất 3 kênh? ✅ Không mua chỉ vì tin nhóm chat? ✅ Kỳ vọng lợi nhuận hợp lý (10-20%/năm)? ✅ Tuân thủ chiến lược đã đặt ra? ✅ Ghi nhật ký đầu tư mỗi lần giao dịch?</p>
<p>In checklist này ra và dán cạnh màn hình máy tính. Mỗi khi muốn "bấm nút mua", kiểm tra từng mục. Nếu không đạt ít nhất 7/10 — đừng mua.</p>

<h2>Tâm lý đầu tư — Kẻ thù lớn nhất của bạn</h2>
<p>Ít nhất 7 trong 10 sai lầm phổ biến khi đầu tư xuất phát từ tâm lý, không phải thiếu kiến thức. FOMO, hoảng loạn, tham lam, thiếu kỷ luật — tất cả biểu hiện của việc để cảm xúc chi phối tài chính. Giải pháp tốt nhất: tự động hóa mọi thứ. Đặt DCA tự động, stop-loss tự động — khi mọi thứ chạy "tự lái", cảm xúc không có cơ hội can thiệp. <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">Chiến lược DCA</a> là ví dụ hoàn hảo.</p>

<h2>Kết luận: 10 sai lầm phổ biến khi đầu tư</h2>
<p>Tránh 10 sai lầm phổ biến khi đầu tư không đảm bảo bạn sẽ giàu, nhưng chắc chắn giúp tránh mất tiền không cần thiết. Xem danh sách này như 10 "lằn ranh đỏ" không được vượt qua — và xây dựng hệ thống tự động để bảo vệ bạn khỏi chính bản thân mình.</p>`,

    '4b99b279-d12b-4c2f-b99e-2e3dcf970aa1': `
<h2>Chiến lược chuyển dần từ tiết kiệm sang đầu tư</h2>
<p>Nếu bạn hiện giữ 100% ở tiết kiệm, đừng chuyển hết sang đầu tư cùng lúc. Hãy chuyển từ từ theo lộ trình: tháng 1 chuyển 20% sang ETF VN30, tháng 3 thêm 10% sang vàng nhẫn, tháng 5 thêm 5% sang BTC. Cách tiếp cận từ từ giúp bạn quen dần với biến động mà không bị sốc tâm lý.</p>
<p>Quan trọng: LUÔN giữ nguyên quỹ khẩn cấp (3-6 tháng chi tiêu) ở tiết kiệm — đây là "đệm an toàn" KHÔNG BAO GIỜ được chuyển sang đầu tư. Khi so sánh gửi tiết kiệm vs đầu tư, tiết kiệm vẫn thắng ở khía cạnh an toàn ngắn hạn và thanh khoản cao.</p>

<h2>Lãi suất thực — Con số bóc trần sự thật</h2>
<p>Ngân hàng quảng cáo "lãi suất 5.5%/năm" — đây là lãi suất danh nghĩa. Lãi suất THỰC = danh nghĩa - lạm phát. Với lạm phát 3.5%/năm, lãi suất thực tiết kiệm chỉ còn 2%/năm. So sánh gửi tiết kiệm vs đầu tư ở lãi suất thực: chứng khoán (15%-3.5%=11.5% thực), vàng (10%-3.5%=6.5% thực), tiết kiệm (5%-3.5%=1.5% thực). Rõ ràng, tiền gửi tiết kiệm gần như đứng yên về giá trị thực.</p>

<h2>Khi nào nên tăng tỷ lệ đầu tư?</h2>
<p>Khi thu nhập tăng, hãy giữ chi tiêu ổn định và đổ phần tăng thêm vào đầu tư. Ví dụ: lương tăng từ 15 lên 20 triệu — phần 5 triệu tăng thêm nên 100% đầu tư (sau khi quỹ khẩn cấp đủ). Đây gọi là "pay yourself first" — trả cho tương lai trước, tiêu xài sau.</p>

<h2>Kết luận: Gửi tiết kiệm vs đầu tư — Câu trả lời cuối cùng</h2>
<p>So sánh gửi tiết kiệm vs đầu tư 2026 cho câu trả lời rõ ràng: tiết kiệm cho quỹ khẩn cấp và mục tiêu ngắn hạn, đầu tư cho mọi thứ còn lại. Đừng để sự "an toàn" giả tạo của tiết kiệm ru ngủ bạn — lạm phát đang âm thầm ăn mòn tài sản mỗi ngày. Hãy bắt đầu đầu tư ngay hôm nay.</p>`,

    'f63b6267-3b83-4cc6-9a0e-2d4318abb4a3': `
<h2>Bài học xương máu từ nhà đầu tư chứng khoán thành công</h2>
<p>Điểm chung của những nhà đầu tư chứng khoán thành công tại Việt Nam không phải IQ cao hay "nguồn tin mật" — mà là kỷ luật sắt đá. Họ tuân thủ chiến lược, cắt lỗ nhanh khi sai, và để lãi chạy khi đúng. Quan trọng nhất, họ không bao giờ đầu tư bằng tiền vay hay tiền cần dùng ngắn hạn.</p>
<p>Một bài học khác: không ai "luôn đúng" trong chứng khoán. Ngay cả chuyên gia cũng chỉ đúng 55-65% giao dịch. Bí quyết: khi đúng thì lãi lớn (để lãi chạy), khi sai thì lỗ nhỏ (cắt lỗ sớm). Tổng cộng vẫn dương — đó là quản lý vốn đúng cách.</p>

<h2>Kết luận: 5 sai lầm đầu tư chứng khoán</h2>
<p>Tránh 5 sai lầm đầu tư chứng khoán phổ biến nhất này sẽ đưa bạn vào top 20% nhà đầu tư cá nhân — nhóm thiểu số thực sự có lãi dài hạn. Thị trường không thưởng người thông minh nhất, mà thưởng  cho người kỷ luật nhất. Hãy xây dựng hệ thống kỷ luật cá nhân và áp dụng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">DCA</a> kết hợp <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">đa dạng hóa danh mục</a> để đầu tư chứng khoán thành công.</p>`,

    'f5ef1cc5-3cc7-46e1-ac4e-7278a67402a8': `
<h2>Sai lầm phổ biến khi đầu tư vàng</h2>
<p>Dù vàng được coi là kênh trú ẩn an toàn, nhiều người vẫn mắc sai lầm nghiêm trọng. Phổ biến nhất: mua toàn bộ cùng lúc thay vì DCA — đặc biệt nguy hiểm khi giá vàng ở vùng đỉnh. Nếu bạn mua 10 lượng ở 90 triệu/lượng rồi giá giảm về 80 triệu, bạn mất 100 triệu trên giấy. Áp dụng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> tránh được kịch bản này hoàn toàn.</p>
<p>Sai lầm thứ hai: quá tập trung vào vàng. Nhiều người giữ 70-80% tài sản ở vàng — mất cân bằng nghiêm trọng. Vàng chỉ nên chiếm 15-25% danh mục vì dù an toàn, lợi nhuận dài hạn (8-10%/năm) thấp hơn <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> (12-15%/năm). Hãy <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">đa dạng hóa danh mục</a> để cân bằng.</p>
<p>Sai lầm thứ ba: mua vàng trang sức nghĩ là đầu tư. Vàng trang sức có tiền công chế tác, khi bán lại mất 10-20% ngay lập tức. Đầu tư vàng đúng cách phải dùng vàng miếng/nhẫn 9999 hoặc vàng tài khoản — không phải vàng trang sức!</p>

<h2>Kết luận: Đầu tư vàng — Kênh trú ẩn an toàn năm 2026</h2>
<p>Đầu tư vàng là kênh trú ẩn an toàn không thể thiếu trong danh mục đầu tư 2026. Với tính ổn định qua hàng nghìn năm, vàng bảo vệ tài sản trước lạm phát, khủng hoảng và bất ổn kinh tế. Chọn vàng nhẫn 9999, áp dụng DCA, và giữ tỷ trọng 15-20% — đó là chiến lược đầu tư vàng tối ưu cho mọi nhà đầu tư.</p>`
};

async function appendContent() {
    console.log('Final content boost for 7 remaining short posts...\n');
    await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

    for (const [id, extra] of Object.entries(extras)) {
        const { data } = await s.from('posts').select('content, slug').eq('id', id).single();
        if (!data) { console.log('Not found: ' + id); continue; }
        const w = countWords(data.content);
        if (w >= 1000) { console.log('SKIP ' + data.slug + ' (' + w + 'w - already OK)'); continue; }
        const { error } = await s.from('posts').update({ content: data.content + extra }).eq('id', id);
        const newW = countWords(data.content + extra);
        console.log(error ? 'ERR ' + data.slug : 'OK ' + data.slug + ' (' + w + 'w -> ' + newW + 'w)');
    }
    console.log('\nDone!');
}
appendContent();
