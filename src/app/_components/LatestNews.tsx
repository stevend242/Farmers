import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Newspaper, Shield, Leaf, TrendingUp } from 'lucide-react';

export function LatestNews() {
  const newsItems = [
    {
      title: "New Crop Insurance Scheme Launched",
      description: "Government launches a new crop insurance scheme to help farmers manage risks.",
      icon: <Shield className="text-blue-500" />,
    },
    {
      title: "Organic Farming Workshop",
      description: "Join our workshop on organic farming techniques and best practices.",
      icon: <Leaf className="text-green-500" />,
    },
    {
      title: "Market Prices Update",
      description: "Get the latest updates on market prices for various crops.",
      icon: <TrendingUp className="text-purple-500" />,
    },
  ];

  return (
    <Card className="mt-8 bg-amber-50 border-amber-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-amber-200">
        <CardTitle className="text-2xl font-bold text-amber-800 flex items-center">
          <Newspaper className="mr-2 text-amber-600" />
          Latest News
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-6">
          {newsItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-1">{item.title}</h3>
                <p className="text-amber-700">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
