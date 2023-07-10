import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: '@@cart',
  initState: [],
  reducers: {
    showCart: () => {},
  },
})

export const { showCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
