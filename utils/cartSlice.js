import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
      //mutating the state(modifying the state)
       addItems:(state,action)=>{
        state.items.push(action.payload);
       },
       removeItems:(state)=>{
         state.items.pop();
       },
       clearCart:(state)=>{
         state.items.length=0
       }
    }

})

export default cartSlice.reducer;
export const {addItems,removeItems,clearCart}=cartSlice.actions;
