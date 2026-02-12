import Image from "next/image";
import { User, Award, BookOpen, TrendingUp, Shield } from "lucide-react";

interface AuthorCardProps {
    name?: string;
    bio?: string;
    avatar?: string;
    credentials?: string[];
}

export default function AuthorCard({
    name = "Đội ngũ CachDauTu",
    bio = "Nhóm chuyên gia tài chính & công nghệ với hơn 10 năm kinh nghiệm trong lĩnh vực đầu tư chứng khoán, crypto và quản lý tài sản.",
    avatar,
    credentials = [
        "Chứng chỉ CFA Level II",
        "10+ năm kinh nghiệm đầu tư",
        "Phân tích thị trường hàng ngày"
    ]
}: AuthorCardProps) {
    return (
        <div className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] rounded-3xl p-5 sm:p-6">
            <div className="flex items-center gap-4 mb-4">
                {/* Avatar */}
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-primary flex items-center justify-center overflow-hidden">
                        {avatar ? (
                            <Image
                                src={avatar}
                                alt={name}
                                width={60}
                                height={60}
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                                C
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                        <Shield className="w-3 h-3 text-green-400" />
                        <span className="text-[10px] text-green-400 font-medium">Chuyên gia xác minh</span>
                    </div>
                </div>
            </div>

            {/* Bio */}
            <p className="text-xs text-text-muted leading-relaxed mb-4">{bio}</p>

            {/* Credentials */}
            <div className="space-y-2 mb-4">
                {credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                        <Award className="w-3 h-3 text-purple-400 flex-shrink-0" />
                        <span>{cred}</span>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                        <BookOpen className="w-3 h-3 text-purple-400" />
                        <span className="text-sm font-bold text-white">50+</span>
                    </div>
                    <span className="text-[10px] text-text-muted">Bài viết</span>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-sm font-bold text-white">10+</span>
                    </div>
                    <span className="text-[10px] text-text-muted">Năm KN</span>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                        <User className="w-3 h-3 text-pink-400" />
                        <span className="text-sm font-bold text-white">5K+</span>
                    </div>
                    <span className="text-[10px] text-text-muted">Độc giả</span>
                </div>
            </div>
        </div>
    );
}
