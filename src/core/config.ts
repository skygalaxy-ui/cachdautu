// src/core/config.ts
export const APP_CONFIG = {
    supabase: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
        serviceRole: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    },
    site: {
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://cachdautu.com",
        name: "CachDauTu",
    },
    blog: {
        revalidateTime: 300, // 5 phút tự làm mới trang
    }
};
