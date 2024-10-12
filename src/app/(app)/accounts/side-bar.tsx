import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, ShoppingBag, User, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const SidebarContent = () => (
    <div className="flex flex-col h-full shadow-lg">
      {/* Avatar Section */}
      <div className="flex items-center gap-3 p-4">
        <Avatar>
          <AvatarImage
            src={"https://avatars.githubusercontent.com/u/179683623?v=4"}
            alt="User"
          />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">Welcome</h2>
          <p className="text-sm text-muted-foreground">aksh</p>
        </div>
      </div>

      {/* Menu Items */}
      <ScrollArea className="flex-2">
        <div className="space-y-2 p-2">
          <Button variant="ghost" className="w-full justify-start">
            <ShoppingBag className="mr-2 h-4 w-4" />
            <Link href={`/accounts/my-orders`}>My orders</Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            <Link href={"/accounts/my-informations"}>My informations</Link>
          </Button>

          <Button variant="ghost" className="w-full justify-start p-2">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden px-10">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-screen">
        <SidebarContent />
      </div>
    </>
  );
}
