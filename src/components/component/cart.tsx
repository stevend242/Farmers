"use client"

import React from "react"
import Link from "next/link"

export function Cart() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <header className="bg-green-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center">Your Healthy Cart</h1>
          </header>

          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              {[
                { name: "Organic Apples", price: 3.99, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", quantity: 2 },
                { name: "Fresh Spinach", price: 2.50, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", quantity: 1 },
                { name: "Ripe Bananas", price: 1.99, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", quantity: 3 },
              ].map((item, index) => (
                <li key={index} className="py-6 flex items-center">
                  <img src={item.image} alt={item.name} className="h-24 w-24 rounded-md object-cover" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="0"
                      value={item.quantity}
                      className="w-16 rounded border-gray-200 py-2 text-center text-sm"
                    />
                    <button className="ml-4 text-red-500 hover:text-red-700">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$14.46</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <Link
                  href="/checkout"
                  className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{" "}
                  <Link href="/" className="font-medium text-green-600 hover:text-green-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  )
}
