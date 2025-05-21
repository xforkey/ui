import TableOfContents from "@/docs/components/table-of-contents";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { generateTableOfContents, getDocPageBySlug, getDocPageSlugs } from "@/docs/utils";
import Pagination from "@/docs/components/pagination";
import Link from "next/link"
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";


type Props = {
    params: Promise<{
        component: string;
    }>;
};

export async function generateStaticParams() {
    let slugs = await getDocPageSlugs();
    return slugs.map((slug) => ({ component: slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    let params = await props.params;
    let doc = await getDocPageBySlug(params.component);

    if (!doc) {
        return notFound();
    }

    let title = `${doc.title}`;

    return {
        metadataBase: new URL("https://tailwindcss.com"),
        title,
        description: doc.description,
        openGraph: {
            title,
            description: doc.description,
            type: "article",
            url: `/docs/${params.component}`,
            images: [{ url: `/api/og?path=/docs/${params.component}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: doc.description,
            images: [{ url: `/api/og?path=/docs/${params.component}` }],
            site: "@tailwindcss",
            creator: "@tailwindcss",
        },
    };
}

export default async function DocPage(props: Props) {
    let params = await props.params;

    let [doc, tableOfContents] = await Promise.all([
        getDocPageBySlug(params.component),
        generateTableOfContents(params.component),
    ]);

    if (!doc) {
        return notFound();
    }

    return (
        <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]">
            <div className="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">
                <h1 data-title="true" className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
                    {doc.title}
                </h1>
                <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-400">
                    {doc.description}
                </p>
                {doc.links ? (
                    <div className="flex items-center space-x-2 pt-4">
                        {doc.links?.doc && (
                            <Link
                                href={doc.links.doc}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(badgeVariants({ variant: "default" }), "gap-1")}
                            >
                                Docs
                                <ExternalLink className="h-3 w-3" />
                            </Link>
                        )}
                        {doc.links?.api && (
                            <Link
                                href={doc.links.api}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(badgeVariants({ variant: "default" }), "gap-1")}
                            >
                                API Reference
                                <ExternalLink className="h-3 w-3" />
                            </Link>
                        )}
                    </div>
                ) : null}

                <div className="prose mt-10" data-content="true">
                    <doc.Component />
                </div>
                <Pagination slug={params.component} />
            </div>
            <div className="max-xl:hidden">
                <div className="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
                    <TableOfContents tableOfContents={tableOfContents} />
                </div>
            </div>
        </div>

    );
}
