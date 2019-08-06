import { Reducer, combineReducers } from "redux";
import Ticket from "../../models/ticket.model";
import ACTIONS from "../types/ActionTypes";
import { AddVehicletAction } from "../types";

const initialState: Ticket[] = [];

const vehicles: Reducer<Ticket[], AddVehicletAction> = (state = initialState, action: AddVehicletAction) => {
  switch (action.type) {
    case ACTIONS.ADD_VEHICLE:
      const ticket: Ticket = {
        vehicle: action.payload,
        entryTime: new Date(),
      };
      return [
        ...state,
        ticket,
      ];
    default:
      return state;
  }
};

export default combineReducers({
  vehicles,
});