"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

/**
 * SwitchGroup component for grouping switches with labels and descriptions
 */
function SwitchGroup({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="control"
      {...props}
      className={cn(
        className,
        // Basic groups
        'space-y-3 **:data-[slot=label]:font-normal',
        // With descriptions
        'has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

/**
 * SwitchField component for layout with labels and descriptions
 */
function SwitchField({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="field"
      {...props}
      className={cn(
        className,
        // Base layout
        'grid grid-cols-[1fr_auto] items-center gap-x-8 gap-y-1 sm:grid-cols-[1fr_auto]',
        // Control layout
        '*:data-[slot=control]:col-start-2 *:data-[slot=control]:self-center',
        // Label layout
        '*:data-[slot=label]:col-start-1 *:data-[slot=label]:row-start-1 *:data-[slot=label]:justify-self-start',
        // Description layout
        '*:data-[slot=description]:col-start-1 *:data-[slot=description]:row-start-2',
        // With description
        'has-data-[slot=description]:**:data-[slot=label]:font-medium'
      )}
    />
  )
}

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="control"
      className={cn(
        // Base styles
        "group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8",
        // Transitions
        "transition duration-0 ease-in-out data-[state=checked]:duration-200",
        // Outline and background color in forced-colors mode
        "forced-colors:outline forced-colors:[--switch-bg:Highlight] dark:forced-colors:[--switch-bg:Highlight]",
        // Unchecked state
        "bg-input ring-1 ring-black/5 ring-inset dark:bg-background/5 dark:ring-white/15",
        // Checked state
        "data-[state=checked]:bg-primary data-[state=checked]:ring-primary/90 dark:data-[state=checked]:bg-primary dark:data-[state=checked]:ring-primary/90",
        // Focus state
        'focus:outline-hidden focus:outline-2 focus:outline-offset-2 focus:outline-primary',
        // Hover state
        "hover:ring-black/15 hover:data-[state=checked]:ring-primary/90",
        "dark:hover:ring-white/25 dark:hover:data-[state=checked]:ring-primary/90",
        // Disabled state
        "disabled:bg-input disabled:opacity-50 disabled:data-[state=checked]:bg-input disabled:data-[state=checked]:ring-black/5",
        "dark:disabled:bg-white/15 dark:disabled:data-[state=checked]:bg-white/15 dark:disabled:data-[state=checked]:ring-white/15",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Basic layout
          "pointer-events-none relative inline-block size-[1.125rem] rounded-full sm:size-3.5",
          // Transition
          "translate-x-0 transition duration-200 ease-in-out",
          // Invisible border for forced-colors mode
          "border border-transparent",
          // Unchecked state
          "bg-white ring-1 shadow-sm ring-black/5",
          // Checked state - always white in both light and dark mode
          "group-data-[state=checked]:bg-white group-data-[state=checked]:shadow-sm group-data-[state=checked]:ring-transparent",
          "data-[state=checked]:translate-x-4 sm:data-[state=checked]:translate-x-3",
          // Disabled state
          "group-data-[state=checked]:group-disabled:bg-white group-data-[state=checked]:group-disabled:shadow-sm group-data-[state=checked]:group-disabled:ring-black/5"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch, SwitchGroup, SwitchField }
