/**
 * @deprecated Sử dụng trực tiếp từ @/core/supabase hoặc @/core/types
 * File này được giữ lại để tương thích ngược trong quá trình chuyển đổi sang Core CMS.
 */

export * from '@/core/supabase';
export * from '@/core/types';

import { supabase } from '@/core/supabase';
export default supabase;
