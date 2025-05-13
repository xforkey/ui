import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

export function js(strings: TemplateStringsArray, ...args: any[]) {
    return { lang: "js", code: dedent(strings, ...args) };
}

export function ts(strings: TemplateStringsArray, ...args: any[]) {
    return { lang: "ts", code: dedent(strings, ...args) };
}

export function jsx(strings: TemplateStringsArray, ...args: any[]) {
    return { lang: "jsx", code: dedent(strings, ...args) };
}

export function html(strings: TemplateStringsArray, ...args: any[]) {
    return { lang: "html", code: dedent(strings, ...args) };
}

export function svelte(strings: TemplateStringsArray, ...args: any[]) {
    return { lang: "svelte", code: dedent(strings, ...args) };
}

export function css(strings: TemplateStringsArray, ...args: any[]) {
    return { lang: "css", code: dedent(strings, ...args) };
}

export function tsx(strings: TemplateStringsArray, ...args: any[]) {
    return { lang: "tsx", code: dedent(strings, ...args) };
}

export function bash(strings: TemplateStringsArray, ...args: any[]) {
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
            {filename ? <CodeExampleFilename filename={filename} /> : null}
            <HighlightedCode example={example} />
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

export function CodeExampleStack({ children }: { children: React.ReactNode }) {
    return (
        <div data-stack>
            <div className="not-prose rounded-xl in-[figure]:mt-1 in-[figure]:rounded-b-lg in-[figure]:px-0.5 in-[figure]:pb-0.5 dark:outline dark:-outline-offset-1 dark:outline-white/10 dark:in-[figure]:outline-1 dark:in-[figure]:outline-offset-1">
                {children}
            </div>
        </div>
    );
}

export function CodeExampleGroup({
    filenames,
    children,
    className = "",
}: {
    filenames: string[];
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div>
            <Tabs className="not-prose" defaultValue={filenames[0]} >
                <div className="rounded-xl bg-background in-[figure]:-mx-1 in-[figure]:-mb-1">
                    <div
                        className={clsx(
                            "rounded-xl p-1 text-sm scheme-dark dark:bg-white/5 dark:inset-ring dark:inset-ring-white/10",
                            className,
                        )}
                    >

                        <TabsList className="bg-transparent justify-start h-auto text-xs p-0">
                            {filenames.map((filename) => (
                                <TabsTrigger
                                    value={filename}
                                    key={filename}
                                    className="data-[state=active]:text-white data-[state=inactive]:text-muted-foreground data-[state=active]:bg-background dark:data-[state=active]:text-white focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-transparent text-foreground dark:text-muted-foreground border-0"
                                >
                                    <CodeExampleFilename filename={filename} />
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {filenames.map((filename, i) => {
                            const child = React.Children.toArray(children)[i];
                            // Clone the child element and add the filename prop
                            return React.isValidElement(child)
                                ? React.cloneElement(child, { filename } as any)
                                : child;
                        })}
                    </div>
                </div>
            </Tabs>
        </div>
    );
}

export function CodeBlock({ example, filename }: { example: { lang: string; code: string }; filename?: string }) {
    return (
        <TabsContent value={filename || example.lang}>

            <HighlightedCode example={example} />

        </TabsContent>
    );
}

export function HighlightedCode({
    example,
    className,
}: {
    example: { lang: string; code: string };
    className?: string;
}) {
    return (
        <div className="relative">
            <div className="absolute top-2 right-2 z-10">
                <CopyButton value={example.code} />
            </div>
            <RawHighlightedCode
                example={example}
                className={clsx(
                    "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5!",
                    "**:[.line]:isolate **:[.line]:not-last:min-h-[1lh]",
                    "*:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5",
                    className,
                )}
            />
        </div>
    );
}

export function RawHighlightedCode({
    example,
    className,
}: {
    example: { lang: string; code: string };
    className?: string;
}) {
    let codeWithoutPrettierIgnore = example.code
        .split("\n")
        .filter((line) => !line.includes("prettier-ignore"))
        .join("\n");

    let code = highlighter
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

function CodeExampleFilename({ filename }: { filename: string }) {
    return <div className="px-3 pt-0.5 pb-1.5 text-xs/5">{filename}</div>;
}

const highlighter = await createHighlighter({
    themes: [theme],
    langs: [
        atApplyInjection as any,
        atRulesInjection,
        themeFnInjection,
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
