// components/example.tsx (Server Component)
import fs from 'fs';
import path from 'path';

// Define directories
const demoDirectory = process.env.NEXT_PUBLIC_DEMO_DIRECTORY || 'src/docs/components/demos/';
const chartsDirectory = 'src/docs/components/demos/charts/';
const uiDirectory = 'src/components/ui/';
const componentMapPath = 'src/docs/component-map.json';

/**
 * Get the source code for a component by name
 * Uses the component map to determine if it's a UI component or a demo
 */
export default function getSourceCode(componentName: string) {
    // Try to load the component map
    let uiComponents: string[] = [];

    try {
        // Check if the component map exists
        const mapPath = path.resolve(process.cwd(), componentMapPath);
        if (fs.existsSync(mapPath)) {
            // Load the component map
            const mapData = fs.readFileSync(mapPath, 'utf-8');
            const componentMap = JSON.parse(mapData);
            uiComponents = componentMap.ui || [];
        }
    } catch (error) {
        console.warn('Could not load component map:', error);
    }

    // Check if this is a UI component (exact match with a component in the map)
    const isUIComponent = uiComponents.includes(componentName);

    // Choose the appropriate directory based on whether it's a UI component or not
    const directory = isUIComponent ? uiDirectory : demoDirectory;
    const fileName = `${componentName}.tsx`;

    // Construct the full path
    const fullPath = path.resolve(process.cwd(), `${directory}${fileName}`);

    try {
        // Read and return the file contents
        const code = fs.readFileSync(fullPath, 'utf-8');
        return code;
    } catch (error) {
        // If the file is not found in the main demos directory, try the charts directory
        if (!isUIComponent && directory === demoDirectory) {
            try {
                const chartsPath = path.resolve(process.cwd(), `${chartsDirectory}${fileName}`);
                const code = fs.readFileSync(chartsPath, 'utf-8');
                return code;
            } catch (chartsError) {
                console.error(`Error reading file for component "${componentName}" from charts directory:`, chartsError);
            }
        }

        console.error(`Error reading file for component "${componentName}":`, error);
        return `// Component source not found for: ${componentName}`;
    }
}
