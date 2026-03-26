-- Apply to Supabase SQL editor
BEGIN;

-- Cho phép mọi người đọc ảnh (SELECT)
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
TO public 
USING (bucket_id = 'images');

-- Cho phép upload ảnh (INSERT)
CREATE POLICY "Public Upload" 
ON storage.objects FOR INSERT 
TO public 
WITH CHECK (bucket_id = 'images');

-- Cho phép update/delete (nếu cần)
CREATE POLICY "Public Update" 
ON storage.objects FOR UPDATE 
TO public 
USING (bucket_id = 'images');

CREATE POLICY "Public Delete" 
ON storage.objects FOR DELETE 
TO public 
USING (bucket_id = 'images');

COMMIT;
