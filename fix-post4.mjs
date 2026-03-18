import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

const POST_ID = 'df855f93-af4c-4879-a48b-82ff8d527110';

const newContent = `<p>Trong số hàng chục quỹ ETF đang hoạt động tại Việt Nam, <strong>VN30 ETF (mã giao dịch E1VFVN30)</strong> luôn giữ vị trí số một về quy mô tài sản và thanh khoản. Nếu bạn đang tìm hiểu về <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">đầu tư ETF</a>, thì VN30 ETF chắc chắn là cái tên đầu tiên cần nghiên cứu.</p>

<p>Bài viết này sẽ giúp bạn hiểu sâu về VN30 ETF: nó hoạt động ra sao, danh mục đầu tư gồm những gì, phí bao nhiêu, hiệu suất thực tế, và liệu đây có phải lựa chọn phù hợp với bạn hay không.</p>

<h2>VN30 ETF là gì?</h2>

<p>VN30 ETF (tên đầy đủ: SSIAM VNX VN30 ETF, mã giao dịch E1VFVN30) là <strong>quỹ hoán đổi danh mục lớn nhất Việt Nam</strong>, được quản lý bởi SSIAM — công ty quản lý quỹ thuộc Tập đoàn SSI.</p>

<p>Quỹ này theo dõi chỉ số <strong>VN30-TRI</strong> (Total Return Index) — bao gồm 30 cổ phiếu có vốn hóa lớn nhất và thanh khoản cao nhất trên sàn HOSE. Khi bạn mua 1 CCQ (chứng chỉ quỹ) E1VFVN30, bạn đang gián tiếp sở hữu cả 30 cổ phiếu blue-chip hàng đầu Việt Nam cùng lúc.</p>

<h2>VN30 ETF hoạt động như thế nào?</h2>

<p>Cơ chế hoạt động của VN30 ETF khá đơn giản:</p>

<ul>
<li><strong>Quỹ thụ động (passive)</strong> — Quản lý quỹ không chủ động chọn cổ phiếu mà chỉ sao chép danh mục VN30. Khi chỉ số VN30 thay đổi thành phần (thêm/loại mã), quỹ điều chỉnh theo</li>
<li><strong>Giao dịch trên sàn</strong> — Mua bán CCQ giống hệt như mua cổ phiếu bình thường, khớp lệnh tức thì trong giờ giao dịch</li>
<li><strong>NAV cập nhật hàng ngày</strong> — Giá trị tài sản ròng (NAV) của mỗi CCQ được công bố mỗi ngày, đảm bảo minh bạch</li>
<li><strong>Tái cân bằng định kỳ</strong> — Mỗi quý, danh sách VN30 được xem xét lại, và quỹ tự động điều chỉnh</li>
</ul>

<p>Nhờ cơ chế thụ động, <strong>phí quản lý của VN30 ETF chỉ 0.55%/năm</strong> — thấp hơn 60-70% so với quỹ mở chủ động.</p>

<figure class="my-8"><img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop&q=80" alt="Màn hình giao dịch chứng khoán VN30 ETF với biểu đồ giá và khối lượng" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">VN30 ETF là quỹ ETF có thanh khoản cao nhất trên sàn HOSE</figcaption></figure>

<h2>Danh mục VN30 ETF gồm những cổ phiếu nào?</h2>

<p>30 cổ phiếu trong danh mục đại diện cho nhiều ngành kinh tế quan trọng nhất Việt Nam. Tính đến đầu năm 2026:</p>

<table>
<thead><tr><th>Nhóm ngành</th><th>Tỷ trọng</th><th>Cổ phiếu tiêu biểu</th></tr></thead>
<tbody>
<tr><td><strong>Ngân hàng</strong></td><td>~35-40%</td><td>VCB, BID, CTG, TCB, MBB, ACB</td></tr>
<tr><td><strong>Bất động sản</strong></td><td>~15-20%</td><td>VHM, VIC, NVL</td></tr>
<tr><td><strong>Công nghệ</strong></td><td>~8-10%</td><td>FPT</td></tr>
<tr><td><strong>Thép & Vật liệu</strong></td><td>~5-8%</td><td>HPG, HSG</td></tr>
<tr><td><strong>Bán lẻ</strong></td><td>~5-7%</td><td>MWG, MSN</td></tr>
<tr><td><strong>Khác</strong></td><td>~15-20%</td><td>VNM, GAS, PLX, SAB...</td></tr>
</tbody>
</table>

<p><strong>Điểm cần lưu ý:</strong> Ngân hàng chiếm tỷ trọng áp đảo (~40%). Điều này có nghĩa hiệu suất VN30 ETF phụ thuộc nhiều vào sức khỏe ngành tài chính. Khi ngân hàng tăng trưởng tốt (tín dụng tăng, nợ xấu giảm), ETF thường vượt trội. Ngược lại, khi ngân hàng gặp khó, ETF cũng chịu ảnh hưởng.</p>

<h2>Chi phí đầu tư VN30 ETF chi tiết</h2>

<p>Một trong những ưu điểm lớn nhất khiến VN30 ETF thu hút hàng triệu nhà đầu tư:</p>

<table>
<thead><tr><th>Loại phí</th><th>Mức phí</th><th>Ghi chú</th></tr></thead>
<tbody>
<tr><td><strong>Phí quản lý</strong></td><td>0.55%/năm</td><td>Tính trên NAV, trừ tự động hàng ngày</td></tr>
<tr><td><strong>Phí môi giới</strong></td><td>0.15-0.35%/lần GD</td><td>Tùy CTCK, nhiều nơi miễn phí cho ETF</td></tr>
<tr><td><strong>Thuế bán</strong></td><td>0.1%/lần bán</td><td>Thuế thu nhập cá nhân từ chuyển nhượng</td></tr>
<tr><td><strong>Tổng chi phí ước tính</strong></td><td>~0.7-1%/năm</td><td>Nếu mua DCA hàng tháng và giữ dài hạn</td></tr>
</tbody>
</table>

<p><strong>So sánh:</strong> Quỹ mở chủ động thường tính phí 1.5-2%/năm + phí mua/bán 1-2%. Đầu tư VN30 ETF tiết kiệm được 50-70% chi phí so với quỹ mở.</p>

<p><strong>Mẹo tiết kiệm phí:</strong> Một số CTCK như VNDirect, TCBS hiện nay <strong>miễn phí giao dịch ETF hoàn toàn</strong>. Hãy chọn những CTCK này để tối ưu lợi nhuận.</p>

<figure class="my-8"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&q=80" alt="Dashboard phân tích chi phí và hiệu suất quỹ ETF" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">Chi phí thấp là lợi thế cạnh tranh lớn nhất của VN30 ETF so với quỹ mở</figcaption></figure>

<h2>Hiệu suất VN30 ETF qua các năm</h2>

<p>Nhìn lại lịch sử, VN30 ETF mang lại lợi suất ấn tượng trong dài hạn:</p>

<table>
<thead><tr><th>Giai đoạn</th><th>Lợi suất VN30 ETF</th><th>So sánh tiết kiệm</th></tr></thead>
<tbody>
<tr><td>2020</td><td>+12%</td><td>Tiết kiệm ~6%</td></tr>
<tr><td>2021</td><td>+35%</td><td>Tiết kiệm ~5.5%</td></tr>
<tr><td>2022</td><td>-18%</td><td>Tiết kiệm ~6%</td></tr>
<tr><td>2023</td><td>+22%</td><td>Tiết kiệm ~5%</td></tr>
<tr><td>2024</td><td>+15%</td><td>Tiết kiệm ~4.5%</td></tr>
<tr><td><strong>TB 5 năm</strong></td><td><strong>~13%/năm</strong></td><td><strong>~5.5%/năm</strong></td></tr>
</tbody>
</table>

<p><strong>Nhận xét quan trọng:</strong></p>
<ul>
<li>Lợi suất trung bình ~13%/năm — <strong>gấp đôi tiết kiệm ngân hàng</strong></li>
<li>Biến động giữa các năm khá lớn (có năm -18%, có năm +35%)</li>
<li>Nếu DCA đều đặn qua cả đợt giảm 2022, nhà đầu tư đã mua thêm được nhiều CCQ giá rẻ → lãi lớn khi thị trường phục hồi 2023-2024</li>
<li><strong>Kết luận:</strong> Cần tầm nhìn tối thiểu 3-5 năm để đầu tư ETF hiệu quả</li>
</ul>

<h2>Ai nên và không nên đầu tư VN30 ETF?</h2>

<h3>✅ Phù hợp với:</h3>
<ul>
<li><strong>Người mới bắt đầu</strong> — Không cần kiến thức phân tích cổ phiếu, chỉ cần hiểu xu hướng chung</li>
<li><strong>Người bận rộn</strong> — Chiến lược "set and forget", mua DCA hàng tháng rồi quên đi</li>
<li><strong>Nhà đầu tư dài hạn</strong> — Có tầm nhìn 3-10 năm, chấp nhận biến động ngắn hạn</li>
<li><strong>Người muốn đa dạng hóa</strong> — 1 CCQ = 30 cổ phiếu, đa dạng hóa tức thì</li>
</ul>

<h3>❌ Không phù hợp với:</h3>
<ul>
<li><strong>Trader ngắn hạn</strong> — ETF biến động chậm hơn cổ phiếu riêng lẻ, không phù hợp cho lướt sóng</li>
<li><strong>Ai cần tiền trong 1-2 năm tới</strong> — Có thể gặp đợt giảm 15-20% trong ngắn hạn</li>
<li><strong>Muốn vượt trội thị trường</strong> — ETF thụ động chỉ bám theo thị trường, không thể vượt chỉ số</li>
</ul>

<figure class="my-8"><img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=450&fit=crop&q=80" alt="Nhà đầu tư lập kế hoạch đầu tư dài hạn với VN30 ETF" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">VN30 ETF phù hợp nhất với chiến lược đầu tư dài hạn 3-10 năm kết hợp DCA</figcaption></figure>

<h2>Chiến lược đầu tư VN30 ETF hiệu quả nhất</h2>

<p>Chiến lược đơn giản và hiệu quả nhất cho VN30 ETF chính là <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">DCA (Dollar-Cost Averaging)</a>:</p>

<ol>
<li><strong>Chọn số tiền cố định</strong> — VD: 2 triệu đồng/tháng</li>
<li><strong>Chọn ngày cố định</strong> — VD: ngày 15 hàng tháng</li>
<li><strong>Mua đều đặn</strong> — Bất kể thị trường đang tăng hay giảm, không timing thị trường</li>
<li><strong>Giữ dài hạn</strong> — Tối thiểu 3 năm, lý tưởng 5-10 năm</li>
<li><strong>Không bán khi giảm</strong> — Khi thị trường giảm = cơ hội mua thêm với giá rẻ</li>
</ol>

<p><strong>Mô phỏng:</strong> DCA 3 triệu/tháng vào E1VFVN30 từ 01/2020 đến 12/2025 (6 năm):</p>
<ul>
<li>Tổng đầu tư: 216 triệu đồng</li>
<li>Giá trị danh mục ước tính: ~310-340 triệu đồng</li>
<li>Lợi nhuận: ~44-57% (trung bình ~8-9%/năm sau quy đổi)</li>
</ul>

<h2>Câu hỏi thường gặp về VN30 ETF</h2>

<h3>VN30 ETF có chia cổ tức không?</h3>
<p>Có. Các cổ phiếu trong VN30 chia cổ tức được quỹ gom lại và <strong>tái đầu tư vào danh mục</strong> (thể hiện qua NAV tăng). Một số kỳ quỹ cũng chia cổ tức tiền mặt cho nhà đầu tư.</p>

<h3>Mua E1VFVN30 cần tối thiểu bao nhiêu tiền?</h3>
<p>1 lô = 100 CCQ. Với giá ~15.000đ/CCQ, bạn cần khoảng <strong>1.5 triệu đồng</strong> để mua 1 lô. Một số CTCK cho mua lẻ từ 10 CCQ (~150.000đ).</p>

<h3>VN30 ETF khác gì FUEVFVND?</h3>
<p>FUEVFVND chính là tên quỹ, E1VFVN30 là mã giao dịch trên sàn — <strong>cùng là 1 sản phẩm</strong>. Bạn dùng mã E1VFVN30 để đặt lệnh mua/bán.</p>

<h3>Nên mua VN30 ETF hay tự mua 30 cổ phiếu VN30?</h3>
<p>Mua ETF tiện lợi và rẻ hơn nhiều. Nếu tự mua 30 mã, bạn cần vốn lớn (mỗi mã tối thiểu 1 lô) + phí giao dịch 30 lần + tự rebalance. ETF làm tất cả điều này cho bạn với phí chỉ 0.55%/năm.</p>

<h2>Kết luận: VN30 ETF có đáng đầu tư không?</h2>

<p>VN30 ETF xứng đáng là <strong>"quỹ ETF quốc dân" của nhà đầu tư Việt Nam</strong>. Với chi phí thấp (0.55%/năm), thanh khoản cao nhất thị trường, và danh mục 30 blue-chip hàng đầu, đây là nền tảng vững chắc cho bất kỳ danh mục đầu tư nào.</p>

<p>Nếu bạn chỉ được chọn <strong>1 sản phẩm đầu tư duy nhất</strong> cho 10 năm tới, VN30 ETF sẽ là lựa chọn khó bị đánh bại. Bắt đầu DCA 2-3 triệu/tháng ngay hôm nay — tương lai bạn sẽ cảm ơn quyết định này.</p>

<p>Muốn tìm hiểu thêm? Đọc bài <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">Top 5 Quỹ ETF Tốt Nhất Việt Nam 2026</a> để so sánh với các quỹ khác.</p>`;

const { error } = await s.from('posts').update({
    content: newContent,
    meta_title: 'VN30 ETF (E1VFVN30) Là Gì? Đánh Giá Chi Tiết Quỹ ETF Lớn Nhất Việt Nam 2026',
    meta_description: 'Đánh giá chi tiết VN30 ETF (E1VFVN30): danh mục 30 blue-chip, phí 0.55%/năm, lợi suất trung bình 13%/năm. Hướng dẫn chiến lược DCA + so sánh với quỹ mở.',
    reading_time: '14 phút',
    excerpt: 'Đánh giá toàn diện VN30 ETF (E1VFVN30) — quỹ ETF lớn nhất Việt Nam. Phân tích danh mục, phí, hiệu suất qua 5 năm và chiến lược đầu tư DCA hiệu quả nhất.',
}).eq('id', POST_ID);

if (error) { console.log('❌', error.message); }
else {
    const wc = newContent.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
    console.log(`✅ BÀI #4 DONE! Words: ${wc} | H2: ${(newContent.match(/<h2>/g)||[]).length} | Imgs: ${(newContent.match(/<img/g)||[]).length}`);
}
