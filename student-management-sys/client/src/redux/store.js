// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import userReducer from "./user/userSlice";
// import themeReducer from './theme/themeSlice';
// import studentReducer from './student/studentSlice';
// // import tokenReducer from './token/tokenSlice';

// // Combine all reducers
// const rootReducer = combineReducers({
//   user: userReducer,
//   theme: themeReducer,
//   student: studentReducer,
//   // token: tokenReducer
// });

// // Redux Persist configuration
// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// // Create the persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure the Redux store
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// // Create a persistor
// export const persistor = persistStore(store);

// // Access dispatch function from the store
// export const dispatch = store.dispatch;


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from 'redux-logger';
import userReducer from "./user/userSlice";
import themeReducer from './theme/themeSlice';
import studentReducer from './student/studentSlice';
import loggerMiddleware from "./middleware/logger";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  student: studentReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    
});

export const persistor = persistStore(store);
export const dispatch = store.dispatch;