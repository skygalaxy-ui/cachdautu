const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const imagePath = 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\credit_card_payment_fixed_1775032630399.png';
  if (!fs.existsSync(imagePath)) return console.error("Not found");

  const buffer = fs.readFileSync(imagePath);
  const fileName = `cc-post-fixed-${Date.now()}.png`;
  const storagePath = `posts/${fileName}`;
  
  console.log("Uploading fixed CC image...");
  await supabase.storage.from('images').upload(storagePath, buffer, { contentType: 'image/png' });
  const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(storagePath);
  console.log("Uploaded url:", publicUrl);

  const slug = 'cach-su-dung-the-tin-dung-thong-minh-2026';
  const { data: post } = await supabase.from('posts').select('content').eq('slug', slug).single();
  
  const newContent = post.content.replace(/<img src="[^"]*" alt="Cách sử dụng thẻ tín dụng: Kỷ luật thanh toán dư nợ".*?>/, `<img src="${publicUrl}" alt="Cách sử dụng thẻ tín dụng: Kỷ luật thanh toán dư nợ" loading="lazy" />`);
  
  const { error } = await supabase.from('posts').update({ content: newContent }).eq('slug', slug);
  if (error) {
    console.error("Failed to update post content", error);
  } else {
    console.log("Fixed CC image successfully in the Database!");
  }
}
run();
