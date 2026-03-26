import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// POST /api/newsletter — Đăng ký email nhận tin
export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Email không hợp lệ" },
                { status: 400 }
            );
        }

        // Normalize email
        const normalizedEmail = email.toLowerCase().trim();

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        // Check if email already exists
        const { data: existing } = await supabase
            .from("newsletter_subscribers")
            .select("id, is_active")
            .eq("email", normalizedEmail)
            .single();

        if (existing) {
            if (existing.is_active) {
                return NextResponse.json({
                    message: "Email này đã đăng ký rồi!",
                    already_subscribed: true,
                });
            }
            // Re-activate if previously unsubscribed
            await supabase
                .from("newsletter_subscribers")
                .update({ is_active: true, resubscribed_at: new Date().toISOString() })
                .eq("id", existing.id);

            return NextResponse.json({
                message: "Chào mừng bạn trở lại! Đã kích hoạt lại đăng ký.",
                reactivated: true,
            });
        }

        // Create new subscriber
        const { error } = await supabase
            .from("newsletter_subscribers")
            .insert({
                email: normalizedEmail,
                is_active: true,
                source: "blog_article",
                subscribed_at: new Date().toISOString(),
            });

        if (error) {
            console.error("Newsletter insert error:", error);
            return NextResponse.json(
                { error: "Đã có lỗi xảy ra, vui lòng thử lại." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message: "Đăng ký thành công! Cảm ơn bạn 🎉",
            success: true,
        });
    } catch (err) {
        return NextResponse.json(
            { error: "Server error", details: String(err) },
            { status: 500 }
        );
    }
}
