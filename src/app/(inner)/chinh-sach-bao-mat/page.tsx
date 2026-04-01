import { Metadata } from "next";
import { Shield, Lock, Eye, Database, UserCheck, Bell, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Chính sách bảo mật - Cách Đầu Tư",
    description: "Chính sách bảo mật và quyền riêng tư của Cách Đầu Tư. Cam kết bảo vệ thông tin cá nhân của bạn.",
};

const sections = [
    {
        icon: <Database className="w-6 h-6" />,
        title: "1. Thông tin chúng tôi thu thập",
        content: [
            "**Thông tin bạn cung cấp trực tiếp:** Khi đăng ký nhận bản tin, liên hệ với chúng tôi, hoặc để lại bình luận, bạn có thể cung cấp tên, email, và nội dung tin nhắn.",
            "**Thông tin tự động:** Khi truy cập website, chúng tôi tự động thu thập một số thông tin kỹ thuật như địa chỉ IP, loại trình duyệt, hệ điều hành, trang bạn truy cập, và thời gian truy cập thông qua cookies và công nghệ theo dõi tương tự.",
            "**Cookies:** Website sử dụng cookies để cải thiện trải nghiệm người dùng, phân tích lưu lượng truy cập, và cá nhân hóa nội dung. Bạn có thể tắt cookies trong cài đặt trình duyệt.",
        ]
    },
    {
        icon: <Eye className="w-6 h-6" />,
        title: "2. Mục đích sử dụng thông tin",
        content: [
            "Cung cấp, duy trì và cải thiện dịch vụ của chúng tôi.",
            "Gửi bản tin, thông báo cập nhật nội dung mới (nếu bạn đã đăng ký).",
            "Phân tích hành vi người dùng để tối ưu hóa trải nghiệm website.",
            "Phản hồi yêu cầu, câu hỏi hoặc phản hồi của bạn.",
            "Phát hiện, ngăn chặn và xử lý các vấn đề kỹ thuật hoặc bảo mật.",
        ]
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "3. Bảo mật thông tin",
        content: [
            "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn bằng các biện pháp bảo mật hợp lý, bao gồm mã hóa SSL 256-bit cho tất cả kết nối.",
            "Chúng tôi không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba mà không có sự đồng ý của bạn, trừ khi luật pháp yêu cầu.",
            "Truy cập vào dữ liệu cá nhân được giới hạn cho nhân viên cần thiết để thực hiện công việc.",
        ]
    },
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: "4. Quyền của bạn",
        content: [
            "**Quyền truy cập:** Bạn có quyền yêu cầu xem thông tin cá nhân mà chúng tôi lưu trữ về bạn.",
            "**Quyền chỉnh sửa:** Bạn có quyền yêu cầu chỉnh sửa thông tin không chính xác.",
            "**Quyền xóa:** Bạn có quyền yêu cầu xóa thông tin cá nhân của mình khỏi hệ thống.",
            "**Quyền từ chối:** Bạn có thể hủy đăng ký nhận bản tin bất cứ lúc nào bằng cách nhấp vào liên kết \"Hủy đăng ký\" trong email.",
        ]
    },
    {
        icon: <Bell className="w-6 h-6" />,
        title: "5. Dịch vụ bên thứ ba",
        content: [
            "Chúng tôi có thể sử dụng dịch vụ phân tích của bên thứ ba (như Google Analytics) để hiểu cách bạn sử dụng website.",
            "Các dịch vụ này có chính sách bảo mật riêng và chúng tôi khuyến khích bạn xem xét chính sách của họ.",
            "Chúng tôi không chịu trách nhiệm về nội dung hoặc hoạt động bảo mật của các website bên thứ ba được liên kết trên website này.",
        ]
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "6. Liên hệ",
        content: [
            "Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua:",
            "**Email:** cachdautu.com@gmail.com",
            "**Website:** cachdautu.com/contact",
            "Chính sách này có hiệu lực từ ngày 01/03/2026 và có thể được cập nhật theo thời gian. Mọi thay đổi sẽ được công bố trên trang này.",
        ]
    },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="pt-24 sm:pt-32 pb-16 bg-primary min-h-screen text-text relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-6">
                        <Shield className="w-4 h-4" />
                        Bảo mật
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        Chính sách{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                            Bảo mật
                        </span>
                    </h1>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                        Cách Đầu Tư cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn.
                        Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.
                    </p>
                    <p className="text-text-muted text-sm mt-4">
                        Cập nhật lần cuối: 01/03/2026
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl p-6 sm:p-8 hover:border-emerald-500/20 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center text-emerald-400">
                                    {section.icon}
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">{section.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {section.content.map((item, i) => (
                                    <li key={i} className="text-text-secondary text-sm sm:text-base leading-relaxed flex gap-3">
                                        <span className="text-emerald-400 mt-1.5 flex-shrink-0">•</span>
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
