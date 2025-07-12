"use client"

import * as React from "react"
import * as UiForm from "@/components/ui/form"
import { cn } from "@/lib/utils"

// Styles needed to transform UI form to match xfork-ui appearance
const xforkFormStyles = {
  label: [
    // Text color difference - UI uses text-destructive, xfork uses text-destructive-foreground
    "data-[error=true]:text-destructive-foreground",
  ],

  message: [
    // Text color difference - UI uses text-destructive, xfork uses text-destructive-foreground
    "text-destructive-foreground",
  ]
}

const Form = UiForm.Form

const FormField = UiForm.FormField

const useFormField = UiForm.useFormField

function FormItem({
  className,
  ...props
}: React.ComponentProps<typeof UiForm.FormItem>) {
  return (
    <UiForm.FormItem
      className={cn(className)}
      {...props}
    />
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof UiForm.FormLabel>) {
  return (
    <UiForm.FormLabel
      className={cn(
        ...xforkFormStyles.label,
        className
      )}
      {...props}
    />
  )
}

function FormControl({
  ...props
}: React.ComponentProps<typeof UiForm.FormControl>) {
  return (
    <UiForm.FormControl
      {...props}
    />
  )
}

function FormDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiForm.FormDescription>) {
  return (
    <UiForm.FormDescription
      className={cn(className)}
      {...props}
    />
  )
}

function FormMessage({
  className,
  ...props
}: React.ComponentProps<typeof UiForm.FormMessage>) {
  return (
    <UiForm.FormMessage
      className={cn(
        ...xforkFormStyles.message,
        className
      )}
      {...props}
    />
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  xforkFormStyles
}
export * from "@/components/ui/form"
