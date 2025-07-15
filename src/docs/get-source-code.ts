import fs from 'fs';
import path from 'path';
import { componentMap, demoMap } from './component-map';

/**
 * Get the source code for a component by name
 * Uses the component map to get the direct path to the component file
 */
export default function getSourceCode(componentName: string): string {
    try {
        // First, try to find the file directly in the demoMap
        const filePath = demoMap[componentName];

        if (filePath) {
            // File found in demoMap, read it directly
            const fullPath = path.resolve(process.cwd(), filePath);
            const code = fs.readFileSync(fullPath, 'utf-8');
            return code;
        }

        // If not found in demoMap, check if it's a component in the componentMap
        const componentInfo = componentMap[componentName];

        if (!componentInfo || typeof componentInfo === 'string') {
            return `// Component "${componentName}" not found`;
        }

        // Handle different component types
        if (componentInfo.type === 'extra') {
            return `// This is a guide/documentation component. No source code available for: ${componentName}`;
        }

        if (!componentInfo.path) {
            return `// No source path defined for component: ${componentName}`;
        }

        // Read the component source file
        const fullPath = path.resolve(process.cwd(), componentInfo.path);
        const code = fs.readFileSync(fullPath, 'utf-8');
        return code;

    } catch (error) {
        console.error(`Error reading component "${componentName}":`, error);
        return `// Error loading component source for: ${componentName}`;
    }
}

