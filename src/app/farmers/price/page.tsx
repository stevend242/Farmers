

import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { fetchFruits } from "~/server/action/actions"

export default async function Page() {
  const pricedata = await fetchFruits()

  return (
    <div className="grid grid-cols-3 gap-2">
      {pricedata?.map((item, idx) => (
        <Card
          className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
        >
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                {item.name}
              </CardTitle>
            </div>

          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Price Details</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Mall Price Range:
                  </span>
                  <span>{item.mallPriceRange}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Market Price
                  </span>
                  <span>{item.marketPrice}</span>
                </li>
              </ul>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Retail Price Range</span>
                  <span>{item.retailPriceRange}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Unit</span>
                  <span>{item.unit}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

  )
}