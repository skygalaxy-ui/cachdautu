"use client";

import Link from "next/link";
import { TrendingUp, Building2, PiggyBank, Coins, Bitcoin, DollarSign, BarChart3, Wallet } from "lucide-react";

// Floating icon data - optimized positions for all screen sizes
const floatingIcons = [
    { icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Chứng khoán", color: "from-purple-500 to-pink-500", delay: "0s", position: "top-[15%] left-[5%] sm:left-[10%]" },
    { icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Bất động sản", color: "from-pink-500 to-orange-500", delay: "1s", position: "top-[12%] right-[5%] sm:right-[15%]" },
    { icon: <PiggyBank className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Tiết kiệm", color: "from-orange-500 to-yellow-500", delay: "2s", position: "top-[32%] left-[2%] sm:left-[5%]" },
    { icon: <Coins className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Vàng", color: "from-yellow-500 to-green-500", delay: "0.5s", position: "top-[35%] right-[3%] sm:right-[8%]" },
    { icon: <Bitcoin className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Crypto", color: "from-orange-400 to-orange-600", delay: "1.5s", position: "bottom-[32%] left-[5%] sm:left-[12%]" },
    { icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Forex", color: "from-green-500 to-emerald-500", delay: "2.5s", position: "bottom-[28%] right-[5%] sm:right-[10%]" },
    { icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Phân tích", color: "from-blue-500 to-purple-500", delay: "0.8s", position: "bottom-[42%] left-[8%] sm:left-[20%] hidden sm:flex" },
    { icon: <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Tài chính", color: "from-purple-400 to-pink-400", delay: "1.8s", position: "bottom-[38%] right-[8%] sm:right-[18%] hidden sm:flex" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-16 sm:pt-20" aria-labelledby="hero-heading">
            {/* Cosmic Portal Background - Responsive sizing */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                {/* Outer glow ring - smaller on mobile */}
                <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-b from-purple-600/20 via-pink-500/10 to-transparent blur-3xl animate-pulse-slow" />

                {/* Main cosmic portal - responsive sizing */}
                <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin-slow" />
                    <div className="absolute inset-2 sm:inset-4 rounded-full border border-pink-500/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

                    {/* Gradient ring */}
                    <div className="absolute inset-4 sm:inset-8 rounded-full bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-orange-500/30 blur-xl animate-glow-pulse" />

                    {/* Inner dark circle (black hole effect) */}
                    <div className="absolute inset-12 sm:inset-20 rounded-full bg-gradient-to-b from-primary via-primary to-purple-950/50 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

                    {/* Top glow (like light hitting a planet) */}
                    <div className="absolute top-8 sm:top-16 left-1/2 -translate-x-1/2 w-[150px] sm:w-[300px] h-[50px] sm:h-[100px] bg-gradient-to-b from-orange-400/30 via-pink-500/20 to-transparent blur-2xl rounded-full" />
                </div>
            </div>

            {/* Floating Icons - hidden last 2 on mobile for cleaner look */}
            {floatingIcons.map((item, idx) => (
                <div
                    key={idx}
                    className={`absolute ${item.position} animate-float group cursor-pointer z-20`}
                    style={{ animationDelay: item.delay }}
                    aria-hidden="true"
                >
                    <div className={`relative w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <div className="w-full h-full rounded-[14px] bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-primary/60 transition-colors">
                            {item.icon}
                        </div>

                        {/* Tooltip */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                            {item.label}
                        </div>
                    </div>
                </div>
            ))}

            {/* Content */}
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs sm:text-sm text-text-secondary font-medium">Nền tảng đầu tư thông minh #1 Việt Nam</span>
                    </div>

                    {/* Main Heading - Responsive font sizes */}
                    <h1 id="hero-heading" className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
                        <span className="text-white drop-shadow-2xl">Đầu tư </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-[length:200%_auto] animate-gradient-shift">
                            Thông minh
                        </span>
                        <br className="hidden xs:block" />
                        <span className="text-white drop-shadow-2xl"> cùng </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-gradient-shift">
                            Cách Đầu Tư
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-8 sm:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
                        Kiến thức, công cụ và chiến lược thực chiến để giúp bạn đạt được <strong className="text-white">tự do tài chính</strong> nhanh hơn bao giờ hết.
                    </p>

                    {/* CTA Buttons - Stack on mobile, row on larger */}
                    <nav className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0" aria-label="Hành động chính">
                        <Link
                            href="/blog"
                            className="group relative px-8 sm:px-10 py-4 sm:py-4.5 rounded-full overflow-hidden shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all transform hover:-translate-y-1"
                        >
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-100 group-hover:opacity-110 transition-all font-bold" />
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />

                            <span className="relative z-10 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3">
                                Khám phá ngay
                                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/about"
                            className="px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm hover:-translate-y-1"
                        >
                            Tìm hiểu thêm
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-primary via-primary/80 to-transparent pointer-events-none" aria-hidden="true" />
        </section>
    );
}
