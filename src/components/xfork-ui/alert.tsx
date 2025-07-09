import * as React from "react"
import * as UiAlert from "@/components/ui/alert"
import { cn } from "@/lib/utils"

// Styles needed to transform UI alert to match xfork-ui appearance
const xforkAlertStyles = {
  base: [
    // Add shadow that UI lacks
    "shadow-sm",
  ],

  variants: {
    default: [
      // Override UI's bg-card with bg-background
      "bg-background text-foreground border-border",
    ],

    destructive: [
      // Use xfork color scheme instead of UI's destructive colors
      "bg-rose-400/15 text-rose-700 border-rose-400/20",
      "group-hover:bg-rose-400/25",
      "dark:bg-rose-400/10 dark:text-rose-400 dark:group-hover:bg-rose-400/20",
      // Override UI's text-destructive and bg-card
      "[&>svg]:text-current",
      "*:data-[slot=alert-description]:text-rose-700/90 dark:*:data-[slot=alert-description]:text-rose-400/90",
    ],

    // Additional xfork variants not in UI
    warning: [
      "bg-amber-400/20 text-amber-700 border-amber-400/25",
      "group-hover:bg-amber-400/30",
      "dark:bg-amber-400/10 dark:text-amber-400 dark:group-hover:bg-amber-400/15",
    ],

    success: [
      "bg-emerald-500/15 text-emerald-700 border-emerald-500/20",
      "group-hover:bg-emerald-500/25",
      "dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500/20",
    ],

    info: [
      "bg-blue-500/15 text-blue-700 border-blue-500/20",
      "group-hover:bg-blue-500/25",
      "dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500/25",
    ],
  },

  title: [
    // Typography differences - UI uses font-medium, xfork uses font-semibold text-base/6
    "font-semibold text-base/6",
  ],

  description: [
    // Spacing differences - add top margin
    "mt-1",
  ]
}

type XforkAlertVariant = "default" | "destructive" | "warning" | "success" | "info"

interface AlertProps extends Omit<React.ComponentProps<typeof UiAlert.Alert>, 'variant'> {
  variant?: XforkAlertVariant
}

function Alert({
  className,
  variant = "default",
  ...props
}: AlertProps) {
  // Map xfork variants to UI variants
  const uiVariant = (variant === "warning" || variant === "success" || variant === "info") ? "default" : variant

  return (
    <UiAlert.Alert
      data-slot="alert"
      variant={uiVariant}
      className={cn(
        // Base xfork styles
        ...xforkAlertStyles.base,
        // Variant-specific styles
        variant && xforkAlertStyles.variants[variant]
          ? xforkAlertStyles.variants[variant]
          : [],
        className
      )}
      {...props}
    />
  )
}

function AlertTitle({
  className,
  ...props
}: React.ComponentProps<typeof UiAlert.AlertTitle>) {
  return (
    <UiAlert.AlertTitle
      data-slot="alert-title"
      className={cn(
        ...xforkAlertStyles.title,
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<typeof UiAlert.AlertDescription>) {
  return (
    <UiAlert.AlertDescription
      data-slot="alert-description"
      className={cn(
        ...xforkAlertStyles.description,
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, xforkAlertStyles }
export * from "@/components/ui/alert"
