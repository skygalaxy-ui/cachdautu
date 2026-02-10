import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px]" />

            <div className="text-center relative z-10 px-4">
                {/* 404 Number */}
                <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 leading-none mb-4 select-none">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                    Trang không tồn tại
                </h2>
                <p className="text-text-secondary text-base sm:text-lg max-w-md mx-auto mb-8">
                    Trang bạn tìm kiếm có thể đã bị xóa, đổi tên, hoặc tạm thời không khả dụng.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5"
                    >
                        Về trang chủ
                    </Link>
                    <Link
                        href="/blog"
                        className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all"
                    >
                        Xem bài viết
                    </Link>
                </div>
            </div>
        </main>
    );
}
