import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: 'var(--gradient-hero)' }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float"
                    style={{
                        background: 'var(--gradient-gold)',
                        top: '-200px',
                        right: '-200px'
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
                    style={{
                        background: 'var(--gradient-emerald)',
                        bottom: '-100px',
                        left: '-100px',
                        animationDelay: '1s'
                    }}
                />
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center px-4">
                <div className="animate-fade-in">
                    {/* Badge */}
                    <div
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-8"
                        style={{
                            background: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            color: 'var(--color-accent-gold)'
                        }}
                    >
                        ✨ Nâng cao kỹ năng đầu tư của bạn
                    </div>

                    {/* Main Headline */}
                    <h1 className="mb-6 max-w-4xl mx-auto">
                        Học cách <span className="gradient-text-gold">đầu tư thông minh</span>,
                        hiểu rủi ro và xây dựng chiến lược <span className="gradient-text-emerald">kỷ luật</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Khám phá kiến thức đầu tư toàn diện từ chứng khoán, crypto, bất động sản
                        đến vàng, forex và nhiều loại tài sản khác.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/blog" className="btn-primary text-lg">
                            Khám phá ngay
                        </Link>
                        <Link href="/about" className="btn-secondary text-lg">
                            Về chúng tôi
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text-gold">10+</div>
                            <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                Chuyên mục đầu tư
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text-emerald">500+</div>
                            <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                Bài viết chuyên sâu
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text-gold">50K+</div>
                            <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                Nhà đầu tư tin tưởng
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </div>
        </section>
    );
}
