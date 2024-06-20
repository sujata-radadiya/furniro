import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
import Header from "../Header";

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotalItems, getTotalPrice,updateItemQuantity } =
    useContext(CartContext);

  return (
    <>

     <Header/>

      <section className="py-4 container">
        
        <div className="row justify-content-center">
          <div className="col-12">
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
            
            <table className="table table-light table-hover m-0">
            
              <tbody>
              
                {cart.map((product) => {
                  return (
                    
                    <tr key={product.id}>
                      
                      <td >
                        <img src={product.images} style={{ height: "6rem" }} />
                      </td>
                      <td>{product.title}</td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
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
                      <td>
                        <button
                          onClick={() =>
                            addToCart({
                              name: "New Item",
                              price: 100,
                              quantity: 1,
                            })
                          }
                        >
                          Add New Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
