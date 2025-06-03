'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as UiTabs from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <UiTabs.Tabs className={cn('relative mt-6 w-full', className)} {...props} />
}

export function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <UiTabs.TabsList
      className={cn(
        'grid grid-cols-4 justify-start w-full max-w-2xl bg-transparent border-b border-border not-prose',
        className
      )}
      {...props}
    />
  )
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <UiTabs.TabsTrigger
      className={cn(
        'flex items-center gap-2 pb-2 rounded-none bg-transparent border-0',
        'data-[state=active]:text-foreground',
        'dark:data-[state=active]:text-white',
        'data-[state=inactive]:text-muted-foreground',
        'data-[state=active]:bg-background',
        'dark:data-[state=active]:bg-transparent',
        'data-[state=active]:border-b-2',
        'dark:data-[state=active]:border-primary',
        'text-foreground dark:text-muted-foreground',
        'data-[state=active]:shadow-none',
        'dark:data-[state=active]:shadow-none',
        className
      )}
      {...props}
    />
  )
}

/* "flex items-center gap-2 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary pb-2 rounded-none bg-transparent text-muted-foreground data-[state=active]:shadow-none", */

export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <UiTabs.TabsContent
      className={cn('mt-2', className)}
      {...props}
    />
  )
}
