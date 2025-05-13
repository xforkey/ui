import { cookies, headers } from "next/headers"

import { AppSidebar } from "@/components/app-sidebar"
import { getUIComponentsList } from "@/components/app-sidebar/ui-components-list"
import { ModeSwitcher } from "@/components/mode-switcher"
import { NavHeader } from "@/components/nav-header"
import { Separator } from "@/ui/separator"
import { ScrollArea } from "@/ui/scroll-area"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/ui/sidebar"
import { Breadcrumbs } from "@/components/breadcrumb"
import { CommandMenu } from "@/components/command-menu"

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // Fetch data on the server
    const [cookieStore, uiComponents] = await Promise.all([
        cookies(),
        getUIComponentsList()
    ])

    const headerList = await headers(); // ✅ must be awaited
    const pathname = headerList.get('x-pathname') ?? '/';

    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar uiComponents={uiComponents} />
            <SidebarInset>
                <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2">
                    <div className="flex h-14 w-full items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1.5" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumbs pathname={pathname} />
                        <div className="ml-auto flex items-center gap-2">
                            <CommandMenu />
                            <ModeSwitcher />
                        </div>
                    </div>
                </header>
                <ScrollArea className="m-2 px-4 h-[calc(100vh-72px)] max-h-[calc(100vh-72px)] bg-black/2 dark:bg-white/2 rounded-2xl lg:ring-1 lg:shadow-xs  lg:ring-black/5 dark:lg:ring-white/10">
                    {children}
                </ScrollArea>
            </SidebarInset>
        </SidebarProvider>
    )
}

