import { cartTable } from "@/lib/Drizzle";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

interface CartState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<any>) => {
      console.log("ACTION", actions);
      state.totalQuantity += actions.payload.quantity;
    },
    removeFromCart: (state, actions: PayloadAction<any>) => {
      console.log("ACTIONS", actions);
      state.totalQuantity -= actions.payload.quantity;
    },
    clearCart: (state, actions: PayloadAction<any>) => {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
