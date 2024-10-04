"use client"; // Client component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";

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
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <>
      <Button onClick={() => setQuantity(2)}>2x</Button>
      <Button onClick={() => setQuantity(3)}>3x</Button>
      <Button onClick={() => setQuantity(4)}>4x</Button>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </>
  );
}
