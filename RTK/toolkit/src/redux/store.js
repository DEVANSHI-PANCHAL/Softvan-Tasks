import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';

export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer // Accessing the reducer property of counterSlice
    }
});
