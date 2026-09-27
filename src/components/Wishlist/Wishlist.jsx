import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useShop } from "../../context/useShop";

const Wishlist = () => {
    const { wishlist } = useShop();
    return <div className="max-w-[1400px] mx-auto px-10 py-32"><Heading highlight="Your" heading="Wishlist" />{wishlist.length ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mt-12">{wishlist.map((product) => <Card key={product.id} product={product} />)}</div> : <div className="text-center mt-12"><p className="text-zinc-600">Save your favorite products here.</p><Link to="/all-products" className="inline-block mt-6"><Button content="Explore Products" /></Link></div>}</div>;
};

export default Wishlist;
