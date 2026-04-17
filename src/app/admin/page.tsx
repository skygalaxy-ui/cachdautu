"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/core/supabase";
import { Post } from "@/core/types";
import {
    FileText,
    FolderOpen,
    TrendingUp,
    Plus,
    Clock,
    ArrowUpRight,
    Eye,
    Edit3,
    Calendar,
    AlertCircle,
    Image as ImageIcon,
    PenLine,
    BarChart3,
    Zap,
    Search
} from "lucide-react";

interface Stats {
    posts: number;
    categories: number;
    published: number;
    drafts: number;
    scheduled: number;
    imagesCount: number;
    thisMonthPosts: number;
    lastMonthPosts: number;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats>({
        posts: 0, categories: 0, published: 0, drafts: 0,
        scheduled: 0, imagesCount: 0, thisMonthPosts: 0, lastMonthPosts: 0
    });
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [draftPosts, setDraftPosts] = useState<Post[]>([]);
    const [scheduledPosts, setScheduledPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [autoPublished, setAutoPublished] = useState<string[]>([]);

    // Auto-publish scheduled posts
    useEffect(() => {
        async function checkAutoPublish() {
            try {
                const res = await fetch('/api/cron/publish?key=cachdautu-cron-2026');
                const data = await res.json();
                if (data.published > 0 && data.posts) {
                    setAutoPublished(data.posts.map((p: { title: string }) => p.title));
                }
            } catch { }
        }
        checkAutoPublish();
        const interval = setInterval(checkAutoPublish, 5 * 60 * 1000); // mỗi 5 phút
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const now = new Date();
                const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
                const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
                const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0).toISOString();

                const [
                    { count: postsCount },
                    { count: catsCount },
                    { count: pubCount },
                    { count: draftCount },
                    { count: scheduledCount },
                    { count: thisMonthCount },
                    { count: lastMonthCount },
                    { data: recent },
                    { data: drafts },
                    { data: scheduled }
                ] = await Promise.all([
                    supabase.from('posts').select('*', { count: 'exact', head: true }),
                    supabase.from('categories').select('*', { count: 'exact', head: true }),
                    supabase.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', true),
                    supabase.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', false).or('scheduled_at.is.null,scheduled_at.lte.' + now.toISOString()),
                    supabase.from('posts').select('*', { count: 'exact', head: true }).eq('is_published', false).not('scheduled_at', 'is', null).gt('scheduled_at', now.toISOString()),
                    supabase.from('posts').select('*', { count: 'exact', head: true }).gte('created_at', thisMonthStart),
                    supabase.from('posts').select('*', { count: 'exact', head: true }).gte('created_at', lastMonthStart).lte('created_at', lastMonthEnd),
                    supabase.from('posts').select('*').order('created_at', { ascending: false }).limit(5),
                    supabase.from('posts').select('*').eq('is_published', false).or('scheduled_at.is.null,scheduled_at.lte.' + now.toISOString()).order('created_at', { ascending: false }).limit(5),
                    supabase.from('posts').select('*').eq('is_published', false).not('scheduled_at', 'is', null).gt('scheduled_at', now.toISOString()).order('scheduled_at', { ascending: true }).limit(5)
                ]);

                // Count images from storage
                let imagesCount = 0;
                try {
                    const { data: imgs } = await supabase.storage.from('images').list('posts', { limit: 500 });
                    imagesCount = imgs?.filter(f => f.name && !f.name.startsWith('.')).length || 0;
                } catch { }

                setStats({
                    posts: postsCount || 0,
                    categories: catsCount || 0,
                    published: pubCount || 0,
                    drafts: draftCount || 0,
                    scheduled: scheduledCount || 0,
                    imagesCount,
                    thisMonthPosts: thisMonthCount || 0,
                    lastMonthPosts: lastMonthCount || 0,
                });

                setRecentPosts(recent || []);
                setDraftPosts(drafts || []);
                setScheduledPosts(scheduled || []);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const growthPercent = stats.lastMonthPosts > 0
        ? Math.round(((stats.thisMonthPosts - stats.lastMonthPosts) / stats.lastMonthPosts) * 100)
        : stats.thisMonthPosts > 0 ? 100 : 0;

    const statCards = [
        {
            label: "Tổng bài viết",
            value: stats.posts,
            icon: FileText,
            color: "text-[#5c5f62]",
            bgLight: "bg-[#f4f6f8]",
            trend: `${growthPercent >= 0 ? '+' : ''}${growthPercent}%`,
            trendUp: growthPercent >= 0,
            sub: `${stats.thisMonthPosts} tháng này`
        },
        {
            label: "Đã xuất bản",
            value: stats.published,
            icon: TrendingUp,
            color: "text-[#5c5f62]",
            bgLight: "bg-[#f4f6f8]",
            trend: stats.posts > 0 ? `${Math.round((stats.published / stats.posts) * 100)}%` : "0%",
            trendUp: true,
            sub: "tỉ lệ xuất bản"
        },
        {
            label: "Bài nháp",
            value: stats.drafts,
            icon: PenLine,
            color: "text-[#5c5f62]",
            bgLight: "bg-[#f4f6f8]",
            trend: stats.drafts > 0 ? "Cần xử lý" : "Tốt",
            trendUp: stats.drafts === 0,
            sub: "chờ xuất bản"
        },
        {
            label: "Chuyên mục",
            value: stats.categories,
            icon: FolderOpen,
            color: "text-[#5c5f62]",
            bgLight: "bg-[#f4f6f8]",
            trend: `${stats.imagesCount} ảnh`,
            trendUp: true,
            sub: "trong thư viện"
        },
    ];

    function formatTimeAgo(dateStr: string) {
        const now = new Date();
        const date = new Date(dateStr);
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return "Vừa xong";
        if (minutes < 60) return `${minutes} phút trước`;
        if (hours < 24) return `${hours} giờ trước`;
        if (days < 7) return `${days} ngày trước`;
        return date.toLocaleDateString('vi-VN');
    }

    function formatScheduleDate(dateStr: string) {
        const d = new Date(dateStr);
        const now = new Date();
        const diff = d.getTime() - now.getTime();
        const days = Math.floor(diff / 86400000);

        if (days < 0) return "Đã quá hạn";
        if (days === 0) return "Hôm nay";
        if (days === 1) return "Ngày mai";
        return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    }

    return (
        <div className="space-y-6 text-[#1a1a1a]">
            {/* Auto-publish notification */}
            {autoPublished.length > 0 && (
                <div className="bg-[#e4f3eb] border border-[#008060] rounded-md p-3 flex items-start gap-3 animate-fade-in-up">
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-[#008060]">Tự động xuất bản {autoPublished.length} bài viết!</p>
                        <ul className="mt-1 space-y-0.5">
                            {autoPublished.map((title, i) => (
                                <li key={i} className="text-xs text-[#008060]">• {title}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={() => setAutoPublished([])} className="text-[#008060] hover:text-[#005c46] text-lg leading-none">&times;</button>
                </div>
            )}
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
                <div>
                    <h1 className="text-[20px] font-semibold text-[#1a1a1a]">Tổng quan</h1>
                    <p className="text-[#5c5f62] text-[13px] mt-0.5">
                        Hôm nay là {new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}.
                    </p>
                </div>
                <Link
                    href="/admin/posts/new"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1a1a1a] text-white font-semibold text-[13px] hover:bg-[#333333] transition-colors w-fit shadow-sm"
                >
                    <Plus className="w-4 h-4" />
                    Bài viết mới
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((stat, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg p-4 border border-[#c9c9c9] group animate-fade-in-up opacity-0 shadow-sm"
                        style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className={`w-8 h-8 rounded-md ${stat.bgLight} flex items-center justify-center border border-[#d2d5d9]`}>
                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            </div>
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${stat.trendUp ? 'bg-[#e4f3eb] text-[#008060]' : 'bg-[#f4f6f8] text-[#5c5f62]'}`}>
                                {stat.trend}
                            </span>
                        </div>
                        <p className="text-2xl font-semibold text-[#1a1a1a] mb-0.5">
                            {loading ? (
                                <span className="inline-block w-12 h-6 bg-[#ebebeb] rounded animate-pulse" />
                            ) : (
                                stat.value
                            )}
                        </p>
                        <p className="text-[#5c5f62] text-[13px]">{stat.label}</p>
                        <p className="text-[11px] text-[#8c9196] mt-0.5">{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Posts - Takes 2 columns */}
                <div className="lg:col-span-2 bg-white rounded-lg border border-[#c9c9c9] shadow-sm">
                    <div className="flex items-center justify-between p-4 border-b border-[#c9c9c9]">
                        <h2 className="font-semibold text-[#1a1a1a] text-sm">Bài viết gần đây</h2>
                        <Link href="/admin/posts" className="text-[13px] text-[#4a4a4a] hover:text-[#1a1a1a] font-medium flex items-center gap-1 transition-colors">
                            Xem tất cả
                        </Link>
                    </div>

                    {loading ? (
                        <div className="p-5 space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg animate-pulse" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                                        <div className="h-3 bg-gray-100 rounded w-1/4 animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : recentPosts.length === 0 ? (
                        <div className="p-12 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="text-gray-500 mb-4">Chưa có bài viết nào</p>
                            <Link
                                href="/admin/posts/new"
                                className="inline-flex items-center gap-2 text-gray-900 hover:text-emerald-600 text-sm font-medium transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Tạo bài viết đầu tiên
                            </Link>
                        </div>
                    ) : (
                        <div className="p-2">
                            {recentPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex items-center gap-3 p-2 rounded-md hover:bg-[#f4f6f8] transition-colors group border-b border-[#ebebeb] last:border-0"
                                >
                                    <div className="w-10 h-10 rounded border border-[#d2d5d9] bg-[#ebebeb] flex items-center justify-center flex-shrink-0 overflow-hidden">
                                        {post.featured_image ? (
                                            <>
                                                <img 
                                                    src={post.featured_image} 
                                                    alt="" 
                                                    className="w-full h-full object-cover" 
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        if (e.currentTarget.nextElementSibling) {
                                                            e.currentTarget.nextElementSibling.classList.remove('hidden');
                                                        }
                                                    }}
                                                />
                                                <FileText className="w-4 h-4 text-[#8c9196] hidden" />
                                            </>
                                        ) : (
                                            <FileText className="w-4 h-4 text-[#8c9196]" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[#1a1a1a] font-medium truncate text-[13px] hover:underline cursor-pointer">
                                            {post.title}
                                        </p>
                                        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#5c5f62]">
                                            <span>{formatTimeAgo(post.created_at)}</span>
                                            <span className={`px-1.5 py-0.5 rounded font-medium ${post.is_published ? 'bg-[#e4f3eb] text-[#008060]'
                                                : (post.scheduled_at && new Date(post.scheduled_at) > new Date()) ? 'bg-[#f4f6f8] text-[#1a1a1a]'
                                                    : 'bg-[#ffea8a] text-[#8a6116]'
                                                }`}>
                                                {post.is_published ? 'Xuất bản'
                                                    : (post.scheduled_at && new Date(post.scheduled_at) > new Date()) ? 'Lên lịch'
                                                        : 'Nháp'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link href={`/admin/posts/${post.id}`} className="p-1.5 rounded hover:bg-[#ebebeb] text-[#5c5f62] hover:text-[#1a1a1a]">
                                            <Edit3 className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {/* Drafts Card */}
                    {draftPosts.length > 0 && (
                        <div className="bg-white rounded-lg border border-[#c9c9c9] shadow-sm">
                            <div className="flex items-center justify-between p-3 border-b border-[#c9c9c9]">
                                <h3 className="font-semibold text-[#1a1a1a] text-[13px] flex items-center gap-2">
                                    <PenLine className="w-4 h-4 text-[#5c5f62]" />
                                    Bài nháp
                                </h3>
                                <span className="text-[11px] font-medium px-2 rounded-full bg-[#f4f6f8] text-[#5c5f62]">{stats.drafts}</span>
                            </div>
                            <div className="p-1.5">
                                {draftPosts.slice(0, 3).map(post => (
                                    <Link
                                        key={post.id}
                                        href={`/admin/posts/${post.id}`}
                                        className="flex items-center gap-3 p-2 rounded hover:bg-[#f4f6f8] transition-colors group"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[13px] text-[#1a1a1a] truncate group-hover:underline">{post.title}</p>
                                            <p className="text-[11px] text-[#5c5f62] mt-0.5">{formatTimeAgo(post.created_at)}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quick Actions Card */}
                    <div className="bg-white rounded-lg border border-[#c9c9c9] p-4 shadow-sm">
                        <h3 className="font-semibold text-[#1a1a1a] text-sm mb-3">Thao tác nhanh</h3>
                        <div className="space-y-1">
                            <Link href="/admin/posts/new" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#f4f6f8] transition-colors group">
                                <div className="w-8 h-8 rounded bg-[#ebebeb] flex items-center justify-center border border-[#d2d5d9]">
                                    <Plus className="w-4 h-4 text-[#1a1a1a]" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-medium text-[#1a1a1a] group-hover:underline">Tạo bài viết</p>
                                </div>
                            </Link>
                            <Link href="/admin/categories" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#f4f6f8] transition-colors group">
                                <div className="w-8 h-8 rounded bg-[#ebebeb] flex items-center justify-center border border-[#d2d5d9]">
                                    <FolderOpen className="w-4 h-4 text-[#1a1a1a]" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-medium text-[#1a1a1a] group-hover:underline">Chuyên mục</p>
                                </div>
                            </Link>
                            <Link href="/admin/media" className="flex items-center gap-3 p-2 rounded-md hover:bg-[#f4f6f8] transition-colors group">
                                <div className="w-8 h-8 rounded bg-[#ebebeb] flex items-center justify-center border border-[#d2d5d9]">
                                    <ImageIcon className="w-4 h-4 text-[#1a1a1a]" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-medium text-[#1a1a1a] group-hover:underline">Thư viện ảnh</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Tips Card */}
                    <div className="bg-[#f4f6f8] border border-[#c9c9c9] rounded-lg p-4 text-[#1a1a1a] shadow-sm">
                        <div className="w-8 h-8 rounded bg-white border border-[#d2d5d9] flex items-center justify-center mb-3">
                            <Zap className="w-4 h-4 text-[#1a1a1a]" />
                        </div>
                        <h3 className="font-semibold text-[13px] mb-1.5">Mẹo Content</h3>
                        <p className="text-[12px] text-[#4a4a4a] mb-3 leading-relaxed">Viết tiêu đề hấp dẫn, mô tả meta độc đáo, và thêm ảnh đại diện cho mỗi bài để tối ưu hiển thị SEO.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
