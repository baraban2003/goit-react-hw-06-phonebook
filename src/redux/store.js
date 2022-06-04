import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phoneReducer from './phone-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'contacts',
  storage,
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, phoneReducer),
  },
  middleware: middleware,

  //когда продакшн, дев тулзы не нужны
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const storeForExport = {
  store,
  persistor,
};
export default storeForExport;
