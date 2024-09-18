import { createSlice } from "@reduxjs/toolkit";



const cartSlice =createSlice({
   name :'cart' ,
   initialState :[],
   reducers:{
    add:(state ,action)=>{
        state.push(action.payload)
    },
    //Add other reducers as needed
   } 
});

export const {add} =cartSlice.actions ;
export default cartSlice.reducer;