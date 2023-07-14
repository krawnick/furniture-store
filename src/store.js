import { configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './features/Categories/catregoriesSlice'
import { productsReducer } from './features/Products/productsSilce'
import axios from 'axios'
import * as api from './config'

export const store = configureStore({
  reducer: { categories: categoriesReducer, products: productsReducer },
  devTools: true,
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
})
