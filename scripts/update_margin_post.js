const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const newContentTemplate = `
<p>Margin (giao dịch ký quỹ) thường được ví như một thanh gươm hai lưỡi sắc bén nhất trên thị trường chứng khoán. Nó vinh danh những nhà đầu tư kỷ luật bằng những siêu lợi nhuận kép chỉ trong một chu kỳ ngắn, nhưng đồng thời lại là hố đen nuốt chửng toàn bộ tài sản của đám đông thiếu phương pháp với chỉ một cú sập hầm vài phiên. Trong đầu tư, không có khái niệm công cụ sai, chỉ có người sử dụng công cụ chưa đủ tầm vóc kỷ luật.</p>

<p>Để đạt đến đẳng cấp của những tay chơi chuyên nghiệp năm 2026, bạn bắt buộc phải thấu hiểu cơ chế cấu trúc dòng tiền của Margin. Bài viết này sẽ bóc đi lớp mặt nạ đáng sợ của đòn bẩy tài chính, bằng cách cung cấp những chiến lược quản trị rủi ro toán học lạnh lùng. Tại đây, bạn sẽ học được kỹ thuật tối đa hóa lợi nhuận mà không bao giờ cho phép bản thân rơi vào án tử "Cháy tài khoản" (Margin Call).</p>

<h2>Bản chất Margin: Không phải vé số, là kinh doanh</h2>
<p>Khi sử dụng Margin, bạn đang thế chấp chính những cổ phiếu đang có sẵn trong danh mục làm tài sản đảm bảo để vay thêm nguồn tiền nóng từ công ty chứng khoán, nhằm mục đích đánh thốc vào một vị thế tăng giá. Lợi nhuận sinh ra sẽ tăng theo cấp số nhân khi thị trường đi lên, nhưng rủi ro rơi tự do cũng được phóng đại với cấp độ tương đương khi cổ phiếu quay đầu cắm mỏ.</p>
<p>Nhiều nhà đầu tư cá nhân mới mẻ (F0) coi Margin như một cách để "tất tay gỡ gạc" các khoản lỗ trước đó, hoặc đánh đồng nó với một vé số nhân đôi hy vọng đổi đời nhanh chóng. Sự thật mang tính hệ thống là: Bạn chỉ nên vay thêm vốn mở rộng quy mô khi chiến lược đầu tư cốt lõi bằng tiền mặt của bạn đã hoạt động trơn tru và chạm điểm sinh lời. Nếu danh mục mua bằng tiền thịt của bạn đang chìm trong sắc đỏ vì kỹ năng chọn điểm rơi kém, việc húng hắng cắm thêm Margin vào chẳng khác nào hành động đổ vài can xăng vào căn nhà đang bốc cháy.</p>

<!-- INJECT_CALC -->

<h2>Lằn ranh tử thần: Lực sát thương của Margin Call</h2>
<p>Ám ảnh bóp nghẹt nhịp tim lớn nhất của bất kỳ ai dùng vay ký quỹ thiếu phanh chính là trạng thái Xử lý tài sản (Force Sell). Khi giá cổ phiếu lao dốc khiến tài sản thế chấp bị ăn mòn xuống dưới một ngưỡng rủi ro cho định, công ty chứng khoán sẽ lập tức chặn lệnh mua và yêu cầu bạn nạp thêm tiền mặt (Margin Call). Nếu bạn không có tiền xoay xở và đắp vào trong vài giờ, hệ thống máy tính sẽ đóng hoàn toàn cảm xúc và tự động bán tháo cổ phiếu của bạn bằng lệnh giá thị trường rẻ mạt nhất.</p>
<p>Sự tàn nhẫn của Force Sell là nó thường diễn ra tại đúng vùng hoảng loạn khốc liệt nhất của một nhịp rũ hàng. Cổ phiếu của bạn bị ép bán rẻ như cho, và thường thì chỉ ngay ngày hôm sau thị trường làm cú rút chân tăng trần rực rỡ, nhưng tài khoản của bạn thì đã bốc hơi phần vốn vĩnh viễn. Vậy nên, quản trị sát sao Tỷ lệ ký quỹ duy trì (Maintenance Margin) mới là chìa khóa phân biệt giữa con nợ và chuyên gia.</p>

<!-- INJECT_CUTLOSS -->

<h2>3 Quy tắc Vàng: Đường quyền dứt khoát không xước tay</h2>
<p>Cất thanh gươm không dám dùng không gọi là bảo toàn, người thực sự mạnh là người biết rút gươm và thu hồi theo nhịp sắc bén của trận đánh. Để sống sót với đợt sóng dùng Margin, bạn phải găm vào đầu 3 nguyên lý này:</p>
<p><strong>1. Chỉ mua Margin khi đã được lót đệm lãi (Profit Cushion):</strong> Tuyệt đối không bao giờ dùng Margin để đánh cược "bắt đáy" hoặc bình quân giá xuống (Averaging down). Một khi đã sai sóng, việc nhồi dòng tiền vay chính là hành động tự kết liễu nhanh nhất. Ban chỉ được phép mở rộng Margin khi phần mua bằng tiền mặt đã xanh tốt và vượt kháng cự. Khoản đệm lãi đó sẽ trung hòa các nhịp rung lắc kỹ thuật giữa chừng mà không chạm vào mức vi phạm Call Margin.</p>
<p><strong>2. Xây dải lệnh theo rãnh kim tự tháp:</strong> Cấm kỵ dốc toàn bộ lượng sức mua (Full Margin) trong một phiên nhạy cảm. Bạn mồi nền thăm dò bằng tiền mặt, nếu đúng điểm dòng tiền dồn vào thì hẵng chắp thêm Margin cho một nửa vị thế, phần còn lại găm để dùng trong nhịp điều chỉnh kéo lại. Lối tư duy đánh lệnh này đảm bảo giá vốn trung bình của bạn luôn ở trạng thái chủ động rút lui.</p>
<p><strong>3. Máy chém không nhân nhượng:</strong> Nếu cổ phiếu lùi sâu và chạm nhẹ vào ngưỡng Stop-loss cơ bản (thường 5-7%), bạn bắt buộc phải bấm nút lệnh bán tống đi phần khối lượng mua bằng Margin ngay lập tức. Cắt đuôi gốc nợ Margin giúp bạn giải tỏa hàng tấn sức ép tâm lý, lấy lại sự tỉnh táo phán đoán bức tranh toàn diện thay vì ngồi cầu nguyện phép màu.</p>

<!-- INJECT_BALANCE -->

<h2>Tổng kết: Chiến thắng thuộc về kẻ có kỷ luật</h2>
<p>Trong mọi hoàn cảnh, quyền lực lớn nhất của Margin đền đáp lại cho những cá nhân có ý thức kiểm soát tài sản cao. Hãy kiên quyết từ chối đòn bẩy nếu bạn vẫn là người hay run khi cổ phiếu dao động nhẹ. Bí mật của những khoản nhân ba, nhân năm không rủi ro không hề nằm ở các chỉ báo lằng nhằng, nó nằm ở dũng khí cắt lỗ bẩm sinh của bạn. Chừng nào cắt lỗ còn là một bản năng nhẹ nhàng như hơi thở, thì lúc đó bạn hoàn toàn làm vương làm tướng cùng sự sắc bén của đòn bẩy ký quỹ.</p>
`;

