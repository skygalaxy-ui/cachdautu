"use client";

import { useMemo } from "react";

interface MarkdownPreviewProps {
    content: string;
}

// Detect if content is HTML
function isHTML(str: string): boolean {
    if (!str) return false;
    const trimmed = str.trim();
    // Check for common HTML patterns
    return /^<[a-z][\s\S]*>/i.test(trimmed) ||
        /<(p|div|h[1-6]|ul|ol|li|table|img|a|br|hr|span|strong|em|blockquote|pre|code|section|article|header|footer|figure|figcaption)\b/i.test(trimmed);
}

function parseMarkdown(md: string): string {
    if (!md) return '<p class="text-gray-400 italic">Chưa có nội dung...</p>';

    let html = md
        // Escape HTML
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')

        // Images
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg max-w-full my-3 border border-gray-200" />')

        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-emerald-600 hover:underline" target="_blank">$1</a>')

        // Bold & Italic
        .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')

        // Headings
        .replace(/^#### (.+)$/gm, '<h4 class="text-base font-semibold text-gray-900 mt-4 mb-2">$1</h4>')
        .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-900 mt-5 mb-2">$1</h3>')
        .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-gray-900 mt-6 mb-3 pb-2 border-b border-gray-100">$1</h2>')
        .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-gray-900 mt-6 mb-3">$1</h1>')

        // Blockquote
        .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-emerald-400 pl-4 py-1 my-3 text-gray-600 bg-emerald-50/50 rounded-r-lg pr-4">$1</blockquote>')

        // Horizontal rule
        .replace(/^---$/gm, '<hr class="my-6 border-gray-200" />')

        // Code blocks
        .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-gray-900 text-gray-100 p-4 rounded-xl my-3 overflow-x-auto text-sm font-mono"><code>$2</code></pre>')

        // Inline code
        .replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-emerald-700 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')

        // Unordered lists
        .replace(/^- (.+)$/gm, '<li class="ml-4 text-gray-700 list-disc">$1</li>')

        // Ordered lists
        .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 text-gray-700 list-decimal">$1</li>')

        // Paragraphs
        .replace(/^(?!<[hblupoi]|<hr|<img|<pre|<code|<a|<li|<block)(.+)$/gm, '<p class="text-gray-700 leading-relaxed my-2">$1</p>');

    // Wrap consecutive list items
    html = html.replace(/((?:<li[^>]*>.*<\/li>\s*)+)/g, '<ul class="my-3 space-y-1">$1</ul>');

    return html;
}

function sanitizeHTML(html: string): string {
    if (!html) return '<p class="text-gray-400 italic">Chưa có nội dung...</p>';

    // Remove script tags and event handlers for safety
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
        .replace(/\son\w+\s*=\s*[^\s>]*/gi, '')
        .replace(/javascript\s*:/gi, '');
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
    const html = useMemo(() => {
        if (isHTML(content)) {
            return sanitizeHTML(content);
        }
        return parseMarkdown(content);
    }, [content]);

    return (
        <div
            className="prose-preview content-rendered"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
                lineHeight: '1.8',
                fontSize: '15px',
            }}
        />
    );
}

// Export detection helper for external use
export { isHTML };
