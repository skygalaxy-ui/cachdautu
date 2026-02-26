"use client";

import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/core/supabase";
import { Post } from "@/core/types";
import {
    Search, CheckCircle2, AlertCircle, XCircle, ChevronDown, ChevronUp,
    RefreshCcw, SearchIcon, Filter, LayoutList, AlertTriangle, FileText,
    Image as ImageIcon, Target, ExternalLink, ArrowRight
} from "lucide-react";
import Link from "next/link";

interface AuditResult {
    post: Post;
    score: number;
    issues: {
        label: string;
        status: "pass" | "warning" | "fail";
        message: string;
    }[];
}

export default function SeoAuditPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<"all" | "critical" | "warning">("all");
    const [expandedIds, setExpandedIds] = useState<string[]>([]);

    const fetchPosts = async () => {
        setRefreshing(true);
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('updated_at', { ascending: false });

        if (!error && data) {
            setPosts(data as Post[]);
        }
        setLoading(false);
        setRefreshing(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const audits: AuditResult[] = useMemo(() => {
        return posts.map(post => {
            const issues: AuditResult['issues'] = [];
            let points = 0;
            const totalChecks = 6;

            // 1. Meta Title
            const metaTitle = post.meta_title || post.title;
            if (!metaTitle) {
                issues.push({ label: "Tiêu đề", status: "fail", message: "Thiếu tiêu đề bài viết" });
            } else if (metaTitle.length < 30 || metaTitle.length > 60) {
                issues.push({ label: "Tiêu đề", status: "warning", message: `Độ dài không tối ưu (${metaTitle.length}/30-60 ký tự)` });
                points += 0.5;
            } else {
                points += 1;
            }

            // 2. Meta Description
            const excerpt = post.excerpt || "";
            if (!excerpt) {
                issues.push({ label: "Mô tả SEO", status: "fail", message: "Thiếu mô tả SEO (Excerpt)" });
            } else if (excerpt.length < 70 || excerpt.length > 160) {
                issues.push({ label: "Mô tả SEO", status: "warning", message: `Độ dài không tối ưu (${excerpt.length}/70-160 ký tự)` });
                points += 0.5;
            } else {
                points += 1;
            }

            // 3. Content Length
            const wordCount = post.content ? post.content.split(/\s+/).filter(Boolean).length : 0;
            if (wordCount < 300) {
                issues.push({ label: "Độ dài nội dung", status: "fail", message: `Nội dung quá ngắn (${wordCount} từ). Cần ≥300 từ` });
            } else if (wordCount < 800) {
                issues.push({ label: "Độ dài nội dung", status: "warning", message: `Nội dung trung bình (${wordCount} từ). Nên ≥800 từ` });
                points += 0.5;
            } else {
                points += 1;
            }

            // 4. Featured Image
            if (!post.featured_image) {
                issues.push({ label: "Hình ảnh", status: "fail", message: "Thiếu ảnh đại diện" });
            } else {
                points += 1;
            }

            // 5. Slug
            if (!post.slug || post.slug.length > 75) {
                issues.push({ label: "URL/Slug", status: "warning", message: post.slug ? "Slug quá dài (>75 ký tự)" : "Thiếu Slug" });
                points += 0.5;
            } else {
                points += 1;
            }

            // 6. Keywords
            // Note: Since focus_keyword might not be in the type yet, we check safely
            const keyword = (post as any).focus_keyword;
            if (!keyword) {
                issues.push({ label: "Từ khóa chính", status: "warning", message: "Chưa đặt từ khóa chính (Focus Keyword)" });
                points += 0.5;
            } else {
                points += 1;
            }

            const score = Math.round((points / totalChecks) * 100);

            return { post, score, issues };
        });
    }, [posts]);

    const filteredAudits = useMemo(() => {
        return audits.filter(a => {
            const matchesSearch = a.post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                a.post.slug.toLowerCase().includes(searchTerm.toLowerCase());

            if (!matchesSearch) return false;

            if (filterStatus === "critical") return a.issues.some(i => i.status === "fail");
            if (filterStatus === "warning") return a.issues.some(i => i.status === "warning");
            return true;
        });
    }, [audits, searchTerm, filterStatus]);

    const stats = useMemo(() => {
        if (audits.length === 0) return { avg: 0, critical: 0, warning: 0 };
        const avg = Math.round(audits.reduce((acc, curr) => acc + curr.score, 0) / audits.length);
        const critical = audits.filter(a => a.issues.some(i => i.status === "fail")).length;
        const warning = audits.filter(a => a.issues.some(i => i.status === "warning")).length;
        return { avg, critical, warning };
    }, [audits]);

    const toggleExpand = (id: string) => {
        setExpandedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                <RefreshCcw className="w-10 h-10 text-emerald-500 animate-spin mb-4" />
                <p className="text-gray-500 font-medium">Đang chạy Audit toàn website...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <SearchIcon className="text-emerald-600" size={28} />
                        SEO Audit Website
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Phân tích chất lượng SEO cho toàn bộ {posts.length} bài viết</p>
                </div>
                <button
                    onClick={fetchPosts}
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
                >
                    <RefreshCcw size={18} className={refreshing ? "animate-spin" : ""} />
                    Chạy quét lại
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm font-medium mb-1">Điểm trung bình</p>
                    <div className="flex items-end gap-2">
                        <p className={`text-3xl font-bold ${stats.avg >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>{stats.avg}%</p>
                        <span className="text-xs text-gray-400 mb-1.5">Sức khỏe web</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm font-medium mb-1">Cần sửa gấp</p>
                    <div className="flex items-end gap-2 text-red-600">
                        <p className="text-3xl font-bold">{stats.critical}</p>
                        <span className="text-xs text-gray-400 mb-1.5">bài viết lỗi nặng</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm font-medium mb-1">Cần tối ưu thêm</p>
                    <div className="flex items-end gap-2 text-amber-600">
                        <p className="text-3xl font-bold">{stats.warning}</p>
                        <span className="text-xs text-gray-400 mb-1.5">bài viết cảnh báo</span>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Tìm theo tiêu đề hoặc slug..."
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-emerald-500 transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex p-1 bg-gray-100 rounded-xl">
                    <button
                        onClick={() => setFilterStatus("all")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterStatus === "all" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        Tất cả
                    </button>
                    <button
                        onClick={() => setFilterStatus("critical")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterStatus === "critical" ? "bg-red-50 text-red-600 shadow-sm" : "text-gray-500 hover:text-red-500"}`}
                    >
                        Có lỗi ({stats.critical})
                    </button>
                    <button
                        onClick={() => setFilterStatus("warning")}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterStatus === "warning" ? "bg-amber-50 text-amber-600 shadow-sm" : "text-gray-500 hover:text-amber-600"}`}
                    >
                        Cảnh báo ({stats.warning})
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="space-y-4">
                {filteredAudits.length === 0 ? (
                    <div className="bg-white py-20 rounded-2xl border border-gray-100 text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4 opacity-20" />
                        <p className="text-gray-500">Chúc mừng! Không tìm thấy vấn đề nào phù hợp</p>
                    </div>
                ) : (
                    filteredAudits.map(({ post, score, issues }) => (
                        <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:border-emerald-200 transition-all">
                            <div
                                className="flex items-center justify-between p-4 cursor-pointer"
                                onClick={() => toggleExpand(post.id)}
                            >
                                <div className="flex items-center gap-4 flex-1 min-w-0">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${score >= 80 ? 'bg-emerald-50 text-emerald-600' :
                                            score >= 50 ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                        }`}>
                                        {score}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-900 truncate group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                            <span className="flex items-center gap-1"><FileText size={12} /> {post.slug}</span>
                                            {issues.length > 0 && (
                                                <span className="flex items-center gap-1 text-amber-500 font-medium font-mono">
                                                    ! {issues.length} vấn đề
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link
                                        href={`/admin/posts/${post.id}`}
                                        className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                                        onClick={(e) => e.stopPropagation()}
                                        title="Sửa bài viết"
                                    >
                                        <ExternalLink size={18} />
                                    </Link>
                                    {expandedIds.includes(post.id) ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                </div>
                            </div>

                            {expandedIds.includes(post.id) && (
                                <div className="px-16 pb-6 pt-2 border-t border-gray-50 bg-gray-50/30">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <AlertTriangle size={14} /> Danh sách vấn đề cần xử lý
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {issues.length === 0 ? (
                                            <div className="col-span-2 flex items-center gap-2 text-emerald-600 text-sm font-medium">
                                                <CheckCircle2 size={16} /> Bài viết này đã tối ưu SEO chuẩn 100%!
                                            </div>
                                        ) : (
                                            issues.map((issue, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                    {issue.status === "fail" ? <XCircle size={16} className="text-red-500 mt-0.5" /> : <AlertCircle size={16} className="text-amber-500 mt-0.5" />}
                                                    <div>
                                                        <p className="text-xs font-bold text-gray-900">{issue.label}</p>
                                                        <p className={`text-xs mt-0.5 ${issue.status === 'fail' ? 'text-red-500' : 'text-amber-600'}`}>{issue.message}</p>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <Link
                                            href={`/admin/posts/${post.id}`}
                                            className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all p-2 bg-emerald-50 rounded-lg"
                                        >
                                            Chỉnh sửa bài viết ngay <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
