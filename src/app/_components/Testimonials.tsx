import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sneha Joshi",
      avatar: "/user1.jpg",
      initials: "JS",
      quote: "This platform has revolutionized the way I sell my produce.",
      role: "Organic Vegetable Farmer"
    },
    {
      name: "Krishnan Iyer",
      avatar: "/user2.jpg",
      initials: "RB",
      quote: "The real-time market prices and weather updates are game changers.",
      role: "Fruit Orchard Owner"
    }
  ];

  return (
    <Card className="mt-8 mb-8 bg-green-50 border-green-200">
      <CardHeader className="border-b border-green-200">
        <CardTitle className="text-2xl font-bold text-green-800 flex items-center">
          <Quote className="mr-2 text-green-600" />
          Farmer Testimonials
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md">
              <Avatar className="mr-4 h-12 w-12 border-2 border-green-500">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold text-green-800">{testimonial.name}</p>
                <p className="text-sm text-green-600 mb-2">{testimonial.role}</p>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
