"use client"

import * as React from "react"
import * as UiSheet from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Styles needed to transform UI sheet to match xfork-ui appearance
const xforkSheetStyles = {
  base: [
    // Same styling as UI
  ],

  trigger: [
    // Same styling as UI
  ],

  close: [
    // Same styling as UI
  ],

  portal: [
    // Same styling as UI
  ],

  overlay: [
    // Background opacity difference - UI uses bg-black/50, xfork uses bg-black/80
    "bg-black/80",
  ],

  content: [
    // Same styling as UI
  ],

  header: [
    // Same styling as UI
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

function Sheet({
  ...props
}: React.ComponentProps<typeof UiSheet.Sheet>) {
  return (
    <UiSheet.Sheet
      {...props}
    />
  )
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof UiSheet.SheetTrigger>) {
  return (
    <UiSheet.SheetTrigger
      {...props}
    />
  )
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof UiSheet.SheetClose>) {
  return (
    <UiSheet.SheetClose
      {...props}
    />
  )
}

function SheetContent({
  className,
  ...props
}: React.ComponentProps<typeof UiSheet.SheetContent>) {
  return (
    <UiSheet.SheetContent
      className={cn(
        ...xforkSheetStyles.content,
        className
      )}
      {...props}
    />
  )
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<typeof UiSheet.SheetHeader>) {
  return (
    <UiSheet.SheetHeader
      className={cn(
        ...xforkSheetStyles.header,
        className
      )}
      {...props}
    />
  )
}

function SheetFooter({
  className,
  ...props
}: React.ComponentProps<typeof UiSheet.SheetFooter>) {
  return (
    <UiSheet.SheetFooter
      className={cn(
        ...xforkSheetStyles.footer,
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof UiSheet.SheetTitle>) {
  return (
    <UiSheet.SheetTitle
      className={cn(
        ...xforkSheetStyles.title,
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiSheet.SheetDescription>) {
  return (
    <UiSheet.SheetDescription
      className={cn(
        ...xforkSheetStyles.description,
        className
      )}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  xforkSheetStyles
}
export * from "@/components/ui/sheet"
