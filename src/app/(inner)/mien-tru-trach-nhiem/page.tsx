import { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ShieldAlert, TrendingDown, Scale, BookOpen, HelpCircle, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Miễn trừ trách nhiệm - Cách Đầu Tư",
    description: "Tuyên bố miễn trừ trách nhiệm của Cách Đầu Tư. Nội dung trên website chỉ mang tính chất giáo dục, không phải lời khuyên đầu tư.",
};

const sections = [
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: "1. Tính chất nội dung",
        content: [
            "**Tất cả nội dung trên cachdautu.com chỉ mang tính chất thông tin và giáo dục.** Chúng tôi cung cấp kiến thức tổng quát về đầu tư và tài chính cá nhân để giúp bạn ra quyết định sáng suốt hơn.",
            "Nội dung trên website này **KHÔNG** phải là lời khuyên đầu tư, tư vấn tài chính, tư vấn thuế, hay bất kỳ hình thức tư vấn chuyên môn nào khác.",
            "Cách Đầu Tư **KHÔNG** phải là tổ chức tư vấn đầu tư được cấp phép hay môi giới chứng khoán. Chúng tôi không nắm giữ bất kỳ giấy phép tài chính nào.",
        ]
    },
    {
        icon: <TrendingDown className="w-6 h-6" />,
        title: "2. Rủi ro đầu tư",
        content: [
            "**Mọi hoạt động đầu tư đều có rủi ro**, bao gồm rủi ro mất toàn bộ vốn đầu tư. Giá trị đầu tư có thể tăng hoặc giảm, và bạn có thể nhận lại ít hơn số tiền đã đầu tư.",
            "**Hiệu suất trong quá khứ không đảm bảo kết quả trong tương lai.** Mọi số liệu, biểu đồ, ví dụ về lợi nhuận được đề cập trên website chỉ mang tính chất minh họa.",
            "Thị trường tài chính chịu ảnh hưởng bởi nhiều yếu tố khó dự đoán bao gồm: biến động kinh tế vĩ mô, thay đổi chính sách, sự kiện địa chính trị, và các yếu tố tâm lý thị trường.",
            "**Chúng tôi không cam kết bất kỳ mức lợi nhuận nào.** Bất kỳ sản phẩm hoặc dịch vụ nào cam kết lợi nhuận cố định đều tiềm ẩn rủi ro lừa đảo.",
        ]
    },
    {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: "3. Trách nhiệm cá nhân",
        content: [
            "**Mọi quyết định đầu tư đều do bạn tự chịu trách nhiệm.** Bạn nên tự đánh giá tình hình tài chính, mục tiêu đầu tư, và khả năng chịu đựng rủi ro của mình.",
            "Trước khi đưa ra bất kỳ quyết định đầu tư nào, bạn nên tham khảo ý kiến của **chuyên gia tài chính, cố vấn đầu tư có giấy phép, hoặc luật sư** phù hợp với tình huống cá nhân của bạn.",
            "Đừng đầu tư số tiền mà bạn không thể chấp nhận mất. Hãy luôn đa dạng hóa danh mục và thiết lập kế hoạch quản lý rủi ro rõ ràng.",
        ]
    },
    {
        icon: <Scale className="w-6 h-6" />,
        title: "4. Giới hạn trách nhiệm",
        content: [
            "Cách Đầu Tư, bao gồm các tác giả, biên tập viên, và cộng tác viên, **không chịu trách nhiệm** về bất kỳ tổn thất tài chính, thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng thông tin trên website.",
            "Chúng tôi nỗ lực cung cấp thông tin chính xác và cập nhật, nhưng **không đảm bảo** tính chính xác, đầy đủ, hoặc kịp thời của bất kỳ nội dung nào.",
            "Mọi thông tin được cung cấp \"nguyên trạng\" (**as-is**) mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngầm hiểu.",
        ]
    },
    {
        icon: <ExternalLink className="w-6 h-6" />,
        title: "5. Liên kết bên thứ ba",
        content: [
            "Website có thể chứa liên kết đến các trang web, sản phẩm, hoặc dịch vụ của bên thứ ba. Chúng tôi **không kiểm soát và không chịu trách nhiệm** về nội dung hoặc hoạt động của các bên thứ ba.",
            "Việc đề cập đến bất kỳ sản phẩm, dịch vụ, hoặc tổ chức cụ thể nào không cấu thành sự chứng thực hay khuyến nghị từ Cách Đầu Tư.",
            "Một số liên kết có thể là liên kết tiếp thị liên kết (**affiliate links**). Điều này không ảnh hưởng đến tính khách quan của nội dung và không phát sinh chi phí thêm cho bạn.",
        ]
    },
    {
        icon: <HelpCircle className="w-6 h-6" />,
        title: "6. Đối tượng nội dung",
        content: [
            "Nội dung trên Cách Đầu Tư được thiết kế cho **công dân Việt Nam** và người đọc tiếng Việt quan tâm đến đầu tư.",
            "Chúng tôi không nhắm mục tiêu đến cư dân các quốc gia nơi việc phân phối hoặc sử dụng nội dung này vi phạm luật pháp địa phương.",
            "Bạn có trách nhiệm đảm bảo việc sử dụng nội dung phù hợp với luật pháp và quy định tại nơi bạn cư trú.",
        ]
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "7. Liên hệ",
        content: [
            "Nếu bạn có bất kỳ câu hỏi nào về Tuyên bố miễn trừ trách nhiệm này, vui lòng liên hệ:",
            "**Email:** cachdautu.com@gmail.com",
            "**Website:** cachdautu.com/contact",
            "Tuyên bố này có hiệu lực từ ngày 01/03/2026 và có thể được cập nhật theo thời gian. Mọi thay đổi sẽ được công bố trên trang này.",
        ]
    },
];

