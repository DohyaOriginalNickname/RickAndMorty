import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { characterApi } from '../servies/characterApi';

export const store = configureStore({
  reducer: { [characterApi.reducerPath]: characterApi.reducer },
  middleware:( getDefaultMiddleware ) => getDefaultMiddleware().concat(characterApi.middleware)
});
