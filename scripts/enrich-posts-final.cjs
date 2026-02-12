const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');

function countWords(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w.length > 0).length;
}

async function fixAll() {
    await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

    // Get ALL published posts with their real IDs
    const { data: posts } = await s.from('posts').select('id,slug,content').eq('is_published', true);

    // Find the 6 posts that are under 1000w
    const short = posts.filter(p => countWords(p.content) < 1000);
    console.log('Short posts:');
    short.forEach(p => console.log('  ' + p.slug + ' => ' + countWords(p.content) + 'w (id: ' + p.id + ')'));

    const extraMap = {
        'dau-tu-bat-dong-san-2026-uu-nhuoc-diem': `
<h2>Phân tích chi phí ẩn khi đầu tư bất động sản</h2>
<p>Nhiều nhà đầu tư bất động sản mới chỉ tính giá mua mà quên các chi phí ẩn: thuế trước bạ 0.5%, phí công chứng 0.1%, phí sang tên 0.5%, thuế thu nhập cá nhân khi bán (2% giá bán), chi phí sửa chữa/tân trang, lãi vay ngân hàng nếu dùng đòn bẩy. Tổng chi phí ẩn có thể lên đến 5-8% giá trị giao dịch — ăn mòn đáng kể lợi nhuận thực tế từ đầu tư bất động sản 2026.</p>
<p>Ví dụ: mua căn hộ 3 tỷ, chi phí ẩn khoảng 150-240 triệu. Nếu giá tăng chỉ 5% (150 triệu), bạn thực tế hòa vốn hoặc lỗ. Vì vậy, đầu tư bất động sản cần tầm nhìn ít nhất 3-5 năm để chi phí ẩn được "pha loãng" bởi tăng giá dài hạn.</p>

<h2>Lời khuyên cho người lần đầu mua bất động sản đầu tư</h2>
<p>Hãy bắt đầu với phân khúc phù hợp khả năng: căn hộ 1-2 phòng ngủ ở khu vực có nhu cầu thuê cao (gần khu công nghiệp, trường đại học, bệnh viện). Mục tiêu ban đầu là dòng tiền cho thuê ổn định, không phải "lướt sóng". Đảm bảo thu nhập cho thuê ít nhất bằng tiền trả nợ ngân hàng hàng tháng nếu bạn vay.</p>

<h2>Kết luận: Đầu tư bất động sản 2026 — Ưu nhược điểm cần cân nhắc</h2>
<p>Đầu tư bất động sản 2026 mang nhiều ưu nhược điểm cần cân nhắc kỹ trước khi xuống tiền. Thời kỳ "mua đâu cũng lãi" đã qua — giờ đây cần nghiên cứu kỹ pháp lý, vị trí, dòng tiền cho thuê và chi phí ẩn. Chọn đúng phân khúc, không vay quá 50%, và kiên nhẫn — đó là công thức đầu tư bất động sản bền vững trong 2026 và những năm tới.</p>`,

        'lai-kep-la-gi-suc-manh-lai-kep-dau-tu': `
<h2>Bảng tính lãi kép: Đầu tư 5 triệu/tháng trong 20 năm</h2>
<p>Hãy xem con số thực tế để cảm nhận sức mạnh lãi kép trong đầu tư khi bạn DCA 5 triệu/tháng (60 triệu/năm) suốt 20 năm:</p>
<table>
<thead><tr><th>Kênh</th><th>Lãi suất</th><th>Tổng vốn bỏ ra</th><th>Giá trị sau 20 năm</th><th>Lãi kép sinh ra</th></tr></thead>
<tbody>
<tr><td>Tiết kiệm</td><td>5%/năm</td><td>1.2 tỷ</td><td>2.06 tỷ</td><td>0.86 tỷ</td></tr>
<tr><td>Vàng</td><td>10%/năm</td><td>1.2 tỷ</td><td>3.79 tỷ</td><td>2.59 tỷ</td></tr>
<tr><td>Chứng khoán</td><td>15%/năm</td><td>1.2 tỷ</td><td>7.47 tỷ</td><td>6.27 tỷ</td></tr>
</tbody>
</table>
<p>Chỉ tăng lãi suất từ 5% lên 15%, tiền lãi kép tăng từ 860 triệu lên 6.27 TỶ — gấp hơn 7 lần! Đây chính là lý do lãi kép được Einstein gọi là "kỳ quan thứ 8 thế giới". Sức mạnh lãi kép trong đầu tư nằm ở tốc độ tăng theo hàm mũ — càng về sau càng nhanh.</p>

<h2>Quy tắc 72 — Công cụ tính nhẩm nhân đôi tiền</h2>
<p>Muốn biết bao lâu tiền nhân đôi? Chia 72 cho lãi suất hàng năm. Tiết kiệm 5%: 72/5 = 14.4 năm. Chứng khoán 15%: 72/15 = 4.8 năm. Bitcoin 30%: 72/30 = 2.4 năm (nhưng rủi ro cực cao!). Ngược lại, lạm phát 3.5%/năm khiến sức mua giảm nửa sau 72/3.5 = 20 năm — đây là "lãi kép ngược" đang ăn mòn tài sản bạn mỗi ngày.</p>

<h2>Warren Buffett và bài học lãi kép</h2>
<p>Warren Buffett — người giàu thứ 5 thế giới — kiếm 99% tài sản SAU tuổi 50. Ông bắt đầu đầu tư từ năm 11 tuổi, kiên trì suốt 70+ năm. Nếu dừng ở tuổi 50, tài sản chỉ khoảng 1 tỷ USD thay vì 120+ tỷ USD. Lãi kép là gì nếu không phải sức mạnh của THỜI GIAN? Bắt đầu sớm chính là lợi thế lớn nhất bạn có.</p>

<h2>Cách tận dụng lãi kép tối đa</h2>
<p>Ba yếu tố quyết định sức mạnh lãi kép: (1) Bắt đầu SỚM — mỗi năm trễ mất hàng trăm triệu; (2) TÁI ĐẦU TƯ lãi — không rút lãi tiêu mà để lãi sinh thêm lãi; (3) KIÊN TRÌ — không ngừng DCA dù thị trường tốt hay xấu. Kết hợp 3 yếu tố này với <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> và <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">đa dạng hóa danh mục</a>, bạn đang vận hành "cỗ máy lãi kép" hiệu quả nhất.</p>

<h2>Kết luận: Lãi kép là gì — Sức mạnh thay đổi cuộc đời</h2>
<p>Lãi kép là gì? Là công cụ mạnh mẽ nhất mà mọi nhà đầu tư đều có thể tận dụng — miễn là bắt đầu SỚM và kiên trì. Sức mạnh lãi kép trong đầu tư không đến từ may mắn hay thiên tài, mà từ thời gian + kỷ luật + tái đầu tư. Mỗi ngày trì hoãn là một ngày lãi kép bị lãng phí. Hãy bắt đầu ngay hôm nay.</p>`,

        'quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan': `
<h2>Ứng dụng 50/30/20 cho các mức thu nhập</h2>
<table>
<thead><tr><th>Thu nhập</th><th>Thiết yếu (50%)</th><th>Mong muốn (30%)</th><th>Tiết kiệm/ĐT (20%)</th></tr></thead>
<tbody>
<tr><td>10 triệu</td><td>5 triệu</td><td>3 triệu</td><td>2 triệu</td></tr>
<tr><td>20 triệu</td><td>10 triệu</td><td>6 triệu</td><td>4 triệu</td></tr>
<tr><td>50 triệu</td><td>25 triệu</td><td>15 triệu</td><td>10 triệu</td></tr>
</tbody>
</table>
<p>Khi thu nhập tăng, phần thiết yếu thường không tăng tỷ lệ. Người thu nhập cao nên tăng tiết kiệm/đầu tư lên 30-40%. Đây là "tối ưu hóa" quy tắc 50/30/20 quản lý tài chính cá nhân cho người có thu nhập từ 30 triệu trở lên.</p>

<h2>Kết luận: Quy tắc 50/30/20 quản lý tài chính cá nhân</h2>
<p>Quy tắc 50/30/20 quản lý tài chính cá nhân là framework đơn giản nhưng mạnh mẽ để kiểm soát tiền bạc. LUÔN CÓ phần tiết kiệm/đầu tư trong mỗi kỳ lương — dù chỉ 10%. Phần 20% nhỏ bé hôm nay, nhờ <a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">sức mạnh lãi kép</a>, sẽ trở thành tài sản đáng kể sau 10-20 năm. Áp dụng quy tắc 50/30/20 ngay từ hôm nay.</p>`,

        '10-sai-lam-pho-bien-khi-dau-tu-cach-tranh': `
<h2>Checklist kiểm tra trước mỗi quyết định đầu tư</h2>
<p>Để tránh 10 sai lầm phổ biến khi đầu tư, hãy dùng checklist này trước mỗi giao dịch: ✅ Đã nghiên cứu ít nhất 3 ngày? ✅ Có quỹ khẩn cấp đủ 3-6 tháng? ✅ Dùng tiền nhàn rỗi, không vay nợ? ✅ Có mục tiêu rõ ràng? ✅ Đã đặt mức cắt lỗ? ✅ Danh mục đa dạng? ✅ Không mua vì tin nhóm chat? ✅ Kỳ vọng hợp lý (10-20%/năm)? ✅ Tuân thủ chiến lược? ✅ Ghi nhật ký đầu tư?</p>
<p>In checklist này ra và dán cạnh màn hình. Nếu không đạt 7/10 — đừng bấm nút mua.</p>

<h2>Tâm lý đầu tư — Kẻ thù lớn nhất</h2>
<p>Ít nhất 7 trong 10 sai lầm phổ biến khi đầu tư xuất phát từ tâm lý, không phải thiếu kiến thức. Giải pháp: tự động hóa mọi thứ. DCA tự động, stop-loss tự động — khi chạy "tự lái", cảm xúc không can thiệp. <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">Chiến lược DCA</a> là ví dụ hoàn hảo cho đầu tư không cảm xúc.</p>

<h2>Viết nhật ký đầu tư</h2>
<p>Mỗi khi mua/bán, ghi: lý do quyết định, cảm xúc lúc đó, kỳ vọng kết quả. Sau 6 tháng đọc lại, bạn nhận ra pattern sai lầm và cải thiện đáng kể. Đơn giản nhưng cực hiệu quả — đây là thói quen của nhiều nhà đầu tư chuyên nghiệp.</p>

<h2>Kết luận: 10 sai lầm phổ biến khi đầu tư và cách tránh</h2>
<p>Tránh 10 sai lầm phổ biến khi đầu tư không đảm bảo giàu, nhưng giúp tránh mất tiền không cần thiết. Xem danh sách này như 10 "lằn ranh đỏ" không vượt qua — xây dựng hệ thống tự động để bảo vệ bạn khỏi chính bản thân mình.</p>`,

        'so-sanh-gui-tiet-kiem-vs-dau-tu-2026': `
<h2>Chiến lược chuyển từ tiết kiệm sang đầu tư</h2>
<p>Nếu hiện tại 100% ở tiết kiệm, đừng chuyển hết sang đầu tư cùng lúc. Hãy từ từ: tháng 1 chuyển 20% sang ETF VN30, tháng 3 thêm 10% sang vàng, tháng 5 thêm 5% sang BTC. Khi so sánh gửi tiết kiệm vs đầu tư, cách tiếp cận dần dần giúp bạn quen biến động mà không bị sốc tâm lý.</p>
<p>LUÔN giữ quỹ khẩn cấp (3-6 tháng chi tiêu) ở tiết kiệm — đệm an toàn KHÔNG BAO GIỜ chuyển sang đầu tư, bất kể thị trường hấp dẫn thế nào.</p>

<h2>Lãi suất thực — Con số bóc trần sự thật</h2>
<p>Ngân hàng quảng cáo "5.5%/năm" — đó là lãi suất danh nghĩa. Lãi suất THỰC = danh nghĩa - lạm phát. Với lạm phát 3.5%, lãi suất thực tiết kiệm chỉ 2%/năm. So sánh gửi tiết kiệm vs đầu tư ở lãi suất thực 2026: chứng khoán 11.5% thực, vàng 6.5% thực, tiết kiệm 1.5% thực. Tiền tiết kiệm gần như đứng yên về giá trị thực.</p>

<h2>Khi nào tăng tỷ lệ đầu tư?</h2>
<p>Khi lương tăng, giữ chi tiêu ổn định và đổ phần tăng thêm 100% vào đầu tư (sau khi quỹ khẩn cấp đủ). Ví dụ: lương tăng từ 15 lên 20 triệu — 5 triệu tăng thêm nên đầu tư hết. Gọi là "pay yourself first" — trả cho tương lai trước. Kết hợp với <a href="/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu">lãi kép</a>, phần tiền nhỏ bé này tạo ra tài sản lớn.</p>

<h2>Kết luận: So sánh gửi tiết kiệm vs đầu tư 2026</h2>
<p>So sánh gửi tiết kiệm vs đầu tư 2026 cho câu trả lời rõ: tiết kiệm cho quỹ khẩn cấp, đầu tư cho mọi thứ còn lại. Đừng để "an toàn" giả tạo của tiết kiệm ru ngủ — lạm phát đang ăn mòn tài sản mỗi ngày. Bắt đầu đầu tư ngay với <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> để tiền thực sự "đi làm".</p>`,

        'top-5-sai-lam-dau-tu-chung-khoan': `
<h2>Bài học từ nhà đầu tư chứng khoán thành công</h2>
<p>Những nhà đầu tư chứng khoán thành công tại Việt Nam có điểm chung không phải IQ cao hay "nguồn tin mật" — mà là kỷ luật sắt đá. Họ tuân thủ chiến lược cắt lỗ nghiêm ngặt, không margin khi chưa đủ kinh nghiệm, và KHÔNG BAO GIỜ đầu tư bằng tiền vay. Bài học xương máu: không ai "luôn đúng" — ngay cả chuyên gia chỉ đúng 55-65% giao dịch. Bí quyết: khi đúng thì lãi lớn (để lãi chạy), khi sai thì lỗ nhỏ (cắt lỗ sớm). Tổng cộng vẫn dương.</p>

<h2>Kết luận: 5 sai lầm đầu tư chứng khoán phổ biến</h2>
<p>Tránh top 5 sai lầm đầu tư chứng khoán phổ biến nhất đã giúp bạn vào top 20% nhà đầu tư cá nhân — nhóm thiểu số thực sự có lãi dài hạn. Thị trường không thưởng người thông minh nhất, mà thưởng cho người kỷ luật nhất. Xây dựng hệ thống kỷ luật, áp dụng <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> kết hợp <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa">đa dạng hóa danh mục</a> để tránh sai lầm đầu tư chứng khoán và thành công dài hạn.</p>`
    };

    for (const p of short) {
        const extra = extraMap[p.slug];
        if (!extra) { console.log('No extra for: ' + p.slug); continue; }
        const newContent = p.content + extra;
        const newW = countWords(newContent);
        const { error } = await s.from('posts').update({ content: newContent }).eq('id', p.id);
        console.log(error ? 'ERR ' + p.slug : 'OK ' + p.slug + ' (' + countWords(p.content) + 'w -> ' + newW + 'w)');
    }
    console.log('\nFINAL FIX DONE!');
}
fixAll();
