import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TrendingUp, CloudRain, Sprout } from "lucide-react";

export function FeatureSection() {
  const features = [
    {
      title: "Real-Time Market Prices",
      description: "Get up-to-date market prices for various crops to make informed selling decisions.",
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      title: "Weather Alerts",
      description: "Stay informed with real-time weather alerts to protect your crops from adverse conditions.",
      icon: CloudRain,
      color: "text-yellow-500",
    },
    {
      title: "Crop Recommendations",
      description: "Receive seasonal and climate-specific crop recommendations to maximize your yield.",
      icon: Sprout,
      color: "text-green-500",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Features
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className={`${feature.color} w-12 h-12 flex items-center justify-center rounded-full bg-opacity-20 mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
