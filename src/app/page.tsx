import Link from "next/link";

const categories = [
    { slug: "chung-khoan", name: "Chứng khoán", icon: "📈" },
    { slug: "crypto", name: "Crypto", icon: "₿" },
    { slug: "bat-dong-san", name: "Bất động sản", icon: "🏠" },
    { slug: "vang", name: "Vàng", icon: "🥇" },
    { slug: "forex", name: "Forex", icon: "💱" },
    { slug: "trai-phieu", name: "Trái phiếu", icon: "📜" },
    { slug: "quy-dau-tu", name: "Quỹ đầu tư", icon: "💼" },
    { slug: "khoi-nghiep", name: "Khởi nghiệp", icon: "🚀" },
    { slug: "dau-tu-thay-the", name: "Đầu tư thay thế", icon: "🎨" },
    { slug: "tai-chinh-ca-nhan", name: "Tài chính cá nhân", icon: "💰" },
];

export default function HomePage() {
    return (
        <>
            {/* Navbar */}
            <header className="navbar">
                <div className="navbar-inner">
                    <Link href="/" className="logo">
                        <div className="logo-icon">C</div>
                        <span className="gradient-text-gold" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                            Cách Đầu Tư
                        </span>
                    </Link>
                    <nav>
                        <ul className="nav-links">
                            <li><Link href="/">Trang chủ</Link></li>
                            <li><Link href="/about">Giới thiệu</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Liên hệ</Link></li>
                        </ul>
                    </nav>
                    <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.875rem' }}>
                        Bắt đầu ngay
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="hero">
                <div>
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: 'rgba(255, 215, 0, 0.1)',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                        borderRadius: '20px',
                        color: '#FFD700',
                        fontSize: '0.875rem',
                        marginBottom: '24px'
                    }}>
                        ✨ Nâng cao kỹ năng đầu tư của bạn
                    </div>

                    <h1>
                        Học cách <span className="gradient-text-gold">đầu tư thông minh</span>,
                        hiểu rủi ro và xây dựng chiến lược <span className="gradient-text-emerald">kỷ luật</span>
                    </h1>

                    <p>
                        Khám phá kiến thức đầu tư toàn diện từ chứng khoán, crypto, bất động sản
                        đến vàng, forex và nhiều loại tài sản khác.
                    </p>

                    <div className="hero-buttons">
                        <Link href="/blog" className="btn-primary">Khám phá ngay</Link>
                        <Link href="/about" className="btn-secondary">Về chúng tôi</Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-number gradient-text-gold">10+</div>
                            <div className="stat-label">Chuyên mục đầu tư</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number gradient-text-emerald">500+</div>
                            <div className="stat-label">Bài viết chuyên sâu</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number gradient-text-gold">50K+</div>
                            <div className="stat-label">Nhà đầu tư tin tưởng</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section categories-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-subtitle">Chuyên mục đầu tư</div>
                        <h2 className="section-title">
                            Khám phá <span className="gradient-text-gold">mọi loại tài sản</span>
                        </h2>
                    </div>

                    <div className="categories-grid">
                        {categories.map((cat) => (
                            <Link key={cat.slug} href={`/blog/${cat.slug}`} className="category-card">
                                <div className="category-icon">{cat.icon}</div>
                                <div className="category-name">{cat.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2026 Cách Đầu Tư – Hiểu thị trường, hiểu rủi ro</p>
                </div>
            </footer>
        </>
    );
}
