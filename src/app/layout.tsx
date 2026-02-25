import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Cách Đầu Tư - Hiểu thị trường, hiểu rủi ro",
    description: "Học cách đầu tư thông minh vào chứng khoán, crypto, bất động sản, vàng, forex.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cachdautu.com"),
    openGraph: {
        title: "Cách Đầu Tư - Hiểu thị trường, hiểu rủi ro",
        description: "Học cách đầu tư thông minh vào chứng khoán, crypto, bất động sản, vàng, forex.",
        url: "https://cachdautu.com",
        siteName: "Cách Đầu Tư",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Cách Đầu Tư - Nền tảng kiến thức đầu tư #1 Việt Nam",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cách Đầu Tư - Hiểu thị trường, hiểu rủi ro",
        description: "Học cách đầu tư thông minh vào chứng khoán, crypto, bất động sản, vàng, forex.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: "HTkNjcYarg_MJ3zS834kt0izCQxogHjyW3ZwlWQ7WEA",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi" className={`dark ${inter.variable}`}>
            <head>
                <link rel="icon" href="/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/logo.png" />
            </head>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || ""} />
            </body>
        </html>
    );
}

