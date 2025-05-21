import fs from 'fs';
import path from 'path';

// Define directories
const uiDirectory = 'src/components/ui/';
const outputPath = 'src/docs/component-map.json';

/**
 * Generate a component map that can be used by the application
 */
function generateComponentMap() {
    // Scan the UI directory for component files
    const fullUIPath = path.resolve(process.cwd(), uiDirectory);

    try {
        const files = fs.readdirSync(fullUIPath);

        // Extract component names from filenames (remove .tsx extension)
        const uiComponents = files
            .filter(file => file.endsWith('.tsx'))
            .map(file => file.replace('.tsx', ''));

        // Create the map object
        const map = {
            ui: uiComponents,
            timestamp: new Date().toISOString()
        };

        // Write the map to a JSON file that can be imported
        const mapPath = path.resolve(process.cwd(), outputPath);
        fs.writeFileSync(mapPath, JSON.stringify(map, null, 2), 'utf-8');

        console.log(`Component map generated with ${uiComponents.length} UI components`);
        console.log(`Map saved to ${outputPath}`);

        return map;
    } catch (error) {
        console.error('Error generating component map:', error);
        process.exit(1);
    }
}

// Generate the component map
generateComponentMap();