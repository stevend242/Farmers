import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function HeroSection() {
  return (
    <Card className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("/hero-bg.jpg")' }}>
      <CardHeader>
        <CardTitle className="text-4xl text-white font-bold">Welcome to the Farmers Marketplace</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl text-white">Connecting Farmers Directly with Buyers</p>
        <Button className="mt-4">Get Started</Button>
      </CardContent>
    </Card>
  );
}
