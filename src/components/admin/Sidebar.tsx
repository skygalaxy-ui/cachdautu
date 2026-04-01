"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    FolderOpen,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Bell,
    Search,
    ExternalLink,
    Image as ImageIcon,
    Tags,
    Link2
} from "lucide-react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase-browser";

const navItems = [
    { name: "Tổng quan", href: "/admin", icon: LayoutDashboard },
    { name: "Bài viết", href: "/admin/posts", icon: FileText },
    { name: "SEO Audit", href: "/admin/seo-audit", icon: Search },
    { name: "Broken Links", href: "/admin/broken-links", icon: Link2 },
    { name: "Chuyên mục", href: "/admin/categories", icon: FolderOpen },
    { name: "Tags", href: "/admin/tags", icon: Tags },
    { name: "Thư viện ảnh", href: "/admin/media", icon: ImageIcon },
    { name: "Cài đặt", href: "/admin/settings", icon: Settings },
];

const DAILY_GOAL = 3;

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);
    const [todayCount, setTodayCount] = useState(0);
    const [scheduledCount, setScheduledCount] = useState(0);
    const supabase = createClient();

    useEffect(() => {
        async function fetchStats() {
            try {
                const todayStart = new Date();
                todayStart.setHours(0, 0, 0, 0);
                const todayISO = todayStart.toISOString();

                const [{ count: today }, { count: scheduled }] = await Promise.all([
                    supabase.from('posts').select('*', { count: 'exact', head: true })
                        .eq('is_published', true).gte('updated_at', todayISO),
                    supabase.from('posts').select('*', { count: 'exact', head: true })
                        .eq('is_published', false).not('scheduled_at', 'is', null)
                        .gt('scheduled_at', new Date().toISOString())
                ]);
                setTodayCount(today || 0);
                setScheduledCount(scheduled || 0);
            } catch { }
        }
        fetchStats();
        const interval = setInterval(fetchStats, 60000);
        return () => clearInterval(interval);
    }, [supabase]);

    const handleLogout = async () => {
        setLoggingOut(true);
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    };

    const progressPercent = Math.min(100, Math.round((todayCount / DAILY_GOAL) * 100));

    return (
        <>
            {/* Top Header Bar - Mobile */}
            <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <Menu className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                        <img src="/logo.png" alt="Logo" width={32} height={32} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-gray-900">Admin</span>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                    <Bell className="w-5 h-5 text-gray-600" />
                    {scheduledCount > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />}
                </button>
            </header>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 h-full w-[260px] bg-[#1a1a2e] z-50 transform transition-transform duration-300 ease-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo Section */}
                <div className="h-16 flex items-center justify-between px-5 border-b border-white/10">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg overflow-hidden ring-2 ring-white/20">
                            <img src="/logo.png" alt="Logo" width={36} height={36} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-semibold text-white text-sm">Cách Đầu Tư</p>
                            <p className="text-[11px] text-gray-400">Admin Panel</p>
                        </div>
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                {/* Search */}
                <div className="px-4 py-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
                        />
                    </div>
                </div>

                {/* Navigation */}
                <nav className="px-3 py-2">
                    <p className="px-3 mb-2 text-[11px] font-medium text-gray-500 uppercase tracking-wider">Menu</p>
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group active:scale-95 ${isActive
                                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/10 text-emerald-400 border-l-2 border-emerald-400 shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className={`w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-emerald-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                                        {item.name}
                                    </div>
                                    {isActive && <ChevronRight className="w-4 h-4 text-emerald-400 animate-fade-in-right" />}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Quick Stats */}
                <div className="px-4 py-4 mt-4">
                    <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                        <div className="flex items-center justify-between mb-1">
                            <p className="text-xs text-emerald-400 font-medium">Bài viết hôm nay</p>
                            {scheduledCount > 0 && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                                    {scheduledCount} lên lịch
                                </span>
                            )}
                        </div>
                        <p className="text-2xl font-bold text-white">{todayCount}</p>
                        <div className="mt-3 flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full transition-all duration-500 ${progressPercent >= 100 ? 'bg-emerald-400' : 'bg-emerald-400/70'}`} style={{ width: `${progressPercent}%` }} />
                            </div>
                            <span className="text-[10px] text-gray-400">{progressPercent}%</span>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-1">Mục tiêu: {DAILY_GOAL} bài/ngày</p>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 space-y-1">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <ExternalLink className="w-[18px] h-[18px]" />
                        Xem trang chủ
                    </Link>
                    <button
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all disabled:opacity-50"
                    >
                        <LogOut className="w-[18px] h-[18px]" />
                        {loggingOut ? "Đang đăng xuất..." : "Đăng xuất"}
                    </button>
                </div>
            </aside>
        </>
    );
}
