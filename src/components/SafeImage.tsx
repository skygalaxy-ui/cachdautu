"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { BookOpen } from "lucide-react";

// Fallback images by category
const CATEGORY_FALLBACKS: Record<string, string> = {
    'chung-khoan': '/images/blog/stocks.png',
    'quy-dau-tu': '/images/blog/stocks.png',
    'trai-phieu': '/images/blog/stocks.png',
    'tai-chinh-ca-nhan': '/images/blog/stocks.png',
    'khoi-nghiep': '/images/blog/stocks.png',
    'bat-dong-san': '/images/blog/real-estate.png',
    'vang': '/images/blog/gold.png',
    'dau-tu-thay-the': '/images/blog/gold.png',
};

const DEFAULT_FALLBACK = '/images/blog/stocks.png';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
    categorySlug?: string;
}

export default function SafeImage({ categorySlug, alt, ...props }: SafeImageProps) {
    const [error, setError] = useState(false);

    if (error) {
        const fallbackSrc = categorySlug 
            ? CATEGORY_FALLBACKS[categorySlug] || DEFAULT_FALLBACK
            : DEFAULT_FALLBACK;

        return (
            <Image
                {...props}
                src={fallbackSrc}
                alt={alt}
            />
        );
    }

    return (
        <Image
            {...props}
            alt={alt}
            onError={() => setError(true)}
        />
    );
}
