import * as React from "react"
import * as UiAspectRatio from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"

// Styles needed to transform UI aspect-ratio to match xfork-ui appearance
const xforkAspectRatioStyles = {
  base: [
    // No specific differences identified, keeping same styling
  ]
}

function AspectRatio({
  className,
  ...props
}: React.ComponentProps<typeof UiAspectRatio.AspectRatio>) {
  return (
    <UiAspectRatio.AspectRatio
      data-slot="aspect-ratio"
      className={cn(
        ...xforkAspectRatioStyles.base,
        className
      )}
      {...props}
    />
  )
}

export { AspectRatio, xforkAspectRatioStyles }
export * from "@/components/ui/aspect-ratio"
