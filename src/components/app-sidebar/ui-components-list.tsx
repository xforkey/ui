import fs from "fs"
import path from "path"

export interface UIComponentInfo {
    name: string
    displayName: string
}

/**
 * Formats a component name for display
 * @param name The component name in kebab-case
 * @returns The formatted component name
 */
function formatComponentName(name: string): string {
    return name
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

/**
 * Fetches the list of UI components from the file system
 * This is a server component function that runs at build/request time
 */
export async function getUIComponentsList(): Promise<UIComponentInfo[]> {
    // Define the UI components directory path
    const uiComponentsDir = path.join(process.cwd(), "src", "components", "ui")

    // Read all files in the UI components directory
    const files = fs.readdirSync(uiComponentsDir)

    // Filter for .tsx files
    const componentFiles = files.filter(file => file.endsWith(".tsx"))

    // Process each file to extract component info
    const components = componentFiles.map(file => {
        // Remove .tsx extension
        const name = file.replace(".tsx", "")

        // Format the display name
        const displayName = formatComponentName(name)

        return { name, displayName }
    })

    // Sort alphabetically
    return components.sort((a, b) => a.name.localeCompare(b.name))
}