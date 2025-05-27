"use client"

import { type UIComponentInfo } from "./ui-components-list"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion"
import { ActivePageMarker } from "./active-page-marker"
import { remToPx } from "@/lib/utils"
import {
  AudioWaveform,
  BookOpen,
  ChevronRightIcon,
  Command,
  PenLine,
  Layers,
} from "lucide-react"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { examples } from "@/app/(app)/_components/examples-nav"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import { Label } from "@/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
        <SidebarGroup>
          <SidebarGroupLabel>Examples</SidebarGroupLabel>
          <SidebarMenu>
            {/* Check if any example is active */}
            <Collapsible
              asChild
              defaultOpen={true}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Examples">
                    <Layers />
                    <span>Examples</span>
                    <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
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
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarMenu>
            {/* Check if any component is active */}
            <Collapsible
              asChild
              defaultOpen={true}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Components">
                    <BookOpen />
                    <span>Components</span>
                    <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {/* Find the active component index */}
                    {(() => {

                      const activeComponentIndex = uiComponents.findIndex(item => pathname === item.href);

                      return (
                        <>
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
                                <SidebarMenuSubButton asChild>
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
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
