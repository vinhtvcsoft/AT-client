import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './';
import rootSaga from './rootSaga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['app'],
  }

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...middleware],
});
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};