import { useState, useRef, useMemo, useEffect } from "react";
import { supabase, uploadImage } from "@/core/supabase";

export function usePostEditor(initialData: any = {}) {
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
        featured_image_alt: "",
        meta_title: "",
        meta_description: "",
        scheduled_at: "",
        focus_keyword: "",
        ...initialData
    });

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Slug generation logic
    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    // Formatting helpers
    const insertFormatting = (prefix: string, suffix: string = prefix) => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = form.content.substring(start, end);
        const before = form.content.substring(0, start);
        const after = form.content.substring(end);
        const newContent = `${before}${prefix}${selected || 'text'}${suffix}${after}`;
        setForm((prev: any) => ({ ...prev, content: newContent }));
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selected || 'text').length);
        }, 0);
    };

    const insertAtCursor = (text: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const before = form.content.substring(0, start);
        const after = form.content.substring(start);
        setForm((prev: any) => ({ ...prev, content: `${before}${text}${after}` }));
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + text.length, start + text.length);
        }, 0);
    };

    return {
        form,
        setForm,
        textareaRef,
        generateSlug,
        insertFormatting,
        insertAtCursor
    };
}
