"use client"

import * as React from "react"
import * as UiTooltip from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

// Styles needed to transform UI tooltip to match xfork-ui appearance
const xforkTooltipStyles = {
  provider: [
    // Same styling as UI
  ],

  base: [
    // Same styling as UI
  ],

  trigger: [
    // Same styling as UI
  ],

  content: [
    // Background and text color differences - UI uses bg-primary text-primary-foreground, xfork uses bg-accent text-accent-foreground
    "bg-accent text-accent-foreground border-accent-foreground border-1",
  ],

  arrow: [
    // Arrow styling differences - UI uses simple bg-primary fill-primary, xfork uses complex border and gradient styling
    "bg-accent fill-transparent border-accent-foreground border-t-0 border-r border-b border-l-0",
    "bg-linear-to-br from-transparent to-accent",
  ]
}

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof UiTooltip.TooltipProvider>) {
  return (
    <UiTooltip.TooltipProvider
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof UiTooltip.Tooltip>) {
  return (
    <UiTooltip.Tooltip
      {...props}
    />
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof UiTooltip.TooltipTrigger>) {
  return (
    <UiTooltip.TooltipTrigger
      {...props}
    />
  )
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof UiTooltip.TooltipContent>) {
  return (
    <UiTooltip.TooltipContent
      sideOffset={sideOffset}
      className={cn(
        ...xforkTooltipStyles.content,
        className
      )}
      {...props}
    >
      {children}
      <div
        className={cn(
          "z-50 size-2.5 translate-y-[calc(-50%_-_1px)] rotate-45 rounded-[2px]",
          ...xforkTooltipStyles.arrow
        )}
      />
    </UiTooltip.TooltipContent>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, xforkTooltipStyles }
export * from "@/components/ui/tooltip"
