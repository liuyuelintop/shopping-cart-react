import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { PRODUCTS } from "../../Assets/Products/products";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        <div className="cart">
          {PRODUCTS.map((product) => {
            return cartItems[product.id] > 0 ? (
              <CartItem key={product.id} data={product} />
            ) : null;
          })}
        </div>
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal:${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            checkout{" "}
          </button>
        </div>
      ) : (
        <h1>Your Shopping cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
