import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category_id: string;
    tags: string[];
    is_published: boolean;
    reading_time: string;
    meta_title: string | null;
    meta_description: string | null;
    focus_keyword: string | null;
    featured_image: string | null;
    featured_image_alt: string | null;
    scheduled_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: string;
}

// Upload image to Supabase Storage
export async function uploadImage(file: File): Promise<string | null> {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `posts/${fileName}`;

    const { error } = await supabase.storage
        .from('images')
        .upload(filePath, file);

    if (error) {
        console.error('Upload error:', error);
        return null;
    }

    const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

    return publicUrl;
}

// Delete image from Storage
export async function deleteImage(url: string): Promise<boolean> {
    const path = url.split('/images/')[1];
    if (!path) return false;

    const { error } = await supabase.storage
        .from('images')
        .remove([path]);

    return !error;
}

// Smart filter: show published posts + scheduled posts whose time has arrived
export function publishedFilter(): string {
    return `is_published.eq.true,and(scheduled_at.not.is.null,scheduled_at.lte.${new Date().toISOString()})`;
}
