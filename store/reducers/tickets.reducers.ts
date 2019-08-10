import { Reducer, combineReducers } from "redux";
import Ticket from "../../models/ticket.model";
import ACTIONS from "../types/ActionTypes";
import { AddVehicleAction } from "../types";

const initialState: Ticket[] = [];

const vehicles: Reducer<Ticket[], AddVehicleAction> = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_VEHICLE:
      const ticket: Ticket = {
        vehicle: action.payload,
        entryTime: (new Date()).getTime(),
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