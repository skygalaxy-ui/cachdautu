// src/core/types.ts
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
    featured_image: string | null;
    meta_title: string | null;
    meta_description: string | null;
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
