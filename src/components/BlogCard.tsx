import Link from "next/link";
import { BlogPost } from "@/lib/posts";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-accent-gold)] group">
            {/* Image placeholder with gradient */}
            <div
                className="h-48 relative"
                style={{
                    background: `linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)`
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="text-6xl">📊</span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`category-badge ${post.category}`}>
                        {post.category.replace(/-/g, ' ')}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
                    <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent-gold)] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.category}/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p
                    className="text-sm line-clamp-2 mb-4"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map(tag => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded"
                            style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--color-text-muted)'
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
