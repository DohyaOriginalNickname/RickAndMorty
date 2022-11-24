import { configureStore } from '@reduxjs/toolkit';

import { characterApi } from '../serviсes/characterApi';
import { locationsApi } from '../serviсes/locationsApi';
import { episodsApi } from '../serviсes/episodsApi';

export const store = configureStore({
  reducer: { [characterApi.reducerPath]: characterApi.reducer, [locationsApi.reducerPath]: locationsApi.reducer, [episodsApi.reducerPath]: episodsApi.reducer },
  middleware:( getDefaultMiddleware ) => getDefaultMiddleware().concat(characterApi.middleware, locationsApi.middleware, episodsApi.middleware)
});
