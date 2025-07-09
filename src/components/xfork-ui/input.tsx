import * as React from "react"
import * as UiInput from "@/components/ui/input"
import { cn } from "@/lib/utils"

// The InputGroup component wraps child elements with a styled <span> element.
// It uses Tailwind CSS classes (via the clsx helper) to conditionally style icons and inputs.
export function InputGroup({ children }: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      data-slot="control" // Marks this element as a control container.
      className={cn(
        // Base styles: 
        // - 'relative': establishes a positioning context.
        // - 'isolate': creates a new stacking context.
        // - 'block': makes the element display as a block.
        'relative isolate block',

        // Conditional padding for input elements when icons are present:
        // - If the first child with [data-slot="icon"] exists, add left padding (pl-10 for default, pl-8 for small screens).
        // - If the last child with [data-slot="icon"] exists, add right padding (pr-10 for default, pr-8 for small screens).
        'has-[[data-slot=icon]:first-child]:[&_input]:pl-10 has-[[data-slot=icon]:last-child]:[&_input]:pr-10 sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8 sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8',

        // Styles applied to any element with data-slot="icon":
        // - 'pointer-events-none': disables mouse interactions.
        // - 'absolute': positions the icon absolutely within the container.
        // - 'top-3' (or 'top-2.5' on small screens): positions the icon vertically.
        // - 'z-10': ensures the icon sits above other elements.
        // - 'size-5' (or 'size-4' on small screens): sets the icon's size.
        '*:data-[slot=icon]:pointer-events-none *:data-[slot=icon]:absolute *:data-[slot=icon]:top-3 *:data-[slot=icon]:z-10 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:top-2.5 sm:*:data-[slot=icon]:size-4',

        // Horizontal positioning for icons:
        // - The first icon is positioned to the left (left-3 by default, left-2.5 on small screens).
        // - The last icon is positioned to the right (right-3 by default, right-2.5 on small screens).
        '[&>[data-slot=icon]:first-child]:left-3 sm:[&>[data-slot=icon]:first-child]:left-2.5 [&>[data-slot=icon]:last-child]:right-3 sm:[&>[data-slot=icon]:last-child]:right-2.5',

        // Text color for icons, adjusting for dark mode:
        // - Default (light mode): text-zinc-500.
        // - Dark mode: text-zinc-400.
        '*:data-[slot=icon]:text-muted-foreground'
      )}
    >
      {children} {/* Render any child elements passed to the component */}
    </span>
  )
}

// Styles needed to transform UI input to match xfork-ui appearance
const xforkInputStyles = {
  wrapper: [
    // Basic layout
    'relative block w-full',
    // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
    'before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm',
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    'dark:before:hidden',
    // Focus ring
    'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-primary',
    // Disabled state
    'has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none',
    // Invalid state
    'has-data-invalid:before:shadow-red-500/10',
  ],
  input: [
    // Basic layout differences
    'relative block w-full appearance-none',
    // Sizing differences - xfork uses CSS variables, UI uses fixed padding
    'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]',
    // Typography differences
    'text-base/6 sm:text-sm/6', // UI uses base with md:text-sm, xfork uses base/6 with sm:text-sm/6
    // Border differences
    'border-foreground/10 hover:border-foreground/20', // UI uses border-input, xfork uses foreground-based
    // Background differences
    'bg-input', // Override UI's bg-transparent
    // Focus differences - Override UI input's focus styles on sm+ to match xfork wrapper behavior
    'focus:outline-hidden sm:focus-visible:ring-0 sm:focus-visible:ring-transparent sm:focus-visible:border-transparent', // Override UI's focus styles only on sm+ where xfork ring is active
    // Invalid state differences
    'aria-invalid:border-destructive aria-invalid:hover:border-destructive dark:aria-invalid:border-destructive dark:aria-invalid:hover:border-destructive',
    // Disabled state differences
    'disabled:border-background/20 dark:disabled:border-white/15 dark:disabled:bg-white/[2.5%] dark:hover:disabled:border-white/15',
    // System icons
    'dark:[color-scheme:dark]',
    // Border radius difference
    'rounded-lg', // UI uses rounded-md, xfork uses rounded-lg
  ]
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <span
        data-slot="control"
        className={cn(
          ...xforkInputStyles.wrapper,
          className
        )}
      >
        <UiInput.Input
          type={type}
          className={cn(
            // Date-specific styles for webkit
            type &&
            ['date', 'datetime-local', 'month', 'time', 'week'].includes(type) && [
              '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
              '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
              '[&::-webkit-datetime-edit]:inline-flex',
              '[&::-webkit-datetime-edit]:p-0',
              '[&::-webkit-datetime-edit-year-field]:p-0',
              '[&::-webkit-datetime-edit-month-field]:p-0',
              '[&::-webkit-datetime-edit-day-field]:p-0',
              '[&::-webkit-datetime-edit-hour-field]:p-0',
              '[&::-webkit-datetime-edit-minute-field]:p-0',
              '[&::-webkit-datetime-edit-second-field]:p-0',
              '[&::-webkit-datetime-edit-millisecond-field]:p-0',
              '[&::-webkit-datetime-edit-meridiem-field]:p-0',
            ],
            // Apply xfork input styles
            ...xforkInputStyles.input
          )}
          ref={ref}
          {...props}
        />
      </span>
    )
  }
)
Input.displayName = "Input"

export { Input, xforkInputStyles }
export * from "@/components/ui/input"
