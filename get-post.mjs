import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://njchsjhdkcfaouqwyutc.supabase.co',
  'sb_publishable__uhKBoyqEVq-BOyEje9EAg_kjTRWpCF'
);

const { data, error } = await supabase
  .from('posts')
  .select('id, title, slug, content, excerpt, category_id, is_published, tags, featured_image, meta_description, focus_keyword, created_at, updated_at')
  .eq('slug', 'bao-hiem-nhan-tho-co-phai-kenh-dau-tu')
  .single();

if (error) {
  console.error('Error:', error);
} else {
  console.log('=== POST METADATA ===');
  console.log('ID:', data.id);
  console.log('Title:', data.title);
  console.log('Slug:', data.slug);
  console.log('Category ID:', data.category_id);
  console.log('Published:', data.is_published);
  console.log('Tags:', data.tags);
  console.log('Featured Image:', data.featured_image);
  console.log('Meta Description:', data.meta_description);
  console.log('Focus Keyword:', data.focus_keyword);
  console.log('Created:', data.created_at);
  console.log('Updated:', data.updated_at);
  console.log('Excerpt:', data.excerpt);
  console.log('\n=== CONTENT (first 5000 chars) ===');
  console.log(data.content?.substring(0, 5000));
  console.log('\n=== CONTENT LENGTH ===');
  console.log(data.content?.length, 'characters');
}
