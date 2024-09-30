import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchSpace() {
  return (
    <form className="relative flex items-center w-full ">
      <Input
        type="search"
        placeholder="Search for a brand, a model..."
        spellCheck="false"
        className="w-full pr-12"
      />
      <Search className="absolute right-4" />
    </form>
  );
}
