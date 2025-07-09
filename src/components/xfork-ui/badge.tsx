import * as React from "react"
import * as UiBadge from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const colors = {
  red: 'bg-red-500/15 text-red-700 group-hover:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-hover:bg-red-500/20',
  orange:
    'bg-orange-500/15 text-orange-700 group-hover:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:group-hover:bg-orange-500/20',
  amber:
    'bg-amber-400/20 text-amber-700 group-hover:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-hover:bg-amber-400/15',
  yellow:
    'bg-yellow-400/20 text-yellow-700 group-hover:bg-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-hover:bg-yellow-400/15',
  lime: 'bg-lime-400/20 text-lime-700 group-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-hover:bg-lime-400/15',
  green:
    'bg-green-500/15 text-green-700 group-hover:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:group-hover:bg-green-500/20',
  emerald:
    'bg-emerald-500/15 text-emerald-700 group-hover:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20',
  teal: 'bg-teal-500/15 text-teal-700 group-hover:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-hover:bg-teal-500/20',
  cyan: 'bg-cyan-400/20 text-cyan-700 group-hover:bg-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-hover:bg-cyan-400/15',
  sky: 'bg-sky-500/15 text-sky-700 group-hover:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-hover:bg-sky-500/20',
  blue: 'bg-blue-500/15 text-blue-700 group-hover:bg-blue-500/25 dark:text-blue-400 dark:group-hover:bg-blue-500/25',
  indigo:
    'bg-indigo-500/15 text-indigo-700 group-hover:bg-indigo-500/25 dark:text-indigo-400 dark:group-hover:bg-indigo-500/20',
  violet:
    'bg-violet-500/15 text-violet-700 group-hover:bg-violet-500/25 dark:text-violet-400 dark:group-hover:bg-violet-500/20',
  purple:
    'bg-purple-500/15 text-purple-700 group-hover:bg-purple-500/25 dark:text-purple-400 dark:group-hover:bg-purple-500/20',
  fuchsia:
    'bg-fuchsia-400/15 text-fuchsia-700 group-hover:bg-fuchsia-400/25 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 dark:group-hover:bg-fuchsia-400/20',
  pink: 'bg-pink-400/15 text-pink-700 group-hover:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-hover:bg-pink-400/20',
  rose: 'bg-rose-400/15 text-rose-700 group-hover:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-hover:bg-rose-400/20',
  zinc: 'bg-zinc-600/10 text-zinc-700 group-hover:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-hover:bg-white/10',
}

// Styles needed to transform UI badge to match xfork-ui appearance
const xforkBadgeStyles = {
  base: [
    // Remove UI's border by default
    "border-transparent",
    // Focus differences - UI uses ring, xfork uses outline
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    // Transition differences - UI uses transition-[color,box-shadow], xfork uses transition-colors
    "transition-colors",
    // Overflow differences - UI uses overflow-hidden, xfork uses overflow-auto
    "overflow-auto",
  ],

  variants: {
    default: [
      // Use emerald color scheme instead of primary
      colors.emerald,
      // Remove UI's border-transparent and primary colors
      "bg-emerald-500/15 text-emerald-700",
      "group-hover:bg-emerald-500/25",
      "dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20",
    ],

    secondary: [
      // Different hover behavior
      "bg-secondary text-secondary-foreground group-hover:bg-secondary/25",
    ],

    destructive: [
      // Different styling approach
      "bg-destructive/15 text-destructive-foreground group-hover:bg-destructive/25",
      "dark:bg-destructive/10 dark:text-destructive-foreground dark:group-hover:bg-destructive/20",
    ],

    outline: [
      // Add border for outline variant
      "border border-border",
      "bg-background text-foreground",
      "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
    ],

    // Additional xfork variants not in UI
    info: [colors.blue],
    success: [colors.green],
    warning: [colors.yellow],
  }
}

function Badge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof UiBadge.Badge>) {
  // Handle color variants that are strings (like "red", "blue", etc.)
  const isColorVariant = typeof variant === 'string' && colors[variant as keyof typeof colors]
  const colorStyles = isColorVariant ? colors[variant as keyof typeof colors] : []

  return (
    <UiBadge.Badge
      data-slot="badge"
      variant={isColorVariant ? "default" : variant}
      className={cn(
        // Base xfork styles
        ...xforkBadgeStyles.base,
        // Variant-specific styles
        variant && xforkBadgeStyles.variants[variant as keyof typeof xforkBadgeStyles.variants]
          ? xforkBadgeStyles.variants[variant as keyof typeof xforkBadgeStyles.variants]
          : [],
        // Color variant styles
        colorStyles,
        className
      )}
      {...props}
    />
  )
}

export { Badge, colors, xforkBadgeStyles }
export * from "@/components/ui/badge"
