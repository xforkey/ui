'use client'

import { motion, useIsPresent } from 'framer-motion'
import { useSectionStore } from './section-provider'
import type { ComponentInfo } from '@/docs/component-map'

interface NavGroup {
    category: string
    links: ComponentInfo[]
}

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
    group,
    pathname,
    itemHeight = 32,
}: {
    group: NavGroup
    pathname: string
    itemHeight?: number
}) {
    const { sections } = useSectionStore()
    // Use current values directly instead of initial values to ensure updates
    const sectionsValue = sections

    const isPresent = useIsPresent()
    // Height should cover the main component link + all its sections
    // Use sectionsValue (all sections) instead of visibleSectionsValue (only visible ones)
    const totalItems = 1 + sectionsValue.length // 1 for main component + all sections
    const height = isPresent
        ? totalItems * itemHeight
        : itemHeight
    const top = group.links.findIndex((link) => link.href === pathname) * itemHeight

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute -inset-x-4 top-0 right-1 bg-zinc-800/2.5 will-change-transform dark:bg-white/5 rounded-sm"
            style={{ height, top }}
        />
    )
}
