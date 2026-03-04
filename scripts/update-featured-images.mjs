// scripts/update-featured-images.mjs
// Tự động cập nhật ảnh đại diện cho bài viết từ Unsplash (free)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://njchsjhdkcfaouqwyutc.supabase.co';
const supabaseKey = 'sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF';
const supabase = createClient(supabaseUrl, supabaseKey);

// ============================================
// CURATED UNSPLASH IMAGES - Free for commercial use
// Organized by investment/finance topic keywords
// ============================================
const IMAGE_LIBRARY = {
  'stock-market': [
    'photo-1611974789855-9c2a0a7236a3', // trading charts green
    'photo-1535320903710-d993d3d77d29', // stock market display
    'photo-1642790106117-e829e14a795f', // trading screen
    'photo-1468254095679-bbcba94a7066', // financial charts
  ],
  'crypto': [
    'photo-1621761191319-c6fb62004040', // bitcoin gold
    'photo-1639762681485-074b7f938ba0', // ethereum
    'photo-1622630998477-20aa696ecb05', // crypto coins
    'photo-1518546305927-5a555bb7020d', // bitcoin close-up
  ],
  'real-estate': [
    'photo-1560518883-ce09059eeffa', // house keys
    'photo-1582407947304-fd86f028f716', // modern building
    'photo-1570129477492-45c003edd2be', // house exterior
    'photo-1512917774080-9991f1c4c750', // luxury home
  ],
  'savings': [
    'photo-1579621970563-ebec7560ff3e', // piggy bank
    'photo-1554224155-6726b3ff858f', // coins jar
    'photo-1633158829585-23ba8f7c8caf', // savings growth
    'photo-1604594849809-dfedbc827105', // money management
  ],
  'bonds': [
    'photo-1460925895917-afdab827c52f', // financial documents
    'photo-1454165804606-c3d57bc86b40', // business charts laptop
    'photo-1551288049-bebda4e38f71', // data analytics
    'photo-1526304640581-d334cdbbf45e', // calculator finance
  ],
  'business': [
    'photo-1507003211169-0a1dd7228f2d', // business meeting
    'photo-1556761175-5973dc0f32e7', // corporate office
    'photo-1542744173-8e7e53415bb0', // team collaboration
    'photo-1560472355-536de3962603', // office workspace
  ],
  'investment': [
    'photo-1590283603385-17ffb3a7f29f', // stack of coins
    'photo-1565373677928-90e963765bdc', // growth chart
    'photo-1434626881859-194d67b2b86f', // upward arrows
    'photo-1559526324-593bc073d938', // golden bull
  ],
  'technology': [
    'photo-1518770660439-4636190af475', // circuit board
    'photo-1485827404703-89b55fcc595e', // AI robot
    'photo-1677442136019-21780ecad995', // AI technology
    'photo-1504868584819-f8e8b4b6d7e3', // tech workspace
  ],
  'personal-finance': [
    'photo-1553729459-afe8f2e2ed65', // financial planning
    'photo-1563013544-824ae1b704d3', // credit card
    'photo-1450101499163-c8848c66ca85', // business handshake
    'photo-1521791136064-7986c2920216', // money in hand
  ],
  'education': [
    'photo-1434030216411-0b793f4b4173', // study desk
    'photo-1513475382585-d06e58bcb0e0', // learning books
    'photo-1456513080510-7bf3a84b82f8', // open books
    'photo-1503676260728-1c00da094a0b', // university knowledge
  ],
  'startup': [
    'photo-1559136555-9303baea8ebd', // startup team
    'photo-1557804506-669a67965ba0', // brainstorming
    'photo-1497366216548-37526070297c', // modern office
    'photo-1519389950473-47ba0277781c', // tech office
  ],
  'etf': [
    'photo-1611974789855-9c2a0a7236a3', // trading charts
    'photo-1642790106117-e829e14a795f', // trading screen
    'photo-1535320903710-d993d3d77d29', // market display
    'photo-1460925895917-afdab827c52f', // financial docs
  ],
};

