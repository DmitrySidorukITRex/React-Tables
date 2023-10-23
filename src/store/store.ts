import { configureStore } from '@reduxjs/toolkit';
import studiesReducer from 'features/Studies/AllStudiesTable/store/studiesSlice';

export const store = configureStore({
  reducer: {
    studies: studiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
