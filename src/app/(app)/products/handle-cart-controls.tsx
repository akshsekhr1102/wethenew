"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  slug: string;
  image: string;
};

type CartControlsProps = {
  product: Product;
};

export default function CartControls({ product }: CartControlsProps) {
  const router = useRouter();
  const [text, setText] = useState("Add To Cart");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (text === "Add To Cart") {
      addToCart({
        ...product,
        quantity,
      });
      setText("Go To Cart");
    } else {
      router.push("/cart");
    }
  };

  return (
    <>
      <Button onClick={() => setQuantity(2)}>2x</Button>
      <Button onClick={() => setQuantity(3)}>3x</Button>
      <Button onClick={() => setQuantity(4)}>4x</Button>
      <Button onClick={handleAddToCart}>{text}</Button>
    </>
  );
}
