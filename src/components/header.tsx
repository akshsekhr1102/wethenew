"use client";
import Link from "next/link";
import Logo from "./logo";
import {
  HeartIcon,
  MenuIcon,
  MoveLeft,
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
import SearchProducts from "@/app/(app)/search/components/search-products";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Header() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const params = useParams();

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`py-1 px-6 md:shadow-lg z-100 fixed w-full transition-transform duration-300 ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        typeof window !== "undefined" && window.scrollY > 20
          ? "bg-white"
          : "bg-transparent"
      } md:bg-white`}
    >
      <div className="md:hidden top-0 left-0 right-0 flex justify-between items-center py-3 px-3 z-10">
        <div className={Object.keys(params).length === 0 ? "" : "hidden"} />
        <Link
          className={Object.keys(params).length === 0 ? "hidden" : ""}
          href="/"
        >
          <MoveLeft />
        </Link>
        <Logo />
        <Link href="/wishlist">
          <HeartIcon />
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-between py-3 px-6">
        <section className="flex items-center gap-4">
          <Logo />
          <div className="flex gap-4">
            <Link href="/collections/all-sneakers">Sneakers</Link>
            <Link href="/collections/chaussures">Shoes</Link>
            <Link href="/collections/streetwear">Streetwear</Link>
          </div>
        </section>

        <section className="flex-[0.75] px-4">
          <Link href="/search" className="relative flex items-center">
            <SearchProducts />
          </Link>
        </section>

        <section className="flex items-center gap-6 text-gray-600">
          <Link href="/accounts/">
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
