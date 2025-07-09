"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  Popover as UIPopover,
  PopoverTrigger as UIPopoverTrigger,
  PopoverContent as UIPopoverContent,
  PopoverAnchor as UIPopoverAnchor,
} from "@/components/ui/popover"

// xfork-specific styling
const xforkPopoverContentStyles = cn(
  "backdrop-blur-lg",
  "dropdown-motion"
)

function Popover({
  ...props
}: React.ComponentProps<typeof UIPopover>) {
  return (
    <UIPopover
      {...props}
    />
  )
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof UIPopoverTrigger>) {
  return (
    <UIPopoverTrigger
      {...props}
    />
  )
}

function PopoverContent({
  className,
  ...props
}: React.ComponentProps<typeof UIPopoverContent>) {
  return (
    <UIPopoverContent
      className={cn(xforkPopoverContentStyles, className)}
      {...props}
    />
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof UIPopoverAnchor>) {
  return (
    <UIPopoverAnchor
      {...props}
    />
  )
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
