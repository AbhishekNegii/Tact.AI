import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    totalQuantity:0
}

const addCartSlice=createSlice({
    name:"addCart",
    initialState: initialState,
    reducers:{
        addItemToCart(state,action){
           const newItem=action.payload;
           const existingItem=state.items.find((item)=>item.id===newItem.id)
           state.totalQuantity++;
        if(!existingItem){
            state.items.push({
                id:newItem.id,
                quantity:1,
                price:newItem.price,
                totalPrice:newItem.price,
                title:newItem.title,
                image:newItem.image
            })
        }else{
            existingItem.quantity++;
            existingItem.totalPrice=(existingItem.totalPrice)+ (newItem.price)
            console.log("existingItemPrice",existingItem.totalPrice)
        }
        },

        removeItemFromCart(state,action){
        const id=action.payload;
        console.log(id)
        const existingItem=state.items.find((item)=>item.id===id)
        state.totalQuantity--;

        if(existingItem.quantity===1){
            state.items=state.items.filter((item)=>item.id!==id)
        }else{
            existingItem.quantity--;
            existingItem.totalPrice=existingItem.totalPrice-existingItem.price
        }
        }
    }
})


export default addCartSlice

export const addCartActions= addCartSlice.actions