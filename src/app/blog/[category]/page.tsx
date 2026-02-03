import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { categories, getPostsByCategory, getCategoryBySlug } from "@/lib/posts";

interface CategoryPageProps {
    params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
    return categories.map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { category } = await params;
    const cat = getCategoryBySlug(category);
    if (!cat) return { title: "Không tìm thấy" };

    return {
        title: `${cat.name} - Cách Đầu Tư`,
        description: `Khám phá kiến thức đầu tư về ${cat.name.toLowerCase()}: ${cat.description}`,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params;
    const cat = getCategoryBySlug(category);
    if (!cat) notFound();

    const posts = getPostsByCategory(category);

    return (
        <div className="pt-32 pb-16">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    <Link href="/" className="hover:text-white">Trang chủ</Link>
                    <span className="mx-2">/</span>
                    <Link href="/blog" className="hover:text-white">Blog</Link>
                    <span className="mx-2">/</span>
                    <span style={{ color: 'var(--color-accent-gold)' }}>{cat.name}</span>
                </nav>

                {/* Header */}
                <div className="mb-12">
                    <span className={`category-badge ${category} mb-4`}>
                        {cat.name}
                    </span>
                    <h1 className="mt-4 mb-4">{cat.name}</h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        {cat.description}
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap gap-3 mb-12">
                    <Link
                        href="/blog"
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-[rgba(255,215,0,0.2)]"
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--color-text-secondary)'
                        }}
                    >
                        Tất cả
                    </Link>
                    {categories.map(c => (
                        <Link
                            key={c.slug}
                            href={`/blog/${c.slug}`}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                            style={c.slug === category ? {
                                background: 'var(--gradient-gold)',
                                color: 'var(--color-primary)'
                            } : {
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--color-text-secondary)'
                            }}
                        >
                            {c.name}
                        </Link>
                    ))}
                </div>

                {/* Posts */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 glass-card">
                        <p className="text-xl mb-4">Chưa có bài viết nào trong chuyên mục này</p>
                        <Link href="/blog" className="btn-secondary">
                            Xem tất cả bài viết
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
