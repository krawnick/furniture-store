import { configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './features/Categories/catregoriesSlice'

export const store = configureStore({
  reducer: { categories: categoriesReducer },
  devTools: true,
})
