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
    if (error) console.log(`❌ Lỗi ${p.slug}:`, error.message);
    else console.log(`✅ Đã lên lịch: ${p.title} (${p.scheduled_at})`);
};

const posts = [
    {
        title: 'Phân tích tâm lý nhà đầu tư: Tại sao chúng ta hay "đu đỉnh"?',
        slug: 'tam-ly-nha-dau-tu-du-dinh-cach-tranh',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        excerpt: 'Giải mã tâm lý FOMO và hiệu ứng bầy đàn trong đầu tư. Tại sao nhà đầu tư cá nhân thường mua ở đỉnh và bán ở đáy, và làm thế nào để thoát khỏi cái bẫy này.',
        focus_keyword: 'tâm lý nhà đầu tư đu đỉnh',
        scheduled_at: '2026-03-24T08:00:00Z',
        content: `Tâm lý là kẻ thù số một của [nhà đầu tư F0](/blog/kinh-nghiem/sai-lam-nha-dau-tu-f0-va-cach-tranh-2026). Khi thị trường sôi động, mọi người đều nói về lợi nhuận, đó là lúc nguy hiểm nhất.
        
## Các bẫy tâm lý phổ biến
- FOMO (Sợ bỏ lỡ cơ hội).
- Hiệu ứng mỏ neo.
- Tâm lý bầy đàn (Herding).

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Tín dụng cá nhân: Cách sử dụng thẻ tín dụng để gia tăng tài sản',
        slug: 'cach-su-dung-the-tin-dung-thong-minh-2026',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Thẻ tín dụng là con dao hai lưỡi. Hướng dẫn cách tận dụng thời gian miễn lãi và các chương trình hoàn tiền để tối ưu hóa dòng tiền cá nhân.',
        focus_keyword: 'sử dụng thẻ tín dụng thông minh',
        scheduled_at: '2026-04-01T08:00:00Z',
        content: `Thẻ tín dụng không phải là thu nhập thêm. Nếu biết cách, bạn có thể [quản lý tài chính gia đình](/blog/tai-chinh-ca-nhan/quan-ly-chi-tieu-gia-dinh-quy-tac-6-tui) hiệu quả hơn nhờ nó.
        
## Nguyên tắc sử dụng
- Luôn thanh toán đúng hạn 100%.
- Tận dụng hoàn tiền (cashback).
- Không bao giờ rút tiền mặt từ thẻ tín dụng.

---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Đầu tư cho con cái: Quỹ giáo dục hay Bảo hiểm liên kết đơn vị?',
        slug: 'dau-tu-cho-con-cai-quy-giao-duc-bao-hiem',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Xây dựng tương lai cho con từ hôm nay. So sánh các hình thức tích lũy giáo dục phổ biến và lộ trình chuẩn bị tài chính cho con đi du học.',
        focus_keyword: 'đầu tư cho con cái',
        scheduled_at: '2026-04-02T08:00:00Z',
        content: `Khoản đầu tư tốt nhất là giáo dục. Hãy bắt đầu từ khi con còn nhỏ để tận dụng [sức mạnh của lãi kép](/blog/kien-thuc-dau-tu/lai-kep-la-gi-suc-manh-lai-kep-dau-tu).
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Cách định giá cổ phiếu đơn giản: Phương pháp P/E và P/B cho người mới',
        slug: 'cach-dinh-gia-co-phieu-pe-pb-2026',
        category_id: '96d5c106-653b-470e-90a7-6875e9a490fd',
        excerpt: 'Hướng dẫn cách tính và ý nghĩa của chỉ số P/E, P/B trong chứng khoán. Cách nhận biết cổ phiếu đang rẻ hay đắt so với giá trị thực.',
        focus_keyword: 'cách định giá cổ phiếu',
        scheduled_at: '2026-04-03T08:00:00Z',
        content: `Giá cả là cái bạn trả, giá trị là cái bạn nhận được. Học cách [đọc báo cáo tài chính](/blog/chung-khoan/huong-dan-doc-bao-cao-tai-chinh-doanh-nghiep) để tìm ra các chỉ số này.
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Bất động sản công nghiệp 2026: Làn sóng đầu tư mới tại Việt Nam',
        slug: 'bat-dong-san-cong-nghiep-2026-xu-huong',
        category_id: '439e89a0-04db-4c18-a91b-92682428e111',
        excerpt: 'Tại sao BĐS công nghiệp lại trở thành tâm điểm năm 2026? Phân tích tiềm năng từ các khu kinh tế trọng điểm và dòng vốn FDI.',
        focus_keyword: 'bất động sản công nghiệp 2026',
        scheduled_at: '2026-04-04T08:00:00Z',
        content: `Việt Nam đang khẳng định vị thế công xưởng thế giới. Đây là cơ hội cho các nhà đầu tư [bất động sản](/blog/bat-dong-san/dau-tu-bat-dong-san-2026-uu-nhuoc-diem).
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Sổ tiết kiệm vs Chứng chỉ tiền gửi: Lựa chọn nào tối ưu năm 2026?',
        slug: 'so-tiet-kiem-vs-chung-chi-tien-gui-2026',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'So sánh tính thanh khoản và lãi suất giữa sổ tiết kiệm truyền thống và chứng chỉ tiền gửi (CD). Kênh nào an toàn và sinh lời tốt hơn cho tiền nhàn rỗi?',
        focus_keyword: 'so sánh sổ tiết kiệm và chứng chỉ tiền gửi',
        scheduled_at: '2026-04-05T08:00:00Z',
        content: `Tiền mặt là vua trong giai đoạn thị trường biến động. Hãy chọn [kênh đầu tư an toàn](/blog/tai-chinh-ca-nhan/top-cac-kenh-dau-tu-an-toan-nhat-2026) để bảo toàn vốn.
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Đọc vị báo cáo tài chính: 3 chỉ số "biết nói" về sức khỏe doanh nghiệp',
        slug: 'doc-vi-bao-cao-tai-chinh-3-chi-so-quan-trong',
        category_id: '96d5c106-653b-470e-90a7-6875e9a490fd',
        excerpt: 'Không cần là kế toán viên vẫn có thể hiểu doanh nghiệp. Tập trung vào dòng tiền thuần, nợ vay và biên lợi nhuận để tránh các doanh nghiệp ảo.',
        focus_keyword: 'cách đọc báo cáo tài chính nhanh',
        scheduled_at: '2026-04-06T08:00:00Z',
        content: `Báo cáo tài chính là tấm gương phản chiếu hoạt động kinh doanh. Hãy cảnh giác với các [sai lầm nhà đầu tư F0](/blog/kinh-nghiem/sai-lam-nha-dau-tu-f0-va-cach-tranh-2026) khi chỉ nhìn vào lợi nhuận đột biến.
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Quỹ hưu trí tự nguyện: Tương lai an nhàn khi về già cho người trẻ',
        slug: 'quy-huu-tri-tu-nguyen-viet-nam-2026',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Tại sao bạn không nên chỉ dựa vào BHXH? Tìm hiểu về các quỹ hưu trí tự nguyện tại Việt Nam và cách tích lũy để có tuổi già tự do tài chính.',
        focus_keyword: 'quỹ hưu trí tự nguyện',
        scheduled_at: '2026-04-07T08:00:00Z',
        content: `Nghỉ hưu là một trạng thái tài chính, không phải là độ tuổi. Bắt đầu [lộ trình FIRE](/blog/tai-chinh-ca-nhan/lo-trinh-fire-nghi-huu-som-viet-nam-2026) ngay hôm nay.
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Đầu tư vào chính mình: Khoản đầu tư có lợi nhuận cao nhất mọi thời đại',
        slug: 'dau-tu-vao-chinh-minh-loi-nhuan-cao-nhat',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        excerpt: 'Warren Buffett từng nói: "Khoản đầu tư tốt nhất bạn có thể thực hiện là đầu tư vào bản thân mình". Tại sao kỹ năng và kiến thức lại sinh lời hơn cả chứng khoán.',
        focus_keyword: 'đầu tư vào chính mình',
        scheduled_at: '2026-04-08T08:00:00Z',
        content: `Thị trường có thể sụp đổ, nhưng kiến thức của bạn thì không. Rèn luyện [thói quen tài chính tốt](/blog/kinh-nghiem/thoi-quen-tai-chinh-tot-can-ren-luyen) là bước đầu tiên.
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Phân tích kỹ thuật: Mô hình nến Nhật căn bản cho người mới bắt đầu',
        slug: 'phan-tich-ky-thuat-mo-hinh-nen-nhat-2026',
        category_id: '96d5c106-653b-470e-90a7-6875e9a490fd',
        excerpt: 'Hướng dẫn đọc hiểu các mẫu nến đảo chiều và tiếp diễn. Bí quyết dự báo xu hướng giá ngắn hạn thông qua biểu đồ nến Nhật.',
        focus_keyword: 'mô hình nến Nhật căn bản',
        scheduled_at: '2026-04-09T08:00:00Z',
        content: `Biểu đồ nến là ngôn ngữ của thị trường. Hãy kết hợp nó với [chiến lược DCA](/blog/chung-khoan/chi-tiet-chien-luoc-dca) để tối ưu điểm mua.
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    },
    {
        title: 'Xây dựng quỹ dự phòng khẩn cấp: Bao nhiêu là đủ và gửi ở đâu?',
        slug: 'xay-dung-quy-du-phong-khan-cap-2026',
        category_id: '0a381b9b-e2af-4762-85d9-b8ff8c231b31',
        excerpt: 'Quỹ dự phòng là "lá chắn" bảo vệ bạn trước những cú sốc cuộc đời. Hướng dẫn cách tính toán số tiền cần thiết và nơi lưu trữ quỹ an toàn nhất.',
        focus_keyword: 'quỹ dự phòng khẩn cấp',
        scheduled_at: '2026-04-10T08:00:00Z',
        content: `Đừng bao giờ bắt đầu đầu tư nếu chưa có quỹ dự phòng. Đây là nền tảng của [tài chính cá nhân](/blog/tai-chinh-ca-nhan/quy-tac-50-30-20-quan-ly-tai-chinh-ca-nhan) bền vững.
        
---
*(Nội dung còn tiếp - Bạn có thể chỉnh sửa trong Admin)*`
    }
];

for (const p of posts) {
    await createPost(p);
}
