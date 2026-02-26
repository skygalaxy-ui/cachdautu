import { supabase } from './scripts/utils/db.mjs';
import fs from 'fs';

async function backupData() {
    console.log('💾 Đang tiến hành sao lưu dữ liệu từ Supabase...');

    const { data, error } = await supabase
        .from('posts')
        .select('*');

    if (error) {
        console.error('❌ Lỗi khi tải dữ liệu để sao lưu:', error.message);
        return;
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `backup_posts_${timestamp}.json`;

    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));

    console.log(`✅ Đã sao lưu thành công ${data.length} bài viết vào file: ${fileName}`);
    console.log('⚠️ Hãy giữ file này an toàn để khôi phục nếu cần thiết.');
}

backupData();
