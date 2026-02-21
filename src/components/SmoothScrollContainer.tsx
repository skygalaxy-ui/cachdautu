"use client";

import { ReactNode } from "react";

interface SmoothScrollContainerProps {
    children: ReactNode;
    className?: string;
}

export default function SmoothScrollContainer({ children, className = "" }: SmoothScrollContainerProps) {
    return (
        <div
            className={`bg-primary text-text ${className}`}
            style={{ scrollBehavior: 'smooth' }}
        >
            {children}
        </div>
    );
}
