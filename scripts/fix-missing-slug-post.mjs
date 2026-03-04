import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const slug = 'dong-hanh-cung-khoan-dau-tu-cua-ban-trong-mot-thi-truong-day-bien-dong';

async function createMissingPost() {
    const now = new Date().toISOString();
    const { error } = await s.from('posts').insert({
        title: 'Đồng hành cùng khoản đầu tư của bạn trong một thị trường đầy biến động',
        slug: slug,
        category_id: '31d10229-9735-4f69-a368-08ea7f0550a1', // Kiến thức đầu tư
        excerpt: 'Làm thế nào để giữ vững tâm lý và chiến thắng thị trường tài chính đầy biến động của năm 2026? Hãy cùng chúng tôi khám phá các chiến thuật đồng hành bền vững.',
        content: `Thị trường tài chính năm 2026 đang chứng kiến những cơn sóng dữ. Từ sự biến động của [giá vàng](/blog/vang/gia-vang-2026-tang-hay-giam-phan-tich-5-yeu-to) đến những cú nhảy vọt của [công nghệ AI](/blog/kien-thuc-dau-tu/dau-tu-xu-huong-ai-cong-nghe-2026), nhà đầu tư dễ dàng rơi vào trạng thái hoang mang.

## 1. Tâm lý là chìa khóa vàng
Trong một thị trường biến động, kẻ thù lớn nhất không phải là bảng điện tử mà là cảm xúc của chính bạn. Việc thấu hiểu [quản lý rủi ro danh mục](/blog/kien-thuc-dau-tu/quan-ly-roi-ro-danh-muc-dau-tu-hieu-qua) sẽ giúp bạn đứng vững.

## 2. Chiến thuật "Đồng hành" thay vì "Đánh bại"
Đừng cố gắng thắng thị trường trong mọi phiên giao dịch. Hãy chọn cách đồng hành cùng những [cổ phiếu cổ tức](/blog/chung-khoan/dau-tu-co-phieu-co-tuc-thu-nhap-thu-dong) chất lượng cao hoặc các [quỹ ETF Diamond](/blog/kien-thuc-dau-tu/etf-la-gi-huong-dan-dau-tu-quy-etf).

Hãy để chúng tôi đồng hành cùng bạn trên con đường chinh phục thịnh vượng tài chính 2026.`,
        is_published: true,
        scheduled_at: now,
        created_at: now,
        updated_at: now,
        focus_keyword: 'đồng hành cùng khoản đầu tư'
    });

    if (error) console.log(`❌ Lỗi tạo bài viết:`, error.message);
    else console.log(`✅ Đã tạo và đẩy LIVE bài viết bị thiếu: ${slug}`);
}

createMissingPost();
