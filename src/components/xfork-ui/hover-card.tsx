"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  HoverCard as UIHoverCard,
  HoverCardTrigger as UIHoverCardTrigger,
  HoverCardContent as UIHoverCardContent,
} from "@/components/ui/hover-card"

// xfork-specific styling
const xforkHoverCardContentStyles = cn(
  "backdrop-blur-lg",
  "dropdown-motion"
)

function HoverCard({
  ...props
}: React.ComponentProps<typeof UIHoverCard>) {
  return (
    <UIHoverCard
      {...props}
    />
  )
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof UIHoverCardTrigger>) {
  return (
    <UIHoverCardTrigger
      {...props}
    />
  )
}

function HoverCardContent({
  className,
  ...props
}: React.ComponentProps<typeof UIHoverCardContent>) {
  return (
    <UIHoverCardContent
      className={cn(xforkHoverCardContentStyles, className)}
      {...props}
    />
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
