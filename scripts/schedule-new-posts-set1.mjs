import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const author_id = 'c1300994-49c1-4ca4-bc32-132d7578201a'; // Admin

const createPost = async (p) => {
    const { error } = await s.from('posts').insert({
        ...p,
        author_id,
        is_published: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    });
    if (error) console.log(`❌ Error ${p.slug}:`, error.message);
    else console.log(`✅ Created: ${p.title} (Scheduled: ${p.scheduled_at})`);
};

const posts = [
    {
        title: 'Top 10 các kênh đầu tư tốt nhất Việt Nam 2026',
        slug: 'top-10-cac-kenh-dau-tu-tot-nhat-viet-nam-2026',
        category_id: '31d10229-9735-4f69-a368-08ea7f0550a1',
        excerpt: 'Khám phá 10 kênh đầu tư tài chính sinh lời bền vững nhất năm 2026 tại Việt Nam từ chứng khoán, vàng đến bất động sản và các quỹ mở.',
        focus_keyword: 'các kênh đầu tư tốt nhất Việt Nam 2026',
        scheduled_at: '2026-03-11T08:00:00Z',
        content: `Năm 2026 ghi nhận những bước chuyển mình mạnh mẽ của thị trường tài chính Việt Nam. Với sự ổn định của [kinh tế vĩ mô](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu), nhà đầu tư cá nhân đang đứng trước vô vàn lựa chọn để gia tăng tài sản. Dưới đây là bảng xếp hạng 10 kênh đầu tư tiềm năng nhất.

## 1. Chứng khoán - Kênh tăng trưởng chủ lực
[Đầu tư chứng khoán](/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi) vẫn là kênh dẫn đầu về thanh khoản và tỷ suất sinh lời trong dài hạn. Với sự hỗ trợ của công nghệ AI và hệ thống KRX vận hành mượt mà, thị trường năm 2026 minh bạch hơn bao giờ hết.

## 2. Vàng - Hầm trú ẩn không bao giờ lỗi thời
Trong bối cảnh địa chính trị toàn cầu biến động, [đầu tư vàng](/blog/vang/dau-tu-vang-cho-nguoi-moi-2026-sjc-nhan-tron-vang-tai-khoan) năm 2026 tiếp tục duy trì sức hút như một tấm khiên bảo vệ tài sản khỏi lạm phát.

## 3. Quỹ mở và ETF - Lựa chọn cho người bận rộn
Nếu bạn không có thời gian soi bảng điện, [đầu tư quỹ ETF](/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf) hoặc các [quỹ mở](/blog/kien-thuc-dau-tu/dau-tu-quy-mo-tai-viet-nam-2026) là giải pháp tối ưu nhờ sự quản lý của các chuyên gia hàng đầu.

## 4. Bất động sản vùng ven
Sau giai đoạn đóng băng, bất động sản năm 2026 bắt đầu phục hồi, đặc biệt là các phân khúc nhà ở thực và đất nền có hạ tầng hoàn thiện.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Hướng dẫn đầu tư chứng khoán cho người mới bắt đầu 2026',
        slug: 'huong-dan-dau-tu-chung-khoan-cho-nguoi-moi-viet-nam-2026',
        category_id: '96d5c106-653b-470e-90a7-6875e9a490fd',
        excerpt: 'Mọi điều bạn cần biết để bắt đầu đầu tư chứng khoán năm 2026: Từ cách mở tài khoản, chọn mã cổ phiếu đến chiến lược quản trị rủi ro.',
        focus_keyword: 'hướng dẫn đầu tư chứng khoán cho người mới',
        scheduled_at: '2026-03-12T08:00:00Z',
        content: `Bạn là người mới và đang choáng ngợp trước những biểu đồ xanh đỏ? Đừng lo lắng, hành trình [đầu tư chứng khoán](/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi) năm 2026 dễ dàng hơn bạn nghĩ rất nhiều nhờ quy trình số hóa toàn diện.

## Bước 1: Mở tài khoản chứng khoán online
Sử dụng công nghệ eKYC, bạn có thể [mở tài khoản chứng khoán online 2026](/blog/chung-khoan/huong-dan-mo-tai-khoan-chung-khoan-online-2026) chỉ trong 3 phút mà không cần đến quầy.

## Bước 2: Học cách đọc bảng giá
Bảng giá là ngôn ngữ của thị trường. Hãy tìm hiểu ý nghĩa của các mức giá xanh, đỏ, vàng và tím để hiểu tâm lý đám đông.

## Bước 3: Áp dụng chiến lược DCA
Đừng cố gắng thắng thị trường trong ngày 1 ngày 2. Hãy sử dụng [chiến lược DCA bình quân giá](/blog/kien-thuc-dau-tu/chien-luoc-dca-binh-quan-gia) để tích lũy tài sản bền vững.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Cách đầu tư vàng sinh lời an toàn tại Việt Nam 2026',
        slug: 'cach-dau-tu-vang-o-viet-nam-2026',
        category_id: '49a89c1c-90dc-4d14-9f06-6efc97aec499',
        excerpt: 'Cập nhật cách đầu tư vàng ở Việt Nam năm 2026: So sánh vàng miếng SJC, vàng nhẫn trơn và vàng tài khoản để tối ưu hóa lợi nhuận.',
        focus_keyword: 'cách đầu tư vàng ở Việt Nam 2026',
        scheduled_at: '2026-03-13T08:00:00Z',
        content: `Vàng luôn là tài sản ưu tiên trong tâm lý người Việt. Năm 2026, với sự thay đổi trong chính sách quản lý thị trường vàng, việc đầu tư cần sự nhạy bén và hiểu biết sâu sắc hơn.

## Nên mua vàng miếng hay vàng nhẫn?
[Vàng SJC hay nhẫn trơn](/blog/vang/dau-tu-vang-cho-nguoi-moi-2026-sjc-nhan-tron-vang-tai-khoan) đều có những ưu và nhược điểm riêng. Vàng nhẫn thường có mức chênh lệch với giá thế giới thấp hơn, phù hợp cho mục tiêu tích trữ lâu dài.

## Thời điểm nào nên mua vàng?
Theo dõi các chỉ số về [lạm phát và lãi suất](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu) để tìm điểm vào lệnh hợp lý. Thông thường, vàng sẽ tỏa sáng khi lãi suất thực âm.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    }
];

for (const p of posts) {
    await createPost(p);
}
