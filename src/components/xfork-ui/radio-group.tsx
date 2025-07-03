"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        // Basic layout
        "relative isolate flex aspect-square size-4 shrink-0 items-center justify-center rounded-full",
        // Background and border
        "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white before:shadow-sm",
        "border border-input",
        // Checked state
        "data-[state=checked]:before:bg-primary data-[state=checked]:border-transparent data-[state=checked]:border-primary/90",
        // Dark mode
        "dark:before:hidden dark:bg-white/5 dark:data-[state=checked]:bg-primary",
        "dark:border-white/15 dark:data-[state=checked]:border-white/5 dark:hover:data-[state=checked]:border-white/5 dark:hover:border-white/30",
        // Inner highlight shadow
        "after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_theme(--color-white/15%)]",
        "dark:after:-inset-px dark:after:hidden dark:after:rounded-full dark:data-[state=checked]:after:block",
        // Focus state
        "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ring",
        // Disabled state
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <span
          className="size-2 rounded-full bg-primary-foreground"
          aria-hidden="true"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
