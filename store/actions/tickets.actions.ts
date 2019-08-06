import { action } from "typesafe-actions";
import ACTIONS from "../types/ActionTypes";
import Vehicle from "../../models/vehicle.model";

export const addVehicleAction = (vehicle: Vehicle) => action(ACTIONS.ADD_VEHICLE, vehicle);