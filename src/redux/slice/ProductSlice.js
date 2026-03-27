import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:'Products',
    initialState:{
        item:[]
    },
    reducers:{
        setProducts : (state,action) => {
            state.item=action.payload;
        }
    }
})
    export const {setProducts} = ProductSlice.actions;
    export default ProductSlice.reducer;