import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    item : [],
}

const addToCart=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            // state.value+=1
            console.log(action)
            state.item.push(action.payload)
        },
        removeItem:(state)=>{
            // if(state.value>0){

            //     state.value-=1
            // }else{
            //     state.value=0
            // }
            state.value>0? state.value-=1:null
        },
        clearAllItem:(state)=>{
            state.value = 0
        }
        
        
    }
    
})

export const {addItem, removeItem, clearAllItem} = addToCart.actions
export default addToCart.reducer