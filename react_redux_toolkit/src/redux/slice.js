import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0
}

const addToCart=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value+=1
        }
    }
    
})

export const {addItem} = addToCart.actions
export default addToCart.reducer