"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

/*
Color Variables Used:
  Checkbox: border-input, data-[state=checked]:bg-primary, data-[state=checked]:text-primary-foreground,
            data-[state=checked]:border-primary, focus-visible:border-ring, focus-visible:ring-ring/50,
            aria-invalid:ring-destructive/20, dark:aria-invalid:ring-destructive/40, aria-invalid:border-destructive
*/

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Size
        "size-4 shrink-0",

        // Base Styles
        "rounded-[4px] border shadow-xs outline-none",

        // Colors
        "border-border",

        // Checked State
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",

        // Focus Styles
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

        // Validation/Error Styles
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

        // Transition
        "transition-shadow",

        // Disabled State
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Peer Styles
        "peer",

        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          // Layout
          "flex items-center justify-center",

          // Text
          "text-current",

          // Transition
          "transition-none"
        )}
      >
        <CheckIcon className="size-3.5 " />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
