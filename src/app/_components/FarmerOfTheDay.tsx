import { Avatar } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function FarmerOfTheDay() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Farmer of the Day</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center">
        <Avatar className="mr-4" src="/farmer.jpg" alt="Farmer of the Day" />
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <Badge className="mt-2" variant="success">Top Producer</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
