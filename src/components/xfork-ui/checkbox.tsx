import * as React from "react"
import * as UiCheckbox from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

// Styles needed to transform UI checkbox to match xfork-ui appearance
const xforkCheckboxStyles = {
  base: [
    // Border radius difference - UI uses rounded-sm, xfork uses rounded-[4px]
    "rounded-[4px]",
    // Shadow difference - add shadow-xs that UI lacks
    "shadow-xs",
    // Border difference - UI uses border-primary, xfork uses border-border
    "border-border",
    // Focus differences - UI uses focus-visible:ring-2, xfork uses focus-visible:ring-[3px]
    "focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50",
    // Validation styles that UI lacks
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    // Transition difference - UI uses no transition, xfork uses transition-shadow
    "transition-shadow",
    // Peer class for form integration
    "peer",
  ],

  indicator: [
    // Transition difference - UI uses no transition, xfork uses transition-none
    "transition-none",
    // Icon size difference - UI uses size-4, xfork uses size-3.5
    "[&>svg]:size-3.5",
  ]
}

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof UiCheckbox.Checkbox>) {
  return (
    <UiCheckbox.Checkbox
      data-slot="checkbox"
      className={cn(
        ...xforkCheckboxStyles.base,
        className
      )}
      {...props}
    />
  )
}

export { Checkbox, xforkCheckboxStyles }
export * from "@/components/ui/checkbox"
