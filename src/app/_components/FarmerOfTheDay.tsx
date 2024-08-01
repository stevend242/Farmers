import { Award, MapPin, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function FarmerOfTheDay() {
  return (
    <Card className="mt-8 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Award className="mr-2" />
          Farmer of the Day
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-center">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg">
            <AvatarImage src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl font-semibold">Balaji Rao</h3>
            <p className="text-gray-600 mt-1 flex items-center justify-center md:justify-start">
              <MapPin className="w-4 h-4 mr-1" />
              Pune, Maharashtra
            </p>
            <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
              <Badge variant="secondary" className="flex items-center">
                <Star className="w-3 h-3 mr-1" />
                Top Producer
              </Badge>
              <Badge variant="outline">Organic Certified</Badge>
              <Badge variant="outline">20+ Years Experience</Badge>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            "I've been farming for over two decades, and I'm passionate about delivering the freshest, highest-quality produce to my community. My secret? Love for the land and respect for nature."
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
