"use client";

import Link from "next/link";
import {
    Target, Eye, Gem, ShieldAlert, Users, Award,
    ArrowRight, BookOpen, Lightbulb, Shield,
    BarChart3, Globe, Heart, Star, Zap, MessageCircle, Sparkles
} from "lucide-react";
import SmoothScrollContainer from "@/components/SmoothScrollContainer";
import AnimatedSection from "@/components/ui/Animations";

const stats = [
    { icon: <Users className="w-6 h-6" />, value: "12,500+", label: "Nhà đầu tư tin tưởng", gradient: "from-purple-500 to-pink-500" },
    { icon: <BookOpen className="w-6 h-6" />, value: "150+", label: "Bài phân tích chuyên sâu", gradient: "from-pink-500 to-orange-500" },
    { icon: <Award className="w-6 h-6" />, value: "5+", label: "Năm kinh nghiệm", gradient: "from-emerald-500 to-green-500" },
    { icon: <Globe className="w-6 h-6" />, value: "10+", label: "Loại tài sản đầu tư", gradient: "from-orange-500 to-yellow-500" },
];

const values = [
    {
        icon: <Target className="w-8 h-8" />,
        title: "Sứ mệnh",
        desc: "Giúp mọi người tiếp cận thị trường đầu tư một cách có hệ thống, dựa trên kiến thức và quản lý rủi ro.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: "Tầm nhìn",
        desc: "Trở thành nền tảng kiến thức đầu tư uy tín hàng đầu Việt Nam, nơi mọi người đều có thể đạt tự do tài chính.",
        gradient: "from-pink-500 to-orange-500"
    },
    {
        icon: <Gem className="w-8 h-8" />,
        title: "Giá trị cốt lõi",
        desc: "Minh bạch, trung thực, không cam kết lợi nhuận. Tập trung vào bảo vệ vốn và giáo dục nhà đầu tư.",
        gradient: "from-emerald-500 to-green-500"
    }
];

