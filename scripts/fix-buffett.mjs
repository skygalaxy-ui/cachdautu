import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Đổi featured_image (hiện ở hero banner) sang Unsplash - vì Next Image component cần whitelist domain
// Giữ ảnh Buffett wikimedia trong content vì dùng <img> tag bình thường
const { error } = await s.from('posts').update({
    featured_image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=630&fit=crop',
    updated_at: new Date().toISOString()
}).eq('id', 'b06b17a7-9980-4956-b7e2-e6e065d49ffe');

if (error) console.log('❌', error.message);
else console.log('✅ Featured image đổi sang Unsplash (stock market). Ảnh Buffett giữ trong content.');
