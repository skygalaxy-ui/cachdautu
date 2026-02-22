import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await s.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

// Map of H2 keywords → intro paragraphs (Vietnamese)
const introMap = {
    // Generic patterns
    'ưu điểm': 'Trước khi quyết định đầu tư, bạn cần hiểu rõ cả mặt tích cực lẫn hạn chế của kênh đầu tư này. Dưới đây là những ưu điểm nổi bật mà bạn nên cân nhắc.',
    'nhược điểm': 'Bên cạnh những ưu điểm, kênh đầu tư này cũng tồn tại một số rủi ro và hạn chế mà nhà đầu tư cần lưu ý để có chiến lược phù hợp.',
    'so sánh': 'Để đưa ra quyết định đầu tư đúng đắn, việc so sánh các lựa chọn là vô cùng quan trọng. Mỗi kênh đầu tư đều có đặc điểm riêng phù hợp với từng mục tiêu và khẩu vị rủi ro khác nhau.',
    'rủi ro': 'Quản lý rủi ro là kỹ năng sống còn trong đầu tư. Hiểu rõ những rủi ro tiềm ẩn giúp bạn chuẩn bị tốt hơn và tránh những tổn thất không đáng có.',
    'chiến lược': 'Một chiến lược đầu tư rõ ràng giúp bạn duy trì kỷ luật và đạt mục tiêu tài chính dài hạn. Hãy xem xét những phương pháp đã được kiểm chứng qua thời gian dưới đây.',
    'cách': 'Nắm vững phương pháp thực hành là bước quan trọng để biến kiến thức thành kết quả đầu tư thực tế. Dưới đây là hướng dẫn chi tiết từng bước.',
    'bước': 'Quy trình từng bước dưới đây sẽ giúp bạn thực hiện một cách có hệ thống, giảm thiểu sai sót và tối ưu kết quả đầu tư.',
    'tiêu chí': 'Việc đánh giá dựa trên các tiêu chí rõ ràng giúp bạn đưa ra quyết định khách quan hơn, tránh bị chi phối bởi cảm xúc hay thông tin nhiễu.',
    'sai lầm': 'Học từ sai lầm của người khác là cách tiết kiệm chi phí nhất trong đầu tư. Dưới đây là những lỗi phổ biến mà nhiều nhà đầu tư mắc phải — đặc biệt là người mới.',
    'lưu ý': 'Có một số điểm quan trọng mà bạn cần ghi nhớ để tránh những rủi ro không đáng có và tối ưu hóa hiệu quả đầu tư.',
    'lợi ích': 'Khi hiểu rõ những lợi ích thực tế, bạn sẽ có thêm động lực để kiên trì với chiến lược đầu tư dài hạn của mình.',
    'yếu tố': 'Nhiều yếu tố tác động qua lại lẫn nhau, tạo nên bức tranh phức tạp nhưng cũng đầy cơ hội. Hiểu rõ từng yếu tố giúp bạn đọc thị trường chính xác hơn.',
    'câu hỏi': 'Dưới đây là những câu hỏi mà nhiều nhà đầu tư thường đặt ra. Những giải đáp này sẽ giúp bạn có cái nhìn toàn diện và tự tin hơn trong quyết định đầu tư.',
    'phân loại': 'Hiểu rõ cách phân loại giúp bạn lựa chọn đúng sản phẩm phù hợp với mục tiêu đầu tư và khẩu vị rủi ro của mình.',
    'loại': 'Mỗi loại đều có đặc điểm, ưu nhược điểm và mức độ rủi ro khác nhau. Việc phân biệt rõ ràng sẽ giúp bạn đưa ra lựa chọn phù hợp nhất.',
    'phí': 'Chi phí đầu tư tuy nhỏ nhưng tích lũy theo thời gian có thể ảnh hưởng đáng kể đến lợi nhuận. Nhà đầu tư thông minh luôn tối ưu hóa chi phí giao dịch.',
    'thuế': 'Thuế là khoản chi phí bắt buộc mà nhà đầu tư cần hiểu rõ để tính toán lợi nhuận thực tế và tuân thủ pháp luật.',
    'lãi suất': 'Lãi suất là một trong những biến số quan trọng nhất ảnh hưởng đến mọi quyết định đầu tư, từ gửi tiết kiệm đến đầu tư chứng khoán.',
    'kênh đầu tư': 'Thị trường Việt Nam hiện có nhiều kênh đầu tư đa dạng, phù hợp với từng mức vốn và mục tiêu tài chính khác nhau.',
    'ví dụ': 'Ví dụ thực tế giúp bạn hình dung rõ hơn cách áp dụng kiến thức vào tình huống đầu tư cụ thể, từ đó rút ra bài học cho riêng mình.',
    'dấu hiệu': 'Nhận biết sớm các dấu hiệu giúp bạn phản ứng kịp thời, bảo vệ vốn đầu tư và nắm bắt cơ hội trước đám đông.',
    'nguyên tắc': 'Những nguyên tắc dưới đây đã được kiểm chứng qua nhiều thế hệ nhà đầu tư thành công. Áp dụng chúng một cách kỷ luật sẽ giúp bạn tránh những sai lầm tốn kém.',
    'mẹo': 'Những mẹo thực tế dưới đây đến từ kinh nghiệm của nhiều nhà đầu tư chuyên nghiệp, giúp bạn cải thiện hiệu suất đầu tư ngay lập tức.',
    'bảng': 'Bảng tổng hợp dưới đây giúp bạn dễ dàng so sánh và đối chiếu thông tin một cách trực quan, tiết kiệm thời gian nghiên cứu.',
    'tổng kết': 'Nhìn lại toàn bộ nội dung đã phân tích, chúng ta có thể rút ra những bài học quan trọng để áp dụng vào thực tế đầu tư.',
    'khắc phục': 'Khi đã nhận ra vấn đề, bước tiếp theo là tìm cách khắc phục hiệu quả. Dưới đây là những giải pháp thiết thực bạn có thể áp dụng ngay.',
    'phòng tránh': 'Phòng bệnh hơn chữa bệnh — trong đầu tư cũng vậy. Những biện pháp phòng tránh dưới đây giúp bạn bảo vệ danh mục đầu tư trước các rủi ro.',
    'tại sao': 'Hiểu rõ nguyên nhân gốc rễ giúp bạn đưa ra quyết định dựa trên logic thay vì cảm xúc — yếu tố quyết định thành bại trong đầu tư.',
    'vì sao': 'Hiểu rõ nguyên nhân gốc rễ giúp bạn đưa ra quyết định dựa trên logic thay vì cảm xúc — yếu tố quyết định thành bại trong đầu tư.',
    'đầu tư': 'Đầu tư đúng cách đòi hỏi sự kết hợp giữa kiến thức, kỷ luật và tầm nhìn dài hạn. Hãy cùng phân tích chi tiết để bạn có nền tảng vững chắc.',
    'hướng dẫn': 'Hướng dẫn chi tiết dưới đây sẽ giúp bạn thực hiện từng bước một cách tự tin, ngay cả khi bạn chưa có nhiều kinh nghiệm.',
    'xây dựng': 'Xây dựng một nền tảng vững chắc ngay từ đầu sẽ giúp bạn tiết kiệm thời gian và tránh những sai lầm tốn kém về sau.',
    'quản lý': 'Quản lý hiệu quả là chìa khóa để duy trì và phát triển tài sản theo thời gian. Dưới đây là những phương pháp được khuyến nghị.',
};

