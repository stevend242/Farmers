import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../../../components/ui/card"
import { Label } from "../../../../components/ui/label"
import { Input } from "../../../../components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "../../../../components/ui/popover"
import { Button } from "../../../../components/ui/button"
import { Calendar } from "../../../../components/ui/calendar"
import { Textarea } from "../../../../components/ui/textarea"

export default function Component() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Add New Contract</CardTitle>
        <CardDescription>Fill out the details for your new contract.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Contract Name</Label>
            <Input id="name" placeholder="Enter contract name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Contract Type</Label>
            <Select id="type">
              <SelectTrigger>
                <SelectValue placeholder="Select contract type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="service">Service</SelectItem>
                <SelectItem value="supplier">Supplier</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start font-normal">
                  Pick a start date
                  <div className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start font-normal">
                  Pick an end date
                  <div className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="budget-min">Budget Min</Label>
            <Input id="budget-min" type="number" placeholder="0.00" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget-max">Budget Max</Label>
            <Input id="budget-max" type="number" placeholder="0.00" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="file">Attach File</Label>
          <Input id="file" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Provide details about the contract..." />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Save Contract</Button>
      </CardFooter>
    </Card>
  )
}
