import Link from "next/link";
import { categories } from "@/lib/posts";
import {
    LineChart,
    Bitcoin,
    Building2,
    Coins,
    Banknote,
    ScrollText,
    Briefcase,
    Rocket,
    Palette,
    Wallet
} from "lucide-react";

// Map slugs to components
const categoryIcons: Record<string, React.ElementType> = {
    "chung-khoan": LineChart,
    "crypto": Bitcoin,
    "bat-dong-san": Building2,
    "vang": Coins,
    "forex": Banknote, // Using Banknote for Forex representation
    "trai-phieu": ScrollText,
    "quy-dau-tu": Briefcase,
    "khoi-nghiep": Rocket,
    "dau-tu-thay-the": Palette, // Art/NFTs
    "tai-chinh-ca-nhan": Wallet,
};

// Map slugs to gradient colors for specific glow
const categoryGradients: Record<string, string> = {
    "chung-khoan": "from-green-400 to-emerald-600",
    "crypto": "from-orange-400 to-yellow-500",
    "bat-dong-san": "from-blue-400 to-indigo-600",
    "vang": "from-yellow-300 to-yellow-600",
    "forex": "from-cyan-400 to-blue-500",
    "trai-phieu": "from-gray-400 to-gray-600",
    "quy-dau-tu": "from-purple-400 to-pink-500",
    "khoi-nghiep": "from-red-400 to-orange-500",
    "dau-tu-thay-the": "from-pink-400 to-rose-500",
    "tai-chinh-ca-nhan": "from-teal-400 to-green-500",
};

export default function CategoryGrid() {
    return (
        <section className="section bg-primary-dark relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                        Chuyên mục đầu tư
                    </span>
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-6">
                        Khám phá <span className="text-transparent bg-clip-text bg-gradient-gold">mọi loại tài sản</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-text-secondary text-lg">
                        Từ chứng khoán truyền thống đến crypto, từ bất động sản đến nghệ thuật -
                        chúng tôi hướng dẫn bạn đầu tư vào bất kỳ loại tài sản nào.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category.slug] || LineChart;
                        const gradient = categoryGradients[category.slug] || "from-purple-500 to-pink-500";

                        return (
                            <Link
                                key={category.slug}
                                href={`/blog/${category.slug}`}
                                className="group relative glass-card p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                            >
                                {/* Border Gradient on Hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-[1px] rounded-[16px] bg-gradient-to-br ${gradient} -z-10`} style={{ margin: '-1px' }} />

                                {/* Inner Background Gradient on Hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${gradient}`} />

                                <div className={`w-14 h-14 mb-4 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                                    <Icon className="w-7 h-7 text-text-secondary group-hover:text-white transition-colors relative z-10" strokeWidth={1.5} />
                                </div>

                                <h4 className="text-base font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                                    {category.name}
                                </h4>
                                <p className="text-xs text-text-muted line-clamp-2 group-hover:text-text-secondary transition-colors">
                                    {category.description}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
