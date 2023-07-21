import { createSlice } from '@reduxjs/toolkit'

const showItemSlice = createSlice({
  name: '@@showItem',
  initialState: {
    product: {},
    showProduct: false,
  },
  reducers: {
    displayItem: (state, action) => ({
      product: action.payload,
      showProduct: !state.showProduct,
    }),
  },
})

export const { displayItem } = showItemSlice.actions
export const showItemReducer = showItemSlice.reducer
