import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cách Đầu Tư - Hiểu thị trường, hiểu rủi ro",
    description: "Học cách đầu tư thông minh vào chứng khoán, crypto, bất động sản, vàng, forex.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
            <body>{children}</body>
        </html>
    );
}
