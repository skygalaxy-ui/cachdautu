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

    const [activeTab, setActiveTab] = useState<"audit" | "checklist">("audit");

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
            const metaDesc = post.meta_description || "";
            if (!metaDesc) {
                issues.push({ label: "Mô tả SEO", status: "fail", message: "Thiếu mô tả SEO (Meta Description)" });
            } else if (metaDesc.length < 70 || metaDesc.length > 160) {
                issues.push({ label: "Mô tả SEO", status: "warning", message: `Độ dài không tối ưu (${metaDesc.length}/70-160 ký tự)` });
                points += 0.5;
            } else {
                points += 1;
            }

            // 3. Content Length
            const wordCount = post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length : 0;
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
        <div className="space-y-6 max-w-7xl mx-auto pb-20 px-4 sm:px-0">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Target className="text-emerald-600" size={28} />
                        Trung tâm Chất lượng SEO
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Phân tích & Tối ưu bài viết chuyên sâu</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={fetchPosts}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium rounded-xl transition-all border border-gray-100"
                    >
                        <RefreshCcw size={18} className={refreshing ? "animate-spin" : ""} />
                        Làm mới
                    </button>
                    <Link
                        href="/admin/posts/new"
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
                    >
                        Tạo bài mới
                    </Link>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-200">
                <button
                    onClick={() => setActiveTab("audit")}
                    className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 ${activeTab === "audit" ? "border-emerald-600 text-emerald-600" : "border-transparent text-gray-500 hover:text-gray-800"}`}
                >
                    Toàn bộ bài viết ({posts.length})
                </button>
                <button
                    onClick={() => setActiveTab("checklist")}
                    className={`px-6 py-3 font-semibold text-sm transition-all border-b-2 ${activeTab === "checklist" ? "border-emerald-600 text-emerald-600" : "border-transparent text-gray-500 hover:text-gray-800"}`}
                >
                    Checklist Lưu Ý ({stats.critical + stats.warning} vấn đề)
                </button>
            </div>

            {activeTab === "audit" ? (
                <>
                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 text-sm font-medium mb-1">Điểm sức khỏe SEO</p>
                            <div className="flex items-end gap-2">
                                <p className={`text-3xl font-bold ${stats.avg >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>{stats.avg}%</p>
                                <span className="text-xs text-gray-400 mb-1.5">Trung bình</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-red-600 border-l-4 border-l-red-500">
                            <p className="text-gray-500 text-sm font-medium mb-1">Lỗi nguy cấp</p>
                            <div className="flex items-end gap-2 text-red-600">
                                <p className="text-3xl font-bold">{stats.critical}</p>
                                <span className="text-xs text-gray-400 mb-1.5 font-normal">bài viết</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-amber-600 border-l-4 border-l-amber-500">
                            <p className="text-gray-500 text-sm font-medium mb-1">Cần cải thiện</p>
                            <div className="flex items-end gap-2 text-amber-600">
                                <p className="text-3xl font-bold">{stats.warning}</p>
                                <span className="text-xs text-gray-400 mb-1.5 font-normal">bài viết</span>
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
                                Có lỗi
                            </button>
                            <button
                                onClick={() => setFilterStatus("warning")}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterStatus === "warning" ? "bg-amber-50 text-amber-600 shadow-sm" : "text-gray-500 hover:text-amber-600"}`}
                            >
                                Cảnh báo
                            </button>
                        </div>
                    </div>

                    {/* List */}
                    <div className="space-y-4">
                        {filteredAudits.length === 0 ? (
                            <div className="bg-white py-20 rounded-2xl border border-gray-100 text-center">
                                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4 opacity-20" />
                                <p className="text-gray-500">Không tìm thấy bài viết nào phù hợp bộ lọc</p>
                            </div>
                        ) : (
                            filteredAudits.map(({ post, score, issues }) => (
                                <div key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:border-emerald-200 transition-all">
                                    <div
                                        className="flex items-center justify-between p-4 cursor-pointer"
                                        onClick={() => toggleExpand(post.id)}
                                    >
                                        <div className="flex items-center gap-4 flex-1 min-w-0">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base ${score >= 80 ? 'bg-emerald-50 text-emerald-600' :
                                                score >= 50 ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                                                }`}>
                                                {score}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-gray-900 truncate group-hover:text-emerald-600 transition-colors uppercase text-sm tracking-tight">{post.title}</h3>
                                                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                                    <span className="flex items-center gap-1"><FileText size={12} /> {post.slug}</span>
                                                    {issues.length > 0 && (
                                                        <span className={`flex items-center gap-1 font-bold ${issues.some(i => i.status === 'fail') ? 'text-red-500' : 'text-amber-500'}`}>
                                                            <AlertCircle size={12} /> {issues.length} vấn đề
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
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                            {expandedIds.includes(post.id) ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                        </div>
                                    </div>

                                    {expandedIds.includes(post.id) && (
                                        <div className="px-16 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                                                {issues.map((issue, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        {issue.status === "fail" ? <XCircle size={16} className="text-red-500 mt-0.5" /> : <AlertCircle size={16} className="text-amber-500 mt-0.5" />}
                                                        <div>
                                                            <p className="text-xs font-bold text-gray-900">{issue.label}</p>
                                                            <p className={`text-xs mt-0.5 ${issue.status === 'fail' ? 'text-red-500' : 'text-amber-600'}`}>{issue.message}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-6 flex justify-end">
                                                <Link
                                                    href={`/admin/posts/${post.id}`}
                                                    className="text-xs font-bold text-white bg-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-all shadow-md shadow-gray-200"
                                                >
                                                    Mở trình soạn thảo <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </>
            ) : (
                <div className="space-y-6">
                    {/* Quality Checklist View */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                                <AlertTriangle size={32} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Danh Sách Lưu Ý - Audit Nhanh</h2>
                                <p className="text-gray-500 text-sm">Các bài viết cần sự chú ý ngay lập tức</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider">
                                    <XCircle size={16} /> Lỗi Nguy Cấp ({stats.critical} bài)
                                </h3>
                                <div className="space-y-2">
                                    {audits.filter(a => a.issues.some(i => i.status === "fail")).slice(0, 10).map(a => (
                                        <Link key={a.post.id} href={`/admin/posts/${a.post.id}`} className="block p-3 hover:bg-red-50 rounded-xl border border-transparent hover:border-red-100 transition-all flex items-center justify-between group">
                                            <span className="text-sm font-medium text-gray-700 truncate mr-4">{a.post.title}</span>
                                            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-md font-bold shrink-0">FIX</span>
                                        </Link>
                                    ))}
                                    {stats.critical > 10 && <p className="text-xs text-gray-400 text-center py-2">...và {stats.critical - 10} bài khác</p>}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-wider">
                                    <AlertCircle size={16} /> Cần Tối Ưu ({stats.warning} bài)
                                </h3>
                                <div className="space-y-2">
                                    {audits.filter(a => a.issues.every(i => i.status !== "fail") && a.issues.some(i => i.status === "warning")).slice(0, 10).map(a => (
                                        <Link key={a.post.id} href={`/admin/posts/${a.post.id}`} className="block p-3 hover:bg-amber-50 rounded-xl border border-transparent hover:border-amber-100 transition-all flex items-center justify-between group">
                                            <span className="text-sm font-medium text-gray-700 truncate mr-4">{a.post.title}</span>
                                            <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-1 rounded-md font-bold shrink-0">OPT</span>
                                        </Link>
                                    ))}
                                    {stats.warning > 10 && <p className="text-xs text-gray-400 text-center py-2">...và {stats.warning - 10} bài khác</p>}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Target size={18} className="text-emerald-500" />
                                Mẹo nhanh để bài viết chuẩn SEO:
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <li className="flex gap-3 text-sm text-gray-600">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</div>
                                    <span>Nội dung nên có độ dài trên 800 từ để được Google tin tưởng.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</div>
                                    <span>Meta Description cần chứa từ khóa chính và lời kêu gọi từ 120-160 ký tự.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</div>
                                    <span>Heading (H1, H2, H3) phải theo đúng cấp bậc, tránh nhảy bước.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-gray-600">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">4</div>
                                    <span>Tất cả hình ảnh cần có thuộc tính Alt mô tả chứa từ khóa chính.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
