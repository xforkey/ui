import React from 'react';

export default async function Layout({ children }: React.PropsWithChildren) {
    return (
        <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
            <div className="relative">
                {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
                <div hidden />
                {children}
            </div>
        </div>
    );
}
