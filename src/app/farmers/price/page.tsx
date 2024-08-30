"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign } from 'lucide-react';

interface EstimatedPrice {
  min: string;
  max: string;
}

export default function Page() {
  const [productType, setProductType] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [unit, setUnit] = useState<string>("kg");
  const [estimatedPrice, setEstimatedPrice] = useState<EstimatedPrice | null>(null);
  const [marketTrend, setMarketTrend] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEstimate = async () => {
    setLoading(true);
    // In a real application, this would be an API call to get the price estimate
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API delay

    // Mock price estimation logic
    const basePrice = Math.random() * 100 + 20; // Random price between 20 and 120
    const minPrice = basePrice * 0.9;
    const maxPrice = basePrice * 1.1;

    setEstimatedPrice({
      min: minPrice.toFixed(2),
      max: maxPrice.toFixed(2)
    });

    setMarketTrend(Math.random() > 0.5 ? "rising" : "falling");
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Price Estimation Tool</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e: FormEvent) => { e.preventDefault(); handleEstimate(); }} className="space-y-4">
            <div>
              <label className="block mb-2">Product Type</label>
              <Select onValueChange={setProductType} value={productType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fruit">Fruit</SelectItem>
                  <SelectItem value="vegetable">Vegetable</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-2">Product Name</label>
              <Input
                type="text"
                placeholder="e.g., Tomatoes, Apples"
                value={productName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-2">Quantity</label>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setQuantity(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">Unit</label>
                <Select onValueChange={setUnit} value={unit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Kg</SelectItem>
                    <SelectItem value="ton">Ton</SelectItem>
                    <SelectItem value="piece">Piece</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Estimating..." : "Get Price Estimate"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {estimatedPrice && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Estimated Price Range</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-center">
              ₹{estimatedPrice.min} - ₹{estimatedPrice.max} per {unit}
            </div>
            <div className="flex items-center justify-center mt-4">
              <TrendingUp className={`mr-2 ${marketTrend === 'rising' ? 'text-green-500' : 'text-red-500'}`} />
              <span className={marketTrend === 'rising' ? 'text-green-500' : 'text-red-500'}>
                Market trend: {marketTrend === 'rising' ? 'Rising' : 'Falling'}
              </span>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Note: This is an estimated range based on current market trends. Actual prices may vary.
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
