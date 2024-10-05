"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjusted import
import { SearchIcon } from "lucide-react";

export default function SearchProducts() {
  const [searchProduct, setSearchProduct] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchProduct) return;

    router.push(`/search/?q=${searchProduct}`);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center w-full "
      >
        <Input
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          placeholder="Search for a brand, a model...."
          className="w-full pr-12"
        />
        <SearchIcon className="absolute right-[7%]" />
      </form>
    </div>
  );
}
