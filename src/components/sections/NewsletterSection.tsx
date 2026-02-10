import React from 'react';
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
    return (
        <section
            className="min-h-screen flex flex-col justify-between py-24 bg-primary relative overflow-hidden"
            aria-labelledby="newsletter-heading"
            id="newsletter"
        >
            {/* Glow Ambience */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" aria-hidden="true" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            {/* Newsletter Content */}
            <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center justify-center">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center mb-8" aria-hidden="true">
                        <Mail className="w-10 h-10 text-purple-400" />
                    </div>
                    <h2 id="newsletter-heading" className="text-xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                        Đăng ký nhận <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">Bản tin Đầu tư</span>
                    </h2>
                    <p className="text-text-secondary mb-10 text-lg max-w-xl mx-auto">
                        Nhận phân tích thị trường, cơ hội đầu tư và bài học kinh nghiệm trực tiếp vào hộp thư của bạn mỗi tuần.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10" aria-label="Form đăng ký nhận tin">
                        <label htmlFor="newsletter-email" className="sr-only">Địa chỉ email</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            name="email"
                            placeholder="Email của bạn"
                            required
                            aria-required="true"
                            className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-text-muted focus:border-purple-500 focus:outline-none transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold hover:shadow-glow-purple transition-all transform hover:-translate-y-0.5"
                        >
                            Đăng ký ngay
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer integrated */}
            <Footer />
        </section>
    );
}
