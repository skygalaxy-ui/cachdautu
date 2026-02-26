import { supabase } from './scripts/utils/db.mjs';

const targetTitles = [
    'Thói quen tài chính tốt cần rèn luyện',
    'Trái phiếu là gì? Hướng dẫn cho người mới',
    'Rủi ro khi đầu tư vào startup',
    'ESOP: Cổ phiếu ưu đãi cho nhân viên',
    'Crowdfunding: Gọi vốn cộng đồng',
    'Angel Investing: Đầu tư vào startup giai đoạn sớm',
    'Cách đánh giá startup trước khi đầu tư'
];

async function verifyDetailedStatus() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, is_published, scheduled_at, created_at')
        .in('title', targetTitles);

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Current DB Status:');
    posts.forEach(p => {
        console.log(`- ${p.title}`);
        console.log(`  ID: ${p.id}`);
        console.log(`  Published: ${p.is_published}`);
        console.log(`  Scheduled At: ${p.scheduled_at}`);
        console.log(`  Created At: ${p.created_at}`);
    });
}

verifyDetailedStatus();
