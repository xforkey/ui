import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

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

// Define color variants based on the new styles
const badgeColors = {
  default: "bg-primary/15 text-primary-foreground group-hover:bg-primary/25",
  secondary: "bg-secondary text-secondary-foreground group-hover:bg-secondary/25",
  destructive: "bg-destructive/15 text-destructive-foreground group-hover:bg-destructive/25 dark:bg-destructive/10 dark:text-destructive-foreground dark:group-hover:bg-destructive/20",
  outline: "bg-background text-foreground border-border [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
}

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors overflow-auto",
  {
    variants: {
      variant: {
        default: cn(badgeColors.default),
        secondary: cn(badgeColors.secondary),
        destructive: cn(badgeColors.destructive),
        outline: cn(badgeColors.outline, "border"),
        ...colors
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
