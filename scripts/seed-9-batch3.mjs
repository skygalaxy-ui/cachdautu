import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const CATS = {
    'kien-thuc-dau-tu': '31d10229-9735-4f69-a368-08ea7f0550a1',
    'chung-khoan': '96d5c106-653b-470e-90a7-6875e9a490fd',
    'crypto': 'b7ced1f1-2dc7-47c7-a3bb-36d66c24cae5',
};

const schedule = [
    '2026-02-26T08:00:00+07:00',
    '2026-02-26T12:00:00+07:00',
    '2026-02-26T18:00:00+07:00',
];

const posts = [
    {
        title: 'Đầu Tư Theo Xu Hướng AI Và Công Nghệ 2026: Cơ Hội Mới',
        slug: 'dau-tu-xu-huong-ai-cong-nghe-2026',
        excerpt: 'Phân tích cơ hội đầu tư vào lĩnh vực AI và công nghệ năm 2026, từ cổ phiếu đến quỹ chuyên ngành.',
        category_id: CATS['kien-thuc-dau-tu'],
        content: `<h2>AI đang thay đổi mọi ngành</h2>
<p>Trí tuệ nhân tạo (AI) không còn là công nghệ tương lai mà đã trở thành hiện thực, thâm nhập vào mọi lĩnh vực từ y tế, tài chính, sản xuất đến giải trí. Năm 2026, thị trường AI toàn cầu ước tính đạt hơn 500 tỷ USD và dự kiến tăng trưởng 35-40% mỗi năm trong thập kỷ tới. Đây là một trong những xu hướng đầu tư hấp dẫn nhất của thời đại, mang lại cơ hội sinh lời lớn cho những nhà đầu tư biết nắm bắt.</p>
<p>Cuộc cách mạng AI đang tạo ra những công ty có giá trị vốn hóa khổng lồ chỉ trong vài năm. Nvidia, công ty sản xuất chip GPU cho AI, đã tăng giá cổ phiếu hơn 800% trong giai đoạn 2023-2025 nhờ nhu cầu bùng nổ từ các trung tâm dữ liệu AI. Microsoft, Google, Meta và Amazon đều đầu tư hàng tỷ USD vào hạ tầng AI, tạo ra hệ sinh thái khổng lồ với vô số cơ hội cho nhà đầu tư.</p>
<p>Tại Việt Nam, xu hướng AI cũng đang lan tỏa mạnh mẽ. FPT, công ty công nghệ hàng đầu, đã ký nhiều hợp đồng AI trị giá hàng trăm triệu USD với đối tác quốc tế. Các startup AI Việt Nam trong lĩnh vực fintech, edtech và healthtech cũng thu hút vốn đầu tư mạo hiểm đáng kể, mở ra cơ hội cho nhà đầu tư trong nước.</p>

<h2>Các cách đầu tư vào AI</h2>
<p>Cách trực tiếp nhất là mua cổ phiếu của các công ty AI hàng đầu. Trên thị trường quốc tế, bạn có thể đầu tư vào nhóm "Magnificent 7" (Apple, Microsoft, Nvidia, Google, Amazon, Meta, Tesla) thông qua các sàn giao dịch chứng khoán quốc tế. Tại Việt Nam, FPT là lựa chọn tiêu biểu nhất với chiến lược AI rõ ràng và doanh thu từ mảng này đang tăng trưởng mạnh mẽ.</p>
<p>Một cách tiếp cận đa dạng hơn là đầu tư qua quỹ ETF chuyên ngành công nghệ và AI. Các quỹ như Global X Robotics and AI ETF (BOTZ), iShares Robotics and AI ETF (IRBO) hay ARK Innovation ETF (ARKK) cho phép bạn sở hữu một rổ cổ phiếu AI đa dạng mà không cần chọn từng mã. Điều này giảm rủi ro khi một công ty cụ thể gặp khó khăn vì bạn vẫn được hưởng lợi từ xu hướng tổng thể của ngành.</p>
<p>Ngoài cổ phiếu và ETF, bạn cũng có thể xem xét đầu tư vào hạ tầng hỗ trợ AI như doanh nghiệp sản xuất chip bán dẫn, trung tâm dữ liệu, năng lượng tái tạo (vì AI tiêu thụ rất nhiều điện) và an ninh mạng. Đây là những ngành "cuốc xẻng" hưởng lợi gián tiếp từ cơn sốt AI, tương tự như những người bán dụng cụ đào vàng trong thời kỳ Gold Rush.</p>

<h2>Rủi ro khi đầu tư vào AI</h2>
<p>Dù tiềm năng lớn, đầu tư vào AI cũng đi kèm rủi ro đáng kể. Rủi ro lớn nhất là định giá quá cao (overvaluation) — nhiều cổ phiếu AI đang giao dịch ở mức P/E 50-100 lần, nghĩa là nhà đầu tư đang trả giá cho kỳ vọng tăng trưởng rất xa trong tương lai. Nếu kỳ vọng không thành hiện thực, giá cổ phiếu có thể giảm mạnh tương tự bong bóng dotcom năm 2000.</p>
<p>Rủi ro công nghệ cũng cần được xem xét. AI là lĩnh vực thay đổi cực kỳ nhanh, và công ty dẫn đầu hôm nay có thể bị thay thế bởi đối thủ với công nghệ mới chỉ trong 1-2 năm. Ngoài ra, các quy định pháp lý về AI đang ngày càng chặt chẽ tại EU, Mỹ và nhiều quốc gia khác, có thể ảnh hưởng đến hoạt động kinh doanh và lợi nhuận của các công ty AI.</p>
<p>Để giảm rủi ro, hãy áp dụng nguyên tắc phân bổ tài sản hợp lý. Không nên dành quá 15-20% danh mục cho cổ phiếu AI và công nghệ. Kết hợp đầu tư dài hạn (buy and hold) với chiến lược DCA để mua dần theo thời gian, tránh mua toàn bộ ở đỉnh giá. Theo dõi sát kết quả kinh doanh thực tế của các công ty AI hàng quý để đảm bảo tăng trưởng doanh thu và lợi nhuận đi đúng kỳ vọng.</p>

<h2>Kết luận</h2>
<p>AI là xu hướng đầu tư lớn nhất của thập kỷ 2020, mang lại cơ hội sinh lời hấp dẫn cho nhà đầu tư biết nắm bắt đúng thời điểm và phân bổ hợp lý. Hãy nghiên cứu kỹ, đa dạng hóa danh mục và duy trì tầm nhìn dài hạn để tận dụng cuộc cách mạng công nghệ đang diễn ra.</p>
<h2>Đọc thêm</h2>
<p><a href="/blog/kien-thuc-dau-tu/nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh">Nên đầu tư gì 2026</a> · <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">Đầu tư quỹ ETF</a></p>
<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`,
    },
    {
        title: 'Altcoin Là Gì? Cơ Hội Và Rủi Ro Đầu Tư Altcoin 2026',
        slug: 'altcoin-la-gi-co-hoi-rui-ro-dau-tu-2026',
        excerpt: 'Tìm hiểu altcoin là gì, phân loại các altcoin phổ biến và chiến lược đầu tư altcoin an toàn năm 2026.',
        category_id: CATS['crypto'],
        content: `<h2>Altcoin là gì?</h2>
<p>Altcoin (Alternative Coin) là thuật ngữ chỉ tất cả các đồng tiền mã hóa khác ngoài Bitcoin. Hiện tại có hơn 20,000 altcoin đang giao dịch trên thị trường, từ những dự án hàng đầu như Ethereum, Solana, Cardano đến hàng nghìn token nhỏ với giá trị vốn hóa chỉ vài nghìn USD. Thị trường altcoin vô cùng đa dạng, mỗi đồng có công nghệ, ứng dụng và tiềm năng khác nhau.</p>
<p>Ethereum (ETH) là altcoin lớn nhất và quan trọng nhất, đóng vai trò nền tảng cho hệ sinh thái DeFi (Tài chính phi tập trung), NFT và smart contracts. Solana (SOL) nổi bật với tốc độ giao dịch cực nhanh và phí thấp, trở thành đối thủ cạnh tranh mạnh mẽ của Ethereum. Cardano (ADA) theo đuổi hướng tiếp cận học thuật với nghiên cứu peer-reviewed trước khi triển khai. Mỗi altcoin đại diện cho một tầm nhìn khác nhau về tương lai của tài chính và công nghệ blockchain.</p>
<p>Điểm khác biệt lớn nhất giữa altcoin và Bitcoin là mức độ rủi ro và tiềm năng lợi nhuận. Bitcoin được xem như "vàng kỹ thuật số" với tính ổn định tương đối cao, trong khi altcoin có biến động lớn hơn nhiều. Một altcoin có thể tăng 1000% trong một năm nhưng cũng có thể giảm 95% về gần 0. Chính sự biến động này tạo ra cả cơ hội và rủi ro lớn cho nhà đầu tư.</p>

<h2>Phân loại altcoin theo công dụng</h2>
<p>Nhóm đầu tiên là Platform Coins — những đồng tiền hỗ trợ nền tảng blockchain cho phép xây dựng ứng dụng phi tập trung. Ethereum, Solana, Avalanche, Polkadot thuộc nhóm này. Giá trị của chúng đến từ hệ sinh thái ứng dụng được xây dựng trên nền tảng, tương tự như hệ điều hành iOS hoặc Android trong thế giới điện thoại thông minh. Nền tảng nào thu hút được nhiều nhà phát triển và người dùng nhất sẽ có giá trị cao nhất.</p>
<p>Nhóm thứ hai là DeFi Tokens — các đồng tiền liên quan đến dịch vụ tài chính phi tập trung như cho vay (Aave, Compound), sàn giao dịch phi tập trung (Uniswap, PancakeSwap) và tạo stablecoin (MakerDAO). DeFi đang thách thức hệ thống ngân hàng truyền thống bằng cách cung cấp dịch vụ tài chính không cần trung gian, hoạt động 24/7 và ai cũng có thể truy cập.</p>
<p>Nhóm thứ ba là Utility Tokens — những đồng tiền có ứng dụng cụ thể trong hệ sinh thái của dự án. Chainlink (LINK) cung cấp dữ liệu thực tế cho smart contracts. Filecoin (FIL) phục vụ lưu trữ dữ liệu phi tập trung. The Graph (GRT) đánh chỉ mục dữ liệu blockchain. Giá trị của utility tokens phụ thuộc trực tiếp vào nhu cầu sử dụng thực tế của dự án.</p>

<h2>Chiến lược đầu tư altcoin an toàn</h2>
<p>Quy tắc quan trọng nhất khi đầu tư altcoin là chỉ dùng số tiền bạn có thể chấp nhận mất hoàn toàn. Thị trường crypto biến động cực kỳ mạnh và nhiều altcoin đã giảm 90-99% giá trị so với đỉnh. Hãy giới hạn phần đầu tư altcoin ở mức 5-15% tổng danh mục tùy theo khẩu vị rủi ro của bạn.</p>
<p>Phân bổ vốn altcoin theo mô hình kim tự tháp là cách tiếp cận khôn ngoan. Dành 50-60% cho các altcoin lớn (top 10 theo vốn hóa) như ETH, SOL, ADA vì chúng có thanh khoản cao và ít rủi ro phá sản hơn. Phân bổ 25-30% cho altcoin trung bình (top 10-50) có công nghệ tốt và đội ngũ uy tín. Chỉ dành tối đa 10-15% cho altcoin nhỏ có tiềm năng tăng giá cao nhưng rủi ro cực lớn.</p>
<p>Nghiên cứu kỹ trước khi đầu tư (DYOR — Do Your Own Research) là nguyên tắc sống còn trong thị trường altcoin. Đọc whitepaper của dự án, đánh giá đội ngũ phát triển, kiểm tra tokenomics (cơ chế phân phối token), xem xét partnership và các milestone đã đạt được. Tránh xa những dự án chỉ có marketing mạnh mà không có sản phẩm thực tế, hoặc hứa hẹn lợi nhuận phi thực tế.</p>

<h2>Kết luận</h2>
<p>Thị trường altcoin mang đến cctuyệt vời cho những nhà đầu tư sẵn sàng chấp nhận rủi ro cao để đổi lấy tiềm năng lợi nhuận lớn. Tuy nhiên, thành công trong đầu tư altcoin đòi hỏi kiến thức, kỷ luật và khả năng kiểm soát cảm xúc. Hãy nghiên cứu kỹ, phân bổ hợp lý và luôn nhớ rằng bảo toàn vốn quan trọng hơn việc đuổi theo lợi nhuận.</p>
<h2>Đọc thêm</h2>
<p><a href="/blog/crypto/bitcoin-la-gi-huong-dan-dau-tu-btc">Bitcoin là gì</a> · <a href="/blog/crypto/stablecoin-la-gi-usdt-usdc-vai-tro">Stablecoin là gì</a></p>
<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`,
    },
    {
        title: 'Đầu Tư Vào Thị Trường Quốc Tế Từ Việt Nam: Hướng Dẫn 2026',
        slug: 'dau-tu-thi-truong-quoc-te-tu-viet-nam-2026',
        excerpt: 'Hướng dẫn chi tiết cách nhà đầu tư Việt Nam tiếp cận thị trường chứng khoán quốc tế Mỹ, châu Âu và châu Á.',
        category_id: CATS['kien-thuc-dau-tu'],
        content: `<h2>Tại sao nên đầu tư quốc tế?</h2>
<p>Đầu tư ra thị trường quốc tế giúp nhà đầu tư Việt Nam tiếp cận những công ty hàng đầu thế giới mà thị trường trong nước không có. Apple, Microsoft, Google, Amazon, Tesla — những doanh nghiệp có giá trị vốn hóa lớn nhất hành tinh đều niêm yết trên sàn chứng khoán Mỹ. Bằng cách đầu tư quốc tế, bạn có thể sở hữu cổ phiếu của những công ty đang định hình tương lai và hưởng lợi từ sự tăng trưởng của nền kinh tế lớn nhất thế giới.</p>
<p>Đa dạng hóa quốc tế cũng giúp giảm rủi ro tổng thể danh mục. Khi thị trường Việt Nam giảm, thị trường Mỹ hoặc châu Âu có thể vẫn tăng và ngược lại. Theo lý thuyết danh mục đầu tư hiện đại của Harry Markowitz, kết hợp các tài sản có tương quan thấp giúp giảm rủi ro mà không hy sinh lợi nhuận kỳ vọng. Thị trường chứng khoán Việt Nam và Mỹ có tương quan tương đối thấp, tạo điều kiện tối ưu cho đa dạng hóa.</p>
<p>Bên cạnh đó, đầu tư quốc tế còn giúp phòng hộ rủi ro tỷ giá. Khi VND mất giá so với USD (xu hướng dài hạn), tài sản định danh bằng USD sẽ tăng giá quy đổi sang VND, bù đắp cho lạm phát và mất giá đồng nội tệ. Trong 10 năm qua, VND đã mất giá khoảng 15-20% so với USD, đây là khoản lợi nhuận bổ sung cho nhà đầu tư giữ tài sản USD.</p>

<h2>Các kênh đầu tư quốc tế từ Việt Nam</h2>
<p>Cách phổ biến nhất hiện nay là mở tài khoản tại các sàn giao dịch quốc tế hỗ trợ nhà đầu tư Việt Nam. Các nền tảng như Interactive Brokers, eToro, Moomoo hay Tiger Brokers cho phép bạn giao dịch cổ phiếu Mỹ, châu Âu và châu Á từ Việt Nam. Quy trình mở tài khoản hoàn toàn online, yêu cầu hộ chiếu, xác nhận địa chỉ và chuyển khoản quốc tế để nạp vốn.</p>
<p>Phương án thứ hai là đầu tư qua các quỹ mở và chứng chỉ quỹ tại Việt Nam có chiến lược đầu tư ra nước ngoài. Một số công ty quản lý quỹ Việt Nam đã ra mắt quỹ đầu tư vào thị trường Mỹ hoặc toàn cầu, cho phép bạn tham gia mà không cần mở tài khoản nước ngoài hay lo lắng về thủ tục chuyển tiền quốc tế. Tuy nhiên, phí quản lý của các quỹ này thường cao hơn so với đầu tư trực tiếp.</p>
<p>Phương án thứ ba dành cho những ai thích sự đơn giản là đầu tư vào các quỹ ETF quốc tế. Ví dụ, VanEck Vietnam ETF (VNM) cho phép nhà đầu tư nước ngoài đầu tư vào Việt Nam, và ngược lại, bạn có thể mua S&P 500 ETF (SPY, VOO) để đầu tư vào 500 công ty lớn nhất nước Mỹ. Đây là cách tiếp cận chi phí thấp và đa dạng hóa cao nhất.</p>

<h2>Lưu ý quan trọng về thuế và pháp lý</h2>
<p>Nhà đầu tư Việt Nam cần lưu ý về nghĩa vụ thuế khi đầu tư quốc tế. Cổ tức từ cổ phiếu Mỹ bị khấu trừ 30% thuế tại nguồn (withholding tax) đối với nhà đầu tư nước ngoài. Tuy nhiên, lợi nhuận từ chênh lệch giá (capital gains) thường không bị đánh thuế tại Mỹ cho nhà đầu tư không cư trú. Bạn nên tư vấn với chuyên gia thuế để hiểu rõ nghĩa vụ thuế tại cả Việt Nam và nước sở tại.</p>
<p>Về mặt pháp lý, Ngân hàng Nhà nước Việt Nam có quy định về chuyển tiền ra nước ngoài cho mục đích đầu tư. Hiện tại, cá nhân Việt Nam được phép chuyển tối đa 50,000 USD mỗi năm cho mục đích tự túc (bao gồm đầu tư cá nhân) thông qua ngân hàng thương mại. Hãy đảm bảo tuân thủ đầy đủ quy định pháp luật và khai báo trung thực với cơ quan thuế.</p>
<p>Rủi ro tỷ giá cũng cần được xem xét kỹ lưỡng. Dù xu hướng dài hạn VND mất giá so với USD có lợi cho nhà đầu tư, trong ngắn hạn, biến động tỷ giá có thể ảnh hưởng đáng kể đến lợi nhuận. Một khoản đầu tư tăng 10% tính bằng USD nhưng nếu VND tăng giá 5% so với USD, lợi nhuận thực chỉ còn khoảng 5% khi quy đổi về tiền Việt.</p>

<h2>Kết luận</h2>
<p>Đầu tư quốc tế là bước tiến quan trọng giúp nhà đầu tư Việt Nam tiếp cận cơ hội toàn cầu, đa dạng hóa danh mục và phòng hộ rủi ro tỷ giá. Với sự phát triển của công nghệ tài chính, việc đầu tư ra nước ngoài ngày càng dễ dàng và tiện lợi hơn. Hãy bắt đầu từ những bước nhỏ, nghiên cứu kỹ và mở rộng tầm nhìn đầu tư ra khỏi biên giới quốc gia.</p>
<h2>Đọc thêm</h2>
<p><a href="/blog/kien-thuc-dau-tu/nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh">So sánh các kênh đầu tư</a> · <a href="/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf">Đầu tư quỹ ETF</a></p>
<p>Khám phá thêm kiến thức đầu tư tại <a href="/">Cách Đầu Tư</a>.</p>`,
    },
];

console.log('🔧 Creating 3 posts (batch 3/3)...\n');
for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const words = p.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const { error } = await s.from('posts').insert({
        ...p,
        is_published: false,
        scheduled_at: schedule[i],
        featured_image: `https://images.unsplash.com/photo-${1639322537228 + i * 2222}-f710d846310a?w=800`,
        reading_time: `${Math.ceil(words / 200)} phút`,
    });
    if (error) console.log(`❌ ${p.slug}: ${error.message}`);
    else console.log(`✅ ${p.slug} → ${schedule[i].substring(5, 16)} (${words} từ)`);
}
console.log('\n🎉 All 9 posts created and scheduled!');
