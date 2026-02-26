"use client";

import { useEffect, useRef } from "react";
import { Bold, Italic, List, ListOrdered, Link2, Image as ImageIcon, Type, Heading2, Heading3 } from "lucide-react";

interface VisualEditorProps {
    content: string;
    onChange: (content: string) => void;
}

export default function VisualEditor({ content, onChange }: VisualEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const isInternalChange = useRef(false);

    // Initial load and external updates
    useEffect(() => {
        if (editorRef.current && !isInternalChange.current) {
            editorRef.current.innerHTML = content || '<p><br></p>';
        }
        isInternalChange.current = false;
    }, [content]);

    const handleInput = () => {
        if (editorRef.current) {
            isInternalChange.current = true;
            onChange(editorRef.current.innerHTML);
        }
    };

    // Tool helper
    const execCommand = (command: string, value: string = "") => {
        document.execCommand(command, false, value);
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Simple Visual Toolbar */}
            <div className="flex items-center gap-0.5 p-2 border-b border-gray-100 bg-gray-50/50 sticky top-0 z-10 overflow-x-auto whitespace-nowrap">
                <button
                    type="button"
                    onClick={() => execCommand('bold')}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="In đậm"
                >
                    <Bold className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('italic')}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="In nghiêng"
                >
                    <Italic className="w-4 h-4" />
                </button>
                <div className="w-px h-5 bg-gray-200 mx-1.5" />
                <button
                    type="button"
                    onClick={() => execCommand('formatBlock', '<h2>')}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Heading 2"
                >
                    <Heading2 className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('formatBlock', '<h3>')}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Heading 3"
                >
                    <Heading3 className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('formatBlock', '<p>')}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Đoạn văn"
                >
                    <Type className="w-4 h-4" />
                </button>
                <div className="w-px h-5 bg-gray-200 mx-1.5" />
                <button
                    type="button"
                    onClick={() => execCommand('insertUnorderedList')}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Danh sách đại dòng"
                >
                    <List className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={() => execCommand('insertOrderedList')}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Danh sách số"
                >
                    <ListOrdered className="w-4 h-4" />
                </button>
                <div className="w-px h-5 bg-gray-200 mx-1.5" />
                <button
                    type="button"
                    onClick={() => {
                        const url = prompt("Nhập URL ảnh:");
                        if (url) execCommand('insertImage', url);
                    }}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Chèn ảnh"
                >
                    <ImageIcon className="w-4 h-4" />
                </button>
                <button
                    type="button"
                    onClick={() => {
                        const url = prompt("Nhập liên kết:");
                        if (url) execCommand('createLink', url);
                    }}
                    className="p-2 rounded hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                    title="Chèn link"
                >
                    <Link2 className="w-4 h-4" />
                </button>
            </div>

            {/* Content Editable Area */}
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                className="visual-editor-content p-6 focus:outline-none min-h-[400px] prose prose-emerald max-w-none text-gray-800 leading-relaxed"
                onKeyDown={(e) => {
                    if (e.key === 'Tab') {
                        e.preventDefault();
                        document.execCommand('insertHTML', false, '&nbsp;&nbsp;&nbsp;&nbsp;');
                    }
                }}
            />

            <style jsx global>{`
                .visual-editor-content { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
                .visual-editor-content h2 { font-size: 1.75rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: #111827; letter-spacing: -0.025em; border-bottom: 1px solid #f3f4f6; padding-bottom: 0.5rem; }
                .visual-editor-content h3 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #111827; letter-spacing: -0.025em; }
                .visual-editor-content p { margin-bottom: 1.25rem; font-size: 1rem; line-height: 1.75; color: #374151; }
                .visual-editor-content ul { padding-left: 1.5rem; list-style-type: disc; margin-bottom: 1.25rem; }
                .visual-editor-content ol { padding-left: 1.5rem; list-style-type: decimal; margin-bottom: 1.25rem; }
                .visual-editor-content li { margin-bottom: 0.5rem; }
                .visual-editor-content img { max-width: 100%; height: auto; border-radius: 0.75rem; margin: 1.5rem 0; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
                .visual-editor-content a { color: #059669; text-decoration: underline; font-weight: 500; }
                .visual-editor-content blockquote { border-left: 4px solid #10b981; padding: 0.75rem 1.5rem; font-style: italic; color: #4b5563; background: #f0fdf4; border-radius: 0 0.5rem 0.5rem 0; margin: 1.5rem 0; }
                .visual-editor-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
                .visual-editor-content th, .visual-editor-content td { border: 1px solid #e5e7eb; padding: 0.75rem; text-align: left; }
                .visual-editor-content th { background: #f9fafb; font-weight: 600; }
            `}</style>
        </div>
    );
}
