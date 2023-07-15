import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadProducts = createAsyncThunk(
  '@@products/load-products',
  (_, { extra: { client, api } }) => {
    return client.get(api.BASE_URL)
  }
)

const initialState = {
  status: 'idle',
  error: null,
  list: [],
}

const productsSLice = createSlice({
  name: '@@products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loadProducts.rejected, (state, action) => {
        action.error && console.log('ERROR', action.error)
        state.status = 'rejected'
        state.error = action.payload || action.error
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'received'
        state.list = action.payload.data
      })
  },
})

export const productsReducer = productsSLice.reducer

export const selectVisibleProducts = (category, products) => {
  return products.filter((product) => {
    return category === 'all' ? product : product.category === category
  })
}
