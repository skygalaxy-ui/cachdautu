import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    TrendingUp, Shield, BookOpen, Users, Star, CheckCircle2,
    ArrowRight, BarChart3, Building2, Coins, PiggyBank
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { publishedFilter } from "@/core/supabase";

// ISR: trang được cache tĩnh, tự cập nhật mỗi 10 phút
export const revalidate = 600;

export const metadata: Metadata = {
    title: "Học Đầu Tư Từ Cơ Bản Đến Nâng Cao | Cách Đầu Tư",
    description: "Bắt đầu hành trình đầu tư thông minh với 150+ bài phân tích chuyên sâu. Chứng khoán, bất động sản, vàng, trái phiếu — hoàn toàn miễn phí.",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://cachdautu.com/lp/hoc-dau-tu",
    },
};

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getFeaturedPosts() {
    try {
        const { data } = await supabase
            .from('posts')
            .select('id, title, slug, excerpt, featured_image, reading_time, categories(name, slug)')
            .or(publishedFilter())
            .order('views', { ascending: false })
            .limit(6);

        return data || [];
    } catch {
        return [];
    }
}

const benefits = [
    { icon: <BookOpen className="w-5 h-5" />, text: "150+ bài phân tích chuyên sâu" },
    { icon: <Shield className="w-5 h-5" />, text: "Quản lý rủi ro hàng đầu" },
    { icon: <Users className="w-5 h-5" />, text: "Cộng đồng 12,500+ nhà đầu tư" },
    { icon: <Star className="w-5 h-5" />, text: "100% miễn phí, không ẩn phí" },
];

const categories = [
    { icon: <BarChart3 className="w-6 h-6" />, name: "Chứng khoán", desc: "Phân tích kỹ thuật & cơ bản", slug: "chung-khoan", color: "from-blue-500 to-cyan-500" },
    { icon: <Building2 className="w-6 h-6" />, name: "Bất động sản", desc: "Đầu tư sinh lời bền vững", slug: "bat-dong-san", color: "from-emerald-500 to-green-500" },
    { icon: <Coins className="w-6 h-6" />, name: "Vàng", desc: "Tài sản trú ẩn an toàn", slug: "vang", color: "from-yellow-500 to-orange-500" },
    { icon: <PiggyBank className="w-6 h-6" />, name: "Tài chính cá nhân", desc: "Tiết kiệm & quản lý chi tiêu", slug: "tai-chinh-ca-nhan", color: "from-pink-500 to-rose-500" },
];

const trustPoints = [
    "Không cam kết lợi nhuận — chỉ kiến thức thật",
    "Nội dung được nghiên cứu và kiểm chứng",
    "Phù hợp mọi trình độ từ người mới đến chuyên gia",
    "Cập nhật liên tục theo diễn biến thị trường",
    "Hoàn toàn miễn phí, không yêu cầu đăng ký",
];

export default async function LandingPage() {
    const posts = await getFeaturedPosts();

    return (
        <div className="bg-primary min-h-screen text-text">
            {/* Minimal Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-white/5">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Cách Đầu Tư" width={32} height={32} className="rounded-lg" />
                        <span className="font-bold text-white text-lg">Cách Đầu Tư</span>
                    </Link>
                    <Link
                        href="/blog"
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-sm font-bold hover:shadow-glow-purple transition-all"
                    >
                        Khám phá ngay
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-6">
                            <TrendingUp className="w-4 h-4" />
                            Miễn phí 100%
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                            Học đầu tư{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                                thông minh
                            </span>
                            <br />
                            từ con số 0
                        </h1>
                        <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Kiến thức đầu tư bài bản về chứng khoán, bất động sản, vàng, trái phiếu.
                            Phân tích chuyên sâu, dễ hiểu, phù hợp người mới bắt đầu.
                        </p>

                        {/* Benefits */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-sm text-text-secondary">
                                    <span className="text-purple-400">{b.icon}</span>
                                    {b.text}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/blog"
                                className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                Bắt đầu học ngay <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                            >
                                Tìm hiểu thêm
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 sm:py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            Khám phá <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">lĩnh vực đầu tư</span>
                        </h2>
                        <p className="text-text-secondary max-w-xl mx-auto">
                            Kiến thức chuyên sâu về các loại tài sản phổ biến nhất tại Việt Nam
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                        {categories.map((cat, i) => (
                            <Link
                                key={i}
                                href={`/blog/${cat.slug}`}
                                className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl p-6 text-center hover:border-purple-500/30 hover:shadow-glow-purple transition-all hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${cat.color} p-0.5 mb-4`}>
                                    <div className="w-full h-full rounded-[10px] bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                        {cat.icon}
                                    </div>
                                </div>
                                <h3 className="font-bold text-white mb-1 text-lg">{cat.name}</h3>
                                <p className="text-text-muted text-sm">{cat.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {posts.length > 0 && (
                <section className="py-16 sm:py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                Bài viết <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">nổi bật</span>
                            </h2>
                            <p className="text-text-secondary">Những kiến thức được đọc nhiều nhất</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {posts.slice(0, 6).map((post: any) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.categories?.slug || 'uncategorized'}/${post.slug}`}
                                    className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-glow-purple transition-all hover:-translate-y-1"
                                >
                                    <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-pink-900/30 relative overflow-hidden">
                                        {post.featured_image ? (
                                            <Image
                                                src={post.featured_image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 400px"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <BookOpen className="w-10 h-10 text-white/20" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
                                    </div>
                                    <div className="p-4">
                                        <span className="text-xs text-purple-400 font-medium">{post.categories?.name}</span>
                                        <h3 className="text-white font-bold line-clamp-2 mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                            >
                                Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Trust Section */}
            <section className="py-16 sm:py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Tại sao chọn <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">Cách Đầu Tư?</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {trustPoints.map((point, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-xl">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                    <span className="text-text-secondary text-sm sm:text-base">{point}</span>
                                </div>
                            ))}
                        </div>

                        {/* Final CTA */}
                        <div className="text-center mt-10">
                            <Link
                                href="/blog"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-1"
                            >
                                Bắt đầu học đầu tư ngay <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Disclaimer */}
            <footer className="py-8 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="bg-orange-500/5 border border-orange-500/10 rounded-xl p-4 mb-6">
                        <p className="text-xs text-text-muted text-center leading-relaxed">
                            <strong className="text-orange-400/80">⚠️ Miễn trừ trách nhiệm:</strong>{" "}
                            Tất cả nội dung trên cachdautu.com chỉ mang tính chất giáo dục và thông tin,{" "}
                            <strong className="text-text-secondary">KHÔNG</strong> phải là lời khuyên đầu tư.
                            Mọi quyết định đầu tư đều có rủi ro và do bạn tự chịu trách nhiệm.{" "}
                            <Link href="/mien-tru-trach-nhiem" className="text-orange-400/70 hover:text-orange-400 underline underline-offset-2 transition-colors">
                                Xem chi tiết
                            </Link>
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-text-muted">
                        <span>© 2026 Cách Đầu Tư</span>
                        <Link href="/chinh-sach-bao-mat" className="hover:text-purple-400 transition-colors">Chính sách bảo mật</Link>
                        <Link href="/dieu-khoan-su-dung" className="hover:text-purple-400 transition-colors">Điều khoản</Link>
                        <Link href="/mien-tru-trach-nhiem" className="hover:text-purple-400 transition-colors">Miễn trừ trách nhiệm</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
