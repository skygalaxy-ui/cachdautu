import { createClient } from '@supabase/supabase-js';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

const POST_ID = '868eea75-4266-4c52-91ba-de13720c8e02';

// Get current content
const { data: post } = await s.from('posts').select('content').eq('id', POST_ID).single();
let content = post.content;

// Fix: Remove markdown at the end (lines 141-146) and replace with proper HTML
const markdownEnd = content.indexOf('\n---\n');
if (markdownEnd !== -1) {
    content = content.substring(0, markdownEnd);
}

// Add a third image before the conclusion section
const conclusionIdx = content.indexOf('<h2>Kết luận</h2>');
if (conclusionIdx !== -1) {
    const img3 = `\n<figure class="my-8"><img src="https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=800&h=450&fit=crop&q=80" alt="Biểu đồ so sánh hiệu suất các quỹ đầu tư tại Việt Nam" loading="lazy" class="rounded-xl w-full" /><figcaption class="text-center text-sm text-gray-500 mt-2">So sánh hiệu suất các quỹ mở hàng đầu Việt Nam qua 3 năm gần nhất</figcaption></figure>\n\n`;
    content = content.slice(0, conclusionIdx) + img3 + content.slice(conclusionIdx);
}

// Add FAQ section before the final paragraph
const lastIdx = content.lastIndexOf('</p>');
if (lastIdx !== -1) {
    const faqSection = `

<h2>Câu hỏi thường gặp về quỹ mở</h2>

<h3>Quỹ mở có an toàn không?</h3>
<p>Quỹ mở được quản lý bởi các công ty quản lý quỹ (AMC) được cấp phép bởi Ủy ban Chứng khoán Nhà nước. Tài sản quỹ được lưu ký bởi ngân hàng giám sát độc lập — nghĩa là tiền của bạn <strong>không bị AMC sử dụng sai mục đích</strong>. Tuy nhiên, giá trị CCQ vẫn có thể tăng/giảm theo thị trường.</p>

<h3>Nên đầu tư quỹ mở trong bao lâu?</h3>
<p>Quỹ cổ phiếu: tối thiểu <strong>3 năm</strong>, lý tưởng 5-10 năm. Quỹ trái phiếu: từ <strong>6 tháng</strong> trở lên. Đầu tư càng lâu, rủi ro thua lỗ càng thấp nhờ hiệu ứng lãi kép.</p>

<h3>Quỹ mở có chia lợi nhuận không?</h3>
<p>Hầu hết quỹ mở tại Việt Nam <strong>tái đầu tư lợi nhuận</strong> (thể hiện qua NAV/CCQ tăng) thay vì chia cổ tức tiền mặt. Bạn thu lợi nhuận khi bán CCQ với giá cao hơn giá mua.</p>

<h3>Khi nào nên rút tiền khỏi quỹ mở?</h3>
<p>Đừng rút chỉ vì thị trường giảm ngắn hạn. Hãy rút khi: (1) Đã đạt mục tiêu tài chính, (2) Cần tiền cho mục đích quan trọng, hoặc (3) Quỹ liên tục kém hiệu suất so với chỉ số chuẩn trong 3+ năm.</p>

`;
    content = content.slice(0, lastIdx + 4) + faqSection + '\n';
}

// Update post
const updateData = {
    content: content,
    meta_title: 'Top Quỹ Mở Tốt Nhất Việt Nam 2026: So Sánh VESAF, VCBF, TCBF & Cách Mua',
    meta_description: 'So sánh chi tiết các quỹ mở (mutual fund) tốt nhất Việt Nam 2026. Phân tích VESAF, VCBF-TGF, SSISCA, TCBF - phí quản lý, lợi nhuận 3 năm & hướng dẫn mua từ 100.000đ.',
    reading_time: '15 phút',
};

const { error } = await s.from('posts').update(updateData).eq('id', POST_ID);

if (error) {
    console.log('❌ Error:', error.message);
} else {
    const wordCount = content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
    const imgs = (content.match(/<img/gi) || []).length;
    const h2s = (content.match(/<h2>/gi) || []).length;
    
    console.log('✅ BÀI VIẾT #2 ĐÃ CẬP NHẬT!\n');
    console.log(`Words: ${wordCount}`);
    console.log(`H2 headings: ${h2s}`);
    console.log(`Images: ${imgs}`);
    console.log(`Meta Title: Top Quỹ Mở Tốt Nhất Việt Nam 2026...`);
    console.log(`Meta Desc: So sánh chi tiết các quỹ mở...`);
    console.log(`Reading Time: 15 phút`);
}
