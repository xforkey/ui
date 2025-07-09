"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  Dialog as UIDialog,
  DialogClose as UIDialogClose,
  DialogContent as UIDialogContent,
  DialogDescription as UIDialogDescription,
  DialogFooter as UIDialogFooter,
  DialogHeader as UIDialogHeader,
  DialogOverlay as UIDialogOverlay,
  DialogPortal as UIDialogPortal,
  DialogTitle as UIDialogTitle,
  DialogTrigger as UIDialogTrigger,
} from "@/components/ui/dialog"

// xfork-specific styling
const xforkDialogOverlayStyles = cn(
  "bg-black/60 backdrop-blur-xs"
)

const xforkDialogContentStyles = cn(
  "bg-background/60 backdrop-blur-lg",
  "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
  "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
)

const xforkDialogHeaderStyles = cn(
  "space-y-1.5"
)

const xforkDialogFooterStyles = cn(
  "sm:space-x-2"
)

const xforkDialogTitleStyles = cn(
  "tracking-tight"
)

function Dialog({
  ...props
}: React.ComponentProps<typeof UIDialog>) {
  return (
    <UIDialog
      {...props}
    />
  )
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof UIDialogTrigger>) {
  return (
    <UIDialogTrigger
      {...props}
    />
  )
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof UIDialogPortal>) {
  return (
    <UIDialogPortal
      {...props}
    />
  )
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof UIDialogClose>) {
  return (
    <UIDialogClose
      {...props}
    />
  )
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof UIDialogOverlay>) {
  return (
    <UIDialogOverlay
      className={cn(xforkDialogOverlayStyles, className)}
      {...props}
    />
  )
}

function DialogContent({
  className,
  ...props
}: React.ComponentProps<typeof UIDialogContent>) {
  return (
    <UIDialogContent
      className={cn(xforkDialogContentStyles, className)}
      {...props}
    />
  )
}

function DialogHeader({
  className,
  ...props
}: React.ComponentProps<typeof UIDialogHeader>) {
  return (
    <UIDialogHeader
      className={cn(xforkDialogHeaderStyles, className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  ...props
}: React.ComponentProps<typeof UIDialogFooter>) {
  return (
    <UIDialogFooter
      className={cn(xforkDialogFooterStyles, className)}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof UIDialogTitle>) {
  return (
    <UIDialogTitle
      className={cn(xforkDialogTitleStyles, className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof UIDialogDescription>) {
  return (
    <UIDialogDescription
      className={cn(className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
