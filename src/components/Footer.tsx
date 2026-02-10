import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
    { slug: "chung-khoan", label: "Chứng khoán" },
    { slug: "crypto", label: "Crypto" },
    { slug: "bat-dong-san", label: "Bất động sản" },
    { slug: "vang", label: "Vàng" },
    { slug: "forex", label: "Forex" },
];

export default function Footer() {
    return (
        <footer className="bg-primary pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Large Brand Name - Quantra Style */}
                <div className="text-center mb-12 sm:mb-20">
                    <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 select-none tracking-tighter leading-none">
                        <span className="block sm:inline">CÁCH</span>{" "}
                        <span className="block sm:inline">ĐẦU TƯ</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Cách Đầu Tư Logo"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">Cách Đầu Tư</span>
                        </Link>
                        <p className="text-sm text-text-muted leading-relaxed mb-6">
                            Nền tảng kiến thức đầu tư hàng đầu Việt Nam.
                            Hỗ trợ bạn đưa ra quyết định đầu tư sáng suốt.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Icons */}
                            {[
                                { label: 'Facebook', href: 'https://facebook.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                                { label: 'YouTube', href: 'https://youtube.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
                                { label: 'Telegram', href: 'https://t.me', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg> },
                                { label: 'X', href: 'https://x.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all border border-white/5 hover:border-transparent"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Khám phá</h4>
                        <ul className="space-y-3">
                            {categories.map((cat) => (
                                <li key={cat.slug}>
                                    <Link href={`/blog/${cat.slug}`} className="text-sm text-text-secondary hover:text-purple-400 transition-colors">
                                        {cat.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Công ty</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-text-secondary hover:text-purple-400 transition-colors">Về chúng tôi</Link></li>
                            <li><Link href="/contact" className="text-sm text-text-secondary hover:text-purple-400 transition-colors">Liên hệ</Link></li>
                            <li><Link href="/blog" className="text-sm text-text-secondary hover:text-purple-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Widget */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Bản tin đầu tư</h4>
                        <p className="text-sm text-text-muted mb-4">
                            Nhận định thị trường hàng tuần gửi trực tiếp vào inbox của bạn.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-purple-500 focus:outline-none transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold hover:shadow-glow-purple transition-all flex items-center justify-center gap-2"
                            >
                                Đăng ký ngay
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-muted">
                        © 2026 Cách Đầu Tư. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/about" className="text-sm text-text-muted hover:text-purple-400 transition-colors">Chính sách bảo mật</Link>
                        <Link href="/about" className="text-sm text-text-muted hover:text-purple-400 transition-colors">Điều khoản sử dụng</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
