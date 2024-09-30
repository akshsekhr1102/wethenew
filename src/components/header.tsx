import Link from "next/link";
import Logo from "./logo";
import { Input } from "./ui/input";
import {
  HamIcon,
  HeartIcon,
  MenuIcon,
  MoveLeft,
  MoveRight,
  SearchIcon,
  ShoppingBag,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import SearchSpace from "./herosection/searchbar";
import SearchProducts from "@/app/(app)/search/components/search-products";

export default function Header() {
  return (
    <header className="py-1 px-6 shadow-lg">
      <div className="md:hidden top-0 left-0 right-0 flex justify-between items-center py-3 px-3 z-10 ">
        <Link href="/">
          <MoveLeft />
        </Link>
        <Logo />
        <Link href="/wishlist">
          <HeartIcon />
        </Link>
      </div>

      {/* MEDIUM HEADER */}
      <div className="hidden md:flex items-center justify-between py-3 px-6 bg-white">
        <section className="flex items-center gap-4">
          <Logo />
          <div className="flex gap-4">
            <Link href="/collections/sneakers">Sneakers</Link>
            <Link href="/collections/shoes">Shoes</Link>
            <Link href="/collections/streetwear">Streetwear</Link>
          </div>
        </section>

        <section className="flex-[0.75] px-4">
          <Link href="/search" className="relative flex items-center">
            <SearchProducts />
          </Link>
        </section>

        <section className="flex items-center gap-6 text-gray-600">
          <Link href="/accounts/profile">
            <UserIcon />
          </Link>
          <Link href="/wishlist">
            <HeartIcon />
          </Link>
          <Link href="/cart">
            <ShoppingBag />
          </Link>

          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </section>
      </div>
    </header>
  );
}
