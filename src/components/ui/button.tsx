import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Base button styles inspired by the new design system
const buttonVariants = cva(
  cn(
    // Layout
    "inline-flex items-center justify-center gap-x-2",

    // Base Styles
    "relative isolate whitespace-nowrap rounded-lg border text-base/6 font-semibold",
    "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6",

    // Icon Styles
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",

    // Data slot icon styles
    "*:[&_svg]:-mx-0.5 *:[&_svg]:my-0.5 *:[&_svg]:size-5 *:[&_svg]:shrink-0 *:[&_svg]:text-foreground sm:*:[&_svg]:my-1 sm:*:[&_svg]:size-4",

    // Transition
    "transition-[color,box-shadow]",

    // Disabled State
    "disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50",

    // Focus Styles
    "focus:outline-hidden focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ring"
  ),
  {
    variants: {
      variant: {
        default: cn(
          // Border and background
          "border-transparent bg-primary",
          // Text color
          "text-primary-foreground",
          // Shadow
          "shadow-xs before:shadow-sm",
          // Hover state
          "hover:bg-primary/90",
          // Dark mode adjustments
          "dark:bg-primary/10 dark:border-primary/20 dark:after:-inset-px dark:after:rounded-lg",
          // Hover overlay
          "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]",
          "after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)]",
          "data-[state=active]:after:bg-background/10 hover:after:bg-background/10",
          "dark:data-[state=active]:after:bg-white/5 dark:hover:after:bg-white/5",
          // Disabled state
          "data-disabled:before:shadow-none data-disabled:after:shadow-none",
          // Button background layer
          "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-primary",
          "dark:before:hidden"
        ),
        destructive: cn(
          // Border and background
          "border-transparent bg-destructive",
          // Text color
          "text-white",
          // Shadow
          "shadow-xs before:shadow-sm",
          // Hover state
          "hover:bg-destructive/90",
          // Focus styles
          "focus-visible:outline-destructive/50",
          // Dark mode adjustments
          "dark:border-white/5 dark:after:-inset-px dark:after:rounded-lg",
          // Hover overlay
          "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]",
          "after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)]",
          "data-active:after:bg-white/10 hover:after:bg-white/10",
          "dark:data-active:after:bg-white/5 dark:hover:after:bg-white/5",
          // Disabled state
          "data-disabled:before:shadow-none data-disabled:after:shadow-none",
          // Button background layer
          "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-destructive",
          "dark:before:hidden"
        ),
        outline: cn(
          // Border and background
          "border-border bg-background",
          // Text color
          "text-foreground",
          // Shadow
          "shadow-xs",
          // Hover state
          "data-active:bg-background/10 hover:bg-background/10",
          // Dark mode
          "dark:border-white/15 dark:text-white dark:bg-transparent",
          "dark:data-active:bg-white/5 dark:hover:bg-white/5"
        ),
        secondary: cn(
          // Border and background
          "border-transparent bg-secondary",
          // Text color
          "text-secondary-foreground",
          // Shadow
          "shadow-xs before:shadow-sm",
          // Hover state
          "hover:bg-secondary/80",
          // Dark mode adjustments
          "dark:border-white/5 dark:after:-inset-px dark:after:rounded-lg",
          // Hover overlay
          "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]",
          "after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)]",
          "data-active:after:bg-background/10 hover:after:bg-background/10",
          "dark:data-active:after:bg-white/5 dark:hover:after:bg-white/5",
          // Disabled state
          "data-disabled:before:shadow-none data-disabled:after:shadow-none",
          // Button background layer
          "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-secondary",
          "dark:before:hidden"
        ),
        ghost: cn(
          // Border and background
          "border-transparent",
          // Text color
          "text-foreground",
          // Hover state
          "data-active:bg-background/10 hover:bg-background/10",
          // Dark mode
          "dark:text-white dark:data-active:bg-white/10 dark:hover:bg-white/10"
        ),
        link: cn(
          // Border and text
          "border-transparent text-primary underline-offset-4 hover:underline"
        ),
      },
      size: {
        default: "h-9 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  )
}

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
    >
      <TouchTarget>{props.children}</TouchTarget>
    </Comp>
  )
}

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }


export type { ButtonProps }
export { Button, buttonVariants }
