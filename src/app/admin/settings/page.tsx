"use client";

import { useState, useEffect } from "react";
import { Save, Globe, Mail, Share2, Check, Type, Palette } from "lucide-react";
import { supabase } from "@/core/supabase";

const FONT_OPTIONS = [
    { label: "Inter (Mặc định)", value: "Inter" },
    { label: "Roboto", value: "Roboto" },
    { label: "Noto Sans", value: "'Noto Sans'" },
    { label: "Mulish", value: "Mulish" },
    { label: "Lexend", value: "Lexend" },
    { label: "Open Sans", value: "'Open Sans'" },
    { label: "Lora (Serif)", value: "Lora" },
    { label: "Merriweather (Serif)", value: "Merriweather" },
];

const WEIGHT_OPTIONS = [
    { label: "Nhẹ (300)", value: "300" },
    { label: "Bình thường (400)", value: "400" },
    { label: "Vừa (500)", value: "500" },
    { label: "Đậm vừa (600)", value: "600" },
    { label: "Đậm (700)", value: "700" },
    { label: "Rất đậm (800)", value: "800" },
    { label: "Cực đậm (900)", value: "900" },
];

interface ArticleSettings {
    article_heading_font: string;
    article_heading_weight: string;
    article_body_font: string;
    article_body_weight: string;
    article_h2_size: string;
    article_h3_size: string;
    article_body_size: string;
}

