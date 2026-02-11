"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase, uploadImage, Category } from "@/lib/supabase";
import {
    ArrowLeft, Save, Image, Link2, X, Upload, Clock, Trash2, Eye,
    FolderOpen, Edit3, Type, Bold, Italic, List, ListOrdered, Quote,
    Code, Code2, Minus, Hash, ChevronRight, AlignLeft
} from "lucide-react";
import Link from "next/link";
import MediaLibrary from "@/components/MediaLibrary";
import MarkdownPreview from "@/components/MarkdownPreview";

export default function EditPostPage() {
    const params = useParams();
    const id = params.id as string;
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showMediaLibrary, setShowMediaLibrary] = useState(false);
    const [mediaLibraryTarget, setMediaLibraryTarget] = useState<"featured" | "content">("featured");
    const [editorTab, setEditorTab] = useState<"write" | "html" | "preview">("write");
    const [contentMode, setContentMode] = useState<"markdown" | "html">("markdown");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [form, setForm] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category_id: "",
        tags: "",
        is_published: false,
        reading_time: "5 phút",
        featured_image: "",
        scheduled_at: ""
    });

    // Word count & reading time
    const wordCount = useMemo(() => {
        const text = form.content.replace(/[#*\[\]\(\)\-\>`!_~]/g, '').trim();
        if (!text) return 0;
        return text.split(/\s+/).filter(Boolean).length;
    }, [form.content]);

    const charCount = useMemo(() => form.content.length, [form.content]);

    const calculatedReadingTime = useMemo(() => {
        const minutes = Math.max(1, Math.ceil(wordCount / 200));
        return `${minutes} phút`;
    }, [wordCount]);

    useEffect(() => {
        setForm(prev => ({ ...prev, reading_time: calculatedReadingTime }));
    }, [calculatedReadingTime]);

    useEffect(() => {
        async function fetchData() {
            const [{ data: post }, { data: cats }] = await Promise.all([
                supabase.from('posts').select('*').eq('id', id).single(),
                supabase.from('categories').select('*')
            ]);

            if (post) {
                setForm({
                    title: post.title || "",
                    slug: post.slug || "",
                    excerpt: post.excerpt || "",
                    content: post.content || "",
                    category_id: post.category_id || "",
                    tags: (post.tags || []).join(', '),
                    is_published: post.is_published || false,
                    reading_time: post.reading_time || "5 phút",
                    featured_image: post.featured_image || "",
                    scheduled_at: post.scheduled_at ? new Date(post.scheduled_at).toISOString().slice(0, 16) : ""
                });
                if (post.scheduled_at) setShowSchedule(true);
            }
            setCategories(cats || []);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    // Formatting helpers
    function insertFormatting(prefix: string, suffix: string = prefix) {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = form.content.substring(start, end);
        const before = form.content.substring(0, start);
        const after = form.content.substring(end);
        const newContent = `${before}${prefix}${selected || 'text'}${suffix}${after}`;
        setForm(prev => ({ ...prev, content: newContent }));
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selected || 'text').length);
        }, 0);
    }

    function insertAtCursor(text: string) {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const before = form.content.substring(0, start);
        const after = form.content.substring(start);
        setForm(prev => ({ ...prev, content: `${before}${text}${after}` }));
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + text.length, start + text.length);
        }, 0);
    }

    const toolbarButtons = [
        { icon: Bold, label: "In đậm", action: () => insertFormatting("**") },
        { icon: Italic, label: "In nghiêng", action: () => insertFormatting("*") },
        { icon: Hash, label: "Heading 2", action: () => insertAtCursor("\n## ") },
        { icon: Type, label: "Heading 3", action: () => insertAtCursor("\n### ") },
        null,
        { icon: List, label: "Danh sách", action: () => insertAtCursor("\n- ") },
        { icon: ListOrdered, label: "Số thứ tự", action: () => insertAtCursor("\n1. ") },
        { icon: Quote, label: "Trích dẫn", action: () => insertAtCursor("\n> ") },
        { icon: Code, label: "Code", action: () => insertFormatting("`") },
        { icon: Minus, label: "Đường kẻ", action: () => insertAtCursor("\n---\n") },
        null,
        { icon: Image, label: "Chèn ảnh", action: () => insertImage() },
        { icon: Link2, label: "Chèn link", action: () => insertLink() },
    ];

    async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const url = await uploadImage(file);
        setUploading(false);
        if (url) setForm({ ...form, featured_image: url });
        else alert("Lỗi upload ảnh");
    }

    function insertLink() {
        const url = prompt("Nhập URL:");
        const text = prompt("Nhập text:");
        if (url && text) insertAtCursor(`[${text}](${url})`);
    }

    function insertImage() {
        setMediaLibraryTarget("content");
        setShowMediaLibrary(true);
    }

    function handleMediaSelect(url: string) {
        if (mediaLibraryTarget === "featured") {
            setForm(prev => ({ ...prev, featured_image: url }));
        } else {
            const alt = prompt("Mô tả ảnh (cho SEO):") || 'image';
            insertAtCursor(`![${alt}](${url})\n`);
        }
    }

    async function handleSubmit() {
        if (!form.title || !form.slug) { alert("Nhập tiêu đề"); return; }
        setSaving(true);
        const { error } = await supabase.from('posts').update({
            title: form.title,
            slug: form.slug,
            excerpt: form.excerpt,
            content: form.content,
            category_id: form.category_id || null,
            tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
            is_published: form.is_published,
            reading_time: form.reading_time,
            featured_image: form.featured_image || null,
            scheduled_at: form.scheduled_at ? new Date(form.scheduled_at).toISOString() : null,
            updated_at: new Date().toISOString()
        }).eq('id', id);
        setSaving(false);
        if (error) alert("Lỗi: " + error.message);
        else router.push('/admin/posts');
    }

    async function handleDelete() {
        if (!confirm('Xóa bài viết này?')) return;
        await supabase.from('posts').delete().eq('id', id);
        router.push('/admin/posts');
    }

    if (loading) return (
        <div className="pt-12 lg:pt-0 flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-emerald-500 rounded-full animate-spin mb-3" />
            <p className="text-gray-500 text-sm">Đang tải bài viết...</p>
        </div>
    );

    return (
        <div className="pt-12 lg:pt-0 max-w-5xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link href="/admin" className="hover:text-gray-700 transition-colors">Admin</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/admin/posts" className="hover:text-gray-700 transition-colors">Bài viết</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-gray-900 font-medium truncate max-w-[200px]">{form.title || "Chỉnh sửa"}</span>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/posts" className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Chỉnh sửa</h1>
                        <p className="text-gray-500 text-sm truncate max-w-xs">{form.title}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => window.open(`/bai-viet/${form.slug}`, '_blank')} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="Xem">
                        <Eye className="w-5 h-5" />
                    </button>
                    <button onClick={handleDelete} className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-500 transition-colors">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tiêu đề</label>
                        <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />

                        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">URL</label>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-sm">/bai-viet/</span>
                            <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mô tả ngắn (SEO)</label>
                        <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-emerald-500 focus:outline-none resize-none" />
                        <p className="text-xs text-gray-400 mt-1">{form.excerpt.length}/160 ký tự</p>
                    </div>

                    {/* Content Editor with Preview */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="border-b border-gray-200">
                            <div className="flex items-center justify-between px-4 py-2">
                                <div className="flex gap-1">
                                    <button
                                        onClick={() => setEditorTab("write")}
                                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${editorTab === "write"
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Edit3 className="w-3.5 h-3.5" />
                                        Viết
                                    </button>
                                    <button
                                        onClick={() => setEditorTab("html")}
                                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${editorTab === "html"
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Code2 className="w-3.5 h-3.5" />
                                        HTML
                                    </button>
                                    <button
                                        onClick={() => setEditorTab("preview")}
                                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${editorTab === "preview"
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <Eye className="w-3.5 h-3.5" />
                                        Xem trước
                                    </button>
                                </div>

                                <div className="flex items-center gap-3 text-xs text-gray-400">
                                    <select
                                        value={contentMode}
                                        onChange={(e) => setContentMode(e.target.value as typeof contentMode)}
                                        className="px-2 py-1 rounded-md bg-gray-100 border-0 text-xs text-gray-600 font-medium focus:outline-none cursor-pointer"
                                    >
                                        <option value="html">HTML</option>
                                        <option value="markdown">Markdown</option>
                                    </select>
                                    <span className="flex items-center gap-1">
                                        <AlignLeft className="w-3 h-3" />
                                        {wordCount} từ
                                    </span>
                                    <span>{charCount} ký tự</span>
                                    <span className="flex items-center gap-1 text-emerald-500">
                                        <Clock className="w-3 h-3" />
                                        {calculatedReadingTime} đọc
                                    </span>
                                </div>
                            </div>

                            {editorTab === "write" && contentMode === "markdown" && (
                                <div className="flex items-center gap-0.5 px-4 py-1.5 bg-gray-50 border-t border-gray-100 overflow-x-auto">
                                    {toolbarButtons.map((btn, idx) =>
                                        btn === null ? (
                                            <div key={idx} className="w-px h-5 bg-gray-200 mx-1" />
                                        ) : (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={btn.action}
                                                className="p-2 rounded-md hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
                                                title={btn.label}
                                            >
                                                <btn.icon className="w-4 h-4" />
                                            </button>
                                        )
                                    )}
                                </div>
                            )}

                            {editorTab === "write" && contentMode === "html" && (
                                <div className="px-4 py-2 bg-amber-50 border-t border-amber-100 text-xs text-amber-700 flex items-center gap-2">
                                    <Code2 className="w-3.5 h-3.5" />
                                    Dán HTML trực tiếp (không cần &lt;head&gt;). Chuyển sang tab "Xem trước" để xem kết quả.
                                </div>
                            )}
                        </div>

                        {editorTab === "write" ? (
                            <textarea
                                ref={textareaRef}
                                value={form.content}
                                onChange={(e) => setForm({ ...form, content: e.target.value })}
                                rows={20}
                                placeholder={contentMode === "html"
                                    ? "Dán nội dung HTML vào đây..."
                                    : "Viết nội dung bài viết..."}
                                className="w-full px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none resize-none font-mono text-sm leading-relaxed"
                            />
                        ) : editorTab === "html" ? (
                            <div className="relative">
                                <textarea
                                    value={form.content}
                                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                                    rows={20}
                                    className="w-full px-6 py-4 text-gray-900 focus:outline-none resize-none font-mono text-sm leading-relaxed bg-gray-50"
                                    placeholder="Dán hoặc chỉnh sửa HTML ở đây..."
                                />
                                <div className="absolute top-2 right-3 px-2 py-1 rounded bg-gray-200 text-[10px] font-mono text-gray-500 uppercase">HTML</div>
                            </div>
                        ) : (
                            <div className="px-6 py-4 min-h-[480px] max-h-[600px] overflow-y-auto">
                                <MarkdownPreview content={form.content} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Ảnh đại diện</label>
                        {form.featured_image ? (
                            <div className="relative">
                                <img src={form.featured_image} alt="Featured" className="w-full aspect-video object-cover rounded-lg" />
                                <button onClick={() => setForm({ ...form, featured_image: "" })} className="absolute top-2 right-2 p-1.5 rounded-full bg-white shadow text-gray-500 hover:text-red-500 transition-colors">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <label className="flex flex-col items-center justify-center w-full aspect-video rounded-lg border-2 border-dashed border-gray-200 hover:border-emerald-400 cursor-pointer bg-gray-50 transition-colors">
                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                    <span className="text-sm text-gray-500">{uploading ? 'Đang tải...' : 'Upload ảnh mới'}</span>
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
                                </label>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setMediaLibraryTarget("featured");
                                        setShowMediaLibrary(true);
                                    }}
                                    className="w-full py-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                                >
                                    <FolderOpen className="w-4 h-4" />
                                    Chọn từ thư viện
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Chuyên mục</label>
                        <select value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none">
                            <option value="">Chọn chuyên mục</option>
                            {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                        </select>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Tags</label>
                        <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none" />
                        {form.tags && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {form.tags.split(',').filter(t => t.trim()).map((tag, i) => (
                                    <span key={i} className="px-2 py-0.5 bg-gray-100 rounded-md text-xs text-gray-600">{tag.trim()}</span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Reading Time (auto) */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian đọc</label>
                        <p className="text-xs text-gray-400 mb-2">Tự động tính từ nội dung</p>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">{calculatedReadingTime}</span>
                            <span className="text-xs text-emerald-500 ml-auto">{wordCount} từ</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-purple-500" />Lên lịch
                            </label>
                            <button onClick={() => setShowSchedule(!showSchedule)} className={`w-10 h-6 rounded-full transition-colors ${showSchedule ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                                <span className={`block w-4 h-4 rounded-full bg-white shadow transition-transform ${showSchedule ? 'translate-x-5' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        {showSchedule && <input type="datetime-local" value={form.scheduled_at} onChange={(e) => setForm({ ...form, scheduled_at: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none" />}
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" checked={form.is_published} onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
                                className="w-5 h-5 rounded accent-emerald-500" />
                            <div>
                                <span className="text-gray-700 text-sm font-medium">Đã xuất bản</span>
                                <p className="text-xs text-gray-400 mt-0.5">{form.is_published ? 'Hiển thị trên website' : 'Ẩn, chỉ admin thấy'}</p>
                            </div>
                        </label>
                    </div>

                    <button onClick={handleSubmit} disabled={saving}
                        className="w-full py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <Save className="w-4 h-4" />{saving ? 'Đang lưu...' : 'Lưu thay đổi'}
                    </button>
                </div>
            </div>
            <MediaLibrary
                isOpen={showMediaLibrary}
                onClose={() => setShowMediaLibrary(false)}
                onSelect={handleMediaSelect}
            />
        </div>
    );
}
