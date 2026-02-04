import { Metadata } from "next";
import SmoothScrollContainer from "@/components/SmoothScrollContainer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TradingSection from "@/components/sections/TradingSection";
import RealEstateSection from "@/components/sections/RealEstateSection";
import FinanceSection from "@/components/sections/FinanceSection";
import Testimonials from "@/components/sections/Testimonials";
import FeaturedPosts from "@/components/sections/FeaturedPosts";
import FAQ from "@/components/sections/FAQ";
import Calculator from "@/components/sections/Calculator";
import InvestorQuiz from "@/components/sections/InvestorQuiz";
import StickyCTA from "@/components/StickyCTA";
import ActivityFeed from "@/components/ActivityFeed";
import ExitPopup from "@/components/ExitPopup";
import ChatWidget from "@/components/ChatWidget";
import PartnerLogos from "@/components/sections/PartnerLogos";
import NewsletterSection from "@/components/sections/NewsletterSection";

// SEO Metadata for homepage
export const metadata: Metadata = {
    title: "Cách Đầu Tư - Nền tảng kiến thức đầu tư #1 Việt Nam | Chứng khoán, Crypto, Bất động sản",
    description: "Học cách đầu tư thông minh vào chứng khoán, crypto, bất động sản, vàng, forex với 150+ bài phân tích chuyên sâu. Tham gia 12,500+ nhà đầu tư tin tưởng.",
    keywords: ["đầu tư", "chứng khoán", "crypto", "bất động sản", "forex", "vàng", "tài chính cá nhân", "tự do tài chính"],
    openGraph: {
        title: "Cách Đầu Tư - Nền tảng kiến thức đầu tư #1 Việt Nam",
        description: "Học cách đầu tư thông minh với 150+ bài phân tích chuyên sâu. Tham gia 12,500+ nhà đầu tư.",
        url: "https://cachdautu.com",
        siteName: "Cách Đầu Tư",
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cách Đầu Tư - Nền tảng kiến thức đầu tư #1 Việt Nam",
        description: "Học cách đầu tư thông minh với 150+ bài phân tích chuyên sâu.",
    },
    alternates: {
        canonical: "https://cachdautu.com",
    },
};





// JSON-LD structured data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cách Đầu Tư",
    "url": "https://cachdautu.com",
    "description": "Nền tảng kiến thức đầu tư hàng đầu Việt Nam về chứng khoán, crypto, bất động sản",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cachdautu.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Cách Đầu Tư",
        "logo": {
            "@type": "ImageObject",
            "url": "https://cachdautu.com/logo.png"
        }
    }
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cách Đầu Tư",
    "url": "https://cachdautu.com",
    "logo": "https://cachdautu.com/logo.png",
    "description": "Nền tảng kiến thức đầu tư hàng đầu Việt Nam",
    "sameAs": [
        "https://facebook.com/cachdautu",
        "https://youtube.com/cachdautu"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "contact@cachdautu.com"
    }
};

export default function HomePage() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />

            <SmoothScrollContainer>
                {/* Skip to main content link for accessibility */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-blue focus:text-white focus:rounded-lg"
                >
                    Bỏ qua đến nội dung chính
                </a>

                {/* Fixed Elements */}
                <Navbar />
                <StickyCTA />
                <ActivityFeed />
                <ExitPopup />
                <ChatWidget />

                {/* Main Content */}
                <main id="main-content">
                    {/* Hero Section - h1 inside */}
                    <div className="snap-section">
                        <Hero />
                    </div>

                    {/* Partner Logos */}
                    <PartnerLogos />

                    {/* Stats Section */}
                    <div className="snap-section">
                        <Stats />
                    </div>

                    {/* Calculator */}
                    <div className="snap-section">
                        <Calculator />
                    </div>

                    {/* Why Choose Us */}
                    <div className="snap-section">
                        <WhyChooseUs />
                    </div>

                    {/* Quiz */}
                    <div className="snap-section">
                        <InvestorQuiz />
                    </div>

                    {/* Trading Section */}
                    <div className="snap-section">
                        <TradingSection />
                    </div>

                    {/* Real Estate Section */}
                    <div className="snap-section">
                        <RealEstateSection />
                    </div>

                    {/* Finance Section */}
                    <div className="snap-section">
                        <FinanceSection />
                    </div>

                    {/* Testimonials */}
                    <div className="snap-section">
                        <Testimonials />
                    </div>

                    {/* Featured Posts */}
                    <div className="snap-section">
                        <FeaturedPosts />
                    </div>

                    {/* FAQ */}
                    <div className="snap-section">
                        <FAQ />
                    </div>

                    {/* Newsletter + Footer */}
                    <div className="snap-section">
                        <NewsletterSection />
                    </div>
                </main>
            </SmoothScrollContainer>
        </>
    );
}
