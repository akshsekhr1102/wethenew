import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <section className="flex items-center justify-center px-4 md:hidden">
      <div className="bg-white w-full h-[60px] fixed  bottom-5 z-20 shadow-lg rounded-[30px] border flex items-center justify-around">
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
          <Drawer>
            <DrawerTrigger>
              <Menu className="" />
            </DrawerTrigger>
            <DrawerContent translate="yes">
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button>Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <Link
          href={"/accounts"}
          className="flex items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 transition"
        >
          <User size={24} className="text-gray-700" />
        </Link>

        <Link
          href={"/search"}
          className=" aspect-square rounded-full h-16 grid place-content-center bg-blue-900 shadow-lg"
        >
          <Search className=" text-white" />
        </Link>

        <Link
          href={"/cart"}
          className="flex items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 transition"
        >
          <ShoppingBag size={24} className="text-gray-700" />
        </Link>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
          <Heart size={24} className="text-gray-700" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
