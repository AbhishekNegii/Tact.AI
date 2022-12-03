import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import './Cart.css'

const Cart = (props) => {
  const items = useSelector((state) => state.cartItem.items);
  console.log("i",items)
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
              image:item.image
            }}
          />
        ))}
      </ul>
      </div>
  );
};

export default Cart;
