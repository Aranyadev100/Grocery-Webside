import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext.js";

const readStorage = (key, fallback) => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
};

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState(() => readStorage("grosify-cart", []));
    const [wishlist, setWishlist] = useState(() => readStorage("grosify-wishlist", []));

    useEffect(() => {
        localStorage.setItem("grosify-cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("grosify-wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (product, quantity = 1) => {
        setCart((currentCart) => {
            const existing = currentCart.find((item) => item.id === product.id);
            if (existing) {
                return currentCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
                );
            }
            return [...currentCart, { ...product, quantity }];
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCart((currentCart) =>
            quantity < 1
                ? currentCart.filter((item) => item.id !== productId)
                : currentCart.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        );
    };

    const removeFromCart = (productId) => {
        setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
    };

    const toggleWishlist = (product) => {
        setWishlist((currentWishlist) => {
            const exists = currentWishlist.some((item) => item.id === product.id);
            return exists
                ? currentWishlist.filter((item) => item.id !== product.id)
                : [...currentWishlist, product];
        });
    };

    const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const value = {
        cart,
        wishlist,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        toggleWishlist,
        isInWishlist,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

