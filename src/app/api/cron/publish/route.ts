import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

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
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        // Đăng nhập admin để bypass RLS
        const { error: authError } = await supabase.auth.signInWithPassword({
            email: "admin@cachdautu.com",
            password: "CachDauTu@2026!",
        });

        if (authError) {
            return NextResponse.json({ error: "Auth failed", details: authError.message }, { status: 500 });
        }

        const now = new Date().toISOString();

        // Tìm bài viết đã đến giờ nhưng chưa xuất bản
        const { data: posts, error: fetchError } = await supabase
            .from("posts")
            .select("id, title, slug, scheduled_at")
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
                published.push({ title: post.title, slug: post.slug, scheduled_at: post.scheduled_at });
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
