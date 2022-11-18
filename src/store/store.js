import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { characterApi } from '../servies/characterApi';
import { locationsApi } from '../servies/locationsApi';
import { episodsApi } from '../servies/episodsApi';

export const store = configureStore({
  reducer: { [characterApi.reducerPath]: characterApi.reducer, [locationsApi.reducerPath]: locationsApi.reducer, [episodsApi.reducerPath]: episodsApi.reducer },
  middleware:( getDefaultMiddleware ) => getDefaultMiddleware().concat(characterApi.middleware, locationsApi.middleware, episodsApi.middleware)
});
