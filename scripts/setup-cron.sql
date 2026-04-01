-- 1. Bật extension pg_cron (nếu chưa bật)
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- 2. Đảm bảo có function để tự động xuất bản (is_published = true)
CREATE OR REPLACE FUNCTION auto_publish_posts()
RETURNS void AS $$
BEGIN
  -- Cập nhật các bài viết đã đến giờ nhưng chưa xuất bản
  UPDATE posts 
  SET is_published = true 
  WHERE is_published = false 
    AND scheduled_at IS NOT NULL 
    AND scheduled_at <= now();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Xóa job cũ (nếu có, để tránh bị trùng)
SELECT cron.unschedule('auto-publish-job');

-- 4. Tạo job mới: Chạy mỗi 5 phút
-- (Cú pháp cron: '*/5 * * * *' = mỗi 5 phút)
SELECT cron.schedule(
  'auto-publish-job',
  '*/5 * * * *',
  'SELECT auto_publish_posts();'
);

-- =========================================================================
-- KIỂM TRA:
-- Để xem danh sách các job đang chạy:
-- SELECT * FROM cron.job;
--
-- Để xem log (thành công/lỗi) của cron job:
-- SELECT * FROM cron.job_run_details ORDER BY start_time DESC LIMIT 10;
-- =========================================================================
