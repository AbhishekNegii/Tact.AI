import {configureStore} from '@reduxjs/toolkit'
import addCartSlice from './addCartSlice';

import uiSlice from './ui-slice';


const Store=configureStore({
    reducer:{cart:uiSlice.reducer, cartItem: addCartSlice.reducer}
})

export default Store;