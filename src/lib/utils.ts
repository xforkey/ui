import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a rem value to pixels
 * @param rem The rem value to convert
 * @returns The equivalent value in pixels
 */
export function remToPx(remValue: number) {
  const rootFontSize =
    typeof window === 'undefined'
      ? 16
      : parseFloat(window.getComputedStyle(document.documentElement).fontSize)

  return remValue * rootFontSize
}

