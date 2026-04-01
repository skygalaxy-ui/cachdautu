import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

async function sendWelcomeEmail(toEmail: string) {
    if (!process.env.GMAIL_APP_PASSWORD) {
        console.warn("GMAIL_APP_PASSWORD is not set. Skipping welcome email.");
        return;
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "cachdautu.com@gmail.com",
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: '"Cách Đầu Tư" <cachdautu.com@gmail.com>',
            to: toEmail,
            subject: "🎉 Chào mừng bạn đến với Bản tin Cách Đầu Tư!",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
                    <h2 style="color: #4f46e5;">Chào mừng bạn đến với Cách Đầu Tư!</h2>
                    <p>Chúng tôi rất vui vì bạn đã đăng ký nhận bản tin. Từ nay, bạn sẽ là một trong những người đầu tiên nhận được các bài phân tích chuyên sâu mới nhất về:</p>
                    <ul style="background: #f9fafb; padding: 15px 30px; border-radius: 8px;">
                        <li>📈 Nhận định thị trường chứng khoán</li>
                        <li>🏢 Cơ hội và xu hướng bất động sản</li>
                        <li>💰 Quản lý tài chính cá nhân và tối ưu hóa tài sản</li>
                    </ul>
                    <p>Nếu có bất kỳ thắc mắc hay chủ đề nào bạn muốn chúng tôi phân tích, đừng ngần ngại <strong>reply lại email này</strong> nhé.</p>
                    <br>
                    <p>Chúc bạn đầu tư thành công,<br><strong>Đội ngũ Cách Đầu Tư</strong></p>
                    <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
                        Email này được gửi tự động. Bạn nhận được vì đã đăng ký tại cachdautu.com.
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Welcome email sent to:", toEmail);
    } catch (err) {
        console.error("Failed to send welcome email:", err);
    }
}

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

            // Send welcome email asynchronously without blocking the response
            sendWelcomeEmail(normalizedEmail);

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

        // Send welcome email asynchronously without blocking the response
        sendWelcomeEmail(normalizedEmail);

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
