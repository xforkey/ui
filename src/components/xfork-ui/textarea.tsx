import * as React from "react"
import * as UiTextarea from "@/ui/textarea"
import { cn } from "@/lib/utils"

// Styles needed to transform UI textarea to match xfork-ui appearance
const xforkTextareaStyles = {
  wrapper: [
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
  ],
  textarea: [
    // Basic layout differences
    "relative block h-full w-full appearance-none",
    // Sizing differences - xfork uses CSS variables, UI uses fixed padding
    "px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]",
    // Typography differences
    "text-base/6 sm:text-sm/6", // UI uses text-base with md:text-sm, xfork uses text-base/6 with sm:text-sm/6
    // Border differences
    "border-foreground/10 hover:border-foreground/20", // UI uses border-input, xfork uses foreground-based
    // Background differences
    "bg-input", // Override UI's bg-transparent
    // Focus differences
    "focus:outline-hidden", // UI uses outline-none, xfork uses focus:outline-hidden
    // Invalid state differences
    "aria-invalid:border-destructive aria-invalid:hover:border-destructive dark:aria-invalid:border-destructive dark:aria-invalid:hover:border-destructive",
    // Disabled state differences
    "disabled:cursor-not-allowed disabled:border-background/20 dark:disabled:border-white/15 dark:disabled:bg-white/[2.5%] dark:hover:disabled:border-white/15",
    // System icons
    "dark:[color-scheme:dark]",
    // Border radius difference
    "rounded-lg", // UI uses rounded-md, xfork uses rounded-lg
    // Remove UI's field-sizing-content as xfork doesn't use it
    "field-sizing-auto",
  ]
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<"textarea"> & { resizable?: boolean }
>(({ className, resizable = true, ...props }, ref) => {
  return (
    <span
      data-slot="control"
      className={cn(
        ...xforkTextareaStyles.wrapper,
        className
      )}
    >
      <UiTextarea.Textarea
        ref={ref}
        data-slot="textarea"
        className={cn(
          // Apply xfork textarea styles
          ...xforkTextareaStyles.textarea,
          // Resizable handling
          resizable ? "resize-y" : "resize-none"
        )}
        {...props}
      />
    </span>
  );
});

Textarea.displayName = "Textarea";

export { Textarea, xforkTextareaStyles }
export * from "@/components/ui/textarea"
