import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../slices/productsSlice";

const vendingMachine = {
  vendingMachine: rootReducer,
};

const configStore = configureStore({
  reducer: vendingMachine,
});

export default configStore;
