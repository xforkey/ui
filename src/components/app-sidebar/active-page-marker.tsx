"use client"

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