const features = [
    { icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Phân tích chuyên sâu", desc: "Dữ liệu thực tế, nghiên cứu kỹ lưỡng" },
    { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Quản lý rủi ro", desc: "Bảo vệ vốn lên hàng đầu" },
    { icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Dễ hiểu, thực tế", desc: "Phù hợp mọi trình độ" },
    { icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Cập nhật liên tục", desc: "Theo sát thị trường mỗi ngày" },
];

const testimonials = [
    {
        quote: "Cách Đầu Tư giúp tôi hiểu rõ hơn về quản lý rủi ro. Từ khi áp dụng, tôi không còn cảm xúc khi giao dịch nữa.",
        author: "Minh Tuấn",
        role: "Nhà đầu tư cá nhân, Hà Nội"
    },
    {
        quote: "Nội dung rất chất lượng và thực tế. Đây là nguồn tin đáng tin cậy nhất mà tôi theo dõi.",
        author: "Thảo Nguyên",
        role: "Trader, TP.HCM"
    },
];

const assetCategories = [
    "Chứng khoán", "Crypto", "Bất động sản", "Vàng", "Forex",
    "ETF", "Trái phiếu", "Startup", "Tiết kiệm", "Bảo hiểm"
];

export default function AboutPage() {
    return (
        <SmoothScrollContainer>
            {/* Hero Section */}
            <div className="snap-section">
                <section className="min-h-screen py-16 sm:py-24 relative overflow-hidden flex items-center">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="text-center max-w-4xl mx-auto" animation="fade-in-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold uppercase tracking-wider text-xs mb-6">
                                <Sparkles className="w-4 h-4" />
                                Về chúng tôi
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                                Đồng hành trên con đường{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                                    tự do tài chính
                                </span>
                            </h1>
                            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                                Với hơn <strong className="text-white">5 năm kinh nghiệm</strong>, chúng tôi đã giúp hàng ngàn người Việt tiếp cận thị trường một cách thông minh và có hệ thống.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                                <Link
                                    href="/blog"
                                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold transition-all shadow-glow-purple hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transform hover:-translate-y-1 flex items-center gap-2"
                                >
                                    Khám phá kiến thức <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-purple-500/30 transition-all flex items-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" /> Liên hệ ngay
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Stats */}
                        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-4xl mx-auto" animation="fade-in-up" delay={200}>
                            {stats.map((stat, idx) => (
                                <div key={idx} className="group text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] hover:border-purple-500/30 hover:shadow-glow-purple transition-all duration-500">
                                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.gradient} p-0.5 mb-3`}>
                                        <div className="w-full h-full rounded-[10px] bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs sm:text-sm text-text-muted mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </AnimatedSection>
                    </div>
                </section>
            </div>

            {/* Asset Categories */}
            <div className="snap-section">
                <section className="min-h-screen py-16 sm:py-24 relative flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="text-center mb-12" animation="fade-in-up">
                            <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs sm:text-sm font-medium mb-6">
                                Chuyên môn
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Phân tích <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">10+ loại tài sản</span>
                            </h2>
                            <p className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                                Từ chứng khoán truyền thống đến crypto, bất động sản đến forex - chúng tôi giúp bạn hiểu sâu về mọi loại đầu tư.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto" animation="fade-in-up" delay={200}>
                            {assetCategories.map((cat, idx) => (
                                <Link
                                    key={idx}
                                    href="/blog"
                                    className="group px-5 py-2.5 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] text-text-secondary hover:text-white hover:bg-purple-500/10 hover:border-purple-500/30 hover:shadow-glow-purple transition-all text-sm font-medium"
                                >
                                    {cat}
                                </Link>
                            ))}
                        </AnimatedSection>
                    </div>
                </section>
            </div>

            {/* Values Section */}
            <div className="snap-section">
                <section className="min-h-screen py-16 sm:py-24 flex items-center">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center mb-12" animation="fade-in-up">
                            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-6">
                                Giá trị
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                Điều chúng tôi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">tin tưởng</span>
                            </h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {values.map((item, idx) => (
                                <AnimatedSection key={idx} animation="fade-in-up" delay={idx * 150}>
                                    <div className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-purple-500/30 hover:shadow-glow-purple transition-all duration-500 h-full">
                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mb-6 relative z-10`}>
                                            <div className="w-full h-full rounded-[14px] bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all relative z-10">{item.title}</h3>
                                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed relative z-10">{item.desc}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Why Choose Us + Testimonials */}
            <div className="snap-section">
                <section className="min-h-screen py-16 sm:py-24 relative flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <AnimatedSection animation="fade-in-left">
                                <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium mb-6">
                                    Tại sao chọn chúng tôi
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                                    Tại sao <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">12,500+ người</span> tin tưởng?
                                </h2>

                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="group bg-white/[0.02] border border-white/[0.05] rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                                                {feature.icon}
                                            </div>
                                            <h3 className="font-bold text-white text-sm sm:text-base mb-1">{feature.title}</h3>
                                            <p className="text-text-muted text-xs sm:text-sm">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>

                            {/* Testimonials */}
                            <AnimatedSection className="space-y-6" animation="fade-in-right">
                                {testimonials.map((t, idx) => (
                                    <div key={idx} className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl p-6 hover:border-purple-500/30 hover:shadow-glow-purple transition-all duration-500">
                                        <div className="flex gap-1 text-yellow-400 mb-4">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <p className="text-text-secondary mb-4 italic">"{t.quote}"</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                                                <div className="w-full h-full rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                                                    {t.author.charAt(0)}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-sm">{t.author}</p>
                                                <p className="text-text-muted text-xs">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </div>

            {/* Disclaimer + CTA */}
            <div className="snap-section">
                <section className="min-h-screen py-16 sm:py-24 relative flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Disclaimer */}
                        <AnimatedSection className="max-w-3xl mx-auto mb-16" animation="fade-in-up">
                            <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6 sm:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 p-0.5 flex-shrink-0">
                                        <div className="w-full h-full rounded-[10px] bg-primary flex items-center justify-center text-orange-400">
                                            <ShieldAlert className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-orange-400">
                                            Tuyên bố miễn trừ trách nhiệm
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            Tất cả nội dung trên Cách Đầu Tư chỉ mang tính chất thông tin và giáo dục,
                                            không phải là lời khuyên đầu tư. Mọi quyết định đầu tư đều do bạn tự chịu trách nhiệm.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Final CTA */}
                        <AnimatedSection className="text-center max-w-2xl mx-auto" animation="scale-in">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-6">
                                <div className="w-full h-full rounded-[14px] bg-primary flex items-center justify-center">
                                    <Heart className="w-8 h-8 text-pink-400" />
                                </div>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                                Sẵn sàng bắt đầu?
                            </h2>
                            <p className="text-text-secondary mb-8 text-lg">
                                Tham gia cộng đồng 12,500+ nhà đầu tư thông minh. Hoàn toàn miễn phí.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/blog"
                                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold hover:shadow-glow-purple transition-all flex items-center gap-2"
                                >
                                    <BookOpen className="w-5 h-5" /> Đọc bài viết ngay
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:border-purple-500/30 transition-all"
                                >
                                    Liên hệ tư vấn
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </SmoothScrollContainer>
    );
}
