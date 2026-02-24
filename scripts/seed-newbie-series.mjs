import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const CK = '96d5c106-653b-470e-90a7-6875e9a490fd';
const KT = '31d10229-9735-4f69-a368-08ea7f0550a1';

// BÀI 10: Margin (1/4)
const r1 = await supabase.from('posts').insert({
    title: "Margin Là Gì? Đòn Bẩy Chứng Khoán – Cơ Hội Hay Bẫy Tài Chính?",
    slug: "margin-la-gi-don-bay-chung-khoan",
    excerpt: "Giải thích margin (ký quỹ) trong chứng khoán: cách hoạt động, lãi suất margin, rủi ro call margin, và khi nào nên/không nên dùng margin.",
    category_id: CK,
    tags: ["margin", "ký quỹ", "đòn bẩy", "call margin", "chứng khoán"],
    reading_time: "9 phút",
    is_published: false,
    featured_image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=630&fit=crop",
    scheduled_at: new Date('2026-04-01T03:00:00Z').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    content: `<p>Margin – cụm từ bạn sẽ nghe rất nhiều khi bước vào thế giới chứng khoán. Nó có thể giúp bạn nhân đôi lợi nhuận, nhưng cũng có thể khiến bạn mất nhiều hơn số vốn ban đầu. Đây là <a href="/blog/kien-thuc-dau-tu/10-thuat-ngu-chung-khoan-co-ban-nha-dau-tu-moi">thuật ngữ chứng khoán</a> quan trọng mà mọi nhà đầu tư cần hiểu rõ trước khi sử dụng.</p>

<h2>Margin là gì?</h2>

<p>Margin (ký quỹ) là việc vay tiền từ công ty chứng khoán để mua thêm cổ phiếu. Ví dụ: bạn có 50 triệu, CTCK cho vay thêm 50 triệu → bạn mua được 100 triệu cổ phiếu. Đây gọi là margin 1:1 (50%). Bạn ký quỹ 50% giá trị danh mục.</p>

<p>Khi cổ phiếu tăng 10%, bạn lãi 10 triệu trên 100 triệu = lãi 20% trên vốn thực 50 triệu. Nghe hấp dẫn, nhưng khi giảm 10%, bạn cũng lỗ 20% thay vì 10%. Và còn phải trả lãi vay margin (thường 10-14%/năm).</p>

<img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=400&fit=crop" alt="Margin chứng khoán" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Cách margin hoạt động – Ví dụ cụ thể</h2>

| Chỉ số | Không margin | Margin 50% |
|---|---|---|
| Vốn thực | 50 triệu | 50 triệu |
| Vay margin | 0 | 50 triệu |
| Tổng đầu tư | 50 triệu | 100 triệu |
| CK tăng 20% | Lãi 10tr (20%) | Lãi 20tr (40%) |
| CK giảm 20% | Lỗ 10tr (20%) | Lỗ 20tr (40%) |
| CK giảm 50% | Lỗ 25tr (50%) | Lỗ 50tr (100% – MẤT TRẮNG) |

<p>Bảng trên cho thấy rõ: margin nhân đôi cả lãi LẪN lỗ. Khi thị trường thuận lợi, margin tuyệt vời. Khi thị trường bất lợi, margin có thể xóa sạch tài khoản.</p>

<h2>Call margin là gì? Kịch bản ác mộng</h2>

<p>Call margin xảy ra khi giá cổ phiếu giảm khiến tỷ lệ ký quỹ xuống dưới mức tối thiểu (thường 40%). CTCK sẽ yêu cầu bạn nộp thêm tiền hoặc bán bớt cổ phiếu trong 1-2 ngày. Nếu không tuân thủ, CTCK sẽ tự động bán (force sell) cổ phiếu của bạn – thường bán vào thời điểm giá tệ nhất.</p>

<p>Đây là lý do nhiều nhà đầu tư dùng margin mất nhiều hơn mong đợi: bị force sell lúc thị trường hoảng loạn, rồi thị trường phục hồi ngay sau đó – nhưng bạn đã bị bán hết rồi.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Rủi ro margin" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Khi nào nên dùng margin?</h2>

<p>Quy tắc: chỉ dùng margin khi bạn đã có ít nhất 2 năm kinh nghiệm đầu tư, hiểu rõ phân tích cơ bản/kỹ thuật, và có nguồn thu nhập ổn định để nộp thêm tiền nếu bị call. Margin tối đa nên dùng: 20-30% vốn, KHÔNG BAO GIỜ margin 100%.</p>

<p>Tuyệt đối KHÔNG dùng margin nếu: bạn là người mới, đang đầu tư bằng tiền sinh hoạt, hoặc không có kế hoạch cắt lỗ. Với người mới có <a href="/blog/kien-thuc-dau-tu/co-10-trieu-nen-dau-tu-gi">10 triệu</a> hay <a href="/blog/kien-thuc-dau-tu/co-50-trieu-nen-dau-tu-gi">50 triệu</a>, hãy đầu tư 100% vốn tự có qua <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">ETF</a> trước.</p>

<h2>So sánh lãi suất margin các CTCK 2026</h2>

| CTCK | Lãi margin/năm | Hạn mức | Ghi chú |
|---|---|---|---|
| SSI | 10-12% | Tùy tài sản | <a href="/blog/chung-khoan/top-app-dau-tu-chung-khoan-tot-nhat-2026">App tốt nhất</a> |
| VPS | 10-13% | Tùy tài sản | Phổ biến |
| TCBS | 11-13% | Tùy tài sản | Tích hợp TCB |
| VNDirect | 10-12% | Tùy tài sản | Phân tích mạnh |
| DNSE | 9-11% | Tùy tài sản | Phí rẻ nhất |

<h2>Kết luận</h2>

<p>Margin là con dao hai lưỡi – nhân đôi lãi nhưng cũng nhân đôi lỗ. Người mới KHÔNG NÊN dùng margin. Thay vào đó, tập trung vào <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">DCA đều đặn</a>, <a href="/blog/tai-chinh-ca-nhan/phan-bo-tai-san-cho-nguoi-moi-quy-tac-60-30-10">phân bổ tài sản</a> hợp lý, và để <a href="/blog/tai-chinh-ca-nhan/lai-kep-la-gi-suc-manh-tang-truong-cap-so-nhan">lãi kép</a> làm việc. <a href="/blog/kinh-nghiem/10-sai-lam-pho-bien-khi-dau-tu-cach-tranh">Sai lầm đắt giá nhất</a> trong chứng khoán thường liên quan đến margin.</p>`
}).select('id, title, scheduled_at');

