const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const newContentTemplate = `
<p>Bước vào năm 2026, nền kinh tế số và thị trường vốn toàn cầu vừa trải qua một Quý 1 đầy biến động nhưng không kém phần rực rỡ. Bức tranh vĩ mô không còn bị phủ bóng đen bởi lạm phát như giai đoạn trước, mà thay vào đó là sự nới lỏng chính sách đầy thận trọng từ các Ngân hàng Trung ương lớn. Tuy nhiên, sự "tốt lên" của vĩ mô không đồng nghĩa với việc lợi suất sẽ tự động rơi vào tay mọi nhà đầu tư. Thị trường hiện tại đã bước vào một quỹ đạo phân hóa khốc liệt, đòi hỏi kỹ năng chọn lọc tài sản tinh vi hơn bao giờ hết.</p>

<p>Bài viết này của Cách Đầu Tư sẽ tóm tắt lại những điểm nghẽn và động lực chính định hình thị trường tài chính trong 3 tháng đầu năm 2026, từ đó mở ra bản đồ chiến lược phân bổ danh mục để dẫn đầu xu thế trong Quý 2 sắp tới.</p>

<h2>Bối cảnh Toàn cầu Q1/2026: Trục xoay Lãi suất và Sự trỗi dậy của AI</h2>
<p>Điều quan trọng nhất mà giới đầu tư Phố Wall đã định giá thành công trong Quý 1 là nhịp điệu cắt giảm lãi suất thực tế của các ngân hàng trung ương. Không có những cú "quay xe" gắt gao làm chấn động tỷ giá, việc hạ nhiệt lãi suất toàn cầu đang diễn ra theo một kịch bản hạ cánh mềm (soft-landing). Khi chi phí cơ hội của việc nắm giữ tiền mặt giảm đi, dòng tiền thông minh ngay lập tức chảy mạnh vào các tài sản có lợi suất cao hơn.</p>
<p>Bên cạnh yếu tố thanh khoản, chu kỳ bùng nổ thứ hai của Công nghệ và AI không còn chỉ dừng lại ở các bài toán ngôn ngữ, mà đã chính thức thương mại hóa mạnh mẽ vào các ngành công nghiệp. Sự dịch chuyển này tiếp tục củng cố sức mạnh của nhóm cổ phiếu công nghệ trên toàn cầu, đồng thời kéo theo một làn sóng dịch chuyển chuỗi cung ứng bán dẫn tại khu vực Đông Nam Á.</p>

<!-- INJECT_NEWS -->

<h2>Việt Nam Q1/2026: Thanh khoản dồi dào, Niềm tin Phục hồi</h2>
<p>Trong nước, thị trường chứng khoán đã có một Quý 1 giao dịch vô cùng sôi động. Tâm lý thị trường không còn thận trọng và co cụm do mặt bằng lãi suất huy động tại các ngân hàng thương mại vẫn được duy trì ở mức nới lỏng hợp lý, tạo ra động lực đẩy dòng tiền nhàn rỗi quay lại kênh đầu tư chứng khoán và sản xuất kinh doanh đứt gãy.</p>
<p>Điểm sáng rực rỡ nhất trong 3 tháng qua thuộc về nhóm Cổ phiếu Ngân hàng lớn và Cấu trúc hạ tầng Khu công nghiệp. Khi câu chuyện Nâng hạng thị trường tiếp tục được đẩy nhanh tiến độ, dòng vốn ngoại (FDI) tiếp tục cho thấy năng lực giải ngân kỷ lục. Tuy nhiên, ở mặt trận Bất động sản dân cư, sự phục hồi vẫn mang tính chất cục bộ, phần lớn diễn ra ở phân khúc chung cư nội đô có pháp lý sạch và đáp ứng nhu cầu ở thực của tầng lớp trung lưu thành thị.</p>

<!-- INJECT_GROWTH -->

<h2>Tầm nhìn và Chiến lược Phân bổ Danh mục Q2/2026</h2>
<p>Thị trường tài chính không trả tiền cho những gì đã xảy ra, nó trả tiền cho những kỳ vọng trong tươi lai. Quý 2/2026 được dự báo là giai đoạn chắt lọc mạnh mẽ, nơi thị trường sẽ phân hóa dòng tiền dựa trên kết quả kinh doanh thực tế mùa Đại hội Cổ đông thay vì những đồn đoán vĩ mô chung chung.</p>
<p>Với các nhà đầu tư cá nhân, việc mua đuổi (FOMO) trên diện rộng giờ đây là một chiến lược bấp bênh mạng nặng tính cược. Cách Đầu Tư đề xuất duy trì cấu trúc danh mục theo hướng tập trung vào chất lượng. Phân bổ phần lớn vốn vào nhóm cổ phiếu tăng trưởng bền vững (Bluechips có năng lực cạnh tranh cốt lõi), trong khi đó luôn dự phòng tối thiểu 10% đến 20% lượng tiền mặt (hoặc trái phiếu ngắn hạn) để sẵn sàng mua gom tài sản tốt trong những thời điểm thị trường rung lắc diện rộng.</p>

<!-- INJECT_STRATEGY -->

<h2>Tổng kết: Kỷ luật trước những ảo ảnh của một chu kỳ mới</h2>
<p>Con sóng của chu kỳ phục hồi 2026 đã thành hình và hiện diện rõ nét trên các chỉ báo kinh tế lớn. Khác với cơn cuồng phong đầu cơ của dòng tiền rẻ trong quá khứ, giai đoạn này đòi hỏi sự định giá cơ bản sắc sảo. Đã qua rồi thời "mua mã nào cũng trúng". Nhiệm vụ tối thượng của thời điểm này không phải là phỏng đoán ngày mai chỉ số tăng hay giảm, mà là chọn đúng những doanh nghiệp có nội lực thực sự và mua nó với biên an toàn rộng nhất có thể.</p>
`;

