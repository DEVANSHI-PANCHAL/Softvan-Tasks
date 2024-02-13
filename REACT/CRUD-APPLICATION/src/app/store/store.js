import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react"; // Import setupListeners function
import authReducer from '../../features/auth/authSlice';
// import dashboardReducer from '../../features/dashboard/dashboardSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        // dashboard: dashboardReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

// Add the setupListeners function after configuring the store
setupListeners(store);
