'use client';

import React from 'react';

export default function PartnerLogos() {
    const partners = [
        { name: "VnExpress", icon: "📰" },
        { name: "CafeF", icon: "☕" },
        { name: "The Leader", icon: "🏆" },
        { name: "Forbes VN", icon: "💎" },
        { name: "Zing News", icon: "⚡" },
        { name: "Báo Đầu Tư", icon: "📊" },
    ];

    const trustBadges = [
        { icon: "🔒", text: "Dữ liệu bảo mật", subtext: "SSL 256-bit" },
        { icon: "✅", text: "Nội dung xác thực", subtext: "Kiểm duyệt chặt chẽ" },
        { icon: "🎓", text: "Chuyên gia tư vấn", subtext: "10+ năm kinh nghiệm" },
        { icon: "🌟", text: "Đánh giá 4.9/5", subtext: "Từ 2,500+ người dùng" },
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary via-primary/95 to-primary border-y border-white/5 relative overflow-hidden" aria-label="Đối tác và uy tín">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Trust Badges Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 animate-fadeIn">
                    {trustBadges.map((badge, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">{badge.icon}</span>
                                <div>
                                    <p className="text-white font-semibold text-sm md:text-base">{badge.text}</p>
                                    <p className="text-text-muted text-xs md:text-sm">{badge.subtext}</p>
                                </div>
                            </div>
                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <p className="text-text-muted text-sm font-medium">Được đề cập trên</p>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Partner Logos - Scrolling Animation */}
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

                    <div
                        className="flex gap-8 md:gap-12 animate-scroll-x"
                        style={{
                            width: 'max-content'
                        }}
                    >
                        {/* Duplicate for seamless loop */}
                        {[...partners, ...partners, ...partners].map((partner, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 cursor-default group"
                            >
                                <span className="text-xl group-hover:scale-110 transition-transform">{partner.icon}</span>
                                <span className="text-text-secondary font-semibold text-base md:text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all whitespace-nowrap">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Stats Row */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                        <span className="text-green-400">✓</span>
                        <span>12,500+ nhà đầu tư tin tưởng</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                        <span className="text-green-400">✓</span>
                        <span>150+ bài phân tích chuyên sâu</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                        <span className="text-green-400">✓</span>
                        <span>98% độ hài lòng</span>
                    </div>
                </div>
            </div>

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes scroll-x {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }
                .animate-scroll-x {
                    animation: scroll-x 20s linear infinite;
                }
                .animate-scroll-x:hover {
                    animation-play-state: paused;
                }
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
