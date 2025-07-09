"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  ContextMenu as UIContextMenu,
  ContextMenuTrigger as UIContextMenuTrigger,
  ContextMenuContent as UIContextMenuContent,
  ContextMenuItem as UIContextMenuItem,
  ContextMenuCheckboxItem as UIContextMenuCheckboxItem,
  ContextMenuRadioItem as UIContextMenuRadioItem,
  ContextMenuLabel as UIContextMenuLabel,
  ContextMenuSeparator as UIContextMenuSeparator,
  ContextMenuShortcut as UIContextMenuShortcut,
  ContextMenuGroup as UIContextMenuGroup,
  ContextMenuPortal as UIContextMenuPortal,
  ContextMenuSub as UIContextMenuSub,
  ContextMenuSubContent as UIContextMenuSubContent,
  ContextMenuSubTrigger as UIContextMenuSubTrigger,
  ContextMenuRadioGroup as UIContextMenuRadioGroup,
} from "@/components/ui/context-menu"

// xfork-specific styling
const xforkContextMenuContentStyles = cn(
  "backdrop-blur-lg",
  "dropdown-motion"
)

const xforkContextMenuSubContentStyles = cn(
  "dropdown-motion"
)

const xforkContextMenuSubTriggerStyles = cn(
  "dark:focus:inset-ring-1 dark:focus:ring-accent-foreground"
)

const xforkContextMenuItemStyles = cn(
  "focus:inset-ring-1 focus:ring-accent-foreground",
  "focus:[&_[data-slot=context-menu-shortcut]]:text-accent-foreground",
  "data-[variant=destructive]:text-destructive-foreground",
  "data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40",
  "data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground"
)

const xforkContextMenuCheckboxItemStyles = cn(
  "focus:inset-ring-1 focus:ring-accent-foreground"
)

const xforkContextMenuRadioItemStyles = cn(
  "focus:inset-ring-1 focus:ring-accent-foreground"
)

function ContextMenu({
  ...props
}: React.ComponentProps<typeof UIContextMenu>) {
  return (
    <UIContextMenu
      {...props}
    />
  )
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof UIContextMenuTrigger>) {
  return (
    <UIContextMenuTrigger
      {...props}
    />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof UIContextMenuGroup>) {
  return (
    <UIContextMenuGroup
      {...props}
    />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof UIContextMenuPortal>) {
  return (
    <UIContextMenuPortal
      {...props}
    />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof UIContextMenuSub>) {
  return (
    <UIContextMenuSub
      {...props}
    />
  )
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof UIContextMenuRadioGroup>) {
  return (
    <UIContextMenuRadioGroup
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuSubTrigger>) {
  return (
    <UIContextMenuSubTrigger
      className={cn(xforkContextMenuSubTriggerStyles, className)}
      {...props}
    />
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuSubContent>) {
  return (
    <UIContextMenuSubContent
      className={cn(xforkContextMenuSubContentStyles, className)}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuContent>) {
  return (
    <UIContextMenuContent
      className={cn(xforkContextMenuContentStyles, className)}
      {...props}
    />
  )
}

function ContextMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuItem>) {
  return (
    <UIContextMenuItem
      className={cn(xforkContextMenuItemStyles, className)}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuCheckboxItem>) {
  return (
    <UIContextMenuCheckboxItem
      className={cn(xforkContextMenuCheckboxItemStyles, className)}
      {...props}
    />
  )
}

function ContextMenuRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuRadioItem>) {
  return (
    <UIContextMenuRadioItem
      className={cn(xforkContextMenuRadioItemStyles, className)}
      {...props}
    />
  )
}

function ContextMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuLabel>) {
  return (
    <UIContextMenuLabel
      className={cn(className)}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuSeparator>) {
  return (
    <UIContextMenuSeparator
      className={cn(className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<typeof UIContextMenuShortcut>) {
  return (
    <UIContextMenuShortcut
      className={cn(className)}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
