const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Additional content to append to posts that are under 1000 words
// Each entry adds 200-500 words worth of paragraphs

const additions = {
    '1e235983-33d7-4db2-869d-2a3364b7334b': `
<h2>Ví dụ thực tế: Hành trình đầu tư Bitcoin của một người mới</h2>
<p>Hãy hình dung bạn bắt đầu đầu tư Bitcoin vào tháng 1/2024 với chiến lược DCA — mỗi tuần mua 500,000 đ BTC bất kể giá lên hay xuống. Tổng vốn sau 12 tháng là 26 triệu đồng. Tại thời điểm cuối năm 2024, Bitcoin tăng khoảng 120% so với đầu năm — tài khoản DCA của bạn sẽ có giá trị khoảng 40-45 triệu. Quan trọng hơn, bạn không phải canh thời điểm mua hay mất ngủ vì biến động giá.</p>
<p>So sánh với người cố canh đáy: họ chờ giá giảm, bỏ lỡ đợt tăng tháng 2-3, cuối cùng FOMO mua ở giá cao tháng 11. Kết quả: cùng số vốn nhưng lợi nhuận kém hơn nhiều.</p>

<h2>Lưu trữ crypto an toàn — Hot wallet vs Cold wallet</h2>
<p>Một khía cạnh quan trọng mà nhiều người mới bỏ qua là bảo mật tài sản. Có hai loại ví: hot wallet (ví nóng, kết nối internet) và cold wallet (ví lạnh, offline). Ví trên sàn Binance, OKX thuộc loại hot wallet — tiện lợi để giao dịch nhưng rủi ro bị hack nếu sàn gặp sự cố.</p>
<p>Ví lạnh (Ledger Nano, Trezor) lưu trữ private key offline, an toàn hơn nhiều. Quy tắc chung: nếu bạn giữ crypto trị giá trên 50 triệu đồng, hãy chuyển phần lớn sang ví lạnh. Chỉ giữ trên sàn số tiền cần giao dịch trong ngắn hạn.</p>

<h2>Kết luận về đầu tư Bitcoin và Crypto</h2>
<p>Đầu tư Bitcoin và crypto cho người mới không phải là canh giá hay đuổi theo coin mới — mà là xây dựng chiến lược bài bản với DCA, quản lý rủi ro nghiêm ngặt, và kiên nhẫn trong dài hạn. Hãy bắt đầu nhỏ, học hỏi mỗi ngày, và nhớ rằng đầu tư crypto thành công đòi hỏi thời gian và kỷ luật hơn bất kỳ kênh nào khác.</p>`,

    'a58b0c08-957e-4543-aaea-4d227323984b': `
<h2>Phân tích chi tiết: Ở đâu đặt tiền trong 2026?</h2>
<p>Câu hỏi quan trọng nhất không phải "kênh nào lãi nhất" mà là "kênh nào phù hợp nhất với MỌI của bạn". Một sinh viên mới ra trường với 5 triệu tiết kiệm cần chiến lược hoàn toàn khác với người có 500 triệu và thu nhập ổn định 30 triệu/tháng.</p>
<p>Với vốn nhỏ (dưới 20 triệu), ETF chứng khoán và vàng nhẫn là hai lựa chọn tối ưu. Bạn có thể mua ETF VN30 từ 2 triệu/lô và vàng nhẫn từ 1 chỉ (khoảng 8 triệu). Đầu tư đều đặn bằng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> để tích lũy dần.</p>
<p>Với vốn trung bình (50-200 triệu), bạn có thể phân bổ đa dạng hơn: 40% chứng khoán, 20% vàng, 10% crypto, và giữ 30% tiết kiệm/trái phiếu. Điều quan trọng là <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">đa dạng hóa danh mục</a> để cân bằng rủi ro.</p>

<h2>Kết luận về so sánh các kênh đầu tư phổ biến</h2>
<p>Mỗi kênh đầu tư phổ biến đều có vai trò riêng trong danh mục tài chính. Không có kênh nào "tốt nhất" — chỉ có kênh "phù hợp nhất" với hoàn cảnh cụ thể của bạn. Hãy bắt đầu với những kênh đơn giản, an toàn (ETF, vàng), rồi mở rộng dần khi kiến thức và vốn tăng lên.</p>`,

    '5f7bf1ba-1184-4c66-afd0-a107bd3e93dc': `
<h2>Các mô hình giá quan trọng trong phân tích kỹ thuật</h2>
<p>Ngoài chỉ báo, các mô hình giá (chart patterns) là công cụ quan trọng trong phân tích kỹ thuật chứng khoán. Mô hình <strong>Head & Shoulders</strong> (Đầu & Vai) báo hiệu đảo chiều từ tăng sang giảm — khi xuất hiện, nhà đầu tư nên cân nhắc bán hoặc không mua thêm.</p>
<p>Mô hình <strong>Double Bottom</strong> (Hai đáy) thường xuất hiện sau xu hướng giảm dài, báo hiệu thị trường sắp đảo chiều tăng. Giá chạm một mức hỗ trợ hai lần rồi bật lên — đây là tín hiệu mua mạnh nếu kèm theo volume tăng.</p>
<p>Mô hình <strong>Cup and Handle</strong> (Tách & Tay cầm) là tín hiệu tăng giá mạnh — giá tạo hình chữ U sau đó consolidation nhẹ trước khi breakout. Cổ phiếu FPT từng nhiều lần tạo mô hình này trước các đợt tăng mạnh.</p>

<h2>Phần mềm và công cụ phân tích kỹ thuật miễn phí</h2>
<p>Bạn không cần mua phần mềm đắt tiền để bắt đầu phân tích kỹ thuật chứng khoán. <strong>TradingView</strong> (tradingview.com) là nền tảng miễn phí tốt nhất — hỗ trợ biểu đồ real-time của cả sàn Việt Nam (HOSE, HNX). Các app của công ty chứng khoán như SSI iBoard, TCBS cũng có công cụ phân tích kỹ thuật tích hợp đủ dùng cho người mới.</p>

<h2>Kết luận</h2>
<p>Phân tích kỹ thuật chứng khoán là kỹ năng cần thời gian rèn luyện — không ai thành thạo chỉ sau 1-2 tuần đọc. Hãy bắt đầu với 3 chỉ báo cơ bản (MA, RSI, Volume), thực hành trên tài khoản demo trước khi dùng tiền thật, và luôn kết hợp với phân tích cơ bản để đưa ra quyết định toàn diện nhất.</p>`,

    '959bfde0-9c08-40ea-a731-2bd45bf3bdbf': `
<h2>Cách thiết lập DCA tự động</h2>
<p>Một trong những bí quyết thành công với chiến lược DCA bình quân giá là tự động hóa quá trình. Khi DCA trở thành "tự động", bạn loại bỏ hoàn toàn yếu tố cảm xúc — không lo lắng khi giá giảm, không hào hứng quá mức khi giá tăng.</p>
<p>Với chứng khoán: đặt lệnh chuyển khoản tự động từ ngân hàng vào tài khoản chứng khoán vào ngày 5 hàng tháng (sau khi nhận lương). Nhiều app như SSI, TCBS hỗ trợ đặt lệnh mua định kỳ. Với crypto: sàn Binance có tính năng "Auto-Invest" cho phép mua BTC/ETH tự động theo tuần hoặc tháng.</p>
<p>Với vàng: mở sổ tích lũy vàng tại PNJ, DOJI hoặc Bảo Tín Minh Châu — mua 1-2 chỉ/tháng. Một số ngân hàng cung cấp dịch vụ tích lũy vàng online, giúp bạn DCA vàng dễ dàng mà không cần đến tiệm.</p>

<h2>DCA trong thị trường gấu (Bear Market)</h2>
<p>Nghịch lý thú vị: thời gian DCA hiệu quả nhất chính là khi thị trường giảm — lúc mà hầu hết mọi người sợ hãi và ngừng đầu tư. Khi giá giảm 30%, cùng 5 triệu đồng/tháng bạn mua được gấp rưỡi số lượng so với bình thường. Khi thị trường phục hồi, những lô mua trong bear market sẽ tạo ra lợi nhuận lớn nhất.</p>
<p>Warren Buffett nổi tiếng với câu nói "Hãy tham lam khi người khác sợ hãi" — chiến lược DCA bình quân giá tự động thực hiện nguyên tắc này mà bạn không cần can thiệp bằng cảm xúc.</p>

<h2>Kết luận về chiến lược DCA</h2>
<p>Chiến lược DCA bình quân giá không phải cách kiếm tiền nhanh nhất, nhưng là cách kiếm tiền đáng tin cậy nhất cho nhà đầu tư cá nhân. Đơn giản, tự động, và hiệu quả — ba từ tóm tắt mọi thứ bạn cần biết về DCA.</p>`,

    '10828612-3535-47bf-b7c5-bcc5035e6838': `
<h2>5. Rủi ro thanh khoản</h2>
<p>Nhiều token altcoin có thanh khoản rất thấp — bạn có thể mua dễ dàng nhưng khi muốn bán thì không ai mua. Điều này đặc biệt nguy hiểm với các token mới trên sàn DEX, nơi pool thanh khoản có thể bị rút bất cứ lúc nào (rug pull). Rủi ro đầu tư crypto từ thanh khoản thấp khiến nhiều nhà đầu tư "kẹt hàng" không thể thoát ra.</p>
<p><strong>Cách phòng tránh:</strong> Chỉ giao dịch trên sàn CEX uy tín (Binance, OKX) với các token có volume giao dịch 24h trên 10 triệu USD. Với DeFi, kiểm tra TVL (Total Value Locked) — dự án có TVL dưới 1 triệu USD có rủi ro thanh khoản rất cao.</p>

<h2>6. Rủi ro từ chính bản thân — Tâm lý FOMO và FUD</h2>
<p>Rủi ro lớn nhất khi đầu tư crypto thực ra không đến từ bên ngoài — mà từ chính tâm lý của bạn. FOMO (Fear Of Missing Out) khiến bạn mua đuổi giá khi thấy coin tăng mạnh. FUD (Fear, Uncertainty, Doubt) khiến bạn bán tháo khi đọc tin tiêu cực. Cả hai đều dẫn đến "mua đỉnh, bán đáy" — công thức chắc chắn thua lỗ.</p>
<p><strong>Cách phòng tránh:</strong> Lập kế hoạch đầu tư trước và tuân thủ tuyệt đối. DCA tự động loại bỏ FOMO. Không đọc quá 30 phút tin crypto mỗi ngày. Và nhớ: một tweet của Elon Musk không nên là lý do bạn thay đổi chiến lược đầu tư.</p>

<h2>Kết luận về rủi ro đầu tư crypto</h2>
<p>Rủi ro đầu tư crypto là thực tế không thể phủ nhận, nhưng hoàn toàn có thể phòng tránh nếu bạn chuẩn bị đúng cách. Hiểu rõ từng loại rủi ro, áp dụng quản lý vốn nghiêm ngặt, và không bao giờ đầu tư quá khả năng chịu đựng — đó là chìa khóa để tồn tại và thắng trong thị trường crypto dài hạn.</p>`,

    '3fce249e-648c-411c-ab69-a77af0dc9941': `
<h2>Cách đọc biểu đồ giá vàng — Xu hướng và tín hiệu</h2>
<p>Để đầu tư vàng hiệu quả, bạn cần biết cách đọc biểu đồ giá cơ bản. Xu hướng giá vàng 2026 có thể được theo dõi qua giá XAU/USD trên TradingView. Khi giá nằm trên đường trung bình MA200, xu hướng dài hạn là tăng — đây là thời điểm an toàn để tích lũy bằng DCA.</p>
<p>Vùng hỗ trợ là mức giá mà vàng thường "bật" lại khi giảm đến — hiện tại vùng hỗ trợ mạnh nằm quanh 2,500-2,600 USD/oz. Nếu giá điều chỉnh về vùng này, đó là cơ hội tốt để mua thêm. Ngược lại, vùng kháng cự 3,000-3,100 USD/oz là nơi giá có thể gặp áp lực bán.</p>
<p>Ngoài biểu đồ, hãy theo dõi chỉ số DXY (USD Index) — khi USD yếu, vàng thường tăng và ngược lại. Lãi suất trái phiếu Mỹ 10 năm cũng là chỉ báo quan trọng: lãi suất giảm = vàng tăng.</p>

<h2>Kinh nghiệm mua vàng thực tế tại Việt Nam</h2>
<p>Khi mua vàng nhẫn, hãy so giá giữa các tiệm/ngân hàng — chênh lệch có thể lên đến 200,000-500,000đ/lượng. Mua vào buổi sáng sớm thường có giá tốt hơn buổi chiều. Giữ hóa đơn cẩn thận vì nếu bán lại tại cùng nơi mua, bạn thường được giá cao hơn.</p>
<p>Nếu mua số lượng lớn (5-10 lượng trở lên), cân nhắc thuê két sắt ngân hàng (chi phí 500K-1.5 triệu/năm) thay vì cất ở nhà. An toàn hơn nhiều so với rủi ro mất cắp.</p>

<h2>Kết luận về xu hướng giá vàng và chiến lược đầu tư</h2>
<p>Xu hướng giá vàng 2026 được hỗ trợ bởi nhiều yếu tố vĩ mô tích cực: Fed cắt giảm lãi suất, ngân hàng trung ương mua kỷ lục, và bất ổn địa chính trị. Chiến lược đầu tư vàng thông minh nhất vẫn là DCA đều đặn, tập trung vào vàng nhẫn 9999, và giữ tỷ lệ 15-20% trong danh mục đầu tư tổng thể.</p>`,

    '77b9f910-6a34-43e6-805e-eb18c154ca9c': `
<h2>Lỗi phổ biến khi xây dựng danh mục đầu tư đa dạng hóa</h2>
<p>Nhiều nhà đầu tư nghĩ mình đã đa dạng hóa chỉ vì mua 10 cổ phiếu — nhưng nếu tất cả đều thuộc ngành ngân hàng, đây KHÔNG phải đa dạng hóa thực sự. Xây dựng danh mục đầu tư đa dạng hóa đòi hỏi phân bổ qua nhiều LOẠI tài sản (chứng khoán, vàng, crypto, tiết kiệm), nhiều NGÀNH (công nghệ, banking, tiêu dùng), và nhiều VÙNG ĐỊA LÝ nếu có thể.</p>
<p>Lỗi khác là "phân bổ giả" — mua 90% chứng khoán + 5% vàng + 5% crypto rồi gọi là đa dạng hóa. Khi chứng khoán giảm 30%, vàng và crypto chỉ chiếm 10% nên không đủ bù đắp. Mỗi kênh cần chiếm ít nhất 10-15% để có ý nghĩa trong danh mục.</p>

<h2>Theo dõi và đánh giá danh mục</h2>
<p>Dùng Google Sheets hoặc app Portfolio Tracker để theo dõi hiệu suất. Ghi lại tổng giá trị danh mục vào ngày 1 hàng tháng, so sánh với VN-Index và giá vàng. Nếu danh mục của bạn kém hơn VN-Index 3 năm liên tiếp, cần xem lại chiến lược — có thể chuyển sang ETF sẽ hiệu quả hơn.</p>

<h2>Kết luận về xây dựng danh mục đầu tư đa dạng hóa</h2>
<p>Xây dựng danh mục đầu tư đa dạng hóa là nguyên tắc quan trọng nhất trong đầu tư — quan trọng hơn cả việc chọn đúng cổ phiếu hay timing thị trường. Bắt đầu với 3-4 loại tài sản, rebalance mỗi 6-12 tháng, và kiên trì với chiến lược đã chọn. Thời gian và lãi kép sẽ làm phần còn lại.</p>`
};

async function appendContent() {
    console.log('Adding content to short posts...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com', password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('Auth error:', authError.message); return; }

    for (const [id, extra] of Object.entries(additions)) {
        // Fetch current content
        const { data } = await supabase.from('posts').select('content, slug').eq('id', id).single();
        if (!data) { console.log(`Not found: ${id}`); continue; }

        const newContent = data.content + extra;
        const { error } = await supabase.from('posts').update({ content: newContent }).eq('id', id);
        console.log(error ? `ERR ${data.slug}: ${error.message}` : `OK ${data.slug}`);
    }
    console.log('\nBatch A done!');
}
appendContent();
