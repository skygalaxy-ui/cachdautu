import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/posts";

interface BlogCardProps {
    post: BlogPost;
}

const getCategoryImage = (category: string) => {
    switch (category) {
        case 'chung-khoan':
        case 'quy-dau-tu':
        case 'trai-phieu':
        case 'tai-chinh-ca-nhan':
            return '/images/blog/stocks.png'; // High-tech charts concept
        case 'crypto':
        case 'khoi-nghiep':
            return '/images/blog/crypto.png'; // Blockchain concept
        case 'bat-dong-san':
            return '/images/blog/real-estate.png'; // Architecture concept
        case 'vang':
        case 'forex':
        case 'dau-tu-thay-the':
            return '/images/blog/gold.png'; // Gold/Wealth concept
        default:
            return '/images/blog/stocks.png';
    }
};

export default function BlogCard({ post }: BlogCardProps) {
    const displayImage = post.image || getCategoryImage(post.category);

    return (
        <article className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent-gold/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full">
            {/* Image container */}
            <div className="h-48 relative bg-primary-light overflow-hidden">
                <Image
                    src={displayImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
