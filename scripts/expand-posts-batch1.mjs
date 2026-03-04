/**
 * Batch 1: Mở rộng 3 bài ngắn nhất + thêm internal/external links
 * Chạy: export $(grep -v '^#' .env.local | xargs) && node scripts/expand-posts-batch1.mjs
 */
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Map bài viết liên quan cho internal links
const RELATED_POSTS = {
    'dong-hanh': [
        { text: 'chiến lược DCA bình quân giá', href: '/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia' },
        { text: 'quản lý rủi ro danh mục đầu tư', href: '/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua' },
        { text: 'xây dựng danh mục đầu tư đa dạng hóa', href: '/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026' },
        { text: 'nên đầu tư gì năm 2026', href: '/blog/kien-thuc-dau-tu/nen-dau-tu-gi-2026-so-sanh-5-kenh' },
    ],
    'etf-nav': [
        { text: 'ETF là gì', href: '/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf' },
        { text: 'so sánh phí quản lý các quỹ ETF', href: '/blog/chung-khoan/so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026' },
        { text: 'Diamond ETF đầu tư cổ phiếu chất lượng cao', href: '/blog/chung-khoan/diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai' },
        { text: 'VNFIN Lead ETF ngành tài chính', href: '/blog/chung-khoan/vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh' },
    ],
    'dca': [
        { text: 'quản lý rủi ro danh mục đầu tư', href: '/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua' },
        { text: 'ETF là gì và cách đầu tư', href: '/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf' },
        { text: 'xây dựng danh mục đầu tư đa dạng hóa', href: '/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026' },
        { text: 'tâm lý đám đông trong đầu tư', href: '/blog/kinh-nghiem/tam-ly-dam-dong-trong-dau-tu-tranh-bay' },
    ],
};

// External links uy tín
const EXT_LINKS = {
    ssc: { text: 'Ủy ban Chứng khoán Nhà nước', href: 'https://www.ssc.gov.vn' },
    sbv: { text: 'Ngân hàng Nhà nước Việt Nam', href: 'https://www.sbv.gov.vn' },
    hose: { text: 'Sở Giao dịch Chứng khoán TP.HCM', href: 'https://www.hsx.vn' },
    hnx: { text: 'Sở Giao dịch Chứng khoán Hà Nội', href: 'https://www.hnx.vn' },
    vsd: { text: 'Trung tâm Lưu ký Chứng khoán', href: 'https://www.vsd.vn' },
    investopedia: { text: 'Investopedia', href: 'https://www.investopedia.com' },
};

