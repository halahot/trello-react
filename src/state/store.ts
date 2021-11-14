import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardReducer from './ducks/card';
import listReducer from './ducks/column';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import nameReducer from './ducks/name';
import { InitialStateType } from './ducks/state';
import { ICard, ITodoList } from '../types';

const reducers = combineReducers({
    lists: listReducer,
    card: cardReducer,
    name: nameReducer
});

//инфу о типах этого конфига не просто найти
const persistConfig: any = {
    key: 'root',
    storage
};

const storageLists = localStorage.getItem('lists')
const name = localStorage.getItem('name')

const defaultLists: ITodoList[] =
    [{ id: 1, title: "Todo", cards: [] },
    { id: 2, title: "In Progress", cards: [] },
    { id: 3, title: "Testing", cards: [] },
    { id: 4, title: "Done", cards: [] }];

export const initialState: InitialStateType = {
    lists: storageLists ? JSON.parse(storageLists) as ITodoList[]: defaultLists,
    name: name ? name : ''
};

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production'
});


export default store;