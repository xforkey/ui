import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  cn(
    // Layout
    "inline-flex items-center justify-center gap-2",

    // Base Styles
    "whitespace-nowrap rounded-md text-sm font-medium",

    // Icon Styles
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",

    // Transition
    "transition-all",

    // Disabled State
    "disabled:pointer-events-none disabled:opacity-50",

    // Focus Styles
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

    // Validation States
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
  ),
  {
    variants: {
      variant: {
        default: cn(
          // Background and text
          "bg-primary text-primary-foreground",
          // Shadow
          "shadow-xs",
          // Hover state
          "hover:bg-primary/90"
        ),
        destructive: cn(
          // Background and text
          "bg-destructive text-white",
          // Shadow
          "shadow-xs",
          // Hover state
          "hover:bg-destructive/90",
          // Focus styles
          "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
          // Dark mode
          "dark:bg-destructive/60"
        ),
        outline: cn(
          // Border and background
          "border bg-background",
          // Shadow
          "shadow-xs",
          // Hover state
          "hover:bg-accent hover:text-accent-foreground",
          // Dark mode
          "dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
        ),
        secondary: cn(
          // Background and text
          "bg-secondary text-secondary-foreground",
          // Shadow
          "shadow-xs",
          // Hover state
          "hover:bg-secondary/80"
        ),
        ghost: cn(
          // Hover state
          "hover:bg-accent hover:text-accent-foreground",
          // Dark mode
          "dark:hover:bg-accent/50"
        ),
        link: cn(
          // Text and underline
          "text-primary underline-offset-4 hover:underline"
        ),
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export type { ButtonProps }
export { Button, buttonVariants }
