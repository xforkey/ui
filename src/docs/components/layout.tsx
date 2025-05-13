import React from 'react';

import { cn } from '@/lib/utils';

export default async function Layout({ children }: React.PropsWithChildren) {
    return (
        <div
            className={cn(
                // Base layout
                "grid min-h-dvh grid-rows-[auto_1fr_auto]"
            )}
        >

            {/* Main content area */}
            <div
                className={cn(
                    "relative"
                )}
            >
                {children}
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