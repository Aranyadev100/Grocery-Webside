import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { productList } from "../ProductList/ProductList";
import { useShop } from "../../context/useShop";

const ProductDetails = () => {
    const { productId } = useParams();
    const product = productList.find((item) => item.id === Number(productId));
    const { addToCart, toggleWishlist, isInWishlist } = useShop();
    const [quantity, setQuantity] = useState(1);

    if (!product) return <div className="max-w-[1400px] mx-auto px-10 py-32 text-center"><h2 className="text-3xl font-bold text-zinc-800">Product not found</h2><Link to="/all-products" className="inline-block mt-6"><Button content="Back to Products" /></Link></div>;
    const saved = isInWishlist(product.id);
    return <div className="max-w-[1400px] mx-auto px-10 py-32"><div className="grid md:grid-cols-2 gap-12 items-center"><div className="bg-zinc-100 rounded-2xl p-10 h-[420px]"><img src={product.image} alt={product.name} className="w-full h-full object-contain" /></div><div><p className="text-orange-500 font-semibold">{product.category}</p><h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mt-3">{product.name}</h1><p className="text-3xl font-bold text-zinc-800 mt-6">${product.price.toFixed(2)}</p><p className="text-zinc-600 mt-2">Per {product.unit}</p><p className="text-zinc-600 text-lg leading-relaxed mt-8">{product.description}</p><div className="flex items-center gap-4 mt-8"><div className="flex items-center gap-3 bg-zinc-100 rounded-lg p-1"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex justify-center items-center cursor-pointer"><FaMinus /></button><span className="font-bold w-5 text-center">{quantity}</span><button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex justify-center items-center cursor-pointer"><FaPlus /></button></div><Button content="Add to Cart" onClick={() => addToCart(product, quantity)} /></div><button type="button" onClick={() => toggleWishlist(product)} className={`flex items-center gap-2 mt-6 font-semibold cursor-pointer ${saved ? "text-orange-500" : "text-zinc-600"}`}><FaHeart /> {saved ? "Saved to Wishlist" : "Add to Wishlist"}</button></div></div></div>;
};

export default ProductDetails;
