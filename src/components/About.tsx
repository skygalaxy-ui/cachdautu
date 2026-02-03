export default function About() {
    return (
        <section className="section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image/Graphic */}
                    <div className="relative">
                        <div
                            className="glass-card p-8 aspect-square flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-primary-light) 0%, rgba(16, 185, 129, 0.1) 100%)'
                            }}
                        >
                            <div className="text-center">
                                <div className="text-8xl mb-4 animate-float">📊</div>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="glass-card p-4">
                                        <div className="text-2xl font-bold gradient-text-gold">5+</div>
                                        <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Năm kinh nghiệm</div>
                                    </div>
                                    <div className="glass-card p-4">
                                        <div className="text-2xl font-bold gradient-text-emerald">24/7</div>
                                        <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Hỗ trợ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div
                            className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-50 blur-xl"
                            style={{ background: 'var(--gradient-gold)' }}
                        />
                    </div>

                    {/* Right - Content */}
                    <div>
                        <span
                            className="text-sm font-medium uppercase tracking-wider"
                            style={{ color: 'var(--color-accent-emerald)' }}
                        >
                            Về chúng tôi
                        </span>
                        <h2 className="mt-2 mb-6">
                            Sứ mệnh giúp bạn <span className="gradient-text-gold">đầu tư thông minh</span>
                        </h2>
                        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                            Tại Cách Đầu Tư, chúng tôi tin rằng mọi người đều có thể trở thành nhà đầu tư thông minh
                            nếu được trang bị đúng kiến thức và phương pháp. Sứ mệnh của chúng tôi là giúp bạn tiếp cận
                            thị trường một cách có hệ thống, dựa trên phân tích và quản lý rủi ro.
                        </p>
                        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                            Đội ngũ chuyên gia của chúng tôi chia sẻ kiến thức rõ ràng, dễ hiểu - không cam kết lợi nhuận,
                            mà tập trung vào việc giúp bạn tự bảo vệ vốn và đưa ra quyết định đầu tư sáng suốt.
                        </p>

                        {/* Features */}
                        <div className="space-y-4">
                            {[
                                { icon: "📚", text: "Kiến thức từ cơ bản đến nâng cao" },
                                { icon: "🎯", text: "Phân tích thị trường thực tế" },
                                { icon: "🛡️", text: "Chiến lược quản lý rủi ro" },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ background: 'rgba(255, 215, 0, 0.1)' }}
                                    >
                                        {feature.icon}
                                    </div>
                                    <span style={{ color: 'var(--color-text)' }}>{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
