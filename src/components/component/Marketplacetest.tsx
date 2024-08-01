"use client"

import Link from "next/link"
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export function Marketplacetest() {
  return (
    <React.Fragment>
      <header className="flex items-center justify-between bg-white px-4 py-3 shadow-sm dark:bg-gray-950">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Ecommerce</span>
          </Link>
          <form className="relative hidden w-full max-w-md md:block">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
            />
          </form>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </header>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[240px_1fr]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <nav className="grid gap-2">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              Clothing
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              Electronics
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              Home & Garden
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              Beauty & Personal Care
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              prefetch={false}
            >
              Sports & Outdoors
            </Link>
          </nav>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="filters">
              <AccordionTrigger className="text-base font-semibold">Filters</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Price</h3>
                    <div className="h-4" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Brand</h3>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="brand-nike" /> Nike
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="brand-adidas" /> Adidas
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="brand-apple" /> Apple
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="brand-samsung" /> Samsung
                      </Label>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold">Color</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="color-black" /> Black
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="color-white" /> White
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="color-blue" /> Blue
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="color-red" /> Red
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="color-green" /> Green
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="color-yellow" /> Yellow
                      </Label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link href="#" className="group relative block overflow-hidden rounded-lg" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="h-64 w-full object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div>
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium">New</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-medium">Acme T-Shirt</h3>
                  <p className="text-sm">$29.99</p>
                </div>
              </div>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">Add to Cart</Button>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link href="#" className="group relative block overflow-hidden rounded-lg" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="h-64 w-full object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div>
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium">Sale</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-medium">Acme Hoodie</h3>
                  <p className="text-sm">$49.99</p>
                </div>
              </div>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">Add to Cart</Button>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link href="#" className="group relative block overflow-hidden rounded-lg" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="h-64 w-full object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div>
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium">Featured</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-medium">Acme Backpack</h3>
                  <p className="text-sm">$59.99</p>
                </div>
              </div>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">Add to Cart</Button>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link href="#" className="group relative block overflow-hidden rounded-lg" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="h-64 w-full object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div>
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium">New</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-medium">Acme Sunglasses</h3>
                  <p className="text-sm">$24.99</p>
                </div>
              </div>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">Add to Cart</Button>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link href="#" className="group relative block overflow-hidden rounded-lg" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={300}
                height={300}
                className="h-64 w-full object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div>
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium">Sale</span>
                </div>
                <div className="mt-auto">
                  <h3 className="text-lg font-medium">Acme Water Bottle</h3>
                  <p className="text-sm">$14.99</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
