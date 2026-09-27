import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useShop } from "../../context/useShop";

const Checkout = () => {
    const { cart, cartTotal, updateQuantity } = useShop();
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", address: "", city: "", phone: "" });
    const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });
    const handleSubmit = (event) => { event.preventDefault(); setSubmitted(true); cart.forEach((item) => updateQuantity(item.id, 0)); setTimeout(() => navigate("/order-success"), 0); };
    if (!cart.length && !submitted) return <div className="max-w-[1400px] mx-auto px-10 py-32 text-center"><Heading highlight="Ready to" heading="Checkout?" /><p className="text-zinc-600 mt-8">Add products to your cart before checking out.</p><Link to="/all-products" className="inline-block mt-6"><Button content="Browse Products" /></Link></div>;
    return <div className="max-w-[1400px] mx-auto px-10 py-32"><Heading highlight="Secure" heading="Checkout" /><div className="grid lg:grid-cols-[1fr_360px] gap-10 mt-12"><form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5"><label className="sm:col-span-2 text-zinc-800 font-semibold">Full name<input required name="name" value={form.name} onChange={handleChange} className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label><label className="text-zinc-800 font-semibold">Email<input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label><label className="text-zinc-800 font-semibold">Phone<input required name="phone" value={form.phone} onChange={handleChange} className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label><label className="sm:col-span-2 text-zinc-800 font-semibold">Delivery address<textarea required name="address" value={form.address} onChange={handleChange} rows="4" className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label><label className="text-zinc-800 font-semibold">City<input required name="city" value={form.city} onChange={handleChange} className="mt-2 w-full p-3 rounded-lg border border-zinc-300 focus:outline-orange-500" /></label><div className="sm:col-span-2"><Button content="Place Order" type="submit" /></div></form><aside className="bg-zinc-100 rounded-xl p-7 h-fit"><h3 className="text-2xl font-bold text-zinc-800">Order Summary</h3>{cart.map((item) => <div key={item.id} className="flex justify-between gap-3 mt-5 text-zinc-600"><span>{item.name} x {item.quantity}</span><span>${(item.price * item.quantity).toFixed(2)}</span></div>)}<div className="border-t border-zinc-300 mt-5 pt-5 flex justify-between text-xl font-bold"><span>Total</span><span>${cartTotal.toFixed(2)}</span></div></aside></div></div>;
};

export default Checkout;
