import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCartActions } from "../Store/addCartSlice";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const arr = [];
  const getData = async () => {
    const response = await axios("https://dummyjson.com/products");
    const data = response.data.products;
    for (let i = 0; i < 10; i++) {
      arr.push(data[i]);
    }
    setProduct(arr);
    // console.log(data)
  };
  // console.log(arr)

  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    console.log(item);
    dispatch(
      addCartActions.addItemToCart({
        id: item.id,
        price: item.price,
        title: item.title,
        image: item.thumbnail,
      })
    );
  };

  return (
    <div className="display">
      {product.map((item) => {
        return (
          <div style={{ width: "33%" }}>
            <div className="product-item">
              <img src={item.thumbnail} alt="pic" width="50%" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h2> Rs. {item.price}</h2>
              <button onClick={() => addToCartHandler(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
