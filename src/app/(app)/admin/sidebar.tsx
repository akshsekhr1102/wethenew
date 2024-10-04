"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the correct hook

export default function Sidebar() {
  const pathname = usePathname(); // Get the current path

  // Define an array of links to avoid repetition
  const links = [
    { href: "dashboard", label: "Dashboard" },
    { href: "others", label: "Others" },
  ];

  return (
    <nav className="min-h-full bg-white/50 flex flex-col gap-4 text-sm text-muted-foreground max-w-[280px] min-w-[220px] mt-10 p-4 border-r border-gray-200">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <button
            className={cn(
              "rounded-md flex items-center text-lg h-[60px] w-full cursor-pointer px-4 gap-3 transition-colors duration-200",
              pathname === link.href
                ? "bg-gray-300 text-black font-semibold"
                : "hover:bg-gray-200 focus:bg-gray-300"
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </button>
        </Link>
      ))}
    </nav>
  );
}
