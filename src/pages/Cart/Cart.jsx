import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000); // hide after 4 seconds
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-img" />
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>$ { item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: $ {totalAmount}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Place Order
            </button>
          </div>
        </>
      )}

      {showPopup && <div className="popup">🎉 Order placed successfully!</div>}
    </div>
  );
};

export default Cart;
