import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Sign in as admin
const { error: authError } = await supabase.auth.signInWithPassword({
    email: 'admin@cachdautu.com',
    password: 'CachDauTu@2026!'
});
if (authError) { console.log('❌ Đăng nhập thất bại:', authError.message); process.exit(1); }
console.log('✅ Đăng nhập admin thành công\n');

const posts = [
    {
        title: 'Mua Nhà Hay Thuê Nhà 2026: Phân Tích Chi Tiết Giúp Bạn Quyết Định',
        slug: 'mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet',
        excerpt: 'So sánh chi tiết giữa mua nhà và thuê nhà năm 2026, giúp bạn đưa ra quyết định tài chính đúng đắn dựa trên hoàn cảnh cá nhân.',
        category_id: '439e89a0-04db-4c18-a91b-92682428e111', // Bất động sản
        tags: ['bất động sản', 'mua nhà', 'thuê nhà', 'đầu tư nhà đất'],
        reading_time: '12 phút',
        featured_image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
        scheduled_at: '2026-02-23T09:00:00+00:00', // 16:00 VN
        content: `<h2>Mua nhà hay thuê nhà – Bài toán muôn thuở của người trẻ</h2>
<p>Quyết định mua nhà hay thuê nhà là một trong những lựa chọn tài chính quan trọng nhất trong cuộc đời. Năm 2026, với thị trường bất động sản Việt Nam đang có nhiều biến động, câu hỏi này càng trở nên phức tạp hơn bao giờ hết.</p>

<h2>Chi phí thực sự khi mua nhà</h2>
<p>Nhiều người chỉ nhìn vào giá niêm yết mà quên đi rất nhiều chi phí ẩn khi sở hữu bất động sản. Chi phí thực sự bao gồm: tiền trả trước (thường 20-30% giá trị), lãi suất vay ngân hàng, phí công chứng, thuế trước bạ, phí bảo trì hàng tháng, sửa chữa và nâng cấp.</p>
<p>Với một căn hộ 2 tỷ đồng tại TP.HCM, tổng chi phí sở hữu trong 20 năm có thể lên đến 3.5-4 tỷ đồng khi tính cả lãi vay và các khoản phí phát sinh.</p>

<h3>Lãi suất vay mua nhà 2026</h3>
<ul>
<li><strong>Vietcombank:</strong> Ưu đãi 7.5%/năm (2 năm đầu)</li>
<li><strong>Techcombank:</strong> Ưu đãi 8%/năm (3 năm đầu)</li>
<li><strong>VPBank:</strong> Ưu đãi 7.9%/năm (18 tháng đầu)</li>
</ul>

<h2>Ưu điểm và nhược điểm của việc thuê nhà</h2>
<p>Thuê nhà mang lại sự linh hoạt cao. Bạn có thể di chuyển dễ dàng khi thay đổi công việc, không phải lo bảo trì sửa chữa, và quan trọng nhất – bạn có thể đầu tư số tiền chênh lệch vào các kênh sinh lời khác.</p>

<h3>Quy tắc Price-to-Rent Ratio</h3>
<p>Để so sánh, hãy dùng công thức <strong>Price-to-Rent Ratio = Giá nhà / (Tiền thuê hàng tháng × 12)</strong>. Nếu tỷ lệ này dưới 15, mua nhà có lợi hơn. Từ 15-20, tương đương. Trên 20, thuê nhà thường có lợi hơn.</p>
<p>Tại Hà Nội và TP.HCM, tỷ lệ này thường ở mức 25-35, nghĩa là về mặt tài chính thuần túy, thuê nhà và đầu tư số tiền còn lại thường mang lại lợi nhuận cao hơn.</p>

<h2>Khi nào nên mua nhà?</h2>
<p>Bạn nên cân nhắc mua nhà khi có ít nhất 30% giá trị nhà làm tiền trả trước, thu nhập ổn định với khả năng trả góp không quá 30% lương, kế hoạch sinh sống lâu dài tại một khu vực (trên 5 năm), và quỹ dự phòng đủ 6 tháng sinh hoạt sau khi mua nhà.</p>

<h2>Khi nào nên tiếp tục thuê?</h2>
<p>Thuê nhà là lựa chọn thông minh khi bạn chưa ổn định công việc hoặc địa điểm sống, muốn tối ưu hóa dòng tiền đầu tư, thị trường bất động sản đang ở đỉnh giá, hoặc chưa đủ tiền trả trước.</p>

<h2>Chiến lược kết hợp thông minh</h2>
<p>Nhiều chuyên gia tài chính khuyên: <strong>"Thuê nhà ở, mua nhà cho thuê."</strong> Bạn thuê một căn phù hợp nhu cầu ở khu trung tâm, đồng thời mua bất động sản ở khu vực có tiềm năng tăng giá để cho thuê.</p>

<h2>Kết luận</h2>
<p>Không có câu trả lời đúng cho tất cả. Mua nhà hay thuê nhà phụ thuộc vào hoàn cảnh tài chính, mục tiêu cuộc sống, và thị trường tại thời điểm bạn quyết định. Hãy phân tích kỹ và đừng để cảm xúc chi phối quyết định tài chính quan trọng này.</p>`
    },
    {
        title: 'DeFi Là Gì? Hướng Dẫn Tài Chính Phi Tập Trung Cho Người Mới 2026',
        slug: 'defi-la-gi-tai-chinh-phi-tap-trung-2026',
        excerpt: 'Tìm hiểu DeFi từ A-Z: cách hoạt động, cơ hội kiếm lợi nhuận, rủi ro cần biết và những nền tảng DeFi uy tín 2026.',
        category_id: 'b7ced1f1-2dc7-47c7-a3bb-36d66c24cae5', // Crypto
        tags: ['DeFi', 'crypto', 'tài chính phi tập trung', 'blockchain', 'yield farming'],
        reading_time: '14 phút',
        featured_image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
        scheduled_at: '2026-02-23T11:00:00+00:00', // 18:00 VN
        content: `<h2>DeFi – Cuộc cách mạng tài chính của thế kỷ 21</h2>
<p>DeFi (Decentralized Finance) là hệ sinh thái ứng dụng tài chính trên blockchain, cho phép giao dịch, vay mượn, tiết kiệm mà không cần ngân hàng hay tổ chức tài chính truyền thống.</p>

<h2>DeFi hoạt động như thế nào?</h2>
<p>DeFi sử dụng <strong>smart contract</strong> trên blockchain để tự động thực thi giao dịch tài chính. Mọi thứ minh bạch, có thể kiểm chứng, và hoạt động 24/7.</p>

<h3>Các thành phần chính</h3>
<ul>
<li><strong>DEX:</strong> Uniswap, PancakeSwap – swap token trên blockchain</li>
<li><strong>Lending/Borrowing:</strong> Aave, Compound – cho vay crypto</li>
<li><strong>Yield Farming:</strong> Cung cấp thanh khoản để nhận thưởng</li>
<li><strong>Staking:</strong> Khóa token để bảo vệ mạng lưới</li>
<li><strong>Stablecoin:</strong> USDT, USDC, DAI</li>
</ul>

<h2>Cơ hội kiếm lợi nhuận từ DeFi</h2>
<h3>1. Cung cấp thanh khoản</h3>
<p>Cung cấp cặp token vào pool và nhận phí giao dịch. APY 5-30%/năm tùy pool.</p>

<h3>2. Lending</h3>
<p>Gửi crypto vào Aave để nhận lãi. APY stablecoin 3-8%/năm.</p>

<h3>3. Staking</h3>
<p>ETH staking cho lợi nhuận khoảng 4-5%/năm, ổn định.</p>

<h2>5 rủi ro lớn nhất khi tham gia DeFi</h2>
<ol>
<li><strong>Smart contract risk:</strong> Bug trong code có thể dẫn đến mất tiền</li>
<li><strong>Impermanent Loss:</strong> Tổn thất tạm thời khi cung cấp thanh khoản</li>
<li><strong>Rug pull/Scam:</strong> Dự án lừa đảo, rút thanh khoản bỏ chạy</li>
<li><strong>Rủi ro thị trường:</strong> Giá crypto biến động mạnh</li>
<li><strong>Quy định pháp lý:</strong> Chính phủ có thể thay đổi luật bất cứ lúc nào</li>
</ol>

<h2>Hướng dẫn bắt đầu DeFi an toàn</h2>
<ol>
<li>Tạo ví MetaMask hoặc Trust Wallet</li>
<li>Bắt đầu với số tiền nhỏ (100-500 USD)</li>
<li>Chọn nền tảng uy tín đã audit (Aave, Uniswap, Lido)</li>
<li>Bắt đầu với staking ETH hoặc lending stablecoin</li>
<li>Học cách kiểm tra qua DeFiLlama</li>
</ol>

<h2>Top 5 nền tảng DeFi uy tín 2026</h2>
<table>
<tr><th>Nền tảng</th><th>Chức năng</th><th>TVL</th><th>An toàn</th></tr>
<tr><td>Aave</td><td>Lending</td><td>$15B+</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Uniswap</td><td>DEX</td><td>$8B+</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Lido</td><td>Staking</td><td>$20B+</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>MakerDAO</td><td>Stablecoin</td><td>$10B+</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>Curve</td><td>DEX</td><td>$5B+</td><td>⭐⭐⭐⭐</td></tr>
</table>

<h2>Kết luận</h2>
<p>DeFi là tương lai của tài chính nhưng vẫn đang phát triển. Hãy bắt đầu từ nền tảng uy tín, đầu tư số tiền bạn có thể chấp nhận mất, và không ngừng học hỏi.</p>`
    },
    {
        title: 'Kinh Nghiệm Đầu Tư Từ Warren Buffett: 10 Nguyên Tắc Vàng Bất Biến',
        slug: 'kinh-nghiem-dau-tu-warren-buffett-10-nguyen-tac',
        excerpt: 'Khám phá 10 nguyên tắc đầu tư bất biến từ Warren Buffett và cách áp dụng vào thị trường Việt Nam.',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f', // Kinh nghiệm
        tags: ['Warren Buffett', 'kinh nghiệm đầu tư', 'đầu tư giá trị', 'value investing'],
        reading_time: '15 phút',
        featured_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
        scheduled_at: '2026-02-23T13:00:00+00:00', // 20:00 VN
        content: `<h2>Warren Buffett – "Nhà tiên tri xứ Omaha"</h2>
<p>Warren Buffett, CEO của Berkshire Hathaway, là nhà đầu tư vĩ đại nhất mọi thời đại. Ông biến 10.000 USD thành khối tài sản hơn 130 tỷ USD. Dưới đây là 10 nguyên tắc vàng đã giúp ông thành công suốt 60 năm.</p>

<h2>Nguyên tắc 1: Đầu tư vào những gì bạn hiểu</h2>
<p>Buffett gọi đây là <strong>"Vòng tròn năng lực"</strong>. Ông chỉ đầu tư vào doanh nghiệp mà ông hiểu rõ.</p>
<p><em>"Rủi ro đến từ việc bạn không biết mình đang làm gì."</em></p>

<h2>Nguyên tắc 2: Tìm doanh nghiệp có "hào nước" (Economic Moat)</h2>
<p>Buffett yêu thích doanh nghiệp có lợi thế cạnh tranh bền vững. Ví dụ tại Việt Nam:</p>
<ul>
<li><strong>Thương hiệu mạnh:</strong> Vinamilk, Sabeco</li>
<li><strong>Chi phí chuyển đổi cao:</strong> VCB, BID</li>
<li><strong>Hiệu ứng mạng lưới:</strong> FPT, Viettel</li>
<li><strong>Lợi thế quy mô:</strong> Hòa Phát, Masan</li>
</ul>

<h2>Nguyên tắc 3: Mua khi giá hời (Margin of Safety)</h2>
<p>Luôn mua cổ phiếu ở mức giá thấp hơn giá trị nội tại để tạo vùng an toàn.</p>

<h2>Nguyên tắc 4: Nghĩ dài hạn</h2>
<p><em>"Khoảng thời gian nắm giữ yêu thích của tôi là mãi mãi."</em></p>
<p>Buffett giữ Coca-Cola từ 1988, American Express từ 1993, Apple từ 2016.</p>

<h2>Nguyên tắc 5: Sợ khi người khác tham lam, tham lam khi người khác sợ</h2>
<p>Trong khủng hoảng 2008, ông đầu tư 5 tỷ USD vào Goldman Sachs và kiếm hơn 3 tỷ lợi nhuận. Khi VN-Index giảm mạnh, đó thường là cơ hội mua vào.</p>

<h2>Nguyên tắc 6: Không bao giờ mất tiền</h2>
<p><em>"Quy tắc #1: Không mất tiền. Quy tắc #2: Không quên quy tắc #1."</em></p>
<p>Bảo toàn vốn quan trọng hơn tìm kiếm lợi nhuận. Mất 50% vốn cần lãi 100% để hòa.</p>

<h2>Nguyên tắc 7: Đọc, đọc, và đọc</h2>
<p>Buffett dành 80% thời gian mỗi ngày để đọc – khoảng 500 trang. <em>"Kiến thức tích lũy như lãi kép."</em></p>

<h2>Nguyên tắc 8: Quản trị là yếu tố then chốt</h2>
<p>Buffett đầu tư vào con người, không chỉ con số. Dấu hiệu quản trị tốt: CEO sở hữu nhiều cổ phiếu, chia cổ tức ổn định, ROE trên 15% nhiều năm.</p>

<h2>Nguyên tắc 9: Đơn giản hóa mọi thứ</h2>
<p>Không dùng đòn bẩy, không short, không derivatives phức tạp. Nếu không giải thích được cho trẻ 10 tuổi, đừng đầu tư.</p>

<h2>Nguyên tắc 10: Kiên nhẫn là siêu năng lực</h2>
<p><em>"Thị trường chứng khoán chuyển tiền từ người thiếu kiên nhẫn sang người kiên nhẫn."</em></p>

<h2>Áp dụng tại Việt Nam</h2>
<p>Chọn 5-10 doanh nghiệp có "hào nước" trên HOSE, nghiên cứu kỹ báo cáo tài chính 3-5 năm, và kiên nhẫn chờ mua ở mức giá hợp lý.</p>

<h2>Kết luận</h2>
<p>10 nguyên tắc của Buffett không phải bí mật. Điều khó nhất là kiên nhẫn thực hành qua nhiều thập kỷ. Đầu tư là marathon, không phải sprint.</p>`
    }
];

for (const post of posts) {
    const { data, error } = await supabase.from('posts').insert({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category_id: post.category_id,
        tags: post.tags,
        reading_time: post.reading_time,
        featured_image: post.featured_image,
        scheduled_at: post.scheduled_at,
        is_published: false
    }).select('id, title, scheduled_at');

    if (error) {
        console.error('❌', post.title.substring(0, 40), error.message);
    } else {
        const vn = new Date(post.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`✅ ${vn} | ${post.title}`);
    }
}
