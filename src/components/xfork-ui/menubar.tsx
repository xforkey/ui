"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  Menubar as UIMenubar,
  MenubarPortal as UIMenubarPortal,
  MenubarMenu as UIMenubarMenu,
  MenubarTrigger as UIMenubarTrigger,
  MenubarContent as UIMenubarContent,
  MenubarGroup as UIMenubarGroup,
  MenubarSeparator as UIMenubarSeparator,
  MenubarLabel as UIMenubarLabel,
  MenubarItem as UIMenubarItem,
  MenubarShortcut as UIMenubarShortcut,
  MenubarCheckboxItem as UIMenubarCheckboxItem,
  MenubarRadioGroup as UIMenubarRadioGroup,
  MenubarRadioItem as UIMenubarRadioItem,
  MenubarSub as UIMenubarSub,
  MenubarSubTrigger as UIMenubarSubTrigger,
  MenubarSubContent as UIMenubarSubContent,
} from "@/components/ui/menubar"

// xfork-specific styling
const xforkMenubarItemStyles = cn(
  "dark:focus:inset-ring-1 dark:focus:ring-accent-foreground"
)

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubar>) {
  return (
    <UIMenubar
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof UIMenubarMenu>) {
  return (
    <UIMenubarMenu
      {...props}
    />
  )
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof UIMenubarGroup>) {
  return (
    <UIMenubarGroup
      {...props}
    />
  )
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof UIMenubarPortal>) {
  return (
    <UIMenubarPortal
      {...props}
    />
  )
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof UIMenubarRadioGroup>) {
  return (
    <UIMenubarRadioGroup
      {...props}
    />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarTrigger>) {
  return (
    <UIMenubarTrigger
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarContent>) {
  return (
    <UIMenubarContent
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarItem({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarItem>) {
  return (
    <UIMenubarItem
      className={cn(xforkMenubarItemStyles, className)}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarCheckboxItem>) {
  return (
    <UIMenubarCheckboxItem
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarRadioItem>) {
  return (
    <UIMenubarRadioItem
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarLabel({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarLabel>) {
  return (
    <UIMenubarLabel
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarSeparator>) {
  return (
    <UIMenubarSeparator
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarShortcut>) {
  return (
    <UIMenubarShortcut
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof UIMenubarSub>) {
  return (
    <UIMenubarSub
      {...props}
    />
  )
}

function MenubarSubTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarSubTrigger>) {
  return (
    <UIMenubarSubTrigger
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof UIMenubarSubContent>) {
  return (
    <UIMenubarSubContent
      className={cn(className)}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
