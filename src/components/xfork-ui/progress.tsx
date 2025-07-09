import * as React from "react"
import * as UiProgress from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Styles needed to transform UI progress to match xfork-ui appearance
const xforkProgressStyles = {
  base: [
    // No specific differences identified - both use similar styling
  ]
}

function Progress({
  className,
  ...props
}: React.ComponentProps<typeof UiProgress.Progress>) {
  return (
    <UiProgress.Progress
      data-slot="progress"
      className={cn(
        ...xforkProgressStyles.base,
        className
      )}
      {...props}
    />
  )
}

export { Progress, xforkProgressStyles }
export * from "@/components/ui/progress"
