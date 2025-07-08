"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function SonnerDemo() {
    return (
        <div className="flex space-x-2">
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast.message('This is a headless toast', {
                        description: 'You have full control of styles and jsx, while still having the animations.',
                    })
                }
            >
                Show Toast
            </Button>
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast.error('This is a headless toast', {
                        description: 'You have full control of styles and jsx, while still having the animations.',
                    })
                }
            >
                Destructive
            </Button>
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast.info('This is a headless toast', {
                        description: 'You have full control of styles and jsx, while still having the animations.',
                    })
                }
            >
                Info
            </Button>
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast.success('This is a headless toast', {
                        description: 'You have full control of styles and jsx, while still having the animations.',
                    })
                }
            >
                Success
            </Button>
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast.warning('This is a headless toast', {
                        description: 'You have full control of styles and jsx, while still having the animations.',
                    })
                }
            >
                Warning
            </Button>
        </div>
    )
}
