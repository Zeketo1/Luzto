import React, { createContext, useState } from "react";

const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        let productExists = cartItems.find(
            (cartItem) => cartItem.name === item.name
        );

        if (productExists) {
            setCartItems((p) =>
                p.map((cartItem) =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems((p) => [...p, { ...item, quantity: 1 }]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
