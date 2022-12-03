import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../Store/ui-slice";
import Cart from "./Cart";
import './CartButton.css'

const CartButton = () => {
    const[modal,setModal]=useState(false)
  const quantity = useSelector((state) => state.cartItem.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
   setModal(true)

};



  return (
    <>
    {modal &&  (
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
              <Cart/>
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
