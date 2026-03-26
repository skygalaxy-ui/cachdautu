-- Supabase pg_cron: Tự động publish bài viết theo lịch
-- Chạy trong SQL Editor > New Query trên Supabase Dashboard
-- Yêu cầu: bật extension pg_cron trong Supabase

-- Bật pg_cron (chạy 1 lần)
-- CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Tạo function publish
CREATE OR REPLACE FUNCTION auto_publish_scheduled_posts()
RETURNS void AS $$
BEGIN
    UPDATE posts 
    SET is_published = true
    WHERE is_published = false 
      AND scheduled_at IS NOT NULL 
      AND scheduled_at <= NOW();
END;
$$ LANGUAGE plpgsql;

-- Schedule: chạy mỗi giờ (để bài publish nhanh nhất có thể)
SELECT cron.schedule(
    'publish-scheduled-posts',   -- job name
    '0 * * * *',                 -- mỗi giờ đúng
    'SELECT auto_publish_scheduled_posts()'
);

-- Kiểm tra jobs đã đăng ký:
-- SELECT * FROM cron.job;

-- Xóa job nếu cần:
-- SELECT cron.unschedule('publish-scheduled-posts');
