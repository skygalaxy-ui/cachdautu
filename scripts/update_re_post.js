const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const newContentTemplate = `
<p>Giấc mơ an cư lạc nghiệp của người trưởng thành tại các đô thị lớn dường như đang bị thử thách khắc nghiệt hơn bao giờ hết. Bước vào năm 2026, thị trường bất động sản dân cư tiếp tục chứng kiến quy luật nghiệt ngã: Bất chấp những rào cản nền kinh tế, giá chung cư nội đô vẫn thiết lập các vùng đỉnh không tưởng do sự khan hiếm nghiêm trọng về nguồn cung cốt lõi. Đối mặt với khoản tự vốn mỏng và lãi suất vay thả nổi, nhiều gia đình trẻ đứng trước ngã ba đường: Cố gắng vắt kiệt sức để mua một tổ ấm, hay bình thản chấp nhận khái niệm thuê nhà dài hạn ở Việt Nam?</p>

<p>Bài viết này không phải là lời đường mật từ các bên môi giới bất động sản, cũng không phải là lời than vãn về chi phí sinh hoạt. Đây là những bài toán tài chính sòng phẳng bóc trần những lầm tưởng kinh điển, giúp bạn đưa ra những quyết định tỉnh táo nhất về gánh nặng của "ngôi nhà".</p>

<h2>Bức tranh Cung - Cầu 2026: Bong bóng hay giá trị thực?</h2>
<p>Vài năm trước, rất nhiều người kiên nhẫn cầm tiền chờ đợi một cú "vỡ bong bóng" sau đợt thanh lọc pháp lý dự án, hi vọng bắt đáy mua nhà. Tuy nhiên, ở phân khúc đáp ứng nhu cầu ở thực (chung cư nội đô, nhà liền thổ diện tích nhỏ), sự thật lại diễn ra trái ngược. Việc hàng loạt dự án đại quy mô bị kẹt sổ đỏ và đình trệ thi công khiến nguồn cung bị bóp nghẹt diện rộng. Trong khi đó, dòng dịch chuyển dân số lao động đổ về lõi thành phố vẫn đun nóng chảo dầu nhu cầu.</p>
<p>Sức nén này đã đẩy giá bất động sản phổ thông lên một quỹ đạo ngày càng xa cách thu nhập của dân văn phòng. Nếu bạn kỳ vọng mua nhà nội ô giá rẻ, bạn đang theo đuổi một ảo ảnh. Quyết định mua nhà lúc này bắt buộc phải đi kèm với một đòn bẩy nợ khổng lồ, và biên độ rủi ro sẽ giáng trực tiếp lên sức khỏe tinh thần của toàn bộ thành viên trong gia đình.</p>

<!-- INJECT_APP -->

<h2>Bài toán Mua vs Thuê: Đừng nhầm lẫn giữa Lãi vay và Tiền Thuê</h2>
<p>Sai lầm mang tính thế kỷ của người Việt khi nghĩ về việc mua nhà là so sánh số tiền "trả tiền thuê nhà (coi như mất trắng)" với số tiền "trả góp ngân hàng hàng tháng (coi như mua tài sản)". Sự thật phũ phàng là trong 5 năm đầu tiên của bất kỳ khoản vay thế chấp 20 năm nào, tỷ lệ tiền bạn trả cho phần LÃI luôn áp đảo phần GỐC. Cái phần tiền LÃI khổng lồ đó, bản chất giống hệt như tiền đi thuê, là tiền bay đi vĩnh viễn và không mang lại giá trị gia tăng nào cho căn nhà.</p>
<p>Giả sử bạn có sẵn 2 tỷ đồng tiền nhàn rỗi. Tỷ suất sinh lời cho thuê (Rental Yield) của một căn hộ khá giả ở trung tâm vào năm 2026 chỉ quẩn quanh ở mức 3.5 - 4.5%/năm. Đây là mức sinh lời rất nghèo nàn so với chi phí vốn cơ hội. Tức là, số tiền bạn bỏ ra thuê một căn hộ cực kỳ khang trang đôi khi vẫn được bao bọc 100% bởi tiền lãi gửi tiết kiệm từ mức vốn 2 tỷ đó. Hơn thế, việc gạt đi cục nợ ngân hàng giúp dòng vốn lưu động hàng tháng (Cashflow) của bạn lỏng hơn để tái đầu tư vào cổ phiếu hoặc mở rộng kinh doanh.</p>

<!-- INJECT_COINS -->

<h2>Yếu tố Cảm xúc: Khi toán học dừng bước trước giấc mơ Tổ ấm</h2>
<p>Tuy nhiên, bảng tính dòng tiền có tinh vi đến mấy cũng không thể đo lường "chỉ số hạnh phúc". Ngôi nhà không chỉ là gạch vữa, nó là biểu tượng của sự ổn định để nuôi dạy con cái, là cảm giác được làm chủ bầu không khí của mình, được đóng cây đinh lên bức tường mà không sợ nét mặt của bất kỳ ai. Quan trọng hơn, đối với rất nhiều người không có tính kỷ luật đầu tư cao, hóa đơn vay thế chấp ngân hàng hàng tháng thực chất đóng vai trò như một cơ chế "Tiết kiệm ép buộc" vô cùng tốt – điều mà họ không bao giờ làm được nếu có sẵn tiền nhàn rỗi rủng rỉnh trong thẻ.</p>

<!-- INJECT_KEYS -->

<h2>Tổng kết: Lời đáp cho việc có nên xuống tiền năm 2026?</h2>
<p>Câu trả lời cuối cùng luôn nằm ở mức độ chịu đựng rủi ro và nền tảng vốn ban đầu của bạn. Tuyệt đối đừng nhắm mắt đưa chân mua nhà theo phong trào nếu bạn chỉ mới gom được 10-20% giá trị tài sản và kỳ vọng vay toàn bộ phần còn lại với một công việc có rủi ro sa thải lơ lửng. Cơn ác mộng mang tên lãi suất thả nổi trong năm thứ hai sẽ quét sạch mọi khoảnh khắc hân hoan lúc nhận chìa khóa nhà.</p>
<p>Chỉ nên tự tin đặt bút ký hợp đồng cọc nhà khi bạn đáp ứng đủ song song 2 điều kiện: (1) Bạn đã tiết kiệm đủ tối thiểu 40% giá trị ngôi nhà, và (2) Số tiền trả góp mỗi tháng tuyệt đối thấp hơn 35-40% tổng thu nhập của gia đình. Lúc đó, căn nhà không còn là án chung thân tài chính bóp nghẹt tương lai bạn, mà đã trở thành phần thưởng lộng lẫy nhất ghi nhận thành quả lao động của nửa đời người.</p>
`;

