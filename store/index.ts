import { createStore, Store } from "redux";
import Reducers from "./reducers";
import { persistStore, persistReducer, PersistConfig, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { RootState } from "./types";
import { addVehicleAction } from "./actions/tickets.actions";

const persistConfig: PersistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export interface PersistObject {
    store: Store;
    persistor: Persistor;
}
export function initializeStore(): PersistObject {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
}

export const mapStateToProps = (state: RootState) => ({
    tickets: state.TicketReducers.vehicles,
});

export const dispatchProps = () => ({
    _addVehicleAction: addVehicleAction,
});

export type StateProps = ReturnType<typeof mapStateToProps>;

export type StoreProps = StateProps & ReturnType<typeof dispatchProps>;