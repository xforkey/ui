import * as UiButton from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Common patterns for xfork styles refactoring
const xforkCommon = {
  solidLayering: [
    "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-sm",
    "dark:before:hidden",
    "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)]",
    "after:shadow-[shadow:inset_0_1px_--theme(--color-white/15%)]",
    "dark:after:-inset-px dark:after:rounded-lg",
    "data-disabled:before:shadow-none data-disabled:after:shadow-none",
  ],
  backgroundHoverOverlay: [
    "data-[state=active]:after:bg-background/10 hover:after:bg-background/10",
    "dark:data-[state=active]:after:bg-white/5 dark:hover:after:bg-white/5",
  ],
  whiteHoverOverlay: [
    "data-active:after:bg-white/10 hover:after:bg-white/10",
    "dark:data-active:after:bg-white/5 dark:hover:after:bg-white/5",
  ],
  darkBorder: [
    "dark:border-white/5",
  ],
  zincHover: [
    "data-active:bg-zinc-950/[2.5%] data-hover:bg-zinc-950/[2.5%]",
    "hover:bg-zinc-950/[2.5%] hover:text-zinc-950",
  ],
  whiteHover: [
    "dark:data-active:bg-white/5 dark:data-hover:bg-white/5",
    "dark:hover:bg-white/5 dark:hover:text-white",
  ],
}

// Styles needed to transform UI button to match xfork-ui appearance
const xforkStyles = {
  base: [
    // Layout differences
    "gap-y-0", // UI has gap-2, xfork has gap-x-2, so neutralize y-gap

    // Base style differences
    "relative isolate", // Add positioning that UI lacks
    "rounded-lg", // UI has rounded-md, xfork has rounded-lg
    "border", // Ensure border is present
    "text-base/6 font-semibold", // UI has text-sm font-medium, xfork has text-base/6 font-semibold
    "sm:text-sm/6", // Responsive text sizing

    // Sizing differences
    "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)]", // Replace UI's px-4 py-2
    "sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]", // Responsive sizing

    // Focus differences
    "focus:outline-hidden data-focus:outline data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-blue-500",

    // Disabled differences
    "data-disabled:opacity-50", // Additional disabled state

    // Icon differences
    "*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:my-0.5 *:data-[slot=icon]:size-5 *:data-[slot=icon]:shrink-0",
    "sm:*:data-[slot=icon]:my-1 sm:*:data-[slot=icon]:size-4",

    // Transition differences
    "transition-[color,box-shadow]", // UI has transition-all, xfork has specific transitions
  ],

  variants: {
    default: [
      // Background layer
      "before:bg-primary",
      // Override UI's simple hover
      "hover:bg-primary", // Remove /90 opacity
      // Common patterns
      ...xforkCommon.solidLayering,
      ...xforkCommon.backgroundHoverOverlay,
    ],

    destructive: [
      // Background layer
      "before:bg-destructive",
      // Override UI's simple hover and dark mode
      "hover:bg-destructive", // Remove /90 opacity
      "dark:bg-destructive", // Remove /60 opacity
      // Common patterns
      ...xforkCommon.solidLayering,
      ...xforkCommon.darkBorder,
      ...xforkCommon.whiteHoverOverlay,
    ],

    secondary: [
      // Background layer
      "before:bg-secondary",
      // Common patterns
      ...xforkCommon.solidLayering,
      ...xforkCommon.darkBorder,
      ...xforkCommon.backgroundHoverOverlay,
    ],

    outline: [
      // Different border and hover behavior
      "border-zinc-950/10 text-zinc-950", // UI uses border + bg-background
      "dark:border-white/15 dark:text-white dark:bg-transparent",
      // Common patterns
      ...xforkCommon.zincHover,
      ...xforkCommon.whiteHover,
    ],

    ghost: [
      // Different hover behavior
      "border-transparent text-foreground", // Ensure transparent border
      "data-active:bg-background/10 hover:bg-background/10", // UI uses accent
      "dark:text-white dark:data-active:bg-white/10 dark:hover:bg-white/10",
    ],

    link: [
      // Same as UI, no changes needed
    ],
  },

  sizes: {
    default: [
      // Remove UI's px-4 py-2, handled in base
      "px-0 py-0",
    ],
    sm: [
      // Override UI's px-3, handled in base with responsive sizing
      "px-0",
    ],
    lg: [
      // Override UI's px-6, handled in base with responsive sizing  
      "px-0",
    ],
    icon: [
      // Same size, no changes needed
    ],
  }
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof UiButton.Button>) {
  return (
    <UiButton.Button
      data-slot="button"
      variant={variant}
      size={size}
      className={cn(
        // Base xfork styles
        ...xforkStyles.base,
        // Variant-specific styles
        variant && xforkStyles.variants[variant] ? xforkStyles.variants[variant] : [],
        // Size-specific styles
        size && xforkStyles.sizes[size] ? xforkStyles.sizes[size] : [],
        className
      )}
      {...props}
    />
  )
}

export { Button, xforkStyles };
export * from "@/components/ui/button";
