import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // IMPORTANT: Do NOT use supabase.auth.getSession() inside server code.
    // It isn't guaranteed to revalidate the Auth token.
    // Use supabase.auth.getUser() instead.
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const isLoginPage = request.nextUrl.pathname === "/admin/login";

    // If user is NOT logged in and trying to access admin pages (except login)
    if (!user && !isLoginPage) {
        const loginUrl = new URL("/admin/login", request.url);
        loginUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    // If user IS logged in and trying to access login page
    if (user && isLoginPage) {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    return supabaseResponse;
}
