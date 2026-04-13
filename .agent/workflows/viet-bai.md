---
description: Quy trình viết bài mới và lên lịch đăng cho CachDauTu. CHỈ viết bài và lên lịch, KHÔNG sửa hệ thống.
---

# Quy Trình Viết Bài & Lên Lịch — CachDauTu

## ⛔ TUYỆT ĐỐI KHÔNG LÀM

- **KHÔNG SSH vào VPS** (34.142.182.73)
- **KHÔNG chạy `pm2 start`, `pm2 restart`, `npm start`** hay bất kỳ lệnh nào trên server
- **KHÔNG sửa file** trong `src/app/api/cron/`, cấu hình Nginx, PM2, hoặc systemd
- **KHÔNG chạy `publish-all.mjs`** hay bất kỳ script publish thủ công nào
- **KHÔNG thay đổi cấu trúc database** (Supabase schema)
- Hệ thống cron tự động publish đang hoạt động bình thường, KHÔNG can thiệp

## ✅ CHỈ ĐƯỢC LÀM

### Bước 1: Xác định chủ đề và danh mục
- Hỏi user về chủ đề bài viết (hoặc user đã chỉ định sẵn)
- Xác định category phù hợp từ các category có sẵn trong Supabase

### Bước 2: Kiểm tra bài viết hiện tại
```javascript
// Chỉ ĐỌC, không sửa
// Kiểm tra slug chưa trùng, xem lịch hiện tại
const { data } = await supabase.from('posts').select('slug, title, scheduled_at, is_published').order('scheduled_at', { ascending: false });
```

### Bước 3: Viết bài
- Viết content bằng Markdown
- Đảm bảo SEO: tiêu đề hấp dẫn, meta description, heading structure, focus keyword
- Tối thiểu 1500+ từ
- Có bảng so sánh, internal links khi phù hợp

### Bước 4: Insert bài vào Supabase
```javascript
// CHỈ INSERT bài mới, KHÔNG UPDATE bài cũ (trừ khi user yêu cầu cụ thể)
const { error } = await supabase.from('posts').insert({
    title: '...',
    slug: '...',           // URL-friendly, không dấu
    content: '...',        // Markdown content
    excerpt: '...',        // Mô tả ngắn
    category_id: '...',    // UUID của category
    is_published: false,   // LUÔN là false — để cron tự publish
    scheduled_at: '...',   // Thời gian publish (UTC)
    featured_image: '...', // URL ảnh đại diện
    focus_keyword: '...',  // Từ khóa SEO chính
});
```

### Bước 5: Lên lịch
- 6 slot/ngày (thời gian UTC): 
  + 00:00 UTC (07:00 VN)
  + 02:30 UTC (09:30 VN)
  + 05:00 UTC (12:00 VN)
  + 08:00 UTC (15:00 VN)
  + 11:00 UTC (18:00 VN)
  + 13:30 UTC (20:30 VN)
- `is_published` LUÔN = `false` — hệ thống cron sẽ tự chuyển thành `true` khi đến giờ

### Bước 6: Xác nhận
- Thông báo cho user: tiêu đề, slug, thời gian publish dự kiến
- KHÔNG gọi API publish, KHÔNG chạy script publish

## 📋 Thông tin kết nối Supabase
- URL: `https://pbxpjmklrkkwatdvacap.supabase.co`
- Anon Key: `sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD`
- Admin: `admin@cachdautu.com` / `CachDauTu@2026!`

## 📂 Category IDs (tra cứu khi cần)
Chạy query để lấy danh sách category:
```javascript
const { data } = await supabase.from('categories').select('id, name, slug');
```
