import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import prisma from "@/lib/db"; // import your Zustand store
import { useCartStore } from "@/store/user";

// Define a type for your product data
type ParamsProps = {
  params: {
    product: string;
  };
};

export default async function Products({ params }: ParamsProps) {
  const { product } = params;
  const productName = await prisma.product.findUnique({
    where: {
      slug: params.product,
    },
  });

  // Add to cart function from Zustand store
  const addToCart = useCartStore((state) => state.addToCart);

  // Handle the Add to Cart action
  const handleAddToCart = () => {
    if (productName) {
      addToCart({
        id: productName.id,
        name: productName.name,
        price: productName.price,
        image: productName.image as string,
        quantity: 1,
      });
    }
  };

  return (
    <main className="md:mt-10 min-w-screen flex flex-col items-center md:grid grid-cols-2">
      <div className="grid grid-row-2 p-2 gap-1">
        <div className="grid place-content-center">
          <Image
            src={productName?.image as string}
            alt=""
            width={700}
            height={700}
            className="aspect-square md:aspect-auto md:object-cover object-contain object-center bg-gradient-to-b from-white to-black/10"
          />
        </div>
        <div className="grid grid-cols-2 place-content-center gap-1">
          <div>
            <Image
              src="https://cdn.shopify.com/s/files/1/2358/2817/products/dunk-low-black-white-207304.png?v=1638813882&width=640"
              alt=""
              height={350}
              width={350}
              className="aspect-square object-contain object-center bg-black/10"
            />
          </div>
          <div>
            <Image
              src="https://cdn.shopify.com/s/files/1/2358/2817/products/dunk-low-black-white-564324.png?v=1638813882&width=640"
              alt=""
              height={350}
              width={350}
              className="aspect-square object-contain object-center bg-black/10"
            />
          </div>
        </div>
      </div>
      <section className="p-4 w-full flex flex-col gap-3">
        <h1 className="text-2xl tracking-wide">
          {productName
            ? productName.name
            : product.charAt(0).toUpperCase() + product.slice(1)}
        </h1>
        <p>
          From <span className="text-blue-400">${productName?.price}</span>
        </p>
        {/* Add to Cart Button */}
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        <Card>
          <CardHeader className="flex flex-row gap-4 items-center">
            <CardTitle className="font-bold">Alma</CardTitle>
            <Button>2x</Button>
            <Button>3x</Button>
            <Button>4x</Button>
          </CardHeader>
        </Card>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>{productName?.description}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Y prepares for its return from the classes and offers a new most
              effective color of its best seller, the . There Nike Dunk Low
              Medium Olive reveal a base in Smooth white leather accompanied by
              overlays in green leather olive. These panels agree with branding
              on the tongue, laces, lining in fabric and outsole. At the back of
              the model, branding Nike brings texture with a Immaculate
              embroidery Perfectly matching the silhouette.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Description?</AccordionTrigger>
            <AccordionContent>{productName?.description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
