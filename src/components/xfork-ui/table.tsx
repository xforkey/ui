"use client"

import * as React from "react"

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
      <div className="flow-root">
        <div className={cn("-mx-4 overflow-x-auto whitespace-nowrap", className)}>
          <div className={cn("inline-block min-w-full align-middle", !bleed && "sm:px-4")}>
            <table
              data-slot="table"
              className={cn("min-w-full text-left text-sm/6 text-foreground", className)}
              {...props}
            />
          </div>
        </div>
      </div>
    </TableContext.Provider>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  const { striped } = React.useContext(TableContext)

  return (
    <tr
      data-slot="table-row"
      className={cn(
        striped && "even:bg-background/50 dark:even:bg-white/[2.5%]",
        !striped && "hover:bg-background/50 dark:hover:bg-white/[2.5%]",
        "transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  const { bleed, grid } = React.useContext(TableContext)

  return (
    <th
      data-slot="table-head"
      className={cn(
        "border-b border-b-border/50 px-4 py-2 text-left font-medium first:pl-4 last:pr-4 dark:border-b-white/10",
        grid && "border-l border-l-border/30 first:border-l-0 dark:border-l-white/5",
        !bleed && "sm:first:pl-2 sm:last:pr-2",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  const { bleed, dense, grid, striped } = React.useContext(TableContext)

  return (
    <td
      data-slot="table-cell"
      className={cn(
        "relative px-4 first:pl-4 last:pr-4",
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
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
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
}
