import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// ===================== BÀI 1: DeFi =====================
const defiContent = `
<h2>DeFi – Cuộc cách mạng tài chính không cần ngân hàng</h2>

<p>DeFi (Decentralized Finance – Tài chính phi tập trung) là hệ sinh thái các ứng dụng tài chính xây dựng trên blockchain. Thay vì phụ thuộc vào ngân hàng, sàn giao dịch truyền thống hay công ty bảo hiểm, DeFi sử dụng <strong>smart contract</strong> (hợp đồng thông minh) để tự động hóa mọi giao dịch.</p>

<p>Hãy hình dung: bạn có thể <strong>vay tiền, gửi tiết kiệm, mua bảo hiểm, giao dịch tài sản</strong> – tất cả chỉ bằng một chiếc ví crypto, không cần giấy tờ, không cần chờ duyệt, hoạt động 24/7.</p>

<p>Tính đến đầu 2026, tổng giá trị khóa trong DeFi (TVL) đã vượt <strong>180 tỷ USD</strong> – minh chứng cho sức hấp dẫn của mô hình này.</p>

<img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format" alt="Blockchain và DeFi" style="width:100%;border-radius:12px;margin:24px 0" />

<h2>DeFi hoạt động như thế nào?</h2>

<p>Cốt lõi của DeFi là <strong>smart contract</strong> – những đoạn code tự thực thi trên blockchain khi đủ điều kiện. Ví dụ: khi bạn gửi 1.000 USDC vào Aave, smart contract tự động tính lãi, phân phối reward, và cho phép rút bất kỳ lúc nào – không cần nhân viên nào xử lý.</p>

<h3>Sự khác biệt với tài chính truyền thống</h3>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Tài chính truyền thống</th><th>DeFi</th></tr>
</thead>
<tbody>
<tr><td>Trung gian</td><td>Ngân hàng, sàn giao dịch</td><td>Smart contract tự động</td></tr>
<tr><td>Giờ hoạt động</td><td>8h–16h, nghỉ cuối tuần</td><td>24/7/365</td></tr>
<tr><td>Thời gian xử lý</td><td>1–5 ngày làm việc</td><td>Vài giây đến vài phút</td></tr>
<tr><td>Yêu cầu KYC</td><td>Cần CMND, xác minh danh tính</td><td>Chỉ cần ví crypto</td></tr>
<tr><td>Minh bạch</td><td>Số liệu nội bộ, khó kiểm chứng</td><td>Tất cả on-chain, ai cũng xem được</td></tr>
<tr><td>Lãi suất tiết kiệm</td><td>0,5–3%/năm</td><td>3–15%/năm (stablecoin)</td></tr>
</tbody>
</table>

<h2>5 thành phần chính của hệ sinh thái DeFi</h2>

<h3>1. DEX – Sàn giao dịch phi tập trung</h3>
<p>DEX (Decentralized Exchange) cho phép bạn <strong>swap token trực tiếp từ ví</strong>, không cần nạp tiền vào sàn. Uniswap (Ethereum), PancakeSwap (BNB Chain) và Jupiter (Solana) là những DEX phổ biến nhất.</p>
<p><strong>Ưu điểm:</strong> Không cần đăng ký tài khoản, bạn giữ quyền kiểm soát tài sản 100%.</p>
<p><strong>Nhược điểm:</strong> Thanh khoản có thể thấp hơn sàn CEX, slippage với lệnh lớn.</p>

<h3>2. Lending/Borrowing – Cho vay và đi vay</h3>
<p>Nền tảng như <strong>Aave</strong> và <strong>Compound</strong> cho phép bạn gửi crypto để nhận lãi, hoặc thế chấp crypto để vay stablecoin. Lãi suất được điều chỉnh tự động theo cung-cầu.</p>
<p>Ví dụ thực tế: Gửi 10.000 USDC vào Aave → nhận APY 5%/năm → thu được ~500 USDC/năm tiền lãi, rút bất kỳ lúc nào.</p>

<h3>3. Yield Farming – "Cày" lợi nhuận</h3>
<p>Yield Farming là hoạt động <strong>cung cấp thanh khoản</strong> cho DEX hoặc protocol để nhận phần thưởng. Bạn nạp cặp token (ví dụ ETH + USDC) vào pool, nhận phí giao dịch + token thưởng.</p>
<p><strong>APY phổ biến:</strong> 5–30%/năm cho pool ổn định, có thể lên 100%+ cho pool mới (kèm rủi ro cao).</p>

<h3>4. Staking – Khóa token bảo vệ mạng lưới</h3>
<p>Staking ETH (qua Lido, Rocket Pool) cho lợi nhuận ổn định <strong>4–5%/năm</strong>. Bạn nhận stETH (Lido) hoặc rETH (Rocket Pool) đại diện cho ETH đã stake, có thể sử dụng trong DeFi khác.</p>

<h3>5. Stablecoin – Đồng tiền ổn định</h3>
<p>USDT, USDC, DAI là các stablecoin neo giá 1:1 với USD. Đây là "cầu nối" giúp bạn tham gia DeFi mà không chịu biến động giá crypto.</p>

<img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format" alt="Giao dịch DeFi trên điện thoại" style="width:100%;border-radius:12px;margin:24px 0" />

<h2>Cơ hội kiếm lợi nhuận thực tế từ DeFi</h2>

<table>
<thead>
<tr><th>Chiến lược</th><th>Nền tảng</th><th>APY ước tính</th><th>Rủi ro</th></tr>
</thead>
<tbody>
<tr><td>Staking ETH</td><td>Lido, Rocket Pool</td><td>4–5%/năm</td><td>Thấp</td></tr>
<tr><td>Lending stablecoin</td><td>Aave, Compound</td><td>3–8%/năm</td><td>Thấp-Trung bình</td></tr>
<tr><td>LP Pool ổn định</td><td>Curve, Uniswap</td><td>5–15%/năm</td><td>Trung bình</td></tr>
<tr><td>Yield Farming mới</td><td>Nhiều protocol</td><td>30–100%+/năm</td><td>Cao</td></tr>
</tbody>
</table>

<h2>5 rủi ro lớn nhất khi tham gia DeFi</h2>

<h3>1. Smart contract risk (Lỗi hợp đồng thông minh)</h3>
<p>Bug trong code có thể bị hacker khai thác. Năm 2022–2024, hàng tỷ USD đã bị hack từ các protocol DeFi. <strong>Giải pháp:</strong> Chỉ sử dụng protocol đã được <strong>audit bởi Certik, Trail of Bits, hoặc OpenZeppelin</strong>.</p>

<h3>2. Impermanent Loss (Tổn thất tạm thời)</h3>
<p>Khi cung cấp thanh khoản, nếu giá token thay đổi nhiều so với lúc nạp, bạn sẽ chịu IL. <strong>Mẹo:</strong> Chọn pool stablecoin-stablecoin (USDC/USDT) để giảm thiểu.</p>

<h3>3. Rug pull & Scam</h3>
<p>Dự án lừa đảo thu hút thanh khoản rồi rút tiền bỏ chạy. <strong>Dấu hiệu cảnh báo:</strong> APY quá cao (1000%+), team ẩn danh, contract chưa audit, thanh khoản bị khóa ngắn.</p>

<h3>4. Rủi ro thị trường</h3>
<p>Giá crypto biến động 10–30%/ngày là bình thường. Giá trị tài sản farm của bạn có thể giảm mạnh dù APY cao.</p>

<h3>5. Rủi ro pháp lý</h3>
<p>Tại Việt Nam, crypto chưa được công nhận là phương tiện thanh toán hợp pháp. Chính sách có thể thay đổi bất kỳ lúc nào, ảnh hưởng đến hoạt động DeFi.</p>

<h2>Hướng dẫn bắt đầu DeFi an toàn (5 bước)</h2>

<ol>
<li><strong>Tạo ví crypto:</strong> Tải MetaMask (trên trình duyệt) hoặc Trust Wallet (trên điện thoại). Lưu seed phrase ở nơi an toàn – <em>mất seed phrase = mất toàn bộ tài sản</em>.</li>
<li><strong>Mua stablecoin:</strong> Nạp USDT/USDC qua sàn Binance hoặc OKX, rồi rút về ví MetaMask.</li>
<li><strong>Bắt đầu nhỏ:</strong> Chỉ dùng 100–500 USD để làm quen. Đừng bao giờ đầu tư số tiền bạn không thể mất.</li>
<li><strong>Chọn nền tảng uy tín:</strong> Aave, Uniswap, Lido, Curve – đã hoạt động nhiều năm, được audit nhiều lần.</li>
<li><strong>Theo dõi qua DeFiLlama:</strong> Trang <a href="https://defillama.com" target="_blank">defillama.com</a> hiển thị TVL, APY và thông tin minh bạch của tất cả protocol.</li>
</ol>

<img src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&auto=format" alt="Ví MetaMask trên điện thoại" style="width:100%;border-radius:12px;margin:24px 0" />

<h2>Top 5 nền tảng DeFi uy tín nhất 2026</h2>

<table>
<thead>
<tr><th>Nền tảng</th><th>Chức năng</th><th>Blockchain</th><th>TVL</th></tr>
</thead>
<tbody>
<tr><td>Aave</td><td>Lending/Borrowing</td><td>Ethereum, Polygon, Avalanche</td><td>$15B+</td></tr>
<tr><td>Uniswap</td><td>DEX</td><td>Ethereum, Arbitrum, Base</td><td>$6B+</td></tr>
<tr><td>Lido</td><td>Liquid Staking</td><td>Ethereum</td><td>$25B+</td></tr>
<tr><td>Curve</td><td>DEX (Stablecoin)</td><td>Ethereum, nhiều chain</td><td>$4B+</td></tr>
<tr><td>MakerDAO</td><td>Stablecoin (DAI)</td><td>Ethereum</td><td>$8B+</td></tr>
</tbody>
</table>

<h2>Kết luận</h2>

<p>DeFi mở ra cơ hội tài chính cho tất cả mọi người – không phân biệt quốc tịch, thu nhập hay trình độ. Tuy nhiên, đây vẫn là lĩnh vực <strong>rủi ro cao</strong>, đòi hỏi kiến thức kỹ thuật và sự thận trọng.</p>

<p>Lời khuyên: Bắt đầu với staking ETH hoặc lending stablecoin trên Aave – đây là 2 chiến lược an toàn nhất cho người mới. Khi đã quen, bạn có thể khám phá yield farming và các DeFi nâng cao hơn.</p>

<p><em>Nhớ: trong DeFi, bạn là ngân hàng của chính mình – với toàn quyền kiểm soát, nhưng cũng chịu toàn bộ trách nhiệm.</em></p>
`.trim();

