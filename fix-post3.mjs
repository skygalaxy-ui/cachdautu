import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

const POST_ID = '4d1ff6a1-fb80-4b56-ad3f-0eeb780d1e93';

const newContent = `<p>Bạn muốn thử đầu tư chứng khoán nhưng sợ mất tiền thật? <strong>Tài khoản demo</strong> (hay còn gọi là tài khoản mô phỏng, paper trading) cho phép bạn giao dịch với tiền ảo trên thị trường thật — hoàn toàn miễn phí và không có bất kỳ rủi ro tài chính nào.</p>

<p>Đây là bước mà <strong>mọi nhà đầu tư chuyên nghiệp đều khuyên người mới phải trải qua</strong> trước khi đặt lệnh bằng tiền thật. Bài viết này sẽ hướng dẫn bạn cách tận dụng tài khoản demo một cách hiệu quả nhất — từ cách đăng ký, chiến lược luyện tập, đến thời điểm chuyển sang giao dịch thật.</p>

<h2>Tài khoản demo là gì và hoạt động thế nào?</h2>

<p>Tài khoản demo (paper trading account) là một tài khoản giao dịch chứng khoán mô phỏng, có đầy đủ tính năng giống tài khoản thật:</p>

<ul>
<li><strong>Dữ liệu giá thời gian thực</strong> — giá cổ phiếu, biểu đồ kỹ thuật, tin tức đều giống 100% thị trường thật</li>
<li><strong>Đặt lệnh mua/bán đầy đủ</strong> — lệnh LO, MP, ATO, ATC đều hoạt động bình thường</li>
<li><strong>Tiền đầu tư là tiền ảo</strong> — thường được cấp sẵn 100-500 triệu đồng để giao dịch</li>
<li><strong>Theo dõi lãi/lỗ realtime</strong> — bạn thấy danh mục tăng giảm giống hệt khi đầu tư thật</li>
<li><strong>Hoàn toàn miễn phí</strong> — không mất bất kỳ chi phí nào để đăng ký và sử dụng</li>
</ul>

<p><strong>Điểm quan trọng:</strong> Tài khoản demo cho phép bạn <em>học từ sai lầm mà không mất tiền</em>. Bạn có thể thử mua cổ phiếu sai, bán lỗ, hoặc dùng margin — tất cả đều miễn phí. Kinh nghiệm thu được thì hoàn toàn thật.</p>

<figure class="my-8"><img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop&q=80" alt="Nhà đầu tư sử dụng tài khoản demo giao dịch chứng khoán trên màn hình" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">Tài khoản demo giúp bạn làm quen với giao dịch chứng khoán mà không rủi ro tài chính</figcaption></figure>

<h2>Top 5 tài khoản demo miễn phí tại Việt Nam 2026</h2>

<p>Dưới đây là bảng so sánh các nền tảng cung cấp tài khoản demo tốt nhất hiện nay:</p>

<table>
<thead><tr><th>#</th><th>CTCK/Platform</th><th>Loại giao dịch</th><th>Tiền ảo</th><th>Đặc điểm nổi bật</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>SSI iBoard</strong></td><td>Cổ phiếu + Phái sinh</td><td>500 triệu</td><td>Phổ biến nhất, giao diện giống app thật 100%</td></tr>
<tr><td>2</td><td><strong>VNDirect</strong></td><td>Cổ phiếu</td><td>200 triệu</td><td>Nhiều công cụ phân tích kỹ thuật</td></tr>
<tr><td>3</td><td><strong>VPS</strong></td><td>Phái sinh demo</td><td>100 triệu</td><td>Tốc độ khớp lệnh nhanh nhất, trải nghiệm thật</td></tr>
<tr><td>4</td><td><strong>Finhay</strong></td><td>Quỹ mở demo</td><td>10 triệu</td><td>Đơn giản nhất, phù hợp người siêu mới</td></tr>
<tr><td>5</td><td><strong>Investing.com</strong></td><td>Danh mục theo dõi</td><td>Không giới hạn</td><td>Theo dõi cổ phiếu quốc tế + Việt Nam</td></tr>
</tbody>
</table>

<p><strong>Khuyến nghị:</strong> Nếu bạn hoàn toàn mới, hãy bắt đầu với <strong>SSI iBoard</strong> — đây là nền tảng demo đầy đủ nhất, với 500 triệu tiền ảo và giao diện giống hệt app giao dịch thật. Bạn sẽ không bị "sốc" khi chuyển sang tiền thật.</p>

<h2>Cách đăng ký tài khoản demo SSI (5 phút)</h2>

<ol>
<li><strong>Tải app SSI iBoard</strong> trên App Store hoặc Google Play</li>
<li><strong>Chọn "Đăng ký tài khoản demo"</strong> hoặc "Paper Trading" trên giao diện chính</li>
<li><strong>Nhập thông tin cơ bản</strong> — chỉ cần email và số điện thoại, không cần CMND/CCCD</li>
<li><strong>Xác nhận qua OTP</strong> — nhận mã qua SMS hoặc email</li>
<li><strong>Bắt đầu giao dịch</strong> — tài khoản được nạp sẵn 500 triệu tiền ảo</li>
</ol>

<p><em>Lưu ý: Các CTCK khác cũng có quy trình tương tự, thường mất chưa đến 5 phút để hoàn tất.</em></p>

<h2>Lộ trình luyện tập trên tài khoản demo</h2>

<p>Đừng chỉ mở demo rồi mua bán lung tung. Hãy theo lộ trình 3 giai đoạn sau để tận dụng tối đa:</p>

<h3>📘 Giai đoạn 1: Làm quen giao diện (Tuần 1-2)</h3>

<p><strong>Mục tiêu:</strong> Thành thạo các thao tác cơ bản trên app giao dịch</p>

<ul>
<li>Học cách đặt lệnh mua/bán: lệnh LO (giới hạn giá), lệnh MP (thị trường), lệnh ATO/ATC (đầu/cuối phiên)</li>
<li>Đọc hiểu <a href="/blog/chung-khoan/cach-xem-bang-gia-chung-khoan-2026">bảng giá chứng khoán</a>: giá trần, giá sàn, giá tham chiếu, khối lượng</li>
<li>Mua thử 3-5 mã cổ phiếu quen thuộc như VNM (Vinamilk), FPT, VCB (Vietcombank)</li>
<li>Tập đọc biểu đồ nến cơ bản: nến xanh (tăng), nến đỏ (giảm)</li>
<li>Làm quen với các khái niệm: T+2.5 (thời gian giao dịch), lot (100 cổ phiếu), margin</li>
</ul>

<p><strong>Bài tập:</strong> Mỗi ngày đặt ít nhất 2-3 lệnh mua/bán, ghi chép lại lý do mua và kết quả.</p>

<h3>📊 Giai đoạn 2: Thử nghiệm chiến lược (Tuần 3-6)</h3>

<p><strong>Mục tiêu:</strong> Tìm ra chiến lược đầu tư phù hợp với tính cách của bạn</p>

<ul>
<li>Áp dụng <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">chiến lược DCA</a>: mua cố định 50 triệu (tiền ảo) mỗi tuần vào cùng 1 mã, ghi nhận kết quả</li>
<li>Thử quản lý rủi ro: mua rồi đặt stop-loss 7%, xem cảm giác khi lệnh stop-loss kích hoạt</li>
<li>So sánh kết quả: mua ETF E1VFVN30 vs mua 5 cổ phiếu riêng lẻ — cách nào lãi hơn?</li>
<li>Thử phân tích kỹ thuật: dùng chỉ báo RSI, MA20, MACD để quyết định mua/bán</li>
<li>Ghi nhật ký giao dịch: mỗi lệnh ghi rõ lý do mua, giá mục tiêu, stop-loss</li>
</ul>

<figure class="my-8"><img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=450&fit=crop&q=80" alt="Nhà đầu tư ghi chép nhật ký giao dịch và phân tích chiến lược" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">Ghi nhật ký giao dịch là thói quen quan trọng giúp bạn cải thiện kỹ năng đầu tư</figcaption></figure>

<h3>🚀 Giai đoạn 3: Chuyển sang tiền thật (Sau 1-3 tháng demo)</h3>

<p><strong>Dấu hiệu bạn đã sẵn sàng:</strong></p>

<ul>
<li>Đã quen với việc đặt lệnh, không còn bỡ ngỡ trước giao diện</li>
<li>Có chiến lược đầu tư rõ ràng (DCA, value investing, hoặc kết hợp)</li>
<li>Biết cách quản lý rủi ro: luôn đặt stop-loss, không all-in 1 mã</li>
<li>Đã trải qua ít nhất 1 đợt thị trường giảm trên demo và không hoảng loạn</li>
</ul>

<p><strong>Cách chuyển sang tiền thật an toàn:</strong></p>
<ol>
<li>Bắt đầu với <strong>5-10 triệu đồng tiền thật</strong> — tâm lý giao dịch tiền thật sẽ RẤT KHÁC demo!</li>
<li>Áp dụng đúng chiến lược đã thử nghiệm thành công trên demo</li>
<li>Tiếp tục chạy song song tài khoản demo + thật để thử chiến lược mới trên demo trước</li>
<li>Tăng dần số tiền khi đã thoải mái: 10 triệu → 20 triệu → 50 triệu...</li>
</ol>

<h2>5 hạn chế của tài khoản demo bạn cần biết</h2>

<p>Tài khoản demo rất hữu ích nhưng không hoàn hảo. Hiểu rõ những hạn chế này sẽ giúp bạn chuẩn bị tốt hơn:</p>

<ol>
<li><strong>Không có cảm xúc thật</strong> — Khi dùng tiền ảo, bạn không sợ mất nên quyết định rất khác so với tiền thật. Lỗ 50 triệu tiền ảo = "thôi kệ". Lỗ 5 triệu tiền thật = hoảng loạn bán tháo. Đây là khác biệt lớn nhất.</li>
<li><strong>Không phản ánh thanh khoản thật</strong> — Lệnh demo luôn khớp ở giá mong muốn, nhưng thực tế cổ phiếu thanh khoản thấp có thể không khớp được, hoặc khớp ở giá chênh lệch.</li>
<li><strong>Tạo tự tin thái quá (overconfidence)</strong> — Lãi 30% trên demo có thể khiến bạn tự tin quá mức → đổ tiền lớn vào thật mà không quản lý rủi ro → thua nặng.</li>
<li><strong>Không tính phí giao dịch thật</strong> — Demo thường không tính phí môi giới (0.15-0.35%), phí thuế (0.1%). Lợi nhuận thực tế sẽ thấp hơn demo khoảng 0.5% mỗi giao dịch.</li>
<li><strong>Thời gian sử dụng có hạn</strong> — Một số CTCK giới hạn tài khoản demo 30-90 ngày. Sau đó bạn cần đăng ký lại hoặc chuyển sang tài khoản thật.</li>
</ol>

<figure class="my-8"><img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=800&h=450&fit=crop&q=80" alt="Học tập và nghiên cứu về đầu tư chứng khoán qua sách và tài liệu" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">Kết hợp luyện tập trên demo với đọc sách, tham gia cộng đồng để nâng cao kiến thức</figcaption></figure>

<h2>Tips luyện tập trên demo hiệu quả nhất</h2>

<ul>
<li><strong>Giao dịch bằng tâm lý tiền thật</strong> — Hãy tưởng tượng đó là tiền thật của bạn. Nếu lỗ 10%, hãy tự hỏi "mình có chịu được không nếu đây là 5 triệu đồng thật?"</li>
<li><strong>Ghi nhật ký mọi giao dịch</strong> — Mua gì, tại sao, giá nào, stop-loss ở đâu, kết quả ra sao. Sau 1 tháng xem lại để rút kinh nghiệm.</li>
<li><strong>Đặt mục tiêu cụ thể</strong> — Không phải "lãi càng nhiều càng tốt" mà là "giữ drawdown dưới 10%" hoặc "win rate trên 60%".</li>
<li><strong>Học song song</strong> — Trong khi demo, hãy đọc thêm về <a href="/blog/chung-khoan/phan-tich-ky-thuat-chung-khoan-cho-nguoi-moi-2026">phân tích kỹ thuật</a>, <a href="/blog/chung-khoan/cach-doc-bao-cao-tai-chinh-doanh-nghiep">báo cáo tài chính</a>, và <a href="/blog/kinh-nghiem/tam-ly-giao-dich-7-sai-lam-cam-xuc">tâm lý giao dịch</a>.</li>
<li><strong>Không quá 3 tháng demo</strong> — Demo quá lâu sẽ tạo thói quen xấu (không sợ rủi ro). 1-3 tháng là đủ để chuyển sang tiền thật.</li>
</ul>

<h2>Câu hỏi thường gặp</h2>

<h3>Tài khoản demo có mất phí không?</h3>
<p><strong>Hoàn toàn miễn phí.</strong> Tất cả các CTCK và nền tảng cung cấp tài khoản demo đều không thu phí. Bạn chỉ cần đăng ký bằng email/SĐT.</p>

<h3>Demo bao lâu thì nên chuyển sang tiền thật?</h3>
<p>Trung bình <strong>1-3 tháng</strong> là đủ. Nếu sau 1 tháng bạn đã thoải mái với giao diện và có chiến lược rõ ràng, có thể chuyển sớm hơn. Bắt đầu tiền thật với số nhỏ (5-10 triệu).</p>

<h3>Lãi trên demo có nghĩa là sẽ lãi tiền thật?</h3>
<p><strong>Không nhất thiết.</strong> Yếu tố tâm lý khi dùng tiền thật rất khác. Nhiều người lãi 30% trên demo nhưng lỗ 10% khi dùng tiền thật vì ra quyết định bị chi phối bởi cảm xúc sợ hãi và tham lam.</p>

<h3>Có nên dùng nhiều tài khoản demo cùng lúc?</h3>
<p>Có thể, nhưng nên <strong>tập trung vào 1 nền tảng chính</strong> (khuyến nghị SSI iBoard) để thành thạo trước. Sau đó thử thêm platform khác để so sánh.</p>

<h2>Kết luận</h2>

<p>Tài khoản demo là <strong>"phòng tập gym" cho nhà đầu tư</strong>. Không ai chạy marathon mà không tập trước, và không ai nên đầu tư tiền thật mà chưa luyện tập trên demo.</p>

<p>Hãy dành 1-3 tháng trên demo để:<p>
<ul>
<li>Làm quen giao diện và cách đặt lệnh</li>
<li>Thử nghiệm và tìm ra chiến lược phù hợp</li>
<li>Xây dựng kỷ luật giao dịch (stop-loss, nhật ký...)</li>
<li>Chuẩn bị tâm lý cho giao dịch tiền thật</li>
</ul>

<p>Sẵn sàng bắt đầu? <a href="/blog/chung-khoan/cac-buoc-mo-tai-khoan-chung-khoan-viet-nam-2026">Đăng ký tài khoản chứng khoán tại bất kỳ CTCK nào</a> — tất cả đều cung cấp tài khoản demo miễn phí!</p>`;

