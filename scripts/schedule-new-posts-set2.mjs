import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const createPost = async (p) => {
    const { error } = await s.from('posts').insert({
        ...p,
        is_published: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    });
    if (error) console.log(`❌ Error ${p.slug}:`, error.message);
    else console.log(`✅ Created: ${p.title} (Scheduled: ${p.scheduled_at})`);
};

const posts = [
    {
        title: 'Các bước mở tài khoản chứng khoán Việt Nam 2026 nhanh nhất',
        slug: 'cac-buoc-mo-tai-khoan-chung-khoan-viet-nam-2026',
        category_id: '96d5c106-653b-470e-90a7-6875e9a490fd',
        excerpt: 'Hướng dẫn chi tiết quy trình 5 bước mở tài khoản chứng khoán 2026 qua eKYC. So sánh các công ty chứng khoán có phí giao dịch thấp nhất.',
        focus_keyword: 'các bước mở tài khoản chứng khoán Việt Nam 2026',
        scheduled_at: '2026-03-14T08:00:00Z',
        content: `Mở tài khoản là bước chân đầu tiên để tham gia vào thị trường. Năm 2026, quy trình này đã được tối giản hóa tối đa.

## Các bước thực hiện
1. Chọn công ty chứng khoán uy tín.
2. Tải ứng dụng và đăng ký thông tin.
3. Chụp ảnh CCCD và xác thực khuôn mặt (eKYC).
4. Ký hợp đồng điện tử.
5. Nạp tiền và bắt đầu giao dịch.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Sử dụng tài khoản giao dịch demo: Luyện tập trước khi đầu tư thật',
        slug: 'tai-khoan-giao-dich-demo-viet-nam-2026',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        excerpt: 'Tại sao bạn nên bắt đầu bằng tài khoản demo? Top các sàn cung cấp tài khoản demo chứng khoán và forex uy tín nhất tại Việt Nam.',
        focus_keyword: 'tài khoản giao dịch demo Việt Nam',
        scheduled_at: '2026-03-15T08:00:00Z',
        content: `Đừng mang tiền thật ra để thử nghiệm khi bạn chưa có kinh nghiệm. [Tài khoản demo](/blog/kinh-nghiem/giao-dich-demo) là môi trường hoàn hảo để rèn luyện tâm lý.

## Lợi ích của tài khoản Demo
- Làm quen với giao diện phần mềm.
- Thử nghiệm các chiến lược [phân tích kỹ thuật](/blog/forex/phan-tich-ky-thuat-forex-5-mo-hinh-nen-co-ban).
- Không lo sợ mất tiền thật.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Top các quỹ đầu tư (Quỹ mở) tốt nhất Việt Nam 2026',
        slug: 'quy-dau-tu-tot-nhat-viet-nam-2026',
        category_id: '8cf5a4ca-c2cb-4e27-9bcf-9df51e5041dc',
        excerpt: 'Đánh giá tỷ suất sinh lời của các quỹ mở cổ phiếu và trái phiếu hàng đầu Việt Nam 2026. Tại sao nên chọn quỹ mở thay vì gửi tiết kiệm?',
        focus_keyword: 'quỹ đầu tư tốt nhất Việt Nam 2026',
        scheduled_at: '2026-03-16T08:00:00Z',
        content: `Quỹ mở là kênh tích sản lý tưởng cho những người không chuyên. Năm 2026, các quỹ từ Dragon Capital, SSIAM và VinaCapital vẫn giữ vững vị thế.

## Tại sao chọn Quỹ mở?
- Được quản lý bởi đội ngũ chuyên gia.
- Đa dạng hóa danh mục đầu tư.
- [Vốn bắt đầu thấp](/blog/kien-thuc-dau-tu/bao-nhieu-tien-thi-nen-bat-dau-dau-tu) chỉ từ 1 triệu đồng.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Các quỹ ETF tốt nhất Việt Nam 2026: Lựa chọn cho tương lai',
        slug: 'cac-quy-etf-tot-nhat-viet-nam-2026',
        category_id: '8cf5a4ca-c2cb-4e27-9bcf-9df51e5041dc',
        excerpt: 'So sánh các quỹ ETF bám đuổi VN30, VN-Diamond và VN-Finlead. Đâu là quỹ ETF có phí quản lý thấp nhất và hiệu quả cao nhất 2026.',
        focus_keyword: 'các quỹ ETF tốt nhất Việt Nam 2026',
        scheduled_at: '2026-03-17T08:00:00Z',
        content: `[Đầu tư ETF](/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf) đang trở thành xu hướng toàn cầu. Tại Việt Nam, các quỹ ETF Diamond và VN30 luôn thu hút dòng tiền ngoại.

## Top các quỹ ETF nổi bật
1. Diamond ETF (FUEVFVND)
2. VN30 ETF (E1VFVN30)
3. Finlead ETF (FUESSVFL)

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Hướng dẫn giao dịch chứng khoán demo cực đơn giản',
        slug: 'giao-dich-chung-khoan-demo-2026',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        excerpt: 'Từng bước thực hiện giao dịch mua bán chứng khoán ảo trên các nền tảng phổ biến. Cách chuyển từ giao dịch demo sang tài khoản thật.',
        focus_keyword: 'giao dịch chứng khoán demo',
        scheduled_at: '2026-03-18T08:00:00Z',
        content: `Bạn muốn thử cảm giác "đặt lệnh" mà không mất vốn? [Giao dịch demo](/blog/kinh-nghiem/tai-khoan-demo) là câu trả lời.

## Các sàn hỗ trợ giao dịch demo tốt nhất
- VPS SmartEasy.
- SSI iBoard (Tính năng ảo).
- Pinetree Trading.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Đầu tư tài chính Việt Nam 2026: Xu hướng và Cơ hội',
        slug: 'dau-tu-tai-chinh-viet-nam-2026',
        category_id: '31d10229-9735-4f69-a368-08ea7f0550a1',
        excerpt: 'Phân tích thị trường tài chính Việt Nam năm 2026. Những cơ hội vàng từ làn sóng nâng hạng thị trường và sự bùng nổ của cổ phiếu công nghệ.',
        focus_keyword: 'đầu tư tài chính Việt Nam 2026',
        scheduled_at: '2026-03-19T08:00:00Z',
        content: `Thị trường tài chính năm 2026 đang ở giai đoạn hấp dẫn nhất thập kỷ. Việc nâng hạng thị trường từ Cận biên lên Mới nổi (Emerging Markets) đang gần hơn bao giờ hết.

## Những lĩnh vực tiềm năng
- Công nghệ và AI.
- [Cổ phiếu ngân hàng](/blog/chung-khoan/phan-tich-co-ban-chung-khoan-phan-mem).
- Bất động sản khu công nghiệp.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'So sánh Top 10 App đầu tư chứng khoán tại Việt Nam 2026',
        slug: 'so-sanh-app-dau-tu-chung-khoan-viet-nam-2026',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        excerpt: 'Đánh giá ứng dụng đầu tư chứng khoán của SSI, VPS, TCBS, DNSE... Đâu là app có giao diện thân thiện và tính năng hỗ trợ nhà đầu tư tốt nhất?',
        focus_keyword: 'app đầu tư chứng khoán Việt Nam',
        scheduled_at: '2026-03-20T08:00:00Z',
        content: `Lựa chọn một [ứng dụng đầu tư](/blog/chung-khoan/top-app-dau-tu-chung-khoan-tot-nhat-2026) phù hợp giúp bạn nâng cao hiệu suất giao dịch đáng kể.

## Tiêu chí đánh giá
- Phí giao dịch (Zero Fee).
- Tốc độ khớp lệnh.
- Hệ thống báo cáo phân tích.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    }
];

for (const p of posts) {
    await createPost(p);
}
