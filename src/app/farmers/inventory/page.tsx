"use client";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

interface Product {
  name: string;
  description: string;
  price: string;
  stock: string;
  unit: string;
  expiry: string;
  yield: string;
  image: string;
}

export default function Page() {
  const initialData: Product[] = [
    {
      name: "Organic Tomatoes",
      description: "Fresh, locally grown organic tomatoes",
      price: "2.99",
      stock: "100",
      unit: "kg",
      expiry: "2023-12-15",
      yield: "2023-11-01",
      image: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Free-range Eggs",
      description: "Farm-fresh free-range eggs",
      price: "3.99",
      stock: "50",
      unit: "dozen",
      expiry: "2023-12-20",
      yield: "2023-11-05",
      image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Organic Apples",
      description: "Crisp and sweet organic apples",
      price: "1.99",
      stock: "200",
      unit: "kg",
      expiry: "2024-01-01",
      yield: "2023-11-15",
      image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Organic Carrots",
      description: "Fresh, crunchy organic carrots",
      price: "1.49",
      stock: "150",
      unit: "kg",
      expiry: "2023-12-30",
      yield: "2023-11-10",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      name: "Grass-fed Milk",
      description: "Fresh milk from grass-fed cows",
      price: "4.99",
      stock: "75",
      unit: "liter",
      expiry: "2023-12-10",
      yield: "2023-11-01",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [yield1, setYield] = useState<string>('');
  const [img, setImg] = useState<File | null>(null);
  const [data, setData] = useState<Product[]>(initialData);

  const handleSubmit = () => {
    if (img) {
      const newProduct: Product = {
        name,
        description,
        price,
        stock,
        unit,
        expiry,
        yield: yield1,
        image: URL.createObjectURL(img),
      };

      setData([...data, newProduct]);

      setName('');
      setDescription('');
      setPrice('');
      setStock('');
      setUnit('');
      setExpiry('');
      setYield('');
      setImg(null);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if(file!==undefined)
      setImg(file);
    }
  };
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
                    onChange={handleFileChange}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Expiry" className="text-right">
                    Expiry
                  </Label>
                  <Input
                    id="Expiry"
                    type="date"
                    value={expiry}
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
                    value={yield1}
                    onChange={(e) => setYield(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={handleSubmit}>Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card x-chunk="dashboard-06-chunk-0" className="max-h-full flex-1 overflow-y-auto">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Manage your products.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="max-h-screen">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Stock</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="hidden md:table-cell">Expiry</TableHead>
                <TableHead className="hidden md:table-cell">Yield</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length > 0 ? (
                data.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square shadow-md rounded-md object-cover"
                        height="64"
                        src={item.image}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.stock}</TableCell>
                    <TableCell className="hidden md:table-cell">₹{item.price}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.expiry}</TableCell>
                    <TableCell className="hidden md:table-cell">{item.yield}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
