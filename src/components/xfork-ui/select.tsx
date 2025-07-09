"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  Select as UISelect,
  SelectContent as UISelectContent,
  SelectGroup as UISelectGroup,
  SelectItem as UISelectItem,
  SelectLabel as UISelectLabel,
  SelectScrollDownButton as UISelectScrollDownButton,
  SelectScrollUpButton as UISelectScrollUpButton,
  SelectSeparator as UISelectSeparator,
  SelectTrigger as UISelectTrigger,
  SelectValue as UISelectValue,
} from "@/components/ui/select"

// xfork-specific styling
const xforkSelectTriggerStyles = cn(
  // Border changes
  "border-foreground/10 hover:border-foreground/20",
  // Background changes
  "dark:bg-white/5",
  // Text color changes
  "data-[placeholder]:text-foreground backdrop-blur-sm"
)

const xforkSelectContentStyles = cn(
  // Background changes
  "backdrop-blur-lg",
  // Animation changes
  "dropdown-motion",
  // Position-specific styles
  "side-offset"
)

const xforkSelectItemStyles = cn(
  // Focus state changes
  "portal-item"
)

const xforkSelectLabelStyles = cn(
  // Font weight addition
  "font-medium"
)

function Select({
  ...props
}: React.ComponentProps<typeof UISelect>) {
  return (
    <UISelect
      {...props}
    />
  )
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof UISelectGroup>) {
  return (
    <UISelectGroup
      {...props}
    />
  )
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof UISelectValue>) {
  return (
    <UISelectValue
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UISelectTrigger>) {
  return (
    <UISelectTrigger
      className={cn(xforkSelectTriggerStyles, className)}
      {...props}
    />
  )
}

function SelectContent({
  className,
  position = "popper",
  ...props
}: React.ComponentProps<typeof UISelectContent>) {
  return (
    <UISelectContent
      className={cn(xforkSelectContentStyles, className)}
      position={position}
      {...props}
    />
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof UISelectLabel>) {
  return (
    <UISelectLabel
      className={cn(xforkSelectLabelStyles, className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  ...props
}: React.ComponentProps<typeof UISelectItem>) {
  return (
    <UISelectItem
      className={cn(xforkSelectItemStyles, className)}
      {...props}
    />
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof UISelectSeparator>) {
  return (
    <UISelectSeparator
      className={cn(className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof UISelectScrollUpButton>) {
  return (
    <UISelectScrollUpButton
      className={cn(className)}
      {...props}
    />
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof UISelectScrollDownButton>) {
  return (
    <UISelectScrollDownButton
      className={cn(className)}
      {...props}
    />
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
