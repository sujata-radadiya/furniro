import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import Header from "../Header";

const Cart = () => {
  const {cart, addToCart,removeFromCart, getTotalItems, getTotalPrice, updateItemQuantity,
    clearCart,
  } = useContext(CartContext);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    updateItemQuantity(itemId, newQuantity);
  };

  

  return (
    <>
      <Header />

      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <table className="table table-light table-hover m-0">
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img src={product.images[0]} style={{ height: "6rem" }}/>
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
                          min="1" />
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
                  );
                })}
              </tbody>
            </table>

            <p>Total Items: {getTotalItems()}</p>
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>

            <button onClick={() => clearCart()}>Clear Cart</button>
    
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
