import * as React from "react"
import * as UiLabel from "@/components/ui/label"
import { cn } from "@/lib/utils"

// Styles needed to transform UI label to match xfork-ui appearance
const xforkLabelStyles = {
  base: [
    // No specific differences identified - both use similar styling
  ]
}

function Label({
  className,
  ...props
}: React.ComponentProps<typeof UiLabel.Label>) {
  return (
    <UiLabel.Label
      data-slot="label"
      className={cn(
        ...xforkLabelStyles.base,
        className
      )}
      {...props}
    />
  )
}

export { Label, xforkLabelStyles }
export * from "@/components/ui/label"
