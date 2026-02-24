import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Login admin
const { error: authError } = await supabase.auth.signInWithPassword({
    email: 'admin@cachdautu.com',
    password: 'CachDauTu@2026!'
});
if (authError) { console.log('❌ Đăng nhập thất bại:', authError.message); process.exit(1); }
console.log('✅ Đăng nhập admin thành công');

const KIEN_THUC = '31d10229-9735-4f69-a368-08ea7f0550a1';
const CHUNG_KHOAN = '96d5c106-653b-470e-90a7-6875e9a490fd';

const posts = [
    {
        title: "Top 5 Quỹ ETF Tốt Nhất Việt Nam 2026: So Sánh Chi Tiết Phí, Lợi Suất và Cách Mua",
        slug: "top-5-quy-etf-tot-nhat-viet-nam-2026",
        excerpt: "So sánh chi tiết 5 quỹ ETF hàng đầu Việt Nam năm 2026 về phí quản lý, NAV, lợi suất và thanh khoản. Hướng dẫn chọn ETF phù hợp với mục tiêu đầu tư của bạn.",
        category_id: CHUNG_KHOAN,
        tags: ["ETF", "quỹ ETF", "VN30 ETF", "chứng khoán", "đầu tư 2026"],
        reading_time: "12 phút",
        is_published: true,
        featured_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-02-23T13:00:00Z').toISOString(), // 20:00 VN
        content: `<h2>Quỹ ETF là gì và tại sao nên đầu tư ETF tại Việt Nam?</h2>

<p>Quỹ ETF (Exchange Traded Fund) là quỹ đầu tư được niêm yết và giao dịch trên sàn chứng khoán, cho phép nhà đầu tư mua một "rổ cổ phiếu" chỉ với một giao dịch duy nhất. Thay vì phải phân tích từng mã riêng lẻ, bạn chỉ cần mua ETF để sở hữu đồng thời hàng chục, thậm chí hàng trăm cổ phiếu.</p>

<p>Tại Việt Nam, thị trường ETF đã phát triển đáng kể trong năm 2025-2026 với nhiều quỹ mới ra đời, mang lại cho nhà đầu tư nhiều lựa chọn đa dạng hơn bao giờ hết. Với ưu điểm chi phí thấp, đa dạng hóa tự động và thanh khoản cao, ETF ngày càng trở thành lựa chọn hàng đầu cho cả nhà đầu tư mới lẫn chuyên nghiệp.</p>

<h2>Top 5 quỹ ETF tốt nhất Việt Nam năm 2026</h2>

<h3>1. SSIAM VN30 ETF (E1VFVN30)</h3>

<p>VN30 ETF là quỹ ETF lớn nhất và thanh khoản nhất tại Việt Nam, theo dõi chỉ số VN30 gồm 30 cổ phiếu vốn hóa lớn nhất trên sàn HOSE. Đây là lựa chọn đầu tiên cho bất kỳ nhà đầu tư nào muốn bắt đầu với ETF.</p>

<p><strong>Điểm nổi bật:</strong></p>
<ul>
<li>NAV (Giá trị tài sản ròng): Lớn nhất thị trường, trên 10.000 tỷ đồng</li>
<li>Phí quản lý: 0,55%/năm – mức cạnh tranh</li>
<li>Thanh khoản: Hàng triệu chứng chỉ quỹ/phiên</li>
<li>Lợi suất trung bình 3 năm: 12-15%/năm</li>
</ul>

<p><strong>Phù hợp với:</strong> Người mới bắt đầu, nhà đầu tư muốn theo dõi thị trường chung, chiến lược DCA dài hạn.</p>

<h3>2. VNFIN Lead ETF (FUEVFVND)</h3>

<p>VNFIN Lead ETF tập trung vào nhóm cổ phiếu tài chính – ngân hàng, chứng khoán, bảo hiểm – nhóm ngành chiếm tỷ trọng lớn nhất trên thị trường chứng khoán Việt Nam.</p>

<p><strong>Điểm nổi bật:</strong></p>
<ul>
<li>Tập trung ngành tài chính – ngân hàng, ngành dẫn dắt thị trường</li>
<li>Phí quản lý: 0,65%/năm</li>
<li>Biến động cao hơn VN30 ETF nhưng tiềm năng lợi nhuận lớn hơn</li>
<li>Phù hợp khi ngành ngân hàng trong chu kỳ tăng trưởng</li>
</ul>

<p><strong>Phù hợp với:</strong> Nhà đầu tư tin tưởng vào triển vọng ngành tài chính, chấp nhận rủi ro cao hơn để đổi lấy lợi suất tiềm năng.</p>

<h3>3. Diamond ETF (FUEDCMID)</h3>

<p>Diamond ETF theo dõi chỉ số VNDiamond – bao gồm các cổ phiếu có tỷ lệ sở hữu nước ngoài cao, thường là những doanh nghiệp quản trị tốt và minh bạch nhất thị trường.</p>

<p><strong>Điểm nổi bật:</strong></p>
<ul>
<li>Tập trung vào cổ phiếu "chất lượng cao" được khối ngoại ưa chuộng</li>
<li>Phí quản lý: 0,60%/năm</li>
<li>Danh mục bao gồm FPT, MWG, MBB, ACB – các blue-chip hàng đầu</li>
<li>Ít biến động hơn so với VNFIN Lead</li>
</ul>

<p><strong>Phù hợp với:</strong> Nhà đầu tư muốn đầu tư vào cổ phiếu chất lượng, phong cách đầu tư ổn định.</p>

<h3>4. SSIAM VNX50 ETF</h3>

<p>VNX50 ETF theo dõi chỉ số VNX50 – gồm 50 cổ phiếu lớn nhất từ cả hai sàn HOSE và HNX, giúp đa dạng hóa tốt hơn so với VN30.</p>

<p><strong>Điểm nổi bật:</strong></p>
<ul>
<li>Đa dạng hóa rộng hơn VN30 với 50 cổ phiếu từ 2 sàn</li>
<li>Phí quản lý: 0,55%/năm</li>
<li>Bao phủ cả sàn HNX – tiếp cận thêm nhóm ngân hàng lớn</li>
<li>Phù hợp cho chiến lược buy-and-hold dài hạn</li>
</ul>

<p><strong>Phù hợp với:</strong> Nhà đầu tư dài hạn muốn đa dạng hóa tối đa với chi phí thấp.</p>

<h3>5. MAFM VN30 ETF</h3>

<p>MAFM VN30 ETF là sản phẩm mới hơn từ Mirae Asset, cũng theo dõi chỉ số VN30 nhưng với mức phí cạnh tranh hơn nhằm thu hút nhà đầu tư.</p>

<p><strong>Điểm nổi bật:</strong></p>
<ul>
<li>Phí quản lý chỉ 0,45%/năm – thấp nhất thị trường</li>
<li>Quản lý bởi Mirae Asset – công ty quản lý quỹ quốc tế uy tín</li>
<li>Track cùng chỉ số VN30 như E1VFVN30</li>
<li>Thanh khoản đang tăng nhanh</li>
</ul>

<p><strong>Phù hợp với:</strong> Nhà đầu tư nhạy cảm về phí, muốn tiết kiệm chi phí dài hạn.</p>

<h2>Bảng so sánh 5 quỹ ETF hàng đầu Việt Nam 2026</h2>

| Tiêu chí | VN30 ETF | VNFIN Lead | Diamond ETF | VNX50 ETF | MAFM VN30 |
|---|---|---|---|---|---|
| Chỉ số theo dõi | VN30 | VNFIN Lead | VNDiamond | VNX50 | VN30 |
| Số cổ phiếu | 30 | ~20 | ~30 | 50 | 30 |
| Phí quản lý/năm | 0,55% | 0,65% | 0,60% | 0,55% | 0,45% |
| Thanh khoản | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Rủi ro | Trung bình | Cao | Trung bình | Trung bình | Trung bình |
| Phù hợp | Mọi NĐT | Thích ngành TC | Thích blue-chip | Dài hạn | Tiết kiệm phí |

<h2>Cách chọn quỹ ETF phù hợp với bạn</h2>

<p><strong>Nếu bạn là người mới bắt đầu:</strong> Chọn VN30 ETF (E1VFVN30) hoặc MAFM VN30 – đây là lựa chọn an toàn nhất với thanh khoản cao và đa dạng hóa tốt.</p>

<p><strong>Nếu bạn tin tưởng ngành tài chính:</strong> VNFIN Lead ETF sẽ mang lại lợi suất cao hơn trong chu kỳ tăng trưởng của nhóm ngân hàng.</p>

<p><strong>Nếu bạn ưu tiên chất lượng:</strong> Diamond ETF tập trung vào các doanh nghiệp quản trị tốt, được khối ngoại tin tưởng.</p>

<p><strong>Nếu bạn muốn đa dạng hóa tối đa:</strong> VNX50 ETF với 50 cổ phiếu từ 2 sàn là lựa chọn tốt nhất.</p>

<h2>Hướng dẫn mua ETF tại Việt Nam từng bước</h2>

<p><strong>Bước 1:</strong> Mở tài khoản chứng khoán tại bất kỳ công ty chứng khoán nào (VPS, SSI, VNDirect, TCBS, Mirae Asset...)</p>

<p><strong>Bước 2:</strong> Nạp tiền vào tài khoản – tối thiểu chỉ cần khoảng 500.000 - 1.000.000 đồng</p>

<p><strong>Bước 3:</strong> Tìm mã chứng chỉ quỹ ETF trên app hoặc website của công ty chứng khoán (ví dụ: E1VFVN30)</p>

<p><strong>Bước 4:</strong> Đặt lệnh mua giống như mua cổ phiếu thông thường – chọn mã, nhập số lượng, đặt giá</p>

<p><strong>Bước 5:</strong> Áp dụng chiến lược DCA (Dollar Cost Averaging) – mua đều đặn hàng tháng để trung bình giá tốt</p>

<h2>Kết luận</h2>

<p>Đầu tư ETF tại Việt Nam năm 2026 là cách thông minh để tiếp cận thị trường chứng khoán với chi phí thấp và rủi ro được phân tán. Với 5 quỹ ETF hàng đầu được phân tích ở trên, bạn hoàn toàn có thể chọn được sản phẩm phù hợp với mục tiêu và khẩu vị rủi ro của mình. Hãy bắt đầu với số vốn nhỏ, áp dụng DCA và kiên nhẫn – thời gian sẽ là người bạn tốt nhất của nhà đầu tư ETF.</p>`
    },
    {
        title: "YTM Là Gì? Cách Tính Yield to Maturity Trái Phiếu Chính Xác Nhất",
        slug: "ytm-la-gi-cach-tinh-yield-to-maturity",
        excerpt: "YTM (Yield to Maturity) là lợi suất đáo hạn – chỉ số quan trọng nhất khi đánh giá trái phiếu. Bài viết giải thích chi tiết cách tính YTM kèm ví dụ thực tế dễ hiểu.",
        category_id: KIEN_THUC,
        tags: ["YTM", "yield to maturity", "trái phiếu", "lợi suất", "đầu tư"],
        reading_time: "10 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-02-24T03:00:00Z').toISOString(), // 10:00 VN ngày mai
        content: `<h2>YTM là gì? Định nghĩa dễ hiểu nhất</h2>

<p>YTM (Yield to Maturity) hay <strong>lợi suất đáo hạn</strong> là tổng lợi suất mà nhà đầu tư nhận được nếu nắm giữ trái phiếu cho đến ngày đáo hạn. Đây được coi là chỉ số quan trọng nhất để đánh giá mức sinh lời thực sự của một trái phiếu.</p>

<p>Nói đơn giản, YTM trả lời câu hỏi: <em>"Nếu tôi mua trái phiếu này hôm nay và giữ đến khi đáo hạn, mỗi năm tôi sẽ lời bao nhiêu phần trăm?"</em></p>

<p>YTM tính đến tất cả các yếu tố: giá mua hiện tại, các khoản coupon (lãi suất) nhận được trong suốt thời gian nắm giữ, và khoản chênh lệch giữa giá mua với mệnh giá khi đáo hạn.</p>

<h2>Tại sao YTM quan trọng với nhà đầu tư?</h2>

<p>Khi đầu tư trái phiếu, nhiều người chỉ nhìn vào lãi suất coupon (lãi suất ghi trên trái phiếu). Tuy nhiên, đây chỉ là một phần của bức tranh. YTM mới là con số phản ánh đầy đủ lợi suất thực tế vì:</p>

<ul>
<li><strong>Phản ánh giá mua thực tế:</strong> Trái phiếu có thể được giao dịch cao hơn (premium) hoặc thấp hơn (discount) mệnh giá</li>
<li><strong>Tính cả lãi tái đầu tư:</strong> YTM giả định các khoản coupon được tái đầu tư với cùng lãi suất</li>
<li><strong>So sánh công bằng:</strong> Cho phép so sánh các trái phiếu có kỳ hạn, coupon và giá khác nhau trên cùng một thước đo</li>
<li><strong>Ra quyết định chính xác:</strong> Giúp nhà đầu tư xác định trái phiếu nào mang lại lợi suất thực sự tốt nhất</li>
</ul>

<h2>Công thức tính YTM</h2>

<p>Công thức tính YTM chính xác khá phức tạp vì phải giải phương trình bậc cao. Tuy nhiên, có công thức gần đúng dễ sử dụng:</p>

<p><strong>YTM ≈ [C + (F - P) / n] / [(F + P) / 2]</strong></p>

<p>Trong đó:</p>
<ul>
<li><strong>C</strong> = Coupon hàng năm (tiền lãi mỗi năm)</li>
<li><strong>F</strong> = Mệnh giá (Face value) – thường là 100.000 VNĐ hoặc 1.000.000 VNĐ</li>
<li><strong>P</strong> = Giá mua hiện tại (Price)</li>
<li><strong>n</strong> = Số năm còn lại đến ngày đáo hạn</li>
</ul>

<h2>Ví dụ tính YTM thực tế</h2>

<p><strong>Bài toán:</strong> Bạn mua một trái phiếu với các thông số sau:</p>

| Thông số | Giá trị |
|---|---|
| Mệnh giá (F) | 1.000.000 VNĐ |
| Lãi suất coupon | 8%/năm |
| Coupon hàng năm (C) | 80.000 VNĐ |
| Giá mua hiện tại (P) | 950.000 VNĐ |
| Kỳ hạn còn lại (n) | 5 năm |

<p><strong>Áp dụng công thức:</strong></p>
<p>YTM ≈ [80.000 + (1.000.000 - 950.000) / 5] / [(1.000.000 + 950.000) / 2]</p>
<p>YTM ≈ [80.000 + 10.000] / [975.000]</p>
<p>YTM ≈ 90.000 / 975.000</p>
<p><strong>YTM ≈ 9,23%/năm</strong></p>

<p>Kết quả: Mặc dù lãi suất coupon chỉ là 8%, nhưng vì bạn mua trái phiếu với giá thấp hơn mệnh giá (discount), lợi suất thực tế YTM là <strong>9,23%/năm</strong> – cao hơn coupon rate.</p>

<h2>YTM vs Coupon Rate vs Current Yield – Khác nhau chỗ nào?</h2>

| Chỉ số | Công thức | Ý nghĩa |
|---|---|---|
| Coupon Rate | C / F | Lãi suất ghi trên trái phiếu, cố định |
| Current Yield | C / P | Lợi suất dựa trên giá mua hiện tại |
| YTM | Phức tạp (ở trên) | Lợi suất tổng thể nếu giữ đến đáo hạn |

<p><strong>Ví dụ so sánh</strong> (với trái phiếu ở trên):</p>
<ul>
<li>Coupon Rate = 80.000 / 1.000.000 = <strong>8,00%</strong></li>
<li>Current Yield = 80.000 / 950.000 = <strong>8,42%</strong></li>
<li>YTM = <strong>9,23%</strong></li>
</ul>

<p>YTM luôn là con số chính xác nhất vì tính cả khoản lời 50.000 VNĐ khi trái phiếu đáo hạn (bạn mua 950.000, nhận lại 1.000.000).</p>

<h2>Khi nào YTM cao hơn hoặc thấp hơn coupon rate?</h2>

<p><strong>YTM > Coupon Rate:</strong> Khi trái phiếu giao dịch ở giá discount (dưới mệnh giá). Bạn "lời thêm" khoản chênh lệch giá khi đáo hạn.</p>

<p><strong>YTM = Coupon Rate:</strong> Khi trái phiếu giao dịch đúng mệnh giá (par value). Đây là trường hợp lý tưởng.</p>

<p><strong>YTM < Coupon Rate:</strong> Khi trái phiếu giao dịch ở giá premium (trên mệnh giá). Bạn "mất" khoản chênh lệch khi đáo hạn, kéo lợi suất thực xuống.</p>

<h2>Cách sử dụng YTM để đầu tư trái phiếu thông minh</h2>

<p><strong>1. So sánh các trái phiếu cùng kỳ hạn:</strong> Khi phân vân giữa 2 trái phiếu, hãy so YTM – trái phiếu nào YTM cao hơn thì lợi suất tốt hơn (nhưng cũng cần xem xét rủi ro tín dụng).</p>

<p><strong>2. So sánh với lãi suất ngân hàng:</strong> Nếu YTM trái phiếu là 9% trong khi gửi tiết kiệm ngân hàng chỉ 5-6%, trái phiếu hấp dẫn hơn (tuy nhiên rủi ro cũng cao hơn).</p>

<p><strong>3. Đánh giá thời điểm mua:</strong> YTM tăng khi giá trái phiếu giảm. Trong giai đoạn lãi suất tăng, giá trái phiếu giảm → YTM tăng → cơ hội mua tốt.</p>

<p><strong>4. Xem xét rủi ro tín dụng:</strong> YTM cao bất thường có thể là dấu hiệu thị trường đánh giá doanh nghiệp phát hành có rủi ro. Không nên chỉ chạy theo YTM cao mà bỏ qua chất lượng tín dụng.</p>

<h2>Kết luận</h2>

<p>YTM (Yield to Maturity) là công cụ không thể thiếu cho bất kỳ nhà đầu tư trái phiếu nào. Nó giúp bạn nhìn thấy bức tranh lợi suất toàn diện, thay vì chỉ dừng ở lãi suất coupon trên giấy. Khi đánh giá bất kỳ trái phiếu nào – dù là trái phiếu chính phủ hay doanh nghiệp – hãy luôn tính YTM để đưa ra quyết định đầu tư chính xác nhất.</p>`
    },
    {
        title: "Hướng Dẫn Đầu Tư ETF Cho Người Mới 2026: Bắt Đầu Từ 1 Triệu Đồng",
        slug: "huong-dan-dau-tu-etf-cho-nguoi-moi-2026",
        excerpt: "Hướng dẫn chi tiết từng bước đầu tư quỹ ETF tại Việt Nam cho người mới bắt đầu. Chỉ cần từ 1 triệu đồng, bạn đã có thể bắt đầu hành trình đầu tư thông minh.",
        category_id: KIEN_THUC,
        tags: ["ETF", "đầu tư cho người mới", "quỹ ETF", "DCA", "chứng khoán"],
        reading_time: "11 phút",
        is_published: false,
        featured_image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop",
        scheduled_at: new Date('2026-02-24T09:00:00Z').toISOString(), // 16:00 VN ngày mai
        content: `<h2>Tại sao ETF là lựa chọn tốt nhất cho người mới bắt đầu đầu tư?</h2>

<p>Nếu bạn mới bước vào thế giới đầu tư và cảm thấy choáng ngợp với hàng nghìn mã cổ phiếu, hàng trăm phân tích kỹ thuật phức tạp thì ETF chính là giải pháp hoàn hảo dành cho bạn. ETF (Exchange Traded Fund) giúp bạn đầu tư vào toàn bộ thị trường chứng khoán chỉ với một giao dịch duy nhất.</p>

<p>Hãy tưởng tượng thay vì phải chọn 1 món ăn trong nhà hàng 100 món, ETF giống như một bữa buffet – bạn được thưởng thức tất cả mà không cần lo chọn sai. Nếu 1-2 cổ phiếu trong rổ giảm giá, các cổ phiếu khác sẽ bù lại, giúp danh mục của bạn ổn định hơn rất nhiều.</p>

<h3>5 lý do ETF phù hợp cho người mới</h3>

<ul>
<li><strong>Đa dạng hóa tự động:</strong> Mua 1 ETF = sở hữu 30-50 cổ phiếu cùng lúc</li>
<li><strong>Chi phí thấp:</strong> Phí quản lý chỉ 0,45-0,65%/năm, rẻ hơn nhiều so với quỹ mở truyền thống</li>
<li><strong>Không cần kiến thức chuyên sâu:</strong> Không cần phân tích từng cổ phiếu</li>
<li><strong>Thanh khoản cao:</strong> Mua bán dễ dàng trên sàn chứng khoán trong giờ giao dịch</li>
<li><strong>Vốn nhỏ:</strong> Bắt đầu chỉ từ 500.000 - 1.000.000 đồng</li>
</ul>

<h2>Cần bao nhiêu vốn để bắt đầu đầu tư ETF?</h2>

<p>Câu trả lời ngắn gọn: <strong>Chỉ từ 1 triệu đồng!</strong></p>

<p>Giá mỗi chứng chỉ quỹ ETF VN30 hiện dao động khoảng 15.000 - 20.000 VNĐ. Với 1 triệu đồng, bạn có thể mua khoảng 50-60 chứng chỉ quỹ – tương đương sở hữu một phần nhỏ của 30 cổ phiếu lớn nhất Việt Nam.</p>

<p>Mức vốn đề xuất theo mục tiêu:</p>

| Mức vốn | Chiến lược | Kỳ vọng |
|---|---|---|
| 1-5 triệu | Bắt đầu làm quen, DCA hàng tháng | Học cách đầu tư |
| 5-20 triệu | DCA đều đặn, bắt đầu tích lũy | Tăng trưởng 10-15%/năm |
| 20-100 triệu | Phân bổ 2-3 loại ETF | Đa dạng hóa + tăng trưởng |
| Trên 100 triệu | Kết hợp ETF + cổ phiếu riêng lẻ | Tối ưu lợi nhuận |

<h2>Hướng dẫn đầu tư ETF từng bước cho người mới</h2>

<h3>Bước 1: Mở tài khoản chứng khoán (15 phút)</h3>

<p>Chọn một trong các công ty chứng khoán uy tín tại Việt Nam. Hiện nay mở tài khoản hoàn toàn online, chỉ mất 10-15 phút với CCCD/CMND:</p>

<ul>
<li><strong>TCBS:</strong> App đẹp, dễ dùng, phí giao dịch 0%</li>
<li><strong>SSI:</strong> Thương hiệu lâu đời, nghiên cứu mạnh</li>
<li><strong>VPS:</strong> Thanh khoản cao, phí linh hoạt</li>
<li><strong>VNDirect:</strong> Giao diện thân thiện, nhiều tính năng</li>
<li><strong>Mirae Asset:</strong> Công ty quốc tế, chuyên về ETF</li>
</ul>

<h3>Bước 2: Nạp tiền vào tài khoản</h3>

<p>Chuyển khoản từ tài khoản ngân hàng của bạn sang tài khoản chứng khoán. Hầu hết các CTCK hỗ trợ chuyển khoản nhanh 24/7, tiền về trong vài phút.</p>

<h3>Bước 3: Chọn quỹ ETF phù hợp</h3>

<p><strong>Cho người mới hoàn toàn:</strong> Bắt đầu với <strong>E1VFVN30</strong> (VN30 ETF) – quỹ lớn nhất, thanh khoản nhất, đại diện cho 30 cổ phiếu hàng đầu Việt Nam.</p>

<p><strong>Khi đã có kinh nghiệm:</strong> Mở rộng sang VNFIN Lead (ngành tài chính), Diamond ETF (cổ phiếu chất lượng cao).</p>

<h3>Bước 4: Đặt lệnh mua</h3>

<p>Trên app chứng khoán, tìm mã <strong>E1VFVN30</strong> → Nhấn "Mua" → Nhập số lượng (tối thiểu 100 chứng chỉ quỹ) → Chọn giá (nên đặt lệnh MP/ATO cho người mới) → Xác nhận.</p>

<h3>Bước 5: Áp dụng chiến lược DCA</h3>

<p>DCA (Dollar Cost Averaging) là chiến lược mua đều đặn mỗi tháng với số tiền cố định, bất kể thị trường tăng hay giảm. Đây là chiến lược được Warren Buffett khuyên dùng cho nhà đầu tư cá nhân.</p>

<p>Ví dụ: Mỗi tháng bạn dành 2 triệu đồng mua ETF VN30:</p>

| Tháng | Giá ETF | Số lượng mua | Tổng đã đầu tư |
|---|---|---|---|
| Tháng 1 | 18.000 | 111 CCQ | 2.000.000 |
| Tháng 2 | 16.000 | 125 CCQ | 4.000.000 |
| Tháng 3 | 20.000 | 100 CCQ | 6.000.000 |
| Tháng 4 | 17.000 | 117 CCQ | 8.000.000 |

<p>Sau 4 tháng: Bạn sở hữu 453 CCQ, giá trung bình chỉ 17.660 VNĐ/CCQ – thấp hơn nhiều so với giá cao nhất 20.000.</p>

<h2>5 sai lầm thường gặp khi đầu tư ETF</h2>

<h3>Sai lầm 1: Mua bán quá thường xuyên</h3>
<p>ETF là công cụ đầu tư dài hạn. Việc "lướt sóng" ETF không chỉ mất phí giao dịch mà còn làm mất đi lợi thế lãi kép. Hãy kiên nhẫn giữ ít nhất 3-5 năm.</p>

<h3>Sai lầm 2: Bỏ tất cả vốn vào một lần</h3>
<p>Đừng "all-in" toàn bộ số tiền ở một thời điểm. Hãy chia nhỏ và mua đều đặn (DCA) để giảm rủi ro mua đỉnh.</p>

<h3>Sai lầm 3: Hoảng loạn bán khi thị trường giảm</h3>
<p>Thị trường luôn có chu kỳ tăng-giảm. Trong ngắn hạn có thể giảm 10-20%, nhưng dài hạn (5-10 năm), xu hướng chung luôn đi lên. Đây chính là lúc bạn nên mua thêm, không phải bán.</p>

<h3>Sai lầm 4: Không tìm hiểu trước khi mua</h3>
<p>Dù ETF đơn giản hơn cổ phiếu, bạn vẫn nên hiểu ETF theo dõi chỉ số nào, phí bao nhiêu, thanh khoản ra sao trước khi đặt lệnh.</p>

<h3>Sai lầm 5: Kỳ vọng lợi nhuận quá cao</h3>
<p>ETF mang lại lợi suất trung bình 10-15%/năm cho thị trường Việt Nam. Đừng kỳ vọng x2 x3 trong vài tháng – đó là đầu cơ, không phải đầu tư.</p>

<h2>Kế hoạch đầu tư ETF mẫu cho người mới</h2>

| Giai đoạn | Thời gian | Hành động |
|---|---|---|
| Làm quen | Tháng 1-3 | Mua VN30 ETF mỗi tháng 1-2 triệu |
| Tích lũy | Tháng 4-12 | Tăng lên 3-5 triệu/tháng, thêm Diamond ETF |
| Mở rộng | Năm 2+ | Phân bổ 60% VN30 + 20% VNFIN + 20% Diamond |

<h2>Kết luận</h2>

<p>Đầu tư ETF cho người mới không hề phức tạp như bạn nghĩ. Với chỉ 1 triệu đồng và 15 phút mở tài khoản, bạn đã có thể bắt đầu hành trình xây dựng tài sản. Hãy nhớ 3 nguyên tắc vàng: bắt đầu sớm, đầu tư đều đặn (DCA), và kiên nhẫn giữ dài hạn. Thời gian và lãi kép sẽ làm phần còn lại cho bạn!</p>`
    }
];

// Insert posts
for (const post of posts) {
    const { data, error } = await supabase.from('posts').insert({
        ...post,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }).select('id, title, slug, scheduled_at');

    if (error) {
        console.log(`❌ Lỗi: ${post.title}`, error.message);
    } else {
        console.log(`✅ ${data[0].title}`);
        console.log(`   → /blog/${post.category_id === CHUNG_KHOAN ? 'chung-khoan' : 'kien-thuc-dau-tu'}/${data[0].slug}`);
        console.log(`   → Scheduled: ${new Date(data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
    }
}

console.log('\n🎉 Hoàn tất tạo 3 bài viết SEO!');
