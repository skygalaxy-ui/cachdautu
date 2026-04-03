import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// API Route: GET /api/cron/publish
// Tự động xuất bản bài viết đã đến giờ scheduled_at
// Gọi bằng cron job hoặc trình duyệt: /api/cron/publish?key=cachdautu-cron-2026

const CRON_SECRET = "cachdautu-cron-2026";

export async function GET(request: Request) {
    // Xác thực bằng secret key
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");

    if (key !== CRON_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // Dùng service_role key để bypass RLS (không cần login)
        const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            serviceRoleKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const now = new Date().toISOString();

        // Tìm bài viết đã đến giờ nhưng chưa xuất bản
        const { data: posts, error: fetchError } = await supabase
            .from("posts")
            .select("id, title, slug, scheduled_at, categories(slug)")
            .eq("is_published", false)
            .not("scheduled_at", "is", null)
            .lte("scheduled_at", now);

        if (fetchError) {
            return NextResponse.json({ error: "Fetch error", details: fetchError.message }, { status: 500 });
        }

        if (!posts || posts.length === 0) {
            return NextResponse.json({
                message: "Không có bài viết nào cần xuất bản",
                checked_at: now,
                published: 0,
            });
        }

        // Xuất bản từng bài
        const published = [];
        for (const post of posts) {
            const { error: updateError } = await supabase
                .from("posts")
                .update({ is_published: true })
                .eq("id", post.id);

            if (!updateError) {
                const categoryData = post.categories as any;
                const categorySlug = categoryData?.slug || "uncategorized";
                
                published.push({ title: post.title, slug: post.slug, scheduled_at: post.scheduled_at, categorySlug });
                
                // On-demand revalidation: Clear cache immediately
                revalidatePath("/");
                revalidatePath("/blog");
                revalidatePath(`/blog/${categorySlug}`);
                revalidatePath(`/blog/${categorySlug}/${post.slug}`);
            }
        }

        // Gửi thông báo qua Telegram
        if (published.length > 0) {
            const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
            const telegramChatId = process.env.TELEGRAM_CHAT_ID;

            if (telegramToken && telegramChatId) {
                try {
                    let message = `✅ *CachDauTu.com* vừa xuất bản thành công ${published.length} bài viết mới:\n\n`;
                    published.forEach((p, idx) => {
                        message += `${idx + 1}. [${p.title}](https://cachdautu.com/blog/${p.categorySlug}/${p.slug})\n`;
                    });

                    await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            chat_id: telegramChatId,
                            text: message,
                            parse_mode: "Markdown",
                            disable_web_page_preview: true
                        })
                    });
                } catch (err) {
                    console.error("Lỗi gửi Telegram:", err);
                }
            }
        }

        return NextResponse.json({
            message: `Đã xuất bản ${published.length} bài viết`,
            checked_at: now,
            published: published.length,
            posts: published,
        });

    } catch (err) {
        return NextResponse.json({ error: "Server error", details: String(err) }, { status: 500 });
    }
}
