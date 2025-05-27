"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Context Menu
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    ContextMenuSeparator,
    ContextMenuShortcut,
} from "@/components/ui/context-menu"

// Dialog
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// Alert Dialog
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Calendar
import { Calendar } from "@/components/ui/calendar"

// Hover Card
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

// Menubar
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

// Popover
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// Select
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CommandDemo from "@/docs/components/demos/command-demo"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PortalComponentsPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Portal-Based Components</h1>
            <p className="text-muted-foreground mb-8">
                A showcase of all portal-based UI components that use React Portal for rendering outside the DOM hierarchy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Context Menu */}
                <Card>
                    <CardHeader>
                        <CardTitle>Command Menu</CardTitle>
                        <CardDescription>
                            Right-click on the area below to open a context menu.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <CommandDemo />
                    </CardContent>
                </Card>
                {/* Select */}
                <Card>
                    <CardHeader>
                        <CardTitle>Select</CardTitle>
                        <CardDescription>
                            Displays a list of options for the user to pick from—triggered by a button.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>
                {/* Context Menu */}
                <Card>
                    <CardHeader>
                        <CardTitle>Context Menu</CardTitle>
                        <CardDescription>
                            Right-click on the area below to open a context menu.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <ContextMenu>
                            <ContextMenuTrigger>
                                <div className="border border-dashed border-muted-foreground rounded-md h-[150px] w-full flex items-center justify-center text-sm">
                                    Right click here
                                </div>
                            </ContextMenuTrigger>
                            <ContextMenuContent className="w-64">
                                <ContextMenuItem>
                                    Cut <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem>
                                    Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem>
                                    Refresh <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                                </ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </CardContent>
                </Card>

                {/* Dialog */}
                <Card>
                    <CardHeader>
                        <CardTitle>Dialog</CardTitle>
                        <CardDescription>
                            A modal dialog that interrupts the user with important content.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="John Doe"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            defaultValue="@johndoe"
                                            className="col-span-3"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>

                {/* Alert Dialog */}
                <Card>
                    <CardHeader>
                        <CardTitle>Alert Dialog</CardTitle>
                        <CardDescription>
                            A modal dialog that interrupts the user with important content and expects a response.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">Show Alert</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardContent>
                </Card>

                {/* Calendar */}
                <Card>
                    <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                        <CardDescription>
                            A date field component that allows users to enter and edit dates.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>

                {/* Hover Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Hover Card</CardTitle>
                        <CardDescription>
                            For sighted users to preview content available behind a link.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant="link">Hover over me</Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="flex justify-between space-x-4">
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">Hover Card Content</h4>
                                        <p className="text-sm">
                                            This content appears when you hover over the trigger.
                                        </p>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </CardContent>
                </Card>

                {/* Menubar */}
                <Card>
                    <CardHeader>
                        <CardTitle>Menubar</CardTitle>
                        <CardDescription>
                            A visually persistent menu common in desktop applications.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        Print <MenubarShortcut>⌘P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>
                                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>Cut</MenubarItem>
                                    <MenubarItem>Copy</MenubarItem>
                                    <MenubarItem>Paste</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>View</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Zoom In</MenubarItem>
                                    <MenubarItem>Zoom Out</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </CardContent>
                </Card>

                {/* Popover */}
                <Card>
                    <CardHeader>
                        <CardTitle>Popover</CardTitle>
                        <CardDescription>
                            Displays rich content in a portal triggered by a button.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">Open Popover</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Dimensions</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Set the dimensions for the layer.
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="width">Width</Label>
                                            <Input
                                                id="width"
                                                defaultValue="100%"
                                                className="col-span-2 h-8"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="height">Height</Label>
                                            <Input
                                                id="height"
                                                defaultValue="25px"
                                                className="col-span-2 h-8"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </CardContent>
                </Card>


            </div>
        </div>
    )
}