const images = {
  featured: { path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\market_review_featured_1775032897215.png" },
  news: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\market_review_news_1775032916464.png",
    alt: "Bối cảnh kinh tế vĩ mô toàn cầu Q1 2026",
    tag: "<!-- INJECT_NEWS -->"
  },
  growth: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\market_review_growth_1775032933678.png",
    alt: "Đà phục hồi mạnh mẽ của thị trường nội địa Việt Nam",
    tag: "<!-- INJECT_GROWTH -->"
  },
  strategy: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\market_review_strategy_1775032953295.png",
    alt: "Chiến lược phân bổ danh mục đầu tư chuẩn kỷ luật",
    tag: "<!-- INJECT_STRATEGY -->"
  }
};

async function uploadImage(imagePath) {
  if (!fs.existsSync(imagePath)) {
    console.warn("NOT FOUND:", imagePath);
    return null;
  }
  const buffer = fs.readFileSync(imagePath);
  const fileName = `market-post-${Date.now()}-${Math.floor(Math.random()*100)}.png`;
  const storagePath = `posts/${fileName}`;
  
  await supabase.storage.from('images').upload(storagePath, buffer, { contentType: 'image/png' });
  const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(storagePath);
  return publicUrl;
}

async function run() {
  console.log('Uploading 4 Market Post images...');
  const featuredUrl = await uploadImage(images.featured.path);
  const newsUrl = await uploadImage(images.news.path);
  const growthUrl = await uploadImage(images.growth.path);
  const strategyUrl = await uploadImage(images.strategy.path);

  let finalContent = newContentTemplate;
  
  if (newsUrl) finalContent = finalContent.replace(images.news.tag, `\n<img src="${newsUrl}" alt="${images.news.alt}" loading="lazy" />\n`);
  if (growthUrl) finalContent = finalContent.replace(images.growth.tag, `\n<img src="${growthUrl}" alt="${images.growth.alt}" loading="lazy" />\n`);
  if (strategyUrl) finalContent = finalContent.replace(images.strategy.tag, `\n<img src="${strategyUrl}" alt="${images.strategy.alt}" loading="lazy" />\n`);

  const slug = 'tong-ket-thi-truong-tai-chinh-q1-2026-du-bao-q2';
  
  const updates = { 
    content: finalContent,
    excerpt: "Giai đoạn dòng tiền giá rẻ đã qua, thị trường vĩ mô Q2/2026 đòi hỏi nhà đầu tư phải có năng lực chọn lọc tài sản khắt khe hơn. Cùng nhìn lại điểm nghẽn Q1 và chiến lược chuẩn cho Q2.",
    meta_description: "Phân tích và tổng kết thị trường tài chính vĩ mô toàn cầu, Việt Nam Q1/2026. Phác họa lộ trình và chiến lược phân bổ danh mục đầu tư an toàn cho Q2.",
    reading_time: "6 phút đọc"
  };
  
  if (featuredUrl) updates.featured_image = featuredUrl;

  const { error } = await supabase.from('posts').update(updates).eq('slug', slug);
  if (error) {
    console.error('Update error:', error);
  } else {
    console.log('Successfully completed full article update for Market Review post!');
  }
}

run();
