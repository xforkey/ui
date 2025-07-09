import * as React from "react"
import * as UiDropdownMenu from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// Styles needed to transform UI dropdown-menu to match xfork-ui appearance
const xforkDropdownMenuStyles = {
  base: [
    // No specific differences identified
  ],

  portal: [
    // No specific differences identified
  ],

  trigger: [
    // No specific differences identified
  ],

  content: [
    // No specific differences identified
  ],

  group: [
    // No specific differences identified
  ],

  item: [
    // No specific differences identified
  ],

  checkboxItem: [
    // No specific differences identified
  ],

  radioGroup: [
    // No specific differences identified
  ],

  radioItem: [
    // No specific differences identified
  ],

  label: [
    // No specific differences identified
  ],

  separator: [
    // No specific differences identified
  ],

  shortcut: [
    // No specific differences identified
  ],

  sub: [
    // No specific differences identified
  ],

  subTrigger: [
    // No specific differences identified
  ],

  subContent: [
    // No specific differences identified
  ]
}

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenu>) {
  return (
    <UiDropdownMenu.DropdownMenu
      data-slot="dropdown-menu"
      {...props}
    />
  )
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuPortal>) {
  return (
    <UiDropdownMenu.DropdownMenuPortal
      data-slot="dropdown-menu-portal"
      {...props}
    />
  )
}

function DropdownMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuTrigger>) {
  return (
    <UiDropdownMenu.DropdownMenuTrigger
      data-slot="dropdown-menu-trigger"
      className={cn(
        ...xforkDropdownMenuStyles.trigger,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuContent>) {
  return (
    <UiDropdownMenu.DropdownMenuContent
      data-slot="dropdown-menu-content"
      className={cn(
        ...xforkDropdownMenuStyles.content,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuGroup({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuGroup>) {
  return (
    <UiDropdownMenu.DropdownMenuGroup
      data-slot="dropdown-menu-group"
      className={cn(
        ...xforkDropdownMenuStyles.group,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuItem>) {
  return (
    <UiDropdownMenu.DropdownMenuItem
      data-slot="dropdown-menu-item"
      className={cn(
        ...xforkDropdownMenuStyles.item,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuCheckboxItem>) {
  return (
    <UiDropdownMenu.DropdownMenuCheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        ...xforkDropdownMenuStyles.checkboxItem,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuRadioGroup>) {
  return (
    <UiDropdownMenu.DropdownMenuRadioGroup
      data-slot="dropdown-menu-radio-group"
      className={cn(
        ...xforkDropdownMenuStyles.radioGroup,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuRadioItem>) {
  return (
    <UiDropdownMenu.DropdownMenuRadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        ...xforkDropdownMenuStyles.radioItem,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuLabel>) {
  return (
    <UiDropdownMenu.DropdownMenuLabel
      data-slot="dropdown-menu-label"
      className={cn(
        ...xforkDropdownMenuStyles.label,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuSeparator>) {
  return (
    <UiDropdownMenu.DropdownMenuSeparator
      data-slot="dropdown-menu-separator"
      className={cn(
        ...xforkDropdownMenuStyles.separator,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuShortcut>) {
  return (
    <UiDropdownMenu.DropdownMenuShortcut
      data-slot="dropdown-menu-shortcut"
      className={cn(
        ...xforkDropdownMenuStyles.shortcut,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuSub>) {
  return (
    <UiDropdownMenu.DropdownMenuSub
      data-slot="dropdown-menu-sub"
      {...props}
    />
  )
}

function DropdownMenuSubTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuSubTrigger>) {
  return (
    <UiDropdownMenu.DropdownMenuSubTrigger
      data-slot="dropdown-menu-sub-trigger"
      className={cn(
        ...xforkDropdownMenuStyles.subTrigger,
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof UiDropdownMenu.DropdownMenuSubContent>) {
  return (
    <UiDropdownMenu.DropdownMenuSubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        ...xforkDropdownMenuStyles.subContent,
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  xforkDropdownMenuStyles
}
export * from "@/components/ui/dropdown-menu"
