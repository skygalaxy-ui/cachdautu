import { createClient } from '@supabase/supabase-js';
import { APP_CONFIG } from './config';

// Khởi tạo Supabase client (Singleton)
export const supabase = createClient(
    APP_CONFIG.supabase.url,
    APP_CONFIG.supabase.anonKey
);

// Khởi tạo Admin client (để vượt qua RLS nếu cần - dùng cho scripts hoặc admin)
export const supabaseAdmin = APP_CONFIG.supabase.serviceRole
    ? createClient(APP_CONFIG.supabase.url, APP_CONFIG.supabase.serviceRole)
    : supabase;

/**
 * Upload ảnh lên Supabase Storage
 */
export async function uploadImage(file: File): Promise<string | null> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `posts/${fileName}`;

    const { error } = await supabase.storage
        .from('images')
        .upload(filePath, file);

    if (error) {
        console.error('Core: Upload error:', error);
        return null;
    }

    const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

    return publicUrl;
}

/**
 * Xóa ảnh từ Storage
 */
export async function deleteImage(url: string): Promise<boolean> {
    const path = url.split('/image/')[1];
    if (!path) return false;

    const { error } = await supabase.storage
        .from('images')
        .remove([path]);

    return !error;
}

/**
 * Bộ lọc cho bài viết đã xuất bản
 * Chỉ hiện bài có is_published = true (đã được cron publish)
 * Bài scheduled nhưng chưa publish sẽ KHÔNG hiện trên site
 */
export function publishedFilter(): string {
    return `is_published.eq.true`;
}
