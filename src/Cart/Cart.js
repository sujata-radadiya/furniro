import React, { useContext, useState, useEffect } from "react";
import Header from "../Header";
import bannerbg from "../Assets/images/cart.png";
import { Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { state } = location;
   console.log(state.product);
  

  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    if (state && state.product) {
      addToCart(state.product);
    }
  }, [state]);

  const addToCart = (product) => {
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: product.id,
            // quantity: 4,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data.products);
        console.log("User data", data);
      });
  };

  
  

  const clearCart = () => {
     
  };
  const handleUpdateQuantity = () => {

  };
  const updateItemQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <>
      <Header />

      <div className="container-fluid">
         
        <img src={bannerbg} alt="" width={1800} />

        <div className="mt-5 row justify-content-center">
          <div className="col-12">
            <Link to="/productcategory" className="nav__link">
              Continue shopping...
            </Link>
            <table className="table table-light table-hover m-0">
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.thumbnail} style={{ height: "6rem" }} />
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      Quantity :
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleUpdateQuantity(
                            product.id,
                            parseInt(e.target.value)
                          )
                        }
                        min="1"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(product.id, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(product.id, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>

                    <td>
                      <button onClick={() => removeFromCart(product.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p>Total Items: {getTotalItems()} </p>
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>

            <div className="btns">
              <Button variant="dark" onClick={() => clearCart()}>
                Clear Cart
              </Button>
              <Button onClick={() => clearCart()}>CheckOut</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
