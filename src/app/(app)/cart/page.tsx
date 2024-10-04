import { useCartStore } from "@/store/user";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
