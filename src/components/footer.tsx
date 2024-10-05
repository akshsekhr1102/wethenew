import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-800 text-gray-200">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">Contact portal</p>
            <p className="text-sm">
              Our team is committed to responding within 24 to 48 working hours.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About Wethenew</h4>
            <p className="text-sm">
              Our mission is to give sneaker and streetwear fans&apos;
              enthusiasts &apos; and the curious the chance to buy their
              favorite products with complete confidence&apos; Whether
              you&apos;re looking for a limited edition product &apos; the
              hottest pair at the moment &apos; or the perfect piece of
              streetwear &apos; you&apos;ve come to the right place &apos;
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">More Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Our concept
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Conditions of our offers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Wethenew Galeries Lafayette
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Our services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  E-gift card
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Programme Wethenew family
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Sell your product
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Shipping and delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Exchanges and returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Wethenew application
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Our Promotional Codes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Women &apos; s Sneakers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Men &apos; s Sneakers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Eco-responsible sneakers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Less than 200€
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4">
          <p className="text-center text-sm">
            &copy; 2024 Wethenew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
