const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const additions = {
    '8fdd1f37-6eab-4523-ab81-4f93cc6b9f45': `
<h2>Kinh nghiệm thực tế khi đầu tư bất động sản</h2>
<p>Trước khi quyết định đầu tư bất động sản, bạn cần nghiên cứu kỹ ít nhất 3-6 tháng. Hãy thực hiện "due diligence" — kiểm tra quy hoạch, pháp lý, so sánh giá khu vực lân cận, và đánh giá tiềm năng cho thuê. Đừng bao giờ mua theo cảm xúc hay áp lực từ môi giới "giá sắp tăng, phải mua ngay".</p>
<p>Mẹo quan trọng: luôn có một chuyên gia pháp lý kiểm tra sổ đỏ/sổ hồng trước khi xuống tiền. Chi phí thuê luật sư tư vấn (2-5 triệu đồng) không đáng kể so với rủi ro mất trắng hàng tỷ vì mua phải dự án có vấn đề pháp lý.</p>
<p>Nếu bạn chưa đủ vốn cho bất động sản, đừng vội vay nợ. Thay vào đó, hãy tích lũy qua <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> và <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">vàng</a> cho đến khi có đủ 30-40% vốn tự có. Áp dụng <a href="/blog/tai-chinh-ca-nhan/quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan">quy tắc 50/30/20</a> để tối đa hóa khoản tiết kiệm hàng tháng.</p>

<h2>Đầu tư bất động sản gián tiếp — Giải pháp vốn nhỏ</h2>
<p>Không phải ai cũng có hàng tỷ đồng để mua nhà đất. Tin vui là có các cách đầu tư bất động sản gián tiếp với vốn nhỏ hơn nhiều: quỹ ETF bất động sản (tại sàn nước ngoài), cổ phiếu doanh nghiệp bất động sản (VIC, VHM, NVL trên sàn HOSE), hoặc crowdfunding bất động sản qua các nền tảng fintech.</p>
<p>Cổ phiếu BĐS niêm yết cho phép bạn đầu tư vào bất động sản chỉ từ 5-10 triệu đồng, với thanh khoản cao và dễ dàng <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">đa dạng hóa danh mục đầu tư</a>.</p>

<h2>Kết luận về đầu tư bất động sản 2026</h2>
<p>Đầu tư bất động sản 2026 vẫn là kênh hấp dẫn với nhiều ưu nhược điểm cần cân nhắc kỹ. Quan trọng nhất: nghiên cứu kỹ pháp lý, không vay quá khả năng chi trả, và chọn phân khúc phù hợp. Bất động sản là cuộc chơi dài hạn — kiên nhẫn và kỷ luật sẽ được đền đáp xứng đáng.</p>`,

    '291008eb-9ebe-4dc4-9df2-75e439a26f7b': `
<h2>So sánh sức mạnh lãi kép giữa các kênh đầu tư</h2>
<p>Không phải kênh đầu tư nào cũng tận dụng được sức mạnh lãi kép. Gửi tiết kiệm 5%/năm có lãi kép nhưng tốc độ quá chậm — 100 triệu chỉ thành 163 triệu sau 10 năm. Chứng khoán 15%/năm biến 100 triệu thành 405 triệu. Vàng 10%/năm đạt 259 triệu. Rõ ràng, lãi suất cao hơn vài phần trăm tạo ra sự khác biệt KHỔNG LỒ khi lãi kép phát huy qua 10-20 năm.</p>
<p>Đây là lý do tại sao nhà đầu tư thông minh không để tiền nhàn rỗi trong ngân hàng quá lâu (ngoài quỹ khẩn cấp). Mỗi năm tiền nằm trong tài khoản tiết kiệm thay vì đầu tư là một năm lãi kép bị "lãng phí".</p>

<h2>"72 chia cho lãi suất" — Quy tắc nhân đôi tiền</h2>
<p>Quy tắc 72 là công cụ tính nhẩm cực kỳ hữu ích. Lấy 72 chia cho lãi suất hàng năm, bạn biết bao lâu tiền nhân đôi. Tiết kiệm 5%: 72/5 = 14.4 năm nhân đôi. Chứng khoán 15%: 72/15 = 4.8 năm. Bitcoin 30%: 72/30 = 2.4 năm (nhưng rủi ro tương ứng!).</p>
<p>Ngược lại, quy tắc này cũng cho thấy lạm phát "ăn mòn" tiền nhanh thế nào: với lạm phát 3.5%/năm, sức mua giảm một nửa sau 72/3.5 = 20.5 năm. Hãy để <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> kết hợp lãi kép bảo vệ tài sản của bạn.</p>

<h2>Bài học thực tế: Tỷ phú cũng dùng lãi kép</h2>
<p>Warren Buffett — người giàu thứ 5 thế giới — kiếm được 99% tài sản SAU tuổi 50. Ông bắt đầu đầu tư từ năm 11 tuổi và kiên trì suốt 70+ năm. Nếu ông dừng đầu tư ở tuổi 50, tài sản chỉ khoảng 1 tỷ USD thay vì 120+ tỷ USD. Lãi kép là gì nếu không phải sức mạnh của THỜI GIAN kết hợp với lợi nhuận tái đầu tư? Bài học: bắt đầu ngay, đừng dừng lại.</p>`,

    '13a3ea2c-5e00-4dd2-83e6-b2e35a41420b': `
<h2>Biến thể 50/30/20 cho người Việt</h2>
<p>Quy tắc 50/30/20 quản lý tài chính cá nhân ra đời tại Mỹ, nơi chi phí sinh hoạt và mức lương rất khác Việt Nam. Vì vậy, bạn hoàn toàn có thể điều chỉnh tỷ lệ phù hợp. Ở thành phố lớn (HCM, HN), tiền thuê nhà thường chiếm 25-35% thu nhập — khiến phần "thiết yếu" có thể vượt 50%. Trong trường hợp này, hãy giảm phần "mong muốn" xuống 20% thay vì cắt tiết kiệm.</p>
<p>Một biến thể phổ biến cho người Việt thu nhập trung bình (10-20 triệu) là 60/20/20 — tăng phần thiết yếu lên 60% và giảm mong muốn xuống 20%. Điều quan trọng nhất không phải tỷ lệ chính xác, mà là LUÔN CÓ phần tiết kiệm/đầu tư — dù chỉ 10%.</p>

<h2>Kết luận về quy tắc 50/30/20</h2>
<p>Quy tắc 50/30/20 quản lý tài chính cá nhân là nền tảng đơn giản nhưng mạnh mẽ để kiểm soát tiền bạc. Không cần phức tạp — chỉ cần chia thu nhập thành 3 phần và kiên trì tuân thủ. Phần 20% tiết kiệm/đầu tư tuy nhỏ nhưng nhờ <a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">lãi kép</a>, nó sẽ tạo ra tài sản đáng kể sau 10-20 năm. Bắt đầu hôm nay — tương lai bạn sẽ cảm ơn hiện tại.</p>`,

    '34dd0ffd-6e1d-4a34-9050-4b64200b7b2a': `
<h2>Tâm lý đầu tư — Yếu tố quyết định thành bại</h2>
<p>Trong 10 sai lầm phổ biến khi đầu tư được liệt kê ở trên, ít nhất 7 sai lầm xuất phát từ tâm lý — không phải thiếu kiến thức. FOMO, hoảng loạn, kỳ vọng phi thực tế, thiếu kỷ luật — tất cả đều là biểu hiện của việc để cảm xúc chi phối quyết định tài chính.</p>
<p>Giải pháp tốt nhất cho vấn đề tâm lý là TỰ ĐỘNG HÓA. Đặt lệnh DCA tự động, đặt stop-loss từ trước, quy định rõ tỷ lệ phân bổ — khi mọi thứ chạy tự động, bạn không có cơ hội đưa ra quyết định cảm xúc. <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">Chiến lược DCA</a> là ví dụ hoàn hảo: mua đều đặn, không canh giá, không lo lắng.</p>

<h2>Viết nhật ký đầu tư — Thói quen đơn giản nhưng hiệu quả</h2>
<p>Một thói quen giúp tránh các sai lầm phổ biến khi đầu tư là viết nhật ký. Mỗi khi mua/bán, ghi lại: lý do ra quyết định, cảm xúc lúc đó, và kỳ vọng kết quả. Sau 6 tháng, đọc lại nhật ký — bạn sẽ nhận ra pattern sai lầm của bản thân và cải thiện đáng kể.</p>

<h2>Kết luận về 10 sai lầm phổ biến khi đầu tư</h2>
<p>Tránh được 10 sai lầm phổ biến khi đầu tư không đảm bảo bạn sẽ giàu, nhưng chắc chắn giúp bạn tránh mất tiền một cách không cần thiết. Hãy xem danh sách này như 10 "lằn ranh đỏ" không được vượt qua — và xây dựng hệ thống tự động để bảo vệ bạn khỏi chính bản thân mình.</p>`,

    '4b99b279-d12b-4c2f-b99e-2e3dcf970aa1': `
<h2>Chiến lược chuyển dần từ tiết kiệm sang đầu tư</h2>
<p>Nếu bạn hiện đang giữ 100% ở tiết kiệm, đừng chuyển hết sang đầu tư cùng lúc. Hãy chuyển từ từ: tháng 1 chuyển 20% sang ETF, tháng 3 thêm 10% sang vàng, tháng 5 thêm 5% sang crypto. Cách tiếp cận từ từ giúp bạn quen dần với biến động thị trường mà không bị sốc tâm lý.</p>
<p>Quan trọng: giữ nguyên quỹ khẩn cấp (3-6 tháng chi tiêu) ở tiết kiệm — đây là "đệm an toàn" KHÔNG BAO GIỜ được chuyển sang đầu tư. Chỉ đầu tư phần tiền NHÀ RỖI sau khi đã có quỹ dự phòng đầy đủ.</p>

<h2>Lãi suất thực: Con số lạm phát bóc trần sự thật</h2>
<p>Khi ngân hàng quảng cáo "lãi suất 5.5%/năm", đây là lãi suất danh nghĩa — chưa trừ lạm phát. Lãi suất THỰC = lãi suất danh nghĩa - lạm phát. Với lạm phát 3.5%/năm, lãi suất thực của tiết kiệm chỉ còn 2%/năm. So sánh gửi tiết kiệm vs đầu tư ở lãi suất thực cho thấy: chứng khoán (15% - 3.5% = 11.5% thực), vàng (10% - 3.5% = 6.5% thực) — đều vượt xa tiết kiệm.</p>

<h2>Kết luận: Gửi tiết kiệm hay đầu tư?</h2>
<p>So sánh gửi tiết kiệm vs đầu tư cho thấy câu trả lời rõ ràng: tiết kiệm cho quỹ khẩn cấp, đầu tư cho tương lai. Đừng để sự "an toàn" của tiết kiệm ru ngủ bạn — lạm phát đang âm thầm ăn mòn tài sản mỗi ngày. Bắt đầu đầu tư ngay hôm nay với <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> để tiền của bạn thực sự "đi làm".</p>`,

    'f63b6267-3b83-4cc6-9a0e-2d4318abb4a3': `
<h2>Bài học từ những nhà đầu tư thành công</h2>
<p>Điểm chung của những nhà đầu tư chứng khoán thành công tại Việt Nam không phải IQ cao hay có "nguồn tin mật" — mà là kỷ luật sắt đá. Họ tuân thủ chiến lược đã đặt ra, cắt lỗ nhanh khi sai, và để lãi chạy khi đúng. Quan trọng nhất, họ KHÔNG BAO GIỜ đầu tư bằng tiền vay hay tiền cần dùng trong ngắn hạn.</p>
<p>Một bài học xương máu khác: không có ai "luôn đúng" trong chứng khoán. Ngay cả những chuyên gia lâu năm cũng chỉ đúng 55-65% số giao dịch. Bí quyết nằm ở quản lý vốn — khi đúng thì lãi lớn (để lãi chạy), khi sai thì lỗ nhỏ (cắt lỗ sớm). Tổng cộng vẫn dương.</p>

<h2>Kết luận về 5 sai lầm đầu tư chứng khoán</h2>
<p>Tránh 5 sai lầm đầu tư chứng khoán phổ biến nhất này sẽ đưa bạn vào top 20% nhà đầu tư cá nhân — nhóm thiểu số thực sự có lãi trong dài hạn. Hãy nhớ: thị trường không thưởng cho người thông minh nhất, mà thưởng  cho người kỷ luật nhất.</p>`,

    'ed96aba8-1c77-4eb1-9fa1-fa0b450497d8': `
<h2>Tâm lý đầu tư — Yếu tố ít được nhắc đến nhưng quan trọng bậc nhất</h2>
<p>Kiến thức đầu tư là gì nếu không đi kèm với quản lý tâm lý? Nhiều người hiểu biết sâu rộng về tài chính nhưng vẫn thua lỗ vì không kiểm soát được cảm xúc. Tham lam khi đang lãi, sợ hãi khi đang lỗ — hai cảm xúc này đã phá hủy nhiều danh mục đầu tư hơn bất kỳ cuộc khủng hoảng kinh tế nào.</p>
<p>Giải pháp hiệu quả nhất: tự động hóa. Đặt lệnh DCA tự động, không kiểm tra danh mục quá 1-2 lần/tuần, và tuyệt đối không đầu tư dựa trên tin tức giật gân. Khi mọi thứ chạy "tự lái", bạn loại bỏ được 80% quyết định cảm xúc sai lầm.</p>

<h2>Lời khuyên cho người mới: Bắt đầu từ đâu?</h2>
<p>Nếu bạn đọc đến đây và vẫn chưa biết bắt đầu từ đâu, đây là lộ trình đơn giản nhất: (1) Áp dụng <a href="/blog/tai-chinh-ca-nhan/quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan">quy tắc 50/30/20</a> để quản lý lương. (2) Xây quỹ khẩn cấp 3-6 tháng trong tiết kiệm online. (3) Mở tài khoản chứng khoán và DCA 3-5 triệu/tháng vào ETF VN30. (4) Sau 6 tháng, thêm vàng nhẫn vào danh mục. Chỉ 4 bước, không cần phức tạp.</p>

<h2>Kết luận: Đầu tư là gì?</h2>
<p>Đầu tư là gì? Đầu tư là hành trình biến thu nhập hôm nay thành tự do tài chính ngày mai. Không phải canh thời điểm hoàn hảo, không phải tìm "bí kíp" làm giàu nhanh — mà là bắt đầu sớm, đầu tư đều đặn, và kiên nhẫn để lãi kép phát huy sức mạnh. Hãy bắt đầu hôm nay.</p>`,

    'f5ef1cc5-3cc7-46e1-ac4e-7278a67402a8': `
<h2>Sai lầm phổ biến khi đầu tư vàng</h2>
<p>Dù vàng là kênh trú ẩn an toàn, nhiều người vẫn mắc sai lầm khi đầu tư. Phổ biến nhất là mua toàn bộ cùng lúc thay vì DCA — đặc biệt nguy hiểm khi giá vàng ở vùng đỉnh. Nếu bạn mua 10 lượng ở mức 90 triệu/lượng rồi giá giảm về 80 triệu, bạn mất 100 triệu trên giấy. DCA tránh được kịch bản này.</p>
<p>Sai lầm thứ hai: quá tập trung vào vàng. Nhiều người lớn tuổi giữ 70-80% tài sản ở vàng — quá mất cân bằng. Vàng chỉ nên chiếm 15-25% danh mục, vì dù an toàn, lợi nhuận dài hạn của vàng (8-10%/năm) thấp hơn <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> (12-15%/năm).</p>
<p>Sai lầm thứ ba: mua vàng trang sức nghĩ là đầu tư. Vàng trang sức có tiền công chế tác, khi bán lại bạn mất 10-20% ngay lập tức. Đầu tư vàng phải dùng vàng miếng/nhẫn 9999 hoặc vàng tài khoản — không phải vàng trang sức.</p>

<h2>Kết luận về đầu tư vàng — Kênh trú ẩn an toàn</h2>
<p>Đầu tư vàng là kênh trú ẩn an toàn không thể thiếu trong danh mục tài chính. Với tính ổn định qua hàng nghìn năm, vàng bảo vệ tài sản trước lạm phát và khủng hoảng. Chọn vàng nhẫn 9999, áp dụng DCA, và giữ tỷ trọng 15-20% — đó là chiến lược đầu tư vàng tối ưu cho năm 2026 và xa hơn.</p>`,

    '10bf90f3-51a8-4d91-86a3-dd9ff8aff5e0': `
<h2>7-10. Quỹ mở, Cổ phiếu riêng lẻ, Chứng quyền và P2P Lending</h2>
<p><strong>Quỹ mở (Mutual Fund):</strong> Giống ETF nhưng không niêm yết trên sàn — bạn mua/bán qua công ty quản lý quỹ (VinaCapital, Dragon Capital). Phí quản lý cao hơn ETF (1.5-2%/năm) nhưng có chuyên gia quản lý chủ động. Phù hợp với người không muốn tự quản lý danh mục.</p>
<p><strong>Cổ phiếu riêng lẻ:</strong> Mua cổ phiếu từng doanh nghiệp cụ thể (FPT, VNM, VCB). Tiềm năng lợi nhuận cao hơn ETF nhưng đòi hỏi kiến thức phân tích cơ bản và kỹ thuật. Tham khảo <a href="/blog/chung-khoan/phan-tich-ky-thuat-chung-khoan">phân tích kỹ thuật</a> để đọc biểu đồ, và <a href="/blog/chung-khoan/cach-dau-tu-chung-khoan-nguoi-moi-2026">cách chọn cổ phiếu</a> cho người mới.</p>
<p><strong>Chứng quyền (Covered Warrant):</strong> Công cụ phái sinh cho phép đầu cơ biến động giá với vốn nhỏ. Lợi nhuận có thể lên đến 200-300% nhưng cũng có thể mất 100% vốn khi hết hạn. CHỈ dành cho nhà đầu tư có kinh nghiệm (2+ năm).</p>
<p><strong>P2P Lending:</strong> Cho vay ngang hàng qua nền tảng Tima, VayMuon — lãi suất 10-15%/năm. Rủi ro chính là người vay không trả nợ (default risk). Chỉ nên phân bổ 5-10% danh mục vào kênh này.</p>

<h2>Kết luận: Top 10 kênh đầu tư phổ biến Việt Nam 2026</h2>
<p>Top 10 kênh đầu tư phổ biến tại Việt Nam 2026 mang đến nhiều lựa chọn cho mọi mức vốn và khẩu vị rủi ro. Không cần phải chọn chỉ một — chiến lược tối ưu là kết hợp 3-5 kênh trong một <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">danh mục đa dạng hóa</a>. Bắt đầu từ ETF và vàng (đơn giản, an toàn), mở rộng dần sang các kênh khác khi kinh nghiệm tăng lên.</p>`
};

async function appendContent() {
    console.log('Adding content to remaining short posts (batch B)...\n');
    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com', password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('Auth error:', authError.message); return; }

    for (const [id, extra] of Object.entries(additions)) {
        const { data } = await supabase.from('posts').select('content, slug').eq('id', id).single();
        if (!data) { console.log(`Not found: ${id}`); continue; }
        const newContent = data.content + extra;
        const { error } = await supabase.from('posts').update({ content: newContent }).eq('id', id);
        console.log(error ? `ERR ${data.slug}: ${error.message}` : `OK ${data.slug}`);
    }
    console.log('\nBatch B done!');
}
appendContent();
