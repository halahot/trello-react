import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listReducer from './ducks/card';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import nameReducer from './ducks/name';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const reducers = combineReducers({
    lists: listReducer,
    name: nameReducer
});
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

//инфу о типах этого конфига не просто найти
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: customizedMiddleware
});

export type RootState = ReturnType<typeof store.getState>;

export default store;