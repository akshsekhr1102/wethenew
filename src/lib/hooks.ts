import { SearchContext } from "@/context/search-context";
import { useContext } from "react";




export function useSearchContext() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error(
            "useSearchContext must be within a searchOnctext Provider"
        )
    }
    return context
}