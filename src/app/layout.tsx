import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
    title: "Cách Đầu Tư - Hiểu thị trường, hiểu rủi ro",
    description: "Học cách đầu tư thông minh vào chứng khoán, bất động sản, vàng, trái phiếu.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cachdautu.com"),
    openGraph: {
        title: "Cách Đầu Tư - Hiểu thị trường, hiểu rủi ro",
        description: "Học cách đầu tư thông minh vào chứng khoán, bất động sản, vàng, trái phiếu.",
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
        description: "Học cách đầu tư thông minh vào chứng khoán, bất động sản, vàng, trái phiếu.",
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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Cách Đầu Tư",
        "url": "https://cachdautu.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://cachdautu.com/blog?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const orgJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cách Đầu Tư",
        "url": "https://cachdautu.com",
        "logo": "https://cachdautu.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/cachdautu",
            "https://twitter.com/cachdautu"
        ]
    };

    return (
        <html lang="vi" className="dark">
            <head>
                <link rel="icon" href="/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&family=Noto+Sans:wght@300;400;500;600;700;800;900&family=Mulish:wght@300;400;500;600;700;800;900&family=Lexend:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Lora:wght@400;500;600;700&family=Merriweather:wght@300;400;700;900&display=swap" rel="stylesheet" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
                />
            </head>
            <body className="antialiased" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || ""} />
            </body>
        </html>
    );
}

