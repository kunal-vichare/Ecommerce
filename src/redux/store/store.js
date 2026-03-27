import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/CounterSlices';
import ProductReducer from '../slice/ProductSlice'

export const store = configureStore({
    reducer : {
        counter: counterReducer,
        Products: ProductReducer
    }
})