import Vehicle from "./vehicle.model";

export interface CustomModalEvents {
    saveEntry?: (vehicle: Vehicle) => void;
}