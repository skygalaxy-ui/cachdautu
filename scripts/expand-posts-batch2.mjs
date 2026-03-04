/**
 * Batch 2: Mở rộng 4 bài ngắn còn lại + internal/external links
 * Chạy: export $(grep -v '^#' .env.local | xargs) && node scripts/expand-posts-batch2.mjs
 */
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Đăng nhập admin để có quyền ghi
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const EXT = {
    ssc: '<a href="https://www.ssc.gov.vn" target="_blank" rel="noopener noreferrer">Ủy ban Chứng khoán Nhà nước</a>',
    hose: '<a href="https://www.hsx.vn" target="_blank" rel="noopener noreferrer">Sở GDCK TP.HCM (HOSE)</a>',
    sbv: '<a href="https://www.sbv.gov.vn" target="_blank" rel="noopener noreferrer">Ngân hàng Nhà nước</a>',
    inv: '<a href="https://www.investopedia.com" target="_blank" rel="noopener noreferrer">Investopedia</a>',
    mof: '<a href="https://www.mof.gov.vn" target="_blank" rel="noopener noreferrer">Bộ Tài chính</a>',
};

const expandedContent = {

    // POST 4: "ETF là gì?" — 904 từ → ~2000 từ
    'etf-la-gi-huong-dan-dau-tu-quy-etf': `
<p>ETF (Exchange Traded Fund) hay <strong>quỹ hoán đổi danh mục</strong> là loại quỹ đầu tư được niêm yết và giao dịch trên sàn chứng khoán giống như cổ phiếu thông thường. ETF giúp nhà đầu tư cá nhân tiếp cận cả thị trường chỉ với một giao dịch duy nhất — đây là công cụ được Warren Buffett khuyến nghị nhất cho người mới bắt đầu.</p>

<h2>ETF hoạt động như thế nào?</h2>
<p>Quỹ ETF tập hợp tiền từ nhiều nhà đầu tư để mua một rổ cổ phiếu theo chỉ số benchmark (VN30, VN100, VNFIN Lead...). Khi bạn mua 1 đơn vị ETF, bạn đang gián tiếp sở hữu <strong>tất cả cổ phiếu trong rổ</strong>.</p>
<h3>Ví dụ cụ thể:</h3>
<p>Mua 1 lot E1VFVN30 ETF (~18,000đ/đơn vị) = sở hữu gián tiếp 30 cổ phiếu lớn nhất sàn HOSE (VCB, FPT, VHM, HPG...). Thay vì mua riêng 30 cổ phiếu với số vốn hàng trăm triệu, bạn chỉ cần vài triệu đồng.</p>

<h2>Các loại ETF tại Việt Nam 2026</h2>
<table>
<thead><tr><th>Loại ETF</th><th>Quỹ tiêu biểu</th><th>Benchmark</th><th>Đặc điểm</th></tr></thead>
<tbody>
<tr><td><strong>ETF chỉ số rộng</strong></td><td>E1VFVN30, FUEVFVND</td><td>VN30</td><td>30 cổ phiếu lớn nhất, thanh khoản cao</td></tr>
<tr><td><strong>ETF ngành</strong></td><td>FUESSVFL</td><td>VNFIN Lead</td><td>Tập trung ngành tài chính, ngân hàng</td></tr>
<tr><td><strong>ETF chất lượng</strong></td><td>FUESSV50</td><td>VNDiamond</td><td>Cổ phiếu chất lượng cao, room ngoại hết</td></tr>
<tr><td><strong>ETF đa dạng</strong></td><td>FUEVN100</td><td>VN100</td><td>100 cổ phiếu, đa dạng hóa tốt hơn</td></tr>
</tbody>
</table>
<p>Tham khảo chi tiết: <a href="/blog/chung-khoan/diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai">Diamond ETF đầu tư cổ phiếu chất lượng cao</a> và <a href="/blog/chung-khoan/vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh">VNFIN Lead ETF ngành tài chính</a>.</p>

<h2>5 lý do nên đầu tư ETF cho người mới</h2>
<h3>1. Đa dạng hóa tự động</h3>
<p>Chỉ với 1 giao dịch, bạn sở hữu hàng chục cổ phiếu — giảm rủi ro đáng kể so với mua từng cổ phiếu riêng lẻ. Tìm hiểu thêm về <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026">cách xây dựng danh mục đa dạng hóa</a>.</p>
<h3>2. Chi phí thấp</h3>
<p>Phí quản lý ETF tại Việt Nam chỉ từ 0.5-0.8%/năm — thấp hơn nhiều so với quỹ mở (1-2%/năm). So sánh chi tiết tại bài <a href="/blog/chung-khoan/so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026">so sánh phí quản lý các quỹ ETF 2026</a>.</p>
<h3>3. Thanh khoản cao</h3>
<p>ETF giao dịch liên tục trên sàn chứng khoán, mua/bán dễ dàng như cổ phiếu. Khác với quỹ mở, bạn không cần chờ T+2 để biết giá.</p>
<h3>4. Minh bạch</h3>
<p>Danh mục đầu tư ETF được công bố công khai hàng ngày. Bạn luôn biết mình đang đầu tư vào đâu, được giám sát bởi ${EXT.ssc}.</p>
<h3>5. Phù hợp chiến lược DCA</h3>
<p>ETF là tài sản lý tưởng cho <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA bình quân giá</a> — đầu tư đều đặn mỗi tháng mà không cần chọn cổ phiếu.</p>

<h2>Hướng dẫn mua ETF từng bước</h2>
<ol>
<li><strong>Mở tài khoản chứng khoán:</strong> Đăng ký tại CTCK uy tín (SSI, VNDirect, TCBS, HSC)</li>
<li><strong>Nạp tiền vào tài khoản:</strong> Chuyển khoản từ ngân hàng liên kết</li>
<li><strong>Tìm mã ETF:</strong> Gõ mã như E1VFVN30, FUEVFVND trên app giao dịch</li>
<li><strong>Đặt lệnh mua:</strong> Chọn "Mua" → nhập số lượng → xác nhận</li>
<li><strong>Theo dõi và giữ dài hạn:</strong> Kiểm tra <a href="/blog/kien-thuc-dau-tu/cach-theo-doi-nav-hieu-suat-quy-etf">NAV và hiệu suất</a> định kỳ</li>
</ol>

<h2>So sánh ETF vs Cổ phiếu vs Quỹ mở</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>ETF</th><th>Cổ phiếu</th><th>Quỹ mở</th></tr></thead>
<tbody>
<tr><td>Đa dạng hóa</td><td>⭐ Tự động</td><td>Phải tự chọn</td><td>⭐ Tự động</td></tr>
<tr><td>Phí</td><td>⭐ Thấp (0.5-0.8%)</td><td>Phí GD</td><td>Cao (1-2%)</td></tr>
<tr><td>Thanh khoản</td><td>⭐ Cao, real-time</td><td>⭐ Cao</td><td>T+2</td></tr>
<tr><td>Kiến thức cần</td><td>⭐ Thấp</td><td>Cao</td><td>Thấp</td></tr>
<tr><td>Vốn tối thiểu</td><td>~2 triệu</td><td>~5-10 triệu</td><td>~100,000đ</td></tr>
</tbody>
</table>

<h2>Rủi ro khi đầu tư ETF</h2>
<ul>
<li><strong>Rủi ro thị trường:</strong> ETF theo chỉ số, nên khi thị trường giảm, ETF cũng giảm</li>
<li><strong>Tracking error:</strong> ETF không luôn bám sát 100% benchmark</li>
<li><strong>Rủi ro thanh khoản:</strong> Một số ETF ít giao dịch có thể khó mua/bán</li>
</ul>
<p>Tìm hiểu cách giảm thiểu rủi ro tại bài <a href="/blog/kien-thuc-dau-tu/quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua">quản lý rủi ro danh mục đầu tư</a>.</p>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>ETF có trả cổ tức không?</h3>
<p>Một số quỹ ETF tái đầu tư cổ tức vào danh mục (tăng NAV), một số phân phối cho nhà đầu tư. Kiểm tra chính sách của từng quỹ.</p>
<h3>Mua ETF cần tối thiểu bao nhiêu tiền?</h3>
<p>1 lô ETF = 100 đơn vị. Với giá ~18,000đ/đơn vị, bạn cần khoảng <strong>1.8 triệu đồng</strong> cho 1 lô.</p>
<h3>ETF nào tốt nhất cho người mới 2026?</h3>
<p>E1VFVN30 hoặc FUEVFVND (theo VN30) là lựa chọn phổ biến nhất do thanh khoản cao và phí thấp.</p>

<h2>Kết luận</h2>
<p>ETF là công cụ đầu tư lý tưởng cho người mới bắt đầu: <strong>chi phí thấp, đa dạng hóa tự động, và dễ tiếp cận</strong>. Kết hợp ETF với chiến lược DCA, bạn có thể xây dựng danh mục đầu tư vững chắc mà không cần kiến thức chuyên sâu về phân tích cổ phiếu.</p>
<p><em>Thông tin tham khảo: ${EXT.ssc}, ${EXT.hose}, ${EXT.inv}</em></p>
`,

    // POST 5: "Mua nhà hay thuê nhà 2026" — 905 từ → ~1800 từ
    'mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet': `
<p>Mua nhà hay thuê nhà — câu hỏi "muôn thuở" của mọi gia đình Việt Nam, đặc biệt trong bối cảnh giá bất động sản 2026 vẫn ở mức cao. Bài viết phân tích chi tiết ưu nhược điểm, cung cấp <strong>công cụ tính toán</strong> giúp bạn đưa ra quyết định phù hợp nhất với hoàn cảnh tài chính.</p>

<h2>Bức tranh thị trường BĐS 2026</h2>
<p>Theo dữ liệu từ ${EXT.mof}, giá nhà tại TP.HCM và Hà Nội tăng trung bình 8-12%/năm giai đoạn 2020-2026. Mức giá trung bình căn hộ tại TP.HCM là <strong>55-70 triệu/m²</strong>, Hà Nội là <strong>45-60 triệu/m²</strong>.</p>
<p>Với mức lương trung bình 15-25 triệu/tháng, một người trẻ cần <strong>15-20 năm tiết kiệm</strong> để mua được căn hộ 2 phòng ngủ. Điều này khiến câu hỏi "mua hay thuê" trở nên quan trọng hơn bao giờ hết.</p>

<h2>So sánh chi phí: Mua nhà vs Thuê nhà</h2>
<h3>Kịch bản: Căn hộ 2PN, 65m² tại TP.HCM</h3>
<table>
<thead><tr><th>Hạng mục</th><th>Mua nhà (vay 70%)</th><th>Thuê nhà</th></tr></thead>
<tbody>
<tr><td>Giá / Tiền thuê</td><td>3.5 tỷ</td><td>10 triệu/tháng</td></tr>
<tr><td>Trả trước</td><td>1.05 tỷ (30%)</td><td>20 triệu (cọc 2 tháng)</td></tr>
<tr><td>Chi phí hàng tháng</td><td>~28 triệu (gốc + lãi 20 năm)</td><td>10 triệu</td></tr>
<tr><td>Phí quản lý</td><td>1-2 triệu/tháng</td><td>Đã bao gồm</td></tr>
<tr><td>Sửa chữa/bảo trì</td><td>Tự chịu</td><td>Chủ nhà chịu</td></tr>
<tr><td>Tổng 20 năm</td><td>~7.8 tỷ (gồm lãi)</td><td>~2.4 tỷ (chưa tính tăng giá thuê)</td></tr>
<tr><td>Tài sản còn lại sau 20 năm</td><td>Căn hộ (~5-7 tỷ nếu tăng giá)</td><td>0đ</td></tr>
</tbody>
</table>

<h2>Khi nào NÊN mua nhà?</h2>
<ul>
<li>✅ Có tài chính ổn định, thu nhập trên 40 triệu/tháng</li>
<li>✅ Đã tích lũy được 30-40% giá trị nhà</li>
<li>✅ Kế hoạch ở lâu dài tại một thành phố (5 năm+)</li>
<li>✅ Lãi suất vay thấp (dưới 10%/năm)</li>
<li>✅ Giá thuê chiếm trên 5% giá nhà/năm (quy tắc 5%)</li>
</ul>

<h2>Khi nào NÊN thuê nhà?</h2>
<ul>
<li>✅ Đang trong giai đoạn đầu sự nghiệp, cần linh hoạt</li>
<li>✅ Muốn dùng tiền dư để <a href="/blog/kien-thuc-dau-tu/nen-dau-tu-gi-2026-so-sanh-5-kenh">đầu tư vào các kênh sinh lời cao hơn</a></li>
<li>✅ Giá nhà quá cao so với thu nhập</li>
<li>✅ Chưa xác định nơi ở lâu dài</li>
<li>✅ Không muốn gánh nợ vay dài hạn</li>
</ul>

<h2>Quy tắc 5% — Công cụ quyết định</h2>
<p>Đây là quy tắc đơn giản giúp bạn so sánh: <strong>Tổng chi phí sở hữu hàng năm ≈ 5% giá trị nhà</strong> (gồm lãi vay 3% + thuế/bảo trì 1% + chi phí cơ hội 1%).</p>
<p>Ví dụ: Nhà 3.5 tỷ → chi phí sở hữu ≈ 175 triệu/năm ≈ 14.6 triệu/tháng. Nếu thuê tương đương chỉ 10 triệu/tháng → <strong>thuê có lợi hơn</strong>. Tiền dư 4.6 triệu/tháng có thể <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">áp dụng DCA đầu tư ETF</a>.</p>

<h2>Chiến lược "Thuê nhà + Đầu tư"</h2>
<p>Một chiến lược ngày càng phổ biến: thuê nhà ở giá hợp lý, dùng phần chênh lệch để đầu tư:</p>
<table>
<thead><tr><th>Năm</th><th>Tiết kiệm/tháng (chênh lệch)</th><th>Đầu tư ETF (12%/năm)</th><th>Giá trị tích lũy</th></tr></thead>
<tbody>
<tr><td>Năm 5</td><td>5 triệu</td><td>DCA hàng tháng</td><td>~410 triệu</td></tr>
<tr><td>Năm 10</td><td>5 triệu</td><td>DCA hàng tháng</td><td>~1.15 tỷ</td></tr>
<tr><td>Năm 15</td><td>5 triệu</td><td>DCA hàng tháng</td><td>~2.5 tỷ</td></tr>
<tr><td>Năm 20</td><td>5 triệu</td><td>DCA hàng tháng</td><td>~5 tỷ</td></tr>
</tbody>
</table>
<p>Tìm hiểu thêm về <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026">xây dựng danh mục đầu tư đa dạng hóa</a> để tối ưu lợi nhuận.</p>

<h2>Lưu ý quan trọng khi mua nhà 2026</h2>
<ol>
<li><strong>Kiểm tra pháp lý kỹ:</strong> Sổ hồng/sổ đỏ, quy hoạch, giấy phép xây dựng</li>
<li><strong>Không vay quá 50% thu nhập:</strong> Trả nợ hàng tháng tối đa 40-50% lương</li>
<li><strong>Dự phòng 6 tháng trả góp:</strong> Phòng trường hợp mất việc hoặc giảm thu nhập</li>
<li><strong>Tính thêm chi phí phát sinh:</strong> Thuế, phí công chứng, nội thất (thêm 10-15% giá nhà)</li>
<li><strong>Cảnh giác lừa đảo:</strong> Đọc bài <a href="/blog/kien-thuc-dau-tu/7-dau-hieu-nhan-biet-san-dau-tu-lua-dao">7 dấu hiệu nhận biết sàn đầu tư lừa đảo</a></li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Bao nhiêu tuổi nên mua nhà?</h3>
<p>Không có tuổi "chuẩn" — mua khi tài chính cho phép. Thường là 28-35 tuổi khi thu nhập ổn định và đã tích lũy đủ tiền trả trước.</p>
<h3>Nên vay ngân hàng bao nhiêu phần trăm?</h3>
<p>Lý tưởng: vay 50-60% giá trị nhà. Tối đa: 70%. Khoản trả hàng tháng không vượt 40% thu nhập, theo khuyến nghị từ ${EXT.sbv}.</p>
<h3>Giá nhà có giảm trong 2026-2027?</h3>
<p>Dự báo giá nhà sẽ tăng chậm lại nhưng khó giảm đáng kể do nguồn cung hạn chế tại các thành phố lớn.</p>

<h2>Kết luận</h2>
<p>Không có câu trả lời đúng cho tất cả mọi người. Hãy dùng quy tắc 5% và bảng so sánh chi phí ở trên để ra quyết định phù hợp với <strong>hoàn cảnh tài chính cá nhân</strong>. Nếu chưa sẵn sàng mua — thuê nhà và đầu tư thông minh là lựa chọn hoàn toàn hợp lý.</p>
<p><em>Nguồn: ${EXT.mof}, ${EXT.sbv}</em></p>
`,

    // POST 6: "Quản lý rủi ro danh mục đầu tư" — 921 từ → ~1800 từ
    'quan-ly-rui-ro-danh-muc-dau-tu-hieu-qua': `
<p>Quản lý rủi ro là kỹ năng quan trọng nhất của nhà đầu tư — không phải chọn đúng cổ phiếu, mà là <strong>bảo vệ danh mục khi mọi thứ đi sai hướng</strong>. Bài viết hướng dẫn chi tiết các phương pháp quản lý rủi ro được các chuyên gia quỹ đầu tư sử dụng, áp dụng cho nhà đầu tư cá nhân Việt Nam.</p>

<h2>Rủi ro đầu tư là gì?</h2>
<p>Rủi ro đầu tư là khả năng khoản đầu tư của bạn <strong>mất giá trị hoặc không đạt kỳ vọng</strong>. Theo ${EXT.inv}, có 2 loại rủi ro chính:</p>
<table>
<thead><tr><th>Loại rủi ro</th><th>Mô tả</th><th>Ví dụ</th><th>Cách giảm</th></tr></thead>
<tbody>
<tr><td><strong>Rủi ro hệ thống</strong></td><td>Ảnh hưởng toàn thị trường</td><td>Lạm phát, suy thoái, chiến tranh</td><td>Đa dạng hóa tài sản</td></tr>
<tr><td><strong>Rủi ro phi hệ thống</strong></td><td>Ảnh hưởng cá biệt</td><td>Công ty phá sản, scandal</td><td>Đa dạng hóa cổ phiếu</td></tr>
</tbody>
</table>

<h2>7 phương pháp quản lý rủi ro hiệu quả</h2>
<h3>1. Đa dạng hóa danh mục (Diversification)</h3>
<p>Phân bổ vốn vào nhiều loại tài sản khác nhau. Tham khảo chi tiết tại bài <a href="/blog/kien-thuc-dau-tu/xay-dung-danh-muc-dau-tu-da-dang-hoa-2026">xây dựng danh mục đầu tư đa dạng hóa 2026</a>.</p>
<ul>
<li><strong>Đa dạng theo loại tài sản:</strong> Cổ phiếu, trái phiếu, vàng, bất động sản</li>
<li><strong>Đa dạng theo ngành:</strong> Tài chính, công nghệ, tiêu dùng, năng lượng</li>
<li><strong>Đa dạng theo khu vực:</strong> Việt Nam, quốc tế (qua <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">quỹ ETF</a>)</li>
</ul>

<h3>2. Quy tắc phân bổ tài sản theo tuổi</h3>
<p>Công thức phổ biến: <strong>Tỷ lệ cổ phiếu = 110 - Tuổi</strong></p>
<table>
<thead><tr><th>Độ tuổi</th><th>Cổ phiếu/ETF</th><th>Trái phiếu</th><th>Vàng/Tiết kiệm</th></tr></thead>
<tbody>
<tr><td>25 tuổi</td><td>85%</td><td>10%</td><td>5%</td></tr>
<tr><td>35 tuổi</td><td>75%</td><td>15%</td><td>10%</td></tr>
<tr><td>45 tuổi</td><td>65%</td><td>20%</td><td>15%</td></tr>
<tr><td>55 tuổi</td><td>55%</td><td>25%</td><td>20%</td></tr>
</tbody>
</table>

<h3>3. Đặt Stop-Loss (Cắt lỗ)</h3>
<p>Luôn đặt mức cắt lỗ trước khi mua. Quy tắc phổ biến: <strong>cắt lỗ 7-10%</strong> cho mỗi vị thế. Nếu cổ phiếu giảm 10% so với giá mua, bán ngay để bảo toàn vốn.</p>

<h3>4. Position Sizing (Kích thước vị thế)</h3>
<p>Không bao giờ đặt quá <strong>10-15% danh mục</strong> vào một cổ phiếu đơn lẻ. Nếu có 100 triệu đầu tư, mỗi vị thế tối đa 10-15 triệu.</p>

<h3>5. Tái cân bằng danh mục định kỳ</h3>
<p>Mỗi 3-6 tháng, kiểm tra lại tỷ trọng và điều chỉnh. Bán bớt tài sản tăng giá mạnh, mua thêm tài sản giảm giá — tự động thực hiện "mua thấp, bán cao".</p>

<h3>6. Duy trì quỹ dự phòng</h3>
<p>Luôn giữ <strong>quỹ dự phòng 3-6 tháng chi phí sinh hoạt</strong> ngoài khoản đầu tư. Điều này giúp bạn không phải bán tài sản khi thị trường đang giảm.</p>

<h3>7. Áp dụng DCA để giảm rủi ro timing</h3>
<p>Đầu tư đều đặn với <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">chiến lược DCA</a> giúp loại bỏ rủi ro mua đỉnh.</p>

<h2>Các chỉ số đo lường rủi ro</h2>
<table>
<thead><tr><th>Chỉ số</th><th>Ý nghĩa</th><th>Mức tốt</th></tr></thead>
<tbody>
<tr><td><strong>Sharpe Ratio</strong></td><td>Lợi nhuận trên mỗi đơn vị rủi ro</td><td>> 1.0</td></tr>
<tr><td><strong>Max Drawdown</strong></td><td>Mức sụt giảm lớn nhất từ đỉnh</td><td>< 20%</td></tr>
<tr><td><strong>Beta</strong></td><td>Mức biến động so với thị trường</td><td>0.8 - 1.2</td></tr>
<tr><td><strong>Standard Deviation</strong></td><td>Mức biến động lợi nhuận</td><td>Càng thấp càng ổn định</td></tr>
</tbody>
</table>

<h2>5 sai lầm quản lý rủi ro phổ biến</h2>
<ol>
<li><strong>Không cắt lỗ:</strong> "Chờ nó quay lại" — sai lầm lớn nhất khiến nhiều người mất 50%+ vốn</li>
<li><strong>All-in vào 1 cổ phiếu:</strong> Dù tự tin đến đâu, không nên đặt quá 15% vào 1 vị thế</li>
<li><strong>Bỏ qua tương quan:</strong> Mua 5 cổ phiếu ngân hàng ≠ đa dạng hóa — chúng tương quan cao</li>
<li><strong>Đòn bẩy quá mức:</strong> Margin trading khuếch đại cả lời lẫn lỗ — tránh nếu chưa có kinh nghiệm</li>
<li><strong>Bị ảnh hưởng bởi <a href="/blog/kinh-nghiem/tam-ly-dam-dong-trong-dau-tu-tranh-bay">tâm lý đám đông</a>:</strong> FOMO mua đỉnh, panic sell đáy</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Nên cắt lỗ ở mức bao nhiêu %?</h3>
<p>Phổ biến: 7-10% cho cổ phiếu, 15-20% cho tài sản biến động cao. Điều quan trọng là <strong>đặt trước</strong> và <strong>tuân thủ kỷ luật</strong>.</p>
<h3>Đa dạng hóa bao nhiêu cổ phiếu là đủ?</h3>
<p>Nghiên cứu cho thấy 15-20 cổ phiếu đủ để giảm 90% rủi ro phi hệ thống. Quá nhiều cổ phiếu (30+) sẽ khó theo dõi.</p>
<h3>Có nên sử dụng margin?</h3>
<p>Chỉ khi bạn đã có 3+ năm kinh nghiệm và tỷ lệ margin không quá 30% danh mục. Người mới tuyệt đối tránh, theo khuyến nghị từ ${EXT.ssc}.</p>

<h2>Kết luận</h2>
<p>Quản lý rủi ro không phải là tránh rủi ro hoàn toàn — mà là <strong>hiểu rủi ro, đo lường, và kiểm soát</strong>. Áp dụng đa dạng hóa, stop-loss, position sizing, và tái cân bằng định kỳ sẽ giúp bạn vượt qua mọi biến động thị trường một cách tự tin.</p>
<p><em>Nguồn tham khảo: ${EXT.ssc}, ${EXT.inv}</em></p>
`,

    // POST 7: "So sánh phí quản lý các quỹ ETF" — 967 từ → ~1800 từ
    'so-sanh-phi-quan-ly-cac-quy-etf-viet-nam-2026': `
<p>Phí quản lý là yếu tố then chốt ảnh hưởng trực tiếp đến lợi nhuận dài hạn khi đầu tư quỹ ETF. Chênh lệch chỉ 0.2%/năm có thể tạo ra <strong>khoảng cách hàng chục triệu đồng</strong> sau 10-20 năm đầu tư. Bài viết so sánh chi tiết phí và hiệu suất các quỹ ETF Việt Nam nổi bật 2026.</p>

<h2>Tại sao phí quản lý quan trọng?</h2>
<p>Phí quản lý (Expense Ratio) được trừ trực tiếp từ NAV quỹ hàng ngày. Bạn không thấy phí bị trừ trực tiếp, nhưng nó ảnh hưởng đến giá trị khoản đầu tư theo thời gian.</p>
<h3>Ví dụ tác động của phí sau 20 năm:</h3>
<table>
<thead><tr><th>Quỹ</th><th>Phí/năm</th><th>Đầu tư 100 triệu, lãi 10%/năm</th><th>Giá trị sau 20 năm</th><th>Chênh lệch</th></tr></thead>
<tbody>
<tr><td>Quỹ A</td><td>0.5%</td><td>Lãi thực: 9.5%</td><td><strong>613 triệu</strong></td><td>—</td></tr>
<tr><td>Quỹ B</td><td>0.8%</td><td>Lãi thực: 9.2%</td><td>577 triệu</td><td>-36 triệu</td></tr>
<tr><td>Quỹ C</td><td>1.5%</td><td>Lãi thực: 8.5%</td><td>509 triệu</td><td><strong>-104 triệu</strong></td></tr>
</tbody>
</table>
<p>Chênh lệch phí 1%/năm → mất <strong>104 triệu</strong> sau 20 năm trên khoản đầu tư ban đầu 100 triệu!</p>

<h2>Bảng so sánh phí ETF Việt Nam 2026</h2>
<table>
<thead><tr><th>Quỹ ETF</th><th>Mã CK</th><th>Benchmark</th><th>Phí quản lý</th><th>Phí lưu ký</th><th>Tổng phí</th><th>Thanh khoản</th></tr></thead>
<tbody>
<tr><td>VFMVN30 ETF</td><td>E1VFVN30</td><td>VN30</td><td>0.50%</td><td>0.10%</td><td><strong>0.60%</strong></td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>VFM VNDiamond</td><td>FUESSV50</td><td>VNDiamond</td><td>0.65%</td><td>0.10%</td><td>0.75%</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>SSIAM VN30</td><td>FUEVFVND</td><td>VN30</td><td>0.55%</td><td>0.10%</td><td>0.65%</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>SSIAM VNFIN Lead</td><td>FUESSVFL</td><td>VNFIN Lead</td><td>0.70%</td><td>0.10%</td><td>0.80%</td><td>⭐⭐⭐</td></tr>
<tr><td>VFM VN100</td><td>FUEVN100</td><td>VN100</td><td>0.65%</td><td>0.10%</td><td>0.75%</td><td>⭐⭐⭐</td></tr>
</tbody>
</table>
<p><em>Nguồn: Tổng hợp từ báo cáo các công ty quản lý quỹ, thông tin từ ${EXT.ssc}</em></p>

<h2>Phân tích chi tiết từng quỹ</h2>
<h3>E1VFVN30 — Quỹ phí thấp nhất</h3>
<p>Với tổng phí chỉ <strong>0.60%/năm</strong>, đây là quỹ ETF có phí thấp nhất Việt Nam. Thanh khoản cực cao (hàng triệu đơn vị/ngày), phù hợp cho mọi nhà đầu tư. Tìm hiểu thêm: <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">ETF là gì và cách đầu tư</a>.</p>

<h3>FUESSV50 (VNDiamond) — Quỹ chất lượng cao</h3>
<p>Tập trung vào cổ phiếu <strong>room ngoại đã hết</strong> — những cổ phiếu được nhà đầu tư ngoại đánh giá cao nhất. Phí cao hơn chút (0.75%) nhưng hiệu suất thường vượt trội. Chi tiết: <a href="/blog/chung-khoan/diamond-etf-co-phieu-chat-luong-cao-khoi-ngoai">Diamond ETF đầu tư cổ phiếu chất lượng cao</a>.</p>

<h3>FUESSVFL (VNFIN Lead) — Quỹ ngành tài chính</h3>
<p>Tập trung vào ngành ngân hàng và tài chính — ngành chiếm tỷ trọng lớn nhất trên sàn HOSE. Phí 0.80% là mức cao nhất trong bảng. Xem chi tiết: <a href="/blog/chung-khoan/vnfin-lead-etf-co-hoi-dau-tu-nganh-tai-chinh">VNFIN Lead ETF cơ hội đầu tư ngành tài chính</a>.</p>

<h2>Ngoài phí quản lý, còn phí nào khác?</h2>
<ul>
<li><strong>Phí giao dịch chứng khoán:</strong> 0.15-0.25% mỗi lệnh mua/bán (tùy CTCK)</li>
<li><strong>Phí lưu ký:</strong> Đã bao gồm trong bảng trên</li>
<li><strong>Thuế:</strong> Hiện tại chưa đánh thuế lãi vốn cho chứng khoán niêm yết (thuế bán 0.1% giá trị giao dịch)</li>
<li><strong>Chênh lệch giá (Spread):</strong> Quỹ thanh khoản thấp có spread rộng hơn → chi phí ẩn</li>
</ul>

<h2>Cách chọn ETF phí thấp nhất phù hợp</h2>
<ol>
<li><strong>Xác định mục tiêu:</strong> Đa dạng hóa rộng → VN30/VN100. Ngành cụ thể → VNFIN Lead</li>
<li><strong>So sánh tổng phí:</strong> Phí quản lý + phí lưu ký + phí giao dịch CTCK</li>
<li><strong>Kiểm tra thanh khoản:</strong> Khối lượng giao dịch trung bình > 500,000 đơn vị/ngày</li>
<li><strong>Theo dõi tracking error:</strong> Sai số so với benchmark càng thấp càng tốt. Cách theo dõi: <a href="/blog/kien-thuc-dau-tu/cach-theo-doi-nav-hieu-suat-quy-etf">hướng dẫn theo dõi NAV và hiệu suất quỹ ETF</a></li>
<li><strong>Kết hợp DCA:</strong> Chọn quỹ phí thấp + <a href="/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia">áp dụng DCA</a> để tối ưu chi phí</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Phí quản lý ETF có thay đổi không?</h3>
<p>Có. Công ty quản lý quỹ có thể điều chỉnh phí theo thời gian. Xu hướng chung là giảm dần khi cạnh tranh tăng.</p>
<h3>ETF phí thấp nhất có phải tốt nhất?</h3>
<p>Không luôn luôn. Phí thấp là yếu tố quan trọng, nhưng cần xét thêm thanh khoản, tracking error, và benchmark phù hợp với mục tiêu đầu tư.</p>
<h3>Nên chọn 1 hay nhiều quỹ ETF?</h3>
<p>1-2 quỹ là đủ cho người mới. Khi vốn lớn hơn (> 200 triệu), có thể kết hợp 2-3 quỹ khác benchmark để tăng đa dạng hóa.</p>

<h2>Kết luận</h2>
<p>Phí quản lý ETF tại Việt Nam dao động từ <strong>0.60% đến 0.80%/năm</strong> — thấp hơn đáng kể so với quỹ mở và dịch vụ quản lý tài sản chuyên nghiệp. Hãy ưu tiên chọn quỹ có phí thấp, thanh khoản cao, và tracking error nhỏ để tối ưu lợi nhuận dài hạn.</p>
<p><em>Nguồn: ${EXT.ssc}, ${EXT.hose}</em></p>
`,
};

async function main() {
    console.log('📝 Bắt đầu mở rộng bài viết Batch 2 (4 bài còn lại)...\n');
    for (const [slug, newContent] of Object.entries(expandedContent)) {
        console.log('🔄 Đang xử lý:', slug);
        const { data: post, error: findErr } = await supabase
            .from('posts').select('id, title, content').eq('slug', slug).single();
        if (findErr || !post) { console.log('  ❌ Không tìm thấy:', findErr?.message); continue; }
        console.log('  📄 Tìm thấy:', post.title);
        const { error: updateErr } = await supabase.from('posts').update({ content: newContent.trim() }).eq('id', post.id);
        if (updateErr) { console.log('  ❌ Lỗi:', updateErr.message); }
        else {
            const oldW = (post.content || '').replace(/<[^>]+>/g, ' ').split(/\s+/).length;
            const newW = newContent.replace(/<[^>]+>/g, ' ').split(/\s+/).length;
            console.log(`  ✅ Đã cập nhật! ~${oldW} từ → ~${newW} từ`);
        }
        console.log();
    }
    console.log('🎉 Batch 2 hoàn tất!');
}
main().catch(console.error);
