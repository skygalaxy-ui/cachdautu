-- =============================================
-- SETUP DATABASE CHO CACHDAUTU
-- Copy toàn bộ SQL này và chạy trong Supabase SQL Editor
-- =============================================

-- 1. Tạo bảng Categories
CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT DEFAULT '',
    icon TEXT DEFAULT '📁'
);

-- 2. Tạo bảng Posts
CREATE TABLE IF NOT EXISTS posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT DEFAULT '',
    content TEXT DEFAULT '',
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    tags TEXT[] DEFAULT '{}',
    is_published BOOLEAN DEFAULT false,
    reading_time TEXT DEFAULT '5 phút',
    featured_image TEXT,
    scheduled_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 3. Tạo bảng Comments
CREATE TABLE IF NOT EXISTS comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
    author_name TEXT NOT NULL,
    author_email TEXT,
    content TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 4. Tạo Indexes
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category_id);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(is_published);
CREATE INDEX IF NOT EXISTS idx_posts_created ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

-- 5. Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- 6. RLS Policies - Cho phép đọc public
CREATE POLICY "Public can view categories" ON categories
    FOR SELECT USING (true);

CREATE POLICY "Public can view published posts" ON posts
    FOR SELECT USING (true);

CREATE POLICY "Anyone can insert comments" ON comments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can view approved comments" ON comments
    FOR SELECT USING (is_approved = true);

-- 7. RLS Policies - Cho phép authenticated users quản lý
CREATE POLICY "Authenticated users can manage categories" ON categories
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage posts" ON posts
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage comments" ON comments
    FOR ALL USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- 8. Thêm dữ liệu mẫu Categories
INSERT INTO categories (name, slug, description, icon) VALUES
    ('Kiến thức đầu tư', 'kien-thuc-dau-tu', 'Kiến thức cơ bản và nâng cao về đầu tư tài chính', '📚'),
    ('Chứng khoán', 'chung-khoan', 'Phân tích và chiến lược đầu tư chứng khoán', '📈'),
    ('Bất động sản', 'bat-dong-san', 'Cách đầu tư bất động sản hiệu quả', '🏠'),
    ('Crypto', 'crypto', 'Tiền điện tử và blockchain', '₿'),
    ('Tài chính cá nhân', 'tai-chinh-ca-nhan', 'Quản lý tài chính cá nhân thông minh', '💰'),
    ('Kinh nghiệm', 'kinh-nghiem', 'Kinh nghiệm thực tế từ các nhà đầu tư', '🎯')
ON CONFLICT (slug) DO NOTHING;
