import { configureStore } from '@reduxjs/toolkit';
import textReducer from './textSlice';

// Creating the Redux store with our reducer
export const store = configureStore({
  reducer: {
    text: textReducer,  
  },
});