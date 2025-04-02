import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/ui/card'
import { Button } from '@/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/ui/table'
/* import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui-old/table' */
import { EllipsisVerticalIcon } from 'lucide-react'
import { Badge } from '@/ui/badge'
import { Input } from '@/ui/input'
import { Avatar, AvatarImage } from '@/ui/avatar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/ui/select'
import { RadioGroup } from '@/ui/radio-group'
import { Checkbox } from '@/ui/checkbox'
import { Switch } from '@/ui/switch'
import { ContextDemo, DialogDemo, DropdownMenuDemo, PopoverDemo, SheetDemo, SonnerDemo } from './_components'


export default async function Page() {
  let orders = getOrders()
  return (
    <>

      <div className='relative mx-auto lg:max-w-7xl'>
        <div className='pt-2 pb-40'>
          <div className="relative grid gap-[17px] sm:grid-cols-2 xl:grid-cols-[repeat(15,minmax(0,1fr))]">
            <div className="xl:col-span-5">
              <Card>
                <CardContent>
                  <div className='flex justify-center gap-x-2'>
                    <Button>default 1</Button>
                    <Button variant={'secondary'}>Secondary 2</Button>
                    <Button variant={'ghost'}>Ghost 3</Button>
                    <Button variant={'outline'}>Outline 4</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="xl:col-span-5">
              <Card>
                <CardContent className='flex justify-center space-x-2'>
                  <DialogDemo />
                  <SheetDemo />
                </CardContent>
              </Card>
            </div>

            <div className="sm:col-span-2 md:col-span-1 xl:col-span-5">
              <Card>
                <CardContent className='flex justify-center'>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country Selection</SelectLabel>
                        <SelectItem value="apple">United States</SelectItem>
                        <SelectItem value="banana">Canada</SelectItem>
                        <SelectItem value="blueberry">Mexico</SelectItem>
                        <SelectItem value="grapes" disabled>
                          Japan
                        </SelectItem>
                        <SelectItem value="pineapple">Germany</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Dropdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <DropdownMenuDemo />
                </CardContent>
              </Card>
            </div>

            <div className="col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Popover</CardTitle>
                </CardHeader>
                <CardContent>
                  <PopoverDemo />
                </CardContent>
              </Card>
            </div>

            <div className="col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Context</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex justify-center gap-x-2'>
                    <ContextDemo />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sonner</CardTitle>
                </CardHeader>
                <CardContent>
                  <SonnerDemo />
                </CardContent>
              </Card>
            </div>

            <div className="sm:col-span-2 md:col-span-1 xl:col-span-6">
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="w-full space-y-8">
                    <Input
                      type="text"
                      placeholder="Username"
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                    />
                    <div className="flex flex-wrap justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Switch color="dark/zinc" />
                        <p>Remember me</p>
                      </div>
                      <Button variant={'ghost'}>Forgot password?</Button>
                    </div>
                    <Button className="w-full">Get started</Button>

                  </div>
                </CardContent>
                <CardFooter className='mt-auto flex justify-between'>
                  <p className='text-muted-foreground'>
                    Don&apos;t have an account?
                  </p>
                  <Button variant={'ghost'}>Sign up</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="sm:col-span-2 xl:col-span-9">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full">
                    <Table className="mt-4 [--gutter:--spacing(6)] lg:[--gutter:--spacing(10)]">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Purchase date</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                          <TableHead >
                            <span className='sr-only'>Status</span>
                          </TableHead>
                          <TableHead >
                            <span className='sr-only'>Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.slice(0, 5).map((order) => (
                          <TableRow key={order.id} title={`Order #${order.id}`}>
                            <TableCell className="text-zinc-500">{order.date}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className='size-6'>
                                  <AvatarImage src={order.event.thumbUrl} />
                                </Avatar>
                                <span>{order.customer.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">US{order.amount.usd}</TableCell>
                            <TableCell>
                              <Badge color='green'>{order.event.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <EllipsisVerticalIcon className="w-5 h-5 text-zinc-500" />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="sm:col-span-2 xl:col-span-9">
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    Share this link with your team to give them access to your organization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full min-w-0">
                    <div className="flex items-center gap-3">
                      <Input
                        readOnly
                        defaultValue="https://example.com/teams/invite/eHGJEj12FHDKSi"
                        aria-label="Invite link"
                      />
                      <Button variant={'outline'}>Copy link</Button>
                    </div>

                    <Button className="mt-3">Reset your invite link</Button>

                    <div className="mt-8 divide-y divide-zinc-100 dark:divide-white/5">
                      <div className="flex items-center justify-between gap-4 py-4">
                        <div className="flex min-w-0 items-center gap-2">
                          <Avatar >
                            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                          </Avatar>
                          <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">XForkey</span>
                            <span className="truncate text-xs text-muted-foreground">XForkey@gmail.com</span>
                          </div>
                        </div>
                        <Select >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="apple">Admin</SelectItem>
                              <SelectItem value="banana">Owner</SelectItem>
                              <SelectItem value="blueberry">Member</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="sm:col-span-2 md:col-span-1 xl:col-span-6">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup name="attendance" defaultValue="public" className="space-y-6">
                    <div className="space-y-2 text-sm font-semibold">
                      <p>Public</p>
                      <p className="text-muted-foreground">Tickets will be available to the general public.</p>
                    </div>

                    <div className="pl-8 space-y-3">
                      <div className="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            In-person
                          </label>
                          <p className="text-sm text-muted-foreground">Attendees will be at the event in person.</p>
                        </div>
                      </div>
                      <div className="items-top flex space-x-2">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Online
                          </label>
                          <p className="text-sm text-muted-foreground">Attendees will only be able to view the event online.</p>
                        </div>
                      </div>

                    </div>

                    <div className="space-y-2 text-sm font-semibold">
                      <p>Private</p>
                      <p className="text-muted-foreground">Tickets are not available to the general public.</p>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export function getEvents() {
  return [
    {
      id: 1000,
      name: 'Bear Hug: Live in Concert',
      url: '/events/1000',
      date: 'May 20, 2024',
      time: '10 PM',
      location: 'Harmony Theater, Winnipeg, MB',
      totalRevenue: '$102,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 500,
      ticketsSold: 350,
      ticketsSoldChange: '+8.1%',
      pageViews: '24,300',
      pageViewsChange: '-0.75%',
      status: 'On Sale',
      imgUrl: '/events/bear-hug.jpg',
      thumbUrl: '/events/bear-hug-thumb.jpg',
    },
    {
      id: 1001,
      name: 'Six Fingers — DJ Set',
      url: '/events/1001',
      date: 'Jun 2, 2024',
      time: '8 PM',
      location: 'Moonbeam Arena, Uxbridge, ON',
      totalRevenue: '$24,115',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 150,
      ticketsSold: 72,
      ticketsSoldChange: '+8.1%',
      pageViews: '57,544',
      pageViewsChange: '-2.5%',
      status: 'On Sale',
      imgUrl: '/events/six-fingers.jpg',
      thumbUrl: '/events/six-fingers-thumb.jpg',
    },
    {
      id: 1002,
      name: 'We All Look The Same',
      url: '/events/1002',
      date: 'Aug 5, 2024',
      time: '4 PM',
      location: 'Electric Coliseum, New York, NY',
      totalRevenue: '$40,598',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 275,
      ticketsSold: 275,
      ticketsSoldChange: '+8.1%',
      pageViews: '122,122',
      pageViewsChange: '-8.0%',
      status: 'Closed',
      imgUrl: '/events/we-all-look-the-same.jpg',
      thumbUrl: '/events/we-all-look-the-same-thumb.jpg',
    },
    {
      id: 1003,
      name: 'Viking People',
      url: '/events/1003',
      date: 'Dec 31, 2024',
      time: '8 PM',
      location: 'Tapestry Hall, Cambridge, ON',
      totalRevenue: '$3,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 40,
      ticketsSold: 6,
      ticketsSoldChange: '+8.1%',
      pageViews: '9,000',
      pageViewsChange: '-0.15%',
      status: 'On Sale',
      imgUrl: '/events/viking-people.jpg',
      thumbUrl: '/events/viking-people-thumb.jpg',
    },
  ]
}

export function getEvent(id: string) {
  return (getEvents()).find((event) => event.id.toString() === id)!
}

export function getOrders() {
  return [
    {
      id: 3000,
      url: '/orders/3000',
      date: 'May 9, 2024',
      amount: {
        usd: '$80.00',
        cad: '$109.47',
        fee: '$3.28',
        net: '$106.19',
      },
      payment: {
        transactionId: 'ch_2HLf8DfYJ0Db7asfCC5T546TY',
        card: {
          number: '1254',
          type: 'American Express',
          expiry: '01 / 2025',
        },
      },
      customer: {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        address: '123 Main St. Toronto, ON',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1000'),
    },
    {
      id: 3001,
      url: '/orders/3001',
      date: 'May 5, 2024',
      amount: {
        usd: '$299.00',
        cad: '$409.13',
        fee: '$12.27',
        net: '$396.86',
      },
      payment: {
        transactionId: 'ch_1KLf7AsYJ0Dda7fs3CC5d46TY',
        card: {
          number: '3897',
          type: 'Visa',
          expiry: '06 / 2024',
        },
      },
      customer: {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        address: '357 Bridge St. New York, NY',
        country: 'USA',
        countryFlagUrl: '/flags/us.svg',
      },
      event: getEvent('1001'),
    },
    {
      id: 3002,
      url: '/orders/3002',
      date: 'Apr 28, 2024',
      amount: {
        usd: '$150.00',
        cad: '$205.25',
        fee: '$6.15',
        net: '$199.10',
      },
      payment: {
        transactionId: 'ch_2DLf5AsYJ0Ddb7fs3CC5d46TY',
        card: {
          number: '7421',
          type: 'Mastercard',
          expiry: '12 / 2026',
        },
      },
      customer: {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        address: '456 Elm St. Vancouver, BC',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1002'),
    },
    {
      id: 3003,
      url: '/orders/3003',
      date: 'Apr 23, 2024',
      amount: {
        usd: '$80.00',
        cad: '$109.47',
        fee: '$3.28',
        net: '$106.19',
      },
      payment: {
        transactionId: 'ch_3KLf6DfYJ0Db7fassCC546TY',
        card: {
          number: '5683',
          type: 'Visa',
          expiry: '06 / 2024',
        },
      },
      customer: {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        address: '789 Oak St. Montreal, QC',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1000'),
    },
    {
      id: 3004,
      url: '/orders/3004',
      date: 'Apr 18, 2024',
      amount: {
        usd: '$114.99',
        cad: '$157.34',
        fee: '$4.72',
        net: '$152.62',
      },
      payment: {
        transactionId: 'ch_4HLf7DfYJ0Db78fas3C5d6TY',
        card: {
          number: '9576',
          type: 'Visa',
          expiry: '01 / 2025',
        },
      },
      customer: {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        address: '321 Pine St. Calgary, AB',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1003'),
    },
    {
      id: 3005,
      url: '/orders/3005',
      date: 'Apr 14, 2024',
      amount: {
        usd: '$299.00',
        cad: '$409.13',
        fee: '$12.27',
        net: '$396.86',
      },
      payment: {
        transactionId: 'ch_5HLf8DfYJ0Ddb78fas3CC5TY',
        card: {
          number: '2310',
          type: 'Visa',
          expiry: '08 / 2024',
        },
      },
      customer: {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        address: '741 Lake St. Miami, FL',
        country: 'USA',
        countryFlagUrl: '/flags/us.svg',
      },
      event: getEvent('1001'),
    },
    {
      id: 3006,
      url: '/orders/3006',
      date: 'Apr 10, 2024',
      amount: {
        usd: '$150.00',
        cad: '$205.25',
        fee: '$6.15',
        net: '$199.10',
      },
      payment: {
        transactionId: 'ch_6KLf9DfYJ0Db7asf3CC54dTY',
        card: {
          number: '6942',
          type: 'Mastercard',
          expiry: '06 / 2024',
        },
      },
      customer: {
        name: 'Whitney Francis',
        email: 'whitney.francis@example.com',
        address: '654 Maple St. Ottawa, ON',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1002'),
    },
    {
      id: 3007,
      url: '/orders/3007',
      date: 'Apr 6, 2024',
      amount: {
        usd: '$80.00',
        cad: '$109.47',
        fee: '$3.28',
        net: '$106.19',
      },
      payment: {
        transactionId: 'ch_7KLf6DfYJ0Ddb78fs3C5d6TY',
        card: {
          number: '8473',
          type: 'Visa',
          expiry: '08 / 2024',
        },
      },
      customer: {
        name: 'Leonard Krasner',
        email: 'leonard.krasner@example.com',
        address: '987 Birch St. Winnipeg, MB',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1000'),
    },
    {
      id: 3008,
      url: '/orders/3008',
      date: 'Apr 3, 2024',
      amount: {
        usd: '$80.00',
        cad: '$109.47',
        fee: '$3.28',
        net: '$106.19',
      },
      payment: {
        transactionId: 'ch_8HLf5AsYJ0Db78fassCC5d6TY',
        card: {
          number: '5061',
          type: 'Visa',
          expiry: '11 / 2026',
        },
      },
      customer: {
        name: 'Floyd Miles',
        email: 'floyd.miles@example.com',
        address: '147 Cedar St. Quebec City, QC',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1000'),
    },
    {
      id: 3009,
      url: '/orders/3009',
      date: 'Mar 29, 2024',
      amount: {
        usd: '$114.99',
        cad: '$157.34',
        fee: '$4.72',
        net: '$152.62',
      },
      payment: {
        transactionId: 'ch_9KLf7DfYJ0Ddb78fas3C5dTY',
        card: {
          number: '3129',
          type: 'American Express',
          expiry: '06 / 2025',
        },
      },
      customer: {
        name: 'Emily Selman',
        email: 'emily.selman@example.com',
        address: '258 Willow St. Halifax, NS',
        country: 'Canada',
        countryFlagUrl: '/flags/ca.svg',
      },
      event: getEvent('1003'),
    }
  ]
}


const Logo = () => (
  <div className="flex items-center gap-2 sm:gap-4">
    <a aria-label="Home" href="/">
      <svg className="h-6 text-zinc-950 sm:hidden dark:text-white forced-colors:text-[CanvasText]" fill="currentColor" viewBox="0 0 34 28"><path fillRule="evenodd" clipRule="evenodd" d="M9.3311 0.166016L8.90235 0.408763L0.902352 13.7418L0.902344 14.2563L8.90234 27.5903L8.97771 27.6867L8.97871 27.6877L9.3321 27.834H25.3321L25.6857 26.9805L22.3527 23.6465L21.9991 23.5H12.2742L6.25596 14L12.2733 4.49902H21.9981L22.3517 4.35257L25.6847 1.01957L25.3311 0.166016H9.3311Z" /><path fillRule="evenodd" clipRule="evenodd" d="M27.836 5.07617L24.6 8.31317L24.5312 8.93422L27.7398 13.9997L24.5312 19.0651L24.6001 19.6862L27.8361 22.9222L28.6184 22.8259L33.7604 14.2569L33.7604 13.7424L28.6184 5.17242L27.836 5.07617Z" />
      </svg>

      <svg className="hidden h-6 text-zinc-950 sm:block dark:text-white forced-colors:text-[CanvasText]" fill="currentColor" viewBox="0 0 113 22"><path fillRule="evenodd" clipRule="evenodd" d="M6.99906 0.5L6.57031 0.742752L0.570312 10.7428V11.2572L6.57031 21.2572L6.99906 21.5H18.9991L19.3526 20.6464L16.8526 18.1464L16.4991 18H9.27424L4.8409 11L9.27424 4H16.4991L16.8526 3.85355L19.3526 1.35355L18.9991 0.5H6.99906Z" /><path fillRule="evenodd" clipRule="evenodd" d="M20.7927 4.21875L18.3657 6.64575L18.2969 7.2668L20.6605 10.9993L18.2969 14.7318L18.3657 15.3529L20.7927 17.7799L21.5751 17.6835L25.4311 11.2565V10.7421L21.5751 4.31507L20.7927 4.21875Z" /><path d="M41.0629 18.2529C40.0969 18.2529 39.1729 18.0779 38.2909 17.7279C37.4249 17.3884 36.6385 16.8736 35.9809 16.2159C35.3229 15.5579 34.7909 14.7529 34.3849 13.8009C33.9929 12.8349 33.7969 11.7569 33.7969 10.5669C33.7969 9.39086 33.9999 8.33386 34.4059 7.39586C34.8119 6.44386 35.3509 5.64586 36.0229 5.00186C36.6826 4.3518 37.4688 3.8443 38.3329 3.51086C39.2011 3.16351 40.1277 2.98531 41.0629 2.98586C41.8968 2.98056 42.7262 3.10816 43.5199 3.36386C44.2899 3.60186 44.9619 3.95186 45.5359 4.41386C46.1217 4.85944 46.6141 5.41603 46.9849 6.05186C47.3769 6.68186 47.6289 7.38186 47.7409 8.15186H44.8639C44.6556 7.37614 44.1795 6.69917 43.5199 6.24086C42.8479 5.75086 42.0289 5.50586 41.0629 5.50586C40.4749 5.50586 39.9219 5.62486 39.4039 5.86286C38.8808 6.1047 38.4154 6.45554 38.0389 6.89186C37.6609 7.32586 37.3599 7.85786 37.1359 8.48786C36.9259 9.10386 36.8209 9.79686 36.8209 10.5669C36.8209 11.3369 36.9329 12.0439 37.1569 12.6879C37.3809 13.3319 37.6819 13.8779 38.0599 14.3259C38.4379 14.7739 38.8859 15.1239 39.4039 15.3759C39.9205 15.6275 40.4882 15.7569 41.0629 15.7539C42.0289 15.7539 42.8409 15.5159 43.4989 15.0399C44.1569 14.5639 44.6189 13.9129 44.8849 13.0869H47.7619C47.6318 13.8444 47.3611 14.5709 46.9639 15.2289C46.5931 15.8647 46.1007 16.4213 45.5149 16.8669C44.9013 17.314 44.2209 17.6613 43.4989 17.8959C42.7099 18.1388 41.8884 18.2592 41.0629 18.2529ZM57.0079 18.0009V16.4259C56.6978 16.988 56.2308 17.4477 55.6639 17.7489C55.0759 18.0709 54.3839 18.2319 53.5849 18.2319C52.9173 18.2353 52.255 18.1142 51.6319 17.8749C51.0354 17.6267 50.4985 17.2544 50.0569 16.7829C49.6089 16.2929 49.2519 15.6909 48.9869 14.9769C48.7339 14.2489 48.6079 13.4159 48.6079 12.4779C48.6079 11.5819 48.7409 10.7839 49.0079 10.0839C49.2879 9.38386 49.6509 8.79586 50.0989 8.31986C50.5479 7.85254 51.0922 7.48728 51.6949 7.24886C52.3009 6.99881 52.9503 6.87038 53.6059 6.87086C54.3899 6.87086 55.0619 7.02486 55.6219 7.33286C56.1959 7.62686 56.6369 8.02586 56.9449 8.52986V7.12286H59.6549V18.0009H57.0079ZM54.1939 16.0059C54.9639 16.0059 55.6219 15.6979 56.1679 15.0819C56.7279 14.4519 57.0079 13.5839 57.0079 12.4779C57.0079 11.4279 56.7349 10.6019 56.1889 9.99986C55.6569 9.39786 54.9919 9.09686 54.1939 9.09686C53.3819 9.09686 52.7099 9.39786 52.1779 9.99986C51.6459 10.6019 51.3799 11.4279 51.3799 12.4779C51.3799 13.5839 51.6459 14.4519 52.1779 15.0819C52.4227 15.3777 52.7311 15.6145 53.0802 15.7745C53.4292 15.9345 53.81 16.0136 54.1939 16.0059ZM62.4869 4.45586H65.1539V7.12286H67.6739V9.18086H65.1539V13.6119L62.4869 15.9429V9.18086H60.6599V7.12286H62.4869V4.45586ZM67.6739 18.0009H62.4869V15.9429H67.6739V18.0009ZM76.5019 18.0009V16.4259C76.1918 16.988 75.7248 17.4477 75.1579 17.7489C74.5699 18.0709 73.8779 18.2319 73.0789 18.2319C72.4113 18.2353 71.749 18.1142 71.1259 17.8749C70.5294 17.6267 69.9925 17.2544 69.5509 16.7829C69.1029 16.2929 68.7459 15.6909 68.4809 14.9769C68.2279 14.2489 68.1019 13.4159 68.1019 12.4779C68.1019 11.5819 68.2349 10.7839 68.5019 10.0839C68.7819 9.38386 69.1449 8.79586 69.5929 8.31986C70.0419 7.85254 70.5862 7.48728 71.1889 7.24886C71.7949 6.99881 72.4443 6.87038 73.0999 6.87086C73.8839 6.87086 74.5559 7.02486 75.1159 7.33286C75.6899 7.62686 76.1309 8.02586 76.4389 8.52986V7.12286H79.1489V18.0009H76.5019ZM73.6879 16.0059C74.4579 16.0059 75.1159 15.6979 75.6619 15.0819C76.2219 14.4519 76.5019 13.5839 76.5019 12.4779C76.5019 11.4279 76.2289 10.6019 75.6829 9.99986C75.1509 9.39786 74.4859 9.09686 73.6879 9.09686C72.8759 9.09686 72.2039 9.39786 71.6719 9.99986C71.1399 10.6019 70.8739 11.4279 70.8739 12.4779C70.8739 13.5839 71.1399 14.4519 71.6719 15.0819C71.9166 15.3777 72.2251 15.6145 72.5742 15.7745C72.9232 15.9345 73.304 16.0136 73.6879 16.0059ZM81.3299 18.0009V2.88086H84.0179V18.0009H81.3299ZM92.9789 7.12286H95.7509L89.8709 21.9909H87.0989L92.9789 7.12286ZM84.7469 7.12286H87.6239L90.3119 13.8429H87.6019L84.7469 7.12286ZM100.656 18.2529C100.039 18.2564 99.4251 18.1787 98.8289 18.0219C98.2886 17.8906 97.7764 17.663 97.3169 17.3499C96.8843 17.0429 96.5199 16.6496 96.2469 16.1949C95.9669 15.7329 95.7909 15.1869 95.7209 14.5569H98.2619C98.3599 15.1309 98.6329 15.5579 99.0819 15.8379C99.5289 16.1039 100.068 16.2369 100.698 16.2369C101.216 16.2369 101.678 16.1389 102.084 15.9429C102.504 15.7329 102.714 15.4109 102.714 14.9769C102.714 14.5849 102.525 14.2909 102.147 14.0949C101.783 13.8989 101.244 13.7379 100.53 13.6119L99.4379 13.4229C98.3459 13.2409 97.4849 12.8909 96.8549 12.3729C96.2389 11.8549 95.9309 11.1759 95.9309 10.3359C95.9309 9.78986 96.0429 9.29986 96.2669 8.86586C96.5049 8.43186 96.8269 8.06786 97.2329 7.77386C97.6594 7.46999 98.1355 7.24261 98.6399 7.10186C99.205 6.93106 99.7925 6.84611 100.383 6.84986C100.971 6.84986 101.531 6.92686 102.063 7.08086C102.609 7.22086 103.085 7.43786 103.491 7.73186C103.897 8.02586 104.233 8.38286 104.499 8.80286C104.779 9.22286 104.954 9.70586 105.024 10.2519H102.525C102.399 9.78986 102.14 9.44686 101.748 9.22286C101.37 8.98486 100.894 8.86586 100.32 8.86586C99.8019 8.86586 99.3609 8.97786 98.9969 9.20186C98.6469 9.42586 98.4719 9.71986 98.4719 10.0839C98.4719 10.4339 98.6259 10.6929 98.9339 10.8609C99.2419 11.0289 99.7039 11.1619 100.32 11.2599L101.412 11.4489C102.602 11.6589 103.547 12.0229 104.247 12.5409C104.947 13.0449 105.297 13.7659 105.297 14.7039C105.297 15.2779 105.164 15.7889 104.898 16.2369C104.643 16.674 104.3 17.0531 103.89 17.3499C103.436 17.6593 102.931 17.8867 102.399 18.0219C101.831 18.1769 101.245 18.2546 100.656 18.2529ZM107.387 4.45586H110.054V7.12286H112.574V9.18086H110.054V13.6119L107.387 15.9429V9.18086H105.56V7.12286H107.387V4.45586ZM112.574 18.0009H107.387V15.9429H112.574V18.0009Z" />
      </svg>
    </a></div>

)