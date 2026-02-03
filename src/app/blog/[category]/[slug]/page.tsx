import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getCategoryBySlug, getPostsByCategory } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

interface PostPageProps {
    params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map(post => ({
        category: post.category,
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { category, slug } = await params;
    const post = getPostBySlug(category, slug);
    if (!post) return { title: "Không tìm thấy" };

    return {
        title: `${post.title} - Cách Đầu Tư`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
        },
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const { category, slug } = await params;
    const post = getPostBySlug(category, slug);
    const cat = getCategoryBySlug(category);

    if (!post || !cat) notFound();

    const relatedPosts = getPostsByCategory(category)
        .filter(p => p.slug !== slug)
        .slice(0, 3);

    return (
        <div className="pt-32 pb-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-3">
                        {/* Breadcrumb */}
                        <nav className="mb-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            <Link href="/" className="hover:text-white">Trang chủ</Link>
                            <span className="mx-2">/</span>
                            <Link href="/blog" className="hover:text-white">Blog</Link>
                            <span className="mx-2">/</span>
                            <Link href={`/blog/${category}`} className="hover:text-white">{cat.name}</Link>
                            <span className="mx-2">/</span>
                            <span style={{ color: 'var(--color-accent-gold)' }}>{post.title.slice(0, 30)}...</span>
                        </nav>

                        {/* Header */}
                        <header className="mb-8">
                            <span className={`category-badge ${category} mb-4`}>
                                {cat.name}
                            </span>
                            <h1 className="mt-4 mb-4">{post.title}</h1>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                <span>{new Date(post.date).toLocaleDateString('vi-VN', {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                })}</span>
                                <span>•</span>
                                <span>{post.readingTime}</span>
                            </div>
                        </header>

                        {/* Featured Image Placeholder */}
                        <div
                            className="w-full h-64 md:h-96 rounded-xl mb-8 flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)'
                            }}
                        >
                            <span className="text-8xl opacity-30">📊</span>
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-invert prose-lg max-w-none"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            <p className="text-xl mb-6" style={{ color: 'var(--color-text)' }}>
                                {post.excerpt}
                            </p>

                            <h2 style={{ color: 'var(--color-text)' }}>Giới thiệu</h2>
                            <p>
                                Đây là nội dung mẫu cho bài viết &quot;{post.title}&quot;. Trong phiên bản đầy đủ,
                                bạn sẽ thêm nội dung thực tế từ cơ sở dữ liệu hoặc file markdown.
                            </p>

                            <h2 style={{ color: 'var(--color-text)' }}>Nội dung chính</h2>
                            <p>
                                Bài viết này thuộc chuyên mục {cat.name}, cung cấp kiến thức về {cat.description.toLowerCase()}.
                                Chúng tôi sẽ hướng dẫn bạn từng bước để hiểu rõ hơn về lĩnh vực này.
                            </p>

                            <h2 style={{ color: 'var(--color-text)' }}>Kết luận</h2>
                            <p>
                                Hy vọng bài viết này giúp bạn có cái nhìn tổng quan về chủ đề.
                                Hãy tiếp tục theo dõi Cách Đầu Tư để nhận thêm kiến thức hữu ích.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--glass-border)' }}>
                            <h4 className="text-sm mb-4" style={{ color: 'var(--color-text-muted)' }}>Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-sm"
                                        style={{
                                            background: 'rgba(255, 215, 0, 0.1)',
                                            border: '1px solid rgba(255, 215, 0, 0.3)',
                                            color: 'var(--color-accent-gold)'
                                        }}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-32">
                            {/* Table of Contents */}
                            <div className="glass-card p-6 mb-6">
                                <h4 className="font-semibold mb-4" style={{ color: 'var(--color-accent-gold)' }}>
                                    Mục lục
                                </h4>
                                <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    <li className="hover:text-white cursor-pointer">1. Giới thiệu</li>
                                    <li className="hover:text-white cursor-pointer">2. Nội dung chính</li>
                                    <li className="hover:text-white cursor-pointer">3. Kết luận</li>
                                </ul>
                            </div>

                            {/* Newsletter CTA */}
                            <div className="glass-card p-6" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)' }}>
                                <h4 className="font-semibold mb-2">Đăng ký nhận tin</h4>
                                <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                    Nhận bài viết mới và phân tích thị trường.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Email của bạn"
                                    className="w-full px-4 py-2 rounded-lg text-sm mb-3"
                                    style={{
                                        background: 'var(--color-primary)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                                <button className="btn-primary w-full text-sm py-2">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="mt-16 pt-16" style={{ borderTop: '1px solid var(--glass-border)' }}>
                        <h2 className="mb-8">Bài viết liên quan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map(p => (
                                <BlogCard key={p.slug} post={p} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
