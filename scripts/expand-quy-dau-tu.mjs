import { createClient } from '@supabase/supabase-js';

const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const newContent = `<p>Quỹ mở (mutual fund) là cách <strong>để chuyên gia đầu tư thay bạn</strong>. Bạn bỏ tiền vào quỹ, fund manager chuyên nghiệp sẽ quản lý danh mục — bạn không cần chọn mã, không cần theo dõi hàng ngày. Phù hợp cho người bận rộn hoặc chưa có kinh nghiệm.</p>

<p>Tại Việt Nam, quỹ mở đang ngày càng phổ biến với hơn <strong>50 quỹ mở đang hoạt động</strong> tính đến đầu năm 2026. Tổng tài sản ròng (NAV) của ngành quản lý quỹ đạt hàng chục nghìn tỷ đồng, cho thấy sự tin tưởng ngày càng lớn từ nhà đầu tư cá nhân vào kênh đầu tư này.</p>

<h2>Quỹ mở là gì? Cách hoạt động của quỹ mở</h2>
<p>Quỹ mở gom tiền của nhiều nhà đầu tư, đầu tư vào danh mục cổ phiếu/trái phiếu đa dạng. Bạn mua "chứng chỉ quỹ" (CCQ) — giá CCQ tăng khi danh mục lãi, giảm khi danh mục lỗ. Có thể mua/bán (redemption) bất cứ lúc nào.</p>

<p>Cách hoạt động cụ thể:</p>
<ul>
<li><strong>Bạn nộp tiền vào quỹ</strong> → nhận lại chứng chỉ quỹ (CCQ) tương ứng với số tiền đầu tư</li>
<li><strong>Fund manager quản lý danh mục:</strong> đội ngũ chuyên gia phân tích và lựa chọn cổ phiếu, trái phiếu để đầu tư nhằm tối đa hóa lợi nhuận</li>
<li><strong>Giá trị tài sản ròng (NAV)</strong> được công bố hàng ngày — đây là giá trị thực của mỗi CCQ</li>
<li><strong>Khi muốn rút tiền:</strong> bạn bán lại CCQ cho quỹ (gọi là "mua lại" - redemption), thường mất T+3 đến T+5 ngày để nhận tiền</li>
</ul>

<p>Một ưu điểm lớn của quỹ mở so với tự đầu tư là <strong>đa dạng hóa tự động</strong>. Thay vì bỏ toàn bộ tiền vào 1-2 mã cổ phiếu, quỹ sẽ phân bổ vào hàng chục đến hàng trăm mã khác nhau — giúp giảm rủi ro đáng kể.</p>

<h2>Các loại quỹ mở tại Việt Nam</h2>
<p>Hiểu rõ từng loại quỹ giúp bạn chọn đúng sản phẩm phù hợp với mục tiêu tài chính:</p>

<table>
<thead><tr><th>Loại quỹ</th><th>Chiến lược</th><th>Rủi ro</th><th>Lợi nhuận kỳ vọng</th><th>Phù hợp với</th></tr></thead>
<tbody>
<tr><td><strong>Quỹ cổ phiếu</strong></td><td>≥80% đầu tư vào cổ phiếu</td><td>Cao</td><td>12-20%/năm</td><td>Nhà đầu tư chấp nhận rủi ro, đầu tư dài hạn ≥3 năm</td></tr>
<tr><td><strong>Quỹ trái phiếu</strong></td><td>≥80% đầu tư vào trái phiếu</td><td>Thấp</td><td>5-8%/năm</td><td>Nhà đầu tư bảo thủ, quỹ khẩn cấp</td></tr>
<tr><td><strong>Quỹ cân bằng</strong></td><td>Kết hợp cổ phiếu + trái phiếu</td><td>Trung bình</td><td>8-14%/năm</td><td>Nhà đầu tư muốn cân bằng rủi ro-lợi nhuận</td></tr>
<tr><td><strong>Quỹ thị trường tiền tệ</strong></td><td>Tiền gửi ngắn hạn, tín phiếu</td><td>Rất thấp</td><td>3-5%/năm</td><td>Gửi tiền nhàn rỗi tạm thời</td></tr>
</tbody>
</table>

<h2>Top quỹ mở tốt nhất Việt Nam 2026</h2>

<h3>Quỹ cổ phiếu (lợi nhuận cao, rủi ro cao)</h3>
<table>
<thead><tr><th>Quỹ</th><th>AMC</th><th>Lợi nhuận 3 năm</th><th>Phí/năm</th><th>Min đầu tư</th></tr></thead>
<tbody>
<tr><td><strong>VESAF</strong></td><td>VinaCapital</td><td>~45%</td><td>1.9%</td><td>100.000đ</td></tr>
<tr><td><strong>VCBF-TGF</strong></td><td>VCB Fund</td><td>~40%</td><td>1.5%</td><td>100.000đ</td></tr>
<tr><td><strong>MAGEF</strong></td><td>Mirae Asset</td><td>~38%</td><td>1.8%</td><td>100.000đ</td></tr>
<tr><td><strong>SSISCA</strong></td><td>SSIAM</td><td>~42%</td><td>1.5%</td><td>1 triệu</td></tr>
</tbody>
</table>

<p><strong>Phân tích chi tiết:</strong></p>
<ul>
<li><strong>VESAF (VinaCapital Equity Special Access Fund):</strong> Quỹ có hiệu suất ấn tượng nhất thị trường, tập trung vào cổ phiếu mid-cap có tiềm năng tăng trưởng cao. Phí quản lý 1.9%/năm cao hơn trung bình nhưng bù lại bằng lợi nhuận vượt trội.</li>
<li><strong>VCBF-TGF (Vietcombank Fund - Top Growth):</strong> Ưu điểm lớn nhất là khả năng tiếp cận dễ dàng qua hệ thống Vietcombank, phí thấp hơn VESAF và có đội ngũ quản lý đến từ ngân hàng lớn nhất Việt Nam.</li>
<li><strong>MAGEF (Mirae Asset):</strong> Quỹ có lợi thế từ kinh nghiệm quản lý quỹ toàn cầu của Mirae Asset (Hàn Quốc), danh mục đầu tư đa dạng và cân bằng.</li>
<li><strong>SSISCA (SSI Sustainable Competitive Advantage):</strong> Chiến lược chọn cổ phiếu có lợi thế cạnh tranh bền vững, phù hợp nhà đầu tư dài hạn. Mức đầu tư tối thiểu 1 triệu đồng cao hơn các quỹ khác.</li>
</ul>

<h3>Quỹ trái phiếu (lãi ổn định, rủi ro thấp)</h3>
<table>
<thead><tr><th>Quỹ</th><th>AMC</th><th>Lợi nhuận/năm</th><th>Phí/năm</th><th>Phù hợp</th></tr></thead>
<tbody>
<tr><td><strong>VCBF-FIF</strong></td><td>VCB Fund</td><td>6-8%</td><td>0.8%</td><td>Quỹ khẩn cấp, tiết kiệm</td></tr>
<tr><td><strong>VLBF</strong></td><td>VinaCapital</td><td>5-7%</td><td>0.9%</td><td>An toàn, thanh khoản tốt</td></tr>
<tr><td><strong>TCBF</strong></td><td>TCBS</td><td>6-7%</td><td>0.7%</td><td>Liên kết Techcombank</td></tr>
</tbody>
</table>

<p><strong>Lưu ý khi chọn quỹ trái phiếu:</strong> Quỹ trái phiếu phù hợp để đầu tư ngắn-trung hạn (6 tháng - 2 năm) hoặc làm phần "phòng thủ" trong danh mục. Lãi suất thường cao hơn tiết kiệm ngân hàng khoảng 1-2% nhưng không được bảo hiểm tiền gửi. TCBF có lợi thế phí thấp nhất trong nhóm, đồng thời liên kết trực tiếp trên app TCBS rất tiện lợi.</p>

<h2>Quỹ mở vs ETF: Khác nhau thế nào?</h2>
<p>Đây là câu hỏi phổ biến nhất mà nhà đầu tư mới hay thắc mắc. Cả hai đều là sản phẩm quỹ nhưng có những khác biệt quan trọng:</p>

<table>
<thead><tr><th>Tiêu chí</th><th>Quỹ mở</th><th>ETF</th></tr></thead>
<tbody>
<tr><td>Quản lý</td><td><strong>Chủ động</strong> (fund manager chọn mã)</td><td><strong>Bị động</strong> (theo chỉ số VN30)</td></tr>
<tr><td>Phí quản lý</td><td>1.5-2%/năm</td><td>0.5-0.8%/năm</td></tr>
<tr><td>Lợi nhuận tiềm năng</td><td>Có thể vượt thị trường</td><td>Bám sát thị trường</td></tr>
<tr><td>Mua/bán</td><td>Đặt lệnh T+3 đến T+5</td><td>Mua bán ngay trên sàn</td></tr>
<tr><td>Phù hợp</td><td>Người muốn "hands-off"</td><td>Người muốn linh hoạt, phí thấp</td></tr>
</tbody>
</table>

<p><strong>Kết luận:</strong> Nếu bạn hoàn toàn không muốn tìm hiểu thị trường, quỹ mở là lựa chọn tốt hơn vì có chuyên gia quản lý. Nếu bạn hiểu biết cơ bản và muốn tiết kiệm phí, ETF sẽ phù hợp hơn. Để tìm hiểu thêm về ETF, bạn có thể đọc bài <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">ETF là gì? Hướng dẫn đầu tư quỹ ETF cho người mới</a>.</p>

<h2>5 tiêu chí chọn quỹ mở cho người mới</h2>
<p>Không phải quỹ nào lợi nhuận cao nhất cũng là tốt nhất cho bạn. Hãy đánh giá dựa trên các tiêu chí sau:</p>

<ol>
<li><strong>Hiệu suất ≥3 năm:</strong> Đừng chỉ nhìn lợi nhuận 1 năm gần nhất. Quỹ tốt phải chứng minh được hiệu suất bền vững qua nhiều chu kỳ thị trường. So sánh với VN-Index cùng kỳ — quỹ tốt phải vượt được chỉ số chuẩn.</li>
<li><strong>Phí quản lý (expense ratio):</strong> Đây là chi phí "ẩn" lớn nhất. Phí 2%/năm tưởng ít nhưng sau 10 năm có thể ăn mòn 15-20% tổng lợi nhuận. Ưu tiên quỹ phí thấp hơn 1.8%.</li>
<li><strong>Quy mô quỹ (AUM):</strong> Quỹ lớn (AUM >500 tỷ) thường ổn định và minh bạch hơn, nhưng quỹ nhỏ có thể linh hoạt hơn trong việc chọn cổ phiếu mid-cap.</li>
<li><strong>Uy tín của công ty quản lý quỹ (AMC):</strong> Chọn AMC được cấp phép bởi Ủy ban Chứng khoán Nhà nước, có lịch sử hoạt động lâu năm. Các AMC uy tín tại VN: VinaCapital, Dragon Capital, SSIAM, VCB Fund.</li>
<li><strong>Mức đầu tư tối thiểu:</strong> Hầu hết quỹ chỉ yêu cầu 100.000đ/lần — rất thấp. Nhưng một số quỹ premium yêu cầu 1-10 triệu. Chọn quỹ phù hợp với khả năng tài chính hiện tại.</li>
</ol>

<h2>Cách mua quỹ mở: 3 kênh phổ biến nhất</h2>
<ol>
<li><strong>Qua app đầu tư:</strong> Finhay (tổng hợp nhiều quỹ, giao diện đẹp, DCA tự động), TCBS (mua quỹ TCBF rất tiện), VCB Digibank (mua quỹ VCBF). Đây là cách <strong>dễ nhất cho người mới</strong> — chỉ cần vài phút đăng ký.</li>
<li><strong>Qua CTCK:</strong> SSI, VNDirect, VCSC đều phân phối quỹ mở. Nếu bạn đã có tài khoản chứng khoán, mua thêm quỹ mở rất thuận tiện.</li>
<li><strong>Trực tiếp AMC:</strong> Vào website VinaCapital, Mirae Asset, VCB Fund để mở tài khoản và mua CCQ. Phí có thể thấp hơn khi mua trực tiếp nhưng giao diện thường ít thân thiện hơn app.</li>
</ol>

<h2>Gợi ý danh mục quỹ mở theo mức độ rủi ro</h2>

<h3>Danh mục bảo thủ (rủi ro thấp)</h3>
<ul>
<li><strong>80% quỹ trái phiếu</strong> (VCBF-FIF hoặc TCBF)</li>
<li><strong>20% quỹ cổ phiếu</strong> (VESAF hoặc VCBF-TGF)</li>
<li>Lợi nhuận kỳ vọng: 6-9%/năm</li>
</ul>

<h3>Danh mục cân bằng (rủi ro trung bình)</h3>
<ul>
<li><strong>50% quỹ cổ phiếu</strong> (VESAF, VCBF-TGF)</li>
<li><strong>50% quỹ trái phiếu</strong> (VCBF-FIF, TCBF)</li>
<li>Lợi nhuận kỳ vọng: 8-12%/năm</li>
</ul>

<h3>Danh mục tăng trưởng (rủi ro cao)</h3>
<ul>
<li><strong>70% VESAF/VCBF-TGF</strong> (quỹ cổ phiếu tăng trưởng)</li>
<li><strong>30% VCBF-FIF/TCBF</strong> (quỹ trái phiếu an toàn)</li>
<li>Lợi nhuận kỳ vọng: 10-18%/năm</li>
<li>DCA 2-3 triệu/tháng, giữ dài hạn ≥2 năm</li>
</ul>

<h2>Những sai lầm phổ biến khi đầu tư quỹ mở</h2>
<p>Nhiều nhà đầu tư mới mắc phải những lỗi sau:</p>
<ul>
<li><strong>Chỉ nhìn lợi nhuận quá khứ:</strong> Quỹ lãi 40% năm ngoái không đảm bảo sẽ lãi năm nay. Hãy đánh giá hiệu suất qua nhiều năm và so với chỉ số chuẩn.</li>
<li><strong>Bán khi thị trường giảm:</strong> Quỹ mở là sản phẩm đầu tư dài hạn. Bán khi NAV giảm sẽ biến lỗ tạm thời thành lỗ thực sự. Hãy kiên nhẫn hoặc DCA thêm khi giá thấp.</li>
<li><strong>Không đa dạng hóa loại quỹ:</strong> Đừng bỏ 100% vào quỹ cổ phiếu. Luôn giữ ít nhất 20-30% trong quỹ trái phiếu để giảm rủi ro.</li>
<li><strong>Không quan tâm đến phí:</strong> Phí quản lý 2%/năm trông nhỏ nhưng tích lũy qua 10-20 năm sẽ ảnh hưởng lớn đến tổng lợi nhuận.</li>
<li><strong>Đầu tư tiền cần dùng sớm:</strong> Quỹ cổ phiếu có thể giảm 20-30% trong ngắn hạn. Chỉ đầu tư tiền bạn không cần dùng trong ít nhất 2 năm tới.</li>
</ul>

<h2>Kết luận</h2>
<p>Quỹ mở là lựa chọn tuyệt vời nếu bạn <strong>muốn đầu tư nhưng không có thời gian nghiên cứu</strong>. Phí cao hơn ETF nhưng có fund manager chuyên nghiệp quản lý. Bắt đầu với 100.000đ/tháng trên Finhay — đơn giản nhất!</p>

<p>Hãy nhớ nguyên tắc quan trọng: <strong>bắt đầu sớm, đầu tư đều đặn (DCA), và giữ dài hạn</strong>. Với lãi kép, ngay cả 2-3 triệu/tháng cũng có thể tạo nên khối tài sản đáng kể sau 10-20 năm. Để hiểu rõ hơn về sức mạnh của lãi kép, hãy đọc bài <a href="/blog/tai-chinh-ca-nhan/lai-kep-la-gi-suc-manh-tang-truong-cap-so-nhan">Lãi kép là gì? Sức mạnh tăng trưởng cấp số nhân</a>.</p>

---

## Nguồn tham khảo

- [Ủy ban Chứng khoán Nhà nước (SSC)](https://www.ssc.gov.vn)
- [Sở Giao dịch Chứng khoán TP.HCM (HOSE)](https://www.hsx.vn)`;

