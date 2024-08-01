"use client"
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ShoppingBag, Calendar, DollarSign, User } from 'lucide-react';

type Order = {
  id: number;
  customer: string;
  date: string;
  total: number;
  status: string;
};

export default function Page() {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    // Simulate fetching orders from an API
    const fetchOrders = async () => {
      // In a real application, replace this with an actual API call
      const mockOrders: Order[] = [
        { id: 1, customer: "John Doe", date: "2023-08-01", total: 125.99, status: "Delivered" },
        { id: 2, customer: "Jane Smith", date: "2023-08-02", total: 79.50, status: "Processing" },
        { id: 3, customer: "Bob Johnson", date: "2023-08-03", total: 199.99, status: "Shipped" },
        { id: 4, customer: "Alice Brown", date: "2023-08-04", total: 54.25, status: "Pending" },
        { id: 5, customer: "Charlie Davis", date: "2023-08-05", total: 149.99, status: "Delivered" },
        { id: 6, customer: "Eva Wilson", date: "2023-08-06", total: 89.75, status: "Processing" },
        { id: 7, customer: "Frank Miller", date: "2023-08-07", total: 210.50, status: "Shipped" },
        { id: 8, customer: "Grace Lee", date: "2023-08-08", total: 69.99, status: "Pending" },
      ];
      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Delivered": return "bg-green-500";
      case "Processing": return "bg-blue-500";
      case "Shipped": return "bg-yellow-500";
      case "Pending": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {orders ? (
          orders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Order #{order.id}</CardTitle>
                <Badge className={`${getStatusColor(order.status)} text-white`}>{order.status}</Badge>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">{order.customer}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">{order.date}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm font-bold">₹{order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>Loading orders...</p>
        )}
      </div>
    </div>
  )
}
