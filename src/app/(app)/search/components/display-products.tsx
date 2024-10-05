import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

interface SearchParams {
  q?: string;
}

export default async function DisplayProducts({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchParams.q,
      },
    },
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-20 py-10 ">
      {products.map((product) => (
        <Link href={`/products/${product.slug}`} key={product.id} className="">
          <Card className="rounded-none">
            <CardContent className=" flex flex-col items-center justify-center aspect-square bg-neutral-200 p-0">
              <Image
                src={product.image}
                alt={product.name}
                height={400}
                width={400}
                className="object-contain object-center "
              />
            </CardContent>
          </Card>
          <h2 className="font-light">{product.name}</h2>

          <p>
            Price:{" "}
            <span className="text-blue-600 font-semibold">{product.price}</span>
          </p>
        </Link>
      ))}
    </div>
  );
}
