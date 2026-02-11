"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase, uploadImage } from "@/lib/supabase";
import { X, Upload, Search, Image as ImageIcon, Check, Loader2, Trash2, Grid, List } from "lucide-react";

interface StorageFile {
    name: string;
    url: string;
    created_at: string;
    size: number;
}

interface MediaLibraryProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (url: string) => void;
}

export default function MediaLibrary({ isOpen, onClose, onSelect }: MediaLibraryProps) {
    const [images, setImages] = useState<StorageFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<"library" | "upload">("library");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [deleting, setDeleting] = useState<string | null>(null);

    const fetchImages = useCallback(async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.storage
                .from('images')
                .list('posts', {
                    limit: 200,
                    sortBy: { column: 'created_at', order: 'desc' }
                });

            if (error) {
                console.error('Error listing images:', error);
                setImages([]);
                return;
            }

            if (data) {
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

    useEffect(() => {
        if (isOpen) {
            fetchImages();
            setSelectedUrl(null);
            setSearch("");
        }
    }, [isOpen, fetchImages]);

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(true);
        const uploadPromises = Array.from(files).map(async (file) => {
            const url = await uploadImage(file);
            return url;
        });

        const results = await Promise.all(uploadPromises);
        const successCount = results.filter(Boolean).length;

        if (successCount > 0) {
            await fetchImages();
            setActiveTab("library");
        }

        if (successCount < files.length) {
            alert(`${files.length - successCount} ảnh upload thất bại`);
        }

        setUploading(false);
        // Reset input
        e.target.value = '';
    }

    async function handleDelete(fileName: string) {
        if (!confirm('Xóa ảnh này khỏi thư viện?')) return;

        setDeleting(fileName);
        const { error } = await supabase.storage
            .from('images')
            .remove([`posts/${fileName}`]);

        if (!error) {
            setImages(prev => prev.filter(img => img.name !== fileName));
            if (selectedUrl && images.find(img => img.name === fileName)?.url === selectedUrl) {
                setSelectedUrl(null);
            }
        } else {
            alert('Lỗi xóa ảnh: ' + error.message);
        }
        setDeleting(null);
    }

    function handleSelectConfirm() {
        if (selectedUrl) {
            onSelect(selectedUrl);
            onClose();
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
        const d = new Date(dateStr);
        return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    const filteredImages = images.filter(img =>
        img.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                            <ImageIcon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">Thư viện ảnh</h2>
                            <p className="text-xs text-gray-500">{images.length} ảnh đã tải lên</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tabs + Search */}
                <div className="px-6 py-3 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab("library")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                activeTab === "library"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <span className="flex items-center gap-2">
                                <ImageIcon className="w-4 h-4" />
                                Thư viện
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("upload")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                activeTab === "upload"
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            <span className="flex items-center gap-2">
                                <Upload className="w-4 h-4" />
                                Upload mới
                            </span>
                        </button>
                    </div>

                    {activeTab === "library" && (
                        <div className="flex items-center gap-2 flex-1 w-full sm:w-auto">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Tìm ảnh..."
                                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-700 focus:border-emerald-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex bg-gray-100 rounded-lg p-0.5">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white shadow-sm text-gray-900" : "text-gray-400"}`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-md ${viewMode === "list" ? "bg-white shadow-sm text-gray-900" : "text-gray-400"}`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {activeTab === "library" ? (
                        loading ? (
                            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                                <Loader2 className="w-8 h-8 animate-spin mb-3" />
                                <p className="text-sm">Đang tải thư viện...</p>
                            </div>
                        ) : filteredImages.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                                <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                                <p className="text-sm font-medium">
                                    {search ? "Không tìm thấy ảnh" : "Chưa có ảnh nào"}
                                </p>
                                <p className="text-xs mt-1">
                                    {search ? "Thử từ khóa khác" : "Upload ảnh đầu tiên"}
                                </p>
                            </div>
                        ) : viewMode === "grid" ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {filteredImages.map((img) => (
                                    <div
                                        key={img.name}
                                        onClick={() => setSelectedUrl(selectedUrl === img.url ? null : img.url)}
                                        className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all hover:shadow-lg ${
                                            selectedUrl === img.url
                                                ? "border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg"
                                                : "border-transparent hover:border-gray-200"
                                        }`}
                                    >
                                        <img
                                            src={img.url}
                                            alt={img.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />

                                        {/* Hover overlay */}
                                        <div className={`absolute inset-0 transition-opacity ${
                                            selectedUrl === img.url
                                                ? "bg-emerald-500/10"
                                                : "bg-black/0 group-hover:bg-black/20"
                                        }`} />

                                        {/* Selected check */}
                                        {selectedUrl === img.url && (
                                            <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                        )}

                                        {/* Delete button */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDelete(img.name);
                                            }}
                                            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-500 hover:text-red-500 hover:bg-white opacity-0 group-hover:opacity-100 transition-all shadow"
                                            disabled={deleting === img.name}
                                        >
                                            {deleting === img.name ? (
                                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-3.5 h-3.5" />
                                            )}
                                        </button>

                                        {/* File name tooltip */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-white text-xs truncate">{img.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* List view */
                            <div className="space-y-1">
                                {filteredImages.map((img) => (
                                    <div
                                        key={img.name}
                                        onClick={() => setSelectedUrl(selectedUrl === img.url ? null : img.url)}
                                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                                            selectedUrl === img.url
                                                ? "bg-emerald-50 border border-emerald-200"
                                                : "hover:bg-gray-50 border border-transparent"
                                        }`}
                                    >
                                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                            <img
                                                src={img.url}
                                                alt={img.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-800 truncate">{img.name}</p>
                                            <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                                                <span>{formatFileSize(img.size)}</span>
                                                <span>{formatDate(img.created_at)}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {selectedUrl === img.url && (
                                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                                    <Check className="w-3.5 h-3.5 text-white" />
                                                </div>
                                            )}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDelete(img.name);
                                                }}
                                                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                                disabled={deleting === img.name}
                                            >
                                                {deleting === img.name ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <Trash2 className="w-4 h-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    ) : (
                        /* Upload Tab */
                        <div className="flex flex-col items-center justify-center py-12">
                            <label className="flex flex-col items-center justify-center w-full max-w-md aspect-video rounded-2xl border-2 border-dashed border-gray-200 hover:border-emerald-400 cursor-pointer transition-all hover:bg-emerald-50/50 bg-gray-50">
                                {uploading ? (
                                    <>
                                        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin mb-3" />
                                        <span className="text-sm font-medium text-gray-600">Đang tải lên...</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                                            <Upload className="w-8 h-8 text-emerald-600" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">Click để chọn ảnh</span>
                                        <span className="text-xs text-gray-400 mt-1">hoặc kéo thả vào đây</span>
                                        <span className="text-xs text-gray-400 mt-3 px-4 text-center">
                                            Hỗ trợ: JPG, PNG, GIF, WebP • Chọn nhiều ảnh cùng lúc
                                        </span>
                                    </>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleUpload}
                                    className="hidden"
                                    disabled={uploading}
                                />
                            </label>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {activeTab === "library" && (
                    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                        <p className="text-sm text-gray-500">
                            {selectedUrl ? (
                                <span className="text-emerald-600 font-medium">1 ảnh đã chọn</span>
                            ) : (
                                `${filteredImages.length} ảnh`
                            )}
                        </p>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSelectConfirm}
                                disabled={!selectedUrl}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                                    selectedUrl
                                        ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                }`}
                            >
                                <Check className="w-4 h-4" />
                                Chọn ảnh
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
