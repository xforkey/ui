"use client";

import { clsx } from "clsx";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Preview({
    children,
    resizable = false,
    padding = true,
    className,
}: React.PropsWithChildren<{
    resizable?: boolean;
    padding?: boolean;
    className?: string;
}>) {
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);
    const constraintsRef = useRef(null);
    const x = useMotionValue(0);
    const marginRight = useTransform(x, (x) => -x);

    useEffect(() => {
        if (!resizable || !containerRef.current) return;
        const observer = new window.ResizeObserver(() => x.set(0));
        observer.observe(containerRef.current);
        return () => {
            observer.disconnect();
        };
    }, [x, resizable]);

    if (!resizable) {
        return (
            <div
                className={clsx(
                    className,
                    "not-prose overflow-visible rounded-lg bg-background outline outline-white/5 dark:bg-background/70 flex justify-center",
                    padding && "p-8",
                )}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            data-dragging={isDragging ? true : undefined}
            className={clsx(className, "group not-prose relative overflow-hidden sm:overflow-visible")}
        >
            <motion.div
                style={{ marginRight }}
                className={clsx(
                    padding && "p-8",
                    "@container relative overflow-visible rounded-lg bg-white outline outline-white/5 dark:bg-background/50 dark:inset-ring dark:inset-ring-white/5",
                    // Add layer on top of example while dragging to prevent issues with iframes
                    "group-data-dragging:before:absolute group-data-dragging:before:inset-0",
                )}
            >
                {children}
            </motion.div>
            <div ref={constraintsRef} className="pointer-events-none absolute inset-y-0 right-1.5 left-60 max-sm:hidden">
                <motion.div
                    title="Drag to resize"
                    className={clsx(
                        "pointer-events-auto absolute top-1/2 right-0 z-50 -mt-6 h-12 w-1.5 cursor-ew-resize rounded-full",
                        "bg-background/20 group-data-dragging:bg-background/40 hover:bg-background/40",
                        "dark:bg-ring dark:group-data-dragging:bg-slate-300 dark:hover:bg-slate-300",
                    )}
                    drag="x"
                    dragElastic={0}
                    dragMomentum={false}
                    dragConstraints={constraintsRef}
                    style={{ x }}
                    onMouseDown={() => {
                        setIsDragging(true);
                    }}
                    onMouseUp={() => {
                        setIsDragging(false);
                    }}
                    onDragStart={() => {
                        setIsDragging(true);
                        document.documentElement.classList.add("select-none");
                        document.body.style.cursor = "ew-resize";
                    }}
                    onDragEnd={() => {
                        setIsDragging(false);
                        document.documentElement.classList.remove("select-none");
                        document.body.style.cursor = "";
                    }}
                />
            </div>
        </div>
    );
}