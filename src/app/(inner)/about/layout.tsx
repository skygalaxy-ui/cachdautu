import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Về chúng tôi - Cách Đầu Tư | Nền tảng kiến thức đầu tư #1 Việt Nam",
    description: "Tìm hiểu về sứ mệnh và đội ngũ Cách Đầu Tư - nơi giúp bạn đầu tư thông minh dựa trên kiến thức và quản lý rủi ro.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
