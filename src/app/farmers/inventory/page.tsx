"use client"
import Image from "next/image"
import Link from "next/link"
import {
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Input } from "~/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Dialog, DialogClose, DialogTitle, DialogContent, DialogTrigger, DialogHeader, DialogDescription, DialogFooter } from "~/components/ui/dialog"
import { Label } from "~/components/ui/label"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Page() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('');
  const [expiry, setExpiry] = useState('');
  const [yield1, setYield] = useState('');
  const [img, setImg] = useState(null);
  const [data, setdata] = useState(null);

  // To store the selected image file
  const router = useRouter();



  return (
    <div className="flex gap-2 flex-col">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Product</DialogTitle>
                <DialogDescription>Add a product to inventory.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    className="col-span-3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Price" className="text-right">
                    Price
                  </Label>
                  <Input
                    id="Price"
                    className="col-span-3"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Stock" className="text-right">
                    Stock
                  </Label>
                  <Input
                    id="Stock"
                    className="col-span-3"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Unit" className="text-right">
                    Unit
                  </Label>
                  <Input
                    id="Unit"
                    className="col-span-3"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="img" className="text-right">
                    Image
                  </Label>
                  <Input
                    id="img"
                    type="file"
                    className="col-span-3"
                    onChange={(e) => { setImg(e.target.files[0]), console.log(e.target.files) }} // Capture the selected file
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Expiry" className="text-right">
                    Expiry
                  </Label>
                  <Input
                    id="Expiry"
                    type="date"
                    onChange={(e) => setExpiry(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Yield" className="text-right">
                    Yield
                  </Label>
                  <Input
                    id="Yield"
                    type="date"
                    className="col-span-3"
                    onChange={(e) => setYield(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={() => handleSubmit()}>Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

        </div>
      </div>

      <Card x-chunk="dashboard-06-chunk-0" className="max-h-full flex-1 overflow-y-auto">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="max-h-screen">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">
                  Stock
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Price
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Expiry
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Yield
                </TableHead>

                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data ? (
                data.map((item, idx) => (
                  <TableRow>

                    <TableCell className="hidden sm:table-cell">

                      <Image
                        alt="Product image"
                        className="aspect-square shadow-md rounded-md object-cover"
                        height="64"
                        src={item.image}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {item.stock}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      ₹{item.price}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {item.expiry}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {item.yield}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))) : (<div>Loading..</div>)}
            </TableBody>
          </Table>
        </CardContent>
      </Card>


    </div>
  )
}
