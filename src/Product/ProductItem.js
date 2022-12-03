import React from "react";
import { useDispatch } from "react-redux";
import { addCartActions } from "../Store/addCartSlice";
import "./ProductItem.css";

const ProductItem = (props) => {
  // console.log(props)
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      addCartActions.addItemToCart({
        id: props.id,
        price: props.price,
        title: props.title,
        image: props.image,
      })
    );
  };

  return (
    <div className="display">
        <h2>{props.title}</h2>
        <img src={props.image} alt="pic" style={{ width: "40%" }} />
        <div>Rs. {props.price}</div>
        <div>{props.description}</div>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
  );
};

export default ProductItem;
