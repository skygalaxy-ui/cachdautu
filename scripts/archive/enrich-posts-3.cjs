const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

const updates = [
    {
        id: '8fdd1f37-6eab-4523-ab81-4f93cc6b9f45',
        content: `<h2>Bất động sản 2026: Cơ hội hay rủi ro?</h2>
<p>Bất động sản đã và đang là kênh đầu tư "truyền thống" nhất tại Việt Nam. Trong văn hóa người Việt, sở hữu nhà đất được xem là biểu tượng của sự thành công và ổn định tài chính. Câu nói "tấc đất tấc vàng" vẫn đúng phần nào, nhưng thị trường 2026 đã rất khác so với 10 năm trước — không còn chỗ cho những nhà đầu tư bốc đồng, thiếu nghiên cứu.</p>
<p>Sau giai đoạn "sốt đất" 2021-2022 và đợt điều chỉnh sâu 2023-2024, thị trường bất động sản Việt Nam đang trong giai đoạn phục hồi chọn lọc. Không phải mọi phân khúc đều tăng — một số khu vực hàng tồn kho vẫn rất lớn, trong khi những vị trí tốt đã bắt đầu có dấu hiệu tăng giá trở lại.</p>

<img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop&q=80" alt="Bất động sản Việt Nam 2026" />

<h2>Ưu điểm của đầu tư bất động sản</h2>
<h3>1. Tài sản hữu hình, giá trị bền vững</h3>
<p>Khác với cổ phiếu có thể về 0 khi doanh nghiệp phá sản, hay crypto mất giá 90%, bất động sản là tài sản vật chất — miếng đất vẫn ở đó dù kinh tế biến động thế nào. Trong dài hạn (10-20 năm), giá bất động sản tại các đô thị lớn Việt Nam gần như luôn tăng.</p>

<h3>2. Đòn bẩy tài chính</h3>
<p>Đây là lợi thế lớn nhất của bất động sản so với các kênh đầu tư khác. Bạn có thể vay ngân hàng 60-70% giá trị bất động sản. Nếu mua căn hộ 2 tỷ, bạn chỉ cần có 600-800 triệu, phần còn lại vay ngân hàng. Khi bất động sản tăng giá 20%, lợi nhuận trên vốn bỏ ra thực tế lên đến 50-60%.</p>

<h3>3. Dòng tiền cho thuê</h3>
<p>Bất động sản cho thuê tạo ra dòng tiền hàng tháng — một nguồn thu nhập thụ động ổn định. Tỷ suất cho thuê tại Hà Nội và TP.HCM trung bình 4-6%/năm cho căn hộ, 6-10% cho phòng trọ/homestay.</p>

<h2>Nhược điểm và rủi ro cần lưu ý</h2>
<h3>1. Yêu cầu vốn rất lớn</h3>
<p>Đầu tư bất động sản đòi hỏi số vốn lớn nhất trong tất cả các kênh — tối thiểu 500 triệu đến vài tỷ đồng. Ngay cả khi sử dụng đòn bẩy, bạn vẫn cần 30-40% vốn tự có. Đây là rào cản lớn với đa số nhà đầu tư trẻ.</p>

<h3>2. Thanh khoản thấp</h3>
<p>Khi cần tiền gấp, bạn không thể bán bất động sản trong vài ngày như cổ phiếu. Quá trình tìm người mua, đàm phán giá, làm thủ tục có thể mất từ 3-6 tháng, thậm chí lâu hơn trong thị trường ảm đạm. Bán gấp thường phải chấp nhận giá thấp hơn thị trường 10-20%.</p>

<h3>3. Rủi ro pháp lý</h3>
<p>Tranh chấp đất đai, quy hoạch treo, sổ đỏ chưa rõ ràng — đây là những rủi ro đặc thù của bất động sản Việt Nam. Nhiều nhà đầu tư đã mất trắng khi mua phải dự án "ma" hoặc đất nằm trong diện quy hoạch. Luôn kiểm tra pháp lý kỹ lưỡng trước khi xuống tiền.</p>

<h2>Phân khúc nào đáng đầu tư năm 2026?</h2>
<table>
<thead><tr><th>Phân khúc</th><th>Triển vọng 2026</th><th>Vốn tối thiểu</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td>Căn hộ trung cấp TP.HCM/HN</td><td>Tích cực</td><td>2-4 tỷ</td><td>Cho thuê + tăng giá</td></tr>
<tr><td>Đất nền vùng ven đô thị</td><td>Thận trọng (chọn lọc)</td><td>1-3 tỷ</td><td>Đầu tư trung-dài hạn</td></tr>
<tr><td>BĐS công nghiệp</td><td>Rất tích cực</td><td>5-10 tỷ+</td><td>Nhà đầu tư lớn</td></tr>
<tr><td>Homestay/AirBnB</td><td>Tích cực (du lịch phục hồi)</td><td>1-5 tỷ</td><td>Có thời gian quản lý</td></tr>
</tbody>
</table>

<p>Nếu vốn còn nhỏ, bạn nên cân nhắc bắt đầu với <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a> hoặc <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">vàng</a> trước, tích lũy đủ vốn rồi mới tiến vào bất động sản. Xem thêm <a href="/blog/kien-thuc-dau-tu/so-sanh-kenh-dau-tu-pho-bien">so sánh các kênh đầu tư</a> để có cái nhìn tổng quan.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Có nên vay ngân hàng mua bất động sản?</h3>
<p>Vay là cách sử dụng đòn bẩy hiệu quả, nhưng cần đảm bảo: tiền trả góp hàng tháng không quá 30-40% thu nhập, có quỹ dự phòng ít nhất 6 tháng trả góp, và bất động sản có khả năng cho thuê cover ít nhất 50% tiền trả góp.</p>

<h3>Giá bất động sản 2026 sẽ tăng hay giảm?</h3>
<p>Tùy phân khúc và vị trí. Căn hộ tại TP.HCM và Hà Nội có xu hướng tăng nhẹ 5-10% nhờ nguồn cung mới hạn chế. Đất nền vùng ven vẫn còn rủi ro giảm ở những khu vực thiếu hạ tầng. "Location, location, location" vẫn là quy tắc vàng.</p>`
    },
    {
        id: '291008eb-9ebe-4dc4-9df2-75e439a26f7b',
        content: `<h2>Lãi kép — Sức mạnh "bí ẩn" biến tiền nhỏ thành tài sản lớn</h2>
<p>Albert Einstein từng gọi lãi kép là "kỳ quan thứ 8 của thế giới" — kẻ hiểu nó sẽ kiếm được, kẻ không hiểu sẽ phải trả. Đây không chỉ là lời nói dí dỏm, mà là sự thật toán học đã được chứng minh qua hàng trăm năm: lãi kép có thể biến một khoản đầu tư nhỏ thành tài sản khổng lồ nếu bạn cho nó đủ thời gian.</p>
<p>Cốt lõi của lãi kép nằm ở 4 chữ: "lãi sinh ra lãi". Khi bạn đầu tư 100 triệu với lãi suất 15%/năm, năm đầu tiên bạn có 115 triệu. Năm thứ hai, lãi 15% không chỉ tính trên 100 triệu gốc, mà trên toàn bộ 115 triệu. Cứ thế, tốc độ tăng trưởng ngày càng nhanh — giống quả cầu tuyết lăn xuống dốc, càng lăn càng lớn.</p>

<img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8451?w=1200&h=630&fit=crop&q=80" alt="Sức mạnh lãi kép trong đầu tư" />

<h2>Ví dụ thực tế choáng ngợp</h2>
<p>Hãy xem hai nhà đầu tư A và B cùng đầu tư 5 triệu đồng/tháng với lãi suất trung bình 15%/năm (mức lợi nhuận hợp lý của chứng khoán Việt Nam dài hạn):</p>

<table>
<thead><tr><th>Thời gian</th><th>Tổng tiền gốc đã đầu tư</th><th>Giá trị danh mục (15%/năm)</th><th>Lãi kép đã tạo ra</th></tr></thead>
<tbody>
<tr><td>5 năm</td><td>300 triệu</td><td>430 triệu</td><td>130 triệu</td></tr>
<tr><td>10 năm</td><td>600 triệu</td><td>1.35 tỷ</td><td>750 triệu</td></tr>
<tr><td>20 năm</td><td>1.2 tỷ</td><td>7.2 tỷ</td><td>6 tỷ</td></tr>
<tr><td>30 năm</td><td>1.8 tỷ</td><td>31.7 tỷ</td><td>29.9 tỷ</td></tr>
</tbody>
</table>

<p>Xu hướng rõ ràng: trong 5 năm đầu, lãi kép tạo ra 130 triệu (43% vốn gốc). Nhưng từ năm 20 đến năm 30, lãi kép tạo thêm hơn 24 tỷ! Đó là lý do tại sao thời gian là yếu tố quan trọng nhất — quan trọng hơn cả số tiền đầu tư hay lãi suất.</p>

<h2>Quy tắc 72 — "Phép thuật" tính nhẩm</h2>
<p>Quy tắc 72 giúp bạn ước tính nhanh thời gian cần thiết để tiền nhân đôi. Công thức cực đơn giản: Số năm nhân đôi = 72 ÷ Lãi suất (%/năm).</p>
<p>Ví dụ: với lãi suất 12%/năm, tiền bạn sẽ nhân đôi sau 72 ÷ 12 = 6 năm. Với 15%/năm, chỉ cần 4.8 năm. Còn nếu gửi tiết kiệm 5%/năm, bạn phải chờ 14.4 năm mới nhân đôi — một sự khác biệt khổng lồ.</p>

<h2>Áp dụng lãi kép vào đầu tư thực tế</h2>
<p>Hiểu lãi kép là một chuyện, áp dụng nó là chuyện khác. Dưới đây là 4 quy tắc giúp bạn tận dụng sức mạnh lãi kép tối đa.</p>
<p><strong>Quy tắc 1: Bắt đầu NGAY.</strong> Đừng chờ "đủ tiền" hay "hiểu biết" rồi mới bắt đầu. Người bắt đầu đầu tư từ 22 tuổi với 3 triệu/tháng sẽ có nhiều tiền hơn người bắt đầu từ 32 tuổi với 6 triệu/tháng. 10 năm đầu mang lại lợi thế không thể bù đắp.</p>
<p><strong>Quy tắc 2: Tái đầu tư mọi khoản lãi.</strong> Cổ tức, lãi suất, lợi nhuận — tất cả phải được tái đầu tư, không rút ra tiêu. Mỗi đồng lãi rút ra là một "mắt xích" bị gãy trong chuỗi lãi kép.</p>
<p><strong>Quy tắc 3: Đầu tư đều đặn.</strong> Áp dụng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> — đầu tư cùng số tiền mỗi tháng. Tự động hóa bằng cách đặt chuyển khoản tự động vào ngày nhận lương.</p>
<p><strong>Quy tắc 4: Kiên nhẫn.</strong> Lãi kép cần ít nhất 10-15 năm để thực sự phát huy sức mạnh. Đừng rút vốn sớm vì biến động ngắn hạn.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Kênh đầu tư nào tận dụng lãi kép tốt nhất?</h3>
<p>ETF chứng khoán (VN30) với chiến lược DCA là cách đơn giản nhất. Lợi nhuận trung bình 12-15%/năm, cộng với tái đầu tư cổ tức, tạo hiệu ứng lãi kép mạnh mẽ nhất. Xem <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">hướng dẫn đầu tư chứng khoán</a> để bắt đầu.</p>

<h3>Lãi kép có hiệu quả với số tiền nhỏ không?</h3>
<p>HOÀN TOÀN CÓ! Chỉ cần 2-3 triệu/tháng, sau 20-30 năm, lãi kép sẽ biến nó thành hàng tỷ đồng. Quan trọng nhất không phải bắt đầu lớn, mà là bắt đầu SỚM và ĐỀU ĐẶN.</p>`
    },
    {
        id: '13a3ea2c-5e00-4dd2-83e6-b2e35a41420b',
        content: `<h2>Quy tắc 50/30/20 — Nền tảng quản lý tài chính đơn giản nhất</h2>
<p>Nếu bạn hỏi bất kỳ chuyên gia tài chính nào "nên bắt đầu quản lý tiền từ đâu", câu trả lời phổ biến nhất sẽ là quy tắc 50/30/20. Được Elizabeth Warren — giáo sư luật Harvard và thượng nghị sĩ Mỹ — phổ biến trong cuốn sách bestseller "All Your Worth", quy tắc này đơn giản đến mức ai cũng có thể áp dụng ngay hôm nay.</p>
<p>Bản chất của quy tắc: chia thu nhập sau thuế thành 3 phần với tỷ lệ cố định — 50% cho nhu cầu thiết yếu, 30% cho mong muốn cá nhân, và 20% cho tiết kiệm và đầu tư. Không cần app phức tạp, không cần bảng tính Excel dài dòng — chỉ cần 3 con số này.</p>

<h2>50% — Nhu cầu thiết yếu</h2>
<p>Đây là phần chi tiêu bắt buộc — những khoản bạn PHẢI trả để duy trì cuộc sống cơ bản. Bao gồm tiền nhà/thuê trọ, điện nước, tiền ăn, đi lại, bảo hiểm, và các khoản nợ cố định (trả góp nhà, xe).</p>
<p>Ví dụ cụ thể: nếu thu nhập 20 triệu/tháng, phần thiết yếu là 10 triệu. Điều này có nghĩa tiền thuê nhà + ăn uống + đi lại + hóa đơn không nên vượt quá 10 triệu. Nếu vượt, bạn cần tìm cách giảm chi (thuê phòng rẻ hơn, nấu ăn nhiều hơn) hoặc tăng thu nhập.</p>
<p>Mẹo quan trọng: nếu riêng tiền thuê nhà đã chiếm hơn 30% thu nhập, bạn đang "sống vượt quá khả năng" — cần tìm nơi ở phù hợp hơn hoặc tìm bạn cùng phòng để chia chi phí.</p>

<h2>30% — Mong muốn cá nhân</h2>
<p>Phần này dành cho những thứ bạn MUỐN nhưng không nhất thiết PHẢI có: ăn nhà hàng, xem phim, mua quần áo mới, du lịch, giải trí, đặt Grab thay vì đi bus. Đây là phần khiến cuộc sống thêm vui nhưng cũng là nơi dễ "rò rỉ" tiền nhất.</p>
<p>Nhiều người không phân biệt được "cần" và "muốn". Ví dụ: đi ăn trưa hàng ngày (40-50K) là "cần", nhưng ăn bún bò 80K mỗi ngày thay vì mang cơm theo là "muốn". Cà phê buổi sáng 15K pha tại nhà là "cần", nhưng latte 65K ở Highland mỗi ngày là "muốn".</p>
<p>Mẹo: dùng thẻ riêng hoặc envelope method cho khoản 30% này. Khi hết tiền trong "bao thư", bạn biết mình cần dừng chi tiêu giải trí tháng đó.</p>

<h2>20% — Tiết kiệm và Đầu tư</h2>
<p>Đây là phần quan trọng nhất cho tương lai tài chính của bạn. 20% thu nhập sẽ được chia thành hai mục đích: xây dựng quỹ khẩn cấp (3-6 tháng chi tiêu) và sau đó đầu tư sinh lời.</p>
<p>Với thu nhập 20 triệu, 20% = 4 triệu/tháng dành cho tiết kiệm và đầu tư. Giai đoạn đầu, toàn bộ 4 triệu nên vào quỹ khẩn cấp cho đến khi đạt 30-60 triệu. Sau đó, chuyển sang đầu tư: <a href="/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi">chứng khoán</a>, <a href="/blog/kien-thuc-dau-tu/dau-tu-vang-kenh-tru-an-an-toan">vàng</a>, hoặc <a href="/blog/crypto/dau-tu-bitcoin-crypto-cho-nguoi-moi">crypto</a> tùy khẩu vị rủi ro. Tìm hiểu thêm <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">cách xây dựng danh mục đa dạng hóa</a>.</p>

<h2>Áp dụng quy tắc 50/30/20 theo mức thu nhập</h2>
<table>
<thead><tr><th>Thu nhập/tháng</th><th>50% Thiết yếu</th><th>30% Mong muốn</th><th>20% Tiết kiệm/Đầu tư</th></tr></thead>
<tbody>
<tr><td>10 triệu</td><td>5 triệu</td><td>3 triệu</td><td>2 triệu</td></tr>
<tr><td>15 triệu</td><td>7.5 triệu</td><td>4.5 triệu</td><td>3 triệu</td></tr>
<tr><td>20 triệu</td><td>10 triệu</td><td>6 triệu</td><td>4 triệu</td></tr>
<tr><td>30 triệu</td><td>15 triệu</td><td>9 triệu</td><td>6 triệu</td></tr>
<tr><td>50 triệu</td><td>25 triệu</td><td>15 triệu</td><td>10 triệu</td></tr>
</tbody>
</table>

<p>Lưu ý: khi thu nhập tăng, KHÔNG nên tăng chi tiêu tỷ lệ thuận. Nếu lương tăng từ 15 lên 25 triệu, hãy giữ chi tiêu thiết yếu ở mức cũ và tăng phần tiết kiệm/đầu tư lên 30-40%. Đây là cách những người kiếm được nhiều tiền thực sự giàu lên — họ tăng tỷ lệ đầu tư thay vì tăng mức sống.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Thu nhập thấp có áp dụng được 50/30/20 không?</h3>
<p>Với thu nhập dưới 8 triệu, tỷ lệ 50/30/20 có thể cần điều chỉnh thành 60/20/20 hoặc thậm chí 70/20/10. Điều quan trọng nhất là LUÔN dành ít nhất 10% cho tiết kiệm — dù chỉ 800K-1 triệu/tháng cũng tạo ra sự khác biệt lớn trong dài hạn nhờ <a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">sức mạnh lãi kép</a>.</p>

<h3>Nên bắt đầu quy tắc này từ đâu?</h3>
<p>Bước 1: Liệt kê TẤT CẢ khoản chi tiêu tháng vừa rồi. Bước 2: Phân loại từng khoản vào "cần" hoặc "muốn". Bước 3: Tính tổng và so sánh với tỷ lệ 50/30/20. Bước 4: Điều chỉnh dần — không cần hoàn hảo ngay, chỉ cần tiến bộ mỗi tháng.</p>`
    }
];

async function updatePosts() {
    console.log('📝 Cập nhật nội dung chi tiết cho 3 bài viết (batch 3)...\n');

    const { error: authError } = await supabase.auth.signInWithPassword({
        email: 'admin@cachdautu.com',
        password: 'CachDauTu@2026!'
    });
    if (authError) { console.log('❌ Auth failed:', authError.message); return; }

    for (const update of updates) {
        const { error } = await supabase
            .from('posts')
            .update({ content: update.content })
            .eq('id', update.id);
        if (error) {
            console.log(`❌ ${update.id}: ${error.message}`);
        } else {
            console.log(`✅ Updated ${update.id}`);
        }
    }
    console.log('\n🎉 Batch 3 done!');
}

updatePosts();
