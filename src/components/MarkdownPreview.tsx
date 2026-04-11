"use client";

import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownPreviewProps {
    content: string;
}

// Detect if content is HTML (legacy formatted content)
export function isHTML(str: string): boolean {
    if (!str) return false;
    const trimmed = str.trim();
    return /^<[a-z][\s\S]*>/i.test(trimmed) ||
        /<(p|div|h[1-6]|ul|ol|li|table|img|a|br|hr|span|strong|em|blockquote|pre|code|section|article|header|footer|figure|figcaption)\b/i.test(trimmed);
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
    if (!content) {
        return <p className="text-gray-400 italic">Chưa có nội dung...</p>;
    }

    return (
        <div 
            className="prose-preview content-rendered text-gray-800 [&_p]:!text-gray-800 [&_span]:!text-gray-800 [&_h1]:!text-gray-900 [&_h2]:!text-gray-900 [&_h3]:!text-gray-900 [&_h4]:!text-gray-900 [&_li]:!text-gray-800 [&_strong]:!text-gray-900 [&_b]:!text-gray-900" 
            style={{ lineHeight: '1.8', fontSize: '15px' }}
        >
            {isHTML(content) ? (
                // Lọc nội dung cũ chứa HTML thuần
                <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
                // Trình dịch Markdown chuẩn Github (Hỗ trợ nhúng HTML trong MD)
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-3" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3 pb-2 border-b border-gray-100" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2" {...props} />,
                        h4: ({node, ...props}) => <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2" {...props} />,
                        p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed my-2" {...props} />,
                        a: ({node, ...props}) => <a className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-emerald-400 pl-4 py-1 my-3 text-gray-600 bg-emerald-50/50 rounded-r-lg pr-4" {...props} />,
                        ul: ({node, ...props}) => <ul className="my-3 space-y-1 list-disc ml-4 text-gray-700" {...props} />,
                        ol: ({node, ...props}) => <ol className="my-3 space-y-1 list-decimal ml-4 text-gray-700" {...props} />,
                        li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                        hr: ({node, ...props}) => <hr className="my-6 border-gray-200" {...props} />,
                        img: ({node, ...props}) => <img className="rounded-lg max-w-full my-3 border border-gray-200" {...props} />,
                        table: ({node, ...props}) => <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse" {...props} /></div>,
                        th: ({node, ...props}) => <th className="border border-gray-200 bg-gray-50 px-4 py-2 font-semibold text-gray-900" {...props} />,
                        td: ({node, ...props}) => <td className="border border-gray-200 px-4 py-2 text-gray-700" {...props} />,
                        pre: ({node, ...props}) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl my-3 overflow-x-auto text-sm font-mono" {...props} />,
                        code: ({node, className, ...props}: any) => {
                            const isBlock = /language-/.test(className || '');
                            if (isBlock) return <code className={className} {...props} />;
                            return <code className="bg-gray-100 text-emerald-700 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />;
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            )}
        </div>
    );
}
