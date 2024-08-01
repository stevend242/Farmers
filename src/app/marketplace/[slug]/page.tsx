"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from "~/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: string;
  pricePerUnit: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  rating: number;
  reviews: number;
  origin: string;
  nutritionFacts: {
    [key: string]: string | number;
  };
  ripeness: string[];
  organicCertified: boolean;
  inStock: boolean;
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const id = params.slug;
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (id === 'banana') {
      const bananaProduct: Product = {
        id: 'banana',
        name: "Fresh Organic Bananas",
        price: "$0.99",
        pricePerUnit: "per pound",
        description: "Our organic bananas are sourced from sustainable farms, ensuring you get the best quality fruit. Rich in potassium and vitamins, these bananas are perfect for snacking, baking, or adding to your morning smoothie.",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww",
        category: 'Fruits',
        subcategory: 'Tropical',
        rating: 4.8,
        reviews: 127,
        origin: 'Ecuador',
        nutritionFacts: {
          calories: 105,
          protein: "1.3g",
          carbs: "27g",
          fiber: "3.1g",
          sugar: "14g",
          potassium: "422mg"
        },
        ripeness: ['Green', 'Yellow', 'Spotted'],
        organicCertified: true,
        inStock: true
      };
      setProduct(bananaProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (amount: number) => {
    setQuantity(Math.max(1, quantity + amount));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace" className="text-green-600 hover:text-green-800 mb-4 inline-block">
        &larr; Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-600 mb-1">
            {product.price} <span className="text-sm text-gray-500">{product.pricePerUnit}</span>
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {product.category}
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {product.subcategory}
            </span>
            {product.organicCertified && (
              <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                Organic
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">Origin: {product.origin}</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  filled={i < Math.floor(product.rating)}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </p>
          </div>
          <div className="mb-4">
            <p className="font-semibold mb-2">Ripeness Options:</p>
            <div className="flex gap-2">
              {product.ripeness.map((option) => (
                <span key={option} className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {option}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <Button onClick={() => handleQuantityChange(-1)} className="bg-gray-200 text-gray-800 px-2 py-1">-</Button>
            <span className="mx-4">{quantity} lb</span>
            <Button onClick={() => handleQuantityChange(1)} className="bg-gray-200 text-gray-800 px-2 py-1">+</Button>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white mb-4">
            Add to Cart
          </Button>
          <div>
            <h3 className="font-semibold mb-2">Nutrition Facts (per 100g):</h3>
            <ul className="text-sm text-gray-600">
              {Object.entries(product.nutritionFacts).map(([key, value]) => (
                <li key={key} className="mb-1">
                  <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StarIconProps {
  filled: boolean;
}

function StarIcon({ filled }: StarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={filled ? "text-yellow-400" : "text-gray-300"}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
