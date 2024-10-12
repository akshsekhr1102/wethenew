import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full grid place-content-center place-items-center">
      Go to Cart?
      <Button>
        <Link href={"/cart"}>My Cart</Link>
      </Button>
    </div>
  );
};

export default page;
