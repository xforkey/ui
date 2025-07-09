import * as React from "react"
import * as UiCalendar from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

// Styles needed to transform UI calendar to match xfork-ui appearance
const xforkCalendarStyles = {
  base: [
    // Add portal-background class that xfork uses
    "portal-background",
  ],

  dayButton: [
    // No specific differences identified
  ]
}

function Calendar({
  className,
  classNames,
  ...props
}: React.ComponentProps<typeof UiCalendar.Calendar>) {
  return (
    <UiCalendar.Calendar
      data-slot="calendar"
      className={cn(
        ...xforkCalendarStyles.base,
        className
      )}
      classNames={{
        // Use the UI calendar's proper navigation positioning
        // The UI calendar already has the correct nav positioning with absolute positioning
        ...classNames,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  ...props
}: React.ComponentProps<typeof UiCalendar.CalendarDayButton>) {
  return (
    <UiCalendar.CalendarDayButton
      data-slot="calendar-day-button"
      className={cn(
        ...xforkCalendarStyles.dayButton,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton, xforkCalendarStyles }
export * from "@/components/ui/calendar"
