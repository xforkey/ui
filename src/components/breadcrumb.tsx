"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";

/* Uses middleware and headers to get pathname
---middleware.ts
export function middleware(request: NextRequest) {
    const res = NextResponse.next();
    res.headers.set("x-pathname", request.nextUrl.pathname);
    return res;
}

---page.tsx
const headerList = await headers(); // ✅ must be awaited 
const pathname = headerList.get('x-pathname') ?? '/';
*/

type Props = {
    pathname: string;
};

export function Breadcrumbs({ pathname }: Props) {

    const segments = pathname
        .split("/")
        .filter(Boolean); // remove empty segments

    const paths = segments.map((segment, i) => ({
        name: segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        href: "/" + segments.slice(0, i + 1).join("/"),
        isLast: i === segments.length - 1,
    }));

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                {paths.map(({ name, href, isLast }) => (
                    <React.Fragment key={href}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {isLast ? (
                                <BreadcrumbPage>{name}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
