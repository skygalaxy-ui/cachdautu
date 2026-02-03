import { Metadata } from "next";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
    title: "Về chúng tôi - Cách Đầu Tư",
    description: "Tìm hiểu về sứ mệnh và đội ngũ Cách Đầu Tư - nơi giúp bạn đầu tư thông minh dựa trên kiến thức và quản lý rủi ro.",
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <span
                        className="text-sm font-medium uppercase tracking-wider"
                        style={{ color: 'var(--color-accent-gold)' }}
                    >
                        Về chúng tôi
                    </span>
                    <h1 className="mt-2 mb-4">
                        Đồng hành cùng bạn trên con đường <span className="gradient-text-emerald">đầu tư</span>
                    </h1>
                </div>
            </div>

            <About />

            {/* Mission Section */}
            <section className="section" style={{ background: 'var(--color-primary-dark)' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🎯",
                                title: "Sứ mệnh",
                                desc: "Giúp mọi người tiếp cận thị trường đầu tư một cách có hệ thống, dựa trên kiến thức và quản lý rủi ro."
                            },
                            {
                                icon: "👁️",
                                title: "Tầm nhìn",
                                desc: "Trở thành nền tảng kiến thức đầu tư uy tín hàng đầu Việt Nam, phục vụ mọi loại nhà đầu tư."
                            },
                            {
                                icon: "💎",
                                title: "Giá trị cốt lõi",
                                desc: "Minh bạch, trung thực, không cam kết lợi nhuận, tập trung vào bảo vệ vốn cho nhà đầu tư."
                            }
                        ].map((item, index) => (
                            <div key={index} className="glass-card p-8 text-center">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 gradient-text-gold">{item.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="section">
                <div className="container max-w-3xl">
                    <div
                        className="glass-card p-8"
                        style={{ borderColor: 'rgba(255, 215, 0, 0.3)' }}
                    >
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <span>⚠️</span>
                            Tuyên bố miễn trừ trách nhiệm
                        </h3>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            Tất cả nội dung trên Cách Đầu Tư chỉ mang tính chất thông tin và giáo dục,
                            không phải là lời khuyên đầu tư. Mọi quyết định đầu tư đều do bạn tự chịu trách nhiệm.
                            Đầu tư luôn có rủi ro, bao gồm rủi ro mất vốn. Vui lòng tìm hiểu kỹ trước khi đầu tư.
                        </p>
                    </div>
                </div>
            </section>

            <Newsletter />
        </div>
    );
}
