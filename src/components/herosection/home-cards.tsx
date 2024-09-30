import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  price: number;
}

export default function ProductCard({
  imageSrc,
  productName,
  price,
}: ProductCardProps) {
  return (
    <>
      <Card className="min-h-64 rounded-none border-none">
        <CardContent className="rounded-none bg-black/[6%] aspect-square flex items-center">
          <Image
            src={imageSrc}
            alt=""
            height={350}
            width={350}
            className="scale-150"
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start  justify-between h-full px-1 py-1">
          <p className="font-normal text-sm tracking-tighter">{productName}</p>
          <p className="text-xs text-muted-foreground ">from ${price}</p>
        </CardFooter>
      </Card>
    </>
  );
}

{
  /**/
}