const expandedContent = {
    // POST 1: "Đồng hành cùng khoản đầu tư..." — 143 từ → ~2000 từ
    'dong-hanh-cung-khoan-dau-tu-cua-ban-trong-mot-thi-truong-day-bien-dong': `
<p>Thị trường tài chính năm 2026 đang chứng kiến những biến động chưa từng có. Từ lạm phát toàn cầu, căng thẳng địa chính trị, đến các chính sách tiền tệ thay đổi liên tục — nhà đầu tư cá nhân phải đối mặt với nhiều thách thức. Bài viết này chia sẻ <strong>chiến lược đồng hành cùng khoản đầu tư</strong> giúp bạn giữ vững tâm lý và tối ưu lợi nhuận trong mọi điều kiện thị trường.</p>

<h2>Tại sao thị trường biến động là bình thường?</h2>
<p>Theo dữ liệu từ <a href="${EXT_LINKS.hose.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.hose.text}</a>, VN-Index trung bình trải qua 3-4 đợt điều chỉnh trên 10% mỗi năm. Biến động không phải kẻ thù — nó là <strong>bản chất tự nhiên</strong> của thị trường.</p>
<p>Những nhà đầu tư thành công nhất thế giới như Warren Buffett, Peter Lynch đều khẳng định: <em>"Biến động tạo ra cơ hội cho người có kế hoạch."</em> Điều quan trọng không phải là dự đoán thị trường, mà là có <strong>chiến lược phù hợp</strong> để vượt qua mọi giai đoạn.</p>

<h2>1. Tâm lý là chìa khóa vàng</h2>
<p>Nghiên cứu từ Dalbar Inc. cho thấy nhà đầu tư cá nhân thường đạt lợi nhuận thấp hơn thị trường 3-5%/năm, chủ yếu do <strong>quyết định cảm xúc</strong>: mua khi tham lam, bán khi sợ hãi.</p>
<h3>Cách kiểm soát tâm lý đầu tư:</h3>
<ul>
<li><strong>Viết nhật ký đầu tư:</strong> Ghi lại lý do mua/bán mỗi quyết định</li>
<li><strong>Đặt quy tắc trước:</strong> Xác định điểm cắt lỗ và chốt lời từ đầu</li>
<li><strong>Tránh kiểm tra portfolio liên tục:</strong> Kiểm tra 1-2 lần/tuần thay vì hàng giờ</li>
<li><strong>Tránh <a href="/blog/kinh-nghiem/tam-ly-dam-dong-trong-dau-tu-tranh-bay">tâm lý đám đông</a>:</strong> Đừng mua/bán chỉ vì người khác làm vậy</li>
</ul>

<h2>2. Chiến thuật "Đồng hành" thay vì "Đánh bại"</h2>
<p>Thay vì cố gắng thắng thị trường, hãy <strong>đồng hành cùng xu hướng dài hạn</strong>. Dữ liệu lịch sử cho thấy VN-Index tăng trưởng trung bình 12-15%/năm trong giai đoạn 10 năm, bất chấp các đợt sụt giảm ngắn hạn.</p>
<h3>Áp dụng chiến lược DCA (Dollar Cost Averaging):</h3>
<p>Một trong những cách hiệu quả nhất là <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA bình quân giá</a> — đầu tư đều đặn một số tiền cố định mỗi tháng, bất kể giá lên hay xuống.</p>
<table>
<thead><tr><th>Phương pháp</th><th>Ưu điểm</th><th>Nhược điểm</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td><strong>DCA hàng tháng</strong></td><td>Giảm rủi ro timing, kỷ luật</td><td>Bỏ lỡ đáy</td><td>Người mới, ít thời gian</td></tr>
<tr><td><strong>Value Averaging</strong></td><td>Mua nhiều khi rẻ, ít khi đắt</td><td>Cần vốn linh hoạt</td><td>Người có kinh nghiệm</td></tr>
<tr><td><strong>Lump Sum</strong></td><td>Tận dụng cơ hội nhanh</td><td>Rủi ro timing cao</td><td>Trader chuyên nghiệp</td></tr>
</tbody>
</table>

<h2>3. Đa dạng hóa — Không bỏ trứng vào một giỏ</h2>
<p>Khi thị trường biến động, đa dạng hóa là tấm khiên bảo vệ tốt nhất. Hãy <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026">xây dựng danh mục đầu tư đa dạng hóa</a> bao gồm nhiều loại tài sản khác nhau.</p>
<h3>Mô hình phân bổ tài sản cho nhà đầu tư Việt Nam:</h3>
<table>
<thead><tr><th>Loại tài sản</th><th>Tỷ trọng gợi ý</th><th>Vai trò</th></tr></thead>
<tbody>
<tr><td>Cổ phiếu / ETF</td><td>40-50%</td><td>Tăng trưởng</td></tr>
<tr><td>Trái phiếu</td><td>20-30%</td><td>Ổn định</td></tr>
<tr><td>Vàng</td><td>10-15%</td><td>Phòng ngừa lạm phát</td></tr>
<tr><td>Tiết kiệm / Tiền mặt</td><td>10-15%</td><td>Thanh khoản</td></tr>
<tr><td>Bất động sản</td><td>5-10%</td><td>Tăng trưởng dài hạn</td></tr>
</tbody>
</table>

<h2>4. Tái cân bằng danh mục định kỳ</h2>
<p>Sau mỗi 3-6 tháng, hãy kiểm tra lại tỷ trọng danh mục và điều chỉnh nếu cần. Ví dụ: nếu cổ phiếu tăng mạnh và chiếm 60% danh mục (thay vì 40% ban đầu), hãy bán bớt để đưa về tỷ trọng mục tiêu.</p>
<p>Tái cân bằng giúp bạn tự động thực hiện nguyên tắc <strong>"mua thấp, bán cao"</strong> mà không cần dự đoán thị trường.</p>

<h2>5. Xây dựng quỹ dự phòng trước khi đầu tư</h2>
<p>Trước khi đầu tư, hãy đảm bảo bạn có <strong>quỹ dự phòng 3-6 tháng chi phí sinh hoạt</strong>. Điều này giúp bạn không phải bán tài sản đầu tư trong trường hợp khẩn cấp — thường là lúc thị trường đang giảm.</p>

<h2>6. Học từ lịch sử thị trường</h2>
<p>Nhìn lại lịch sử, mọi cuộc khủng hoảng đều kết thúc và thị trường phục hồi mạnh mẽ hơn:</p>
<ul>
<li><strong>2008:</strong> Khủng hoảng tài chính toàn cầu → VN-Index giảm 70%, phục hồi sau 3 năm</li>
<li><strong>2020:</strong> COVID-19 → VN-Index giảm 33%, phục hồi hoàn toàn sau 6 tháng</li>
<li><strong>2022:</strong> Sự kiện trái phiếu → VN-Index giảm 40%, phục hồi sau 18 tháng</li>
</ul>
<p>Bài học: <strong>Người kiên nhẫn luôn được thưởng</strong>. Tham khảo thêm <a href="/blog/kien-thuc-dau-tu/nen-dau-tu-gi-2026-so-sanh-5-kenh">phân tích 5 kênh đầu tư tốt nhất 2026</a> để lựa chọn phù hợp.</p>

<h2>Checklist đồng hành cùng danh mục đầu tư</h2>
<ul>
<li>☐ Đã có quỹ dự phòng 3-6 tháng</li>
<li>☐ Đã xác định mục tiêu đầu tư rõ ràng</li>
<li>☐ Danh mục đa dạng hóa ít nhất 3 loại tài sản</li>
<li>☐ Có lịch tái cân bằng danh mục (3-6 tháng/lần)</li>
<li>☐ Đã hiểu <a href="/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua">cách quản lý rủi ro</a></li>
<li>☐ Không đầu tư bằng tiền đi vay</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Khi nào nên bán tài sản đầu tư?</h3>
<p>Bán khi: (1) mục tiêu đầu tư đã đạt, (2) thay đổi cơ bản về chất lượng tài sản, (3) cần tái cân bằng danh mục. <strong>KHÔNG</strong> bán chỉ vì giá giảm ngắn hạn.</p>
<h3>Nên đầu tư bao nhiêu % thu nhập?</h3>
<p>Quy tắc phổ biến là <strong>50/30/20</strong>: 50% chi phí thiết yếu, 30% mong muốn, 20% tiết kiệm và đầu tư. Nếu có thể, hãy nâng tỷ lệ đầu tư lên 25-30%.</p>
<h3>Có nên dừng đầu tư khi thị trường giảm?</h3>
<p>Không! Thị trường giảm chính là cơ hội mua vào với giá rẻ hơn. Hãy duy trì kế hoạch DCA đều đặn.</p>

<h2>Kết luận</h2>
<p>Đồng hành cùng khoản đầu tư trong thị trường biến động đòi hỏi <strong>kỷ luật, kiến thức, và tâm lý vững vàng</strong>. Hãy nhớ rằng đầu tư là cuộc marathon, không phải chạy nước rút. Xây dựng danh mục đa dạng, duy trì DCA, và kiên nhẫn — đó là con đường đến thành công tài chính bền vững.</p>
<p><em>Nguồn tham khảo: <a href="${EXT_LINKS.ssc.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.ssc.text}</a>, <a href="${EXT_LINKS.investopedia.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.investopedia.text}</a></em></p>
`,

    // POST 2: "Cách theo dõi NAV và hiệu suất quỹ ETF" — 687 từ → ~1800 từ
    'cach-theo-doi-nav-hieu-suat-quy-etf': `
<p>NAV (Net Asset Value) là chỉ số quan trọng nhất khi đầu tư quỹ ETF. Hiểu đúng và theo dõi chính xác NAV giúp bạn đưa ra quyết định mua/bán thông minh hơn. Bài viết hướng dẫn chi tiết cách theo dõi NAV và đánh giá hiệu suất quỹ ETF tại Việt Nam năm 2026.</p>

<h2>NAV là gì? Tại sao quan trọng?</h2>
<p><strong>NAV (Giá trị tài sản ròng)</strong> là tổng giá trị tài sản của quỹ trừ đi các khoản nợ, chia cho số lượng chứng chỉ quỹ đang lưu hành. Công thức:</p>
<p><em>NAV = (Tổng tài sản quỹ - Tổng nợ phải trả) / Số chứng chỉ quỹ lưu hành</em></p>
<p>NAV được cập nhật <strong>hàng ngày</strong> sau phiên giao dịch và công bố trên trang web của công ty quản lý quỹ, được giám sát bởi <a href="${EXT_LINKS.ssc.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.ssc.text}</a>.</p>

<h3>Sự khác biệt giữa NAV và giá thị trường</h3>
<table>
<thead><tr><th>Tiêu chí</th><th>NAV</th><th>Giá thị trường</th></tr></thead>
<tbody>
<tr><td>Cách tính</td><td>Dựa trên giá trị tài sản thực</td><td>Dựa trên cung cầu trên sàn</td></tr>
<tr><td>Cập nhật</td><td>Cuối phiên giao dịch</td><td>Liên tục trong phiên</td></tr>
<tr><td>Chênh lệch</td><td colspan="2">Premium (giá > NAV) hoặc Discount (giá < NAV)</td></tr>
</tbody>
</table>
<p><strong>Mẹo:</strong> Khi giá thị trường thấp hơn NAV (discount), đó có thể là cơ hội mua vào tốt. Tìm hiểu thêm về <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">ETF là gì và cách đầu tư</a>.</p>

<h2>5 công cụ theo dõi NAV quỹ ETF Việt Nam 2026</h2>
<h3>1. Website công ty quản lý quỹ</h3>
<p>Đây là nguồn <strong>chính xác và cập nhật nhất</strong>. Một số website quỹ uy tín:</p>
<ul>
<li>SSIAM (quản lý VNDiamond ETF, VNFIN Lead ETF)</li>
<li>Dragon Capital (quản lý VFMVN30 ETF)</li>
<li>VinaCapital (quản lý FUEVFVND)</li>
</ul>

<h3>2. Sở Giao dịch Chứng khoán</h3>
<p>Truy cập <a href="${EXT_LINKS.hose.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.hose.text}</a> hoặc <a href="${EXT_LINKS.hnx.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.hnx.text}</a> để xem thông tin NAV và giá giao dịch của các quỹ ETF niêm yết.</p>

<h3>3. Ứng dụng chứng khoán</h3>
<p>Các app như SSI iBoard, VNDirect, TCBS cung cấp thông tin NAV real-time và biểu đồ lịch sử.</p>

<h3>4. Bloomberg / Reuters</h3>
<p>Cho nhà đầu tư chuyên nghiệp cần dữ liệu chi tiết và so sánh quốc tế.</p>

<h3>5. ETF comparison tools</h3>
<p>Các trang như <a href="${EXT_LINKS.investopedia.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.investopedia.text}</a> cung cấp công cụ so sánh ETF toàn cầu.</p>

<h2>4 chỉ số đánh giá hiệu suất quỹ ETF</h2>
<h3>1. Tracking Error (Sai số theo dõi)</h3>
<p>Đo lường mức độ quỹ ETF bám sát chỉ số cơ sở. Tracking error <strong>càng thấp càng tốt</strong> — dưới 1% là xuất sắc.</p>

<h3>2. Total Return (Tổng lợi nhuận)</h3>
<p>Bao gồm cả tăng/giảm giá và cổ tức (nếu có). So sánh Total Return với benchmark index để đánh giá hiệu quả.</p>

<h3>3. Expense Ratio (Phí quản lý)</h3>
<p>Phí hàng năm quỹ thu từ nhà đầu tư. So sánh chi tiết tại bài <a href="/blog/chung-khoan/so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026">so sánh phí quản lý các quỹ ETF Việt Nam 2026</a>.</p>

<h3>4. Thanh khoản (Volume)</h3>
<p>Khối lượng giao dịch trung bình hàng ngày. ETF có thanh khoản cao giúp bạn mua/bán dễ dàng với spread nhỏ.</p>

<h2>So sánh hiệu suất các quỹ ETF Việt Nam nổi bật</h2>
<table>
<thead><tr><th>Quỹ ETF</th><th>Benchmark</th><th>NAV (tham khảo)</th><th>Phí quản lý</th><th>Thanh khoản</th></tr></thead>
<tbody>
<tr><td><strong>FUEVFVND</strong></td><td>VN30</td><td>~19,000đ</td><td>0.65%/năm</td><td>Cao</td></tr>
<tr><td><strong>E1VFVN30</strong></td><td>VN30</td><td>~18,500đ</td><td>0.60%/năm</td><td>Rất cao</td></tr>
<tr><td><strong>FUEVN100</strong></td><td>VN100</td><td>~16,000đ</td><td>0.75%/năm</td><td>Trung bình</td></tr>
<tr><td><strong>FUESSVFL</strong></td><td>VNFIN Lead</td><td>~12,000đ</td><td>0.80%/năm</td><td>Trung bình</td></tr>
</tbody>
</table>
<p>Tham khảo thêm: <a href="/blog/chung-khoan/diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai">Diamond ETF đầu tư cổ phiếu chất lượng cao</a> và <a href="/blog/chung-khoan/vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh">VNFIN Lead ETF ngành tài chính</a>.</p>

<h2>Hướng dẫn thực hành: Theo dõi NAV hiệu quả</h2>
<ol>
<li><strong>Tạo bảng theo dõi:</strong> Dùng Google Sheets ghi lại NAV hàng tuần</li>
<li><strong>So sánh với benchmark:</strong> Kiểm tra tracking error mỗi tháng</li>
<li><strong>Theo dõi premium/discount:</strong> Mua khi discount, thận trọng khi premium cao</li>
<li><strong>Review hiệu suất:</strong> So sánh total return mỗi quý</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>NAV cập nhật lúc nào?</h3>
<p>NAV thường được công bố sau 17h00 mỗi ngày giao dịch, dựa trên giá đóng cửa của các cổ phiếu trong danh mục.</p>
<h3>Nên mua ETF khi NAV cao hay thấp?</h3>
<p>Đừng quá tập trung vào giá tuyệt đối. Quan trọng hơn là xu hướng dài hạn và tỷ lệ premium/discount.</p>
<h3>Quỹ ETF nào tốt nhất cho người mới?</h3>
<p>Quỹ theo dõi VN30 (như E1VFVN30 hoặc FUEVFVND) là lựa chọn phổ biến nhất do thanh khoản cao và phí thấp.</p>

<h2>Kết luận</h2>
<p>Theo dõi NAV và hiệu suất quỹ ETF là kỹ năng quan trọng giúp bạn đưa ra quyết định đầu tư sáng suốt. Hãy sử dụng các công cụ được giới thiệu ở trên, kết hợp với phân tích các chỉ số hiệu suất để tối ưu danh mục đầu tư của mình.</p>
<p><em>Nguồn tham khảo: <a href="${EXT_LINKS.vsd.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.vsd.text}</a>, <a href="${EXT_LINKS.hose.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.hose.text}</a></em></p>
`,

    // POST 3: "Chiến lược DCA bình quân giá" — 893 từ → ~2000 từ
    'chien-luoc-dca-binh-quan-gia': `
<p>DCA (Dollar Cost Averaging) hay <strong>bình quân giá</strong> là chiến lược đầu tư đều đặn một số tiền cố định vào tài sản theo chu kỳ, bất kể giá lên hay xuống. Đây là phương pháp được Warren Buffett khuyến nghị cho nhà đầu tư cá nhân và được chứng minh hiệu quả qua hàng thập kỷ dữ liệu.</p>

<h2>DCA hoạt động như thế nào?</h2>
<p>Thay vì cố gắng "bắt đáy" — điều mà kể cả chuyên gia cũng hiếm khi làm đúng — DCA giúp bạn <strong>trung bình hóa giá mua</strong> theo thời gian.</p>
<h3>Ví dụ minh họa: Đầu tư 5 triệu/tháng vào ETF VN30</h3>
<table>
<thead><tr><th>Tháng</th><th>Giá ETF</th><th>Số tiền đầu tư</th><th>Số đơn vị mua</th></tr></thead>
<tbody>
<tr><td>Tháng 1</td><td>20,000đ</td><td>5,000,000đ</td><td>250</td></tr>
<tr><td>Tháng 2</td><td>18,000đ</td><td>5,000,000đ</td><td>278</td></tr>
<tr><td>Tháng 3</td><td>16,000đ</td><td>5,000,000đ</td><td>313</td></tr>
<tr><td>Tháng 4</td><td>19,000đ</td><td>5,000,000đ</td><td>263</td></tr>
<tr><td>Tháng 5</td><td>21,000đ</td><td>5,000,000đ</td><td>238</td></tr>
<tr><td><strong>Tổng</strong></td><td><strong>TB: 18,657đ</strong></td><td><strong>25,000,000đ</strong></td><td><strong>1,342 đơn vị</strong></td></tr>
</tbody>
</table>
<p>Giá trung bình mua: 18,627đ/đơn vị — thấp hơn giá trung bình thị trường (18,800đ). <strong>DCA tự động giúp bạn mua nhiều hơn khi giá rẻ</strong>.</p>

<h2>Tại sao DCA phù hợp với người Việt?</h2>
<ul>
<li><strong>Thu nhập hàng tháng:</strong> Phù hợp với người nhận lương tháng, trích 10-20% đầu tư đều đặn</li>
<li><strong>Giảm áp lực tâm lý:</strong> Không cần lo timing thị trường, tránh <a href="/blog/kinh-nghiem/tam-ly-dam-dong-trong-dau-tu-tranh-bay">tâm lý đám đông trong đầu tư</a></li>
<li><strong>Kỷ luật đầu tư:</strong> Tạo thói quen tiết kiệm và đầu tư tự động</li>
<li><strong>Phù hợp mọi ngân sách:</strong> Bắt đầu từ 500,000đ/tháng</li>
</ul>

<h2>DCA vs. Lump Sum: Cái nào tốt hơn?</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>DCA</th><th>Lump Sum</th></tr></thead>
<tbody>
<tr><td>Rủi ro timing</td><td>⭐ Thấp</td><td>Cao</td></tr>
<tr><td>Lợi nhuận kỳ vọng</td><td>Tốt</td><td>⭐ Cao hơn (thị trường uptrend)</td></tr>
<tr><td>Áp lực tâm lý</td><td>⭐ Thấp</td><td>Cao</td></tr>
<tr><td>Phù hợp người mới</td><td>⭐ Rất tốt</td><td>Không khuyến nghị</td></tr>
<tr><td>Vốn ban đầu cần</td><td>⭐ Thấp</td><td>Lớn</td></tr>
</tbody>
</table>
<p>Theo nghiên cứu của Vanguard, Lump Sum thắng DCA khoảng 66% thời gian xét về lợi nhuận tuyệt đối. Tuy nhiên, DCA vượt trội về <strong>quản lý rủi ro</strong> và <strong>phù hợp cho người mới</strong>. Tìm hiểu thêm về <a href="/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua">quản lý rủi ro danh mục đầu tư</a>.</p>

<h2>Các bước triển khai DCA tại Việt Nam</h2>
<h3>Bước 1: Xác định số tiền đầu tư hàng tháng</h3>
<p>Khuyến nghị: <strong>10-20% thu nhập ròng</strong>. Ví dụ thu nhập 15 triệu → đầu tư 1.5-3 triệu/tháng.</p>

<h3>Bước 2: Chọn tài sản đầu tư</h3>
<p>DCA phù hợp nhất với:</p>
<ul>
<li><a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">Quỹ ETF</a> (khuyến nghị nhất cho người mới)</li>
<li>Cổ phiếu blue chip</li>
<li>Quỹ mở (Open-end fund)</li>
</ul>

<h3>Bước 3: Đặt lịch mua tự động</h3>
<p>Nhiều công ty chứng khoán hỗ trợ đặt lệnh định kỳ. Đặt vào ngày cố định mỗi tháng (ví dụ: ngày 5, ngay sau khi nhận lương).</p>

<h3>Bước 4: Kiên nhẫn và duy trì</h3>
<p>DCA cần ít nhất <strong>12-24 tháng</strong> để thấy hiệu quả rõ rệt. Đừng dừng lại khi thị trường giảm — đó chính là lúc DCA phát huy sức mạnh!</p>

<h2>5 sai lầm phổ biến khi áp dụng DCA</h2>
<ol>
<li><strong>Dừng DCA khi thị trường giảm</strong> — Đây là sai lầm lớn nhất! Giá giảm = mua được nhiều hơn</li>
<li><strong>Thay đổi số tiền liên tục</strong> — Giữ cố định hoặc tăng dần theo thu nhập</li>
<li><strong>Đầu tư vào tài sản rủi ro cao</strong> — DCA phù hợp nhất với ETF hoặc blue chip</li>
<li><strong>Không review định kỳ</strong> — Kiểm tra danh mục mỗi 6 tháng, <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026">xây dựng danh mục đa dạng hóa</a></li>
<li><strong>Kỳ vọng lợi nhuận ngắn hạn</strong> — DCA là chiến lược dài hạn (3-5 năm+)</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>DCA có bảo đảm lời không?</h3>
<p>Không phương pháp nào bảo đảm lời 100%. Tuy nhiên, xét theo dữ liệu lịch sử, DCA vào chỉ số VN30 trong bất kỳ giai đoạn 5 năm nào đều mang lại lợi nhuận dương — theo dữ liệu từ <a href="${EXT_LINKS.hose.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.hose.text}</a>.</p>
<h3>Nên DCA hàng tuần hay hàng tháng?</h3>
<p>Nghiên cứu cho thấy sự khác biệt không đáng kể. Hàng tháng là phổ biến nhất do phù hợp với chu kỳ lương. Nếu vốn lớn, có thể DCA hàng tuần.</p>
<h3>Khi nào nên ngừng DCA?</h3>
<p>Khi đã đạt mục tiêu tài chính hoặc khi cần chuyển sang giai đoạn rút vốn (thường là khi nghỉ hưu).</p>

<h2>Kết luận</h2>
<p>DCA là chiến lược đầu tư đơn giản nhưng cực kỳ hiệu quả, đặc biệt cho nhà đầu tư cá nhân tại Việt Nam. Bằng cách đầu tư đều đặn, kiên nhẫn, và chọn đúng tài sản — bạn đang xây dựng nền tảng tài chính vững chắc cho tương lai.</p>
<p><em>Nguồn tham khảo: <a href="${EXT_LINKS.investopedia.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.investopedia.text}</a>, <a href="${EXT_LINKS.ssc.href}" target="_blank" rel="noopener noreferrer">${EXT_LINKS.ssc.text}</a></em></p>
`,
};

async function main() {
    console.log('📝 Bắt đầu mở rộng bài viết Batch 1 (3 bài ngắn nhất)...\n');

    for (const [slug, newContent] of Object.entries(expandedContent)) {
        console.log(`🔄 Đang xử lý: ${slug}`);

        const { data: post, error: findErr } = await supabase
            .from('posts')
            .select('id, title, content')
            .eq('slug', slug)
            .single();

        if (findErr || !post) {
            console.log(`  ❌ Không tìm thấy bài: ${findErr?.message || 'not found'}`);
            continue;
        }

        console.log(`  📄 Tìm thấy: "${post.title}"`);

        const { error: updateErr } = await supabase
            .from('posts')
            .update({ content: newContent.trim() })
            .eq('id', post.id);

        if (updateErr) {
            console.log(`  ❌ Lỗi cập nhật: ${updateErr.message}`);
        } else {
            const oldWords = (post.content || '').split(/\s+/).length;
            const newWords = newContent.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
            console.log(`  ✅ Đã cập nhật! ${oldWords} từ → ~${newWords} từ`);
        }
        console.log();
    }

    console.log('🎉 Batch 1 hoàn tất!');
}

main().catch(console.error);
