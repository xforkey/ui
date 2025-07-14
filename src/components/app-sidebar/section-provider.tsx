'use client'

import {
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
} from 'react'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'

import { remToPx } from '@/lib/utils'

export interface Section {
    id: string
    title: string
    offsetRem?: number
    tag?: string
    headingRef?: React.RefObject<HTMLHeadingElement | null>
}

// Create atoms factory function to avoid multiple instances
function createSectionAtoms() {
    const sectionsAtom = atom<Array<Section>>([])
    const visibleSectionsAtom = atom<Array<string>>([])

    // Derived atom for setting visible sections
    const setVisibleSectionsAtom = atom(
        null,
        (get, set, visibleSections: Array<string>) => {
            const current = get(visibleSectionsAtom)
            if (current.join() !== visibleSections.join()) {
                set(visibleSectionsAtom, visibleSections)
            }
        }
    )

    // Atom for registering headings
    const registerHeadingAtom = atom(
        null,
        (get, set, { id, ref, offsetRem }: {
            id: string
            ref: React.RefObject<HTMLHeadingElement | null>
            offsetRem: number
        }) => {
            const sections = get(sectionsAtom)
            const updatedSections = sections.map((section) => {
                if (section.id === id) {
                    return {
                        ...section,
                        headingRef: ref,
                        offsetRem,
                    }
                }
                return section
            })
            set(sectionsAtom, updatedSections)
        }
    )

    return {
        sectionsAtom,
        visibleSectionsAtom,
        setVisibleSectionsAtom,
        registerHeadingAtom
    }
}

// Create a single instance of atoms
const sectionAtoms = createSectionAtoms()
export const sectionsAtom = sectionAtoms.sectionsAtom

function useVisibleSections() {
    const sections = useAtomValue(sectionsAtom)
    const setVisibleSections = useSetAtom(sectionAtoms.setVisibleSectionsAtom)

    useEffect(() => {
        function checkVisibleSections() {
            const { innerHeight, scrollY } = window
            const newVisibleSections: string[] = []

            for (
                let sectionIndex = 0;
                sectionIndex < sections.length;
                sectionIndex++
            ) {
                const { id, headingRef, offsetRem = 0 } = sections[sectionIndex]

                if (!headingRef?.current) {
                    continue
                }

                const offset = remToPx(offsetRem)
                const top = headingRef.current.getBoundingClientRect().top + scrollY

                if (sectionIndex === 0 && top - offset > scrollY) {
                    newVisibleSections.push('_top')
                }

                const nextSection = sections[sectionIndex + 1]
                const bottom =
                    (nextSection?.headingRef?.current?.getBoundingClientRect().top ??
                        Infinity) +
                    scrollY -
                    remToPx(nextSection?.offsetRem ?? 0)

                if (
                    (top > scrollY && top < scrollY + innerHeight) ||
                    (bottom > scrollY && bottom < scrollY + innerHeight) ||
                    (top <= scrollY && bottom >= scrollY + innerHeight)
                ) {
                    newVisibleSections.push(id)
                }
            }

            setVisibleSections(newVisibleSections)
        }

        const raf = window.requestAnimationFrame(() => checkVisibleSections())
        window.addEventListener('scroll', checkVisibleSections, { passive: true })
        window.addEventListener('resize', checkVisibleSections)

        return () => {
            window.cancelAnimationFrame(raf)
            window.removeEventListener('scroll', checkVisibleSections)
            window.removeEventListener('resize', checkVisibleSections)
        }
    }, [sections, setVisibleSections])
}

const SectionContext = createContext<{
    sectionsAtom: typeof sectionAtoms.sectionsAtom
    visibleSectionsAtom: typeof sectionAtoms.visibleSectionsAtom
    registerHeadingAtom: typeof sectionAtoms.registerHeadingAtom
} | null>(null)

const useIsomorphicLayoutEffect =
    typeof window === 'undefined' ? useEffect : useLayoutEffect

export function SectionProvider({
    sections,
    children,
}: {
    sections: Array<Section>
    children: React.ReactNode
}) {
    const [, setSections] = useAtom(sectionsAtom)

    useVisibleSections()

    useIsomorphicLayoutEffect(() => {
        setSections(sections)
    }, [sections, setSections])

    return (
        <SectionContext.Provider value={{
            sectionsAtom: sectionAtoms.sectionsAtom,
            visibleSectionsAtom: sectionAtoms.visibleSectionsAtom,
            registerHeadingAtom: sectionAtoms.registerHeadingAtom
        }}>
            {children}
        </SectionContext.Provider>
    )
}

export function useSectionStore() {
    const context = useContext(SectionContext)
    if (!context) {
        throw new Error('useSectionStore must be used within a SectionProvider')
    }

    const sections = useAtomValue(context.sectionsAtom)
    const visibleSections = useAtomValue(context.visibleSectionsAtom)
    const registerHeading = useSetAtom(context.registerHeadingAtom)

    return {
        sections,
        visibleSections,
        registerHeading,
    }
}

// Hook for components that need to select specific data
export function useSections() {
    return useAtomValue(sectionsAtom)
}

export function useVisibleSectionsValue() {
    return useAtomValue(sectionAtoms.visibleSectionsAtom)
}