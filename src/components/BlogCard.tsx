"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readingTime: string;
    tags: string[];
    featured?: boolean;
    image?: string;
}

interface BlogCardProps {
    post: BlogPost;
}

// 100% Free Fallback URLs from Unsplash (dựa trên domain đã allow trong config của bạn)
const getCategoryImage = (category: string) => {
    switch (category) {
        case 'chung-khoan':
        case 'quy-dau-tu':
        case 'trai-phieu':
        case 'tai-chinh-ca-nhan':
        case 'khoi-nghiep':
            return 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format'; // biểu đồ chứng khoán
        case 'bat-dong-san':
            return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format'; // toà nhà kiến trúc
        case 'vang':
        case 'dau-tu-thay-the':
            return 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&auto=format'; // vàng miếng
        default:
            return 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format';
    }
};

export default function BlogCard({ post }: BlogCardProps) {
    const defaultImage = getCategoryImage(post.category);
    // Sử dụng state tự động fallback 100% khi ảnh bị lỗi (404/500)
    const [imgSrc, setImgSrc] = useState(post.image || defaultImage);

    return (
        <article className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full">
            {/* Image container */}
            <div className="h-48 relative bg-primary-light overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => {
                        // Tự nhẩy sang ảnh dự phòng ngay khi URL kia chết
                        setImgSrc(defaultImage);
                    }}
                />

                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold uppercase tracking-wide text-white border border-white/10 shadow-lg">
                        {post.category.replace(/-/g, ' ')}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs mb-3 text-text-muted">
                    <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-accent-gold transition-colors line-clamp-2">
                    <Link href={`/blog/${post.category}/${post.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" />
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                    {post.tags.slice(0, 3).map(tag => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded bg-white/5 text-text-muted"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
