import * as React from "react"
import * as UiSkeleton from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

// Styles needed to transform UI skeleton to match xfork-ui appearance
const xforkSkeletonStyles = {
  base: [
    // Background difference - UI uses bg-muted, xfork uses bg-primary/10
    "bg-primary/10",
  ]
}

function Skeleton({
  className,
  ...props
}: React.ComponentProps<typeof UiSkeleton.Skeleton>) {
  return (
    <UiSkeleton.Skeleton
      data-slot="skeleton"
      className={cn(
        ...xforkSkeletonStyles.base,
        className
      )}
      {...props}
    />
  )
}

export { Skeleton, xforkSkeletonStyles }
export * from "@/components/ui/skeleton"
