"use client"

import * as React from "react"
import * as UiRadioGroup from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

// Styles needed to transform UI radio-group to match xfork-ui appearance
const xforkRadioGroupStyles = {
  base: [
    // Same styling as UI
  ],

  item: [
    // Layout differences - UI uses basic styling, xfork uses complex layered approach
    "relative isolate flex aspect-square size-4 shrink-0 items-center justify-center rounded-full",
    // Background layer with shadow
    "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white before:shadow-sm",
    // Border styling
    "border border-input",
    // Checked state styling
    "data-[state=checked]:before:bg-primary data-[state=checked]:border-transparent data-[state=checked]:border-primary/90",
    // Dark mode styling
    "dark:before:hidden dark:bg-white/5 dark:data-[state=checked]:bg-primary",
    "dark:border-white/15 dark:data-[state=checked]:border-white/5 dark:hover:data-[state=checked]:border-white/5 dark:hover:border-white/30",
    // Inner highlight shadow
    "after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_theme(--color-white/15%)]",
    "dark:after:-inset-px dark:after:hidden dark:after:rounded-full dark:data-[state=checked]:after:block",
    // Focus state
    "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ring",
    // Disabled state
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],

  indicator: [
    // Custom indicator styling
    "relative flex items-center justify-center",
  ]
}

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof UiRadioGroup.RadioGroup>) {
  return (
    <UiRadioGroup.RadioGroup
      className={cn(
        ...xforkRadioGroupStyles.base,
        className
      )}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof UiRadioGroup.RadioGroupItem>) {
  return (
    <UiRadioGroup.RadioGroupItem
      className={cn(
        ...xforkRadioGroupStyles.item,
        className
      )}
      {...props}
    >
      <div
        data-slot="radio-group-indicator"
        className={cn(...xforkRadioGroupStyles.indicator)}
      >
        <span
          className="size-2 rounded-full bg-primary-foreground"
          aria-hidden="true"
        />
      </div>
    </UiRadioGroup.RadioGroupItem>
  )
}

export { RadioGroup, RadioGroupItem, xforkRadioGroupStyles }
export * from "@/components/ui/radio-group"
