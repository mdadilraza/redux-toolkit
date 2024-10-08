import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";
import { act } from "react";
const initialState ={
    data :[],
    status :StatusCode.IDLE
}
const productSlice =createSlice({
   name :'product' ,
   initialState ,
   reducers:{
    // fetchProducts(state ,action){
    //     state.data = action.payload
    // }
   },
   extraReducers:(builder) =>{
    builder.addCase(getProducts.pending ,(state ,action) =>{
        state.status=StatusCode.LOADING
    })
      builder.addCase(getProducts.fulfilled ,(state ,action) =>{
        state.data = action.payload
        state.status=StatusCode.IDLE
      })

      builder.addCase(getProducts.rejected ,(state ,action) =>{
         state.status=StatusCode.ERROR
      })
   }
    
});

export const {fetchProducts} = productSlice.actions ;
export default productSlice.reducer;

//for Asynchronous Operation

export  const getProducts= createAsyncThunk('products/get' ,async ()=>{
    const data =await fetch('https://fakestoreapi.com/products');
         const result =await data.json();

        return result;
})


// export  function getProducts() {
//     return async function getProductThunk( dispatch , getState) {
//          const data =await fetch('https://fakestoreapi.com/products');
//          const result =await data.json();

//          dispatch(fetchProducts(result))
//     }
// }