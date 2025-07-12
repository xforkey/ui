"use client"

import * as React from "react"
import * as UiSwitch from "@/components/ui/switch"
import { cn } from "@/lib/utils"

// Styles needed to transform UI switch to match xfork-ui appearance
const xforkSwitchStyles = {
  base: [
    // Same styling as UI
  ],

  thumb: [
    // Thumb color difference - UI uses dark:data-[state=checked]:bg-primary-foreground, xfork uses dark:data-[state=checked]:bg-white
    "dark:data-[state=checked]:bg-white",
  ]
}

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof UiSwitch.Switch>) {
  return (
    <UiSwitch.Switch
      className={cn(
        ...xforkSwitchStyles.base,
        className
      )}
      {...props}
    />
  )
}

export { Switch, xforkSwitchStyles }
export * from "@/components/ui/switch"
