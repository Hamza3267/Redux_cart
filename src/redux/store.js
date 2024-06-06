import { configureStore } from '@reduxjs/toolkit'
import createReducer from './counter/counterSlice'
export const store = configureStore({
  reducer: {
    cart: createReducer,
  },
})