import * as UiSidebar from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

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
    <UiSidebar.Sidebar
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
    </UiSidebar.Sidebar>
  )
}


function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <UiSidebar.SidebarMenuSub
      className={cn(
        "relative pl-[8px]",
        className
      )}
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
    <UiSidebar.SidebarMenuSubButton
      className={cn(
        "data-[active=true]:bg-transparent data-[active=true]:text-sidebar-foreground",
        "text-sidebar-accent-foreground",
        "hover:bg-transparent hover:text-sidebar-foreground",
        "relative flex items-center z-1",
        className
      )}
      {...props}
    />
  )
}

export { Sidebar, SidebarMenuSub, SidebarMenuSubButton };
export * from "@/components/ui/sidebar";
