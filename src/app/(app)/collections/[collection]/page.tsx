import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: { collection: string };
}) {
  // Find the collection based on the collection name from the URL params
  const collection = await prisma.collection.findUnique({
    where: { name: params.collection },
    include: { products: true },
  });

  return (
    <div className="min-h-screen flex flex-col items-start px-32 mb-10">
      <h1 className="text-2xl my-4 font-medium">
        {params.collection
          .replace(/-/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase())}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
        {collection?.products.map((product) => (
          <Link
            href={`/products/${product.slug}`}
            key={product.id}
            className=""
          >
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
              <span className="text-blue-600 font-semibold">
                {product.price}
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
