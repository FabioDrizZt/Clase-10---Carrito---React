import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const existe = cart.findIndex((item) => product.id === item.id);
    if (existe === -1) setCart([...cart, product]);
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id != product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
