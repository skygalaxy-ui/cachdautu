import { Metadata } from "next";
import { ScrollText, Scale, AlertTriangle, BookOpen, Users, Ban, RefreshCw, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Điều khoản sử dụng - Cách Đầu Tư",
    description: "Điều khoản sử dụng website Cách Đầu Tư. Quy định về quyền và trách nhiệm khi sử dụng dịch vụ.",
};

const sections = [
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: "1. Giới thiệu",
        content: [
            "Chào mừng bạn đến với Cách Đầu Tư (cachdautu.com). Bằng việc truy cập và sử dụng website này, bạn đồng ý tuân thủ các Điều khoản sử dụng dưới đây.",
            "Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng website.",
            "Cách Đầu Tư có quyền thay đổi, chỉnh sửa hoặc cập nhật các Điều khoản này bất cứ lúc nào mà không cần thông báo trước.",
        ]
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "2. Miễn trừ trách nhiệm đầu tư",
        content: [
            "**Tất cả nội dung trên Cách Đầu Tư chỉ mang tính chất thông tin và giáo dục, KHÔNG phải là lời khuyên đầu tư.**",
            "Chúng tôi không phải là tổ chức tư vấn tài chính được cấp phép. Mọi thông tin được cung cấp \"như hiện trạng\" (as-is) và không có bảo đảm về tính chính xác, đầy đủ hoặc kịp thời.",
            "Mọi quyết định đầu tư đều do bạn tự chịu trách nhiệm. Đầu tư luôn có rủi ro, bao gồm rủi ro mất toàn bộ vốn.",
            "Hiệu suất trong quá khứ không đảm bảo kết quả trong tương lai. Bạn nên tham khảo ý kiến chuyên gia tài chính trước khi đưa ra quyết định đầu tư.",
        ]
    },
    {
        icon: <Scale className="w-6 h-6" />,
        title: "3. Quyền sở hữu trí tuệ",
        content: [
            "Toàn bộ nội dung trên website bao gồm nhưng không giới hạn: bài viết, hình ảnh, thiết kế, logo, biểu đồ và mã nguồn đều thuộc quyền sở hữu của Cách Đầu Tư.",
            "Bạn không được sao chép, phân phối, xuất bản hoặc sử dụng bất kỳ nội dung nào cho mục đích thương mại mà không có sự cho phép bằng văn bản.",
            "Bạn được phép chia sẻ liên kết đến các bài viết cho mục đích cá nhân, phi thương mại, với điều kiện ghi rõ nguồn Cách Đầu Tư (cachdautu.com).",
        ]
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "4. Quy tắc sử dụng",
        content: [
            "Không sử dụng website cho mục đích bất hợp pháp hoặc vi phạm pháp luật Việt Nam.",
            "Không đăng tải nội dung spam, quảng cáo, hoặc có tính chất xúc phạm, bôi nhọ trong phần bình luận.",
            "Không cố gắng truy cập trái phép vào hệ thống, cơ sở dữ liệu hoặc máy chủ của website.",
            "Không sử dụng bot, crawler hoặc công cụ tự động để thu thập dữ liệu từ website mà không có sự cho phép.",
        ]
    },
    {
        icon: <Ban className="w-6 h-6" />,
        title: "5. Giới hạn trách nhiệm",
        content: [
            "Cách Đầu Tư không chịu trách nhiệm về bất kỳ tổn thất tài chính nào phát sinh từ việc sử dụng thông tin trên website.",
            "Chúng tôi không đảm bảo website sẽ hoạt động liên tục, không có lỗi hoặc không bị gián đoạn.",
            "Chúng tôi không chịu trách nhiệm về nội dung của các website bên thứ ba được liên kết trên website này.",
            "Trong mọi trường hợp, trách nhiệm tối đa của chúng tôi không vượt quá số tiền bạn đã thanh toán cho chúng tôi (nếu có).",
        ]
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: "6. Thay đổi & cập nhật",
        content: [
            "Chúng tôi có quyền thay đổi, cập nhật hoặc ngừng cung cấp bất kỳ phần nào của website mà không cần thông báo trước.",
            "Các thay đổi về Điều khoản sử dụng sẽ có hiệu lực ngay khi được đăng tải trên trang này.",
            "Việc tiếp tục sử dụng website sau khi các thay đổi được đăng tải đồng nghĩa với việc bạn chấp nhận các thay đổi đó.",
        ]
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "7. Liên hệ",
        content: [
            "Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng này, vui lòng liên hệ:",
            "**Email:** contact@cachdautu.com",
            "**Website:** cachdautu.com/contact",
            "Điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.",
        ]
    },
];

export default function TermsOfServicePage() {
    return (
        <div className="pt-24 sm:pt-32 pb-16 bg-primary min-h-screen text-text relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold uppercase tracking-wider text-xs mb-6">
                        <ScrollText className="w-4 h-4" />
                        Pháp lý
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        Điều khoản{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                            Sử dụng
                        </span>
                    </h1>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                        Vui lòng đọc kỹ các điều khoản dưới đây trước khi sử dụng website Cách Đầu Tư.
                        Việc tiếp tục sử dụng website đồng nghĩa với việc bạn chấp nhận các điều khoản này.
                    </p>
                    <p className="text-text-muted text-sm mt-4">
                        Cập nhật lần cuối: 01/03/2026
                    </p>
                </div>

                {/* Important Disclaimer Banner */}
                <div className="mb-8 bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 p-0.5 flex-shrink-0">
                            <div className="w-full h-full rounded-[10px] bg-primary flex items-center justify-center text-orange-400">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-orange-400 mb-1">Lưu ý quan trọng</h3>
                            <p className="text-text-secondary text-sm">
                                Nội dung trên Cách Đầu Tư chỉ mang tính chất giáo dục và thông tin.
                                Đây <strong className="text-white">KHÔNG</strong> phải lời khuyên đầu tư.
                                Mọi quyết định đầu tư đều do bạn tự chịu trách nhiệm.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl p-6 sm:p-8 hover:border-orange-500/20 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center text-orange-400">
                                    {section.icon}
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.content.map((item, i) => (
                                    <li key={i} className="text-text-secondary text-sm sm:text-base leading-relaxed flex gap-3">
                                        <span className="text-orange-400 mt-1.5 flex-shrink-0">•</span>
                                        <span dangerouslySetInnerHTML={{
                                            __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                                        }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
