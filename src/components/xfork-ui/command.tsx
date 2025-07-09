"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  Command as UICommand,
  CommandDialog as UICommandDialog,
  CommandInput as UICommandInput,
  CommandList as UICommandList,
  CommandEmpty as UICommandEmpty,
  CommandGroup as UICommandGroup,
  CommandItem as UICommandItem,
  CommandShortcut as UICommandShortcut,
  CommandSeparator as UICommandSeparator,
} from "@/components/ui/command"

// xfork-specific styling
const xforkCommandStyles = cn(
  "backdrop-blur-lg"
)

const xforkCommandItemStyles = cn(
  // Enhanced selected state for SVG icons
  "data-[selected=true]:[&_svg:not([class*='text-'])]:text-accent-foreground",
  // Enhanced selected state for shortcuts
  "data-[selected=true]:[&_[data-slot=command-shortcut]]:text-accent-foreground",
  // Dark mode ring styling
  "dark:data-[selected=true]:inset-ring-1 dark:data-[selected=true]:ring-accent-foreground"
)

function Command({
  className,
  ...props
}: React.ComponentProps<typeof UICommand>) {
  return (
    <UICommand
      className={cn(xforkCommandStyles, className)}
      {...props}
    />
  )
}

function CommandDialog({
  className,
  ...props
}: React.ComponentProps<typeof UICommandDialog>) {
  return (
    <UICommandDialog
      className={cn(className)}
      {...props}
    />
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof UICommandInput>) {
  return (
    <UICommandInput
      className={cn(className)}
      {...props}
    />
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof UICommandList>) {
  return (
    <UICommandList
      className={cn(className)}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof UICommandEmpty>) {
  return (
    <UICommandEmpty
      className={cn(className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof UICommandGroup>) {
  return (
    <UICommandGroup
      className={cn(className)}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof UICommandSeparator>) {
  return (
    <UICommandSeparator
      className={cn(className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof UICommandItem>) {
  return (
    <UICommandItem
      className={cn(xforkCommandItemStyles, className)}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<typeof UICommandShortcut>) {
  return (
    <UICommandShortcut
      className={cn(className)}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
