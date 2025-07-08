import * as UiCard from "@/components/ui/card";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <UiCard.Card
      data-slot="card"
      className={cn(
        "relative forced-colors:outline",
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

export { Card };
export * from "@/components/ui/card";