if (r1.error) console.log('❌ Bài 10:', r1.error.message);
else console.log(`✅ ${r1.data[0].title}\n   → Scheduled: ${new Date(r1.data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);

// BÀI 11: Cổ phiếu nào nên mua (2/4)
const r2 = await supabase.from('posts').insert({
    title: "Cổ Phiếu Nào Nên Mua 2026? Phân Tích 5 Nhóm Ngành Tiềm Năng",
    slug: "co-phieu-nao-nen-mua-2026-phan-tich-nganh",
    excerpt: "Phân tích 5 nhóm ngành tiềm năng nhất 2026: ngân hàng, công nghệ, tiêu dùng, năng lượng, BĐS. Cách chọn cổ phiếu và 3 tiêu chí đánh giá.",
    category_id: CK,
    tags: ["cổ phiếu nên mua", "phân tích ngành", "blue-chip", "cổ phiếu 2026"],
    reading_time: "10 phút",
    is_published: false,
    featured_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop",
    scheduled_at: new Date('2026-04-02T03:00:00Z').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    content: `<p>"Cổ phiếu nào nên mua?" – câu hỏi ai cũng muốn biết nhưng không ai trả lời chính xác được. Bài viết này không "tip" mã cụ thể (vì đó là cách thua lỗ), mà hướng dẫn bạn CÁCH đánh giá và chọn cổ phiếu dựa trên phân tích ngành và tiêu chí cơ bản.</p>

<p>Nếu bạn không muốn tự chọn mã, <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">ETF</a> là giải pháp an toàn hơn – sở hữu cả <a href="/blog/chung-khoan/vn30-gom-nhung-ma-nao-danh-sach-2026">30 mã VN30</a> cùng lúc mà không cần phân tích từng mã.</p>

<h2>5 nhóm ngành tiềm năng 2026</h2>

<h3>1. Ngân hàng – "Xương sống" nền kinh tế</h3>

<p>Ngân hàng chiếm ~40% vốn hóa VN30 và hưởng lợi trực tiếp khi GDP tăng 6-7%. Mã đáng chú ý: VCB (an toàn nhất, ROE 25%+), TCB (tăng trưởng mạnh, dịch vụ số), MBB (bancassurance, quân đội). P/E ngành ngân hàng đang ở mức hợp lý 8-12x.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Cổ phiếu ngân hàng" style="width:100%;border-radius:16px;margin:24px 0" />

<h3>2. Công nghệ – Sóng AI và chuyển đổi số</h3>

<p>FPT là đại diện tiêu biểu nhất – doanh thu từ dịch vụ AI và chuyển đổi số tăng 30-40%/năm. CMG (CMC Group) cũng đáng chú ý. Ngành công nghệ có P/E cao (20-30x) nhưng tăng trưởng lợi nhuận cũng cao tương ứng.</p>

<h3>3. Tiêu dùng & Bán lẻ – Dân số trẻ, thu nhập tăng</h3>

<p>VNM (Vinamilk), MSN (Masan), MWG (Thế Giới Di Động). Ngành hưởng lợi từ 100 triệu dân, tỷ lệ đô thị hóa tăng, và tầng lớp trung lưu mở rộng. Cổ phiếu tiêu dùng phù hợp với chiến lược dài hạn.</p>

<h3>4. Năng lượng & Hạ tầng</h3>

<p>GAS (PV Gas), POW (PV Power), PC1 (Power Construction 1). Nhu cầu điện tăng 8-10%/năm, chính phủ đẩy mạnh đầu tư công. Ngành này hưởng lợi từ cả tăng trưởng kinh tế lẫn xu hướng năng lượng xanh.</p>

<h3>5. Bất động sản – Phục hồi sau đáy</h3>

<p>VHM (Vinhomes), KDH (Khang Điền). Sau giai đoạn khó khăn 2023-2024, BĐS đang phục hồi với pháp lý được tháo gỡ và lãi suất duy trì thấp. Tuy nhiên, chọn lọc kỹ vì không phải mã nào cũng tốt.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Phân tích ngành" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>3 tiêu chí đánh giá cổ phiếu</h2>

<p>Tiêu chí 1: ROE (Return on Equity) trên 15%. ROE đo lường khả năng sinh lời trên vốn chủ sở hữu. ROE > 15% liên tục 3-5 năm = doanh nghiệp chất lượng. Đọc thêm cách <a href="/blog/chung-khoan/cach-doc-bao-cao-tai-chinh-doanh-nghiep">đọc báo cáo tài chính</a> để tự đánh giá.</p>

<p>Tiêu chí 2: P/E hợp lý so với ngành. P/E = Giá / Lợi nhuận mỗi cổ phiếu. P/E 10 nghĩa là bạn trả 10 đồng cho 1 đồng lợi nhuận. So sánh P/E của mã bạn quan tâm với trung bình ngành – nếu thấp hơn đáng kể, có thể đang "rẻ".</p>

<p>Tiêu chí 3: Tăng trưởng lợi nhuận ổn định. Chọn mã tăng trưởng lợi nhuận 15-20%/năm trong 3-5 năm gần nhất. Tránh mã lợi nhuận thất thường hoặc lỗ.</p>

<h2>Bao nhiêu mã nên giữ trong danh mục?</h2>

<p>Với vốn <a href="/blog/kien-thuc-dau-tu/co-50-trieu-nen-dau-tu-gi">50-100 triệu</a>, nên giữ 3-5 mã + ETF. Quá nhiều mã (10+) khó theo dõi, quá ít mã (1-2) rủi ro tập trung. Phân bổ mỗi mã tối đa 20-25% danh mục để tránh phụ thuộc vào một cổ phiếu.</p>

<h2>Lưu ý quan trọng</h2>

<p>Bài viết này là phân tích tham khảo, KHÔNG PHẢI khuyến nghị mua bán. Thị trường thay đổi liên tục, dữ liệu có thể lỗi thời. Luôn tự nghiên cứu trước khi đầu tư. Nếu không tự tin chọn cổ phiếu, <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF</a> là lựa chọn an toàn, đơn giản, và thường thắng 70-80% nhà đầu tư cá nhân về dài hạn.</p>

<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=400&fit=crop" alt="Đầu tư dài hạn" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Không ai biết chắc "cổ phiếu nào nên mua". Nhưng bạn có thể chọn ngành tốt (ngân hàng, công nghệ, tiêu dùng), chọn mã chất lượng (ROE cao, P/E hợp lý, tăng trưởng ổn), và kết hợp với <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">DCA</a> để mua giá trung bình. Tránh dùng <a href="/blog/chung-khoan/margin-la-gi-don-bay-chung-khoan">margin</a> và luôn đa dạng hóa. Hành trình bắt đầu từ <a href="/blog/kien-thuc-dau-tu/bao-nhieu-tien-thi-nen-bat-dau-dau-tu">bước đầu tiên</a>.</p>`
}).select('id, title, scheduled_at');

if (r2.error) console.log('❌ Bài 11:', r2.error.message);
else console.log(`✅ ${r2.data[0].title}\n   → Scheduled: ${new Date(r2.data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);

// BÀI 12: Phái sinh (3/4)
const r3 = await supabase.from('posts').insert({
    title: "Chứng Khoán Phái Sinh Là Gì? Hướng Dẫn Cơ Bản Cho Người Mới",
    slug: "chung-khoan-phai-sinh-la-gi-huong-dan-co-ban",
    excerpt: "Giải thích chứng khoán phái sinh đơn giản: hợp đồng tương lai VN30, lệnh Long/Short, ký quỹ. Khi nào nên và không nên giao dịch phái sinh.",
    category_id: CK,
    tags: ["chứng khoán phái sinh", "hợp đồng tương lai", "futures", "VN30F"],
    reading_time: "9 phút",
    is_published: false,
    featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=630&fit=crop",
    scheduled_at: new Date('2026-04-03T03:00:00Z').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    content: `<p>Chứng khoán phái sinh nghe phức tạp nhưng bản chất khá đơn giản: đó là hợp đồng cho phép bạn đặt cược thị trường tăng HOẶC giảm. Khác với mua cổ phiếu thông thường (chỉ lãi khi giá tăng), phái sinh cho phép lãi cả khi thị trường giảm. Nhưng rủi ro cũng tăng tương ứng.</p>

<h2>Chứng khoán phái sinh là gì?</h2>

<p>Phái sinh (derivatives) là công cụ tài chính có giá trị "phái sinh" từ một tài sản gốc. Tại Việt Nam, sản phẩm phái sinh phổ biến nhất là Hợp Đồng Tương Lai (Futures) trên chỉ số <a href="/blog/chung-khoan/vn30-gom-nhung-ma-nao-danh-sach-2026">VN30</a>.</p>

<p>Khi bạn mua hợp đồng VN30 Futures, bạn cam kết mua/bán chỉ số VN30 tại một ngày trong tương lai với giá đã thỏa thuận. Bạn không thực sự "sở hữu" 30 cổ phiếu – bạn chỉ đặt cược hướng đi của chỉ số.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Chứng khoán phái sinh" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Long vs Short – Đơn giản hóa</h2>

| Lệnh | Ý nghĩa | Lãi khi | Lỗ khi |
|---|---|---|---|
| Long (Mua) | Đặt cược VN30 TĂNG | VN30 tăng | VN30 giảm |
| Short (Bán) | Đặt cược VN30 GIẢM | VN30 giảm | VN30 tăng |

<p>Đây là điểm khác biệt lớn nhất so với mua cổ phiếu: bạn có thể kiếm tiền khi thị trường giảm bằng lệnh Short. Trong đợt crash 2020 hay 2022, nhiều trader phái sinh lãi lớn nhờ Short đúng thời điểm.</p>

<h2>Ký quỹ phái sinh – Đòn bẩy cao</h2>

<p>Để mở 1 hợp đồng VN30 Futures, bạn chỉ cần ký quỹ khoảng 15-20% giá trị hợp đồng. Nếu VN30 ở 1.300 điểm, giá trị 1 hợp đồng = 1.300 × 100.000 = 130 triệu. Bạn chỉ cần ký quỹ ~20-25 triệu để giao dịch hợp đồng 130 triệu – đòn bẩy gần 5 lần.</p>

<p>So với <a href="/blog/chung-khoan/margin-la-gi-don-bay-chung-khoan">margin cổ phiếu</a> chỉ 1:1, phái sinh đòn bẩy 5:1 – rủi ro gấp nhiều lần. VN30 tăng/giảm 2% = bạn lãi/lỗ 10% trên vốn ký quỹ. Một ngày giảm mạnh 5% = lỗ 25% vốn.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Đòn bẩy phái sinh" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Ai nên giao dịch phái sinh?</h2>

<p>Phái sinh KHÔNG dành cho người mới. Đây là công cụ cho nhà đầu tư đã có kinh nghiệm ít nhất 2-3 năm trên thị trường cơ sở (mua bán cổ phiếu/ETF). Yêu cầu: hiểu phân tích kỹ thuật, có kỷ luật cắt lỗ nghiêm ngặt, chấp nhận theo dõi thị trường liên tục.</p>

<p>Nếu bạn mới bắt đầu, hãy tập trung vào <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">ETF</a> và <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">DCA</a> trước. Khi đã có nền tảng vững, hiểu rõ <a href="/blog/kien-thuc-dau-tu/10-thuat-ngu-chung-khoan-co-ban-nha-dau-tu-moi">thuật ngữ chứng khoán</a> và tránh được <a href="/blog/kinh-nghiem/10-sai-lam-pho-bien-khi-dau-tu-cach-tranh">sai lầm phổ biến</a>, mới nên cân nhắc phái sinh.</p>

<h2>Phái sinh dùng để làm gì?</h2>

<p>Mục đích chính là phòng hộ (hedging). Ví dụ: bạn có danh mục cổ phiếu <a href="/blog/kien-thuc-dau-tu/co-100-trieu-nen-dau-tu-gi">100 triệu</a>, lo ngại thị trường giảm ngắn hạn → mở 1 hợp đồng Short VN30F. Nếu thị trường giảm, lỗ cổ phiếu được bù bởi lãi phái sinh.</p>

<p>Mục đích phụ là đầu cơ (speculation) – cố gắng kiếm lợi nhuận từ biến động ngắn hạn. Đây là cách chơi rủi ro cao, không phù hợp với chiến lược dài hạn mà CachDauTu khuyến khích.</p>

<h2>So sánh cổ phiếu vs ETF vs phái sinh</h2>

| Tiêu chí | Cổ phiếu | <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF</a> | Phái sinh |
|---|---|---|---|
| Kiến thức cần | Trung bình | Thấp | Cao |
| Đòn bẩy | 0-1x | 0x | 5x+ |
| Lãi khi giảm? | Không | Không | Có (Short) |
| Rủi ro | TB-Cao | Thấp-TB | Rất cao |
| Phù hợp | Trung cấp | Người mới | Chuyên nghiệp |
| Thời gian | 1-5 giờ/tuần | 30 phút/tháng | Full-time |

<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop" alt="So sánh đầu tư" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Kết luận</h2>

<p>Chứng khoán phái sinh là công cụ mạnh mẽ nhưng nguy hiểm. Biết nó tồn tại là tốt, nhưng KHÔNG CẦN vội vàng tham gia. 95% nhà đầu tư cá nhân có thể đạt mục tiêu tài chính chỉ với <a href="/blog/chung-khoan/top-5-quy-etf-tot-nhat-viet-nam-2026">ETF</a>, <a href="/blog/kien-thuc-dau-tu/dca-la-gi-chien-luoc-trung-binh-gia">DCA</a>, và <a href="/blog/tai-chinh-ca-nhan/phan-bo-tai-san-cho-nguoi-moi-quy-tac-60-30-10">phân bổ tài sản</a> hợp lý – không cần phái sinh. Hãy xây nền tảng vững chắc trước, bắt đầu từ <a href="/blog/kien-thuc-dau-tu/bao-nhieu-tien-thi-nen-bat-dau-dau-tu">bước đầu tiên</a>.</p>`
}).select('id, title, scheduled_at');

if (r3.error) console.log('❌ Bài 12:', r3.error.message);
else console.log(`✅ ${r3.data[0].title}\n   → Scheduled: ${new Date(r3.data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
