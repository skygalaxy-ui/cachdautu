import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin/", "/private/", "/blog/crypto/", "/blog/crypto", "/blog/forex/", "/blog/forex"],
        },
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://cachdautu.com"}/sitemap.xml`,
    };
}
