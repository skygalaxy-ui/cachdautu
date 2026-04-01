const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const newContentTemplate = `
<p>Một trong những nỗi sợ lớn nhất của con người trưởng thành không phải là cái chết, mà là sự túng quẫn đột ngột. Cuộc sống luôn ẩn chứa những biến số không thể tính trước: một đợt sa thải bất ngờ, một tai nạn giao thông trên đường đi làm, hay một căn bệnh hiểm nghèo cần hàng trăm triệu để chạy chữa. Nếu bạn đang đứng trên một con hào phòng thủ bằng giấy, mọi thứ bạn xây dựng có thể sập xuống chỉ sau một đêm. Đó là lý do duy nhất Quỹ dự phòng khẩn cấp tồn tại: Nó không phải là một khoản đầu tư sinh lời, nó là chiếc khiên bảo hiểm cho bình yên tâm trí của bạn.</p>

<p>Nhưng thật nghịch lý khi hầu hết mọi người đều phớt lờ việc thiết lập một quỹ khẩn cấp đúng nghĩa. Có người lầm tưởng việc có vài chục triệu trong thẻ tín dụng là "khẩn cấp", trong khi người khác lại trói buộc toàn bộ tiền mặt của mình vào các miếng đất nền không thể thanh khoản kịp thời. Hãy bóc tách hai câu hỏi sống còn: Rốt cuộc bạn cần bao nhiêu tiền, và bạn nên cất số tiền thiêng liêng đó ở đâu?</p>

<h2>Toán học của sự an tâm: Bao nhiêu là đủ?</h2>
<p>Không có một con số chung cho tất cả mọi người, bởi vì mức sống của chúng ta khác nhau. Công thức vàng được các nhà hoạch định tài chính thế giới khuyên dùng nằm ở vùng: "Gấp 3 đến 6 lần chi phí sinh hoạt thiết yếu hàng tháng".</p>
<p>Lưu ý kỹ cụm từ "thiết yếu". Bạn không cần dự phòng tiền cho việc đi xem phim hay mua sắm túi xách. Chi phí thiết yếu bao gồm: Tiền thuê nhà, tiền ăn uống cơ bản, tiền điện nước, bảo hiểm và xăng xe đi lại. Nếu tổng lượng chi phí sinh tồn của bạn ở mức 15 triệu một tháng, thì một người độc thân, công việc ổn định cần xây dựng một quỹ khoảng 45 triệu đồng (3 tháng). Tuy nhiên, nếu bạn đã có gia đình, là lao động chính, hoặc làm trong lĩnh vực tự do (Freelancer) có dòng tiền bấp bênh, bạn buộc phải nhắm đến mốc 90 triệu đồng (6 tháng), thậm chí là 12 tháng nếu thu nhập của bạn hoàn toàn dựa vào lợi nhuận đầu tư.</p>

<!-- INJECT_CALC -->

<h2>Tính thanh khoản và vị trí đắc địa: Để Quỹ Khẩn Cấp ở đâu?</h2>
<p>Luật pháp của Quỹ khẩn cấp có hai điều khoản bất di bất dịch: Thứ nhất, nó phải được rút ra dưới dạng tiền mặt trong vòng 24 giờ bất kể lúc nào (Tính thanh khoản tuyệt đối). Thứ hai, nó không được phép sụt giảm giá trị gốc theo thời gian (Bảo toàn vốn).</p>
<p>Bởi vậy, việc "cất" quỹ khẩn cấp vào thùng rỗng, Vàng (biến động hàng ngày), hay Bất động sản (tính thanh khoản mất vài tháng) là một sai lầm chết người. Bạn cũng không nên để nó nằm chết trong tài khoản thanh toán không có lãi suất (0%) vì sẽ bị lạm phát bào mòn. Kênh cất giữ hoàn hảo nhất trong kỷ nguyên số chính là các TÀI KHOẢN TIẾT KIỆM KHÔNG KỲ HẠN hoặc CÁC TÚI THẦN TÀI trực tuyến trên ứng dụng ngân hàng. Tại đây, mức lãi suất khoảng 3-4%/năm đủ để giảm bớt gánh nặng lạm phát, trong khi bạn vẫn có thể ấn một nút để tiền đổ trực tiếp về tài khoản chi tiêu ngay lập tức giữa đêm khuya nếu cần.</p>

<!-- INJECT_APP -->

<h2>Tâm lý học về việc "Cấm chạm vào"</h2>
<p>Có một ranh giới rất mỏng manh giữa việc đi sửa xe vì tai nạn (khẩn cấp) và việc thấy chiếc điện thoại đời mới được giảm giá 30% (tuyệt đối không khẩn cấp). Bí quyết cốt lõi để duy trì chiếc khiên này là sự "Bất khả xâm phạm". Quỹ khẩn cấp phải hoàn toàn biệt lập với nguồn tiền chi tiêu hàng ngày của bạn. Đừng bao giờ dồn chung tất cả vào một tài khoản ngân hàng duy nhất, bạn sẽ gặp ảo giác rằng mình đang rất rủng rỉnh tiền bạc.</p>

<!-- INJECT_JAR -->

<h2>Tổng kết: Bước đầu tiên của Tự do Tài chính</h2>
<p>Việc ép bản thân nhịn ăn nhịn mặc để nhét đầy quỹ dự phòng khẩn cấp có thể nhàm chán và khó khăn lúc đầu. Nó giống như việc bạn phải ném tiền để mua một chiếc bình cứu hỏa mà bạn hi vọng sẽ không bao giờ có dịp phải dùng đến. Nhưng đổi lại, những giấc ngủ đêm của bạn sẽ không còn chập chờn bởi bộn bề lo toán hay nỗi sợ hãi sa thải. Bạn không thể nhảy cao nếu đôi chân mãi chênh vênh sợ ngã, và Quỹ dự phòng chính là mặt đất vững chãi để bạn phóng mình lên những khoản đầu tư vĩ đại, rủi ro và màu mỡ hơn.</p>
`;