// Fallback intros based on broader context
const fallbackIntros = [
    'Phần này sẽ giúp bạn hiểu sâu hơn về khía cạnh quan trọng trong hành trình đầu tư. Nắm vững kiến thức nền tảng là bước đầu tiên để đưa ra quyết định sáng suốt.',
    'Đây là nội dung cốt lõi mà mọi nhà đầu tư cần nắm vững. Kiến thức dưới đây giúp bạn tự tin hơn khi đối mặt với biến động thị trường.',
    'Hiểu rõ vấn đề này không chỉ giúp bạn tránh rủi ro mà còn mở ra cơ hội gia tăng lợi nhuận đầu tư một cách bền vững.',
];

function getIntroForH2(h2Text) {
    const lower = h2Text.toLowerCase();
    // Try to match specific keywords
    for (const [keyword, intro] of Object.entries(introMap)) {
        if (lower.includes(keyword)) return intro;
    }
    // Fallback — pick based on hash of text for consistency
    const hash = h2Text.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return fallbackIntros[hash % fallbackIntros.length];
}

async function addIntros() {
    console.log('🔧 Adding intro paragraphs after H2 headings...\n');

    const { data: posts } = await s.from('posts').select('id, slug, content').eq('is_published', true);
    let updated = 0;
    for (const p of posts || []) {
        if (!p.content) continue;

        let c = p.content;
        let changed = false;

        // Find H2 tags followed directly by <p><strong>, <ul>, <ol>, or <h3> (no intro paragraph)
        c = c.replace(/<\/h2>\s*\n*\s*(<p><strong>|<ul>|<ol>|<h3>)/g, (match, nextTag) => {
            // Extract the H2 text before this closing tag
            changed = true;
            return `</h2>\n${nextTag}`;
        });

        // Now do the real replacement: for each H2 followed by list-like content, inject intro
        const parts = c.split(/(<h2[^>]*>.*?<\/h2>)/g);
        let result = '';

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            result += part;

            // Check if this part is an H2 tag
            const h2Match = part.match(/<h2[^>]*>(.*?)<\/h2>/);
            if (h2Match && i + 1 < parts.length) {
                const nextPart = parts[i + 1].trimStart();
                // Check if next content starts with list-like pattern (no existing intro paragraph)
                if (nextPart.startsWith('<p><strong>') || nextPart.startsWith('<ul>') || nextPart.startsWith('<ol>') || nextPart.startsWith('<h3>')) {
                    const h2Text = h2Match[1].replace(/<[^>]+>/g, '').trim();
                    const intro = getIntroForH2(h2Text);
                    result += `\n<p>${intro}</p>\n`;
                    changed = true;
                }
            }
        }

        if (changed) {
            const { error } = await s.from('posts').update({ content: result }).eq('id', p.id);
            if (error) {
                console.log(`❌ ${p.slug}: ${error.message}`);
            } else {
                console.log(`✅ ${p.slug}`);
                updated++;
            }
        }
    }

    console.log(`\n🎉 Updated ${updated} posts with intro paragraphs`);
}

addIntros();
