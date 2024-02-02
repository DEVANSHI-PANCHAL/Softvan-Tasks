// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer // Add your slice reducer
    // Add other reducers here if needed
  }
});

export default store;
