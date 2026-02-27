"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/core/supabase";
import { Tags as TagsIcon, Hash, FileText, Trash2, Loader2, Search, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface TagInfo {
    name: string;
    count: number;
    postIds: string[];
}

export default function TagsPage() {
    const [tags, setTags] = useState<TagInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [removing, setRemoving] = useState<string | null>(null);

    useEffect(() => { fetchTags(); }, []);

    async function fetchTags() {
        setLoading(true);
        const { data: posts } = await supabase
            .from('posts')
            .select('id, tags')
            .not('tags', 'eq', '{}');

        const tagMap = new Map<string, { count: number; postIds: string[] }>();
        (posts || []).forEach(post => {
            (post.tags || []).forEach((tag: string) => {
                const normalized = tag.trim();
                if (!normalized) return;
                const existing = tagMap.get(normalized) || { count: 0, postIds: [] };
                existing.count++;
                existing.postIds.push(post.id);
                tagMap.set(normalized, existing);
            });
        });

        const result: TagInfo[] = Array.from(tagMap.entries())
            .map(([name, info]) => ({ name, ...info }))
            .sort((a, b) => b.count - a.count);

        setTags(result);
        setLoading(false);
    }

    async function handleRemoveTag(tagName: string) {
        if (!confirm(`Xóa tag "${tagName}" khỏi tất cả bài viết?`)) return;
        setRemoving(tagName);

        const { data: posts } = await supabase
            .from('posts')
            .select('id, tags')
            .contains('tags', [tagName]);

        for (const post of (posts || [])) {
            const newTags = (post.tags || []).filter((t: string) => t !== tagName);
            await supabase.from('posts').update({ tags: newTags }).eq('id', post.id);
        }

        setRemoving(null);
        fetchTags();
    }

    async function handleRenameTag(oldName: string) {
        const newName = prompt(`Đổi tên tag "${oldName}" thành:`, oldName);
        if (!newName || newName.trim() === oldName) return;

        const { data: posts } = await supabase
            .from('posts')
            .select('id, tags')
            .contains('tags', [oldName]);

        for (const post of (posts || [])) {
            const newTags = (post.tags || []).map((t: string) => t === oldName ? newName.trim() : t);
            await supabase.from('posts').update({ tags: newTags }).eq('id', post.id);
        }

        fetchTags();
    }

    const filteredTags = search
        ? tags.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
        : tags;

    const totalUsage = tags.reduce((sum, t) => sum + t.count, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Quản lý Tags</h1>
                    <p className="text-gray-500 text-sm mt-0.5">
                        {tags.length} tags · {totalUsage} lượt sử dụng
                    </p>
                </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Tìm tag..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 bg-white"
                />
            </div>

            {/* Tags Grid */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                {loading ? (
                    <div className="p-8 flex items-center justify-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                        <span className="text-sm text-gray-500">Đang quét tags...</span>
                    </div>
                ) : filteredTags.length === 0 ? (
                    <div className="p-16 text-center">
                        <TagsIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">{search ? "Không tìm thấy tag nào" : "Chưa có tag nào"}</p>
                        <p className="text-xs text-gray-400 mt-1">Tags được tạo khi gán vào bài viết</p>
                    </div>
                ) : (
                    <div className="p-5">
                        <div className="flex flex-wrap gap-2">
                            {filteredTags.map(tag => (
                                <div
                                    key={tag.name}
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl group hover:border-gray-300 hover:shadow-sm transition-all"
                                >
                                    <Hash size={14} className="text-gray-400" />
                                    <button
                                        onClick={() => handleRenameTag(tag.name)}
                                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                                        title="Click để đổi tên"
                                    >
                                        {tag.name}
                                    </button>
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-500">
                                        {tag.count}
                                    </span>
                                    {removing === tag.name ? (
                                        <Loader2 size={12} className="animate-spin text-gray-400" />
                                    ) : (
                                        <button
                                            onClick={() => handleRemoveTag(tag.name)}
                                            className="p-0.5 rounded text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                            title="Xóa tag này"
                                        >
                                            <Trash2 size={12} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Posts by tags */}
            {filteredTags.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="p-5 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-900">Top Tags</h2>
                    </div>
                    <div className="p-5 space-y-3">
                        {filteredTags.slice(0, 10).map((tag, idx) => (
                            <div key={tag.name} className="flex items-center gap-4">
                                <span className="text-xs text-gray-400 w-6 text-right">{idx + 1}</span>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">{tag.name}</span>
                                        <span className="text-xs text-gray-400">{tag.count} bài</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500"
                                            style={{ width: `${Math.round((tag.count / (filteredTags[0]?.count || 1)) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
