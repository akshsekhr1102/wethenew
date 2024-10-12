"use client";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";

function OrderSummary() {
  const { items } = useCartStore();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="object-cover bg-gradient-to-b from-neutral-50 to-neutral-500 rounded-md"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          {/* Total Price */}
          <div className="flex justify-between mt-6">
            <span className="font-medium text-lg">Total</span>
            <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
