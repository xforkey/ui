"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  soft = false,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  soft?: boolean
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        orientation === "horizontal" ? "h-px w-full border-t" : "h-full w-px border-l",
        soft ? "border-border/50 dark:border-white/5" : "border-border dark:border-white/10",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
