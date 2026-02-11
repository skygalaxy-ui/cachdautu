"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [items, setItems] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Parse headings from content (support both Markdown and HTML)
        const toc: TOCItem[] = [];

        const isHTML = /<[a-z][\s\S]*>/i.test(content);

        if (isHTML) {
            // Parse HTML headings
            const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
            const h3Regex = /<h3[^>]*>(.*?)<\/h3>/gi;
            const allHeadings: { text: string; level: number; index: number }[] = [];

            let match;
            while ((match = h2Regex.exec(content)) !== null) {
                const text = match[1].replace(/<[^>]+>/g, '').trim();
                if (text) allHeadings.push({ text, level: 2, index: match.index });
            }
            while ((match = h3Regex.exec(content)) !== null) {
                const text = match[1].replace(/<[^>]+>/g, '').trim();
                if (text) allHeadings.push({ text, level: 3, index: match.index });
            }

            allHeadings
                .sort((a, b) => a.index - b.index)
                .forEach((h, idx) => {
                    toc.push({
                        id: `toc-${idx}`,
                        text: h.text,
                        level: h.level
                    });
                });
        } else {
            // Parse Markdown headings
            const lines = content.split('\n');
            lines.forEach((line, idx) => {
                if (line.startsWith('## ')) {
                    toc.push({ id: `heading-${idx}`, text: line.replace('## ', ''), level: 2 });
                } else if (line.startsWith('### ')) {
                    toc.push({ id: `heading-${idx}`, text: line.replace('### ', ''), level: 3 });
                }
            });
        }

        setItems(toc);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -80% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    if (items.length === 0) return null;

    return (
        <div className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] rounded-3xl p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center">
                    <List className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">Mục lục</h4>
            </div>

            <nav className="space-y-1">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`
                            w-full text-left text-xs sm:text-sm py-1.5 px-3 rounded-lg transition-all
                            ${item.level === 3 ? 'ml-3' : ''}
                            ${activeId === item.id
                                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-l-2 border-purple-400'
                                : 'text-text-muted hover:text-white hover:bg-white/5'
                            }
                        `}
                    >
                        {item.text}
                    </button>
                ))}
            </nav>
        </div>
    );
}
