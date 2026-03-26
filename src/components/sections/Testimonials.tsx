import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/Animations";
import { supabase } from "@/core/supabase";

// Fallback hardcoded testimonials if DB fetch fails or table doesn't exist yet
const fallbackTestimonials = [
    {
        name: "Minh Hoàng",
        role: "Nhà đầu tư chứng khoán",
        content: "Kiến thức từ Cách Đầu Tư giúp tôi tự tin hơn khi ra quyết định. ROI tăng 35% trong năm đầu.",
        rating: 5,
        avatar: "MH"
    },
    {
        name: "Thu Trang",
        role: "Freelancer",
        content: "Nhờ bài viết về tài chính cá nhân, tôi đã xây dựng được quỹ dự phòng 6 tháng lương.",
        rating: 5,
        avatar: "TT"
    },
    {
        name: "Quốc Bảo",
        role: "Doanh nhân",
        content: "Phân tích thị trường rất sâu và thực tế. Giúp tôi tránh được nhiều cạm bẫy khi đầu tư.",
        rating: 5,
        avatar: "QB"
    },
];

// JSON-LD for Reviews
const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cách Đầu Tư",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "12500",
        "bestRating": "5"
    }
};

export default async function Testimonials() {
    // Attempt to fetch dynamic testimonials from Supabase
    let testimonials = fallbackTestimonials;
    try {
        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .eq('is_published', true)
            .order('created_at', { ascending: false })
            .limit(3);

        if (!error && data && data.length >= 3) {
            testimonials = data;
        }
    } catch {
        // Silently fallback if table doesn't exist yet
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
            />

            <section
                className="py-24 bg-primary relative overflow-hidden"
                aria-labelledby="testimonials-heading"
                id="testimonials"
            >
                {/* Background glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" aria-hidden="true" />

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center mb-16" animation="fade-in-up">
                        <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold tracking-wider uppercase mb-6">
                            Đánh giá từ cộng đồng
                        </span>
                        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Phản hồi từ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">người dùng thực</span>
                        </h2>
                        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                            Hơn 12,500 nhà đầu tư đã tin tưởng và đồng hành cùng <span className="text-white font-medium">Cách Đầu Tư</span> trên hành trình vượt qua các cạm bẫy tài chính.
                        </p>
                    </AnimatedSection>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" role="list">
                        {testimonials.map((item, idx) => (
                            <AnimatedSection key={idx} animation="fade-in-up" delay={idx * 150}>
                                <article
                                    className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-3xl p-6 sm:p-8 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)] transition-all duration-500 h-full flex flex-col"
                                    role="listitem"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" aria-hidden="true" />

                                    {/* Quote icon */}
                                    <Quote className="w-10 h-10 text-purple-500/30 mb-6 group-hover:text-purple-400/50 transition-colors" aria-hidden="true" />

                                    {/* Content */}
                                    <blockquote className="relative z-10 flex-grow">
                                        <p className="text-white/90 mb-8 leading-relaxed text-base sm:text-lg">"{item.content}"</p>
                                    </blockquote>

                                    {/* Stars */}
                                    <div className="flex gap-1.5 mb-5" aria-label={`${item.rating} sao`}>
                                        {[...Array(item.rating || 5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <footer className="flex items-center gap-4 relative z-10 pt-5 border-t border-white/5">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 flex-shrink-0">
                                            {item.avatar && item.avatar.length <= 2 ? (
                                                <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                                                    {item.avatar}
                                                </div>
                                            ) : (
                                                <div className="w-full h-full rounded-full bg-primary overflow-hidden">
                                                    <img src={item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <cite className="font-bold text-white not-italic block mb-0.5">{item.name}</cite>
                                            <div className="text-xs text-text-muted">{item.role}</div>
                                        </div>
                                    </footer>
                                </article>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Trust Banner */}
                    <AnimatedSection className="mt-16 text-center" animation="fade-in-up" delay={400}>
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-white/[0.08] shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                            <div className="flex -space-x-3">
                                {["MH", "TT", "QB", "PN"].map((initials, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 border-2 border-primary relative z-10" style={{ zIndex: 10 - i }}>
                                        <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white shadow-inner">
                                            {initials}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-yellow-400 font-bold">4.9/5</span>
                                </span>
                                <span className="text-text-secondary text-sm font-medium">Đánh giá xuất sắc từ 12,500+ học viên F0</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
