import { Avatar } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function Testimonials() {
  return (
    <Card className="mt-8 mb-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Testimonials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          <Avatar className="mr-4" src="/user1.jpg" alt="User 1" />
          <div>
            <p className="text-lg font-semibold">Jane Smith</p>
            <p className="text-gray-600">"This platform has revolutionized the way I sell my produce."</p>
          </div>
        </div>
        <div className="flex items-center">
          <Avatar className="mr-4" src="/user2.jpg" alt="User 2" />
          <div>
            <p className="text-lg font-semibold">Robert Brown</p>
            <p className="text-gray-600">"The real-time market prices and weather updates are game changers."</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
