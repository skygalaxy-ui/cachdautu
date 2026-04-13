import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const CRON_SECRET = "cachdautu-cron-2026";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");
    const type = searchParams.get("type"); // "morning" or "evening"

    if (key !== CRON_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (type !== "morning" && type !== "evening") {
        return NextResponse.json({ error: "Invalid type. Must be 'morning' or 'evening'." }, { status: 400 });
    }

    try {
        const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            serviceRoleKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
        const telegramChatId = process.env.TELEGRAM_CHAT_ID;

        if (!telegramToken || !telegramChatId) {
            return NextResponse.json({ error: "Missing Telegram Config" }, { status: 500 });
        }

        // Caculate Vietnam time bounds
        const nowObj = new Date();
        const vnDate = new Date(nowObj.getTime() + 7 * 60 * 60 * 1000);
        
        // Start of today VN time (in UTC)
        const startOfDayVN = new Date(vnDate);
        startOfDayVN.setUTCHours(0, 0, 0, 0);
        startOfDayVN.setTime(startOfDayVN.getTime() - 7 * 60 * 60 * 1000);
        
        // End of today VN time (in UTC)
        const endOfDayVN = new Date(vnDate);
        endOfDayVN.setUTCHours(23, 59, 59, 999);
        endOfDayVN.setTime(endOfDayVN.getTime() - 7 * 60 * 60 * 1000);

        const escapeHtml = (text: string) => {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        };

        let message = "";

        if (type === "morning") {
            // Thống kê: [1] Sẽ đăng hôm nay, [2] Tổng bài còn lại
            
            // 1. Bài sẽ đăng hôm nay
            const { data: postsToday } = await supabase
                .from("posts")
                .select("title, scheduled_at")
                .eq("is_published", false)
                .not("scheduled_at", "is", null)
                .gte("scheduled_at", startOfDayVN.toISOString())
                .lte("scheduled_at", endOfDayVN.toISOString())
                .order("scheduled_at", { ascending: true });
                
            // 2. Tổng bài còn lại trong tương lai
            const { count: totalFutureCount } = await supabase
                .from("posts")
                .select("id", { count: "exact", head: true })
                .eq("is_published", false)
                .not("scheduled_at", "is", null)
                .gt("scheduled_at", startOfDayVN.toISOString());

            message = `🌅 <b>CHÀO BUỔI SÁNG! THỐNG KÊ LỊCH ĐĂNG</b>\n\n`;
            
            if (postsToday && postsToday.length > 0) {
                message += `📅 <b>Sẽ xuất bản hôm nay (${postsToday.length} bài):</b>\n`;
                postsToday.forEach((p) => {
                    const d = new Date(p.scheduled_at);
                    d.setTime(d.getTime() + 7 * 60 * 60 * 1000); // VN Time
                    const h = String(d.getUTCHours()).padStart(2, "0");
                    const m = String(d.getUTCMinutes()).padStart(2, "0");
                    message += `- ${h}:${m}: ${escapeHtml(p.title)}\n`;
                });
            } else {
                message += `📅 <b>Hôm nay không có bài nào cần đăng.</b>\n`;
            }
            
            message += `\n📦 <b>Số bài chờ trong kho:</b> ${totalFutureCount || 0} bài.`;
            
        } else if (type === "evening") {
            // Thống kê: Cuối ngày tổng kết các bài ĐÃ ĐĂNG trong ngày hôm nay
            // Tìm các bài is_published = true và published_at (hoặc scheduled_at) trong ngày hôm nay
            
            // Trong source, khi publish không set published_at, nên ta sẽ dựa vào scheduled_at của ngày hôm nay
            const { data: publishedToday } = await supabase
                .from("posts")
                .select("title, slug, categories(slug), scheduled_at")
                .eq("is_published", true)
                .not("scheduled_at", "is", null)
                .gte("scheduled_at", startOfDayVN.toISOString())
                .lte("scheduled_at", endOfDayVN.toISOString())
                .order("scheduled_at", { ascending: true });

            message = `🌙 <b>TỔNG KẾT BÀI VIẾT HÔM NAY</b>\n\n`;
            
            if (publishedToday && publishedToday.length > 0) {
                message += `✅ <b>Đã đăng thành công ${publishedToday.length} bài:</b>\n`;
                publishedToday.forEach((p) => {
                    const catData = p.categories as any;
                    const catSlug = catData?.slug || "uncategorized";
                    message += `📌 <a href="https://cachdautu.com/blog/${catSlug}/${p.slug}">${escapeHtml(p.title)}</a>\n`;
                });
            } else {
                message += `💤 Hôm nay không đăng bài nào.`;
            }
        }

        const res = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message,
                parse_mode: "HTML",
                disable_web_page_preview: true
            })
        });

        if (!res.ok) {
            const errText = await res.text();
            console.error("Telegram API Error:", errText);
            return NextResponse.json({ error: "Telegram API Error" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Đã gửi thông báo." });

    } catch (err) {
        return NextResponse.json({ error: "Server error", details: String(err) }, { status: 500 });
    }
}
