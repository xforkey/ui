"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Import UI components
import {
  AlertDialog as UIAlertDialog,
  AlertDialogPortal as UIAlertDialogPortal,
  AlertDialogOverlay as UIAlertDialogOverlay,
  AlertDialogTrigger as UIAlertDialogTrigger,
  AlertDialogContent as UIAlertDialogContent,
  AlertDialogHeader as UIAlertDialogHeader,
  AlertDialogFooter as UIAlertDialogFooter,
  AlertDialogTitle as UIAlertDialogTitle,
  AlertDialogDescription as UIAlertDialogDescription,
  AlertDialogAction as UIAlertDialogAction,
  AlertDialogCancel as UIAlertDialogCancel,
} from "@/components/ui/alert-dialog"

// xfork-specific styling
const xforkAlertDialogOverlayStyles = cn(
  "bg-black/80"
)

const xforkAlertDialogContentStyles = cn(
  "bg-popover backdrop-blur-lg text-popover-foreground"
)

function AlertDialog({
  ...props
}: React.ComponentProps<typeof UIAlertDialog>) {
  return (
    <UIAlertDialog
      {...props}
    />
  )
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof UIAlertDialogTrigger>) {
  return (
    <UIAlertDialogTrigger
      {...props}
    />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof UIAlertDialogPortal>) {
  return (
    <UIAlertDialogPortal
      {...props}
    />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogOverlay>) {
  return (
    <UIAlertDialogOverlay
      className={cn(xforkAlertDialogOverlayStyles, className)}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogContent>) {
  return (
    <UIAlertDialogContent
      className={cn(xforkAlertDialogContentStyles, className)}
      {...props}
    />
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogHeader>) {
  return (
    <UIAlertDialogHeader
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogFooter>) {
  return (
    <UIAlertDialogFooter
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogTitle>) {
  return (
    <UIAlertDialogTitle
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogDescription>) {
  return (
    <UIAlertDialogDescription
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogAction>) {
  return (
    <UIAlertDialogAction
      className={cn(className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof UIAlertDialogCancel>) {
  return (
    <UIAlertDialogCancel
      className={cn(className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
