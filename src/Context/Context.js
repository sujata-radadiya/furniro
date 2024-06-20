import { createContext,useState } from "react";


export const  CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
      setCart([...cart, product]);
  };
 
    console.log(setCart);
  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
  };

  // Calculate total number of items in the cart
  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
};

// Calculate total price of items in the cart
const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
};

   const updateItemQuantity = () =>{
     
   }

// Context value to be consumed by children components
const contextValues = {
    cart,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    updateItemQuantity
};

return (
  <CartContext.Provider value={contextValues}>
      {children}
  </CartContext.Provider>
);
};