export default function DisclaimerPage() {
    return (
        <div className="pt-24 sm:pt-32 pb-16 bg-primary min-h-screen text-text relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold uppercase tracking-wider text-xs mb-6">
                        <AlertTriangle className="w-4 h-4" />
                        Pháp lý
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        Miễn trừ{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                            Trách nhiệm
                        </span>
                    </h1>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                        Vui lòng đọc kỹ tuyên bố miễn trừ trách nhiệm dưới đây trước khi sử dụng
                        bất kỳ thông tin nào trên website Cách Đầu Tư.
                    </p>
                    <p className="text-text-muted text-sm mt-4">
                        Cập nhật lần cuối: 01/03/2026
                    </p>
                </div>

                {/* Important Notice Banner */}
                <div className="mb-8 bg-red-500/5 border border-red-500/20 rounded-2xl p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-0.5 flex-shrink-0">
                            <div className="w-full h-full rounded-[10px] bg-primary flex items-center justify-center text-red-400">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-red-400 mb-1">Lưu ý quan trọng</h3>
                            <p className="text-text-secondary text-sm">
                                Nội dung trên Cách Đầu Tư chỉ mang tính chất giáo dục và thông tin.
                                Đây <strong className="text-white">KHÔNG</strong> phải lời khuyên đầu tư.
                                Mọi quyết định đầu tư đều có rủi ro và do bạn tự chịu trách nhiệm.
                                Hãy tham khảo ý kiến chuyên gia tài chính trước khi đầu tư.
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
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-orange-400">
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

                {/* Navigation Links */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                    <Link href="/chinh-sach-bao-mat" className="text-sm text-text-muted hover:text-emerald-400 transition-colors">
                        Chính sách bảo mật →
                    </Link>
                    <Link href="/dieu-khoan-su-dung" className="text-sm text-text-muted hover:text-orange-400 transition-colors">
                        Điều khoản sử dụng →
                    </Link>
                    <Link href="/contact" className="text-sm text-text-muted hover:text-purple-400 transition-colors">
                        Liên hệ →
                    </Link>
                </div>
            </div>
        </div>
    );
}
