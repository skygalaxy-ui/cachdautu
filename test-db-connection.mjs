import { supabase } from './scripts/utils/db.mjs';

async function checkConnection() {
    try {
        const { count, error } = await supabase
            .from('posts')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('❌ Lỗi truy vấn database:', error.message);
            return;
        }

        console.log('✅ Kết nối database thành công!');
        console.log(`📊 Tổng số bài viết hiện có trong bảng posts: ${count}`);
    } catch (err) {
        console.error('❌ Lỗi hệ thống khi kết nối:', err.message);
    }
}

checkConnection();
