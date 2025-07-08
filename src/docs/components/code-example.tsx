import {
    transformerNotationDiff,
    transformerNotationHighlight,
    transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { clsx } from "clsx";
import dedent from "dedent";
import { createHighlighter } from "shiki";
import theme from "./syntax-highlighter/config/theme.json";

import { highlightClasses } from "./syntax-highlighter/highlight-classes";
import linesToDiv from "./syntax-highlighter/lines-to-div";
import atApplyInjection from "./syntax-highlighter/config/at-apply.json";
import atRulesInjection from "./syntax-highlighter/config/at-rules.json";
import themeFnInjection from "./syntax-highlighter/config/theme-fn.json";
import React from "react";
import { CopyButton } from "@/components/copy-button"
import { CollapseWrapper } from "./collapse-wrapper";


export function js(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "js", code: dedent(strings, ...args) };
}

export function ts(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "ts", code: dedent(strings, ...args) };
}

export function jsx(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "jsx", code: dedent(strings, ...args) };
}

export function html(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "html", code: dedent(strings, ...args) };
}

export function svelte(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "svelte", code: dedent(strings, ...args) };
}

export function css(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "css", code: dedent(strings, ...args) };
}

export function tsx(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "tsx", code: dedent(strings, ...args) };
}

export function bash(strings: TemplateStringsArray, ...args: unknown[]) {
    return { lang: "bash", code: dedent(strings, ...args) };
}

export async function CodeExample({
    example,
    filename,
    className = "",
    collapsible = false,
}: {
    example: { lang: string; code: string };
    filename?: string;
    className?: string;
    collapsible?: boolean
}) {
    // Always ensure not-prose class is included
    const combinedClassName = className.includes("not-prose") ? className : `not-prose ${className}`;

    return (
        <CodeExampleWrapper className={clsx(combinedClassName)} collapsible={collapsible}>
            {filename ? <div className="px-3 pt-0.5 pb-1.5 text-xs/5">{filename}</div> : null}
            <div className="relative">
                <div className="absolute top-2 right-2 z-10">
                    <CopyButton value={example.code} />
                </div>
                <HighlightedCode
                    example={example}
                    className={clsx(
                        "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-foreground/90! *:p-5 dark:*:bg-white/5!",
                        "**:[.line]:isolate **:[.line]:not-last:min-h-[1lh]",
                        "*:inset-ring *:inset-ring-foreground dark:*:inset-ring-white/5",
                    )}
                />
            </div>
        </CodeExampleWrapper>
    );
}

export function CodeExampleWrapper({ className, children, collapsible }: { className?: string; children: React.ReactNode, collapsible?: boolean }) {
    const Wrapper = collapsible ? CollapseWrapper : "div";
    return (
        <div className="rounded-xl bg-card in-data-stack:mt-0 in-data-stack:rounded-none in-[figure]:-mx-1 in-[figure]:-mb-1 in-data-stack:[:first-child>&]:rounded-t-xl in-data-stack:[:first-child>&]:*:rounded-t-xl in-data-stack:[:last-child>&]:rounded-b-xl in-data-stack:[:last-child>&]:*:rounded-b-xl">
            <Wrapper
                className={clsx(
                    "rounded-xl p-1 text-sm scheme-dark in-data-stack:rounded-none dark:bg-white/0 dark:inset-ring dark:inset-ring-white/10 in-data-stack:dark:inset-ring-0",
                    className,
                )}
            >
                {children}
            </Wrapper>
        </div>
    );
}

export function HighlightedCode({
    example,
    className,
}: {
    example: { lang: string; code: string };
    className?: string;
}) {
    const codeWithoutPrettierIgnore = example.code
        .split("\n")
        .filter((line) => !line.includes("prettier-ignore"))
        .join("\n");

    const code = highlighter
        .codeToHtml(codeWithoutPrettierIgnore, {
            lang: example.lang,
            theme: theme.name,
            transformers: [
                transformerNotationHighlight({
                    classActiveLine: "-mx-5 pl-[calc(var(--spacing)*5-2px)] border-l-2 pr-5 border-primary bg-primary/10",
                }),
                transformerNotationDiff({
                    classLineAdd:
                        "relative -mx-5 border-l-4 border-teal-400 bg-teal-300/15 pr-5 pl-8 before:absolute before:left-4 before:text-teal-400 before:content-['+']",
                    classLineRemove:
                        "relative -mx-5 border-l-4 border-red-400 bg-red-300/15 pr-5 pl-8 before:absolute before:left-4 before:text-red-400 before:content-['-']",
                    classActivePre: "[:where(&_.line)]:pl-4",
                }),
                transformerNotationWordHighlight({
                    classActiveWord:
                        "highlighted-word relative before:absolute before:-inset-x-0.5 before:-inset-y-0.25 before:-z-10 before:block before:rounded-sm before:bg-[lab(19.93_-1.66_-9.7)] [.highlighted-word_+_&]:before:rounded-l-none",
                }),
                highlightClasses({
                    highlightedClassName:
                        "highlighted-word relative before:absolute before:-inset-x-0.5 before:-inset-y-0.25 before:-z-10 before:block before:rounded-sm before:bg-[lab(19.93_-1.66_-9.7)] [.highlighted-word_+_&]:before:rounded-l-none",
                }),
                linesToDiv(),
            ],
        })
        .replaceAll("\n", "");

    return <div className={className} dangerouslySetInnerHTML={{ __html: code }} />;
}

const highlighter = await createHighlighter({
    themes: [theme],
    langs: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Language injection objects for Shiki
        atApplyInjection as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Language injection objects for Shiki
        atRulesInjection as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Language injection objects for Shiki
        themeFnInjection as any,
        "astro",
        "blade",
        "css",
        "edge",
        "elixir",
        "hbs",
        "html",
        "js",
        "json",
        "jsx",
        "mdx",
        "sh",
        "svelte",
        "ts",
        "tsx",
        "twig",
        "vue",
        "md",
        "bash"
    ],
});
