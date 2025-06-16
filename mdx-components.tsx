import type { MDXComponents } from "mdx/types";
import React, { ReactNode } from "react";
import {
    CodeExample,
    tsx,
    js,
    ts,
    jsx,
    html,
    svelte,
    css,
    bash
} from "@/docs/components/code-example";
import Link from "next/link";
import { Preview } from "@/docs/components/preview";
import { Figure } from "@/docs/components/figure";
import { Iframe } from "@/docs/components/iframe";
import { TipGood, TipBad, TipInfo } from "@/docs/components/tips";
import { Tabs as UiTabs, TabsContent as UiTabsContent, TabsList as UiTabsList, TabsTrigger as UiTabsTrigger } from "@/components/ui/tabs";
import getSourceCode from "@/docs/get-source-code";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { parseCodeBlock } from "@/docs/utils";

// Create a generic demo skeleton that works for various component types
const GenericDemoSkeleton = () => (
    <div className="w-full space-y-4">
        {/* Header/title area */}
        <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-6 w-16" />
        </div>

        {/* Main content area */}
        <div className="space-y-2">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-16 w-3/4" />
            <Skeleton className="h-16 w-5/6" />
        </div>

        {/* Optional footer/controls area */}
        <div className="flex items-center gap-2 pt-2">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
        </div>
    </div>
);

function getTextContent(node: React.ReactNode): string {
    if (typeof node === "string" || typeof node === "number") {
        return String(node);
    }

    if (React.isValidElement(node)) {
        if (node.type === "small") {
            return "";
        }

        // @ts-ignore
        return getTextContent(node.props.children);
    }

    if (Array.isArray(node)) {
        return node.map(getTextContent).join("");
    }

    return ""; // If the node is neither text nor a React element
}

function slugify(str: React.ReactNode) {
    return getTextContent(str)
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
    return ({ children }: React.PropsWithChildren) => {
        let slug = slugify(children);
        return React.createElement(`h${level}`, { id: slug }, [
            React.createElement(
                "a",
                {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: "anchor",
                },
                children,
            ),
        ]);
    };
}

// Custom styled tabs components for MDX that match installation tabs layout
const Tabs = ({ className, ...props }: React.ComponentProps<typeof UiTabs>) => (
    <UiTabs className={cn('relative mt-6 w-full', className)} {...props} />
);

const TabsList = ({ className, ...props }: React.ComponentProps<typeof UiTabsList>) => (
    <UiTabsList
        className={cn(
            'grid grid-cols-4 justify-start w-full max-w-2xl bg-transparent border-b border-border not-prose',
            className
        )}
        {...props}
    />
);

const TabsTrigger = ({ className, ...props }: React.ComponentProps<typeof UiTabsTrigger>) => (
    <UiTabsTrigger
        className={cn(
            'flex items-center gap-2 pb-2 rounded-none bg-transparent border-0 shadow-none',
            'data-[state=active]:border-b-2',
            'dark:data-[state=active]:border-primary',
            className
        )}
        {...props}
    />
);

const TabsContent = ({ className, ...props }: React.ComponentProps<typeof UiTabsContent>) => (
    <UiTabsContent
        className={cn('mt-2', className)}
        {...props}
    />
);

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
        ...components,

        h2: createHeading(2),
        h3: createHeading(3),
        h4: createHeading(4),
        h5: createHeading(5),
        h6: createHeading(6),

        // Make language tag functions available to MDX files
        tsx,
        js,
        ts,
        jsx,
        html,
        svelte,
        css,
        bash,

        a(props: any) {
            return <Link {...props} />;
        },

        code({ children }: { children: string | ReactNode }) {
            if (typeof children !== "string") {
                return <code>{children}</code>;
            }

            if (children.startsWith("<")) {
                return <code>{children}</code>;
            }

            return (
                <code>
                    {children
                        .split(/(<[^>]+>)/g)
                        .map((part, i) => (part.startsWith("<") && part.endsWith(">") ? <var key={i}>{part}</var> : part))}
                </code>
            );
        },

        pre(props) {
            const child = React.Children.only(props.children);

            if (!React.isValidElement(child)) return null;

            const codeProps = child.props as { className?: string; children?: string };

            if (typeof codeProps.children !== "string") return null;

            const { example, filename } = parseCodeBlock({
                className: codeProps.className || "",
                rawCode: codeProps.children,
            });

            return (
                <CodeExample example={example} className="not-prose" filename={filename} />
            );
        },
        Steps: ({ ...props }) => (
            <div
                className="steps mb-12 mt-8 [counter-reset:step] md:ml-4 md:border-l md:pl-8"
                {...props}
            />
        ),
        Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
            <h3
                className={cn(
                    "step font-heading mb-4 scroll-m-20 tracking-tight",
                    className
                )}
                {...props}
            />
        ),
        ComponentPreview: ({ className, hint, demoName, resizable = false, ...props }: React.ComponentProps<"div"> & { hint: string, demoName: string, resizable: boolean }) => {
            // Determine if this is a chart component
            const isChartComponent = demoName.startsWith('chart-');

            // Convert demoName from kebab-case to PascalCase for named exports
            const exportName = demoName.split('-')
                .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                .join('');

            // Create the appropriate dynamic component based on the type
            const DynamicComponent = isChartComponent
                ? dynamic(() =>
                    import(`@/docs/components/demos/charts/${demoName}`).then(mod => {
                        // For chart components, extract the named export
                        return mod[exportName];
                    }).catch(() =>
                        // Fallback to main demos directory if not found
                        import(`@/docs/components/demos/${demoName}`)
                    ), {
                    loading: () => <GenericDemoSkeleton />,
                })
                : dynamic(() => import(`@/docs/components/demos/${demoName}`), {
                    loading: () => <GenericDemoSkeleton />,
                });

            return (
                <Figure filenames={["preview", "code"]} hint={hint}>
                    <Preview resizable={resizable}>
                        <DynamicComponent {...props} />
                    </Preview>
                    <CodeExample example={tsx`${getSourceCode(demoName)}`} />
                </Figure>

            );
        },
        ComponentSource: ({ name, collapsible = true }: { name: string, collapsible?: boolean }) => {
            return (
                <CodeExample
                    collapsible={collapsible}
                    example={tsx`${getSourceCode(name)}`}
                />
            );
        },
        InstallBlock: ({ packageName }: { packageName: string }) => {
            return (
                <Figure filenames={["npm", "pnpm", "yarn", "bun"]}>
                    <CodeExample example={bash`npm install ${packageName}`} />
                    <CodeExample example={bash`pnpm add ${packageName}`} />
                    <CodeExample example={bash`yarn add ${packageName}`} />
                    <CodeExample example={bash`bun add ${packageName}`} />
                </Figure>
            );
        },
        Preview,
        Figure,
        Iframe,
        TipGood,
        TipBad,
        TipInfo,
        Tabs,
        TabsContent,
        TabsList,
        TabsTrigger
    };
}
