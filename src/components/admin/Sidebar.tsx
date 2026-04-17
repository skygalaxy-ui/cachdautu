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
            <aside className={`fixed left-0 top-0 h-full w-[260px] bg-[#ebebeb] border-r border-[#d2d5d9] z-50 transform transition-transform duration-300 ease-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Logo Section */}
                <div className="h-14 flex items-center justify-between px-5 border-b border-[#d2d5d9]">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded overflow-hidden">
                            <img src="/logo.png" alt="Logo" width={32} height={32} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-semibold text-[#1a1a1a] text-sm">Cách Đầu Tư</p>
                        </div>
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden p-1.5 rounded hover:bg-black/5 transition-colors">
                        <X className="w-5 h-5 text-[#5c5f62]" />
                    </button>
                </div>

                {/* Search */}
                <div className="px-3 py-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c5f62]" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="w-full pl-9 pr-3 py-1.5 rounded-md bg-white border border-[#c9c9c9] text-[13px] text-[#1a1a1a] placeholder-[#8c9196] focus:outline-none focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] transition-all"
                        />
                    </div>
                </div>

                {/* Navigation */}
                <nav className="px-3 py-2">
                    <p className="px-2 mb-1.5 text-[11px] font-semibold text-[#5c5f62] uppercase tracking-wider">Menu</p>
                    <div className="space-y-0.5">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] font-medium transition-colors group ${isActive
                                        ? 'bg-white text-[#1a1a1a] shadow-sm'
                                        : 'text-[#4a4a4a] hover:bg-black/5 hover:text-[#1a1a1a]'
                                        }`}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <item.icon className={`w-[16px] h-[16px] ${isActive ? 'text-[#1a1a1a]' : 'text-[#5c5f62] group-hover:text-[#1a1a1a]'}`} />
                                        {item.name}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Quick Stats */}
                <div className="px-3 py-4 mt-2">
                    <div className="bg-white rounded-lg p-3 border border-[#c9c9c9] shadow-sm">
                        <div className="flex items-center justify-between mb-1">
                            <p className="text-[12px] text-[#4a4a4a] font-medium">Bài viết hôm nay</p>
                            {scheduledCount > 0 && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#e4f3eb] text-[#008060] font-medium">
                                    {scheduledCount} lên lịch
                                </span>
                            )}
                        </div>
                        <p className="text-xl font-bold text-[#1a1a1a]">{todayCount}</p>
                        <div className="mt-2 flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-[#ebebeb] rounded-full overflow-hidden">
                                <div className={`h-full rounded-full transition-all duration-500 ${progressPercent >= 100 ? 'bg-[#008060]' : 'bg-[#1a1a1a]'}`} style={{ width: `${progressPercent}%` }} />
                            </div>
                            <span className="text-[10px] text-[#5c5f62] font-semibold">{progressPercent}%</span>
                        </div>
                        <p className="text-[10px] text-[#5c5f62] mt-1">Mục tiêu: {DAILY_GOAL} bài/ngày</p>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-[#d2d5d9] bg-[#ebebeb] space-y-0.5">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] font-medium text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-black/5 transition-colors"
                    >
                        <ExternalLink className="w-[16px] h-[16px] text-[#5c5f62]" />
                        Xem trang chủ
                    </Link>
                    <button
                        onClick={handleLogout}
                        disabled={loggingOut}
                        className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px] font-medium text-[#d82c0d] hover:bg-[#d82c0d]/10 transition-colors disabled:opacity-50"
                    >
                        <LogOut className="w-[16px] h-[16px]" />
                        {loggingOut ? "Đang đăng xuất..." : "Đăng xuất"}
                    </button>
                </div>
            </aside>
        </>
    );
}
