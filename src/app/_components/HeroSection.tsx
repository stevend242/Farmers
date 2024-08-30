import { DashIcon } from "@radix-ui/react-icons";
import { ShoppingCart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export function HeroSection() {


  const productCategories = [
    { src: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=300&q=80", alt: "Fresh Vegetables" },
    { src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=300&q=80", alt: "Juicy Fruits" },
    { src: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=300&q=80", alt: "Dairy Products" },
  ];

  return (
    <div className="relative h-screen rounded-lg overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=2070&q=80"
        alt="Farmers Marketplace Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to Farm Connect
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
          Connecting Farmers Directly with Buyers for Fresh, Local Produce
        </p>
        <div className="flex space-x-4">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <ShoppingCart className="mr-2 h-5 w-5" />
            <Link href="/marketplace">
              Shop Now
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white text-green-600">
            <DashIcon className="mr-2 h-5 w-5" />
            <Link href="/farmers">
              Dashboard
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-8 p-8 bg-gradient-to-t from-black/60 to-transparent">
        {productCategories.map((category, index) => (
          <div key={index} className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-110 transition-transform duration-300">
            <Image
              src={category.src}
              alt={category.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
