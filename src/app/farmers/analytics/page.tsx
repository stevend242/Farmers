"use client";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, ShoppingCart } from 'lucide-react';

interface SalesData {
  name: string;
  sales: number;
}

interface Data {
  weeklyRevenue: number;
  weeklyGrowth: number;
  monthlyRevenue: number;
  monthlyGrowth: number;
  totalCustomers: number;
  customerGrowth: number;
  totalOrders: number;
  orderGrowth: number;
  salesData: SalesData[];
}

export default function Page() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const mockData: Data = {
        weeklyRevenue: 1329,
        weeklyGrowth: 25,
        monthlyRevenue: 5329,
        monthlyGrowth: 10,
        totalCustomers: 1240,
        customerGrowth: 5,
        totalOrders: 856,
        orderGrowth: -2,
        salesData: [
          { name: 'Mon', sales: 4000 },
          { name: 'Tue', sales: 3000 },
          { name: 'Wed', sales: 5000 },
          { name: 'Thu', sales: 2780 },
          { name: 'Fri', sales: 1890 },
          { name: 'Sat', sales: 2390 },
          { name: 'Sun', sales: 3490 },
        ],
      };
      setData(mockData);
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">₹{data.weeklyRevenue.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="text-green-500 mr-1" />
              +{data.weeklyGrowth}% from last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Month</CardDescription>
            <CardTitle className="text-4xl">₹{data.monthlyRevenue.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="text-green-500 mr-1" />
              +{data.monthlyGrowth}% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Customers</CardDescription>
            <CardTitle className="text-4xl flex items-center">
              <Users className="mr-2 h-8 w-8" />
              {data.totalCustomers.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="text-green-500 mr-1" />
              +{data.customerGrowth}% new customers
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Orders</CardDescription>
            <CardTitle className="text-4xl flex items-center">
              <ShoppingCart className="mr-2 h-8 w-8" />
              {data.totalOrders.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="text-red-500 mr-1" />
              {data.orderGrowth}% from last week
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Weekly Sales Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
