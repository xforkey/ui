import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea"> & { resizable?: boolean }
>(({ className, resizable = true, ...props }, ref) => {
  return (
    <span
      data-slot="control"
      className={cn(
        // Basic layout
        "relative block w-full",
        // Background color + shadow applied to inset pseudo element
        "before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm",
        // Background color is moved to control in dark mode
        "dark:before:hidden",
        // Focus ring
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-primary",
        // Disabled state
        "has-[[data-disabled]]:opacity-50 has-[[data-disabled]]:before:bg-background/5 has-[[data-disabled]]:before:shadow-none"
      )}
    >
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(
          // Basic layout
          "relative block h-full w-full min-h-16 appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
          // Typography
          "text-base/6 text-foreground placeholder:text-muted-foreground sm:text-sm/6",
          // Border
          "border border-foreground/10 hover:border-foreground/20",
          // Background color
          "bg-input",
          // Hide default focus styles
          "focus:outline-hidden",
          // Invalid state
          "aria-invalid:border-destructive aria-invalid:hover:border-destructive dark:aria-invalid:border-destructive dark:aria-invalid:hover:border-destructive",
          // Disabled state
          "disabled:cursor-not-allowed disabled:border-background/20 dark:disabled:border-white/15 dark:disabled:bg-white/[2.5%] dark:hover:disabled:border-white/15",
          // Resizable
          resizable ? "resize-y" : "resize-none",
          // System icons
          "dark:[color-scheme:dark]",
          className
        )}
        {...props}
      />
    </span>
  );
});

Textarea.displayName = "Textarea";

export { Textarea }
