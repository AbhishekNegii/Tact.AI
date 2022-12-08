import React, { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "./CartButton.css";

const CartButton = () => {
  const [modal, setModal] = useState(false);
  const quantity = useSelector((state) => state.cartItem.totalQuantity);
  const toggleCartHandler = () => {
    setModal(true);
  };

  return (
    <>
      {modal && (
        <div className="sliderwrap">
          <div className="overlay">
            <div className="fullScreenImage">
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                Close
              </button>
              <Cart />
            </div>
          </div>
        </div>
      )}

      <button onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span>
          <h3>{quantity}</h3>
        </span>
      </button>
    </>
  );
};

export default CartButton;
