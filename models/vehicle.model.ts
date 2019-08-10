export default interface Vehicle {
  licencePlate?: string;
  vehicleType?: vehicleTyes;
  brand?: string;
  model?: string;
  year?: string;
}

export enum vehicleTyes {
  CAR = 'carro',
  MOTORCYCLE = 'moto',
}