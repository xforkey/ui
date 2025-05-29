import type { Metadata, Viewport } from "next"
import { Geist_Mono as FontMono, Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/ui/sonner"
import { siteConfig } from "@/config/site"
import { cookies } from "next/headers"

import { AppSidebar } from "@/components/app-sidebar"
import { getUIComponentsList } from "@/components/app-sidebar/ui-components-list"
import { ModeSwitcher } from "@/components/mode-switcher"
import { Separator } from "@/ui/separator"
import { ScrollArea } from "@/ui/scroll-area"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/ui/sidebar"
import { Breadcrumbs } from "@/components/breadcrumb"
import { CommandMenu } from "@/components/command-menu"

import "./globals.css"
import NoiseOverlay from "@/docs/components/noise-overlay"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "xforkey",
      url: "https://xforkey.com",
    },
  ],
  creator: "xforkey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@xforkey",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch data on the server
  const [cookieStore, uiComponents] = await Promise.all([
    cookies(),
    getUIComponentsList()
  ])

  const normalizedUiComponents = uiComponents.map(comp => ({
    ...comp,
    href: `/docs/${comp.name}`,
  }));

  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "overscroll-none font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <NoiseOverlay />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar uiComponents={normalizedUiComponents} />
            <SidebarInset>
              <header className="sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2">
                <div className="flex h-14 w-full items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1.5" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <Breadcrumbs />
                  <div className="ml-auto flex items-center gap-2">
                    <CommandMenu />
                    <ModeSwitcher />
                  </div>
                </div>
              </header>
              <ScrollArea className="relative m-2 px-4 h-[calc(100vh-72px)] max-h-[calc(100vh-72px)] bg-white dark:bg-background rounded-2xl lg:ring-1 lg:shadow-xs lg:ring-black/5 dark:lg:ring-white/10  ">

                {children}
              </ScrollArea>
            </SidebarInset>
          </SidebarProvider>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
