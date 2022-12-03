import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Product from './Product/Product';

function App() {
  const showCart= useSelector((state)=>state.cart.cartIsVisible)
  console.log(showCart)
  return (
    <div className="App">
      {showCart && <Cart/>}
     <Header />
     <Product/>
    </div>
  );
}

export default App;
