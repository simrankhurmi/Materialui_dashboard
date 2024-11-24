// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from "./dataSlice";


// Create the store
const store = configureStore({
  reducer: {
    data: apiReducer, 
  },
});

export default store;
