"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function CartPage() {
  const { items, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCartStore();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main>
      <div className="my-4 mx-4">
        <h1 className="text-2xl">Your Products</h1>
      </div>
      <div className="min-h-screen grid place-content-start gap-2 p-4">
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid gap-2">
            {items.map((item) => (
              <Card
                key={item.id}
                id={item.id.toString()}
                className="flex justify-start rounded-none border-none"
              >
                <CardContent className="max-w-28 p-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={150}
                    width={150}
                    className="object-contain aspect-square bg-gray-100"
                  />
                </CardContent>
                <CardFooter className="flex md:flex-col md:items-start md:gap-2 items-center px-4 py-2">
                  <div>
                    <h3 className="tracking-tight text-neutral-500 font-medium">
                      {item.name}
                    </h3>
                    <h2 className="text-sm">
                      Price: ${" "}
                      <span className="text-blue-900 font-semibold">
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row">
                    <Button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                    <div className="flex items-center gap-4">
                      <Button onClick={() => increaseQuantity(item.id)}>
                        +
                      </Button>
                      {item.quantity}
                      <Button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
            <div className="flex justify-between mt-4">
              <h2 className="text-lg font-bold">Total Amount:</h2>
              <h2 className="text-lg font-bold text-blue-900">
                ${totalPrice.toFixed(2)}
              </h2>
            </div>
            <Button className="mt-4">Place your Order</Button>
          </div>
        )}
      </div>
    </main>
  );
}
