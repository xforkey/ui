import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract sections from MDX content
function extractSections(content, filename) {
    const lines = content.split('\n');
    const sections = [];

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

// Function to scan MDX files and generate sections
async function generateSections() {
    const mdxDir = path.join(__dirname, '../src/docs/mdx');
    const outputPath = path.join(__dirname, '../src/docs/generated-sections.json');

    try {
        const files = fs.readdirSync(mdxDir);
        const sectionsMap = {};

        for (const file of files) {
            if (file.endsWith('.mdx')) {
                const filePath = path.join(mdxDir, file);
                const content = fs.readFileSync(filePath, 'utf-8');
                const componentName = path.basename(file, '.mdx');

                const sections = extractSections(content, file);

                if (sections.length > 0) {
                    sectionsMap[componentName] = sections;
                    console.log(`✓ Extracted ${sections.length} sections from ${file}`);
                } else {
                    console.log(`⚠ No sections found in ${file}`);
                }
            }
        }

        // Write the sections map to a JSON file
        fs.writeFileSync(outputPath, JSON.stringify(sectionsMap, null, 2));

        console.log(`\n✅ Generated sections for ${Object.keys(sectionsMap).length} components`);
        console.log(`📄 Sections saved to: ${outputPath}`);

        // Log a sample of what was generated
        const sampleComponent = Object.keys(sectionsMap)[0];
        if (sampleComponent) {
            console.log(`\n📋 Sample sections for "${sampleComponent}":`);
            sectionsMap[sampleComponent].forEach(section => {
                console.log(`   - ${section.title} (${section.id})`);
            });
        }

    } catch (error) {
        console.error('❌ Error generating sections:', error);
        process.exit(1);
    }
}

// Run the script
generateSections();