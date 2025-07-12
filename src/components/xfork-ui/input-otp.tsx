"use client"

import * as React from "react"
import * as UiInputOTP from "@/components/ui/input-otp"
import { cn } from "@/lib/utils"

// Styles needed to transform UI input-otp to match xfork-ui appearance
const xforkInputOTPStyles = {
  base: [
    // More extensive disabled styles than UI
    "disabled:cursor-not-allowed disabled:border-background/20 dark:disabled:border-white/15 dark:disabled:bg-white/[2.5%] dark:hover:disabled:border-white/15",
  ],

  slot: [
    // Border and background differences
    "border-border hover:border-border-hover bg-input text-foreground",
    // Border radius difference - UI uses rounded-l-md/rounded-r-md, xfork uses rounded-l-lg/rounded-r-lg
    "first:rounded-l-lg last:rounded-r-lg",
    // Disabled state differences
    "disabled:border-background/20 dark:disabled:border-white/15 dark:disabled:bg-white/[2.5%] dark:hover:disabled:border-white/15",
    // System icons
    "dark:[color-scheme:dark]",
  ]
}

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof UiInputOTP.InputOTP>) {
  return (
    <UiInputOTP.InputOTP
      containerClassName={cn(containerClassName)}
      className={cn(
        ...xforkInputOTPStyles.base,
        className
      )}
      {...props}
    />
  )
}

function InputOTPGroup({
  className,
  ...props
}: React.ComponentProps<typeof UiInputOTP.InputOTPGroup>) {
  return (
    <UiInputOTP.InputOTPGroup
      className={cn(className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  className,
  ...props
}: React.ComponentProps<typeof UiInputOTP.InputOTPSlot>) {
  return (
    <UiInputOTP.InputOTPSlot
      className={cn(
        ...xforkInputOTPStyles.slot,
        className
      )}
      {...props}
    />
  )
}

function InputOTPSeparator({
  ...props
}: React.ComponentProps<typeof UiInputOTP.InputOTPSeparator>) {
  return (
    <UiInputOTP.InputOTPSeparator
      {...props}
    />
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator, xforkInputOTPStyles }
export * from "@/components/ui/input-otp"
