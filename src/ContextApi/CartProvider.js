import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartData = JSON.parse(localStorage.getItem("cart") || "[]");

  useEffect(() => {
    cartData && setCart(cartData);
  }, []);

  useEffect(() => {
    console.log('cart provider : ', cart, cartData)
    // updating/delete items in the local storage
    cart?.length > 0 && localStorage.setItem("cart", JSON.stringify(cart));
    // if localstorage have some data in it but, 
    // the cart state is empty , update the localstorage, 
    cartData?.length > 0 && cart?.length <= 0 && localStorage.setItem("cart", JSON.stringify(cart));
   
   // setting initial data in local storage i.e, []
    !cartData &&
      cart?.length <= 0 &&
      localStorage.setItem("cart", JSON.stringify("[]"));
  }, [cart]);

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
