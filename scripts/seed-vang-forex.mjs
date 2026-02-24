import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
await supabase.auth.signInWithPassword({ email: 'admin@cachdautu.com', password: 'CachDauTu@2026!' });

const FOREX = 'd0457801-0e3c-402b-9846-2a5926fb64c6';

const { data, error } = await supabase.from('posts').insert({
    title: "Phân Tích Kỹ Thuật Forex Cơ Bản: 5 Mô Hình Nến Mọi Trader Cần Biết",
    slug: "phan-tich-ky-thuat-forex-5-mo-hinh-nen-co-ban",
    excerpt: "Hướng dẫn 5 mô hình nến quan trọng nhất trong phân tích kỹ thuật Forex: Doji, Hammer, Engulfing, Morning Star, Evening Star. Ý nghĩa và cách giao dịch.",
    category_id: FOREX,
    tags: ["phân tích kỹ thuật", "mô hình nến", "candlestick", "doji", "hammer"],
    reading_time: "9 phút",
    is_published: false,
    featured_image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=630&fit=crop",
    scheduled_at: new Date('2026-03-22T03:00:00Z').toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    content: `<p>Phân tích kỹ thuật là kỹ năng cốt lõi của trader Forex. Trong đó, đọc biểu đồ nến Nhật (Japanese Candlestick) là nền tảng cơ bản nhất. Mỗi cây nến kể một câu chuyện về cuộc chiến giữa phe mua và phe bán. Hiểu ngôn ngữ của nến giúp bạn dự đoán xu hướng tiếp theo.</p>

<p>Bài viết này giới thiệu 5 mô hình nến quan trọng nhất mà mọi trader – dù mới hay cũ – đều cần nắm vững.</p>

<h2>Cấu tạo cơ bản của nến Nhật</h2>

<p>Mỗi cây nến gồm 4 thông tin: giá mở cửa (Open), giá đóng cửa (Close), giá cao nhất (High) và giá thấp nhất (Low). Phần thân nến là khoảng cách giữa Open và Close. Bóng nến (shadow/wick) là phần nhô ra trên và dưới thân.</p>

<p>Nến xanh (bullish) nghĩa là giá đóng cửa cao hơn giá mở cửa – phe mua thắng. Nến đỏ (bearish) nghĩa là giá đóng thấp hơn mở – phe bán thắng. Thân nến dài cho thấy sức mạnh một chiều rõ ràng, thân ngắn cho thấy sự do dự.</p>

<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop" alt="Biểu đồ nến" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Mô hình 1: Doji – Tín hiệu do dự</h2>

<p>Doji là nến có thân cực nhỏ (Open và Close gần bằng nhau) với bóng trên và dưới dài. Nó cho thấy phe mua và bán đang cân bằng, thị trường chưa quyết định hướng đi. Doji quan trọng nhất khi xuất hiện sau một xu hướng mạnh – nó báo hiệu xu hướng có thể sắp đảo chiều.</p>

<p>Tuy nhiên, Doji đơn lẻ chỉ là tín hiệu cảnh báo, không phải tín hiệu giao dịch. Bạn cần chờ nến xác nhận tiếp theo – nếu sau Doji là nến đảo chiều mạnh, xác suất đảo chiều cao hơn nhiều.</p>

<h2>Mô hình 2: Hammer và Hanging Man – Đảo chiều một nến</h2>

<p>Hammer (búa) là nến có thân nhỏ ở phía trên và bóng dưới dài (gấp 2-3 lần thân). Khi xuất hiện sau xu hướng giảm, Hammer báo hiệu phe bán đã đẩy giá xuống sâu nhưng phe mua đã phản công mạnh mẽ – tín hiệu tăng giá tiềm năng.</p>

<p>Hanging Man có hình dạng giống hệt Hammer nhưng xuất hiện sau xu hướng tăng – nó báo hiệu phe bán bắt đầu tham gia, xu hướng tăng có thể kết thúc. Cùng hình dạng nhưng ý nghĩa ngược nhau hoàn toàn – bối cảnh (context) quyết định tất cả.</p>

<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop" alt="Mô hình nến" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Mô hình 3: Engulfing – Tín hiệu đảo chiều mạnh</h2>

<p>Bullish Engulfing gồm 2 nến: nến đỏ nhỏ theo sau bởi nến xanh lớn "nuốt" hoàn toàn nến đỏ trước đó. Thân nến xanh bao trùm toàn bộ thân nến đỏ, cho thấy phe mua đã hoàn toàn áp đảo. Đây là tín hiệu đảo chiều từ giảm sang tăng rất mạnh.</p>

<p>Bearish Engulfing ngược lại: nến xanh nhỏ theo sau bởi nến đỏ lớn nuốt trọn. Tín hiệu đảo chiều từ tăng sang giảm. Engulfing hiệu quả nhất khi xuất hiện tại vùng hỗ trợ/kháng cự quan trọng, kèm theo khối lượng giao dịch tăng.</p>

<h2>Mô hình 4: Morning Star – Sao mai báo hiệu bình minh</h2>

<p>Morning Star là mô hình 3 nến: nến đỏ dài (xu hướng giảm), nến thân nhỏ (do dự, có thể là Doji), rồi nến xanh dài (đảo chiều tăng). Mô hình này cho thấy phe bán kiệt sức (nến đỏ), thị trường ngưng lại (nến nhỏ), rồi phe mua chiếm ưu thế (nến xanh).</p>

<p>Morning Star đáng tin cậy hơn khi nến xanh thứ 3 đóng trên 50% thân nến đỏ thứ 1. Đây là một trong những mô hình đảo chiều đáy đáng tin nhất trong phân tích kỹ thuật.</p>

<h2>Mô hình 5: Evening Star – Sao hôm báo hiệu hoàng hôn</h2>

<p>Evening Star là phiên bản ngược của Morning Star: nến xanh dài, nến thân nhỏ, rồi nến đỏ dài. Báo hiệu đảo chiều từ tăng sang giảm. Đặc biệt hiệu quả khi xuất hiện tại vùng kháng cự, sau một chuỗi tăng giá kéo dài.</p>

<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" alt="Phân tích kỹ thuật" style="width:100%;border-radius:16px;margin:24px 0" />

<h2>Lưu ý quan trọng khi dùng mô hình nến</h2>

<p>Mô hình nến KHÔNG nên dùng đơn lẻ để ra quyết định giao dịch. Luôn kết hợp với các yếu tố khác: vùng hỗ trợ/kháng cự, xu hướng chung (trend), chỉ báo kỹ thuật (RSI, MACD), và <a href="/blog/forex/quan-ly-von-forex-quy-tac-2-phan-tram">quản lý vốn</a>. Mô hình nến chỉ là một mảnh ghép trong bức tranh lớn.</p>

<p>Ngoài ra, mô hình nến trên khung thời gian lớn (H4, Daily) đáng tin cậy hơn nhiều so với khung nhỏ (M5, M15). Một Hammer trên biểu đồ Daily có ý nghĩa hơn nhiều so với Hammer trên M5. Nếu bạn mới bắt đầu, hãy tập trung vào khung H4 và Daily.</p>

<h2>Kết luận</h2>

<p>5 mô hình nến trên là nền tảng của phân tích kỹ thuật Forex. Từ Doji (do dự) đến Engulfing (đảo chiều mạnh), mỗi mô hình kể một câu chuyện riêng. Học cách đọc nến là bước đầu tiên để hiểu ngôn ngữ thị trường. Nhưng nhớ rằng: phân tích kỹ thuật chỉ là công cụ, <a href="/blog/forex/quan-ly-von-forex-quy-tac-2-phan-tram">quản lý vốn</a> mới là yếu tố quyết định sống còn. Nếu bạn chưa quen Forex, đọc lại bài <a href="/blog/forex/forex-la-gi-huong-dan-giao-dich-ngoai-hoi-cho-nguoi-moi">Forex là gì</a> trước.</p>`
}).select('id, title, scheduled_at');

if (error) console.log('❌', error.message);
else console.log(`✅ ${data[0].title}\n   → Scheduled: ${new Date(data[0].scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
