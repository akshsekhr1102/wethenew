import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function DisplayProducts({ searchParams }: any) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchParams.q,
      },
    },
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-20 py-10">
      {products.map((product) => (
        <Link
          href={`/products/${product.slug}`}
          key={product.id}
          className="flex flex-col items-start"
        >
          <Card className="flex flex-col items-center aspect-square justify-center">
            <CardContent className="p-2 flex flex-col items-center justify-between">
              <Image
                src={product.image}
                alt={product.name}
                height={400}
                width={400}
                className="object-contain object-center"
              />
            </CardContent>
          </Card>
          <div className="text-start mt-2 p-2  tracking-tighter">
            <p className="text-xs md:text-base lg:text-lg font-medium">
              {product.name}
            </p>
            <p className="font-semibold text-base md:text-lg lg:text-xl text-gray-800">
              <span className="font-medium text-sm md:text-md lg:text-lg text-gray-600">
                from
              </span>{" "}
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
