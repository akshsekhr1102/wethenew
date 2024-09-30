import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import prisma from "@/lib/db";
import ProductCard from "./home-cards";

export default async function CollectionCaraousels() {
  const shoes = await prisma.product.findMany({});

  return (
    <section className=" py-4">
      <div className="py-3  ">
        <Carousel className="w-full flex items-center justify-center">
          <CarouselContent className="flex items-center">
            {shoes.map((e, index) => (
              <CarouselItem
                key={index}
                className="basis-1/[2.5] md:basis-[0.5]/6"
              >
                <Card className="flex justify-evenly gap-2 items-center h-10 w-36 px-2 border-black rounded-sm max-w-52">
                  <Image src={e.image} alt="" height={40} width={40} />
                  <h4 className="tracking-tighter  text-gray-700">
                    {e.name.split(" ").slice(0, 2).join(" ")}
                  </h4>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex justify-between items-center px-5">
        <h1 className="text-2xl  font-normal">Back to school</h1>
        <div className="flex gap-3 items-center justify-center">
          <Link href={""} className="underline font-semibold text-sm">
            See More
          </Link>
          <div className="hidden md:flex gap-3">
            <Button>
              <MoveLeft />
            </Button>
            <Button>
              <MoveRight />
            </Button>
          </div>
        </div>
      </div>
      <Carousel className="py-10 px-3">
        <CarouselContent className="p-2  w-full flex items-center justify-center ">
          {shoes.map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/[2.5]  items-start gap-2 max-w-52 "
            >
              <Link href={`/products/${_.slug}`}>
                <ProductCard
                  imageSrc={_.image}
                  price={_.price}
                  productName={_.name}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