const images = {
  featured: { path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\real_estate_featured_1775033084741.png" },
  app: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\real_estate_app_1775033099399.png",
    alt: "Theo dõi biến động sốt giá cung cầu bất động sản 2026",
    tag: "<!-- INJECT_APP -->"
  },
  coins: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\real_estate_coins_1775033113992.png",
    alt: "Bài toán tính toán chi phí thuê nhà và chi phí vốn của việc mua căn hộ",
    tag: "<!-- INJECT_COINS -->"
  },
  keys: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\real_estate_keys_1775033130734.png",
    alt: "Giấc mơ an cư lạc nghiệp và sự ổn định để cống hiến",
    tag: "<!-- INJECT_KEYS -->"
  }
};

async function uploadImage(imagePath) {
  if (!fs.existsSync(imagePath)) return null;
  const buffer = fs.readFileSync(imagePath);
  const fileName = `re-post-${Date.now()}-${Math.floor(Math.random()*100)}.png`;
  const storagePath = `posts/${fileName}`;
  
  await supabase.storage.from('images').upload(storagePath, buffer, { contentType: 'image/png' });
  const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(storagePath);
  return publicUrl;
}

async function run() {
  console.log('Uploading 4 RE Post images...');
  const featuredUrl = await uploadImage(images.featured.path);
  const appUrl = await uploadImage(images.app.path);
  const coinsUrl = await uploadImage(images.coins.path);
  const keysUrl = await uploadImage(images.keys.path);

  let finalContent = newContentTemplate;
  
  if (appUrl) finalContent = finalContent.replace(images.app.tag, `\n<img src="${appUrl}" alt="${images.app.alt}" loading="lazy" />\n`);
  if (coinsUrl) finalContent = finalContent.replace(images.coins.tag, `\n<img src="${coinsUrl}" alt="${images.coins.alt}" loading="lazy" />\n`);
  if (keysUrl) finalContent = finalContent.replace(images.keys.tag, `\n<img src="${keysUrl}" alt="${images.keys.alt}" loading="lazy" />\n`);

  const slug = 'bat-dong-san-2026-co-nen-mua-nha';
  
  const updates = { 
    content: finalContent,
    excerpt: "Giá bất động sản tại các đô thị vệ tinh tiếp tục neo ở ngưỡng không tưởng. Đứng giữa ranh giới mua để an cư với gánh nặng vay nợ hay thuê nhà linh hoạt, đây là cách tính toán tài chính và cảm xúc sòng phẳng nhất cho bạn năm 2026.",
    meta_description: "Đánh giá chi tiết vấn đề có nên mua nhà vào thời điểm vĩ mô năm 2026 hay không. Bao gồm bảng tính so sánh và góc nhìn thực tế giữa bài toán đi thuê nhà hay chịu rủi ro vay thế chấp đòn bẩy cao.",
    reading_time: "6 phút đọc"
  };
  
  if (featuredUrl) updates.featured_image = featuredUrl;

  const { error } = await supabase.from('posts').update(updates).eq('slug', slug);
  if (error) {
    console.error('Update error:', error);
  } else {
    console.log('Successfully completed full article update for RE post!');
  }
}

run();
