import { createSlice } from "@reduxjs/toolkit"

// Helper function to safely parse JSON
const getLocalCartData = () => {
    try {
        const localData = localStorage.getItem("cart");
        return localData ? JSON.parse(localData) : [];
    } catch (error) {
        console.error("Error parsing cart data:", error);
        return [];
    }
};

const initialState = {
    item: getLocalCartData(),
};

const addToCart = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // Check if item already exists to prevent duplicates
            const existingItem = state.item.find(item => item.id === action.payload.id);
            if (!existingItem) {
                // Add new item with default quantity of 1
                state.item.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.item));
        },
        removeItem: (state, action) => {
            // Fix: Filter allows us to return a new array easily
            const CartData = state.item.filter(item => item.id !== action.payload.id);
            state.item = CartData;
            localStorage.setItem("cart", JSON.stringify(CartData));
        },
        // NEW REDUCER FOR QUANTITY
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.item.find(i => i.id === id);
            if (item) {
                item.quantity = quantity > 0 ? quantity : 1;
                localStorage.setItem("cart", JSON.stringify(state.item));
            }
        },
        clearAllItem: (state) => {
            state.item = [];
            localStorage.removeItem("cart");
        }
    }
})

export const { addItem, removeItem, clearAllItem, updateQuantity } = addToCart.actions
export default addToCart.reducer