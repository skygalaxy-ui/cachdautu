import Link from "next/link";

const categories = [
    { slug: "chung-khoan", label: "Chứng khoán" },
    { slug: "crypto", label: "Crypto" },
    { slug: "bat-dong-san", label: "Bất động sản" },
    { slug: "vang", label: "Vàng" },
    { slug: "forex", label: "Forex" },
];

export default function Footer() {
    return (
        <footer style={{ background: 'var(--color-primary-dark)', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ background: 'var(--gradient-gold)' }}>
                                <span className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>C</span>
                            </div>
                            <span className="text-xl font-bold gradient-text-gold">Cách Đầu Tư</span>
                        </Link>
                        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            Hiểu thị trường, hiểu rủi ro. Xây dựng chiến lược đầu tư kỷ luật.
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--color-accent-gold)' }}>
                            Chuyên mục
                        </h4>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat.slug}>
                                    <Link
                                        href={`/blog/${cat.slug}`}
                                        className="text-sm transition-colors hover:text-white"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {cat.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--color-accent-gold)' }}>
                            Liên kết
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-sm transition-colors hover:text-white"
                                    style={{ color: 'var(--color-text-secondary)' }}>
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm transition-colors hover:text-white"
                                    style={{ color: 'var(--color-text-secondary)' }}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm transition-colors hover:text-white"
                                    style={{ color: 'var(--color-text-secondary)' }}>
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--color-accent-gold)' }}>
                            Đăng ký nhận tin
                        </h4>
                        <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                            Nhận phân tích thị trường và cập nhật mới nhất.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="flex-1 px-4 py-2 rounded-lg text-sm"
                                style={{
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--color-text)'
                                }}
                            />
                            <button type="submit" className="btn-primary text-sm px-4 py-2">
                                Gửi
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderTop: '1px solid var(--glass-border)' }}>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        © 2026 Cách Đầu Tư – Hiểu thị trường, hiểu rủi ro
                    </p>
                    <div className="flex gap-6">
                        <Link href="/disclaimer" className="text-sm hover:text-white"
                            style={{ color: 'var(--color-text-muted)' }}>
                            Miễn trừ trách nhiệm
                        </Link>
                        <Link href="/privacy" className="text-sm hover:text-white"
                            style={{ color: 'var(--color-text-muted)' }}>
                            Chính sách bảo mật
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
