import DisplayProducts from "./components/display-products";
import SearchProducts from "./components/search-products";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface SearchProps {
  searchParams: SearchParams;
}

export default function Search({ searchParams }: SearchProps) {
  return (
    <div className="px-4">
      <div className="md:hidden">
        <SearchProducts />
      </div>
      <DisplayProducts searchParams={searchParams} />
    </div>
  );
}
