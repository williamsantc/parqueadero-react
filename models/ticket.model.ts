import Vehicle from './vehicle.model';

export default interface Ticket {
  vehicle: Vehicle;
  entryTime: Date;
}
