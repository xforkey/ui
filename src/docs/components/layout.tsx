import React from 'react';

import { cn } from '@/lib/utils';

export default async function Layout({ children }: React.PropsWithChildren) {
    return (
        <div>
            <div
                className={cn(
                    // Base layout
                    "grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto]",

                    // Large & extra-large screens
                    "lg:grid-cols-[2.5rem_minmax(0,1fr)_2.5rem]",
                    "xl:grid-cols-[2.5rem_minmax(0,1fr)_2.5rem]"
                )}
            >
                {/* Left Candy Cane */}
                <div
                    className={cn(
                        // Grid placement
                        "col-start-1 row-span-5 row-start-1",

                        // Visual styling
                        "border-x border-x-(--pattern-fg)",
                        "bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]",
                        "bg-[size:10px_10px] bg-fixed",

                        // Light mode color
                        "[--pattern-fg:var(--color-gray-950)]/5",

                        // Dark mode color
                        "dark:[--pattern-fg:var(--color-white)]/10",

                        // Visibility
                        "max-lg:hidden"
                    )}
                />

                {/* Main content area */}
                <div
                    className={cn(
                        "relative row-start-1 grid grid-cols-subgrid lg:col-start-2"
                    )}
                >
                    {children}
                </div>

                {/* Right Candy Cane */}
                <div
                    className={cn(
                        // Grid placement
                        "col-start-3 row-span-5 row-start-1",

                        // Visual styling
                        "border-x border-x-(--pattern-fg)",
                        "bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]",
                        "bg-[size:10px_10px] bg-fixed",

                        // Light mode color
                        "[--pattern-fg:var(--color-gray-950)]/5",

                        // Dark mode color
                        "dark:[--pattern-fg:var(--color-white)]/10",

                        // Visibility
                        "max-lg:hidden"
                    )}
                />
            </div>
        </div>
    );
}


{/* <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/5 dark:bg-white/10" />
                <div className="row-start-3 lg:col-start-3">
                    <FooterSitemap className="max-w-2xl lg:max-w-5xl" />
                </div>
                <div className="col-span-full col-start-2 row-start-4 h-px bg-gray-950/5 dark:bg-white/10" />
                <div className="row-start-5 grid lg:col-start-3">
                    <FooterMeta className="max-w-2xl lg:max-w-5xl" />
                </div> */}