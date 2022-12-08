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
  
  const getData = async () => {
    const arr = [];
     const response = await axios("https://dummyjson.com/products");
    const data = response.data.products;
    console.log(data)
    for (let i = 0; i < 20; i++) {
      arr.push(data[i]);
    }

    setProduct(arr);
  };

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
    <div className="cards">
      {product.map((item,i) => {
        return (
          <div style={{ width: "33%" }}>
            <div>
              <img src={item.thumbnail} alt="pic" width="50%" />
              <h2 className="productname">{item.title}</h2>
              <small>{item.description}</small>
              <h2 className="price"> Rs. {item.price}</h2>
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