export default function SettingsPage() {
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [settings, setSettings] = useState({
        siteName: "Cách Đầu Tư",
        siteDescription: "Nền tảng kiến thức đầu tư hàng đầu Việt Nam",
        contactEmail: "contact@cachdautu.com",
        facebook: "",
        youtube: "",
        telegram: "",
    });
    const [articleSettings, setArticleSettings] = useState<ArticleSettings>({
        article_heading_font: "Inter",
        article_heading_weight: "700",
        article_body_font: "Inter",
        article_body_weight: "400",
        article_h2_size: "1.5",
        article_h3_size: "1.25",
        article_body_size: "1",
    });

    // Load settings from Supabase
    useEffect(() => {
        async function loadSettings() {
            const { data } = await supabase.from("site_settings").select("*");
            if (data && data.length > 0) {
                const mapped: Record<string, string> = {};
                data.forEach((row: { key: string; value: string }) => {
                    mapped[row.key] = row.value;
                });
                setArticleSettings(prev => ({ ...prev, ...mapped }));
            }
        }
        loadSettings();
    }, []);

    async function handleSave() {
        setSaving(true);

        // Save article settings to Supabase
        const updates = Object.entries(articleSettings).map(([key, value]) => ({
            key,
            value,
            updated_at: new Date().toISOString(),
        }));

        const { error } = await supabase.from("site_settings").upsert(updates, { onConflict: "key" });

        if (error) {
            console.error("Save error:", error);
            alert("Lỗi lưu: " + error.message);
        }

        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    }

    interface SettingsSectionProps {
        icon: React.ReactNode;
        title: string;
        description: string;
        children: React.ReactNode;
        color: string;
    }

    const SettingsSection = ({ icon, title, description, children, color }: SettingsSectionProps) => (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                    {icon}
                </div>
                <div>
                    <h2 className="font-semibold text-gray-900">{title}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            </div>
            <div className="p-6 space-y-5">
                {children}
            </div>
        </div>
    );

    const InputField = ({ label, type = "text", value, onChange, placeholder }: {
        label: string;
        type?: string;
        value: string;
        onChange: (value: string) => void;
        placeholder?: string;
    }) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:border-gray-300 focus:bg-white focus:outline-none transition-all placeholder-gray-400"
            />
        </div>
    );

    const SelectField = ({ label, value, onChange, options }: {
        label: string;
        value: string;
        onChange: (value: string) => void;
        options: { label: string; value: string }[];
    }) => (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:border-gray-300 focus:bg-white focus:outline-none transition-all"
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );

    const SizeSlider = ({ label, value, onChange, min, max, step, unit = "rem" }: {
        label: string;
        value: string;
        onChange: (value: string) => void;
        min: number;
        max: number;
        step: number;
        unit?: string;
    }) => (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded-lg text-gray-600">
                    {value}{unit}
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{min}{unit}</span>
                <span>{max}{unit}</span>
            </div>
        </div>
    );

    // Preview text
    const previewStyle = {
        fontFamily: articleSettings.article_body_font + ", sans-serif",
        fontWeight: articleSettings.article_body_weight,
        fontSize: articleSettings.article_body_size + "rem",
    };
    const h2Style = {
        fontFamily: articleSettings.article_heading_font + ", sans-serif",
        fontWeight: articleSettings.article_heading_weight,
        fontSize: articleSettings.article_h2_size + "rem",
    };
    const h3Style = {
        fontFamily: articleSettings.article_heading_font + ", sans-serif",
        fontWeight: articleSettings.article_heading_weight,
        fontSize: articleSettings.article_h3_size + "rem",
    };

    return (
        <div className="space-y-6 max-w-3xl">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Cài đặt</h1>
                <p className="text-gray-500 text-sm mt-0.5">Quản lý cấu hình website của bạn</p>
            </div>

            {/* Article Typography Settings */}
            <SettingsSection
                icon={<Type className="w-5 h-5 text-purple-600" />}
                title="Kiểu chữ bài viết"
                description="Chỉnh font, độ đậm và kích cỡ chữ trong bài viết (không cần deploy lại)"
                color="bg-purple-50"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <SelectField
                        label="Font tiêu đề (H2, H3)"
                        value={articleSettings.article_heading_font}
                        onChange={(v) => setArticleSettings({ ...articleSettings, article_heading_font: v })}
                        options={FONT_OPTIONS}
                    />
                    <SelectField
                        label="Độ đậm tiêu đề"
                        value={articleSettings.article_heading_weight}
                        onChange={(v) => setArticleSettings({ ...articleSettings, article_heading_weight: v })}
                        options={WEIGHT_OPTIONS}
                    />
                    <SelectField
                        label="Font nội dung"
                        value={articleSettings.article_body_font}
                        onChange={(v) => setArticleSettings({ ...articleSettings, article_body_font: v })}
                        options={FONT_OPTIONS}
                    />
                    <SelectField
                        label="Độ đậm nội dung"
                        value={articleSettings.article_body_weight}
                        onChange={(v) => setArticleSettings({ ...articleSettings, article_body_weight: v })}
                        options={WEIGHT_OPTIONS.filter(w => parseInt(w.value) <= 600)}
                    />
                </div>

                <div className="border-t border-gray-100 pt-5 space-y-4">
                    <SizeSlider
                        label="Kích cỡ tiêu đề H2"
                        value={articleSettings.article_h2_size}
                        onChange={(v) => setArticleSettings({ ...articleSettings, article_h2_size: v })}
                        min={1.2} max={2.5} step={0.05}
                    />
                    <SizeSlider
                        label="Kích cỡ tiêu đề H3"
                        value={articleSettings.article_h3_size}
                        onChange={(v) => setArticleSettings({ ...articleSettings, article_h3_size: v })}
                        min={1} max={2} step={0.05}
                    />
                    <SizeSlider
                        label="Kích cỡ nội dung"
                        value={articleSettings.article_body_size}
                        onChange={(v) => setArticleSettings({ ...articleSettings, article_body_size: v })}
                        min={0.8} max={1.4} step={0.05}
                    />
                </div>

                {/* Live Preview */}
                <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Xem trước</p>
                    <div className="bg-[#0A192F] rounded-xl p-6 space-y-3">
                        <h2 style={h2Style} className="text-white">Tiêu đề H2 mẫu</h2>
                        <h3 style={h3Style} className="text-white/80">Tiêu đề H3 mẫu</h3>
                        <p style={previewStyle} className="text-white/70 leading-relaxed">
                            Đây là đoạn văn mẫu minh họa font và kích cỡ nội dung bài viết. Bạn có thể điều chỉnh các thông số ở trên và xem kết quả ngay tại đây trước khi lưu.
                        </p>
                    </div>
                </div>
            </SettingsSection>

            {/* General Settings */}
            <SettingsSection
                icon={<Globe className="w-5 h-5 text-blue-600" />}
                title="Thông tin chung"
                description="Cấu hình cơ bản của website"
                color="bg-blue-50"
            >
                <InputField
                    label="Tên website"
                    value={settings.siteName}
                    onChange={(value) => setSettings({ ...settings, siteName: value })}
                />
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mô tả</label>
                    <textarea
                        value={settings.siteDescription}
                        onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:border-gray-300 focus:bg-white focus:outline-none resize-none transition-all"
                    />
                </div>
            </SettingsSection>

            {/* Contact Settings */}
            <SettingsSection
                icon={<Mail className="w-5 h-5 text-blue-600" />}
                title="Liên hệ"
                description="Thông tin liên hệ hiển thị trên website"
                color="bg-blue-50"
            >
                <InputField
                    label="Email liên hệ"
                    type="email"
                    value={settings.contactEmail}
                    onChange={(value) => setSettings({ ...settings, contactEmail: value })}
                />
            </SettingsSection>

            {/* Social Media */}
            <SettingsSection
                icon={<Share2 className="w-5 h-5 text-emerald-600" />}
                title="Mạng xã hội"
                description="Liên kết đến các kênh social media"
                color="bg-emerald-50"
            >
                <InputField
                    label="Facebook"
                    value={settings.facebook}
                    onChange={(value) => setSettings({ ...settings, facebook: value })}
                    placeholder="https://facebook.com/cachdautu"
                />
                <InputField
                    label="YouTube"
                    value={settings.youtube}
                    onChange={(value) => setSettings({ ...settings, youtube: value })}
                    placeholder="https://youtube.com/@cachdautu"
                />
                <InputField
                    label="Telegram"
                    value={settings.telegram}
                    onChange={(value) => setSettings({ ...settings, telegram: value })}
                    placeholder="https://t.me/cachdautu"
                />
            </SettingsSection>

            {/* Save Button */}
            <div className="sticky bottom-6 flex justify-end">
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-lg ${saved
                            ? 'bg-emerald-500 text-white shadow-emerald-500/25'
                            : 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/20 hover:shadow-gray-900/30'
                        }`}
                >
                    {saving ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Đang lưu...
                        </>
                    ) : saved ? (
                        <>
                            <Check className="w-4 h-4" />
                            Đã lưu!
                        </>
                    ) : (
                        <>
                            <Save className="w-4 h-4" />
                            Lưu thay đổi
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
