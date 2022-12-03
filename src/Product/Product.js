import React, { useEffect,useState } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'

const Product = () => {
    const[product,setProduct]=useState([])

    useEffect(()=>{
        getData()
    },[])
    const arr=[]
    const getData=async ()=>{
        const response= await axios('https://dummyjson.com/products')
        const data=response.data.products
        for(let i=0;i<10;i++){
           arr.push(data[i])
        }
        setProduct(arr)
        // console.log(data)
    }
    // console.log(arr)

    const productItem = product.map((ele,i) => (
        <ProductItem
          key={i}
          id={ele.id}
          title={ele.title}
          price={ele.price}
          image={ele.thumbnail}          
          description={ele.description}
        />
      ));

  return (
    <div>
       <ul>{productItem}</ul>
    </div>
  )
}

export default Product