import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-content-center place-items-center">
      <h2 className="text-xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </main>
  );
}
