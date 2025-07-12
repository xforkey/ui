import * as React from "react"
import * as UiPagination from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

// Styles needed to transform UI pagination to match xfork-ui appearance
const xforkPaginationStyles = {
  base: [
    // Gap difference - UI uses no gap-x, xfork uses gap-x-2
    "gap-x-2",
  ],

  content: [
    // Gap difference - UI uses gap-1, xfork uses gap-2
    "gap-2",
  ],

  link: [
    // Active state styling difference - UI uses outline variant, xfork uses custom before pseudo-element
    "min-w-[2.25rem] before:absolute before:-inset-px before:rounded-lg",
    // Custom active state background
    "data-[active=true]:before:bg-background/50 dark:data-[active=true]:before:bg-white/10",
  ],

  ellipsis: [
    // Text styling difference - UI uses flex size-9 items-center justify-center, xfork uses custom text styling
    "w-[2.25rem] text-center text-sm/6 font-semibold text-foreground select-none",
  ]
}

function Pagination({
  className,
  'aria-label': ariaLabel = 'pagination',
  ...props
}: React.ComponentProps<typeof UiPagination.Pagination>) {
  return (
    <UiPagination.Pagination
      aria-label={ariaLabel}
      className={cn(
        ...xforkPaginationStyles.base,
        className
      )}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<typeof UiPagination.PaginationContent>) {
  return (
    <UiPagination.PaginationContent
      className={cn(
        ...xforkPaginationStyles.content,
        className
      )}
      {...props}
    />
  )
}

function PaginationItem({
  ...props
}: React.ComponentProps<typeof UiPagination.PaginationItem>) {
  return (
    <UiPagination.PaginationItem
      {...props}
    />
  )
}

function PaginationLink({
  className,
  isActive,
  ...props
}: React.ComponentProps<typeof UiPagination.PaginationLink>) {
  return (
    <UiPagination.PaginationLink
      isActive={isActive}
      className={cn(
        ...xforkPaginationStyles.link,
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof UiPagination.PaginationPrevious>) {
  return (
    <UiPagination.PaginationPrevious
      className={cn(className)}
      {...props}
    >
      <svg className="stroke-current size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="hidden sm:block">Previous</span>
    </UiPagination.PaginationPrevious>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof UiPagination.PaginationNext>) {
  return (
    <UiPagination.PaginationNext
      className={cn(className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <svg className="stroke-current size-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </UiPagination.PaginationNext>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<typeof UiPagination.PaginationEllipsis>) {
  return (
    <span
      aria-hidden="true"
      data-slot="pagination-ellipsis"
      className={cn(
        ...xforkPaginationStyles.ellipsis,
        className
      )}
      {...props}
    >
      &hellip;
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  xforkPaginationStyles
}
export * from "@/components/ui/pagination"
