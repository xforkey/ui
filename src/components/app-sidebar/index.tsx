"use client"

import { type UIComponentInfo } from "./ui-components-list"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion"
import { ActivePageMarker, VisibleSectionHighlight } from "./active-page-marker"
import { remToPx } from "@/lib/utils"
import {
  AudioWaveform,
  ChevronRightIcon,
  Command,
  PenLine,
} from "lucide-react"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { examples } from "@/app/(app)/_components/examples-nav"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "xFork",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "X Forkey",
      logo: PenLine,
      plan: "UI",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ]
}

// Client component that renders the sidebar with UI components passed from the server
export function AppSidebar({
  uiComponents,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  uiComponents: UIComponentInfo[]
}) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader >
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <Collapsible
          key={'Examples'}
          defaultOpen={true}
          className="group/collapsible"
        >
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="flex items-center justify-between w-full">
                <span>Examples</span>
                <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <SidebarMenu>
                {/* Check if any example is active */}
                <SidebarMenuSub>
                  {/* Find the active example index */}
                  {(() => {
                    const activeExampleIndex = examples.findIndex(example => pathname === example.href);

                    return (
                      <>
                        <motion.div
                          layout
                          className="absolute inset-y-0 left-0 w-px bg-sidebar-border"
                        />
                        <AnimatePresence initial={false}>
                          {activeExampleIndex !== -1 && (
                            <ActivePageMarker
                              activeIndex={activeExampleIndex}
                              itemHeight={remToPx(2)}
                              offset={remToPx(0.25)}
                            />
                          )}
                        </AnimatePresence>

                        {examples.map((example: { name: string; href: string; code: string; hidden: boolean }) => (
                          <SidebarMenuSubItem key={example.href}>
                            <SidebarMenuSubButton asChild>
                              <Link href={example.href} className="w-full">
                                <span>{example.name}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </>
                    );
                  })()}
                </SidebarMenuSub>
              </SidebarMenu>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible
          key={'Components'}
          defaultOpen={true}
          className="group/collapsible"
        >
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="flex items-center justify-between w-full">
                <span>Components</span>
                <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <SidebarMenu>
                {/* Check if any component is active */}
                <SidebarMenuSub>
                  {/* Find the active component index */}
                  {(() => {

                    const activeComponentIndex = uiComponents.findIndex(item => pathname === item.href);

                    return (
                      <>
                        <AnimatePresence initial={true}>
                          {activeComponentIndex !== -1 && (
                            <VisibleSectionHighlight activeIndex={activeComponentIndex} />
                          )}
                        </AnimatePresence>
                        <motion.div
                          layout
                          className="absolute inset-y-0 left-0 w-px bg-sidebar-border"
                        />
                        <AnimatePresence initial={false}>
                          {activeComponentIndex !== -1 && (
                            <ActivePageMarker
                              activeIndex={activeComponentIndex}
                              itemHeight={remToPx(2)}
                              offset={remToPx(0.25)}
                            />
                          )}
                        </AnimatePresence>

                        {uiComponents.map((item) => {
                          return (
                            <SidebarMenuSubItem key={item.name}>
                              <SidebarMenuSubButton asChild data-active={pathname === item.href}>
                                <Link href={item.href} className="w-full">
                                  <span>{item.displayName}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </>
                    );
                  })()}
                </SidebarMenuSub>
              </SidebarMenu>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
