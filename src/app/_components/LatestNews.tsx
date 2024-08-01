import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function LatestNews() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Latest News</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">New Crop Insurance Scheme Launched</h3>
            <p>Government launches a new crop insurance scheme to help farmers manage risks.</p>
          </li>
          <li className="mb-4">
            <h3 className="text-xl font-semibold">Organic Farming Workshop</h3>
            <p>Join our workshop on organic farming techniques and best practices.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Market Prices Update</h3>
            <p>Get the latest updates on market prices for various crops.</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
