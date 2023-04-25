import React from "react";

import { AiFillCloseCircle } from "react-icons/ai";

import "../App.css";

const Cart = (props) => {
  const { cartProducts, setCartVisible } = props;

  return (
    <div className="cart-container">
      <AiFillCloseCircle
        onClick={() => setCartVisible(false)}
        style={{ fontSize: "2em", position: "absolute", left: "0", top: "0" }}
      />
      {cartProducts?.map((cartItem, idx) => (
        <div key={idx} className="cart-items">
          <img
            className="cart-img"
            src={cartItem?.image ?? image}
            alt="fruit image"
          />
          <pre className="cart-title">{cartItem?.title ?? title}</pre>
        </div>
      ))}
    </div>
  );
};

export default Cart;