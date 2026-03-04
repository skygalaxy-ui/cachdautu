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
        title: 'Cách xem bảng giá chứng khoán và đọc lệnh như chuyên gia',
        slug: 'cach-xem-bang-gia-chung-khoan-2026',
        category_id: '96d5c106-653b-470e-90a7-6875e9a490fd',
        excerpt: 'Hướng dẫn cho người mới cách đọc bảng giá chứng khoán HOSE, HNX. Giải mã các thuật ngữ giá khớp lệnh, khối lượng dư mua dư bán cực dễ hiểu.',
        focus_keyword: 'cách đọc bảng giá chứng khoán',
        scheduled_at: '2026-03-21T08:00:00Z',
        content: `Điều đầu tiên khi nhìn vào [bảng giá chứng khoán](/blog/chung-khoan/huong-dan-mo-tai-khoan-chung-khoan-online-2026) chính là sự hoa mắt. Bài viết này sẽ giúp bạn làm chủ nó.

## Các cột quan trọng
- Giá tham chiếu: Giá đóng cửa của ngày hôm trước.
- Giá trần/sàn: Biên độ cho phép trong ngày.
- Bố cục của bảng giá (HOSE/HNX).

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Bất động sản 2026: Có nên mua nhà ngay lúc này?',
        slug: 'bat-dong-san-2026-co-nen-mua-nha',
        category_id: '439e89a0-04db-4c18-a91b-92682428e111',
        excerpt: 'Phân tích thị trường bất động sản Việt Nam năm 2026. Lời khuyên cho những cặp vợ chồng trẻ đang có ý định mua nhà trả góp.',
        focus_keyword: 'bất động sản 2026 có nên mua',
        scheduled_at: '2026-03-22T08:00:00Z',
        content: `Nhu cầu an cư luôn là ưu tiên hàng đầu. Tuy nhiên, bất động sản năm 2026 liệu có còn là [kênh đầu tư sinh lời tốt nhất](/blog/kien-thuc-dau-tu/top-10-cac-kenh-dau-tu-tot-nhat-viet-nam-2026)?

## Lời khuyên cho người mua nhà lần đầu
- Tính toán tỷ lệ nợ vay.
- Kiểm tra tính pháp lý dự án.
- Tận dụng đòn bẩy tài chính thông minh.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Phân bổ danh mục đầu tư theo quy tắc 100 trừ độ tuổi',
        slug: 'phan-bo-danh-muc-dau-tu-quy-tac-100',
        category_id: '31d10229-9735-4f69-a368-08ea7f0550a1',
        excerpt: 'Hướng dẫn áp dụng quy tắc 100 trong quản lý rủi ro đầu tư. Cách chia tỷ lệ phần trăm vốn vào cổ phiếu, vàng và tiết kiệm theo độ tuổi.',
        focus_keyword: 'phân bổ danh mục đầu tư',
        scheduled_at: '2026-03-23T08:00:00Z',
        content: `Bí quyết để [đạt tự do tài chính](/blog/tai-chinh-ca-nhan/fire-movement-nghi-huoc-som-tuoi-40) chính là sự cân bằng. Quy tắc "100 trừ độ tuổi" là công cụ đơn giản mà hiệu quả nhất thế giới.

## Cách tính toán
Tỷ trọng cổ phiếu = (100 - Số tuổi hiện tại)%. Ví dụ, nếu bạn 25 tuổi, hãy để 75% vốn vào [ETF/Cổ phiếu](/blog/chung-khoan/dau-tu-chung-khoan-cho-nguoi-moi).

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Đầu tư Crypto: Bitcoin hay Altcoin cho người mới?',
        slug: 'dau-tu-crypto-bitcoin-hay-altcoin-2026',
        category_id: 'b7ced1f1-2dc7-47c7-a3bb-36d66c24cae5',
        excerpt: 'So sánh cơ hội và rủi ro giữa Bitcoin và các loại Altcoin năm 2026. Hướng dẫn lập danh mục đầu tư Crypto an toàn dài hạn.',
        focus_keyword: 'đầu tư Crypto cho người mới',
        scheduled_at: '2026-03-24T08:00:00Z',
        content: `Thế giới tiền mã hóa không chỉ có màu hồng của những lần tăng giá x10. Hãy tìm hiểu [Altcoin là gì](/blog/kien-thuc-dau-tu/altcoin-la-gi-co-hoi-rui-ro-dau-tu-2026) trước khi xuống tiền.

## Chiến lược "Hạt nhân"
Hãy tập trung vào Bitcoin và Ethereum làm lõi danh mục, sau đó dành phần nhỏ cho các coin tiềm năng AI và hạ tầng.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Bí quyết quản lý chi tiêu gia đình bằng quy tắc 6 cái túi',
        slug: 'quan-ly-chi-tieu-gia-dinh-quy-tac-6-tui',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Tại sao các gia đình triệu phú lại áp dụng quy tắc 6 cái túi? Cách phân chia thu nhập để vừa tiết kiệm vừa tận hưởng cuộc sống.',
        focus_keyword: 'quản lý chi tiêu gia đình',
        scheduled_at: '2026-03-25T08:00:00Z',
        content: `Quản lý tiền quan trọng hơn là kiếm tiền. Quy tắc "6 cái túi" của T. Harv Eker vẫn là một [phương pháp quản lý tài chính cá nhân](/blog/tai-chinh-ca-nhan/quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan) vĩ đại nhất.

## 6 cái túi bao gồm:
1. Nhu cầu thiết yếu (55%).
2. Đầu tư tài chính (10%).
3. Tiết kiệm dài hạn (10%).
4. Giáo dục (10%).
5. Hưởng thụ (10%).
6. Từ thiện (5%).

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Kinh nghiệm chọn cổ phiếu giá trị cho người bận rộn',
        slug: 'kinh-nghiem-chon-co-phieu-gia-tri-2026',
        category_id: '96d5c106-653b-470e-90a7-6875e9a490fd',
        excerpt: 'Làm thế nào để tìm ra cổ phiếu "vàng" giữa rừng 2000 mã? Học phương pháp chọn cổ phiếu từ các nhà đầu tư giá trị như Warren Buffett.',
        focus_keyword: 'chọn cổ phiếu giá trị',
        scheduled_at: '2026-03-26T08:00:00Z',
        content: `Đầu tư giá trị là việc bạn mua một đồng với giá 50 xu. Trong năm 2026, các phần mềm [phân tích cơ bản](/blog/chung-khoan/phan-tich-co-ban-chung-khoan-phan-mem) hỗ trợ bạn lọc nhanh các mã rẻ một cách phi lý.

