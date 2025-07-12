"use client"

import * as React from "react"
import * as UiToggle from "@/components/ui/toggle"
import { cn } from "@/lib/utils"
import { type VariantProps } from "class-variance-authority"

// Styles needed to transform UI toggle to match xfork-ui appearance
const xforkToggleStyles = [
  // Remove whitespace-nowrap that UI has but xfork doesn't
  "[&]:whitespace-normal"
]

const Toggle = React.forwardRef<
  React.ElementRef<typeof UiToggle.Toggle>,
  React.ComponentPropsWithoutRef<typeof UiToggle.Toggle>
>(({ className, ...props }, ref) => {
  return (
    <UiToggle.Toggle
      ref={ref}
      className={cn(
        ...xforkToggleStyles,
        className
      )}
      {...props}
    />
  )
})

Toggle.displayName = "Toggle"

export { Toggle, xforkToggleStyles }
export * from "@/components/ui/toggle"
