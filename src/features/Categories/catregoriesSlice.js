import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
  name: '@@category',
  initialState: 'all',
  reducers: {
    setCategory: (_, { payload }) => payload,
  },
})

export const { setCategory } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer

// export const selectCategory = (state) => state.categories
