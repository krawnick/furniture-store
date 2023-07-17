import { createSlice } from '@reduxjs/toolkit'
import { useLocalStorage } from '../../hooks'

const initState = {
  toCart: [],
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
      state.toCart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.toCart.filter((product) => product.id !== action.payload)
    },
  },
})

export const { addToCart, showCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
