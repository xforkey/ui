import type { TOCEntry } from "@/docs/components/table-of-contents";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import {
    tsx,
    js,
    ts,
    jsx,
    html,
    svelte,
    css,
    bash
} from "@/docs/components/code-example";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Type definition for the navigation index
export type NavItem = [string, string, NavItem[]?];
export type NavIndex = Record<string, NavItem[]>;

export async function getDocPageBySlug(
    slug: string,
): Promise<null | { Component: React.FC; title: string; description: string, links: { doc: string, api: string } }> {
    try {
        // Check if the file exists
        if (!(await fs.stat(path.join(process.cwd(), "./src/docs/mdx", `${slug}.mdx`)).catch(() => false))) {
            return null;
        }

        let module = await import(`./mdx/${slug}.mdx`);
        if (!module.default) {
            return null;
        }

        return {
            Component: module.default,
            title: module.title,
            description: module.description,
            links: module.links
        };
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function getDocPageSlugs() {
    let slugs = [];
    for (let file of await fs.readdir(path.join(__dirname, "./mdx"))) {
        if (!file.endsWith(".mdx")) continue;
        slugs.push(path.parse(file).name);
    }
    return slugs;
}

export async function generateTableOfContents(slug: string) {
    // Check if the file exists
    if (!(await fs.stat(path.join(process.cwd(), "./src/docs/mdx", `${slug}.mdx`)).catch(() => false))) {
        return [];
    }

    let markdown = await fs.readFile(path.join(process.cwd(), "./src/docs/mdx", `${slug}.mdx`), "utf8");

    return generateTableOfContentsFromMarkdown(markdown);
}

export async function generateTableOfContentsFromMarkdown(markdown: string) {
    let headings = [
        // Match Markdown and HTML headings (e.g., ## Heading, <h2>Heading</h2>)
        ...markdown.matchAll(/^(#+)\s+(.+)$|^<h([1-6])(?:\s+[^>]*\bid=["'](.*?)["'][^>]*)?>(.*?)<\/h\3>/gm),
    ].map((match) => {
        let level;
        let text;
        let slug;

        if (match[1]) {
            // Markdown headings
            level = match[1].length;
            text = match[2].trim().replaceAll("\\", "");
        } else {
            // HTML headings
            level = parseInt(match[3], 10); // Extract level from <hN>
            text = match[5].trim().replaceAll("\\", "");
            if (match[4]) {
                slug = `#${match[4]}`;
            }
        }

        // Generate slug
        slug ??= `#${text
            .replace(/`([^`]+)`/g, "$1") // Remove inline code formatting
            .replace(/[^\w\s-]/g, "") // Remove special characters
            .trim()
            .replace(/\s+/g, "-") // Replace spaces with hyphens
            .toLowerCase()}`;

        return { level, text, slug, children: [] };
    });

    let toc: TOCEntry[] = [];
    let stack: TOCEntry[] = [{ level: 0, text: "", slug: "", children: toc }];

    let containsQuickReference = markdown.match(/\<ApiTable\s+rows=\{\[/);
    if (containsQuickReference) {
        toc.push({
            level: 0,
            text: "Quick reference",
            slug: "#quick-reference",
            children: [],
        });
    }

    for (let heading of headings) {
        while (stack[stack.length - 1].level >= heading.level) stack.pop();
        stack[stack.length - 1].children.push(heading);
        stack.push(heading);
    }

    return toc;
}

/**
 * Dynamically generates a navigation index from all MDX files
 * Returns a structure similar to the one in app/docs/[component]/index.ts
 */
export async function generateNavigationIndex(): Promise<NavIndex> {
    // Get all MDX file slugs
    const slugs = await getDocPageSlugs();

    // Create a map to store the navigation index
    const navIndex: NavIndex = {};

    // Process each slug
    for (const slug of slugs) {
        try {
            // Get the document details
            const doc = await getDocPageBySlug(slug);
            if (!doc) continue;

            // Determine the category based on the slug or document content
            // This is a simple implementation - you might want to add more sophisticated categorization
            let category = "Components";

            // Special cases for known categories
            if (slug.includes("focus") || slug.includes("states")) {
                category = "Core concepts";
            } else if (slug === "typography") {
                category = "Typography";
            } else if (slug.includes("layout") || slug === "aspect-ratio") {
                category = "Layout";
            }

            // Create the nav item
            const navItem: NavItem = [doc.title, `/docs/${slug}`];

            // Add to the appropriate category
            if (!navIndex[category]) {
                navIndex[category] = [];
            }
            navIndex[category].push(navItem);
        } catch (error) {
            console.error(`Error processing ${slug}:`, error);
        }
    }

    // Sort categories and items within categories
    for (const category in navIndex) {
        navIndex[category].sort((a, b) => a[0].localeCompare(b[0]));
    }

    return navIndex;
}

type Example = {
    lang: string;
    code: string;
};

export function parseCodeBlock({
    className,
    rawCode,
}: {
    className: string;
    rawCode: string;
}): { example: Example; filename?: string } {
    const lang = className?.replace('language-', '') || '';
    let code = rawCode;
    let filename: string | undefined;

    const lines = code.split('\n');
    const match = lines[0].match(/\[\!code filename\:(.+)\]/);
    if (match) {
        filename = match[1];
        code = lines.slice(1).join('\n');
    }

    let example: Example;
    switch (lang) {
        case 'js':
            example = js`${code}`;
            break;
        case 'ts':
            example = ts`${code}`;
            break;
        case 'jsx':
            example = jsx`${code}`;
            break;
        case 'tsx':
            example = tsx`${code}`;
            break;
        case 'html':
            example = html`${code}`;
            break;
        case 'svelte':
            example = svelte`${code}`;
            break;
        case 'css':
            example = css`${code}`;
            break;
        case 'bash':
            example = bash`${code}`;
            break;
        default:
            example = { lang, code };
    }

    return { example, filename };
}
