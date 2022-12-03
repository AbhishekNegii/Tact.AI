import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
  const items = useSelector((state) => state.cartItem.items);
  console.log("i", items);

  let total = 0;

  items.forEach((item) => {
    total = total + Number(item.price) * Number(item.quantity);
  });
  total = `Rs. ${total.toFixed(2)}`;

  return (
    <div>
      <h2> Your Cart</h2>
      <ul className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              image: item.image,
            }}
          />
        ))}
      </ul>
      <h2>Total Amount: {total}</h2>
      <h3><button>Purchase</button></h3>
    </div>
  );
};

export default Cart;
