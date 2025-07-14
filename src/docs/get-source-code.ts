import fs from 'fs';
import path from 'path';
import { componentMap } from './component-map';

/**
 * Get the source code for a component by name
 * Uses the component map to get the direct path to the component file
 */
export default function getSourceCode(componentName: string): string {
    try {
        // Get the component info directly from the flattened map
        const componentInfo = componentMap[componentName];

        if (!componentInfo || typeof componentInfo === 'string') {
            return `// Component "${componentName}" not found in component map`;
        }

        // Handle different component types
        if (componentInfo.type === 'extra') {
            return `// This is a guide/documentation component. No source code available for: ${componentName}`;
        }

        if (!componentInfo.path) {
            return `// No source path defined for component: ${componentName}`;
        }

        // Read the file directly using the mapped path
        const fullPath = path.resolve(process.cwd(), componentInfo.path);
        const code = fs.readFileSync(fullPath, 'utf-8');
        return code;

    } catch (error) {
        console.error(`Error reading component "${componentName}":`, error);
        return `// Error loading component source for: ${componentName}`;
    }
}
