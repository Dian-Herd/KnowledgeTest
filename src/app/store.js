import { configureStore } from '@reduxjs/toolkit';
import memberReducer from '../features/memberSlice';

export const store = configureStore({
  reducer: {
    member: memberReducer,
  },
});