const images = {
  featured: {
    path: 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\emergency_fund_umbrella_1775032499856.png',
  },
  calc: {
    path: 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\emergency_fund_calc_1775032516862.png',
    alt: 'Toán học xây dựng quỹ dự phòng khẩn cấp',
    tag: '<!-- INJECT_CALC -->'
  },
  app: {
    path: 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\emergency_fund_app_1775032536321.png',
    alt: 'Cất giữ quỹ dự phòng ở các ngân hàng số vì tính thanh khoản rút nhanh',
    tag: '<!-- INJECT_APP -->'
  },
  jar: {
    path: 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\emergency_fund_jar_1775032553528.png',
    alt: 'Nguyên tắc cấm chạm vào quỹ khẩn cấp nếu không thật sự cần',
    tag: '<!-- INJECT_JAR -->'
  }
};

async function uploadImage(imagePath) {
  if (!fs.existsSync(imagePath)) return null;
  const buffer = fs.readFileSync(imagePath);
  const fileName = `ef-post-auto-${Date.now()}-${Math.floor(Math.random()*100)}.png`;
  const storagePath = `posts/${fileName}`;
  
  await supabase.storage.from('images').upload(storagePath, buffer, { contentType: 'image/png' });
  const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(storagePath);
  return publicUrl;
}

async function run() {
  console.log('Uploading 4 images...');
  const featuredUrl = await uploadImage(images.featured.path);
  const calcUrl = await uploadImage(images.calc.path);
  const appUrl = await uploadImage(images.app.path);
  const jarUrl = await uploadImage(images.jar.path);

  let finalContent = newContentTemplate;
  
  if (calcUrl) {
    finalContent = finalContent.replace(images.calc.tag, `\n<img src="${calcUrl}" alt="${images.calc.alt}" loading="lazy" />\n`);
  }
  if (appUrl) {
    finalContent = finalContent.replace(images.app.tag, `\n<img src="${appUrl}" alt="${images.app.alt}" loading="lazy" />\n`);
  }
  if (jarUrl) {
    finalContent = finalContent.replace(images.jar.tag, `\n<img src="${jarUrl}" alt="${images.jar.alt}" loading="lazy" />\n`);
  }

  const slug = 'quy-du-phong-khan-cap-bao-nhieu-la-du-va-de-o-dau';
  
  const updates = { 
    content: finalContent,
    excerpt: "Nghịch lý là nhiều người sẵn sàng trói hàng tỷ đồng vào bất động sản nhưng lại chật vật rút tiền lúc tai nạn. Bài toán 3-6 tháng giúp bạn thảnh thơi giấc ngủ.",
    meta_description: "Phân tích 2 yếu tố chí mạng của quỹ dự phòng khẩn cấp: Cần bao nhiêu tiền và phải lưu trữ ở kênh tài sản nào để có thể thanh khoản ngay trong đêm tối.",
    reading_time: "5 phút đọc"
  };
  
  if (featuredUrl) updates.featured_image = featuredUrl;

  const { error } = await supabase.from('posts').update(updates).eq('slug', slug);
  if (error) {
    console.error('Update error:', error);
  } else {
    console.log('Successfully completed full article update for Emergency Fund post!');
  }
}

run();
