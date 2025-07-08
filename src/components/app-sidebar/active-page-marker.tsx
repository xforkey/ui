"use client"

import { remToPx } from "@/lib/utils"
import { motion } from "framer-motion"

interface ActivePageMarkerProps {
    activeIndex: number
    itemHeight?: number
    offset?: number
}

export function ActivePageMarker({
    activeIndex,
    itemHeight = 32, // Default height in pixels
    offset = 4       // Default offset in pixels
}: ActivePageMarkerProps) {
    const top = offset + activeIndex * itemHeight

    return (
        <motion.div
            layout
            className="absolute left-0 h-6 w-px bg-primary"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2 }
            }}
            exit={{ opacity: 0 }}
            style={{
                top,
                zIndex: 10 // Ensure it's above other elements
            }}
        />
    )
}

export function VisibleSectionHighlight({
    activeIndex
}: {
    activeIndex: number
}) {

    // const isPresent = useIsPresent()
    const firstVisibleSectionIndex = activeIndex
    const itemHeight = remToPx(2)
    const height = itemHeight
    const top = firstVisibleSectionIndex * itemHeight

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute -inset-x-3 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/5"
            style={{ borderRadius: 8, height, top }}
        />
    )
}