// ============================================
// KEYWORD MAPPING - Vietnamese to English topics
// ============================================
function detectTopic(title) {
  const titleLower = title.toLowerCase();
  
  const rules = [
    { keywords: ['etf', 'vn30', 'vnfin', 'quỹ chỉ số'], topic: 'etf' },
    { keywords: ['crypto', 'bitcoin', 'btc', 'altcoin', 'defi', 'blockchain', 'token', 'nft'], topic: 'crypto' },
    { keywords: ['bất động sản', 'nhà đất', 'mua nhà', 'thuê nhà', 'bds'], topic: 'real-estate' },
    { keywords: ['cổ phiếu', 'chứng khoán', 'vn-index', 'sàn chứng', 'mở tài khoản chứng khoán', 'hose', 'hnx'], topic: 'stock-market' },
    { keywords: ['trái phiếu', 'ytm', 'coupon', 'bond'], topic: 'bonds' },
    { keywords: ['startup', 'crowdfunding', 'gọi vốn', 'esop'], topic: 'startup' },
    { keywords: ['tiết kiệm', 'quỹ dự phòng', 'lãi suất', 'gửi tiết kiệm', 'lãi kép'], topic: 'savings' },
    { keywords: ['thói quen tài chính', 'quản lý tài chính', 'thu nhập', 'chi tiêu', 'ngân sách', 'nợ'], topic: 'personal-finance' },
    { keywords: ['ai ', 'công nghệ', 'fintech', 'robo'], topic: 'technology' },
    { keywords: ['warren buffett', 'peter lynch', 'kinh nghiệm', 'bài học', 'nguyên tắc', 'tâm lý'], topic: 'education' },
    { keywords: ['doanh nghiệp', 'cổ tức', 'phân tích', 'báo cáo tài chính', 'pe', 'eps'], topic: 'business' },
    { keywords: ['đầu tư', 'rủi ro', 'danh mục', 'phân bổ', 'lợi nhuận', 'chiến lược'], topic: 'investment' },
  ];

  for (const rule of rules) {
    if (rule.keywords.some(kw => titleLower.includes(kw))) {
      return rule.topic;
    }
  }

  return 'investment'; // default
}

function getImageUrl(topic, index) {
  const images = IMAGE_LIBRARY[topic] || IMAGE_LIBRARY['investment'];
  const photoId = images[index % images.length];
  return `https://images.unsplash.com/${photoId}?w=1200&h=630&fit=crop&q=80`;
}

// ============================================
// MAIN: Fetch posts, download images, upload to Supabase Storage
// ============================================
async function main() {
  console.log('🔍 Đang tìm bài viết thiếu ảnh đại diện...\n');

  // Step 1: Fetch posts without featured_image
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, slug, featured_image')
    .or('featured_image.is.null,featured_image.eq.')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Lỗi truy vấn:', error.message);
    process.exit(1);
  }

  if (!posts || posts.length === 0) {
    console.log('✅ Tất cả bài viết đều đã có ảnh đại diện!');
    return;
  }

  console.log(`📋 Tìm thấy ${posts.length} bài viết thiếu ảnh đại diện:\n`);
  posts.forEach((p, i) => console.log(`  ${i + 1}. ${p.title}`));
  console.log('');

  let successCount = 0;
  let failCount = 0;

  // Track used images per topic to avoid duplicates
  const topicCounters = {};

  for (const post of posts) {
    try {
      const topic = detectTopic(post.title);
      topicCounters[topic] = (topicCounters[topic] || 0);
      const imageUrl = getImageUrl(topic, topicCounters[topic]);
      topicCounters[topic]++;

      console.log(`⬇️  [${topic}] Downloading image for: ${post.title}`);

      // Download from Unsplash
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} downloading image`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      // Upload to Supabase Storage
      const fileName = `posts/featured-${post.slug}.jpg`;
      
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(fileName, buffer, {
          contentType: 'image/jpeg',
          upsert: true,
        });

      if (uploadError) {
        throw new Error(`Upload error: ${uploadError.message}`);
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(fileName);

      // Update post featured_image
      const { error: updateError } = await supabase
        .from('posts')
        .update({ featured_image: publicUrl })
        .eq('id', post.id);

      if (updateError) {
        throw new Error(`Update error: ${updateError.message}`);
      }

      successCount++;
      console.log(`  ✅ Done → ${publicUrl}\n`);

      // Small delay to be nice to Unsplash
      await new Promise(r => setTimeout(r, 500));

    } catch (err) {
      failCount++;
      console.error(`  ❌ Failed: ${err.message}\n`);
    }
  }

  console.log('═══════════════════════════════════════');
  console.log(`📊 Kết quả: ${successCount} thành công, ${failCount} thất bại`);
  console.log('═══════════════════════════════════════');
}

main().catch(console.error);
