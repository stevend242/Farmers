import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Leaf, Users } from 'lucide-react';

export function StatisticsSection() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-green-50 border-green-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold text-green-800">Market Trends</CardTitle>
          <Leaf className="h-6 w-6 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "Tomatoes", value: 70, color: "bg-red-500" },
              { label: "Potatoes", value: 50, color: "bg-yellow-600" },
              { label: "Carrots", value: 30, color: "bg-orange-500" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} className={`h-2 ${item.color}`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold text-blue-800">Farmer Participation</CardTitle>
          <Users className="h-6 w-6 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "Active Farmers", value: 90, color: "bg-blue-500" },
              { label: "New Registrations", value: 60, color: "bg-green-500" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} className={`h-2 ${item.color}`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
