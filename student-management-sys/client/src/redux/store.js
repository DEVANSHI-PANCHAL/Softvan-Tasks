import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from 'redux-logger';
// import user1Reducer from "./user/user1Slice";
import themeReducer from './theme/themeSlice';
import studentReducer from './student/studentSlice';
import weatherDataReducer from "./weather/weatherDataSlice";
import thunk from 'redux-thunk';
import userSlice from "./user/userSlice";
// import loggerMiddleware from "./middleware/logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // user: user1Reducer,
  user: userSlice,
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
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk, logger,sagaMiddleware),
});

export const persistor = persistStore(store);
export const dispatch = store.dispatch;

sagaMiddleware.run(rootSaga);