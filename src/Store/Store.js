import { configureStore } from "@reduxjs/toolkit";
import addCartSlice from "./addCartSlice";

const Store = configureStore({
  reducer: { cartItem: addCartSlice.reducer },
});

export default Store;
