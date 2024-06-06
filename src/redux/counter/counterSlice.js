import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart_items: [],
  sub_total_price: 0,
  total_price: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      const product = action.payload;
      let currentCartItems = [...state.cart_items];
      const existingItemIndex = currentCartItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex === -1) {
        currentCartItems.push({ ...product, qty: 1, quantity: 1 });

      } else  {
        currentCartItems[existingItemIndex].quantity += 1;
        currentCartItems[existingItemIndex].price *= 2;
      }

      state.cart_items = currentCartItems;
    },
    removeCartItems: (state, action) => {
      const itemToRemoveIndex = state.cart_items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemToRemoveIndex !== -1) {
        if (state.cart_items[itemToRemoveIndex].quantity > 1) {
          state.cart_items[itemToRemoveIndex].quantity -= 1;
          state.cart_items[itemToRemoveIndex].price /= 2;
        } else if(itemToRemoveIndex){
          state.cart_items[itemToRemoveIndex].quantity += 1;
        }
        else {
          state.cart_items.splice(itemToRemoveIndex, 1);
        }
      }
    },
   
  },
});

export const { setCartItems, removeCartItems, addQuantity } = cartSlice.actions;

export default cartSlice.reducer;
