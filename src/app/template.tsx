import { cookies } from "next/headers"

import { AppSidebar } from "@/components/app-sidebar"
import { ModeSwitcher } from "@/components/mode-switcher"
import { NavHeader } from "@/components/nav-header"
import { Separator } from "@/ui/separator"
import { ScrollArea } from "@/ui/scroll-area"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/ui/sidebar"
import { BreadcrumbDemo } from "@/components/breadcrumb"
import { CommandMenu } from "@/components/command-menu"

export default async function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
                <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2">
                    <div className="flex h-14 w-full items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1.5" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <BreadcrumbDemo />
                        <div className="ml-auto flex items-center gap-2">
                            <CommandMenu />
                            <ModeSwitcher />
                        </div>
                    </div>
                </header>
                <ScrollArea className="m-2 p-4 h-[calc(100vh-72px)] max-h-[calc(100vh-72px)] bg-black/2 dark:bg-white/2 rounded-2xl lg:ring-1 lg:shadow-xs  lg:ring-black/5 dark:lg:ring-white/10">
                    {children}
                </ScrollArea>
            </SidebarInset>
        </SidebarProvider>
    )
}

