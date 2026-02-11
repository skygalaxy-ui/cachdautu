"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase, uploadImage } from "@/lib/supabase";
import {
    Upload, Search, Trash2, Image as ImageIcon, Check, Loader2,
    Grid, List, HardDrive, Copy, X, Filter, Download, Calendar
} from "lucide-react";

interface StorageFile {
    name: string;
    url: string;
    created_at: string;
    size: number;
}

export default function MediaPage() {
    const [images, setImages] = useState<StorageFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [deleting, setDeleting] = useState(false);
    const [sortBy, setSortBy] = useState<"date" | "name" | "size">("date");
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [dragOver, setDragOver] = useState(false);

    const fetchImages = useCallback(async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.storage
                .from('images')
                .list('posts', {
                    limit: 500,
                    sortBy: { column: 'created_at', order: 'desc' }
                });

            if (!error && data) {
                const filesWithUrls: StorageFile[] = data
                    .filter(file => file.name && !file.name.startsWith('.'))
                    .map(file => {
                        const { data: { publicUrl } } = supabase.storage
                            .from('images')
                            .getPublicUrl(`posts/${file.name}`);
                        return {
                            name: file.name,
                            url: publicUrl,
                            created_at: file.created_at || '',
                            size: (file.metadata as any)?.size || 0
                        };
                    });
                setImages(filesWithUrls);
            }
        } catch (err) {
            console.error('Fetch images error:', err);
        }
        setLoading(false);
    }, []);

    useEffect(() => { fetchImages(); }, [fetchImages]);

    async function handleUpload(files: FileList | null) {
        if (!files || files.length === 0) return;
        setUploading(true);
        setUploadProgress(0);

        const total = files.length;
        let completed = 0;

        for (const file of Array.from(files)) {
            await uploadImage(file);
            completed++;
            setUploadProgress(Math.round((completed / total) * 100));
        }

        await fetchImages();
        setUploading(false);
        setUploadProgress(0);
    }

    async function handleBulkDelete() {
        if (!confirm(`Xóa ${selectedImages.length} ảnh đã chọn?`)) return;
        setDeleting(true);

        const paths = selectedImages.map(name => `posts/${name}`);
        await supabase.storage.from('images').remove(paths);

        setSelectedImages([]);
        await fetchImages();
        setDeleting(false);
    }

    async function handleDeleteSingle(name: string) {
        if (!confirm('Xóa ảnh này?')) return;
        await supabase.storage.from('images').remove([`posts/${name}`]);
        setImages(prev => prev.filter(img => img.name !== name));
        setSelectedImages(prev => prev.filter(n => n !== name));
    }

    function copyUrl(url: string) {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => setCopiedUrl(null), 2000);
    }

    function toggleSelect(name: string) {
        setSelectedImages(prev =>
            prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
        );
    }

    function toggleSelectAll() {
        if (selectedImages.length === filteredImages.length) {
            setSelectedImages([]);
        } else {
            setSelectedImages(filteredImages.map(img => img.name));
        }
    }

    function formatFileSize(bytes: number): string {
        if (!bytes) return '—';
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    function formatDate(dateStr: string): string {
        if (!dateStr) return '—';
        return new Date(dateStr).toLocaleDateString('vi-VN', {
            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
    }

    const totalSize = images.reduce((sum, img) => sum + (img.size || 0), 0);

    const filteredImages = images
        .filter(img => img.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "size") return (b.size || 0) - (a.size || 0);
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setDragOver(false);
        handleUpload(e.dataTransfer.files);
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Thư viện ảnh</h1>
                    <p className="text-gray-500 text-sm mt-0.5">Quản lý tất cả hình ảnh đã tải lên</p>
                </div>
                <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-gray-900/20 cursor-pointer">
                    <Upload className="w-4 h-4" />
                    Upload ảnh
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleUpload(e.target.files)}
                        className="hidden"
                        disabled={uploading}
                    />
                </label>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                            <ImageIcon className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{images.length}</p>
                            <p className="text-sm text-gray-500">Tổng ảnh</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                            <HardDrive className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{formatFileSize(totalSize)}</p>
                            <p className="text-sm text-gray-500">Dung lượng</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">
                                {images.length > 0 ? formatDate(images[0]?.created_at).split(',')[0] : '—'}
                            </p>
                            <p className="text-sm text-gray-500">Upload gần nhất</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upload Progress */}
            {uploading && (
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                        <Loader2 className="w-5 h-5 text-emerald-500 animate-spin" />
                        <span className="text-sm font-medium text-gray-700">Đang tải lên... {uploadProgress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Toolbar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Tìm ảnh theo tên..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-white transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                            className="px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-gray-300"
                        >
                            <option value="date">Mới nhất</option>
                            <option value="name">Tên A-Z</option>
                            <option value="size">Dung lượng</option>
                        </select>
                        <div className="flex bg-gray-100 rounded-lg p-0.5">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-2.5 rounded-md transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
                            >
                                <Grid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-2.5 rounded-md transition-all ${viewMode === "list" ? "bg-white shadow-sm text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
                            >
                                <List className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Drag & Drop Zone + Content */}
            <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`relative transition-all ${dragOver ? 'ring-2 ring-emerald-400 ring-offset-4 rounded-2xl' : ''}`}
            >
                {dragOver && (
                    <div className="absolute inset-0 bg-emerald-50/80 backdrop-blur-sm rounded-2xl z-10 flex items-center justify-center">
                        <div className="text-center">
                            <Upload className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                            <p className="text-lg font-medium text-emerald-700">Thả ảnh vào đây</p>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Select All Header */}
                    {filteredImages.length > 0 && (
                        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <button
                                    onClick={toggleSelectAll}
                                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedImages.length === filteredImages.length && filteredImages.length > 0
                                            ? 'bg-gray-900 border-gray-900' : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                >
                                    {selectedImages.length === filteredImages.length && filteredImages.length > 0 && (
                                        <Check className="w-3 h-3 text-white" />
                                    )}
                                </button>
                                <span className="text-sm text-gray-600">
                                    {selectedImages.length > 0 ? `${selectedImages.length} đã chọn` : `${filteredImages.length} ảnh`}
                                </span>
                            </label>
                            {selectedImages.length > 0 && (
                                <button
                                    onClick={handleBulkDelete}
                                    disabled={deleting}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors"
                                >
                                    {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                    Xóa ({selectedImages.length})
                                </button>
                            )}
                        </div>
                    )}

                    {loading ? (
                        <div className="p-12 text-center">
                            <Loader2 className="w-8 h-8 animate-spin text-gray-400 mx-auto mb-3" />
                            <p className="text-sm text-gray-500">Đang tải thư viện...</p>
                        </div>
                    ) : filteredImages.length === 0 ? (
                        <div className="p-16 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <ImageIcon className="w-10 h-10 text-gray-400" />
                            </div>
                            <p className="text-gray-900 font-medium mb-1">
                                {search ? "Không tìm thấy ảnh" : "Chưa có ảnh nào"}
                            </p>
                            <p className="text-gray-500 text-sm mb-6">
                                {search ? "Thử từ khóa khác" : "Upload ảnh đầu tiên để bắt đầu"}
                            </p>
                        </div>
                    ) : viewMode === "grid" ? (
                        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {filteredImages.map((img) => (
                                <div
                                    key={img.name}
                                    className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all hover:shadow-lg ${selectedImages.includes(img.name)
                                            ? "border-emerald-500 ring-2 ring-emerald-500/20"
                                            : "border-transparent hover:border-gray-200"
                                        }`}
                                >
                                    <img
                                        src={img.url}
                                        alt={img.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onClick={() => toggleSelect(img.name)}
                                    />

                                    {/* Select checkbox */}
                                    <button
                                        onClick={() => toggleSelect(img.name)}
                                        className={`absolute top-2 left-2 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${selectedImages.includes(img.name)
                                                ? "bg-emerald-500 border-emerald-500"
                                                : "bg-white/80 border-gray-300 opacity-0 group-hover:opacity-100"
                                            }`}
                                    >
                                        {selectedImages.includes(img.name) && <Check className="w-3.5 h-3.5 text-white" />}
                                    </button>

                                    {/* Actions */}
                                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); copyUrl(img.url); }}
                                            className="p-1.5 rounded-md bg-white/90 text-gray-600 hover:text-blue-600 shadow transition-colors"
                                            title="Copy URL"
                                        >
                                            {copiedUrl === img.url ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDeleteSingle(img.name); }}
                                            className="p-1.5 rounded-md bg-white/90 text-gray-500 hover:text-red-500 shadow transition-colors"
                                            title="Xóa"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>

                                    {/* Info overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-white text-xs truncate font-medium">{img.name}</p>
                                        <p className="text-white/70 text-[10px]">{formatFileSize(img.size)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {filteredImages.map((img) => (
                                <div
                                    key={img.name}
                                    className={`flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors ${selectedImages.includes(img.name) ? 'bg-blue-50/50' : ''
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleSelect(img.name)}
                                        className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${selectedImages.includes(img.name)
                                                ? 'bg-gray-900 border-gray-900' : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        {selectedImages.includes(img.name) && <Check className="w-3 h-3 text-white" />}
                                    </button>
                                    <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                        <img src={img.url} alt={img.name} className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-800 truncate">{img.name}</p>
                                        <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                                            <span>{formatFileSize(img.size)}</span>
                                            <span>{formatDate(img.created_at)}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => copyUrl(img.url)}
                                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition-colors"
                                            title="Copy URL"
                                        >
                                            {copiedUrl === img.url ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                        <button
                                            onClick={() => handleDeleteSingle(img.name)}
                                            className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                                            title="Xóa"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
