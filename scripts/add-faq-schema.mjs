import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const faqSection = `
## Câu hỏi thường gặp

### 1. Tôi nên bắt đầu đầu tư với bao nhiêu tiền?
Bạn có thể bắt đầu với số vốn cực nhỏ, chỉ từ 1 triệu đồng thông qua các quỹ ETF hoặc ứng dụng tích lũy chứng khoán. Quan trọng là sự đều đặn thay vì số tiền lớn ngay lập tức.

### 2. Kênh đầu tư nào an toàn nhất năm 2026?
Vàng và Gửi tiết kiệm ngân hàng vẫn là hai kênh an toàn nhất để bảo toàn vốn. Tuy nhiên, rủi ro thấp thường đi kèm với lợi nhuận không cao.

### 3. Có nên vay tiền để đầu tư không?
Tuyệt đối không nên vay tiền (đặc biệt là vay tín dụng đen hoặc vay lãi suất cao) để đầu tư nếu bạn là người mới. Chỉ nên đầu tư bằng số tiền nhàn rỗi.

### 4. Làm sao để tránh lừa đảo trong đầu tư?
Luôn kiểm tra giấy phép hoạt động của sàn giao dịch, tránh các lời mời chào "cam kết lợi nhuận khủng" và chỉ giao dịch tại các tổ chức uy tín đã được nhà nước cấp phép.
`;

async function addFaq() {
    const { data: post } = await s.from('posts')
        .select('content')
        .eq('slug', 'top-10-cac-kenh-dau-tu-tot-nhat-viet-nam-2026')
        .single();

    if (post) {
        if (post.content.includes('## Câu hỏi thường gặp')) {
            console.log("Bài viết đã có FAQ.");
            return;
        }

        const newContent = post.content + "\n" + faqSection;
        const { error } = await s.from('posts')
            .update({ content: newContent })
            .eq('slug', 'top-10-cac-kenh-dau-tu-tot-nhat-viet-nam-2026');

        if (!error) console.log("✅ Đã thêm FAQ Schema cho bài viết Top 10.");
    }
}

addFaq();
