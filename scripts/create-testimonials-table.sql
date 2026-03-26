-- Tạo bảng testimonials
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    rating SMALLINT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    avatar TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Kích hoạt RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Chính sách đọc: Ai cũng có thể đọc bài đánh giá đã xuất bản
CREATE POLICY "Cho phép đọc đánh giá đã xuất bản" ON public.testimonials
    FOR SELECT USING (is_published = true);

-- Chính sách quản trị: Chỉ Admin (người dùng xác thực) được thêm/sửa/xóa
CREATE POLICY "Admin có toàn quyền" ON public.testimonials
    FOR ALL USING (auth.role() = 'authenticated');

-- Chèn dữ liệu mẫu ban đầu để giao diện không bị trống
INSERT INTO public.testimonials (name, role, content, rating, avatar, is_published)
VALUES 
    ('Minh Hoàng', 'Nhà đầu tư chứng khoán', 'Kiến thức từ Cách Đầu Tư giúp tôi tự tin hơn khi ra quyết định. ROI tăng 35% trong năm đầu.', 5, 'MH', true),
    ('Thu Trang', 'Freelancer', 'Nhờ bài viết về tài chính cá nhân, tôi đã xây dựng được quỹ dự phòng 6 tháng lương.', 5, 'TT', true),
    ('Quốc Bảo', 'Doanh nhân', 'Phân tích thị trường rất sâu và thực tế. Giúp tôi tránh được nhiều cạm bẫy khi đầu tư.', 5, 'QB', true);
