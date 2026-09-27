import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import { productList } from "../ProductList/ProductList";

const SearchResults = () => {
    const [params] = useSearchParams();
    const query = params.get("q") || "";
    const results = productList.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(query.toLowerCase()));
    return <div className="max-w-[1400px] mx-auto px-10 py-32"><Heading highlight="Search" heading="Results" /><p className="text-zinc-600 mt-5">{query ? `Showing results for “${query}”` : "Search our fresh selection."}</p>{results.length ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mt-12">{results.map((product) => <Card key={product.id} product={product} />)}</div> : <p className="text-center text-zinc-600 mt-16">No products matched your search.</p>}</div>;
};

export default SearchResults;
