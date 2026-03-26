"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, TrendingUp, Clock, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { supabase, publishedFilter } from "@/core/supabase";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input on mount
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Handle Esc key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (!query.trim()) {
                setResults([]);
                return;
            }

            setIsLoading(true);
            const { data } = await supabase
                .from("posts")
                .select("title, slug, excerpt, featured_image, categories(slug, name)")
                .or(publishedFilter())
                .ilike("title", `%${query}%`)
                .limit(5);

            setResults(data || []);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative w-full max-w-2xl bg-primary/95 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-500/10 overflow-hidden transform animate-scale-in">
                
                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-white/10">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Tìm bài viết, chứng khoán, bất động sản..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 bg-transparent text-white text-base sm:text-lg outline-none placeholder:text-text-muted"
                    />
                    {query && (
                        <button onClick={() => setQuery("")} className="p-1 text-text-muted hover:text-white transition-colors">
                            <X className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    )}
                    <div className="w-px h-6 bg-white/10 mx-2" />
                    <button onClick={onClose} className="px-2 py-1 text-xs sm:text-sm text-text-muted hover:text-white transition-colors uppercase font-medium tracking-wider">
                        Đóng
                    </button>
                </div>

                {/* Results Body */}
                <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
                    {!query.trim() ? (
                        <div className="space-y-6">
                            {/* Suggestions */}
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" /> Gợi ý tìm kiếm
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Chứng khoán", "Bất động sản", "Phân tích kỹ thuật", "Lãi kép", "RSI"].map((term) => (
                                        <button
                                            key={term}
                                            onClick={() => setQuery(term)}
                                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-text-secondary hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors"
                                        >
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : isLoading ? (
                        <div className="flex flex-col items-center justify-center py-10 gap-3">
                            <div className="w-6 h-6 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
                            <p className="text-text-muted text-sm">Đang tìm kiếm...</p>
                        </div>
                    ) : results.length > 0 ? (
                        <div className="space-y-4">
                            <h3 className="text-xs sm:text-sm font-bold text-text-muted uppercase tracking-wider mb-2">
                                Kết quả hàng đầu
                            </h3>
                            <div className="flex flex-col gap-2">
                                {results.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.categories?.slug || "kien-thuc"}/${post.slug}`}
                                        onClick={onClose}
                                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/5 transition-colors"
                                    >
                                        {post.featured_image && (
                                            <div className="relative w-full sm:w-20 h-32 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                <Image src={post.featured_image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs text-purple-400 font-medium mb-1">{post.categories?.name}</div>
                                            <h4 className="text-white font-medium text-sm sm:text-base line-clamp-1 group-hover:text-purple-300 transition-colors">{post.title}</h4>
                                            <p className="text-text-muted text-xs sm:text-sm line-clamp-1 mt-0.5">{post.excerpt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            
                            <Link 
                                href={`/blog?q=${encodeURIComponent(query)}`}
                                onClick={onClose}
                                className="block w-full py-3 mt-4 text-center rounded-xl bg-purple-500/10 text-purple-400 font-medium hover:bg-purple-500/20 transition-colors text-sm"
                            >
                                Xem tất cả kết quả cho "{query}"
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-muted">
                                <Search className="w-6 h-6" />
                            </div>
                            <p className="text-text-secondary">Không tìm thấy kết quả nào cho "{query}"</p>
                            <p className="text-text-muted text-sm">Vui lòng thử lại bằng từ khóa khác ngắn hơn.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
