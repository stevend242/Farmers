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
      <header className="flex items-center justify-between bg-green-50 px-4 py-3 shadow-sm dark:bg-gray-900">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <LeafIcon className="h-6 w-6 text-green-600" />
            <span className="text-lg font-semibold w-fit text-green-800 dark:text-green-200">Fresh Harvest</span>
          </Link>
          <form className="relative hidden w-full max-w-md md:block">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search fresh produce..."
              className="w-full rounded-md border border-green-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-green-500 focus:outline-none focus:ring-0 dark:border-green-700 dark:bg-gray-800 dark:text-gray-50"
            />
          </form>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
            prefetch={false}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full text-green-700 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800">
            <Link href="/marketplace/cart">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full p-0 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="32"
              height="32"
              className="rounded-full w-full h-full object-cover"
              alt="User Avatar"
            />
          </Button>
        </div>
      </header>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[240px_1fr]">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-green-800 dark:text-green-200">Categories</h2>
          <nav className="grid gap-2">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
              prefetch={false}
            >
              Vegetables
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
              prefetch={false}
            >
              Fruits
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
              prefetch={false}
            >
              Herbs
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
              prefetch={false}
            >
              Organic
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800"
              prefetch={false}
            >
              Seasonal
            </Link>
          </nav>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="filters">
              <AccordionTrigger className="text-base font-semibold text-green-800 dark:text-green-200">Filters</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-300">Price</h3>
                    <div className="h-4" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-300">Origin</h3>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="origin-local" /> Local
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="origin-imported" /> Imported
                      </Label>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-300">Type</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="type-organic" /> Organic
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="type-conventional" /> Conventional
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="type-fresh" /> Fresh
                      </Label>
                      <Label className="flex items-center gap-2 font-normal">
                        <Checkbox id="type-frozen" /> Frozen
                      </Label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            name="Fresh Apples"
            price="$2.99"
            image="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
            tag="Organic"
          />
          <ProductCard
            name="Ripe Bananas"
            id="banana"
            price="$1.99"
            image="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww"
            tag="Fresh"
          />
          <ProductCard
            name="Crisp Lettuce"
            price="$1.49"
            image="https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D"
            tag="Local"
          />
          <ProductCard
            name="Juicy Tomatoes"
            price="$2.49"
            image="https://images.unsplash.com/photo-1561136594-7f68413baa99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fHww"
            tag="Fresh"
          />
          <ProductCard
            name="Sweet Carrots"
            price="$1.79"
            image="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww"
            tag="Organic"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

function ProductCard({ id, name, price, image, tag }) {
  return (
    <div className="rounded-lg border border-green-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-green-800 dark:bg-gray-900">
      <Link href={`/marketplace/${id}`} className="group relative block overflow-hidden rounded-lg" prefetch={false}>
        <img
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-64 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <div>
            <span className="inline-block rounded-full bg-green-500 px-3 py-1 text-xs font-medium">{tag}</span>
          </div>
          <div className="mt-auto">
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-sm">{price}</p>
          </div>
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Add to Cart</Button>
        <div className="flex items-center gap-0.5 text-yellow-400">
          <StarIcon className="h-5 w-5 fill-current" />
          <StarIcon className="h-5 w-5 fill-current" />
          <StarIcon className="h-5 w-5 fill-current" />
          <StarIcon className="h-5 w-5 fill-current" />
          <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
        </div>
      </div>
    </div>
  )
}

function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
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

// SearchIcon, ShoppingCartIcon, and StarIcon remain the same as in the original code
