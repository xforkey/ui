"use client"

import * as React from "react"
import * as UiTable from "@/components/ui/table"
import { cn } from "@/lib/utils"

const TableContext = React.createContext<{
  bleed?: boolean
  dense?: boolean
  grid?: boolean
  striped?: boolean
}>({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
})

// Styles needed to transform UI table to match xfork-ui appearance
const xforkTableStyles = {
  wrapper: [
    // Layout differences - xfork uses flow-root with complex nested structure
    "flow-root",
  ],

  container: [
    // Container differences - xfork uses -mx-4 overflow-x-auto whitespace-nowrap
    "-mx-4 overflow-x-auto whitespace-nowrap",
  ],

  inner: [
    // Inner container differences - xfork uses inline-block min-w-full align-middle
    "inline-block min-w-full align-middle",
  ],

  table: [
    // Table differences - xfork uses min-w-full text-left text-sm/6 text-foreground
    "min-w-full text-left text-sm/6 text-foreground",
  ],

  header: [
    // Header differences - xfork uses text-muted-foreground
    "text-muted-foreground",
  ],

  body: [
    // Same as UI
  ],

  footer: [
    // Same as UI
  ],

  row: [
    // Row differences - xfork has striped and hover logic
    "transition-colors",
  ],

  head: [
    // Head differences - xfork has complex border and grid logic
    "border-b border-b-border/50 px-4 py-2 text-left font-medium first:pl-4 last:pr-4 dark:border-b-white/10",
  ],

  cell: [
    // Cell differences - xfork has complex border, grid, and density logic
    "relative px-4 first:pl-4 last:pr-4",
  ],

  caption: [
    // Same as UI
  ]
}

function Table({
  className,
  bleed = false,
  dense = false,
  grid = false,
  striped = false,
  ...props
}: React.ComponentProps<"table"> & {
  bleed?: boolean
  dense?: boolean
  grid?: boolean
  striped?: boolean
}) {
  return (
    <TableContext.Provider value={{ bleed, dense, grid, striped }}>
      <div className={cn(...xforkTableStyles.wrapper)}>
        <div className={cn(...xforkTableStyles.container, className)}>
          <div className={cn(...xforkTableStyles.inner, !bleed && "sm:px-4")}>
            <table
              data-slot="table"
              className={cn(...xforkTableStyles.table, className)}
              {...props}
            />
          </div>
        </div>
      </div>
    </TableContext.Provider>
  )
}

function TableHeader({
  className,
  ...props
}: React.ComponentProps<typeof UiTable.TableHeader>) {
  return (
    <UiTable.TableHeader
      className={cn(
        ...xforkTableStyles.header,
        className
      )}
      {...props}
    />
  )
}

function TableBody({
  className,
  ...props
}: React.ComponentProps<typeof UiTable.TableBody>) {
  return (
    <UiTable.TableBody
      className={cn(
        ...xforkTableStyles.body,
        className
      )}
      {...props}
    />
  )
}

function TableFooter({
  className,
  ...props
}: React.ComponentProps<typeof UiTable.TableFooter>) {
  return (
    <UiTable.TableFooter
      className={cn(
        ...xforkTableStyles.footer,
        className
      )}
      {...props}
    />
  )
}

function TableRow({
  className,
  ...props
}: React.ComponentProps<typeof UiTable.TableRow>) {
  const { striped } = React.useContext(TableContext)

  return (
    <UiTable.TableRow
      className={cn(
        striped && "even:bg-background/50 dark:even:bg-white/[2.5%]",
        !striped && "hover:bg-background/50 dark:hover:bg-white/[2.5%]",
        ...xforkTableStyles.row,
        className
      )}
      {...props}
    />
  )
}

function TableHead({
  className,
  ...props
}: React.ComponentProps<typeof UiTable.TableHead>) {
  const { bleed, grid } = React.useContext(TableContext)

  return (
    <UiTable.TableHead
      className={cn(
        ...xforkTableStyles.head,
        grid && "border-l border-l-border/30 first:border-l-0 dark:border-l-white/5",
        !bleed && "sm:first:pl-2 sm:last:pr-2",
        className
      )}
      {...props}
    />
  )
}

function TableCell({
  className,
  ...props
}: React.ComponentProps<typeof UiTable.TableCell>) {
  const { bleed, dense, grid, striped } = React.useContext(TableContext)

  return (
    <UiTable.TableCell
      className={cn(
        ...xforkTableStyles.cell,
        !striped && "border-b border-border/50 dark:border-white/5",
        grid && "border-l border-l-border/30 first:border-l-0 dark:border-l-white/5",
        dense ? "py-2.5" : "py-4",
        !bleed && "sm:first:pl-2 sm:last:pr-2",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<typeof UiTable.TableCaption>) {
  return (
    <UiTable.TableCaption
      className={cn(
        ...xforkTableStyles.caption,
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  xforkTableStyles
}
export * from "@/components/ui/table"
