import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import Image from "next/image";

const crops = [
  { name: "Tomatoes", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
  { name: "Potatoes", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
  { name: "Carrots", image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" },
  { name: "Apples", image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
  { name: "Lettuce", image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" },
];

export function MostSellingCrops() {
  return (
    <Card className="mt-8 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
        <CardTitle className="text-2xl font-bold">Most Selling Crops</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {crops.map((crop, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={crop.image}
                      alt={crop.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-center">{crop.name}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}
