import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useShop } from "../../context/useShop";

const Cart = () => {
    const { cart, cartTotal, updateQuantity, removeFromCart } = useShop();

    if (!cart.length) {
        return <div className="max-w-[1400px] mx-auto px-10 py-32 text-center"><Heading highlight="Your" heading="Cart" /><p className="text-zinc-600 mt-8">Your cart is waiting for something fresh.</p><Link to="/all-products" className="inline-block mt-6"><Button content="Browse Products" /></Link></div>;
    }

    return <div className="max-w-[1400px] mx-auto px-10 py-32"><Heading highlight="Your" heading="Cart" /><div className="grid lg:grid-cols-[1fr_360px] gap-10 mt-12"><div className="space-y-4">{cart.map((item) => <div key={item.id} className="bg-zinc-100 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5"><img src={item.image} alt={item.name} className="w-28 h-28 object-contain" /><div className="flex-1 text-center sm:text-left"><Link to={`/products/${item.id}`} className="text-xl font-bold text-zinc-800 hover:text-orange-500">{item.name}</Link><p className="text-zinc-600 mt-1">${item.price.toFixed(2)} / {item.unit}</p></div><div className="flex items-center gap-3"><button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-9 h-9 rounded-lg bg-white flex justify-center items-center cursor-pointer"><FaMinus /></button><span className="font-bold w-5 text-center">{item.quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-9 h-9 rounded-lg bg-white flex justify-center items-center cursor-pointer"><FaPlus /></button></div><p className="font-bold text-xl">${(item.price * item.quantity).toFixed(2)}</p><button type="button" aria-label={`Remove ${item.name}`} onClick={() => removeFromCart(item.id)} className="text-zinc-400 hover:text-red-500 cursor-pointer"><FaTrash /></button></div>)}</div><aside className="bg-zinc-100 rounded-xl p-7 h-fit"><h3 className="text-2xl font-bold text-zinc-800">Order Summary</h3><div className="flex justify-between mt-7 text-zinc-600"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div><div className="flex justify-between mt-3 text-zinc-600"><span>Delivery</span><span>Free</span></div><div className="border-t border-zinc-300 mt-5 pt-5 flex justify-between text-xl font-bold"><span>Total</span><span>${cartTotal.toFixed(2)}</span></div><Link to="/checkout" className="block mt-7"><Button content="Checkout" className="w-full" /></Link></aside></div></div>;
};

export default Cart;
