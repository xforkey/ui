"use client"

import * as React from "react"
import * as UiSonner from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

// Styles needed to transform UI sonner to match xfork-ui appearance
const xforkSonnerStyles = {
  base: [
    // Same styling as UI
  ]
}

const Toaster = ({
  ...props
}: React.ComponentProps<typeof UiSonner.Toaster>) => {
  return (
    <UiSonner.Toaster
      className={cn(
        ...xforkSonnerStyles.base,
        "toaster group"
      )}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, xforkSonnerStyles }
export * from "@/components/ui/sonner"
