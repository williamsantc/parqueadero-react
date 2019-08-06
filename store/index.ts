import { createStore, StoreCreator, Store } from "redux";
import Reducers from "./reducers";



export function initializeStore(): Store {
    return createStore(Reducers);
}