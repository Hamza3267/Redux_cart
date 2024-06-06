// src/redux/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cart_items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     setCartItems: (state, action) => {
//       state.cart_items = action.payload;
//     },
//     addToCart: (state, action) => {
//       const existingItem = state.cart_items.find(item => item.id === action.payload.id);
//       if (!existingItem) {
//         state.cart_items.push(action.payload);
//       }
//     },
//   },
// });

// export const { setCartItems, addToCart } = cartSlice.actions;

// export default cartSlice.reducer;
