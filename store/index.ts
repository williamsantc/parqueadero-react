import { createStore, Store } from "redux";
import Reducers from "./reducers";
import { persistStore, persistReducer, PersistConfig, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig: PersistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export interface PersistObject {
    store: Store;
    persistor: Persistor;
}
export function initializeStore(): PersistObject  {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
}