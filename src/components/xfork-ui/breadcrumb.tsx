import * as React from "react"
import * as UiBreadcrumb from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

// Styles needed to transform UI breadcrumb to match xfork-ui appearance
const xforkBreadcrumbStyles = {
  base: [
    // No specific differences identified for the nav element
  ],

  list: [
    // Same styling as UI
  ],

  item: [
    // Same styling as UI
  ],

  link: [
    // Same styling as UI
  ],

  page: [
    // Same styling as UI
  ],

  separator: [
    // Element type difference - UI uses span, xfork uses li
    // This will be handled by wrapping the UI component
  ],

  ellipsis: [
    // Same styling as UI
  ]
}

function Breadcrumb({
  className,
  ...props
}: React.ComponentProps<typeof UiBreadcrumb.Breadcrumb>) {
  return (
    <UiBreadcrumb.Breadcrumb
      data-slot="breadcrumb"
      className={cn(
        ...xforkBreadcrumbStyles.base,
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<typeof UiBreadcrumb.BreadcrumbList>) {
  return (
    <UiBreadcrumb.BreadcrumbList
      data-slot="breadcrumb-list"
      className={cn(
        ...xforkBreadcrumbStyles.list,
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<typeof UiBreadcrumb.BreadcrumbItem>) {
  return (
    <UiBreadcrumb.BreadcrumbItem
      data-slot="breadcrumb-item"
      className={cn(
        ...xforkBreadcrumbStyles.item,
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbLink({
  className,
  ...props
}: React.ComponentProps<typeof UiBreadcrumb.BreadcrumbLink>) {
  return (
    <UiBreadcrumb.BreadcrumbLink
      data-slot="breadcrumb-link"
      className={cn(
        ...xforkBreadcrumbStyles.link,
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<typeof UiBreadcrumb.BreadcrumbPage>) {
  return (
    <UiBreadcrumb.BreadcrumbPage
      data-slot="breadcrumb-page"
      className={cn(
        ...xforkBreadcrumbStyles.page,
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "[&>svg]:size-3.5",
        ...xforkBreadcrumbStyles.separator,
        className
      )}
      {...props}
    >
      {children ?? (
        <UiBreadcrumb.BreadcrumbSeparator className="[&>svg]:size-3.5" />
      )}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<typeof UiBreadcrumb.BreadcrumbEllipsis>) {
  return (
    <UiBreadcrumb.BreadcrumbEllipsis
      data-slot="breadcrumb-ellipsis"
      className={cn(
        ...xforkBreadcrumbStyles.ellipsis,
        className
      )}
      {...props}
    />
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  xforkBreadcrumbStyles
}
export * from "@/components/ui/breadcrumb"
