import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: []
    },
    reducers: {
        deleteProduct: (state, action) => {
            // console.log(state.products[0]);
            const deleteProdId = state.products.findIndex(item => item._id === action.payload) 
            if(deleteProdId !== -1) {
                console.log(deleteProdId);
                state.products.splice(deleteProdId, 1)
            }
        },
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer