import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { categoriesReducer } from './features/Categories/catregoriesSlice'
import { productsReducer } from './features/Products/productsSilce'
import axios from 'axios'
import * as api from './config'
import { cartReducer } from './features/Cart/cartSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'toCart',
  storage,
  whitelist: ['cart'],
}

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultmiddleware) =>
    getDefaultmiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: {
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      },
    }),
})

export const persistor = persistStore(store)
