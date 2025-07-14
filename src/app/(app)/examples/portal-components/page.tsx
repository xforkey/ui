"use client"

import React from "react"
import { Button } from "@/xfork-ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/xfork-ui/card"

// Context Menu
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    ContextMenuSeparator,
    ContextMenuShortcut,
} from "@/xfork-ui/context-menu"

// Dialog
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/xfork-ui/dialog"

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
} from "@/xfork-ui/alert-dialog"

// Calendar
import { Calendar } from "@/xfork-ui/calendar"

// Hover Card
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/xfork-ui/hover-card"

// Menubar
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/xfork-ui/menubar"

// Popover
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/xfork-ui/popover"

// Select
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/xfork-ui/select"

// Dropdown Menu
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/xfork-ui/dropdown-menu"

// Avatar
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/xfork-ui/avatar"

// Icons
import {
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
    User,
} from "lucide-react"

import CommandDemo from "@/docs/components/demos/command-demo"

import { Input } from "@/xfork-ui/input"
import { Label } from "@/xfork-ui/label"



export default function PortalComponentsPage() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    // Grid background with proper radial mask fade effect
    const gridBackgroundClass = "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px,24px_24px] "
    {/* <div class="relative h-full w-full bg-white"><div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div> */ }

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-6">Portal-Based Components</h1>
            <p className="text-muted-foreground mb-8">
                A showcase of all portal-based UI components that use React Portal for rendering outside the DOM hierarchy.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Context Menu */}

                <Card className={gridBackgroundClass}>
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

                {/* Calendar */}
                <Card className={gridBackgroundClass}>
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

                <Card className={gridBackgroundClass}>
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
                <Card className={gridBackgroundClass}>
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
                <Card className={gridBackgroundClass}>
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
                                        Make changes to your profile here. Click save when you&apos;re done.
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
                <Card className={gridBackgroundClass}>
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



                {/* Hover Card */}
                <Card className={gridBackgroundClass}>
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
                <Card className={gridBackgroundClass}>
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
                <Card className={gridBackgroundClass}>
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
                                                className="col-span-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="height">Height</Label>
                                            <Input
                                                id="height"
                                                defaultValue="25px"
                                                className="col-span-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </CardContent>
                </Card>

                {/* Dropdown Menu */}
                <Card className={gridBackgroundClass}>
                    <CardHeader>
                        <CardTitle>Dropdown Menu</CardTitle>
                        <CardDescription>
                            Displays a menu to the user — such as a set of actions or functions — triggered by a button.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-[200px] justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col items-start">
                                            <span className="text-sm font-medium">John Doe</span>
                                            <span className="text-xs text-muted-foreground">john@example.com</span>
                                        </div>
                                    </div>
                                    <ChevronsUpDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">John Doe</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            john@example.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}