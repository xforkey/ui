import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative rounded-xl py-8 forced-colors:outline flex flex-col gap-6",
        "bg-card",
        "shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_4px_0px_rgba(0,0,0,0.04)]",
        "before:pointer-events-none before:absolute",
        "before:-inset-px before:rounded-xl",
        "before:shadow-[0px_1px_4px_0px_rgba(0,0,0,0.06),_0px_1px_0px_0px_rgba(255,255,255,0.4)_inset]",
        "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]",
        "dark:before:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.20),_0px_1px_0px_0px_rgba(255,255,255,0.06)_inset]",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
