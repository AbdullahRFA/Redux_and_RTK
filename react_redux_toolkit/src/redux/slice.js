import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    item : localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
}

const addToCart=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            // state.value+=1
            console.log(action)
            state.item.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state.item))
        },
        removeItem:(state,action)=>{
            // if(state.value>0){

            //     state.value-=1
            // }else{
            //     state.value=0
            // }
            // state.value>0? state.value-=1:null

            const CartData = state.item.filter(item=>item.id != action.payload.id)
            state.item = CartData
            localStorage.setItem("cart",JSON.stringify(CartData))

        },
        clearAllItem:(state)=>{
            state.value = 0
        }
        
        
    }
    
})

export const {addItem, removeItem, clearAllItem} = addToCart.actions
export default addToCart.reducer