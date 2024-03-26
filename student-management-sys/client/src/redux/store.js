import { configureStore, combineReducers, getDefaultMiddleware, applyMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pokemonApi } from '../service/pokemonApi';


import userSlice from "./user/userSlice";
import themeReducer from './theme/themeSlice';
import studentReducer from './student/studentSlice';
import weatherDataReducer from "./weather/weatherDataSlice";
import thunk from "redux-thunk";
import { jsonServerApi } from "../service/jsonServerApi";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user: userSlice,
  theme: themeReducer,
  student: studentReducer,
  weatherData: weatherDataReducer,
  [jsonServerApi.reducerPath]: jsonServerApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  thunk,
  logger,
  sagaMiddleware,
  jsonServerApi.middleware,
  pokemonApi.middleware
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };