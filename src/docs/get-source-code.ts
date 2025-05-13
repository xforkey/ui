// components/example.tsx (Server Component)
import fs from 'fs';
import path from 'path';
import React from 'react';

const demoDirectory = process.env.NEXT_PUBLIC_DEMO_DIRECTORY
const uiDirectory = 'src/components/ui/'

export default function getSourceCode(componentName: string) {
    // Common component variants and patterns
    const demoPatterns = [
        'demo',
        'destructive',
        'secondary',
        'outline',
        'ghost',
        'link',
        'icon',
        'with-icon',
        'as-child',
        'loading',
        'sm',
        'lg',
        'side',
        'form',
        'disabled',
        'with-text',
        'with-label',
        'with-button',
        'single',
        'multiple',
        'responsive',
        'dropdown',
        'popover',
        'dialog',
        'ellipsis',
        'separator',
        'orientation',
        'plugin',
        'size',
        'spacing',
        'grid',
        'legend',
        'tooltip',
        'axis',
        'controlled',
        'pattern',
        'scrollable',
        'horizontal',
        'vertical',
        'with-handle',
        'handle',
        'with-presets',
        'with-range',
        'close-button',
        'checkboxes',
        'radio-group',
        'file',
        'with-text',
        'with-presets',
        'h1',
        'h2',
        'h3',
        'h4',
        'blockquote',
        'table',
        'list',
        'inline-code',
        'lead',
        'large',
        'small',
        'muted'
    ];

    // Determine if this is a demo component or a UI component
    const isDemo = demoPatterns.some(pattern => componentName.includes(pattern));
    const matchedPattern = demoPatterns.some(pattern => componentName.includes(pattern));

    // Choose the appropriate directory and file name
    const directory = isDemo ? demoDirectory : uiDirectory;
    const fileName = `${componentName}.tsx`;

    // Construct the full path
    const fullPath = path.resolve(process.cwd(), `${directory}${fileName}`);

    // Read and return the file contents
    const code = fs.readFileSync(fullPath, 'utf-8');

    return code;
}