const updateData = {
    content: newContent,
    meta_title: 'Tài Khoản Demo Chứng Khoán 2026: Luyện Tập Giao Dịch Miễn Phí Trước Khi Đầu Tư',
    meta_description: 'Hướng dẫn sử dụng tài khoản demo chứng khoán miễn phí 2026. So sánh top 5 nền tảng SSI, VNDirect, VPS. Lộ trình 3 giai đoạn từ demo đến giao dịch tiền thật an toàn.',
    reading_time: '12 phút',
    excerpt: 'Hướng dẫn sử dụng tài khoản demo chứng khoán miễn phí. So sánh SSI, VNDirect, VPS và lộ trình 3 giai đoạn luyện tập trước khi đầu tư tiền thật.',
    tags: ['tài khoản demo', 'paper trading', 'luyện tập giao dịch', 'người mới', 'chứng khoán', 'SSI iBoard', 'VNDirect'],
};

const { error } = await s.from('posts').update(updateData).eq('id', POST_ID);

if (error) {
    console.log('❌ Error:', error.message);
} else {
    const wc = newContent.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
    const imgs = (newContent.match(/<img/gi) || []).length;
    const h2s = (newContent.match(/<h2>/gi) || []).length;
    console.log('✅ BÀI #3 ĐÃ CẬP NHẬT!\n');
    console.log(`Words: 485 → ${wc}`);
    console.log(`H2: 5 → ${h2s}`);
    console.log(`Images: 2 (cuối) → ${imgs} (trong bài)`);
    console.log(`Meta Title: ✅ Đã thêm`);
    console.log(`Meta Desc: ✅ Đã thêm`);
    console.log(`FAQ: ✅ 4 câu hỏi`);
}
