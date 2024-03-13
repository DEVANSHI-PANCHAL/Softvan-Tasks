import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from 'redux-logger';
import userReducer from "./user/userSlice";
import themeReducer from './theme/themeSlice';
import studentReducer from './student/studentSlice';
import weatherDataReducer from "./weather/weatherDataSlice";
import thunk from 'redux-thunk';
import loggerMiddleware from "./middleware/logger";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  student: studentReducer,
  weatherData: weatherDataReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk, logger),
});

export const persistor = persistStore(store);
export const dispatch = store.dispatch;