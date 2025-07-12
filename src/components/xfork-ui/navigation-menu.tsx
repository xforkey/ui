"use client"

import * as React from "react"
import * as UiNavigationMenu from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Styles needed to transform UI navigation-menu to match xfork-ui appearance
const xforkNavigationMenuStyles = {
  base: [
    // Z-index difference - UI uses no z-index, xfork uses z-[100]
    "z-[100]",
  ],

  trigger: [
    // Ring styles difference - UI uses focus-visible:ring-ring/50, xfork uses more complex ring styles
    "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
    // Active state differences
    "data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground",
  ],

  content: [
    // Z-index difference - UI uses no z-index, xfork uses z-[100]
    "z-[100]",
  ],

  viewport: [
    // Z-index difference - UI uses z-50, xfork uses z-[100]
    "z-[100]",
    // Background difference - UI has no backdrop-blur-lg, xfork has it
    "backdrop-blur-lg",
  ],

  link: [
    // Ring styles difference - UI uses focus-visible:ring-ring/50, xfork uses more complex ring styles
    "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
    // Active state differences
    "data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground",
  ],

  indicator: [
    // Z-index difference - UI uses z-[1], xfork uses z-[100]
    "z-[100]",
  ]
}

function NavigationMenu({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenu>) {
  return (
    <UiNavigationMenu.NavigationMenu
      className={cn(
        ...xforkNavigationMenuStyles.base,
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenuList>) {
  return (
    <UiNavigationMenu.NavigationMenuList
      className={cn(className)}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenuItem>) {
  return (
    <UiNavigationMenu.NavigationMenuItem
      className={cn(className)}
      {...props}
    />
  )
}

function NavigationMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenuTrigger>) {
  return (
    <UiNavigationMenu.NavigationMenuTrigger
      className={cn(
        ...xforkNavigationMenuStyles.trigger,
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenuContent>) {
  return (
    <UiNavigationMenu.NavigationMenuContent
      className={cn(
        ...xforkNavigationMenuStyles.content,
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenuViewport>) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 flex justify-center",
        ...xforkNavigationMenuStyles.viewport
      )}
    >
      <UiNavigationMenu.NavigationMenuViewport
        className={cn(
          "backdrop-blur-lg",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenuLink>) {
  return (
    <UiNavigationMenu.NavigationMenuLink
      className={cn(
        ...xforkNavigationMenuStyles.link,
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof UiNavigationMenu.NavigationMenuIndicator>) {
  return (
    <UiNavigationMenu.NavigationMenuIndicator
      className={cn(
        ...xforkNavigationMenuStyles.indicator,
        className
      )}
      {...props}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  xforkNavigationMenuStyles,
}
export * from "@/components/ui/navigation-menu"
