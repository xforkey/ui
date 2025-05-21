"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronsUpDownIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/*
Color Variables Used:
  SelectTrigger: border-input, data-[placeholder]:text-muted-foreground, [&_svg:not([class*='text-'])]:text-muted-foreground,
                focus-visible:border-ring, focus-visible:ring-ring/50, aria-invalid:ring-destructive/20,
                dark:aria-invalid:ring-destructive/40, aria-invalid:border-destructive, bg-transparent
  SelectContent: bg-popover, text-popover-foreground
  SelectItem: focus:bg-accent, focus:text-accent-foreground, [&_svg:not([class*='text-'])]:text-muted-foreground
  SelectSeparator: bg-border
*/

// Select Component
function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

// SelectGroup Component
function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

// SelectValue Component
function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

// SelectTrigger Component
function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        // Layout
        "flex w-full items-center justify-between",
        "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        "[&_svg]:shrink-0",

        // Base Styles
        "h-9 rounded-md px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",

        // Border
        'border border-foreground/10 hover:border-foreground/20 focus-visible:border-ring',

        // Colors
        "bg-transparent dark:bg-white/5 ",
        "data-[placeholder]:text-foreground [&_svg:not([class*='text-'])]:text-muted-foreground backdrop-blur-sm",

        // Focus Styles
        "focus-visible:ring-ring/50 focus-visible:ring-[3px]",

        // Validation/Error Styles
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

        // Disabled State
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronsUpDownIcon className="size-5 stroke-muted-foreground group-has-data-disabled:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

// SelectContent Component
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          // Layout
          "relative z-50",

          // Base Styles
          "max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",

          // Colors
          "bg-popover backdrop-blur-lg text-popover-foreground",

          // Animation
          "dropdown-motion",

          // Position-specific styles
          position === "popper" && "side-offset",

          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            // Base Styles
            "p-1",

            // Position-specific styles
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

// SelectLabel Component
function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        // Base Styles
        "px-2 py-1.5 text-sm font-medium",

        className
      )}
      {...props}
    />
  )
}

// SelectItem Component
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Layout
        "relative flex w-full items-center gap-2",
        "*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        "[&_svg]:shrink-0",

        // Base Styles
        "cursor-default rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",

        // Focus State
        "focus:bg-accent focus:text-accent-foreground",
        "focus:inset-ring-1",

        // Icon Color
        "[&_svg:not([class*='text-'])]:text-muted-foreground",

        // Disabled State
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

        className
      )}
      {...props}
    >
      <span className={cn(
        // Layout
        "absolute right-2 flex items-center justify-center",

        // Base Styles
        "size-3.5"
      )}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

// SelectSeparator Component
function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        // Layout
        "pointer-events-none -mx-1 my-1 h-px",

        // Colors
        "bg-border",

        className
      )}
      {...props}
    />
  )
}

// SelectScrollUpButton Component
function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        // Layout
        "flex items-center justify-center",

        // Base Styles
        "cursor-default py-1",

        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

// SelectScrollDownButton Component
function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        // Layout
        "flex items-center justify-center",

        // Base Styles
        "cursor-default py-1",

        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
