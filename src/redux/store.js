import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-reducer';
import phonebookReducer from './phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    contacts: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
