import * as React from "react"
import * as UiDrawer from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

// Styles needed to transform UI drawer to match xfork-ui appearance
const xforkDrawerStyles = {
  base: [
    // No specific differences identified
  ],

  trigger: [
    // No specific differences identified
  ],

  portal: [
    // No specific differences identified
  ],

  close: [
    // No specific differences identified
  ],

  overlay: [
    // Background opacity difference - UI uses bg-black/50, xfork uses bg-black/80
    "bg-black/80",
  ],

  content: [
    // Background difference - UI uses bg-background, xfork uses bg-popover with backdrop-blur-lg
    "bg-popover backdrop-blur-lg text-popover-foreground",
    // Remove border classes that UI has
    "border-0",
  ],

  header: [
    // Layout difference - UI has responsive text alignment, xfork uses simple flex layout
    "flex flex-col gap-1.5 p-4",
  ],

  footer: [
    // Same styling as UI
  ],

  title: [
    // Same styling as UI
  ],

  description: [
    // Same styling as UI
  ]
}

function Drawer({
  ...props
}: React.ComponentProps<typeof UiDrawer.Drawer>) {
  return (
    <UiDrawer.Drawer
      data-slot="drawer"
      {...props}
    />
  )
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerTrigger>) {
  return (
    <UiDrawer.DrawerTrigger
      data-slot="drawer-trigger"
      {...props}
    />
  )
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerPortal>) {
  return (
    <UiDrawer.DrawerPortal
      data-slot="drawer-portal"
      {...props}
    />
  )
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerClose>) {
  return (
    <UiDrawer.DrawerClose
      data-slot="drawer-close"
      {...props}
    />
  )
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerOverlay>) {
  return (
    <UiDrawer.DrawerOverlay
      data-slot="drawer-overlay"
      className={cn(
        ...xforkDrawerStyles.overlay,
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerContent>) {
  return (
    <UiDrawer.DrawerContent
      data-slot="drawer-content"
      className={cn(
        ...xforkDrawerStyles.content,
        className
      )}
      {...props}
    />
  )
}

function DrawerHeader({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerHeader>) {
  return (
    <UiDrawer.DrawerHeader
      data-slot="drawer-header"
      className={cn(
        ...xforkDrawerStyles.header,
        className
      )}
      {...props}
    />
  )
}

function DrawerFooter({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerFooter>) {
  return (
    <UiDrawer.DrawerFooter
      data-slot="drawer-footer"
      className={cn(
        ...xforkDrawerStyles.footer,
        className
      )}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerTitle>) {
  return (
    <UiDrawer.DrawerTitle
      data-slot="drawer-title"
      className={cn(
        ...xforkDrawerStyles.title,
        className
      )}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiDrawer.DrawerDescription>) {
  return (
    <UiDrawer.DrawerDescription
      data-slot="drawer-description"
      className={cn(
        ...xforkDrawerStyles.description,
        className
      )}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  xforkDrawerStyles
}
export * from "@/components/ui/drawer"
