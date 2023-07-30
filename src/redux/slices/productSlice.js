import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    products: [],
  },
  reducers: {
    loadProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { loadProduct } = productSlice.actions;

export default productSlice.reducer;