## Các tiêu chí cơ bản:
- P/E và P/B thấp hơn mặt bằng thị trường.
- Tỷ lệ chi trả [cổ tức tiền mặt](/blog/chung-khoan/dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong) đều đặn.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Bảo hiểm nhân thọ: Nên mua loại nào để bảo vệ tài sản?',
        slug: 'bao-hiem-nhan-tho-nen-mua-loai-nao-2026',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Phân tích sự khác biệt giữa bảo hiểm truyền thống và bảo hiểm liên kết đầu tư (ILP). Lời khuyên cho những người muốn vừa bảo vệ vừa sinh lời.',
        focus_keyword: 'mua bảo hiểm nhân thọ loại nào tốt',
        scheduled_at: '2026-03-27T08:00:00Z',
        content: `Bảo hiểm là phương án dự phòng khi mọi kế hoạch thất bại. Năm 2026, [bảo hiểm nhân thọ](/blog/kien-thuc-dau-tu/bao-hiem-nhan-tho-ba-co-nen-mua) đã hướng tới sự minh bạch và bảo vệ thực chất hơn.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Dạy con về tiền bạc: 5 bài học tài chính từ tuổi thơ',
        slug: 'day-con-ve-tien-5-bai-hoc-tai-chinh-2026',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Gia tài lớn nhất cho con chính là định duy tài chính. Cách giúp trẻ hiểu về kiếm tiền, tiết kiệm và cho đi từ khi còn nhỏ.',
        focus_keyword: 'dạy con về tiền bạc',
        scheduled_at: '2026-03-28T08:00:00Z',
        content: `Chỉ số tài chính FQ cũng quan trọng như IQ và EQ. Hãy dạy con bài học về [lãi kép](/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu) từ một hạt đậu.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Lộ trình nghỉ hưu sớm FIRE tại Việt Nam năm 2026',
        slug: 'lo-trinh-fire-nghi-huu-som-viet-nam-2026',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Bạn cần bao nhiêu tiền để nghỉ hưu tại Việt Nam? Lộ trình 5 bước thực hiện phong trào FIRE từ khi còn 20 tuổi đến năm 40 tuổi.',
        focus_keyword: 'nghỉ hưu sớm FIRE Việt Nam',
        scheduled_at: '2026-03-29T08:00:00Z',
        content: `Nghỉ hưu sớm không có nghĩa là không làm gì, nó có nghĩa là bạn có quyền lựa chọn điều mình thích. [Phong trào FIRE](/blog/tai-chinh-ca-nhan/fire-movement-nghi-huoc-som-tuoi-40) đang trở nên dễ dàng hơn nhờ thu nhập thụ động online.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Các sai lầm kinh điển của nhà đầu tư F0 và cách tránh',
        slug: 'sai-lam-nha-dau-tu-f0-va-cach-tranh-2026',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        excerpt: 'Đừng để mất tiền vì những lỗi ngớ ngẩn. 10 bài học xương máu cho người mới tham gia thị trường tài chính nạp học phí ít hơn.',
        focus_keyword: 'sai lầm nhà đầu tư F0',
        scheduled_at: '2026-03-30T08:00:00Z',
        content: `Hầu hết nhà đầu tư mới đều mắc kẹt ở tâm lý muốn làm giàu nhanh. Luôn đặt câu hỏi: "Nếu sai, mình sẽ mất bao nhiêu?" thay vì chỉ nghĩ đến lợi nhuận. Hãy chú ý đến [quản lý rủi ro](/blog/kien-thuc-dau-tu/quan-ly-roi-ro-danh-muc-dau-tu-hieu-qua).

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Tổng kết thị trường tài chính Q1/2026 và dự báo Q2',
        slug: 'tong-ket-thi-truong-tai-chinh-q1-2026-du-bao-q2',
        category_id: '31d10229-9735-4f69-a368-08ea7f0550a1',
        excerpt: 'Báo cáo chi tiết về tình hình kinh tế, chứng khoán và vàng trong quý 1 năm 2026. Những triển vọng đầu tư không thể bỏ lỡ trong quý tiếp theo.',
        focus_keyword: 'tổng kết thị trường tài chính 2026',
        scheduled_at: '2026-03-31T08:00:00Z',
        content: `Chúng ta vừa đi qua 3 tháng đầu năm đầy sôi động của năm 2026. Một quý kỉ lục về [thanh khoản và điểm số](/blog/kien-thuc-dau-tu/kinh-te-vi-mo-anh-huong-dau-tu).

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    }
];

for (const p of posts) {
    await createPost(p);
}
