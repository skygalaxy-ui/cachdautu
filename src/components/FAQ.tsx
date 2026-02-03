"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Tôi nên bắt đầu đầu tư như thế nào?",
        answer: "Bắt đầu với việc xây dựng quỹ khẩn cấp trước (3-6 tháng chi tiêu). Sau đó, học kiến thức cơ bản về loại tài sản bạn quan tâm. Bắt đầu với số vốn nhỏ mà bạn có thể chấp nhận mất để học hỏi kinh nghiệm thực tế."
    },
    {
        question: "Website này có cam kết lợi nhuận không?",
        answer: "Không. Chúng tôi không cam kết bất kỳ mức lợi nhuận nào. Đầu tư luôn có rủi ro và quyết định cuối cùng thuộc về bạn. Chúng tôi cung cấp kiến thức và phân tích để bạn đưa ra quyết định sáng suốt hơn."
    },
    {
        question: "Loại đầu tư nào phù hợp với người mới?",
        answer: "Với người mới, chúng tôi khuyên bắt đầu với các quỹ ETF hoặc quỹ chỉ số vì chúng đa dạng hóa tự động và chi phí thấp. Song song đó, học về chứng khoán cơ bản và tài chính cá nhân."
    },
    {
        question: "Làm sao để theo dõi nội dung mới?",
        answer: "Bạn có thể đăng ký nhận newsletter để nhận cập nhật bài viết mới, phân tích thị trường và các mẹo đầu tư định kỳ. Chúng tôi cũng chia sẻ trên các kênh mạng xã hội."
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section" style={{ background: 'var(--color-primary-dark)' }}>
            <div className="container max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span
                        className="text-sm font-medium uppercase tracking-wider"
                        style={{ color: 'var(--color-accent-gold)' }}
                    >
                        Câu hỏi thường gặp
                    </span>
                    <h2 className="mt-2">
                        Giải đáp <span className="gradient-text-emerald">thắc mắc</span>
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden"
                        >
                            <button
                                className="w-full p-6 text-left flex items-center justify-between"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold pr-4">{faq.question}</span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="flex-shrink-0 transition-transform"
                                    style={{
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                        color: 'var(--color-accent-gold)'
                                    }}
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            <div
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    opacity: openIndex === index ? 1 : 0
                                }}
                            >
                                <p
                                    className="px-6 pb-6"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
