import * as React from "react"
import { Button, buttonVariants } from "@/components/xfork-ui/button"

import { cn } from "@/lib/utils"

function Pagination({
  className,
  'aria-label': ariaLabel = 'pagination',
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label={ariaLabel}
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center gap-x-2", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size,
        }),
        "min-w-[2.25rem] before:absolute before:-inset-px before:rounded-lg",
        isActive && "before:bg-background/50 dark:before:bg-white/10",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5", className)}
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
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5", className)}
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
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="pagination-ellipsis"
      className={cn("w-[2.25rem] text-center text-sm/6 font-semibold text-foreground select-none", className)}
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
}
