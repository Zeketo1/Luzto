import React, { createContext, useState } from "react";

const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, num) => {
        let productExists = cartItems.find(
            (cartItem) => cartItem.name === item.name
        );

        if (productExists) {
            setCartItems((p) =>
                p.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + num }
                        : cartItem
                )
            );
        } else {
            setCartItems((p) => [...p, { ...item, quantity: num }]);
        }
    };

    const removeFromCart = (productId) =>
        setCartItems((p) => p.filter((item) => item.name !== productId));

    const reduceProductQuantity = (productId) => {
        let itemToRemove = cartItems.find(
            (cartItem) => cartItem.name === productId
        );
        if (itemToRemove.quantity > 1) {
            setCartItems((p) =>
                p.map((cartItem) =>
                    cartItem.name === productId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        } else {
            removeFromCart(productId);
        }
    };

    const addProductQuantity = (productId) => {
        let itemToRemove = cartItems.find(
            (cartItem) => cartItem.name === productId
        );
        if (itemToRemove.quantity > 0) {
            setCartItems((p) =>
                p.map((cartItem) =>
                    cartItem.name === productId
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        }
    };

    const getTotalPriceAmount = () => {
        const totalPrice = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        const subtotal = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0 + 5
        );
        const formattedTotalPrice = totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
        const formattedTotalPrice2 = subtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
        return [formattedTotalPrice, formattedTotalPrice2];
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                reduceProductQuantity,
                getTotalPriceAmount,
                removeFromCart,
                addProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
