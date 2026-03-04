import { MetadataRoute } from "next";
import { supabase, publishedFilter } from "@/core/supabase";
import { APP_CONFIG } from "@/core/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = APP_CONFIG.site.url;

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/chinh-sach-bao-mat`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/dieu-khoan-su-dung`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/mien-tru-trach-nhiem`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/lp/hoc-dau-tu`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Get categories
    const { data: categories } = await supabase.from("categories").select("slug");
    const categoryPages: MetadataRoute.Sitemap = (categories || [])
        .map((cat) => ({
            url: `${baseUrl}/blog/${cat.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        }));

    // Get published posts
    const { data: posts } = await supabase
        .from("posts")
        .select("slug, updated_at, categories(slug)")
        .or(publishedFilter());

    const postPages: MetadataRoute.Sitemap = (posts || [])
        .map((post: any) => ({
            url: `${baseUrl}/blog/${post.categories?.slug || "uncategorized"}/${post.slug}`,
            lastModified: new Date(post.updated_at || new Date()),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));

    return [...staticPages, ...categoryPages, ...postPages];
}