const images = {
  featured: { path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\margin_featured_1775033553620.png" },
  calc: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\margin_calculator_1775033569953.png",
    alt: "Việc sử dụng đòn bẩy kỹ quỹ giống như một bài toán kinh doanh mở rộng",
    tag: "<!-- INJECT_CALC -->"
  },
  cutloss: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\margin_cutloss_1775033588067.png",
    alt: "Chấp nhận bán cắt lỗ dẹp bỏ cái tôi trước khi đòn bẩy margin giết chết tài khoản",
    tag: "<!-- INJECT_CUTLOSS -->"
  },
  balance: {
    path: "C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\margin_balance_1775033610616.png",
    alt: "Nghệ thuật thăng bằng rủi ro và lợi nhuận khi đánh full margin",
    tag: "<!-- INJECT_BALANCE -->"
  }
};

async function uploadImage(imagePath) {
  if (!fs.existsSync(imagePath)) return null;
  const buffer = fs.readFileSync(imagePath);
  const fileName = `stock-margin-post-${Date.now()}-${Math.floor(Math.random()*100)}.png`;
  const storagePath = `posts/${fileName}`;
  
  await supabase.storage.from('images').upload(storagePath, buffer, { contentType: 'image/png' });
  const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(storagePath);
  return publicUrl;
}

async function run() {
  console.log('Uploading 4 Margin Post images...');
  const featuredUrl = await uploadImage(images.featured.path);
  const calcUrl = await uploadImage(images.calc.path);
  const cutlossUrl = await uploadImage(images.cutloss.path);
  const balanceUrl = await uploadImage(images.balance.path);

  let finalContent = newContentTemplate;
  
  if (calcUrl) finalContent = finalContent.replace(images.calc.tag, `\n<img src="${calcUrl}" alt="${images.calc.alt}" loading="lazy" />\n`);
  if (cutlossUrl) finalContent = finalContent.replace(images.cutloss.tag, `\n<img src="${cutlossUrl}" alt="${images.cutloss.alt}" loading="lazy" />\n`);
  if (balanceUrl) finalContent = finalContent.replace(images.balance.tag, `\n<img src="${balanceUrl}" alt="${images.balance.alt}" loading="lazy" />\n`);

  const slug = 'margin-chung-khoan-cach-dung-don-bay-an-toan-khong-chay-tk';
  
  const updates = { 
    content: finalContent,
    excerpt: "Giao dịch ký quỹ là món quà lợi nhuận kép tuyệt vời cho những nhà giao dịch kỷ luật và là bản án tử hình tài khoản cho đám đông thiếu kỷ luật. Cùng tìm hiểu cách sử dụng gươm báu.",
    meta_description: "Hướng dẫn toàn diện về Margin chứng khoán 2026. Phân tích rõ định nghĩa Call Margin và Force Sell, đi kèm 3 chiến lược thiết lập vị thế đòn bẩy phòng thủ tối thượng tránh cháy tài khoản.",
    reading_time: "5 phút đọc"
  };
  
  if (featuredUrl) updates.featured_image = featuredUrl;

  const { error } = await supabase.from('posts').update(updates).eq('slug', slug);
  if (error) {
    console.error('Update error:', error);
  } else {
    console.log('Successfully completed full article update for Stock Margin post!');
  }
}

run();
