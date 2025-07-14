'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { SectionProvider } from './section-provider'
import { AppSidebar } from './index'
import { useSectionStore } from './section-provider'
import type { ComponentInfo, ComponentMap } from '@/docs/component-map'

interface NavGroup {
    category: string
    links: ComponentInfo[]
}

interface SidebarWithSectionsProps {
    componentMap: ComponentMap
}

export function SidebarWithSections({
    componentMap,
    ...props
}: SidebarWithSectionsProps & Omit<React.ComponentProps<typeof AppSidebar>, 'navGroups'>) {
    const pathname = usePathname()

    // Transform componentMap to NavGroup format
    const navGroups: NavGroup[] = useMemo(() => {
        // Map category names for display
        const categoryTitles: Record<string, string> = {
            'components': 'Components',
            'examples': 'Examples'
        };

        // Group components by category in a single pass
        const groupsMap: Record<string, ComponentInfo[]> = {};

        Object.entries(componentMap).forEach(([, component]) => {
            const category = component.category;

            if (!groupsMap[category]) {
                groupsMap[category] = [];
            }

            groupsMap[category].push(component);
        });

        // Convert to NavGroup array and sort links within each group
        return Object.entries(groupsMap)
            .map(([category, links]) => ({
                category: categoryTitles[category] || category,
                links: links.sort((a, b) => a.displayName.localeCompare(b.displayName))
            }))
            .sort((a, b) => {
                // Sort groups so Examples comes first, then Components
                if (a.category === 'Examples') return -1;
                if (b.category === 'Examples') return 1;
                return a.category.localeCompare(b.category);
            });
    }, [componentMap]);

    // Get sections for the current page
    const sections = useMemo(() => {
        if (!pathname?.startsWith('/docs/')) return [];

        // Extract component name from pathname (e.g., "/docs/button" -> "button")
        const componentName = pathname.replace('/docs/', '');
        const component = componentMap[componentName];

        return component?.sections || [];
    }, [pathname, componentMap]);

    return (
        <SectionProvider sections={sections}>
            <AppSidebar navGroups={navGroups} {...props} />
            {pathname?.startsWith('/docs/') && <SectionTracker />}
        </SectionProvider>
    )
}


export function SectionTracker() {
    const { registerHeading } = useSectionStore()

    useEffect(() => {
        // Find all headings on the page that have IDs
        const headings = document.querySelectorAll('h2[id], h3[id]')

        headings.forEach((heading) => {
            const id = heading.id
            if (id && heading instanceof HTMLHeadingElement) {
                // Create a ref object for the heading
                const ref = { current: heading }

                // Register the heading with the section store
                registerHeading({
                    id,
                    ref,
                    offsetRem: 4,
                })
            }
        })
    }, [registerHeading])

    return null // This component doesn't render anything
}