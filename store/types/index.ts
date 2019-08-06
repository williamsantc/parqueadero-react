import ACTIONS from "./ActionTypes";
import Vehicle from "../../models/vehicle.model";
import { StateType, ActionType } from "typesafe-actions";
import { Store } from "redux";
import actions from "../actions";
import reducers from "../reducers";

export interface AddVehicletAction {
    type: typeof ACTIONS.ADD_VEHICLE;
    payload: Vehicle;
}

export type RootStore = StateType<Store>;
export type RootAction = ActionType<typeof actions>;
export type RootState = StateType<ReturnType<typeof reducers>>;