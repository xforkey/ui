import * as React from "react"
import * as UiCollapsible from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

// Styles needed to transform UI collapsible to match xfork-ui appearance
const xforkCollapsibleStyles = {
  base: [
    // No specific differences identified
  ],

  trigger: [
    // No specific differences identified
  ],

  content: [
    // No specific differences identified
  ]
}

function Collapsible({
  className,
  ...props
}: React.ComponentProps<typeof UiCollapsible.Collapsible>) {
  return (
    <UiCollapsible.Collapsible
      data-slot="collapsible"
      className={cn(
        ...xforkCollapsibleStyles.base,
        className
      )}
      {...props}
    />
  )
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof UiCollapsible.CollapsibleTrigger>) {
  return (
    <UiCollapsible.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        ...xforkCollapsibleStyles.trigger,
        className
      )}
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof UiCollapsible.CollapsibleContent>) {
  return (
    <UiCollapsible.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        ...xforkCollapsibleStyles.content,
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent, xforkCollapsibleStyles }
export * from "@/components/ui/collapsible"
