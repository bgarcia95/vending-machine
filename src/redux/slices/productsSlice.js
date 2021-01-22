import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DUMMY_DATA } from "../../data/data";

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async (data, thunkAPI) => {
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(DUMMY_DATA);
        }, 2000);
      });
      return response?.map((prod) => ({ ...prod }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productStatusHandler = createAsyncThunk(
  "products/handleOrderStatus",
  async (product, thunkAPI) => {
    try {
      thunkAPI.dispatch(
        addProductToInProcess({
          ...product,
          status: "inProcess",
          createdAt: new Date().toString(),
        })
      );

      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Done");
        }, product.cookingTime);
      });

      if (response) {
        return product;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    stockProducts: [],
    productsInProcess: [],
    productsDispatched: [],
  },
  reducers: {
    addProductToInProcess(state, action) {
      state.productsInProcess.push(action.payload);
    },
  },
  extraReducers: {
    [fetchProductsAsync.fulfilled]: (state, action) => {
      state.stockProducts = action.payload;
    },
    [productStatusHandler.fulfilled]: (state, action) => {
      const { id } = action.payload;

      state.productsInProcess = state.productsInProcess.filter(
        (prod) => prod.id !== id
      );

      state.productsDispatched.push({
        ...action.payload,
        status: "dispatched",
      });
    },
  },
});

const { addProductToInProcess } = productsSlice.actions;

export default productsSlice.reducer;
