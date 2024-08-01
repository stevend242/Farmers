import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function FeatureSection() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Real-Time Market Prices</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Get up-to-date market prices for various crops to make informed selling decisions.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Weather Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Stay informed with real-time weather alerts to protect your crops from adverse conditions.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Crop Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Receive seasonal and climate-specific crop recommendations to maximize your yield.</p>
        </CardContent>
      </Card>
    </div>
  );
}
