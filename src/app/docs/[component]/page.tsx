import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { getDocPageBySlug, getDocPageSlugs } from "@/docs/utils";
import Pagination from "@/docs/components/pagination";
import Link from "next/link"
import { badgeVariants } from "@/components/xfork-ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";


type Props = {
    params: Promise<{
        component: string;
    }>;
};

export async function generateStaticParams() {
    const slugs = await getDocPageSlugs();
    return slugs.map((slug) => ({ component: slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const doc = await getDocPageBySlug(params.component);

    if (!doc) {
        return notFound();
    }

    const title = `${doc.title}`;

    return {
        metadataBase: new URL("https://tailwindcss.com"),
        title,
        description: doc.description,
        openGraph: {
            title,
            description: doc.description,
            type: "article",
            url: `/docs/${params.component}`,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: doc.description,
            site: "@tailwindcss",
            creator: "@tailwindcss",
        },
    };
}

export default async function DocPage(props: Props) {
    const params = await props.params;

    const doc = await getDocPageBySlug(params.component);

    if (!doc) {
        return notFound();
    }

    return (
        <div className="mx-auto max-w-4xl">
            <div className="px-4 pt-10 pb-24 sm:px-6">
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
        </div>
    );
}
