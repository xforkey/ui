import { notFound } from "next/navigation"
import dynamic from "next/dynamic"
import { registry } from "@/demo/registry"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"


export default async function ComponentPage({
    params,
}: {
    params: Promise<{ component: string }>
}) {
    const { component: componentName } = await params
    const componentInfo = registry[componentName]

    if (!componentInfo) {
        return notFound()
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{componentInfo.displayName}</CardTitle>
            </CardHeader>
            <CardContent className="relative after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
                <DemoPage componentDemoPath={componentInfo.demo} />
            </CardContent>

        </Card>)
}


function DemoPage({ componentDemoPath }: { componentDemoPath: string }) {
    'use client'

    const DemoComponent = dynamic(() => import(`@/demo/${componentDemoPath}`), {
        loading: () => <div>Loading...</div>,
    })

    return <DemoComponent />
}


const DemoCard = () => {
    return (<></>)
}