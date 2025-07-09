import * as React from "react"
import * as UiSeparator from "@/components/ui/separator"
import { cn } from "@/lib/utils"

// Styles needed to transform UI separator to match xfork-ui appearance
const xforkSeparatorStyles = {
  base: [
    // No specific differences identified - both use similar styling
  ]
}

function Separator({
  className,
  ...props
}: React.ComponentProps<typeof UiSeparator.Separator>) {
  return (
    <UiSeparator.Separator
      data-slot="separator"
      className={cn(
        ...xforkSeparatorStyles.base,
        className
      )}
      {...props}
    />
  )
}

export { Separator, xforkSeparatorStyles }
export * from "@/components/ui/separator"
