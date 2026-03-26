-- ================================================================
-- NEWSLETTER SUBSCRIBERS TABLE
-- Copy toàn bộ SQL này vào Supabase Dashboard > SQL Editor > Run
-- ================================================================

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'blog_article',
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  resubscribed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(is_active);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: service role has full access (for API route)
CREATE POLICY "Service role full access" ON newsletter_subscribers
  FOR ALL USING (true) WITH CHECK (true);
