const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function injectImages() {
  const images = [
    {
      path: 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\chores_allowance_1775031868283.png',
      alt: 'Dạy con về tiền bạc: Trẻ làm việc nhà và nhận phần thưởng nhỏ',
      insertAfter: '<h2>Sự đánh đổi: Tiền bạc không tự nhiên mà có</h2>'
    },
    {
      path: 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\supermarket_choices_1775031889834.png',
      alt: 'Dạy con về tiền bạc: Dạy bé đi siêu thị tự chi tiêu',
      insertAfter: '<h2>Nghệ thuật ngân sách: Sự khác biệt giữa Mong muốn và Nhu cầu</h2>'
    },
    {
      path: 'C:\\Users\\PHUONG\\.gemini\\antigravity\\brain\\225a087d-ca30-45a5-85e2-1887730fd442\\three_jars_1775031907639.png',
      alt: 'Dạy con về tiền bạc: Nguyên tắc 3 chiếc lọ tiết kiệm chia tiền rành mạch',
      insertAfter: '<h2>Quy tắc ba chiếc lọ: Phân bổ dòng tiền từ sớm</h2>'
    }
  ];

  const uploadedUrls = {};

  console.log('Uploading 3 images...');
  for (const img of images) {
    if (!fs.existsSync(img.path)) {
      console.error('Missing image:', img.path);
      continue;
    }
    const buffer = fs.readFileSync(img.path);
    const fileName = `day-con-ve-tien-body-${Date.now()}-${Math.floor(Math.random()*100)}.png`;
    const storagePath = `posts/${fileName}`;
    
    await supabase.storage.from('images').upload(storagePath, buffer, { contentType: 'image/png' });
    const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(storagePath);
    uploadedUrls[img.path] = publicUrl;
    console.log('Uploaded:', publicUrl);
  }

  const slug = 'day-con-ve-tien-5-bai-hoc-tai-chinh-2026';
  const { data: post, error: fetchErr } = await supabase.from('posts').select('content').eq('slug', slug).single();
  
  if (fetchErr) {
    console.error('Fetch error:', fetchErr);
    return;
  }
  
  let content = post.content;

  for (const img of images) {
    if (uploadedUrls[img.path]) {
      const url = uploadedUrls[img.path];
      const imgHtml = `\n<img src="${url}" alt="${img.alt}" loading="lazy" />\n`;
      if (content.includes(img.insertAfter)) {
         content = content.replace(img.insertAfter, img.insertAfter + imgHtml);
      } else {
         console.warn('Could not find heading to insert image after:', img.insertAfter);
      }
    }
  }

  const { error: updateErr } = await supabase.from('posts').update({ content }).eq('slug', slug);
  if (updateErr) {
    console.error('Update content error:', updateErr);
  } else {
    console.log('Successfully injected 3 body images into content and updated Supabase!');
  }
}

injectImages();
