import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define directories to search for source files
const SOURCE_DIRECTORIES = [
    'src/components/xfork-ui/',
    'src/docs/components/demos/',
    'src/docs/components/demos/charts/'
];

// MDX files directory
const MDX_DIRECTORY = 'src/docs/mdx/';

// Extra components (special documentation components)
const EXTRA_COMPONENTS = [
    'react-hook-form',
    'combobox',
    'typography',
    'date-picker',
    'data-table'
];

function findSourceFile(componentName) {
    const fileName = `${componentName}.tsx`;

    for (const directory of SOURCE_DIRECTORIES) {
        const fullPath = path.resolve(directory, fileName);
        if (fs.existsSync(fullPath)) {
            return path.join(directory, fileName);
        }
    }

    return null;
}

function isXforkUIComponent(componentName) {
    const fileName = `${componentName}.tsx`;
    const xforkUIPath = path.resolve('src/components/xfork-ui/', fileName);
    return fs.existsSync(xforkUIPath);
}

function generateComponentMap() {
    const components = {};

    // Scan MDX files to get the list of documented components
    const mdxPath = path.resolve(MDX_DIRECTORY);
    if (!fs.existsSync(mdxPath)) {
        console.error(`MDX directory not found: ${MDX_DIRECTORY}`);
        return;
    }

    const mdxFiles = fs.readdirSync(mdxPath).filter(file => file.endsWith('.mdx'));

    for (const mdxFile of mdxFiles) {
        const componentName = path.basename(mdxFile, '.mdx');

        // Determine type based on component name and location
        let type = 'component';
        let category = 'ui';

        if (isXforkUIComponent(componentName)) {
            type = 'ui';
            category = 'component';
        } else if (EXTRA_COMPONENTS.includes(componentName)) {
            type = 'extra';
            category = 'component';
        }

        // Try to find the corresponding source file
        const sourcePath = findSourceFile(componentName);

        components[componentName] = {
            path: sourcePath,
            category: category,
            type: type
        };
    }

    const componentMap = {
        components,
        timestamp: new Date().toISOString()
    };

    const outputPath = path.join(__dirname, '../src/docs/component-map.json');
    fs.writeFileSync(outputPath, JSON.stringify(componentMap, null, 2));

    console.log(`✅ Generated component map with ${Object.keys(components).length} components`);
    console.log(`📄 Component map saved to: ${outputPath}`);

    // Log summary by category and type
    const categoryCounts = {};
    const typeCounts = {};
    Object.values(components).forEach(comp => {
        categoryCounts[comp.category] = (categoryCounts[comp.category] || 0) + 1;
        typeCounts[comp.type] = (typeCounts[comp.type] || 0) + 1;
    });

    console.log('\n📊 Components by category:');
    Object.entries(categoryCounts).forEach(([category, count]) => {
        console.log(`   - ${category}: ${count} components`);
    });

    console.log('\n📊 Components by type:');
    Object.entries(typeCounts).forEach(([type, count]) => {
        console.log(`   - ${type}: ${count} components`);
    });

    // Log sample components
    const sampleComponents = Object.keys(components).slice(0, 5);
    console.log(`\n📋 Sample components: ${sampleComponents.join(', ')}`);
}

// Run the script
generateComponentMap();