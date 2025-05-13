// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const res = NextResponse.next();
    res.headers.set("x-pathname", request.nextUrl.pathname);
    return res;
}

export const config = {
    matcher: ['/docs/:path*'],
};