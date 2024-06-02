import { configureStore } from '@reduxjs/toolkit';
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
import contactsReducer from './contactsSlice';
import filterReducer from './filtersSlice';

// const persistConfig = {
//   key: 'userContacts',
//   storage,
//   whitelist: ['items'],
// };

const persistedContactsReducer = persistReducer(
  {
    key: 'userContacts',
    storage,
    whitelist: ['items'],
  },
  contactsReducer,
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);