"use client"
import {
  DollarSign,
  LineChart,
  MessageCircleMore,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Tag,
  User,
} from "lucide-react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";



import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Sheet, SheetTrigger } from "~/components/ui/sheet";

interface SideLayoutProps {
  children: ReactNode;
}

export default function SideLayout({ children }: SideLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const splitpath = pathname.split("/")
  console.log(pathname)
  const navList = [
    {
      href: '/farmers',
      label: 'Profile',
      icon: <User className="h-4 w-4" />,
    },
    {
      href: '/farmers/inventory',
      label: 'Inventory',
      icon: <Package className="h-4 w-4" />,
    },
    {
      href: '/farmers/orders',
      label: 'Orders',
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      href: '/farmers/ai',
      label: 'AI Chat',
      icon: <MessageCircleMore className="h-4 w-4" />,
    },
    {
      href: '/farmers/analytics',
      label: 'Analytics',
      icon: <LineChart className="h-4 w-4" />,
    },
    {
      href: '/farmers/price',
      label: 'Price Estimation',
      icon: <DollarSign className="h-4 w-4" />,
    }, {
      href: '/farmers/gitag',
      label: 'GI Tag',
      icon: <Tag className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Framers Inc</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navList.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === item.href ? 'bg-muted text-primary' : ''
                    }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>

          </div>
          <div className="mt-auto p-4">
            {/* <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-8">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4  border-b bg-muted/40 px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pathname === "/farmers" ? "" : splitpath[2].charAt(0).toUpperCase() +
                  splitpath[2].slice(1)}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">

          </div>
          <SignedOut>
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 max-h-screen overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
