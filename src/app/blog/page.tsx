import { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/lib/posts";

export const metadata: Metadata = {
    title: "Blog - Cách Đầu Tư | Kiến thức đầu tư toàn diện",
    description: "Khám phá hàng trăm bài viết về chứng khoán, crypto, bất động sản, vàng, forex và nhiều loại đầu tư khác.",
};

export default function BlogPage() {
    return (
        <div className="pt-32 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <span
                        className="text-sm font-medium uppercase tracking-wider"
                        style={{ color: 'var(--color-accent-gold)' }}
                    >
                        Blog
                    </span>
                    <h1 className="mt-2 mb-4">
                        Kiến thức <span className="gradient-text-emerald">đầu tư</span> toàn diện
                    </h1>
                    <p
                        className="max-w-2xl mx-auto"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Từ người mới bắt đầu đến nhà đầu tư chuyên nghiệp,
                        chúng tôi có nội dung phù hợp với mọi trình độ.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <Link
                        href="/blog"
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                        style={{
                            background: 'var(--gradient-gold)',
                            color: 'var(--color-primary)'
                        }}
                    >
                        Tất cả
                    </Link>
                    {categories.map(cat => (
                        <Link
                            key={cat.slug}
                            href={`/blog/${cat.slug}`}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-[rgba(255,215,0,0.2)]"
                            style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--color-text-secondary)'
                            }}
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map(post => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
