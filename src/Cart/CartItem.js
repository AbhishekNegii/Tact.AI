import React from "react";
import { useDispatch } from "react-redux";
import { addCartActions } from "../Store/addCartSlice";
import "./Cart.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const reduceItemHandler = () => {
    dispatch(addCartActions.removeItemFromCart(props.item.id));
  };
  const addItemHandler = () => {
    dispatch(
      addCartActions.addItemToCart({
        id: props.item.id,
        title: props.item.title,
        price: props.item.price,
        quantity: props.item.quantity,
      })
    );
  };

  return (
    <ul className="cart-item">
      <div className="image-box">
        <img src={props.item.image} alt="pic" width="20%" />
      </div>
      <h3 className="title">{props.item.title}</h3>
      <div className="summary">
        <span className="price">
           Rs. {props.item.total} Quantity :{props.item.quantity}
        </span>
      </div>
      <div className="actions">
        <button onClick={reduceItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
      </ul>
  );
};

export default CartItem;
