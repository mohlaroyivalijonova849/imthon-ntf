import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../../Data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};

const storeSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // incrementstore: (state, { payload }) => {
    //   const item = state.products.find((item) => item.name === payload);
    //   item.amount++;
    // },
    // decrementstore: (state, { payload }) => {
    //   const item = state.products.find((item) => item.name === payload);
    //   item.amount--;
    // },
  },
});
// export const { incrementstore, decrementstore } = storeSlice.actions;
export default storeSlice.reducer;
