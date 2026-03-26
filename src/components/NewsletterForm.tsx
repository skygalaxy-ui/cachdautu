"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface NewsletterFormProps {
    variant?: "inline" | "sidebar";
    className?: string;
}

export default function NewsletterForm({ variant = "inline", className = "" }: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("error");
            setMessage("Vui lòng nhập email hợp lệ");
            return;
        }

        setStatus("loading");
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage(data.message || "Đăng ký thành công! 🎉");
                setEmail("");
                // Track in GA
                if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "newsletter_signup", {
                        method: variant,
                    });
                }
            } else {
                setStatus("error");
                setMessage(data.error || "Đã có lỗi xảy ra");
            }
        } catch {
            setStatus("error");
            setMessage("Lỗi kết nối. Vui lòng thử lại.");
        }

        // Reset status after 5s
        setTimeout(() => {
            if (status !== "idle") setStatus("idle");
        }, 5000);
    };

    if (status === "success") {
        return (
            <div className={`flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 ${className}`}>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-sm text-green-400 font-medium">{message}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className={`flex ${variant === "sidebar" ? "flex-col" : "flex-col sm:flex-row"} gap-3`}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email của bạn"
                    disabled={status === "loading"}
                    className={`
                        ${variant === "sidebar" ? "w-full" : "flex-1"}
                        px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm
                        bg-white/[0.05] border border-white/[0.1] text-white
                        focus:border-purple-500 focus:outline-none transition-colors
                        placeholder-text-muted disabled:opacity-50
                    `}
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`
                        ${variant === "sidebar" ? "w-full" : ""}
                        px-6 py-2.5 sm:py-3 rounded-xl
                        bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500
                        text-white font-bold text-xs sm:text-sm
                        hover:shadow-glow-purple transition-all whitespace-nowrap
                        disabled:opacity-70 flex items-center justify-center gap-2
                    `}
                >
                    {status === "loading" ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Đang xử lý...
                        </>
                    ) : (
                        <>Đăng ký ngay ✨</>
                    )}
                </button>
            </div>
            {status === "error" && (
                <div className="flex items-center gap-2 mt-2 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    {message}
                </div>
            )}
        </form>
    );
}
