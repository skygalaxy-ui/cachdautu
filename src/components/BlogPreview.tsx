import Link from "next/link";
import BlogCard from "./BlogCard";
import { getFeaturedPosts } from "@/lib/posts";

export default function BlogPreview() {
    const featuredPosts = getFeaturedPosts();

    return (
        <section className="section">
            <div className="container">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span
                            className="text-sm font-medium uppercase tracking-wider"
                            style={{ color: 'var(--color-accent-gold)' }}
                        >
                            Bài viết nổi bật
                        </span>
                        <h2 className="mt-2">
                            Nhận định & <span className="gradient-text-emerald">Phân tích</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="mt-4 md:mt-0 text-sm font-medium flex items-center gap-2 hover:text-[var(--color-accent-gold)] transition-colors"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Xem tất cả bài viết
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredPosts.map(post => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
