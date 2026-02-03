import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Liên hệ - Cách Đầu Tư",
    description: "Liên hệ với đội ngũ Cách Đầu Tư để được hỗ trợ và giải đáp thắc mắc về đầu tư.",
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-16">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span
                        className="text-sm font-medium uppercase tracking-wider"
                        style={{ color: 'var(--color-accent-gold)' }}
                    >
                        Liên hệ
                    </span>
                    <h1 className="mt-2 mb-4">
                        Kết nối với <span className="gradient-text-emerald">chúng tôi</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        Bạn có câu hỏi hoặc cần hỗ trợ? Hãy liên hệ với chúng tôi.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-semibold mb-6">Gửi tin nhắn</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nguyễn Văn A"
                                    className="w-full px-4 py-3 rounded-lg"
                                    style={{
                                        background: 'var(--color-primary)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-3 rounded-lg"
                                    style={{
                                        background: 'var(--color-primary)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                                    Chủ đề
                                </label>
                                <select
                                    className="w-full px-4 py-3 rounded-lg"
                                    style={{
                                        background: 'var(--color-primary)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--color-text)'
                                    }}
                                >
                                    <option>Câu hỏi chung</option>
                                    <option>Hợp tác kinh doanh</option>
                                    <option>Góp ý & phản hồi</option>
                                    <option>Hỗ trợ kỹ thuật</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                                    Nội dung
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Nội dung tin nhắn..."
                                    className="w-full px-4 py-3 rounded-lg resize-none"
                                    style={{
                                        background: 'var(--color-primary)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--color-text)'
                                    }}
                                />
                            </div>
                            <button type="submit" className="btn-primary w-full">
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                                    style={{ background: 'rgba(255, 215, 0, 0.1)' }}
                                >
                                    📧
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email</h4>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        contact@cachdautu.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                                    style={{ background: 'rgba(16, 185, 129, 0.1)' }}
                                >
                                    💬
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Mạng xã hội</h4>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Facebook, YouTube, Telegram
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                                    style={{ background: 'rgba(255, 215, 0, 0.1)' }}
                                >
                                    ⏰
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Thời gian phản hồi</h4>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        Trong vòng 24-48 giờ làm việc
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Link */}
                        <div
                            className="glass-card p-6"
                            style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)' }}
                        >
                            <h4 className="font-semibold mb-2">Câu hỏi thường gặp</h4>
                            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                Có thể bạn sẽ tìm thấy câu trả lời trong phần FAQ của chúng tôi.
                            </p>
                            <a
                                href="/#faq"
                                className="text-sm font-medium"
                                style={{ color: 'var(--color-accent-gold)' }}
                            >
                                Xem FAQ →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
