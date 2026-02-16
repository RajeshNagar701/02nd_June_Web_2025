
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    number: 0,
    name:"Raj nagar",
    Isimage:true
  },
  reducers: {
     change:(state)=>{
        return {...state,name:"Akash Nagar"}
     },
     Plus:(state)=>{
        return {...state,number:state.number+1}
     },
     Minus:(state)=>{
        return {...state,number:state.number-1}
     },
     Hide:(state)=>{
        return {...state,Isimage:false}
     },
     Show:(state)=>{
        return {...state,Isimage:true}
     },
     Toggle:(state)=>{
        return {...state,Isimage:!state.Isimage}
     }
  },
})

export const { change, Plus, Minus,Hide,Show,Toggle } = cartSlice.actions
export default cartSlice.reducer