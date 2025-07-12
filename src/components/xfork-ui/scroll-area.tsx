"use client"

import * as React from "react"
import * as UiScrollArea from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

// Styles needed to transform UI scroll-area to match xfork-ui appearance
const xforkScrollAreaStyles = {
  base: [
    // Same styling as UI
  ],

  viewport: [
    // Ring styles difference - UI uses focus-visible:ring-ring/50, xfork uses more complex ring styles
    "ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
  ],

  scrollbar: [
    // Same styling as UI
  ],

  thumb: [
    // Same styling as UI
  ]
}

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof UiScrollArea.ScrollArea>) {
  return (
    <UiScrollArea.ScrollArea
      className={cn(
        ...xforkScrollAreaStyles.base,
        className
      )}
      {...props}
    >
      <div
        data-slot="scroll-area-viewport"
        className={cn(...xforkScrollAreaStyles.viewport)}
      >
        {children}
      </div>
    </UiScrollArea.ScrollArea>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof UiScrollArea.ScrollBar>) {
  return (
    <UiScrollArea.ScrollBar
      orientation={orientation}
      className={cn(
        ...xforkScrollAreaStyles.scrollbar,
        className
      )}
      {...props}
    />
  )
}

export { ScrollArea, ScrollBar, xforkScrollAreaStyles }
export * from "@/components/ui/scroll-area"
