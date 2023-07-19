import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: '@@cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      if (state.every((product) => product.id !== action.payload.id)) {
        state.push(action.payload)
      }
    },

    removeFromCart: (state, action) =>
      state.filter((product) => product.id !== action.payload),
  },
})

export const { addToCart, showCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
