"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase, uploadImage, Category } from "@/lib/supabase";
import {
    ArrowLeft, Save, Send, Image, Link2, Calendar, X, Upload,
    Clock, FolderOpen, Eye, Edit3, Type, Bold, Italic, List, Code2,
    ListOrdered, Quote, Code, Minus, Hash, ChevronRight, FileText,
    AlignLeft
} from "lucide-react";
import Link from "next/link";
import MediaLibrary from "@/components/MediaLibrary";
import MarkdownPreview from "@/components/MarkdownPreview";

export default function NewPostPage() {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showMediaLibrary, setShowMediaLibrary] = useState(false);
    const [mediaLibraryTarget, setMediaLibraryTarget] = useState<"featured" | "content">("featured");
    const [editorTab, setEditorTab] = useState<"write" | "html" | "preview">("write");
    const [contentMode, setContentMode] = useState<"markdown" | "html">("markdown");
    const [autoSaveStatus, setAutoSaveStatus] = useState<"" | "saving" | "saved">("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [form, setForm] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category_id: "",
        tags: "",
        reading_time: "5 phút",
        featured_image: "",
        scheduled_at: ""
    });

    // Word count & reading time calculation
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

    // Auto-update reading time when content changes
    useEffect(() => {
        setForm(prev => ({ ...prev, reading_time: calculatedReadingTime }));
    }, [calculatedReadingTime]);

    // Auto-save draft every 30 seconds
    const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (form.title || form.content) {
            if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
            autoSaveTimerRef.current = setTimeout(() => {
                try {
                    localStorage.setItem('draft_new_post', JSON.stringify(form));
                    setAutoSaveStatus("saved");
                    setTimeout(() => setAutoSaveStatus(""), 3000);
                } catch { }
            }, 30000);
        }
        return () => {
            if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
        };
    }, [form]);

    // Restore draft on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem('draft_new_post');
            if (saved) {
                const data = JSON.parse(saved);
                if (data.title || data.content) {
                    if (confirm('Bạn có bản nháp chưa lưu. Khôi phục?')) {
                        setForm(data);
                    } else {
                        localStorage.removeItem('draft_new_post');
                    }
                }
            }
        } catch { }
    }, []);

    useEffect(() => {
        supabase.from('categories').select('*').then(({ data }) => {
            setCategories(data || []);
        });
    }, []);

    function generateSlug(title: string) {
        return title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

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
        null, // separator
        { icon: List, label: "Danh sách", action: () => insertAtCursor("\n- ") },
        { icon: ListOrdered, label: "Số thứ tự", action: () => insertAtCursor("\n1. ") },
        { icon: Quote, label: "Trích dẫn", action: () => insertAtCursor("\n> ") },
        { icon: Code, label: "Code", action: () => insertFormatting("`") },
        { icon: Minus, label: "Đường kẻ", action: () => insertAtCursor("\n---\n") },
        null, // separator
        { icon: Image, label: "Chèn ảnh", action: () => insertImage() },
        { icon: Link2, label: "Chèn link", action: () => insertLink() },
    ];

    async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const url = await uploadImage(file);
        setUploading(false);

        if (url) {
            setForm({ ...form, featured_image: url });
        } else {
            alert("Lỗi upload ảnh. Hãy đảm bảo đã tạo bucket 'images' trong Supabase Storage.");
        }
    }

    function insertLink() {
        const url = prompt("Nhập URL:");
        const text = prompt("Nhập text hiển thị:");
        if (url && text) {
            insertAtCursor(`[${text}](${url})`);
        }
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

    async function handleSubmit(publish: boolean) {
        if (!form.title || !form.slug) {
            alert("Vui lòng nhập tiêu đề");
            return;
        }

        setSaving(true);
        const postData = {
            title: form.title,
            slug: form.slug,
            excerpt: form.excerpt,
            content: form.content,
            category_id: form.category_id || null,
            tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
            reading_time: form.reading_time,
            featured_image: form.featured_image || null,
            scheduled_at: form.scheduled_at ? new Date(form.scheduled_at).toISOString() : null,
            is_published: publish && !form.scheduled_at,
        };

        const { error } = await supabase.from('posts').insert(postData);
        setSaving(false);

        if (error) {
            alert("Lỗi: " + error.message);
        } else {
            localStorage.removeItem('draft_new_post');
            router.push('/admin/posts');
        }
    }

    return (
        <div className="pt-12 lg:pt-0 max-w-5xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link href="/admin" className="hover:text-gray-700 transition-colors">Admin</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/admin/posts" className="hover:text-gray-700 transition-colors">Bài viết</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-gray-900 font-medium">Tạo mới</span>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/posts"
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Bài viết mới</h1>
                        <p className="text-gray-500 text-sm mt-1">Tạo nội dung mới</p>
                    </div>
                </div>

                {/* Auto save indicator */}
                {autoSaveStatus && (
                    <span className="text-xs text-gray-400 flex items-center gap-1.5">
                        {autoSaveStatus === "saving" && <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
                        {autoSaveStatus === "saved" && <div className="w-2 h-2 rounded-full bg-emerald-400" />}
                        {autoSaveStatus === "saving" ? "Đang lưu..." : "Đã lưu nháp"}
                    </span>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Title */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tiêu đề *</label>
                        <input
                            type="text"
                            value={form.title}
                            onChange={(e) => setForm({
                                ...form,
                                title: e.target.value,
                                slug: generateSlug(e.target.value)
                            })}
                            placeholder="Nhập tiêu đề bài viết"
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-lg placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none"
                        />

                        <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">URL</label>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-sm">/blog/</span>
                            <input
                                type="text"
                                value={form.slug}
                                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                                className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mô tả ngắn (SEO)</label>
                        <textarea
                            value={form.excerpt}
                            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                            placeholder="Mô tả ngắn sẽ hiển thị trên Google..."
                            rows={2}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none resize-none"
                        />
                        <p className="text-xs text-gray-400 mt-1">{form.excerpt.length}/160 ký tự</p>
                    </div>

                    {/* Content Editor */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        {/* Editor Header & Toolbar */}
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

                                {/* Word count & content mode */}
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

                            {/* Formatting Toolbar - only in write mode */}
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

                            {/* HTML mode hint */}
                            {editorTab === "write" && contentMode === "html" && (
                                <div className="px-4 py-2 bg-amber-50 border-t border-amber-100 text-xs text-amber-700 flex items-center gap-2">
                                    <Code2 className="w-3.5 h-3.5" />
                                    Dán HTML trực tiếp (không cần &lt;head&gt;). Chuyển sang tab "Xem trước" để xem kết quả.
                                </div>
                            )}
                        </div>

                        {/* Editor Content */}
                        {editorTab === "write" ? (
                            <textarea
                                ref={textareaRef}
                                value={form.content}
                                onChange={(e) => setForm({ ...form, content: e.target.value })}
                                placeholder={contentMode === "html"
                                    ? `Dán nội dung HTML vào đây...

<h2>Tiêu đề</h2>
<p>Nội dung bài viết...</p>
<ul>
  <li>Mục 1</li>
  <li>Mục 2</li>
</ul>
<img src="url" alt="mô tả" />`
                                    : `Viết nội dung bài viết...

## Heading 2
### Heading 3

**Bold** và *italic*

- Bullet point
1. Numbered list

[Link](https://...)
![Image](https://...)`}
                                rows={20}
                                className={`w-full px-6 py-4 text-gray-900 placeholder-gray-400 focus:outline-none resize-none text-sm leading-relaxed ${contentMode === "html" ? "font-mono" : "font-mono"}`}
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
                    {/* Featured Image */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Ảnh đại diện</label>
                        {form.featured_image ? (
                            <div className="relative">
                                <img
                                    src={form.featured_image}
                                    alt="Featured"
                                    className="w-full aspect-video object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => setForm({ ...form, featured_image: "" })}
                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white shadow text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <label className="flex flex-col items-center justify-center w-full aspect-video rounded-lg border-2 border-dashed border-gray-200 hover:border-emerald-400 cursor-pointer transition-colors bg-gray-50">
                                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                                    <span className="text-sm text-gray-500">
                                        {uploading ? 'Đang tải...' : 'Upload ảnh mới'}
                                    </span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        disabled={uploading}
                                    />
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

                    {/* Category */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Chuyên mục</label>
                        <select
                            value={form.category_id}
                            onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none"
                        >
                            <option value="">Chọn chuyên mục</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Tags */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Tags</label>
                        <input
                            type="text"
                            value={form.tags}
                            onChange={(e) => setForm({ ...form, tags: e.target.value })}
                            placeholder="crypto, bitcoin, ..."
                            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none placeholder-gray-400"
                        />
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
                        <p className="text-sm text-gray-500 mb-2">Tự động tính dựa trên nội dung</p>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">{calculatedReadingTime}</span>
                            <span className="text-xs text-emerald-500 ml-auto">{wordCount} từ</span>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-purple-500" />
                                Lên lịch
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowSchedule(!showSchedule)}
                                className={`w-10 h-6 rounded-full transition-colors ${showSchedule ? 'bg-emerald-500' : 'bg-gray-200'}`}
                            >
                                <span className={`block w-4 h-4 rounded-full bg-white shadow transition-transform ${showSchedule ? 'translate-x-5' : 'translate-x-1'}`} />
                            </button>
                        </div>
                        {showSchedule && (
                            <input
                                type="datetime-local"
                                value={form.scheduled_at}
                                onChange={(e) => setForm({ ...form, scheduled_at: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm focus:border-emerald-500 focus:outline-none"
                            />
                        )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                        <button
                            onClick={() => handleSubmit(false)}
                            disabled={saving}
                            className="w-full py-3 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <Save className="w-4 h-4" />
                            Lưu nháp
                        </button>
                        <button
                            onClick={() => handleSubmit(true)}
                            disabled={saving}
                            className="w-full py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-sm"
                        >
                            {form.scheduled_at ? (
                                <>
                                    <Calendar className="w-4 h-4" />
                                    Lên lịch
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Xuất bản ngay
                                </>
                            )}
                        </button>
                    </div>
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
