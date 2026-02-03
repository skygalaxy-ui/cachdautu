import Link from "next/link";

export default function Newsletter() {
    return (
        <section className="section">
            <div className="container">
                <div
                    className="glass-card p-12 text-center relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)'
                    }}
                >
                    {/* Background Decoration */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
                        style={{ background: 'var(--gradient-gold)', transform: 'translate(50%, -50%)' }}
                    />

                    <div className="relative z-10">
                        <span
                            className="text-sm font-medium uppercase tracking-wider"
                            style={{ color: 'var(--color-accent-gold)' }}
                        >
                            Đăng ký nhận tin
                        </span>
                        <h2 className="mt-2 mb-4">
                            Bạn đã sẵn sàng <span className="gradient-text-emerald">nâng tầm</span> cách đầu tư?
                        </h2>
                        <p
                            className="max-w-xl mx-auto mb-8"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            Nhận phân tích thị trường, hướng dẫn đầu tư và cập nhật mới nhất
                            trực tiếp vào hộp thư của bạn.
                        </p>

                        {/* Newsletter Form */}
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                required
                                className="flex-1 px-6 py-4 rounded-lg text-base"
                                style={{
                                    background: 'var(--color-primary)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--color-text)'
                                }}
                            />
                            <button type="submit" className="btn-primary whitespace-nowrap">
                                Đăng ký ngay
                            </button>
                        </form>

                        <p
                            className="text-xs mt-4"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            Chúng tôi tôn trọng quyền riêng tư của bạn. Hủy đăng ký bất cứ lúc nào.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