// Đếm word count mới
function stripHtml(html) {
    return (html || '').replace(/<[^>]+>/g, ' ').replace(/\[[^\]]+\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
}
const oldWords = 370;
const newWords = stripHtml(newContent).split(/\s+/).filter(w => w.length > 0).length;

console.log(`\n📝 PREVIEW - Mở rộng bài "Top các quỹ đầu tư"`);
console.log(`   Trước: ${oldWords} từ`);
console.log(`   Sau: ${newWords} từ`);
console.log(`   Tăng: +${newWords - oldWords} từ (${Math.round((newWords/oldWords - 1) * 100)}%)`);

// Đếm internal links mới
const intLinks = (newContent.match(/href=["']\/blog\/[^"']+["']/gi) || []).length +
                 (newContent.match(/\[[^\]]+\]\(\/blog\/[^)]+\)/g) || []).length;
console.log(`   Internal links: ${intLinks} (trước: 0)`);

// Đếm headings
const h2Count = (newContent.match(/<h2>/gi) || []).length;
const h3Count = (newContent.match(/<h3>/gi) || []).length;
console.log(`   H2: ${h2Count} | H3: ${h3Count}`);

if (process.argv.includes('--apply')) {
    const { error } = await s.from('posts')
        .update({ content: newContent })
        .eq('slug', 'quy-dau-tu-tot-nhat-viet-nam-2026');
    
    if (error) console.log(`❌ Lỗi: ${error.message}`);
    else console.log(`\n✅ Đã cập nhật thành công!`);
} else {
    console.log(`\n⚠️ PREVIEW - Chạy với --apply để lưu`);
}
