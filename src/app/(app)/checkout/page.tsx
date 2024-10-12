import OrderSummary from "@/app/(app)/checkout/order-summary";
import CheckoutForm from "./checkout-form";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto my-8">
      <div className=" md:grid grid-cols-2 place-items-center place-content-center flex flex-col gap-6 items-center justify-center">
        <div>
          {/* Order Summary Component */}
          <CheckoutForm />
        </div>
        <div>
          {/* Your existing Checkout Form here */}
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
