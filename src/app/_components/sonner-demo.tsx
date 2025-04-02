"use client"

import { toast } from "@/components/toast"
import { toast as sonnerToast } from 'sonner'

import { Button } from "@/components/ui/button"

export function SonnerDemo() {
    return (
        <div className="flex space-x-2">
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast({
                        title: 'This is a headless toast',
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
                    toast({
                        title: 'This is a headless toast',
                        description: 'You have full control of styles and jsx, while still having the animations.',
                        variant: 'destructive',
                    })
                }
            >
                Destructive
            </Button>
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast({
                        title: 'This is a headless toast',
                        description: 'You have full control of styles and jsx, while still having the animations.',
                        variant: 'info',
                    })
                }
            >
                Info
            </Button>
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast({
                        title: 'This is a headless toast',
                        description: 'You have full control of styles and jsx, while still having the animations.',
                        variant: 'success',
                    })
                }
            >
                Success
            </Button>
            <Button
                variant="outline"
                size={'sm'}
                onClick={() =>
                    toast({
                        title: 'This is a headless toast',
                        description: 'You have full control of styles and jsx, while still having the animations.',
                        variant: 'warning',
                    })
                }
            >
                Warning
            </Button>
        </div>
    )
}
