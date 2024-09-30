import DisplayProducts from "./components/display-products";
import SearchProducts from "./components/search-products";

export default function Search({ params, searchParams }: any) {
  return (
    <div className=" px-4 ">
      <div className="md:hidden">
        <SearchProducts params={params} searchParams={searchParams} />
      </div>
      <DisplayProducts searchParams={searchParams} />
    </div>
  );
}
