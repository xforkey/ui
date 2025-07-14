"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/xfork-ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/xfork-ui/collapsible"

interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CollapseWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  ...props
}: CollapseProps) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-32")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-center justify-center dark:bg-gradient-to-b dark:from-background/0 dark:to-background/80 bg-gradient-to-b from-foreground/0 to-foreground/80 p-2",
            isOpened ? "inset-x-0 bottom-0 h-24" : "inset-1"
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 text-xs">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  )
}
