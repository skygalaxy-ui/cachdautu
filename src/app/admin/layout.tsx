"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin/login";

    // Login page gets its own clean layout without sidebar
    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-[#f6f6f7]">
            <AdminSidebar />
            <main className="lg:ml-[260px] min-h-screen pt-14 lg:pt-0">
                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
