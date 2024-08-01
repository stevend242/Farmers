/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/2Yod4VMbF4G
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import Link from "next/link"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Separator } from "~/components/ui/separator"
import React from "react"

export function cart() {
  return (
    <React.Fragment>
      <header className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white shadow-md">
        <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
          <ShoppingBagIcon className="h-6 w-6" />
          <span>Acme Store</span>
        </Link>
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-md bg-gray-800 px-10 py-2 focus:outline-none"
          />
        </div>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCartIcon className="h-6 w-6" />
          <Badge className="absolute -top-2 -right-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold">3</Badge>
        </Button>
      </header>
      <main className="container mx-auto my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="rounded-lg bg-white shadow-md">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={400}
            height={300}
            className="h-48 w-full rounded-t-lg object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Product Name</h3>
            <p className="text-gray-500">Description of the product</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold">$49.99</span>
              <Button size="sm">Add to Cart</Button>
            </div>
          </div>
        </div>
      </main>
      <aside className="fixed right-0 top-0 z-10 h-full w-80 bg-gray-100 p-6 shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={64}
                height={64}
                className="h-16 w-16 rounded-md object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Product Name</h3>
                <p className="text-gray-500">Quantity: 2</p>
              </div>
            </div>
            <span className="text-lg font-bold">$99.98</span>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">Total:</span>
          <span className="text-2xl font-bold">$99.98</span>
        </div>
        <Button className="mt-6 w-full">Checkout</Button>
      </aside>
    </React.Fragment>
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


function ShoppingBagIcon(props) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
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