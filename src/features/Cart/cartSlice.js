import { createSlice } from '@reduxjs/toolkit'

const initState = {
  products: [],
  showCart: false,
}

const cartSlice = createSlice({
  name: '@@cart',
  initState,
  reducers: {
    showCart: (state, action) => {
      state.showCart = !action.payload
    },
    addToCart: (state, action) => {
      state.products.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.products.filter((product) => product.id !== action.payload)
    },
  },
})

export const { showCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
