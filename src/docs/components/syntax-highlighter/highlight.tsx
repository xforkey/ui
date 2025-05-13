"use client";

import React from "react";

// Simple syntax highlighter that doesn't depend on external libraries
export function highlight({
    code,
    lang,
}: {
    code: string;
    lang: string;
}): React.ReactElement {
    // Basic syntax highlighting with pre and code tags
    return (
        <pre className={`language-${lang}`}>
            <code>{code}</code>
        </pre>
    );
}

export function HighlightedCode({
    className,
    example,
    ...props
}: {
    className?: string;
    example: { lang: string; code: string };
    [key: string]: any;
}) {
    return (
        <div {...props} className={className}>
            {highlight({
                ...example,
            })}
        </div>
    );
}

// Placeholder for the highlighter
export const highlighter = {
    codeToHast: (code: string, options: any) => {
        return {
            type: "element",
            tagName: "pre",
            properties: { className: [`language-${options.lang}`] },
            children: [
                {
                    type: "element",
                    tagName: "code",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: code,
                        },
                    ],
                },
            ],
        };
    },
};