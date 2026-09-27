import { useState } from "react";
import { FaCheck, FaHeart, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useShop } from "../../context/useShop";

const Card = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [added, setAdded] = useState(false);
  const { id, image, name, price, unit } = product;
  const saved = isInWishlist(id);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="bg-zinc-100 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <button
          type="button"
          aria-label={saved ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
          onClick={() => toggleWishlist(product)}
          className={`text-3xl transition-colors cursor-pointer ${saved ? "text-orange-500" : "text-zinc-300 hover:text-orange-500"}`}
        >
          <FaHeart />
        </button>
        <button
          type="button"
          aria-label={`Add ${name} to cart`}
          onClick={handleAddToCart}
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-11 h-11 flex justify-center items-center rounded-lg text-xl hover:scale-105 transition-all cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>

      <Link to={`/products/${id}`} className="block">
        <div className="w-full h-50 mt-5">
          <img src={image} alt={name} className="w-full h-full object-contain" />
        </div>

        <div className="text-center mt-5">
          <h3 className="text-2xl font-semibold text-zinc-800">{name}</h3>
          <p className="text-zinc-600 mt-1">{unit}</p>
          <p className="text-2xl font-bold text-zinc-800 mt-3 mb-3">${price.toFixed(2)}</p>
        </div>
      </Link>

      <div className="text-center">
        <Button content={added ? "Added to Cart" : "Shop Now"} onClick={handleAddToCart} />
        {added && <FaCheck className="inline-block ml-3 text-green-600" aria-label="Added to cart" />}
      </div>
    </div>
  );
};

export default Card;