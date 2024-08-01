import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";

export function StatisticsSection() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Market Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={70} label="Tomatoes" />
          <Progress value={50} label="Potatoes" className="mt-4" />
          <Progress value={30} label="Carrots" className="mt-4" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Farmer Participation</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={90} label="Active Farmers" />
          <Progress value={60} label="New Registrations" className="mt-4" />
        </CardContent>
      </Card>
    </div>
  );
}