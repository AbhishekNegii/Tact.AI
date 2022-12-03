import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../Store/ui-slice'


const CartButton = () => {

   const quantity=useSelector(state=>state.cartItem.totalQuantity)
   const dispatch=useDispatch()
   const toggleCartHandler=()=>{
    dispatch(uiActions.toggle())
   }
    
 
    return (
    <button onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span><h3>{quantity}</h3></span>
    </button>
  )
}

export default CartButton
