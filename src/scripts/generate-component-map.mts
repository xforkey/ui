import fs from 'fs';
import path from 'path';

// Define directories to search for source files
const SOURCE_DIRECTORIES = [
    'src/components/xfork-ui/',
    'src/docs/components/demos/',
    'src/docs/components/demos/charts/'
];

// MDX files directory
const MDX_DIRECTORY = 'src/docs/mdx/';

// Examples directory
const EXAMPLES_DIRECTORY = 'src/app/(app)/examples/';

// Extra components (special documentation components)
const EXTRA_COMPONENTS = [
    'react-hook-form',
    'combobox',
    'typography',
    'date-picker',
    'data-table'
];

// Output file path
const OUTPUT_PATH = 'src/docs/component-map.ts';

// Function to extract sections from MDX content
function extractSections(content: string): Array<{ id: string; title: string }> {
    const lines = content.split('\n');
    const sections: Array<{ id: string; title: string }> = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Match markdown headings (## or ###)
        const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            const title = headingMatch[2].trim();

            // Only include level 2 headings (##) as main sections
            if (level === 2) {
                // Create slug from title
                const id = title
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
                    .replace(/\s+/g, '-') // Replace spaces with hyphens
                    .replace(/-+/g, '-') // Replace multiple hyphens with single
                    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

                sections.push({
                    id,
                    title
                });
            }
        }
    }

    return sections;
}

function findSourceFile(componentName: string): string | null {
    const fileName = `${componentName}.tsx`;

    for (const directory of SOURCE_DIRECTORIES) {
        const fullPath = path.resolve(directory, fileName);
        if (fs.existsSync(fullPath)) {
            return path.join(directory, fileName);
        }
    }

    return null;
}

function isXforkUIComponent(componentName: string): boolean {
    const fileName = `${componentName}.tsx`;
    const xforkUIPath = path.resolve('src/components/xfork-ui/', fileName);
    return fs.existsSync(xforkUIPath);
}

function formatComponentName(name: string): string {
    return name
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function scanExamplesDirectory(): string[] {
    const examplesPath = path.resolve(EXAMPLES_DIRECTORY);
    if (!fs.existsSync(examplesPath)) {
        console.log(`Examples directory not found: ${EXAMPLES_DIRECTORY}`);
        return [];
    }

    const entries = fs.readdirSync(examplesPath, { withFileTypes: true });
    return entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
        .filter(name => !['layout.tsx', 'page.tsx'].includes(name)); // Filter out non-example files
}

function scanAllFiles(): Record<string, string> {
    const fileMap: Record<string, string> = {};

    const directories = [
        'src/components/xfork-ui/',
        'src/docs/components/demos/',
        'src/docs/components/demos/charts/'
    ];

    for (const directory of directories) {
        const dirPath = path.resolve(directory);
        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.tsx'));
            for (const file of files) {
                const fileName = path.basename(file, '.tsx');
                fileMap[fileName] = path.join(directory, file);
            }
        }
    }

    return fileMap;
}

function generateComponentMap() {
    const components: Record<string, {
        path: string | null;
        category: string;
        type: string;
        displayName: string;
        href: string;
        sections: Array<{ id: string; title: string }>;
    }> = {};

    // Generate the demo map
    const demoMap = scanAllFiles();

    // Scan MDX files to get the list of documented components
    const mdxPath = path.resolve(MDX_DIRECTORY);
    if (!fs.existsSync(mdxPath)) {
        console.error(`MDX directory not found: ${MDX_DIRECTORY}`);
        return;
    }

    const mdxFiles = fs.readdirSync(mdxPath).filter(file => file.endsWith('.mdx'));

    for (const mdxFile of mdxFiles) {
        const componentName = path.basename(mdxFile, '.mdx');

        // Read MDX file content to extract sections
        const mdxFilePath = path.join(mdxPath, mdxFile);
        const mdxContent = fs.readFileSync(mdxFilePath, 'utf-8');
        const sections = extractSections(mdxContent);

        // Determine type based on component name and location
        let type = 'components';
        let category = 'ui';

        if (isXforkUIComponent(componentName)) {
            type = 'ui';
            category = 'components';
        } else if (EXTRA_COMPONENTS.includes(componentName)) {
            type = 'extra';
            category = 'components';
        }

        // Try to find the corresponding source file
        const sourcePath = findSourceFile(componentName);

        components[componentName] = {
            path: sourcePath,
            category: category,
            type: type,
            displayName: formatComponentName(componentName),
            href: `/docs/${componentName}`,
            sections: sections
        };
    }

    // Add examples from the examples directory
    const exampleNames = scanExamplesDirectory();
    for (const exampleName of exampleNames) {
        components[exampleName] = {
            path: null, // Examples don't have a source path
            category: 'examples',
            type: 'example',
            displayName: formatComponentName(exampleName),
            href: `/examples/${exampleName}`,
            sections: [] // Examples don't have sections for now
        };
    }

    // Generate TypeScript content with proper types
    const tsContent = `// This file is auto-generated by src/scripts/generate-component-map.mts
  // Do not edit this file directly
  
  export interface ComponentInfo {
    path: string | null;
    category: string;
    type: string;
    displayName: string;
    href: string;
    sections: Array<{ id: string; title: string }>;
  }
  
  export type ComponentMap = Record<string, ComponentInfo>
  export type DemoMap = Record<string, string>
  
  export const componentMap: ComponentMap = {
  ${Object.entries(components).map(([name, info]) =>
        `  "${name}": {
      path: ${info.path ? `"${info.path}"` : 'null'},
      category: "${info.category}",
      type: "${info.type}",
      displayName: "${info.displayName}",
      href: "${info.href}",
      sections: ${JSON.stringify(info.sections)}
    }`
    ).join(',\n')}
  } as const;
  
  export const demoMap: DemoMap = {
  ${Object.entries(demoMap).map(([name, path]) =>
        `  "${name}": "${path}"`
    ).join(',\n')}
  } as const;
  
  export default componentMap;
  `;

    const outputPath = path.resolve(process.cwd(), OUTPUT_PATH);
    fs.writeFileSync(outputPath, tsContent);

    console.log(`✅ Generated component map with ${Object.keys(components).length} components`);
    console.log(`📄 Component map saved to: ${outputPath}`);

    // Log summary by category and type
    const categoryCounts: Record<string, number> = {};
    const typeCounts: Record<string, number> = {};
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