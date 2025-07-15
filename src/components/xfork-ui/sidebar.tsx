"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import {
  Sidebar as UiSidebar,
  SidebarContent as UiSidebarContent,
  SidebarFooter as UiSidebarFooter,
  SidebarGroup as UiSidebarGroup,
  SidebarGroupAction as UiSidebarGroupAction,
  SidebarGroupContent as UiSidebarGroupContent,
  SidebarGroupLabel as UiSidebarGroupLabel,
  SidebarHeader as UiSidebarHeader,
  SidebarInput as UiSidebarInput,
  SidebarInset as UiSidebarInset,
  SidebarMenu as UiSidebarMenu,
  SidebarMenuAction as UiSidebarMenuAction,
  SidebarMenuBadge as UiSidebarMenuBadge,
  SidebarMenuButton as UiSidebarMenuButton,
  SidebarMenuItem as UiSidebarMenuItem,
  SidebarMenuSkeleton as UiSidebarMenuSkeleton,
  SidebarMenuSub as UiSidebarMenuSub,
  SidebarMenuSubButton as UiSidebarMenuSubButton,
  SidebarMenuSubItem as UiSidebarMenuSubItem,
  SidebarProvider as UiSidebarProvider,
  SidebarRail as UiSidebarRail,
  SidebarSeparator as UiSidebarSeparator,
  SidebarTrigger as UiSidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/xfork-ui/button"
import { Input } from "@/components/xfork-ui/input"
import { Separator } from "@/components/ui/separator"
import {
  TooltipContent,
} from "@/components/ui/tooltip"

// Import the variants from the original file
const sidebarMenuButtonVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  return (
    <UiSidebarProvider
      defaultOpen={defaultOpen}
      open={openProp}
      onOpenChange={setOpenProp}
      className={cn(className)}
      style={style}
      {...props}
    >
      {children}
    </UiSidebarProvider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  return (
    <UiSidebar
      className={cn(
        "group-data-[side=left]:border-0 group-data-[side=right]:border-0",
        className
      )}
      side={side}
      variant={variant}
      collapsible={collapsible}
      {...props}
    >
      {children}
    </UiSidebar>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <UiSidebarTrigger
      className={cn(className)}
      onClick={onClick}
      {...props}
    />
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <UiSidebarRail
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <UiSidebarInset
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <UiSidebarInput
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <UiSidebarHeader
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <UiSidebarFooter
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <UiSidebarSeparator
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <UiSidebarContent
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <UiSidebarGroup
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  return (
    <UiSidebarGroupLabel
      className={cn(className)}
      asChild={asChild}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  return (
    <UiSidebarGroupAction
      className={cn(className)}
      asChild={asChild}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <UiSidebarGroupContent
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <UiSidebarMenu
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <UiSidebarMenuItem
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  return (
    <UiSidebarMenuButton
      asChild={asChild}
      isActive={isActive}
      variant={variant}
      size={size}
      tooltip={tooltip}
      className={cn(sidebarMenuButtonVariants({ variant, size }), "hover:text-sidebar-foreground data-[state=open]:hover:text-sidebar-foreground", className)}
      {...props}
    />
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  return (
    <UiSidebarMenuAction
      className={cn(className)}
      asChild={asChild}
      showOnHover={showOnHover}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <UiSidebarMenuBadge
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  return (
    <UiSidebarMenuSkeleton
      className={cn(className)}
      showIcon={showIcon}
      {...props}
    />
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <UiSidebarMenuSub
      className={cn(
        "relative pl-[8px]",
        className
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <UiSidebarMenuSubItem
      className={cn(className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
}) {
  return (
    <UiSidebarMenuSubButton
      className={cn(
        "data-[active=true]:bg-transparent data-[active=true]:text-sidebar-foreground",
        "text-sidebar-accent-foreground",
        "hover:bg-transparent hover:text-sidebar-foreground",
        "relative flex items-center z-1",
        className
      )}
      asChild={asChild}
      size={size}
      isActive={isActive}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInput,
  SidebarInset,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
