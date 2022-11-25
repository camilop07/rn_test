/** Import Redux Toolkit **/
import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

/** Import Redux **/
import {persistStore, persistReducer} from 'redux-persist';

/** Import Storage **/
import AsyncStorage from '@react-native-async-storage/async-storage';

/** Import Reducers **/
import {combineReducers} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['banks'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export {store, persistor};
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
