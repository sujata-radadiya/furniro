import { createContext,useState,useEffect } from "react";


export const  CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   fetch('https://dummyjson.com/carts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCart(data);
  //       console.log(data);
  //     });
  // };

  // Function to add an item to the cart
  const addToCart = (product) => {
      setCart([...cart, product]);
  };
 
   
  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
  };

  // Calculate total number of items in the cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

// Calculate total price of items in the cart
const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};

    
    const updateItemQuantity = (itemId, newQuantity) => {
      const updatedCart = cart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
   }

   const clearCart = () => {
    setCart([]);
   }

// Context value to be consumed by children components
const contextValues = {
    cart,
    addToCart,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
    updateItemQuantity,
    clearCart
};
   
   
return (
  <CartContext.Provider value={contextValues}>
      {children}
  </CartContext.Provider>
);
};