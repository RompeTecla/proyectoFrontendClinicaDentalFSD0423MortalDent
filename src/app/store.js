import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../services/userSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import appointmentSlice from '../services/appointmentSlice';
import detailSlice from '../services/detailSlice';

const reducers = combineReducers({
    user: userSlice,
    appointment: appointmentSlice,
    details: detailSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({

    reducer: persistedReducer,
    middleware: [thunk]
});