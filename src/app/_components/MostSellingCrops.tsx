import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Carousel } from "~/components/ui/carousel";

export function MostSellingCrops() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Most Selling Crops</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel>
          <div className="carousel-item">
            <img src="/crop1.jpg" alt="Crop 1" />
            <p className="mt-2 text-center">Tomatoes</p>
          </div>
          <div className="carousel-item">
            <img src="/crop2.jpg" alt="Crop 2" />
            <p className="mt-2 text-center">Potatoes</p>
          </div>
          <div className="carousel-item">
            <img src="/crop3.jpg" alt="Crop 3" />
            <p className="mt-2 text-center">Carrots</p>
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
}
