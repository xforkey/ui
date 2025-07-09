import * as React from "react"
import * as UiAvatar from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Styles needed to transform UI avatar to match xfork-ui appearance
const xforkAvatarStyles = {
  base: [
    // Add outline that UI lacks
    "outline outline-1 -outline-offset-1 outline-black/20 dark:outline-white/20",
    // Size difference - UI uses size-10, xfork uses size-8
    "size-8",
  ],

  image: [
    // Same styling, no changes needed
  ],

  fallback: [
    // Typography differences - UI uses text-sm, xfork uses text-sm font-medium uppercase
    "font-medium uppercase",
  ]
}

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof UiAvatar.Avatar>) {
  return (
    <UiAvatar.Avatar
      data-slot="avatar"
      className={cn(
        ...xforkAvatarStyles.base,
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof UiAvatar.AvatarImage>) {
  return (
    <UiAvatar.AvatarImage
      data-slot="avatar-image"
      className={cn(
        ...xforkAvatarStyles.image,
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof UiAvatar.AvatarFallback>) {
  return (
    <UiAvatar.AvatarFallback
      data-slot="avatar-fallback"
      className={cn(
        ...xforkAvatarStyles.fallback,
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, xforkAvatarStyles }
export * from "@/components/ui/avatar"