// ===================== BÀI 2: Mua nhà hay thuê nhà =====================
const nhaContent = `
<h2>Mua nhà hay thuê nhà: bài toán không có đáp án đúng cho tất cả</h2>

<p>Câu hỏi "mua nhà hay thuê nhà" là một trong những quyết định tài chính quan trọng nhất đời người. Ở Việt Nam, quan niệm "an cư lạc nghiệp" khiến nhiều người vội vã mua nhà bằng mọi giá, thậm chí <strong>vay nợ 70–80% giá trị</strong> dù thu nhập chưa đủ ổn định.</p>

<p>Bài phân tích này sẽ giúp bạn nhìn nhận bài toán một cách <strong>lý tính, dựa trên con số</strong> – để ra quyết định phù hợp với hoàn cảnh cá nhân.</p>

<img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format" alt="Mua nhà hay thuê nhà" style="width:100%;border-radius:12px;margin:24px 0" />

<h2>Chi phí thực sự khi mua nhà</h2>

<p>Nhiều người chỉ nhìn vào giá mua mà quên tổng chi phí sở hữu (<strong>Total Cost of Ownership</strong>):</p>

<table>
<thead>
<tr><th>Khoản chi</th><th>Ước tính</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td>Giá mua</td><td>2–5 tỷ VNĐ</td><td>Căn hộ 2PN tại TP.HCM/Hà Nội</td></tr>
<tr><td>Lãi vay (nếu vay 70%)</td><td>800 triệu – 2 tỷ VNĐ</td><td>Lãi suất 9–11%/năm × 20 năm</td></tr>
<tr><td>Phí công chứng + Thuế</td><td>2–3% giá trị</td><td>Trả một lần</td></tr>
<tr><td>Phí quản lý + Bảo trì</td><td>5–15 triệu/năm</td><td>Tùy chung cư</td></tr>
<tr><td>Sửa chữa, nâng cấp</td><td>1–2% giá trị/năm</td><td>Trung bình dài hạn</td></tr>
</tbody>
</table>

<p><strong>Ví dụ thực tế:</strong> Căn hộ giá 3 tỷ, vay 70% (2,1 tỷ) lãi suất 10%/năm trong 20 năm → Tổng tiền lãi phải trả: <strong>~2,8 tỷ VNĐ</strong>. Tức là bạn trả gần <strong>6 tỷ cho căn nhà 3 tỷ</strong>.</p>

<h2>Chi phí thực sự khi thuê nhà</h2>

<table>
<thead>
<tr><th>Khoản chi</th><th>Ước tính</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td>Tiền thuê</td><td>8–15 triệu/tháng</td><td>Căn hộ 2PN tương đương</td></tr>
<tr><td>Đặt cọc</td><td>2–3 tháng tiền thuê</td><td>Hoàn lại khi trả nhà</td></tr>
<tr><td>Chi phí chuyển nhà</td><td>5–10 triệu/lần</td><td>Nếu di chuyển</td></tr>
<tr><td>Tổng 20 năm</td><td>2–3,6 tỷ VNĐ</td><td>Giả sử tăng 3%/năm</td></tr>
</tbody>
</table>

<p>So sánh: thuê nhà 20 năm tốn 2–3,6 tỷ, mua nhà tốn 5–6 tỷ (gồm lãi vay). <strong>Chênh lệch 2–3 tỷ</strong> – nếu đầu tư khoản tiền đó, kết quả có thể rất khác.</p>

<h2>Bài toán "thuê + đầu tư" vs "mua nhà"</h2>

<p>Giả sử bạn có 900 triệu (30% đặt cọc cho nhà 3 tỷ). Hai kịch bản sau 20 năm:</p>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Kịch bản A: Mua nhà</th><th>Kịch bản B: Thuê + Đầu tư</th></tr>
</thead>
<tbody>
<tr><td>Vốn ban đầu</td><td>900 triệu (đặt cọc)</td><td>900 triệu (đầu tư ETF)</td></tr>
<tr><td>Chi hàng tháng</td><td>18 triệu (gốc+lãi)</td><td>12 triệu (thuê) + 6 triệu (đầu tư thêm)</td></tr>
<tr><td>Giá trị sau 20 năm</td><td>Nhà ~4,5–6 tỷ (tăng giá 3%/năm)</td><td>Danh mục ~5–8 tỷ (lãi kép 10%/năm)</td></tr>
<tr><td>Thanh khoản</td><td>Thấp (bán nhà mất 3–6 tháng)</td><td>Cao (bán ETF trong 3 ngày)</td></tr>
<tr><td>Rủi ro</td><td>Mất việc → không trả được nợ</td><td>Thị trường giảm → danh mục giảm tạm thời</td></tr>
</tbody>
</table>

<p><strong>Kết quả:</strong> Về mặt tài chính thuần túy, kịch bản B (thuê + đầu tư) <em>thường</em> cho lợi nhuận cao hơn – nhưng đòi hỏi kỷ luật đầu tư cao và chấp nhận biến động.</p>

<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format" alt="Tính toán tài chính mua nhà" style="width:100%;border-radius:12px;margin:24px 0" />

<h2>Khi nào nên MUA nhà?</h2>

<ul>
<li><strong>Thu nhập ổn định:</strong> Tiền trả nợ hàng tháng ≤ 30% thu nhập gia đình</li>
<li><strong>Đã có quỹ dự phòng:</strong> Ít nhất 6 tháng chi tiêu + 3 tháng trả nợ</li>
<li><strong>Kế hoạch ở lâu:</strong> Dự định ở ≥ 7–10 năm tại một địa điểm</li>
<li><strong>Giá nhà hợp lý:</strong> Tỷ lệ giá nhà/thu nhập năm (PIR) dưới 15 lần</li>
<li><strong>Nhu cầu ổn định:</strong> Có gia đình, con nhỏ, muốn an cư</li>
</ul>

<h2>Khi nào nên THUÊ nhà?</h2>

<ul>
<li><strong>Thu nhập chưa ổn định:</strong> Freelancer, mới đi làm, hay thay đổi công việc</li>
<li><strong>Linh hoạt địa điểm:</strong> Có thể chuyển thành phố, đi nước ngoài</li>
<li><strong>Chưa đủ tài chính:</strong> Chưa có 20–30% tiền đặt cọc</li>
<li><strong>Muốn tối ưu đầu tư:</strong> Khoản chênh lệch có thể đầu tư sinh lời tốt hơn</li>
<li><strong>Thị trường quá nóng:</strong> PIR > 25 lần → mua nhà rất rủi ro</li>
</ul>

<h2>Tỷ lệ PIR tại Việt Nam – Chỉ số then chốt</h2>

<p><strong>PIR (Price-to-Income Ratio)</strong> = Giá nhà ÷ Thu nhập hàng năm của hộ gia đình. Đây là chỉ số quan trọng nhất để đánh giá "có nên mua nhà không".</p>

<table>
<thead>
<tr><th>Thành phố</th><th>PIR 2026 (ước tính)</th><th>Đánh giá</th></tr>
</thead>
<tbody>
<tr><td>TP.HCM</td><td>25–35 lần</td><td>Rất khó mua cho người thu nhập trung bình</td></tr>
<tr><td>Hà Nội</td><td>20–30 lần</td><td>Khó khăn, cần hỗ trợ gia đình</td></tr>
<tr><td>Đà Nẵng</td><td>12–18 lần</td><td>Khả thi hơn</td></tr>
<tr><td>Cần Thơ</td><td>8–12 lần</td><td>Phù hợp năng lực chi trả</td></tr>
</tbody>
</table>

<p><em>PIR dưới 15: phù hợp mua. PIR 15–25: nên cân nhắc kỹ. PIR trên 25: ưu tiên thuê.</em></p>

<h2>Lời khuyên cho người trẻ (25–35 tuổi)</h2>

<ol>
<li><strong>Đừng vội mua nhà</strong> chỉ vì áp lực xã hội ("30 tuổi phải có nhà")</li>
<li><strong>Ưu tiên đầu tư vào bản thân</strong> trước: kỹ năng, sức khỏe, kinh nghiệm</li>
<li><strong>Xây quỹ khẩn cấp</strong> 6 tháng chi tiêu trước mọi quyết định lớn</li>
<li><strong>Nếu mua, đừng vay quá 50%</strong> giá trị nhà – lãi suất có thể tăng bất ngờ</li>
<li><strong>Tính toán bằng con số</strong> trước mỗi quyết định, đừng để cảm xúc chi phối</li>
</ol>

<h2>Kết luận</h2>

<p>Mua nhà hay thuê nhà không có đáp án đúng-sai tuyệt đối. Quyết định phụ thuộc vào <strong>thu nhập, kế hoạch sống, khả năng tài chính</strong> và <strong>thị trường bất động sản</strong> tại thời điểm đó.</p>

<p>Điều quan trọng nhất: hãy ra quyết định dựa trên <strong>phân tích tài chính cá nhân</strong>, không phải vì "ai cũng mua nhà" hay "nhà chỉ có tăng giá". Bất động sản có thể là đầu tư tốt – nhưng chỉ khi bạn mua <em>đúng thời điểm, đúng giá, và đúng năng lực tài chính</em>.</p>
`.trim();

// Apply
const { error: e1 } = await s.from('posts').update({ content: defiContent, updated_at: new Date().toISOString() }).like('slug', '%defi-la-gi%');
const { error: e2 } = await s.from('posts').update({ content: nhaContent, updated_at: new Date().toISOString() }).like('slug', '%mua-nha-hay-thue-nha%');

console.log('DeFi:', e1 ? '❌ ' + e1.message : `✅ ${defiContent.length} chars`);
console.log('Mua nhà:', e2 ? '❌ ' + e2.message : `✅ ${nhaContent.length} chars`);
