"use client";

import { useMemo, useState } from "react";
import {
    Search, CheckCircle2, AlertCircle, XCircle, ChevronDown, ChevronUp, Target
} from "lucide-react";

interface SeoPanelProps {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    focusKeyword: string;
    featuredImage: string;
    onFocusKeywordChange: (value: string) => void;
}

interface SeoCheck {
    label: string;
    status: "good" | "warning" | "bad";
    message: string;
}

export default function SeoPanel({
    title, slug, excerpt, content, focusKeyword, featuredImage, onFocusKeywordChange
}: SeoPanelProps) {
    const [expanded, setExpanded] = useState(true);

    // Strip HTML/Markdown for plain text analysis
    const plainContent = useMemo(() => {
        return content
            .replace(/<[^>]*>/g, '')
            .replace(/[#*\[\]\(\)\->`!_~]/g, '')
            .trim();
    }, [content]);

    const wordCount = useMemo(() => {
        if (!plainContent) return 0;
        return plainContent.split(/\s+/).filter(Boolean).length;
    }, [plainContent]);

    // Count headings (h2, h3)
    const headingCount = useMemo(() => {
        const h2 = (content.match(/<h2|## /g) || []).length;
        const h3 = (content.match(/<h3|### /g) || []).length;
        return { h2, h3, total: h2 + h3 };
    }, [content]);

    // Count images
    const imageCount = useMemo(() => {
        const htmlImgs = (content.match(/<img/g) || []).length;
        const mdImgs = (content.match(/!\[/g) || []).length;
        return htmlImgs + mdImgs;
    }, [content]);

    // Count internal links
    const linkCount = useMemo(() => {
        const htmlLinks = (content.match(/<a /g) || []).length;
        const mdLinks = (content.match(/\]\(/g) || []).length;
        return htmlLinks + mdLinks;
    }, [content]);

    // Keyword density
    const keywordDensity = useMemo(() => {
        if (!focusKeyword || !plainContent) return 0;
        const regex = new RegExp(focusKeyword.toLowerCase(), 'gi');
        const matches = plainContent.toLowerCase().match(regex);
        const count = matches ? matches.length : 0;
        return wordCount > 0 ? parseFloat(((count / wordCount) * 100).toFixed(1)) : 0;
    }, [focusKeyword, plainContent, wordCount]);

    // Keyword in title
    const keywordInTitle = useMemo(() => {
        if (!focusKeyword) return false;
        return title.toLowerCase().includes(focusKeyword.toLowerCase());
    }, [focusKeyword, title]);

    // Keyword in excerpt
    const keywordInExcerpt = useMemo(() => {
        if (!focusKeyword) return false;
        return excerpt.toLowerCase().includes(focusKeyword.toLowerCase());
    }, [focusKeyword, excerpt]);

    // Keyword in slug
    const keywordInSlug = useMemo(() => {
        if (!focusKeyword) return false;
        const normalizedKw = focusKeyword.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d")
            .replace(/[^a-z0-9]+/g, "-");
        return slug.includes(normalizedKw);
    }, [focusKeyword, slug]);

    // SEO Checks
    const checks: SeoCheck[] = useMemo(() => {
        const result: SeoCheck[] = [];

        // Title length
        if (title.length === 0) {
            result.push({ label: "Tiêu đề", status: "bad", message: "Chưa có tiêu đề" });
        } else if (title.length < 30) {
            result.push({ label: "Tiêu đề", status: "warning", message: `Quá ngắn (${title.length}/30-60 ký tự)` });
        } else if (title.length > 60) {
            result.push({ label: "Tiêu đề", status: "warning", message: `Quá dài (${title.length}/60). Google sẽ cắt bớt` });
        } else {
            result.push({ label: "Tiêu đề", status: "good", message: `Tốt (${title.length}/60 ký tự)` });
        }

        // Meta description
        if (excerpt.length === 0) {
            result.push({ label: "Mô tả SEO", status: "bad", message: "Chưa có mô tả. Google sẽ tự lấy từ nội dung" });
        } else if (excerpt.length < 70) {
            result.push({ label: "Mô tả SEO", status: "warning", message: `Quá ngắn (${excerpt.length}/70-160 ký tự)` });
        } else if (excerpt.length > 160) {
            result.push({ label: "Mô tả SEO", status: "warning", message: `Quá dài (${excerpt.length}/160). Sẽ bị cắt` });
        } else {
            result.push({ label: "Mô tả SEO", status: "good", message: `Tốt (${excerpt.length}/160 ký tự)` });
        }

        // Content length
        if (wordCount < 300) {
            result.push({ label: "Độ dài nội dung", status: "bad", message: `Quá ngắn (${wordCount} từ). Cần ≥300 từ` });
        } else if (wordCount < 800) {
            result.push({ label: "Độ dài nội dung", status: "warning", message: `Trung bình (${wordCount} từ). Nên ≥800 từ` });
        } else {
            result.push({ label: "Độ dài nội dung", status: "good", message: `Tốt (${wordCount} từ)` });
        }

        // Headings
        if (headingCount.total === 0) {
            result.push({ label: "Heading", status: "bad", message: "Không có heading H2/H3" });
        } else if (headingCount.h2 === 0) {
            result.push({ label: "Heading", status: "warning", message: `Có ${headingCount.h3} H3 nhưng không có H2` });
        } else {
            result.push({ label: "Heading", status: "good", message: `${headingCount.h2} H2, ${headingCount.h3} H3` });
        }

        // Images
        if (imageCount === 0 && !featuredImage) {
            result.push({ label: "Hình ảnh", status: "bad", message: "Không có ảnh nào. Nên thêm ≥1 ảnh" });
        } else if (!featuredImage) {
            result.push({ label: "Hình ảnh", status: "warning", message: `${imageCount} ảnh trong bài, nhưng thiếu ảnh đại diện` });
        } else {
            result.push({ label: "Hình ảnh", status: "good", message: `Ảnh đại diện ✓${imageCount > 0 ? `, ${imageCount} ảnh trong bài` : ''}` });
        }

        // Links
        if (linkCount === 0) {
            result.push({ label: "Liên kết", status: "warning", message: "Không có link nào. Nên thêm internal link" });
        } else {
            result.push({ label: "Liên kết", status: "good", message: `${linkCount} liên kết trong bài` });
        }

        // Slug
        if (!slug) {
            result.push({ label: "URL", status: "bad", message: "Chưa có slug URL" });
        } else if (slug.length > 75) {
            result.push({ label: "URL", status: "warning", message: "Slug quá dài. Nên ≤75 ký tự" });
        } else {
            result.push({ label: "URL", status: "good", message: `/${slug}` });
        }

        // Focus keyword checks (only if keyword is set)
        if (focusKeyword) {
            if (keywordInTitle) {
                result.push({ label: "Keyword → Tiêu đề", status: "good", message: "Từ khóa có trong tiêu đề ✓" });
            } else {
                result.push({ label: "Keyword → Tiêu đề", status: "bad", message: "Từ khóa chưa có trong tiêu đề" });
            }
            if (keywordInExcerpt) {
                result.push({ label: "Keyword → Mô tả", status: "good", message: "Từ khóa có trong mô tả ✓" });
            } else {
                result.push({ label: "Keyword → Mô tả", status: "warning", message: "Nên thêm từ khóa vào mô tả" });
            }
            if (keywordInSlug) {
                result.push({ label: "Keyword → URL", status: "good", message: "Từ khóa có trong URL ✓" });
            } else {
                result.push({ label: "Keyword → URL", status: "warning", message: "Nên thêm từ khóa vào URL" });
            }
            if (keywordDensity >= 0.5 && keywordDensity <= 2.5) {
                result.push({ label: "Mật độ keyword", status: "good", message: `${keywordDensity}% (tối ưu: 0.5-2.5%)` });
            } else if (keywordDensity < 0.5) {
                result.push({ label: "Mật độ keyword", status: "warning", message: `${keywordDensity}% — quá thấp (nên 0.5-2.5%)` });
            } else {
                result.push({ label: "Mật độ keyword", status: "warning", message: `${keywordDensity}% — quá cao (nên 0.5-2.5%)` });
            }
        }

        return result;
    }, [title, excerpt, wordCount, headingCount, imageCount, featuredImage, linkCount, slug, focusKeyword, keywordInTitle, keywordInExcerpt, keywordInSlug, keywordDensity]);

    // Calculate score
    const score = useMemo(() => {
        if (checks.length === 0) return 0;
        const points = checks.reduce((sum, c) => {
            if (c.status === "good") return sum + 1;
            if (c.status === "warning") return sum + 0.5;
            return sum;
        }, 0);
        return Math.round((points / checks.length) * 100);
    }, [checks]);

    const scoreColor = score >= 80 ? "text-emerald-500" : score >= 50 ? "text-amber-500" : "text-red-500";
    const scoreRingColor = score >= 80 ? "stroke-emerald-500" : score >= 50 ? "stroke-amber-500" : "stroke-red-500";

    const StatusIcon = ({ status }: { status: string }) => {
        if (status === "good") return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />;
        if (status === "warning") return <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />;
        return <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />;
    };

    const goodCount = checks.filter(c => c.status === "good").length;
    const warnCount = checks.filter(c => c.status === "warning").length;
    const badCount = checks.filter(c => c.status === "bad").length;

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Header with Score */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="20" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                            <circle
                                cx="24" cy="24" r="20" fill="none"
                                className={scoreRingColor}
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={`${(score / 100) * 125.6} 125.6`}
                            />
                        </svg>
                        <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${scoreColor}`}>
                            {score}
                        </span>
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900">Điểm SEO</p>
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600">{goodCount} tốt</span>
                            {warnCount > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600">{warnCount} cảnh báo</span>}
                            {badCount > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-50 text-red-600">{badCount} lỗi</span>}
                        </div>
                    </div>
                </div>
                {expanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>

            {expanded && (
                <div className="border-t border-gray-100">
                    {/* Focus Keyword */}
                    <div className="px-5 py-4 border-b border-gray-100">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Target className="w-4 h-4 text-purple-500" />
                            Từ khóa chính
                        </label>
                        <input
                            type="text"
                            value={focusKeyword}
                            onChange={(e) => onFocusKeywordChange(e.target.value)}
                            placeholder="VD: đầu tư chứng khoán"
                            className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-purple-400 focus:outline-none placeholder-gray-400"
                        />
                        {focusKeyword && (
                            <p className="text-[11px] text-gray-400 mt-1.5">
                                Mật độ: <span className={keywordDensity >= 0.5 && keywordDensity <= 2.5 ? 'text-emerald-500 font-medium' : 'text-amber-500 font-medium'}>{keywordDensity}%</span>
                            </p>
                        )}
                    </div>

                    {/* Google Preview */}
                    <div className="px-5 py-4 border-b border-gray-100">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                            <Search className="w-3.5 h-3.5" />
                            Xem trước Google
                        </p>
                        <div className="rounded-lg border border-gray-200 p-4 bg-white">
                            <p className="text-xs text-emerald-700 mb-1 truncate">
                                cachdautu.net › bài-viết › {slug || 'ten-bai-viet'}
                            </p>
                            <p className="text-blue-700 text-base font-medium leading-snug mb-1 line-clamp-2 hover:underline cursor-default">
                                {title || 'Tiêu đề bài viết'}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                {excerpt || 'Mô tả ngắn sẽ hiển thị ở đây. Viết mô tả hấp dẫn để tăng CTR từ Google...'}
                            </p>
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="px-5 py-3">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Checklist SEO</p>
                        <div className="space-y-0">
                            {checks.map((check, i) => (
                                <div key={i} className="flex items-start gap-2.5 py-2 border-b border-gray-50 last:border-0">
                                    <StatusIcon status={check.status} />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium text-gray-700">{check.label}</p>
                                        <p className={`text-[11px] mt-0.5 ${check.status === 'good' ? 'text-emerald-600' :
                                            check.status === 'warning' ? 'text-amber-600' : 'text-red-600'
                                            }`}>{check.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
