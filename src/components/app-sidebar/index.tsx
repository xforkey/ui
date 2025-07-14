"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion"
import { ActivePageMarker, VisibleSectionHighlight } from "./visible-section-highlight"
import { useSections, type Section } from "./section-provider"
import { remToPx } from "@/lib/utils"
import {
  AudioWaveform,
  ChevronRightIcon,
  Command,
  PenLine,
} from "lucide-react"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/xfork-ui/collapsible"
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
} from "@/xfork-ui/sidebar"

import type { ComponentInfo } from '@/docs/component-map'

interface NavGroup {
  category: string
  links: ComponentInfo[]
}

function NavGroupComponent({ group, sections }: { group: NavGroup; sections: Section[] }) {
  const pathname = usePathname()

  const activeItemIndex = group.links.findIndex(item => pathname === item.href);
  const isDocsPage = pathname?.startsWith('/docs/') || pathname?.startsWith('/examples/');

  // Debug logging
  if (activeItemIndex !== -1) {
    console.log('Active item found:', {
      pathname,
      activeItemIndex,
      groupTitle: group.category,
      activeItem: group.links[activeItemIndex],
      isDocsPage,
      willShowHighlight: isDocsPage
    });
  }

  return (
    <Collapsible
      key={group.category}
      defaultOpen={true}
      className="group/collapsible"
    >
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="flex items-center justify-between w-full">
            <span>{group.category}</span>
            <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <SidebarMenu>
            <SidebarMenuSub>
              <>
                <AnimatePresence initial={true}>
                  {activeItemIndex !== -1 && isDocsPage && (
                    <VisibleSectionHighlight group={group} pathname={pathname} itemHeight={32} />
                  )}
                </AnimatePresence>
                <motion.div
                  layout
                  className="absolute inset-y-0 left-0 w-px bg-sidebar-border"
                />
                <AnimatePresence initial={false}>
                  {activeItemIndex !== -1 && (
                    <ActivePageMarker
                      activeIndex={activeItemIndex}
                      itemHeight={32}
                      offset={remToPx(0.25)}
                    />
                  )}
                </AnimatePresence>

                {group.links.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={item.href} layout="position" className="relative">
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild data-active={isActive}>
                          <Link href={item.href} className="w-full">
                            <span>{item.displayName}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <AnimatePresence mode="popLayout" initial={false}>
                        {isActive && sections.length > 0 && isDocsPage && (
                          <motion.ul
                            role="list"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: { delay: 0.1 },
                            }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.15 },
                            }}
                          >
                            {sections.map((section) => (
                              <SidebarMenuSubItem key={section.id} className="my-1">
                                <SidebarMenuSubButton asChild>
                                  <Link
                                    href={`${item.href}#${section.id}`}
                                    className="w-full pl-6"
                                  >
                                    {section.title}
                                    {section.tag && (
                                      <span className="ml-auto text-xs text-muted-foreground">
                                        {section.tag}
                                      </span>
                                    )}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </>
            </SidebarMenuSub>
          </SidebarMenu>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}

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

// Client component that renders the sidebar with nav groups passed from the server
export function AppSidebar({
  navGroups,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  navGroups: NavGroup[]
}) {
  const sections = useSections()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader >
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* Dynamic nav groups */}
        {navGroups.map((group) => (
          <NavGroupComponent key={group.category} group={group} sections={sections} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

